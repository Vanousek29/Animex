// ── IndexedDB image store ─────────────────────────────────────────────────────
// Much larger than localStorage (GBs vs ~5MB). Async API wrapped in helpers.

const IDB_NAME = 'animex_images';
const IDB_VER  = 1;
const IDB_STORE = 'images';

let _idb = null;
function openIDB() {
  if (_idb) return Promise.resolve(_idb);
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(IDB_NAME, IDB_VER);
    req.onupgradeneeded = (e) => {
      e.target.result.createObjectStore(IDB_STORE);
    };
    req.onsuccess = (e) => { _idb = e.target.result; resolve(_idb); };
    req.onerror  = ()  => reject(req.error);
  });
}

async function imgGet(key) {
  const db = await openIDB();
  return new Promise((resolve) => {
    const req = db.transaction(IDB_STORE, 'readonly').objectStore(IDB_STORE).get(key);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror   = () => resolve(null);
  });
}

async function imgSet(key, value) {
  const db = await openIDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, 'readwrite');
    tx.objectStore(IDB_STORE).put(value, key);
    tx.oncomplete = () => resolve();
    tx.onerror    = () => reject(tx.error);
  });
}

async function imgDel(key) {
  const db = await openIDB();
  return new Promise((resolve) => {
    const tx = db.transaction(IDB_STORE, 'readwrite');
    tx.objectStore(IDB_STORE).delete(key);
    tx.oncomplete = () => resolve();
    tx.onerror    = () => resolve();
  });
}

async function imgGetAll() {
  const db = await openIDB();
  return new Promise((resolve) => {
    const tx    = db.transaction(IDB_STORE, 'readonly');
    const store = tx.objectStore(IDB_STORE);
    const result = {};
    const keysReq = store.getAllKeys();
    keysReq.onsuccess = () => {
      const keys = keysReq.result;
      const valsReq = store.getAll();
      valsReq.onsuccess = () => {
        keys.forEach((k, i) => { result[k] = valsReq.result[i]; });
        resolve(result);
      };
      valsReq.onerror = () => resolve(result);
    };
    keysReq.onerror = () => resolve(result);
  });
}

// Migrate any old localStorage img: keys → IndexedDB (runs once, silently)
async function migrateFromLocalStorage() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith('img:')) keys.push(k);
  }
  for (const k of keys) {
    const v = localStorage.getItem(k);
    if (v) { await imgSet(k, v); localStorage.removeItem(k); }
  }
}
migrateFromLocalStorage();

// ── Media manifest ──────────────────────────────────────────────────────────
// On the hosted site we ship media/manifest.json — a flat list of exactly which
// image files exist. With it, each card loads its one real file directly
// instead of firing 4 sequential 404 probes per slot (the old behaviour that
// made the site take ~5s to load). Falls back to probing if no manifest.
let _manifestPromise = null;
function loadManifest() {
  if (_manifestPromise) return _manifestPromise;
  _manifestPromise = fetch('media/manifest.json')
    .then(r => r.ok ? r.json() : null)
    .then(list => Array.isArray(list) ? new Set(list) : null)
    .catch(() => null);
  return _manifestPromise;
}

// ── Path probe ────────────────────────────────────────────────────────────────
const _pathCache = new Map();
function probePath(path) {
  if (_pathCache.has(path)) return _pathCache.get(path);
  const p = new Promise((resolve) => {
    const img = new Image();
    img.onload  = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = path;
  });
  _pathCache.set(path, p);
  return p;
}
async function resolveFirstPath(paths) {
  // Fast path: consult the manifest, pick the first listed file. No network
  // request is wasted on files that don't exist.
  const manifest = await loadManifest();
  if (manifest) {
    for (const p of paths) if (manifest.has(p)) return p;
    return null; // manifest is authoritative — not listed means not present
  }
  // Dev fallback (no manifest): probe sequentially.
  for (const p of paths) {
    if (await probePath(p)) return p;
  }
  return null;
}

// ── Downscale helper ──────────────────────────────────────────────────────────
// Resize a data URL so its longest edge is <= MAX_EDGE. Keeps posters sharp at
// grid size while preventing huge bitmaps from piling up in memory.
const MAX_EDGE = 1200;
function downscaleDataUrl(dataUrl, mime) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const { width: w, height: h } = img;
      if (Math.max(w, h) <= MAX_EDGE) { resolve(dataUrl); return; }
      const scale = MAX_EDGE / Math.max(w, h);
      const cw = Math.round(w * scale), ch = Math.round(h * scale);
      try {
        const canvas = document.createElement('canvas');
        canvas.width = cw; canvas.height = ch;
        canvas.getContext('2d').drawImage(img, 0, 0, cw, ch);
        // PNGs can be enormous as data URLs; re-encode to JPEG unless transparency matters.
        const outType = mime === 'image/png' ? 'image/png' : 'image/jpeg';
        resolve(canvas.toDataURL(outType, 0.85));
      } catch (e) {
        resolve(dataUrl); // canvas tainted or failed — fall back to original
      }
    };
    img.onerror = () => resolve(dataUrl);
    img.src = dataUrl;
  });
}

// ── SmartImage component ──────────────────────────────────────────────────────
function SmartImage({ paths, fallbackSvg, slotKey, alt, className, style, onClick }) {
  const storageKey  = 'img:' + slotKey;
  const [userDropped,  setUserDropped]  = React.useState(null);
  const [resolvedPath, setResolvedPath] = React.useState(null);
  const [ready,        setReady]        = React.useState(false);
  const [over,         setOver]         = React.useState(false);

  // Load persisted image from IndexedDB
  React.useEffect(() => {
    let cancelled = false;
    imgGet(storageKey).then(data => {
      if (!cancelled) { setUserDropped(data || null); setReady(true); }
    });
    return () => { cancelled = true; };
  }, [storageKey]);

  // Probe media/ folder paths
  React.useEffect(() => {
    let cancelled = false;
    setResolvedPath(null);
    resolveFirstPath(paths).then(p => {
      if (!cancelled) setResolvedPath(p);
    });
    return () => { cancelled = true; };
  }, [paths.join('|')]);

  const src = userDropped || resolvedPath || (ready ? fallbackSvg : '');

  const acceptFile = (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = async () => {
      // Downscale large images before storing so we never keep multi-megapixel
      // bitmaps around — decoding many of those at once can freeze the browser/PC.
      const data = await downscaleDataUrl(reader.result, file.type);
      await imgSet(storageKey, data);
      setUserDropped(data);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault(); e.stopPropagation(); setOver(false);
    const file = e.dataTransfer.files && e.dataTransfer.files[0];
    if (file) acceptFile(file);
  };

  const handleClick = (e) => {
    // Click only navigates (when this slot opens a detail page). Replacing an
    // image is drag-and-drop only — no file picker from PC/gallery.
    if (onClick) onClick(e);
  };

  const clear = async (e) => {
    e.stopPropagation();
    await imgDel(storageKey);
    setUserDropped(null);
  };

  return (
    <div
      className={"smart-img " + (className || '') + (over ? ' over' : '') + (userDropped ? ' user' : '')}
      style={style}
      onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); setOver(true); }}
      onDragLeave={(e) => { e.preventDefault(); setOver(false); }}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      {src && <img src={src} alt={alt || ''} draggable="false" loading="lazy" decoding="async" />}
      {userDropped && (
        <button className="smart-img-clear" title="Remove — revert to folder/fallback" onClick={clear}>×</button>
      )}
      <div className="smart-img-hint">Drop image to replace</div>
    </div>
  );
}

// ── Folder path helpers ───────────────────────────────────────────────────────
function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
}
function posterPaths(id) {
  return ['jpg','png','jpeg','webp'].map(ext => `media/posters/${id}.${ext}`);
}
function bannerPaths(id) {
  return ['jpg','png','jpeg','webp'].map(ext => `media/banners/${id}.${ext}`);
}
function charPaths(animeId, charName) {
  const slug = slugify(charName);
  return ['jpg','png','jpeg','webp'].map(ext => `media/characters/${animeId}/${slug}.${ext}`);
}

Object.assign(window, {
  SmartImage, slugify, posterPaths, bannerPaths, charPaths,
  imgGetAll // used by exportZip in app.jsx
});

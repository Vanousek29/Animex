// Main app — homepage grid + routing to detail

// ---- EXPORT FOR HOSTING ----
// Pulls every image you've dropped (stored in your browser's IndexedDB) and
// writes it into the zip as a REAL file under media/, alongside the source.
// Deploy the UNZIPPED contents of this zip — not the plain project download —
// or only the few images already on disk will show up.
async function exportZip(setProgress) {
  setProgress('starting');
  try {
    const zip = new JSZip();

    // 1. Bundle all project source files
    const srcFiles = [
      'Animex.html', 'styles.css', 'data.js',
      'poster.jsx', 'smart-image.jsx', 'detail.jsx', 'app.jsx',
      'media/README.md', 'media/filenames.txt'
    ];
    for (const f of srcFiles) {
      try {
        const res = await fetch(f);
        if (res.ok) {
          const blob = await res.blob();
          zip.file(f, blob);
          // Netlify (and most static hosts) serve index.html at the site root
          // by default — add a copy so the deploy works with zero config.
          if (f === 'Animex.html') zip.file('index.html', blob);
        }
      } catch (e) { /* skip missing */ }
    }

    // 2. Pull images from IndexedDB and map to media/ paths
    const extMap = {
      'image/jpeg': 'jpg', 'image/jpg': 'jpg',
      'image/png': 'png', 'image/webp': 'webp',
      'image/gif': 'gif', 'image/avif': 'avif'
    };

    const allImgs = await imgGetAll();
    const imgEntries = Object.entries(allImgs).filter(([k, v]) =>
      k.startsWith('img:') && v && v.startsWith('data:image/'));
    const includedPaths = new Set(); // every real image path that ends up in the zip
    let done = 0;
    for (const [key, dataUri] of imgEntries) {
      const slotKey = key.slice(4);
      const mime = dataUri.split(';')[0].split(':')[1];
      const ext  = extMap[mime] || 'jpg';

      let path = null;
      if (slotKey.startsWith('poster-')) {
        path = `media/posters/${slotKey.slice(7)}.${ext}`;
      } else if (slotKey.startsWith('banner-')) {
        path = `media/banners/${slotKey.slice(7)}.${ext}`;
      } else if (slotKey.startsWith('char-')) {
        const rest = slotKey.slice(5);
        for (const a of window.ANIME_DATA) {
          if (rest.startsWith(a.id + '-')) {
            const idx = parseInt(rest.slice(a.id.length + 1), 10);
            const charName = a.characters[idx];
            if (charName !== undefined) {
              path = `media/characters/${a.id}/${slugify(charName)}.${ext}`;
            }
            break;
          }
        }
      }
      if (path) {
        // Convert the data URI to a binary Blob HERE (async) instead of letting
        // JSZip base64-decode everything synchronously at generate time — that
        // decode is what froze the UI at "265/265". fetch() on a data: URI is
        // async and cheap, and JSZip can store the Blob directly.
        const imgBlob = await (await fetch(dataUri)).blob();
        zip.file(path, imgBlob);
        includedPaths.add(path);
      }
      done++;
      if (done % 10 === 0 || done === imgEntries.length) {
        setProgress(`images ${done}/${imgEntries.length}`);
        await new Promise(r => setTimeout(r, 0)); // let UI repaint
      }
    }

    // 3. Also include any images already in media/ folder on disk
    const expectedPaths = [];
    for (const a of window.ANIME_DATA) {
      for (const ext of ['jpg','png','jpeg','webp']) {
        expectedPaths.push(`media/posters/${a.id}.${ext}`);
        expectedPaths.push(`media/banners/${a.id}.${ext}`);
        for (const c of a.characters) {
          expectedPaths.push(`media/characters/${a.id}/${slugify(c)}.${ext}`);
        }
      }
    }
    for (const p of expectedPaths) {
      if (zip.files[p]) continue; // already added from IndexedDB
      try {
        const res = await fetch(p);
        if (res.ok) { zip.file(p, await res.blob()); includedPaths.add(p); }
      } catch (e) {}
    }

    // Write the manifest: the hosted site reads this to load each image
    // directly, with zero failed 404 probes (the old cause of slow loads).
    setProgress('writing manifest');
    zip.file('media/manifest.json', JSON.stringify([...includedPaths].sort()));

    // Use STORE (no compression): images are already compressed, so DEFLATE
    // wastes minutes for ~0 size gain. STORE finishes in seconds.
    const blob = await zip.generateAsync(
      { type: 'blob', compression: 'STORE' },
      (meta) => setProgress(`zipping ${Math.round(meta.percent)}%`)
    );
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = 'animex.zip';
    document.body.appendChild(a); a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  } finally {
    setProgress(null);
  }
}

function useBookmarks() {
  const [bookmarks, setBookmarks] = React.useState(() => {
    try {
      const v = localStorage.getItem('animex_bookmarks');
      return v ? JSON.parse(v) : [];
    } catch (e) { return []; }
  });
  const toggle = (id) => {
    setBookmarks(prev => {
      const next = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
      try { localStorage.setItem('animex_bookmarks', JSON.stringify(next)); } catch (e) {}
      return next;
    });
  };
  return [bookmarks, toggle];
}

function Card({ anime, isBookmarked, onToggleBookmark, onOpen, idx }) {
  const slotSrc = React.useMemo(() => makePosterSVG(anime), [anime.id]);
  return (
    <div className="card">
      <div className="poster">
        <SmartImage
          paths={posterPaths(anime.id)}
          fallbackSvg={slotSrc}
          slotKey={`poster-${anime.id}`}
          alt={anime.title + " poster"}
          onClick={() => onOpen(anime.id)}
        />
        <div className="poster-jp">{anime.jpTitle.slice(0, 18)}</div>
        <button
          className={"poster-bookmark " + (isBookmarked ? "on" : "")}
          onClick={(e) => { e.stopPropagation(); onToggleBookmark(anime.id); }}
          aria-label="Bookmark"
        >★</button>
        <div className="poster-corner-mark">№{String(idx + 1).padStart(3, '0')}</div>
        <div className="poster-title-block">
          <div className="title">{anime.title}</div>
          <div className="meta">{anime.year} · {anime.studio.split(' / ')[0]} · ★ {anime.rating != null ? anime.rating.toFixed(1) : 'TBA'}</div>
        </div>
        <div className="card-hover-overlay">
          <div>
            <div className="ho-title">{anime.title}</div>
            <div style={{ marginTop: 6, fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.1em', opacity: 0.7 }}>
              {anime.genres.join(' · ').toUpperCase()}
            </div>
          </div>
          <p className="ho-syn">{anime.synopsis}</p>
          <div className="ho-foot">
            <span>{anime.seasons.filter(s => s.n !== 0).length} SEASONS</span>
            <span>{anime.characters.length} CHARS</span>
            <span>{anime.status.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Home({ onOpen, bookmarks, toggleBookmark, query }) {
  const [collection, setCollection] = React.useState(null);
  const [genre, setGenre] = React.useState(null);
  const [year, setYear] = React.useState(null);
  const [studio, setStudio] = React.useState(null);
  const [view, setView] = React.useState('all'); // all | saved

  const filtered = window.ANIME_DATA.filter(a => {
    if (view === 'saved' && !bookmarks.includes(a.id)) return false;
    if (query && !a.title.toLowerCase().includes(query.toLowerCase()) &&
        !a.creator.toLowerCase().includes(query.toLowerCase()) &&
        !a.studio.toLowerCase().includes(query.toLowerCase())) return false;
    if (collection && !(a.collections || []).includes(collection)) return false;
    if (genre && !a.genres.includes(genre)) return false;
    if (year && a.year !== year) return false;
    if (studio && !a.studio.startsWith(studio)) return false;
    return true;
  });

  const clearAll = () => { setCollection(null); setGenre(null); setYear(null); setStudio(null); };
  const hasFilters = collection || genre || year || studio || query;
  const activeColl = collection && window.COLLECTIONS.find(c => c.id === collection);

  return (
    <React.Fragment>
      <div className="filters">
        <div className="filter-group">
          <span className="filter-label">Collections</span>
          {window.COLLECTIONS.map(c => (
            <button
              key={c.id}
              className={"chip coll " + (collection === c.id ? 'active' : '')}
              onClick={() => setCollection(collection === c.id ? null : c.id)}
              title={c.note}
            >{c.label}</button>
          ))}
        </div>
        <div className="filter-group">
          <span className="filter-label">View</span>
          <button className={"chip " + (view === 'all' ? 'active' : '')} onClick={() => setView('all')}>All</button>
          <button className={"chip " + (view === 'saved' ? 'active' : '')} onClick={() => setView('saved')}>★ Saved · {bookmarks.length}</button>
        </div>
        <div className="filter-group">
          <span className="filter-label">Genre</span>
          {window.ALL_GENRES.slice(0, 8).map(g => (
            <button
              key={g}
              className={"chip " + (genre === g ? 'active' : '')}
              onClick={() => setGenre(genre === g ? null : g)}
            >{g}</button>
          ))}
        </div>
        <div className="filter-group">
          <span className="filter-label">Status</span>
          <select
            className="chip"
            style={{ appearance: 'none', paddingRight: 24 }}
            value={year || ''}
            onChange={(e) => setYear(e.target.value ? Number(e.target.value) : null)}
          >
            <option value="">Year · all</option>
            {window.ALL_YEARS.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
          <select
            className="chip"
            value={studio || ''}
            onChange={(e) => setStudio(e.target.value || null)}
          >
            <option value="">Studio · all</option>
            {window.ALL_STUDIOS.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        {hasFilters && (
          <button className="chip chip-clear" onClick={clearAll}>× Clear</button>
        )}
        <div className="results-meta">
          {filtered.length} of {window.ANIME_DATA.length} TITLES
        </div>
      </div>

      {activeColl && (
        <div className="coll-banner">
          <span className="coll-banner-label">{activeColl.label}</span>
          <span className="coll-banner-note">// {activeColl.note}</span>
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="empty">
          <div className="big">No results.</div>
          <div>// Try removing a filter or searching a different term.</div>
        </div>
      ) : (
        <div className="grid">
          {filtered.map((a) => {
            const realIdx = window.ANIME_DATA.indexOf(a);
            return (
              <Card
                key={a.id}
                anime={a}
                idx={realIdx}
                isBookmarked={bookmarks.includes(a.id)}
                onToggleBookmark={toggleBookmark}
                onOpen={onOpen}
              />
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
}

function App() {
  const [bookmarks, toggleBookmark] = useBookmarks();
  const [route, setRoute] = React.useState(() => {
    const hash = window.location.hash.replace('#', '');
    return hash || 'home';
  });
  const [query, setQuery] = React.useState('');

  // Detail renders as a fixed overlay on top of Home (see .detail in styles.css),
  // so Home stays mounted in normal flow and never loses its scroll position
  // or filters when you open an anime and come back.

  React.useEffect(() => {
    // Use replaceState instead of assigning location.hash — assigning the hash
    // (especially to '') makes the browser scroll the document to the top, which
    // would wipe the homepage scroll position when returning from a detail page.
    const target = route === 'home'
      ? window.location.pathname + window.location.search
      : '#' + route;
    history.replaceState(null, '', target);
  }, [route]);

  React.useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace('#', '') || 'home');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const currentAnime = route !== 'home' ? window.ANIME_DATA.find(a => a.id === route) : null;

  return (
    <React.Fragment>
      <header className="topbar">
        <div className="brand" onClick={() => setRoute('home')}>
          <span className="brand-mark">ANIME<span className="x">X</span></span>
          <span className="brand-jp">アニメ・コーデックス</span>
        </div>
        {!currentAnime && (
          <div className="search-wrap">
            <span className="search-icon">⌕</span>
            <input
              className="search-input"
              placeholder="Search titles, creators, studios…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        )}
      </header>

      <div aria-hidden={currentAnime ? 'true' : undefined}>
        <Home
          onOpen={(id) => setRoute(id)}
          bookmarks={bookmarks}
          toggleBookmark={toggleBookmark}
          query={query}
        />
      </div>
      {currentAnime && (
        <Detail
          anime={currentAnime}
          onBack={() => setRoute('home')}
          isBookmarked={bookmarks.includes(currentAnime.id)}
          onToggleBookmark={toggleBookmark}
        />
      )}
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// Hidden export: the "Export for hosting" button is gone from the UI, but you
// can still build the deploy-ready zip anytime by opening the browser console
// (F12 → Console) and running:   exportAnimex()
// It logs progress and downloads animex.zip when done.
window.exportAnimex = function () {
  return exportZip((p) => {
    if (p) console.log('[Animex export] ' + p);
    else console.log('[Animex export] ✅ done — animex.zip downloaded. Unzip it and deploy that folder.');
  });
};

// Invisible export shortcut — no button on the site. Press Ctrl+Shift+E
// (or ⌘+Shift+E on Mac) to build and download the deploy-ready zip.
let _exportRunning = false;
window.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'E' || e.key === 'e')) {
    e.preventDefault();
    if (_exportRunning) return;
    _exportRunning = true;
    console.log('[Animex export] starting… (triggered by Ctrl/⌘+Shift+E)');
    Promise.resolve(window.exportAnimex()).finally(() => { _exportRunning = false; });
  }
});
console.log('%cAnimex','font-weight:bold');
console.log('Export everything for hosting:  press Ctrl+Shift+E  (or run exportAnimex() )');

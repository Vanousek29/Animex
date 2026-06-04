// Poster + character SVG generators (used as image-slot fallback src)
// User can drop their own image to override.

function hashStr(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function svgDataUrl(svg) {
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg.trim());
}

// Generate a manga-style poster SVG (no title — title is overlaid in DOM)
function makePosterSVG(anime) {
  const hue = anime.accent;
  const variant = hashStr(anime.id) % 3;
  const c1 = `hsl(${hue} 65% 50%)`;
  const c2 = `hsl(${hue} 60% 22%)`;
  const c3 = `hsl(${hue} 80% 70%)`;

  const defs = `
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${c1}"/>
        <stop offset="1" stop-color="${c2}"/>
      </linearGradient>
      <pattern id="dots" width="9" height="9" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.3" fill="rgba(0,0,0,0.5)"/>
      </pattern>
      <pattern id="dotsLight" width="9" height="9" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.3" fill="rgba(255,255,255,0.35)"/>
      </pattern>
    </defs>`;

  let body;
  if (variant === 0) {
    // diagonal stripe
    body = `
      <rect width="400" height="600" fill="url(#g)"/>
      <rect width="400" height="600" fill="url(#dots)" opacity="0.4"/>
      <g transform="rotate(-8 200 300)">
        <rect x="-60" y="220" width="520" height="180" fill="#0a0a0a"/>
        <rect x="-60" y="220" width="520" height="180" fill="url(#dotsLight)" opacity="0.5"/>
      </g>`;
  } else if (variant === 1) {
    // centered block
    body = `
      <rect width="400" height="600" fill="${c1}"/>
      <rect width="400" height="600" fill="url(#dots)" opacity="0.35"/>
      <rect x="40" y="120" width="320" height="240" fill="#0a0a0a" stroke="#0a0a0a" stroke-width="4"/>
      <rect x="40" y="120" width="320" height="240" fill="url(#dotsLight)" opacity="0.45"/>
      <rect x="40" y="380" width="320" height="6" fill="#0a0a0a"/>
      <rect x="40" y="400" width="180" height="6" fill="#0a0a0a"/>`;
  } else {
    // quad-panel
    body = `
      <rect width="400" height="600" fill="${c2}"/>
      <rect width="400" height="600" fill="url(#dots)" opacity="0.3"/>
      <g>
        <rect x="30" y="80" width="170" height="200" fill="#0a0a0a"/>
        <rect x="200" y="80" width="170" height="200" fill="${c1}"/>
        <rect x="30" y="280" width="170" height="200" fill="${c3}"/>
        <rect x="200" y="280" width="170" height="200" fill="#0a0a0a"/>
        <rect x="30" y="80" width="340" height="400" fill="url(#dotsLight)" opacity="0.3"/>
        <line x1="200" y1="80" x2="200" y2="480" stroke="#0a0a0a" stroke-width="6"/>
        <line x1="30" y1="280" x2="370" y2="280" stroke="#0a0a0a" stroke-width="6"/>
      </g>`;
  }

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600" preserveAspectRatio="xMidYMid slice">
    ${defs}
    ${body}
  </svg>`;
  return svgDataUrl(svg);
}

// Character avatar SVG: gradient bg + halftone + big initials
function makeCharSVG(name, baseHue, idx) {
  const hue = (baseHue + idx * 27) % 360;
  const c1 = `hsl(${hue} 60% 48%)`;
  const c2 = `hsl(${hue} 55% 22%)`;
  const initials = name
    .replace(/[^A-Za-z\s]/g, '')
    .split(/\s+/)
    .filter(Boolean)
    .map(s => s.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('');
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${c1}"/>
        <stop offset="1" stop-color="${c2}"/>
      </linearGradient>
      <pattern id="dots" width="6" height="6" patternUnits="userSpaceOnUse">
        <circle cx="1.5" cy="1.5" r="0.9" fill="rgba(0,0,0,0.45)"/>
      </pattern>
    </defs>
    <rect width="200" height="200" fill="url(#g)"/>
    <rect width="200" height="200" fill="url(#dots)" opacity="0.4"/>
    <text x="103" y="138" font-family="'Arial Black','Archivo Black',Impact,sans-serif" font-weight="900" font-size="110" fill="#0a0a0a" text-anchor="middle" letter-spacing="-4">${initials}</text>
    <text x="100" y="135" font-family="'Arial Black','Archivo Black',Impact,sans-serif" font-weight="900" font-size="110" fill="#f5f1e8" text-anchor="middle" letter-spacing="-4">${initials}</text>
  </svg>`;
  return svgDataUrl(svg);
}

// Cinematic banner SVG (wider aspect)
function makeBannerSVG(anime) {
  const hue = anime.accent;
  const c1 = `hsl(${hue} 60% 48%)`;
  const c2 = `hsl(${hue} 55% 18%)`;
  const word = (anime.title.split(' ')[0] || '').toUpperCase();
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 600" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="${c2}"/>
        <stop offset="0.5" stop-color="${c1}"/>
        <stop offset="1" stop-color="${c2}"/>
      </linearGradient>
      <pattern id="dots" width="12" height="12" patternUnits="userSpaceOnUse">
        <circle cx="3" cy="3" r="1.6" fill="rgba(0,0,0,0.4)"/>
      </pattern>
      <pattern id="dotsLight" width="12" height="12" patternUnits="userSpaceOnUse">
        <circle cx="3" cy="3" r="1.6" fill="rgba(255,255,255,0.25)"/>
      </pattern>
    </defs>
    <rect width="1600" height="600" fill="url(#g)"/>
    <rect width="1600" height="600" fill="url(#dots)" opacity="0.4"/>
    <text x="800" y="430" font-family="'Arial Black','Archivo Black',Impact,sans-serif" font-weight="900" font-size="420" fill="rgba(245,241,232,0.08)" text-anchor="middle" letter-spacing="-20">${word}</text>
    <g transform="rotate(-6 800 300)">
      <rect x="-200" y="240" width="2000" height="160" fill="#0a0a0a"/>
      <rect x="-200" y="240" width="2000" height="160" fill="url(#dotsLight)" opacity="0.45"/>
    </g>
  </svg>`;
  return svgDataUrl(svg);
}

Object.assign(window, { makePosterSVG, makeCharSVG, makeBannerSVG, hashStr });

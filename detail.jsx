// Detail page

function Detail({ anime, onBack, isBookmarked, onToggleBookmark }) {
  const [tab, setTab] = React.useState('overview');
  const bannerSrc = React.useMemo(() => makeBannerSVG(anime), [anime.id]);
  const rootRef = React.useRef(null);

  // Detail is its own scroll container (a fixed overlay) so the homepage behind
  // it keeps its scroll position. Reset to top when the anime changes.
  React.useEffect(() => {
    if (rootRef.current) rootRef.current.scrollTop = 0;
  }, [anime.id]);

  const totalEps = anime.seasons.reduce((s, x) => s + x.episodes, 0);

  return (
    <div className="detail" ref={rootRef}>
      <button className="btn back-btn" onClick={onBack}>← Back to Codex</button>

      <div className="banner">
        <SmartImage
          paths={bannerPaths(anime.id)}
          fallbackSvg={bannerSrc}
          slotKey={`banner-${anime.id}`}
          alt={anime.title + " banner"}
        />
        <div className="banner-jp">{anime.jpTitle}</div>
        <div className="banner-id">FILE №{String(window.ANIME_DATA.indexOf(anime) + 1).padStart(3, '0')}</div>

        <div className="banner-title-wrap">
          <div className="banner-title">{anime.title}</div>
          <div className="banner-actions">
            <button
              className={"btn " + (isBookmarked ? "primary" : "")}
              onClick={() => onToggleBookmark(anime.id)}
            >
              {isBookmarked ? '★ Saved' : '☆ Save'}
            </button>
            <button className="btn primary">▶ Watch</button>
          </div>
        </div>
      </div>

      <div className="meta-strip">
        <div className="meta-cell">
          <div className="meta-key">Status</div>
          <div className="meta-val">
            <span className={"status-dot " + (anime.status === 'Finished' ? 'finished' : '')} />
            {anime.status}
          </div>
        </div>
        <div className="meta-cell">
          <div className="meta-key">Seasons</div>
          <div className="meta-val">{anime.seasons.filter(s => s.n !== 0).length}</div>
        </div>
        <div className="meta-cell">
          <div className="meta-key">Episodes</div>
          <div className="meta-val">{totalEps}</div>
        </div>
        <div className="meta-cell">
          <div className="meta-key">Characters</div>
          <div className="meta-val">{anime.characters.length}</div>
        </div>
        <div className="meta-cell">
          <div className="meta-key">Rating</div>
          <div className="meta-val">★ {anime.rating != null ? anime.rating.toFixed(1) : 'TBA'}</div>
        </div>
        <div className="meta-cell">
          <div className="meta-key">Aired</div>
          <div className="meta-val">{anime.year}{anime.endYear && anime.endYear !== anime.year ? `–${anime.endYear}` : (anime.status === 'Airing' ? '–' : '')}</div>
        </div>
      </div>

      <div className="tabs">
        <button className={"tab " + (tab === 'overview' ? 'active' : '')} onClick={() => setTab('overview')}>
          Overview
        </button>
        <button className={"tab " + (tab === 'characters' ? 'active' : '')} onClick={() => setTab('characters')}>
          Characters <span className="count">{anime.characters.length}</span>
        </button>
        <button className={"tab " + (tab === 'seasons' ? 'active' : '')} onClick={() => setTab('seasons')}>
          Seasons <span className="count">{anime.seasons.length}</span>
        </button>
      </div>

      <div className="tab-body">
        {tab === 'overview' && <OverviewTab anime={anime} />}
        {tab === 'characters' && <CharactersTab anime={anime} />}
        {tab === 'seasons' && <SeasonsTab anime={anime} />}
      </div>
    </div>
  );
}

function OverviewTab({ anime }) {
  return (
    <div className="overview-grid">
      <div>
        <div className="synopsis-eyebrow">// Synopsis</div>
        <p className="synopsis">{anime.synopsis}</p>

        <div style={{ marginTop: 32 }}>
          <div className="synopsis-eyebrow">// Genre Tags</div>
          <div className="genre-tags">
            {anime.genres.map(g => <span key={g} className="genre-tag">{g}</span>)}
          </div>
        </div>

        {anime.openingTheme && (
          <div className="info-block">
            <div className="synopsis-eyebrow">// Opening Theme</div>
            <div className="theme-card">
              <div className="theme-icon">♪</div>
              <div>
                <div className="theme-song">"{anime.openingTheme.song}"</div>
                <div className="theme-artist">{anime.openingTheme.artist}</div>
              </div>
            </div>
          </div>
        )}

        {anime.relatedWorks && anime.relatedWorks.length > 0 && (
          <div className="info-block">
            <div className="synopsis-eyebrow">// Related Works</div>
            <ul className="related-list">
              {anime.relatedWorks.map(r => <li key={r}>{r}</li>)}
            </ul>
          </div>
        )}

        {anime.awards && anime.awards.length > 0 && (
          <div className="info-block">
            <div className="synopsis-eyebrow">// Awards & Recognition</div>
            <ul className="awards-list">
              {anime.awards.map(a => <li key={a}><span className="trophy">★</span>{a}</li>)}
            </ul>
          </div>
        )}
      </div>

      <aside className="aside">
        <h4>Production</h4>
        <div className="aside-row">
          <span className="k">Creator</span>
          <span className="v">{anime.creator}</span>
        </div>
        <div className="aside-row">
          <span className="k">Studio</span>
          <span className="v">{anime.studio}</span>
        </div>
        {anime.demographic && (
          <div className="aside-row">
            <span className="k">Demographic</span>
            <span className="v">{anime.demographic}</span>
          </div>
        )}
        {anime.source && (
          <React.Fragment>
            <div className="aside-row">
              <span className="k">Source</span>
              <span className="v">{anime.source.type}</span>
            </div>
            {anime.source.publisher && (
              <div className="aside-row">
                <span className="k">Publisher</span>
                <span className="v">{anime.source.publisher}</span>
              </div>
            )}
          </React.Fragment>
        )}
        <div className="aside-row">
          <span className="k">Premiered</span>
          <span className="v">{anime.year}</span>
        </div>
        <div className="aside-row">
          <span className="k">JP Title</span>
          <span className="v">{anime.jpTitle}</span>
        </div>
        <div className="aside-row">
          <span className="k">Status</span>
          <span className="v">{anime.status}</span>
        </div>
        <div className="aside-row">
          <span className="k">Score</span>
          <span className="v">{anime.rating != null ? `★ ${anime.rating.toFixed(1)} / 10` : 'TBA'}</span>
        </div>

        {anime.streaming && anime.streaming.length > 0 && (
          <React.Fragment>
            <h4 style={{ marginTop: 24 }}>Where to Watch</h4>
            <div className="stream-list">
              {anime.streaming.map(s => (
                <span key={s} className="stream-chip">{s}</span>
              ))}
            </div>
          </React.Fragment>
        )}
      </aside>
    </div>
  );
}

function CharCard({ name, anime, idx }) {
  const src = React.useMemo(() => makeCharSVG(name, anime.accent, idx), [name, anime.id, idx]);
  return (
    <div className="char-card">
      <div className="char-avatar">
        <SmartImage
          paths={charPaths(anime.id, name)}
          fallbackSvg={src}
          slotKey={`char-${anime.id}-${idx}`}
          alt={name}
        />
      </div>
      <div className="char-name">
        {name}
        <span className="char-num">CHR · {String(idx + 1).padStart(2, '0')}</span>
      </div>
    </div>
  );
}

function CharactersTab({ anime }) {
  return (
    <div className="chars-grid">
      {anime.characters.map((c, i) => (
        <CharCard key={c + i} name={c} anime={anime} idx={i} />
      ))}
    </div>
  );
}

function SeasonsTab({ anime }) {
  const maxEps = Math.max(...anime.seasons.map(s => s.episodes));
  return (
    <div className="season-list">
      {anime.seasons.map((s, i) => (
        <div className="season-row" key={i}>
          <div className="season-num">{s.n === 0 ? '◆' : String(s.n).padStart(2, '0')}</div>
          <div className="season-year">{s.year}</div>
          <div className="season-title">{s.title}</div>
          <div className="season-eps">{s.episodes} {s.episodes === 1 ? 'EP' : 'EPS'}</div>
          <div className="season-bar" style={{ '--prog': `${(s.episodes / maxEps) * 100}%` }} />
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { Detail });

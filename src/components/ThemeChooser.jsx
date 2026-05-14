import { useState, useEffect } from 'react';
import './ThemeChooser.css';

const PALETTES = [
  {
    group: 'Vanta',
    swatches: [
      { name: 'Black',  hex: '#000000', isDark: true  },
      { name: 'Navy',   hex: '#0d2b55', isDark: true  },
      { name: 'Sky',    hex: '#b8cfe0', isDark: false },
      { name: 'Sand',   hex: '#ede5d8', isDark: false },
      { name: 'White',  hex: '#ffffff', isDark: false },
    ],
  },
  {
    group: 'Black & Gold',
    swatches: [
      { name: 'Matte Black', hex: '#1a1a1a', isDark: true  },
      { name: 'Jet Black',   hex: '#0d0d0d', isDark: true  },
      { name: 'Glitter',     hex: '#c9a040', isDark: false },
      { name: 'Glisten',     hex: '#dcc68a', isDark: false },
      { name: 'Vanilla',     hex: '#f5f0e8', isDark: false },
    ],
  },
];

// Default accent pairings when only one color is picked
const DEFAULT_ACCENT = {
  dark:  '#c9a96e', // gold on dark
  light: '#1a1a1a', // near-black on light
};

function blend(hex, amount) {
  const n = parseInt(hex.replace('#', ''), 16);
  const r = Math.min(255, Math.max(0, ((n >> 16) & 0xff) + amount));
  const g = Math.min(255, Math.max(0, ((n >> 8)  & 0xff) + amount));
  const b = Math.min(255, Math.max(0, ( n        & 0xff) + amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

function hex8(hex, alpha) {
  // alpha 0–1 → two hex digits appended
  const a = Math.round(alpha * 255).toString(16).padStart(2, '0');
  return hex + a;
}

const DEFAULTS = {
  '--navy':             '#000000',
  '--navy-light':       '#1a1a1a',
  '--navy-pop':         '#111111',
  '--footer-bg':        '#000000',
  '--champagne':        '#c9a96e',
  '--champagne-light':  '#e8d5b0',
  '--champagne-border': 'rgba(201,169,110,0.25)',
  '--text-on-dark':     'rgba(255,255,255,0.82)',
  '--card-border':      'rgba(255,255,255,0.08)',
  '--white':            '#ffffff',
  '--off-white':        '#ffffff',
  '--section-alt':      '#f0ede8',
  '--text-dark':        '#111111',
  '--text-mid':         '#555555',
  '--slate':            '#888888',
};

function applyTheme(primary, accent) {
  const root = document.documentElement;

  if (!primary) {
    // Reset every variable explicitly so nothing lingers from a previous theme
    Object.entries(DEFAULTS).forEach(([k, v]) => root.style.setProperty(k, v));
    return;
  }

  const baseHex    = primary.hex;
  const baseDark   = primary.isDark;

  // Determine accent color
  const accentHex  = accent
    ? accent.hex
    : (baseDark ? DEFAULT_ACCENT.dark : DEFAULT_ACCENT.light);
  const accentDark = accent ? accent.isDark : !baseDark;

  // ── Base (dark sections: hero, services, testimonial, navbar) ──
  root.style.setProperty('--navy',       baseHex);
  root.style.setProperty('--navy-light', blend(baseHex, baseDark ?  22 : -22));
  root.style.setProperty('--navy-pop',   blend(baseHex, baseDark ?  12 : -12));
  root.style.setProperty('--footer-bg',  blend(baseHex, baseDark ?  -8 : -50));

  // ── Accent (buttons, labels, highlights) ──
  root.style.setProperty('--champagne',        accentHex);
  root.style.setProperty('--champagne-light',  blend(accentHex, accentDark ? 30 : -20));
  root.style.setProperty('--champagne-border', hex8(accentHex, 0.25));

  // ── Text ON dark-background sections ──
  if (baseDark) {
    root.style.setProperty('--text-on-dark',  'rgba(255,255,255,0.85)');
    root.style.setProperty('--card-border',   'rgba(255,255,255,0.09)');
  } else {
    root.style.setProperty('--text-on-dark',  'rgba(0,0,0,0.80)');
    root.style.setProperty('--card-border',   'rgba(0,0,0,0.10)');
  }

  // ── Light sections (whyus, process, about) ──
  if (baseDark) {
    root.style.setProperty('--white',       '#ffffff');
    root.style.setProperty('--off-white',   '#ffffff');
    root.style.setProperty('--section-alt', blend(accentHex, 90));
    root.style.setProperty('--text-dark',   '#111111');
    root.style.setProperty('--text-mid',    '#555555');
    root.style.setProperty('--slate',       '#888888');
  } else {
    root.style.setProperty('--white',       baseHex);
    root.style.setProperty('--off-white',   baseHex);
    root.style.setProperty('--section-alt', blend(baseHex, -18));
    root.style.setProperty('--text-dark',   '#111111');
    root.style.setProperty('--text-mid',    '#555555');
    root.style.setProperty('--slate',       '#888888');
  }
}

function applyAllBlack() {
  const root = document.documentElement;
  root.style.setProperty('--navy',          '#000000');
  root.style.setProperty('--navy-light',    '#111111');
  root.style.setProperty('--navy-pop',      '#0a0a0a');
  root.style.setProperty('--footer-bg',     '#000000');
  root.style.setProperty('--champagne',     '#c9a96e');
  root.style.setProperty('--champagne-light','#e8d5b0');
  root.style.setProperty('--champagne-border','rgba(201,169,110,0.25)');
  root.style.setProperty('--text-on-dark',  'rgba(255,255,255,0.85)');
  root.style.setProperty('--card-border',   'rgba(255,255,255,0.09)');
  // Light sections also go dark
  root.style.setProperty('--white',         '#0d0d0d');
  root.style.setProperty('--off-white',     '#111111');
  root.style.setProperty('--section-alt',   '#161616');
  root.style.setProperty('--text-dark',     '#f0f0f0');
  root.style.setProperty('--text-mid',      'rgba(255,255,255,0.65)');
  root.style.setProperty('--slate',         'rgba(255,255,255,0.45)');
}

export default function ThemeChooser() {
  const [selected, setSelected]   = useState([]);
  const [allBlack, setAllBlack]   = useState(false);
  const [open, setOpen]           = useState(false);

  const toggle = (swatch) => {
    setAllBlack(false);
    setSelected(prev => {
      const exists = prev.find(s => s.hex === swatch.hex);
      if (exists) return prev.filter(s => s.hex !== swatch.hex);
      if (prev.length >= 2) return [prev[1], swatch];
      return [...prev, swatch];
    });
  };

  const handleAllBlack = () => {
    setSelected([]);
    setAllBlack(a => !a);
  };

  useEffect(() => {
    if (allBlack) {
      applyAllBlack();
    } else {
      applyTheme(selected[0] ?? null, selected[1] ?? null);
    }
  }, [selected, allBlack]);

  const reset = () => { setSelected([]); setAllBlack(false); };

  const previewBg = selected.length === 2
    ? `linear-gradient(135deg, ${selected[0].hex} 50%, ${selected[1].hex} 50%)`
    : selected.length === 1 ? selected[0].hex : 'transparent';

  return (
    <>
      <button
        className="theme-fab"
        onClick={() => setOpen(o => !o)}
        title="Theme Chooser"
        style={selected.length > 0 ? { background: previewBg, border: '2px solid #c9a96e' } : {}}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2a10 10 0 0 1 0 20"/>
          <path d="M2 12h20"/>
        </svg>
      </button>

      {open && (
        <div className="theme-panel">
          <div className="theme-panel__header">
            <span className="theme-panel__title">Theme</span>
            <button className="theme-panel__close" onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="theme-preset-row">
            <button
              className={`theme-preset-btn ${allBlack ? 'theme-preset-btn--active' : ''}`}
              onClick={handleAllBlack}
            >
              <span className="theme-preset-btn__dot" style={{ background: '#000', border: '1px solid #c9a96e' }} />
              All Black
            </button>
          </div>

          <button className="theme-reset" onClick={reset}>Reset to Default</button>
        </div>
      )}
    </>
  );
}

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

function applyTheme(primary, accent) {
  const root = document.documentElement;

  if (!primary) {
    root.removeAttribute('style');
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

export default function ThemeChooser() {
  const [selected, setSelected] = useState([]);
  const [open, setOpen]         = useState(false);

  const toggle = (swatch) => {
    setSelected(prev => {
      const exists = prev.find(s => s.hex === swatch.hex);
      if (exists) return prev.filter(s => s.hex !== swatch.hex);
      if (prev.length >= 2) return [prev[1], swatch];
      return [...prev, swatch];
    });
  };

  useEffect(() => {
    applyTheme(selected[0] ?? null, selected[1] ?? null);
  }, [selected]);

  const reset = () => setSelected([]);

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

          {/* Live preview bar */}
          <div className="theme-panel__bar" style={{ background: previewBg }}>
            {selected.length === 0 && <span className="theme-panel__bar-hint">Pick a base color</span>}
            {selected.length === 1 && (
              <span className="theme-panel__bar-hint" style={{ color: selected[0].isDark ? '#fff' : '#111' }}>
                {selected[0].name} — now pick an accent
              </span>
            )}
            {selected.length === 2 && (
              <span className="theme-panel__bar-hint" style={{ color: selected[0].isDark ? '#fff' : '#111' }}>
                {selected[0].name} + {selected[1].name}
              </span>
            )}
          </div>

          {PALETTES.map(palette => (
            <div key={palette.group} className="theme-group">
              <span className="theme-group__label">{palette.group}</span>
              <div className="theme-group__swatches">
                {palette.swatches.map(sw => {
                  const selIndex = selected.findIndex(s => s.hex === sw.hex);
                  const isSelected = selIndex !== -1;
                  const role = isSelected ? (selIndex === 0 ? 'Base' : 'Accent') : null;
                  return (
                    <button
                      key={sw.hex}
                      className={`theme-swatch ${isSelected ? 'theme-swatch--active' : ''}`}
                      style={{
                        background: sw.hex,
                        outline: isSelected
                          ? `3px solid ${sw.isDark ? '#c9a96e' : '#1a1a1a'}`
                          : '2px solid transparent',
                      }}
                      onClick={() => toggle(sw)}
                      title={`${sw.name}${role ? ` (${role})` : ''}`}
                    >
                      {isSelected && (
                        <span
                          className="theme-swatch__badge"
                          style={{
                            background: sw.isDark ? '#c9a96e' : '#1a1a1a',
                            color:      sw.isDark ? '#000'    : '#fff',
                          }}
                        >
                          {selIndex === 0 ? 'B' : 'A'}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          <button className="theme-reset" onClick={reset}>Reset to Default</button>
        </div>
      )}
    </>
  );
}

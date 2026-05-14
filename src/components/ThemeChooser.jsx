import { useState, useEffect } from 'react';
import './ThemeChooser.css';

const PALETTES = [
  {
    group: 'Vanta',
    swatches: [
      { name: 'Black',      hex: '#000000', text: '#ffffff' },
      { name: 'Navy',       hex: '#0d2b55', text: '#ffffff' },
      { name: 'Sky',        hex: '#b8cfe0', text: '#0d2b55' },
      { name: 'Sand',       hex: '#ede5d8', text: '#0d2b55' },
      { name: 'White',      hex: '#ffffff', text: '#0d2b55' },
    ],
  },
  {
    group: 'Black & Gold',
    swatches: [
      { name: 'Matte Black', hex: '#1a1a1a', text: '#c9a040' },
      { name: 'Jet Black',   hex: '#0d0d0d', text: '#c9a040' },
      { name: 'Glitter',     hex: '#c9a040', text: '#0d0d0d' },
      { name: 'Glisten',     hex: '#dcc68a', text: '#0d0d0d' },
      { name: 'Vanilla',     hex: '#f5f0e8', text: '#0d0d0d' },
    ],
  },
];

function applyTheme(primary, accent) {
  const root = document.documentElement;
  if (!primary && !accent) {
    root.removeAttribute('style');
    return;
  }
  if (primary && !accent) {
    root.style.setProperty('--navy', primary.hex);
    root.style.setProperty('--navy-light', shiftColor(primary.hex, 20));
    root.style.setProperty('--champagne', primary.text);
    root.style.setProperty('--champagne-light', shiftColor(primary.text, 20));
  } else if (primary && accent) {
    root.style.setProperty('--navy', primary.hex);
    root.style.setProperty('--navy-light', shiftColor(primary.hex, 20));
    root.style.setProperty('--champagne', accent.hex);
    root.style.setProperty('--champagne-light', shiftColor(accent.hex, 20));
  }
}

function shiftColor(hex, amount) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.min(255, ((n >> 16) & 0xff) + amount);
  const g = Math.min(255, ((n >> 8) & 0xff) + amount);
  const b = Math.min(255, (n & 0xff) + amount);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

export default function ThemeChooser() {
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);

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

  return (
    <>
      <button className="theme-fab" onClick={() => setOpen(o => !o)} title="Theme Chooser">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a10 10 0 0 1 0 20" />
          <path d="M2 12h20" />
        </svg>
      </button>

      {open && (
        <div className="theme-panel">
          <div className="theme-panel__header">
            <span className="theme-panel__title">Theme</span>
            <button className="theme-panel__close" onClick={() => setOpen(false)}>✕</button>
          </div>

          <p className="theme-panel__hint">
            {selected.length === 0 && 'Pick 1 or 2 colors'}
            {selected.length === 1 && `Base: ${selected[0].name} — pick an accent or reset`}
            {selected.length === 2 && `${selected[0].name} + ${selected[1].name}`}
          </p>

          {selected.length > 0 && (
            <div className="theme-panel__preview">
              {selected.map(s => (
                <div key={s.hex} className="theme-panel__preview-chip" style={{ background: s.hex, color: s.text }}>
                  {s.name}
                </div>
              ))}
            </div>
          )}

          {PALETTES.map(palette => (
            <div key={palette.group} className="theme-group">
              <span className="theme-group__label">{palette.group}</span>
              <div className="theme-group__swatches">
                {palette.swatches.map(sw => {
                  const isSelected = selected.find(s => s.hex === sw.hex);
                  const selIndex = selected.findIndex(s => s.hex === sw.hex);
                  return (
                    <button
                      key={sw.hex}
                      className={`theme-swatch ${isSelected ? 'theme-swatch--active' : ''}`}
                      style={{ background: sw.hex, borderColor: sw.text + '55' }}
                      onClick={() => toggle(sw)}
                      title={sw.name}
                    >
                      {isSelected && (
                        <span className="theme-swatch__badge" style={{ background: sw.text, color: sw.hex }}>
                          {selIndex + 1}
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

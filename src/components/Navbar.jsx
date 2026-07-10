import { useState, useEffect } from 'react';
import './Navbar.css';

const LINKS = [
  { label: 'The Model', href: '#model' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Trust', href: '#trust' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setMenuOpen(false)}>
          Backstage<span>Operations</span>
        </a>

        <nav className={`nav__menu ${menuOpen ? 'nav__menu--open' : ''}`}>
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="nav__link"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn--ghost nav__cta"
            onClick={() => setMenuOpen(false)}
          >
            Request Partnership
          </a>
        </nav>

        <button
          className={`nav__burger ${menuOpen ? 'nav__burger--open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span />
        </button>
      </div>
    </header>
  );
}

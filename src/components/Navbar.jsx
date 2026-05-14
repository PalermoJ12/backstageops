import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Services', 'About', 'Process'];

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#hero" className="navbar__logo">
          <img src={logo} alt="Backstage Operations" className="navbar__logo-img" />
          <span className="navbar__logo-text">Backstage<em>Operations</em></span>
        </a>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="navbar__link"
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href="https://calendar.app.google/5knfkqEAU7a1XNGe9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary navbar__cta"
            onClick={() => setMenuOpen(false)}
          >
            Book a Consultation
          </a>
        </nav>

        <button
          className="navbar__burger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}

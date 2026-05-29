import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">
            Backstage<em>Operations</em>
          </span>
          <p className="footer__copy">© 2026 Backstage Operations. All rights reserved.</p>
          <p className="footer__bir">
            BIR Registered May 2026.
          </p>
        </div>

        <nav className="footer__links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer__social">
          <a href="https://www.facebook.com/profile.php?id=61589541489688" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
            Facebook
          </a>
          <a href="https://www.instagram.com/bckstg.ops/" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
            Instagram
          </a>
          <a href="https://www.linkedin.com/company/backstage-operations" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

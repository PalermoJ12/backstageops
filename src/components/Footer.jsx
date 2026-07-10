import './Footer.css';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="footer__logo">
            Backstage<span>Operations</span>
          </a>
          <p className="footer__tag">The invisible backstage for creatives who build the spotlight.</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <a href="#model">The Model</a>
          <a href="#expertise">Expertise</a>
          <a href="#trust">Trust</a>
          <a href="#contact">Request Partnership</a>
        </nav>

        <div className="footer__social">
          <a href="https://www.instagram.com/bckstg.ops/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
          <a href="https://www.linkedin.com/company/backstage-operations" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
          <a href="https://www.facebook.com/profile.php?id=61589541489688" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p className="footer__copy">© {year} Backstage Operations. All rights reserved.</p>
        <p className="footer__legal-note">BIR Registered May 2026.</p>
      </div>
    </footer>
  );
}

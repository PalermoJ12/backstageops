import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__overlay" />
      <div className="container hero__content">
        <span className="section-label">Premium Administrative Support</span>
        <h1 className="hero__headline">
          We Manage Your Backstage,<br />
          So You Can <em>Own the Stage.</em>
        </h1>
        <p className="hero__sub">
          Premium, systems-driven administrative support for New Jersey business owners
          who are ready to scale without the burnout.
        </p>
        <a
          href="https://calendar.app.google/5knfkqEAU7a1XNGe9"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary hero__cta"
        >
          Schedule Your Discovery Call
        </a>
      </div>
    </section>
  );
}

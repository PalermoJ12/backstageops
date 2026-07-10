import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grain" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="eyebrow">The Invisible Backstage</span>
          <h1 className="display hero__headline">
            You build the spotlight.<br />
            We run the <em>backstage.</em>
          </h1>
          <p className="lede hero__sub">
            Premium, fully managed operations for specialized founders, elite
            creatives, and unconventional businesses. From tour schedules and
            production workflows to back-office systems, we clear your backlog
            while you sleep.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--solid">Inquire for Partnership</a>
            <a href="#model" className="hero__scroll">
              See how it works
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

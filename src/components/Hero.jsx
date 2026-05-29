import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__overlay" />
      <div className="container hero__content">
        <span className="section-label">Virtual Assistant & Operations Support</span>
        <h1 className="hero__headline">
          We Work While You Sleep.<br />
          <em>Wake Up to 'Done.'</em>
        </h1>
        <p className="hero__sub">
          Stop playing admin and start being the CEO. Backstage Operations provides fully managed virtual support that clears your backlog overnight, giving small business owners their mornings back without the training or management overhead.
        </p>
        <a
          href="https://book.titan.email/discovery-call"
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

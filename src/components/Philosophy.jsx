import portrait from '../assets/hanna-cutout.jpeg';
import './Philosophy.css';

export default function Philosophy() {
  return (
    <section className="philosophy section" id="trust">
      <div className="container philosophy__inner">
        <figure className="philosophy__media reveal">
          <div className="philosophy__panel" aria-hidden="true" />
          <img
            src={portrait}
            alt="Founder of Backstage Operations"
            width="907"
            height="1134"
            loading="lazy"
            decoding="async"
          />
          <div className="philosophy__frame" aria-hidden="true" />
        </figure>

        <div className="philosophy__body reveal">
          <span className="eyebrow">Our Philosophy</span>
          <blockquote className="philosophy__quote display">
            For a long time, a premium Executive Assistant was a privilege reserved
            for corporate CEOs. We built Backstage Operations because the touring
            artist, the master artisan, and the independent specialist deserve that
            <em> exact same leverage.</em> You don't need a corporate office to have
            elite operational support.
          </blockquote>
          <p className="philosophy__attr">Backstage Operations</p>
        </div>
      </div>
    </section>
  );
}

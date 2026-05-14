import './Testimonial.css';

export default function Testimonial() {
  return (
    <section className="testimonial">
      <div className="container">
        <span className="section-label">Trust & Social Proof</span>
        <div className="testimonial__card">
          <div className="testimonial__quote-mark">"</div>
          <p className="testimonial__text">
            Hanna and her team have been an absolute game-changer for my business. Her
            reliability is unmatched, and having her trained VAs onboard meant I never had
            to worry about a drop in quality. They didn't just take tasks off my plate —
            they built systems that actually work.
          </p>
          <div className="testimonial__author">
            <div className="testimonial__avatar">C</div>
            <div>
              <p className="testimonial__name">Current Client</p>
              <p className="testimonial__role">Business Owner, US East Coast</p>
            </div>
          </div>
        </div>

        <p className="testimonial__subtext">
          Proudly supporting businesses across the US East Coast.
        </p>
      </div>
    </section>
  );
}

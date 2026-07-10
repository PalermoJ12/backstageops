import './Testimonial.css';

const testimonials = [
  {
    text: "One of the best virtual assistants I've ever worked with. Every task on time, consistently high quality. Thanks to her I've tripled my productivity and freed up my schedule. I plan to continue for the long term.",
    name: 'E.H.S. Allah',
    title: 'Founder, Hype',
    initial: 'E',
  },
  {
    text: 'A perfect person to work with. Dedicated to my business, flexible with time, and genuinely easy to communicate with.',
    name: 'J. Anwar',
    title: 'Touring Event DJ',
    initial: 'J',
  },
  {
    text: 'She took real responsibility off my plate. I finally stopped carrying everything myself.',
    name: 'N. Mathis',
    title: 'Independent Wig Designer',
    initial: 'N',
  },
];

export default function Testimonial() {
  return (
    <section className="proof section">
      <div className="container">
        <div className="proof__head reveal">
          <span className="eyebrow">Trust</span>
          <h2 className="display proof__title">Quietly, behind the people you'd recognize.</h2>
        </div>

        <div className="proof__grid">
          {testimonials.map((t, i) => (
            <figure className="proof__card reveal" key={t.name} style={{ transitionDelay: `${i * 110}ms` }}>
              <blockquote className="proof__text">{t.text}</blockquote>
              <figcaption className="proof__author">
                <span className="proof__avatar" aria-hidden="true">{t.initial}</span>
                <span className="proof__meta">
                  <span className="proof__name">{t.name}</span>
                  <span className="proof__role">{t.title}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

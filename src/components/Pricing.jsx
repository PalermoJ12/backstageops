import './Pricing.css';

const tiers = [
  {
    name: 'The Catalyst',
    price: '$399',
    cadence: '/ month',
    summary: 'Essential operational cover: inbox, calendar, and the daily admin that steals your mornings.',
    includes: ['Email & inbox management', 'Calendar & scheduling', 'File & data organization', 'Overnight execution loop'],
    featured: false,
  },
  {
    name: 'The Growth',
    price: '$799',
    cadence: '/ month',
    summary: 'For scaling operations: deeper systems, structured workflows, and managed client-facing processes.',
    includes: ['Everything in Catalyst', 'CRM setup & management', 'Client intake & onboarding', 'Workflow structure & SOPs'],
    featured: true,
  },
  {
    name: 'The Full Scale',
    price: 'Custom',
    cadence: 'tailored retainer',
    summary: 'A fully integrated operations partner, scoped around your business and your dedicated strategist.',
    includes: ['Everything in Growth', 'Workflow automation', 'Project coordination', 'Dedicated operations strategist'],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <div className="pricing__head reveal">
          <span className="eyebrow">Partnership Tiers</span>
          <h2 className="display pricing__title">A retainer, not a task list.</h2>
          <p className="lede pricing__sub">
            Every partnership is backed by a dedicated, managed operations team,
            vetted, trained, and accountable to your outcomes.
          </p>
        </div>

        <div className="pricing__grid">
          {tiers.map((t, i) => (
            <article
              className={`pricing__card reveal ${t.featured ? 'pricing__card--featured' : ''}`}
              key={t.name}
              style={{ transitionDelay: `${i * 110}ms` }}
            >
              {t.featured && <span className="pricing__flag">Most Chosen</span>}
              <h3 className="pricing__name">{t.name}</h3>
              <div className="pricing__price">
                <span className="pricing__amount">{t.price}</span>
                <span className="pricing__cadence">{t.cadence}</span>
              </div>
              <p className="pricing__summary">{t.summary}</p>
              <hr className="rule pricing__divider" />
              <ul className="pricing__includes">
                {t.includes.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`btn ${t.featured ? 'btn--solid' : 'btn--quiet'} pricing__cta`}
              >
                Request Partnership
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

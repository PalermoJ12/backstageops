import './Services.css';

const tiers = [
  {
    name: 'Essential Admin',
    focus: 'Inbox & Calendar',
    features: ['Email Management', 'Scheduling', 'File Organization'],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Operations Managed',
    focus: 'Systems & Workflow',
    features: ['Everything in Essential', 'Notion / CRM Setup', 'Client Onboarding'],
    cta: 'Most Popular',
    popular: true,
  },
  {
    name: 'The Full Scale',
    focus: 'Total Integration',
    features: ['Everything in Operations', 'Workflow Automation', 'Project Coordination'],
    cta: 'Contact for Custom',
    popular: false,
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <span className="section-label">Core Services</span>
        <h2 className="services__headline">Choose Your Level of Support</h2>
        <p className="services__sub">
          Every package is backed by a dedicated operations strategist — not just a task list.
        </p>

        <div className="services__grid">
          {tiers.map(tier => (
            <div
              key={tier.name}
              className={`services__card ${tier.popular ? 'services__card--popular' : ''}`}
            >
              {tier.popular && <div className="services__badge">Most Popular</div>}
              <p className="services__focus">{tier.focus}</p>
              <h3 className="services__tier-name">{tier.name}</h3>
              <ul className="services__features">
                {tier.features.map(f => (
                  <li key={f}>
                    <span className="services__check">✓</span> {f}
                  </li>
                ))}
              </ul>
              <button className={tier.popular ? 'btn-primary' : 'btn-navy'}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

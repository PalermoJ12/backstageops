import './Services.css';

const MAIL_LINK = 'mailto:bckstg.ops@gmail.com?subject=I%20want%20to%20work%20with%20you';
const BOOKING_LINK = 'https://calendar.app.google/5knfkqEAU7a1XNGe9';

const tiers = [
  {
    name: 'Essential Admin',
    focus: 'Inbox & Calendar',
    features: ['Email Management', 'Scheduling', 'File Organization'],
    cta: 'Get Started',
    href: MAIL_LINK,
    popular: false,
  },
  {
    name: 'Operations Managed',
    focus: 'Systems & Workflow',
    features: ['Everything in Essential', 'Notion / CRM Setup', 'Client Onboarding'],
    cta: 'Most Popular',
    href: MAIL_LINK,
    popular: true,
  },
  {
    name: 'The Full Scale',
    focus: 'Total Integration',
    features: ['Everything in Operations', 'Workflow Automation', 'Project Coordination'],
    cta: 'Contact for Custom',
    href: BOOKING_LINK,
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
              <a
                href={tier.href}
                target={tier.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className={tier.popular ? 'btn-primary' : 'btn-navy'}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

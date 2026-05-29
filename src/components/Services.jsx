import './Services.css';

const MAIL_LINK = 'mailto:admin@backstageops.online?subject=I%20want%20to%20work%20with%20you';
const BOOKING_LINK = 'https://book.titan.email/discovery-call';

const tiers = [
  {
    name: 'The Catalyst',
    focus: 'Inbox & Calendar',
    highlight: 'Perfect for essential admin, data cleanup, and inbox management',
    price: '$399/mo',
    hours: '10 hours/week',
    bindingFee: '$150',
    features: ['Email Management', 'Scheduling', 'File Organization', 'Data Cleanup'],
    cta: 'Get Started',
    href: MAIL_LINK,
    popular: false,
  },
  {
    name: 'The Growth',
    focus: 'Systems & Workflow',
    highlight: 'Perfect for scaling operations, CRM setup, and deeper workflow structure',
    price: '$799/mo',
    hours: '20 hours/week',
    bindingFee: '$250',
    features: ['Everything in Catalyst', 'CRM Setup', 'Client Onboarding', 'Workflow Structure'],
    cta: 'Most Popular',
    href: MAIL_LINK,
    popular: true,
  },
  {
    name: 'The Full Scale',
    focus: 'Total Integration',
    highlight: 'Custom-scoped for fully integrated operations management',
    price: 'Custom',
    hours: '40 hours/week',
    bindingFee: 'Custom',
    features: ['Everything in Growth', 'Workflow Automation', 'Project Coordination', 'Dedicated Strategist'],
    cta: 'Book a Call',
    href: BOOKING_LINK,
    popular: false,
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <span className="section-label">Pricing & Packages</span>
        <h2 className="services__headline">Choose Your Level of Support</h2>
        <p className="services__sub">
          Every package is backed by a dedicated operations team — not just a task list.
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
              <p className="services__highlight">{tier.highlight}</p>
              <div className="services__pricing">
                <span className="services__price">{tier.price}</span>
                <span className="services__hours">{tier.hours}</span>
              </div>
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


        <p className="services__binding-note">
          * The binding fee ($150 for Catalyst / $250 for Growth) covers talent allocation and a custom systems audit for your business. No hidden costs beyond this.
        </p>

        <div className="services__ondemand">
          <p className="services__ondemand-text">
            Just need a quick project done? Get an <strong>On-Demand 10-hour starter block for $100</strong> to test the waters — zero long-term commitment.
          </p>
          <a href={MAIL_LINK} className="btn-navy services__ondemand-btn">
            Get On-Demand Hours
          </a>
        </div>
      </div>
    </section>
  );
}

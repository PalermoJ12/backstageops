import './WhyUs.css';

const differentiators = [
  {
    title: 'Managed Support',
    body: "You don't just get a VA; you get a system supervised by an operations strategist.",
    icon: '◈',
  },
  {
    title: 'EST Sync',
    body: 'We work your hours. Real-time support when your business is actually moving.',
    icon: '◷',
  },
  {
    title: 'Systems First',
    body: "We don't just \"do tasks\" — we build workflows that stick.",
    icon: '◎',
  },
];

export default function WhyUs() {
  return (
    <section className="whyus" id="about">
      <div className="container">
        <span className="section-label">The Difference</span>
        <h2 className="whyus__headline">
          Stop Playing "Admin" and<br />Start Being the CEO.
        </h2>
        <p className="whyus__body">
          You didn't start your business to spend 4 hours a day in your inbox or
          troubleshooting your CRM. We provide a managed team of professionals who handle
          the operational heavy lifting for you.
        </p>

        <div className="whyus__cards">
          {differentiators.map(d => (
            <div className="whyus__card" key={d.title}>
              <span className="whyus__icon">{d.icon}</span>
              <h3 className="whyus__card-title">{d.title}</h3>
              <p className="whyus__card-body">{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import './WhyUs.css';

const differentiators = [
  {
    title: 'Managed Support',
    body: "You don't just get a VA — you get a fully managed team that handles vetting, training, quality checks, and reporting. You just reap the results.",
    icon: '◈',
  },
  {
    title: 'Overnight Execution',
    body: 'We work while you sleep. Your backlog gets cleared overnight so you wake up to a clean slate every morning.',
    icon: '◷',
  },
  {
    title: 'Time Reclaimed',
    body: "Every task we take off your plate is time returned to you — to grow, to lead, or simply to rest.",
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

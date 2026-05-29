import './Process.css';

const steps = [
  {
    num: '5:00 PM',
    title: 'The Handoff',
    body: 'Send your list of repetitive tasks, data entries, or unread emails as you wrap up your workday.',
  },
  {
    num: '12:00 AM',
    title: 'Quiet Execution',
    body: 'Our VAs securely execute your backlog overnight while your office is quiet.',
  },
  {
    num: '8:00 AM',
    title: 'Clean Slate Delivery',
    body: 'Wake up to an emptied inbox, updated customer records, and completed reports. Open your laptop with total relief.',
  },
];

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <span className="section-label">How It Works</span>
        <h2 className="process__headline">The 24-Hour Operations Loop</h2>
        <p className="process__sub">Your backlog cleared while you sleep — every single night.</p>

        <div className="process__steps">
          {steps.map((s, i) => (
            <div className="process__step" key={s.num}>
              <div className="process__step-left">
                <span className="process__num">{s.num}</span>
                {i < steps.length - 1 && <div className="process__connector" />}
              </div>
              <div className="process__step-right">
                <h3 className="process__step-title">{s.title}</h3>
                <p className="process__step-body">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="https://book.titan.email/discovery-call"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary process__cta"
        >
          Schedule Your Discovery Call
        </a>
      </div>
    </section>
  );
}

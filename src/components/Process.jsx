import './Process.css';

const steps = [
  {
    num: '01',
    title: 'The Strategy Call',
    body: 'We audit your current bottlenecks and find exactly where you need air.',
  },
  {
    num: '02',
    title: 'The Systems Setup',
    body: 'We document your processes so nothing falls through the cracks.',
  },
  {
    num: '03',
    title: 'The Seamless Handoff',
    body: 'Your dedicated team takes over, and you get your time back.',
  },
];

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <span className="section-label">How It Works</span>
        <h2 className="process__headline">The 3-Step Handoff</h2>
        <p className="process__sub">Getting started is easier than you think.</p>

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

        <button className="btn-primary process__cta">
          Schedule Your Discovery Call
        </button>
      </div>
    </section>
  );
}

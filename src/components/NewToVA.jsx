import './NewToVA.css';

const points = [
  {
    title: 'No SOPs Required',
    body: "You don't need a massive corporate manual to work with us. We jump in and help you map out exactly what to delegate first.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    title: 'Zero Management Overhead',
    body: 'We handle the vetting, training, quality checks, and reporting — you just reap the results.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: 'Risk-Free Packages',
    body: 'We focus on agile 10–20 hour starter plans, giving you the perfect "sweet spot" to test out your first hire without long-term risk.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
  },
];

export default function NewToVA() {
  return (
    <section className="newtova">
      <div className="container newtova__inner">
        <div className="newtova__left">
          <span className="section-label">First-Time Hire?</span>
          <h2 className="newtova__headline">New to Virtual Support?<br />We Speak <em>"Founder."</em></h2>
          <p className="newtova__sub">
            Most of our clients had never hired a VA before. Here's what makes getting started with us different.
          </p>
        </div>
        <div className="newtova__right">
          {points.map((p) => (
            <div className="newtova__point" key={p.title}>
              <div className="newtova__icon">{p.icon}</div>
              <div>
                <h3 className="newtova__point-title">{p.title}</h3>
                <p className="newtova__point-body">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

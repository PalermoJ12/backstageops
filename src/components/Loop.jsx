import './Loop.css';

const steps = [
  {
    time: '5:00 PM',
    title: 'The Handoff',
    body: 'Send your backlog as you close the day: unread threads, data entry, production tasks, the loose ends. One message. No briefing deck required.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 6v20m0 0 8-8m-8 8-8-8" />
        <path d="M8 30v8a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4v-8" />
      </svg>
    ),
  },
  {
    time: '12:00 AM',
    title: 'Quiet Execution',
    body: 'Your dedicated team executes overnight while the studio is dark: securely, precisely, and entirely out of view. The invisible backstage at work.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M38 27a15 15 0 1 1-17-17 12 12 0 0 0 17 17Z" />
      </svg>
    ),
  },
  {
    time: '8:00 AM',
    title: 'Clean Slate Delivery',
    body: 'Open your laptop to an emptied inbox, updated records, and finished work, with a short brief of everything handled. Begin the day already ahead.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 6a18 18 0 1 1-18 18" />
        <path d="M6 24H2m4 0 5-5m-5 5 5 5" />
        <path d="m17 24 5 5 10-11" />
      </svg>
    ),
  },
];

export default function Loop() {
  return (
    <section className="loop section" id="model">
      <div className="container">
        <div className="loop__head reveal">
          <span className="eyebrow">The Model</span>
          <h2 className="display loop__title">The 24-Hour Operations Loop</h2>
          <p className="lede loop__sub">Your backlog cleared while you sleep, every single night.</p>
        </div>

        <div className="loop__track">
          {steps.map((s, i) => (
            <div className="loop__step reveal" key={s.time} style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="loop__icon">{s.icon}</div>
              <span className="loop__time">{s.time}</span>
              <h3 className="loop__step-title">{s.title}</h3>
              <p className="loop__step-body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

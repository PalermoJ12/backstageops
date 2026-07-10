import './WhoWeServe.css';

const columns = [
  {
    n: '01',
    title: 'High-Volume Creatives & Designers',
    who: 'Wig designers, fashion labels, custom artisans.',
    focus: ['Order pipelines', 'Supplier tracking', 'Inventory logistics'],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4v10a8 8 0 0 0 16 0V4" />
        <path d="M20 22v14M13 36h14" />
        <path d="M8 4h24" />
      </svg>
    ),
  },
  {
    n: '02',
    title: 'Artists & Entertainment',
    who: 'Touring DJs, producers, event curators.',
    focus: ['Booking vetting', 'Contracts & itineraries', 'Calendar protection'],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 30V9l18-3v21" />
        <circle cx="9" cy="30" r="5" />
        <circle cx="27" cy="27" r="5" />
      </svg>
    ),
  },
  {
    n: '03',
    title: 'Specialized Professional Services',
    who: 'Independent accountants, boutique agencies.',
    focus: ['Client intake', 'Document organization', 'CRM management'],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 6h14l6 6v22H10z" />
        <path d="M24 6v6h6" />
        <path d="M15 20h10M15 26h10" />
      </svg>
    ),
  },
];

export default function WhoWeServe() {
  return (
    <section className="serve section" id="expertise">
      <div className="container">
        <div className="serve__head reveal">
          <span className="eyebrow">Who We Serve</span>
          <h2 className="display serve__title">
            Built for the ones who were<br /><em>never the target market.</em>
          </h2>
        </div>

        <div className="serve__grid">
          {columns.map((c, i) => (
            <article className="serve__col reveal" key={c.n} style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="serve__icon">{c.icon}</div>
              <span className="serve__n">{c.n}</span>
              <h3 className="serve__col-title">{c.title}</h3>
              <p className="serve__who">{c.who}</p>
              <ul className="serve__focus">
                {c.focus.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

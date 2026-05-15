import './Results.css';

const results = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    stat: '50%',
    category: 'Lead & Communication',
    description: 'Boosted lead management efficiency by 50% and inquiry response rates by 40%, while reducing missed emails by 90%.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    stat: '50%',
    category: 'Financial & Tax Admin',
    description: 'Improved bookkeeping organization and invoice accuracy by up to 50%, streamlining tax preparation efficiency by 25%.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    stat: '35%',
    category: 'Operational Efficiency',
    description: 'Accelerated general task and graphic design turnaround times by up to 35% through optimized workflow management.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    stat: '40%',
    category: 'Quality & Precision',
    description: 'Enhanced overall output quality by driving a 40% improvement in detail accuracy across all administrative projects.',
  },
];

export default function Results() {
  return (
    <section className="results">
      <div className="container">
        <div className="results__header">
          <span className="section-label">By the Numbers</span>
          <h2 className="results__headline">Key Results Achieved as Virtual Assistant</h2>
        </div>

        <div className="results__grid">
          {results.map((r) => (
            <div className="results__card" key={r.category}>
              <div className="results__icon">{r.icon}</div>
              <div className="results__stat">{r.stat}</div>
              <h3 className="results__category">{r.category}</h3>
              <p className="results__label">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

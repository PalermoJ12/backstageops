import './Team.css';

const members = [
  {
    name: 'Operations & Systems',
    position: 'Workflow design, process documentation & tool setup',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    name: 'Client Delivery & Experience',
    position: 'Onboarding, communication & client success',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    name: 'Growth & Marketing',
    position: 'Content, outreach & brand presence',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
  {
    name: 'Finance & Legal',
    position: 'Invoicing, compliance & administrative filings',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
];

export default function Team() {
  return (
    <section className="team" id="team">
      <div className="container">
        <span className="section-label">The Team</span>
        <h2 className="team__headline">The People Behind the Scenes</h2>
        <p className="team__sub">
          A dedicated crew of operations professionals committed to keeping your business running smoothly.
        </p>

        <div className="team__grid">
          {members.map((m) => (
            <div className="team__card" key={m.name}>
              <div className="team__photo-wrap">
                <div className="team__photo-placeholder">
                  {m.icon}
                </div>
                <div className="team__photo-accent" />
              </div>
              <div className="team__info">
                <h3 className="team__name">{m.name}</h3>
                <p className="team__position">{m.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

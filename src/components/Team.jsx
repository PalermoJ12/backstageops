import './Team.css';

const members = [
  {
    name: 'Operations & Systems',
    initials: 'OS',
    position: 'Workflow design, process documentation & tool setup',
    photo: null,
  },
  {
    name: 'Client Delivery & Experience',
    initials: 'CDE',
    position: 'Onboarding, communication & client success',
    photo: null,
  },
  {
    name: 'Growth & Marketing',
    initials: 'GM',
    position: 'Content, outreach & brand presence',
    photo: null,
  },
  {
    name: 'Finance & Legal',
    initials: 'FL',
    position: 'Invoicing, compliance & administrative filings',
    photo: null,
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
                {m.photo
                  ? <img src={m.photo} alt={m.name} className="team__photo" />
                  : <div className="team__photo-placeholder">
                      <span>{m.initials}</span>
                    </div>
                }
                <div className="team__photo-accent" />
              </div>
              <div className="team__info">
                <h3 className="team__name">{m.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

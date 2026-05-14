import './Team.css';

const members = [
  {
    name: 'Operations & Systems',
    position: 'Workflow design, process documentation & tool setup',
    photo: null,
  },
  {
    name: 'Client Delivery & Experience',
    position: 'Onboarding, communication & client success',
    photo: null,
  },
  {
    name: 'Growth & Marketing',
    position: 'Content, outreach & brand presence',
    photo: null,
  },
  {
    name: 'Finance & Legal',
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
                      <span>{m.name.split(' ').map(w => w[0]).slice(0, 2).join('')}</span>
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

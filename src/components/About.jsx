import hannaPhoto from '../assets/Hanna.png';
import './About.css';

export default function About() {
  return (
    <section className="about" id="about-founder">
      <div className="container about__inner">
        <div className="about__photo">
          <img src={hannaPhoto} alt="Hanna Agawin" className="about__photo-img" />
        </div>

        <div className="about__content">
          <span className="section-label">About the Founder</span>
          <h2 className="about__headline">Meet Hanna Agawin</h2>
          <p className="about__bio">
            With years of experience as a professional virtual assistant and operations
            strategist, Hanna built Backstage Operations on a simple belief: business owners
            deserve more than task-doers — they deserve a team that thinks in systems.
          </p>
          <p className="about__bio">
            Her commitment is to build managed support structures that don't just keep you
            afloat, but empower you to focus on what you do best — growing your business
            and leading with vision.
          </p>
          <div className="about__divider" />
          <p className="about__tagline">
            "We handle the back office. You handle the big picture."
          </p>
        </div>
      </div>
    </section>
  );
}

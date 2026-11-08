import { heroIntro, profile } from "@/data/profile";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="hero">
      <Reveal>
        <p className="status">
          <span className="status-dot" /> Open to internships & collaborations
        </p>
        <h1 className="hero-name">
          Mohtasim Evne
          <br />
          Helal <span className="hero-name-accent">Talha</span>
        </h1>
        <p className="hero-role">{profile.role} — {profile.university}.</p>
        <p className="hero-lede">{heroIntro}</p>
        <div className="hero-links">
          <a href="#work" className="tlink">
            Selected work <span>↓</span>
          </a>
          <a href="#contact" className="tlink">
            Get in touch <span>→</span>
          </a>
        </div>
        <dl className="hero-meta">
          <div>
            <dt>University</dt>
            <dd>AIUB — BSc CSE, 10th semester</dd>
          </div>
          <div>
            <dt>Based in</dt>
            <dd>Basundhara R/A, Dhaka</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>{profile.focus.join(" · ")}</dd>
          </div>
        </dl>
      </Reveal>
    </section>
  );
}

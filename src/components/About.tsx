import { aboutParagraphs, facts } from "@/data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import WordReveal from "./WordReveal";

export default function About() {
  return (
    <section id="about" className="section wrap">
      <SectionHeading index="01" title="About" />
      <WordReveal text={aboutParagraphs[0]} className="lead" />
      <Reveal>
        <p className="body-text">{aboutParagraphs[1]}</p>
        <div className="facts">
          {facts.map((fact) => (
            <div key={fact.label} className="fact">
              <span className="fact-label">{fact.label}</span>
              <span>{fact.value}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

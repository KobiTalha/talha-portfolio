import { recognition } from "@/data/skills";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Recognition() {
  return (
    <section id="recognition" className="section">
      <SectionHeading index="04" title="Recognition" />
      <Reveal>
        <div>
          {recognition.map((item) => (
            <div key={item.title} className="rec-row">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

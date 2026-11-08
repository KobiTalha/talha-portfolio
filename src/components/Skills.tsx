import { skillGroups } from "@/data/skills";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading index="03" title="Skills" />
      <Reveal>
        <div>
          {skillGroups.map((group) => (
            <div key={group.category} className="skill-row">
              <span className="skill-label">{group.category}</span>
              <p>{group.items.join(", ")}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

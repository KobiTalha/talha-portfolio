import { beyondCode } from "@/data/skills";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function BeyondCode() {
  return (
    <section className="section">
      <SectionHeading index="05" title="Beyond code" />
      <Reveal>
        <div className="beyond-grid">
          {beyondCode.map((item) => (
            <div key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

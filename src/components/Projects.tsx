import { projects } from "@/data/projects";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="work" className="section">
      <SectionHeading index="02" title="Selected work" />
      <Reveal>
        <div className="projects">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={project.featured ? "project project-featured" : "project"}
            >
              <span className="project-index">{String(i + 1).padStart(2, "0")}</span>
              <div className="project-main">
                <div className="project-top">
                  <h3>{project.title}</h3>
                  <span className="project-year">{project.year}</span>
                </div>
                <p>{project.description}</p>
                <p className="project-stack">{project.stack.join(" · ")}</p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

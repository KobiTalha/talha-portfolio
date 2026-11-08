const words = [
  "NestJS",
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "Unity",
  "Machine Learning",
  "Docker",
  "OpenGL",
  "React",
  "Prompt Engineering",
];

/** Scrolling strip of core disciplines. Pure CSS animation. */
export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {words.map((word) => (
          <span key={word} className="marquee-item">
            {word} <span className="marquee-star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

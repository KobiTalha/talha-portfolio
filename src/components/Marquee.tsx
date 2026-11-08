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

/** Infinite scrolling strip of core disciplines. Pure CSS animation. */
export default function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((word, i) => (
          <span key={i} className="marquee-item">
            {word} <span className="marquee-star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

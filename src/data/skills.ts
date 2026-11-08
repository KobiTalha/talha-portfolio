import type { RecognitionItem, SkillGroup } from "@/lib/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C++", "C#", "PHP", "R", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Vite", "WebGL2 / GLSL"],
  },
  {
    category: "Backend",
    items: ["NestJS", "Node.js", "Express", "Prisma", "REST APIs", "Swagger / OpenAPI", "JWT auth"],
  },
  {
    category: "Data & cloud",
    items: ["PostgreSQL", "Supabase", "Neon", "SQLite", "Docker", "Vercel", "Google Cloud"],
  },
  {
    category: "AI & ML",
    items: ["Machine Learning", "TensorFlow Lite", "MediaPipe", "LangChain", "Gemini API"],
  },
  {
    category: "Games & hardware",
    items: ["Unity", "OpenGL", "Computer Graphics", "Arduino & electronics simulation"],
  },
];

export const recognition: RecognitionItem[] = [
  {
    title: "Foundational C# with Microsoft",
    detail: "Certification earned via freeCodeCamp.",
  },
  {
    title: "Google Cloud Skill Badges",
    detail: "Earned through hands-on Google Cloud Skills Boost labs.",
  },
  {
    title: "MLBB Campus Champion",
    detail: "Won a campus Mobile Legends: Bang Bang championship with team Trojan Parasytes.",
  },
  {
    title: "Coursework highlights",
    detail:
      "Advanced Web Technology, Data Science, Computer Graphics, Database Systems, Microprocessors, Data Communication.",
  },
];

export const beyondCode: { title: string; text: string }[] = [
  {
    title: "Gaming",
    text: "Self-described game freak. GTA V and GTA Online (counting down to GTA VI), Assassin's Creed — Syndicate finished, Mirage in progress — Call of Duty, Clash of Clans at Town Hall 17, Genshin Impact, Zenless Zone Zero and Cyberpunk 2077.",
  },
  {
    title: "#KobiTalha",
    text: "I write and perform Bengali fusion rap and poetry — Tagore and Nazrul in the roots, my own voice on top.",
  },
  {
    title: "Life in Dhaka",
    text: "Motorcycle rides around the city, domestic travel — Rangamati, Sonargaon, Cox's Bazar — coffee culture, winter street style, and a pet cat holding down the home office.",
  },
];

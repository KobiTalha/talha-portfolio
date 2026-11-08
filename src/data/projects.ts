interface Project {
  title: string;
  stack: string[];
  description: string;
  featured?: boolean;
  year: string;
}

export const projects: Project[] = [
  {
    title: "Car Management System",
    stack: ["NestJS", "PostgreSQL", "Docker", "GitHub Actions"],
    description:
      "Production-level car inventory platform taken all the way: JWT authentication with role-based access, 15-minute access tokens with rotating refresh tokens, Joi config validation, Helmet, rate limiting, migrations-only schema, photo uploads, a live browser dashboard, Docker + nginx deployment and CI — 15 unit and 21 end-to-end tests passing.",
    featured: true,
    year: "2026",
  },
  {
    title: "AI Resume Builder SaaS",
    stack: ["Next.js", "Clerk", "Prisma", "Gemini API"],
    description:
      "AI-powered resume builder, built and deployed on Vercel with Clerk authentication and a Neon PostgreSQL database.",
    year: "2026",
  },
  {
    title: "PixelForge",
    stack: ["React", "TypeScript", "WebGL2", "Tauri", "Rust"],
    description: "Desktop and web photo editor powered by custom GLSL shaders.",
    year: "2025",
  },
  {
    title: "VaxInfo",
    stack: ["Next.js", "Prisma", "Supabase"],
    description: "AI vaccine intelligence platform with a Supabase PostgreSQL backend.",
    year: "2025",
  },
  {
    title: "PharmaLens",
    stack: ["Node.js", "Express", "SQLite"],
    description:
      "Drug intelligence for Bangladesh — generic-to-brand mapping with fuzzy search.",
    year: "2025",
  },
  {
    title: "Shop Sphere BD",
    stack: ["Next.js", "E-commerce"],
    description: "Full e-commerce platform built with structured AI prompt methodologies.",
    year: "2025",
  },
  {
    title: "Open-World Game Architecture",
    stack: ["Unity", "C#"],
    description:
      "GTA-style open-world architecture refactored into modular controllers, event buses and interaction interfaces for scale.",
    year: "2025",
  },
  {
    title: "Parliament House Simulation",
    stack: ["C++", "OpenGL"],
    description:
      "Single-file simulation of Bangladesh's National Parliament House interior — dynamic day/night cycles, lighting toggles, animated security patrols.",
    year: "2024",
  },
  {
    title: "LLM Accuracy Research",
    stack: ["Research", "R", "Machine Learning"],
    description:
      "Co-authored an IEEE-style paper on optimizing LLM accuracy through structured prompt engineering, alongside ML and sentiment-analysis pipelines in R.",
    year: "2024",
  },
];

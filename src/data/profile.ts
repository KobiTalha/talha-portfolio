import type { Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Mohtasim Evne Helal Talha",
  shortName: "Talha Chowdhury",
  alias: "#KobiTalha",
  role: "Full-stack developer & CSE student",
  location: "Basundhara R/A, Dhaka, Bangladesh",
  university: "American International University-Bangladesh (AIUB)",
  semester: "10th semester, BSc in CSE",
  email: "tm.talha.chowdhury13@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/KobiTalha", handle: "@KobiTalha" },
    {
      label: "Instagram",
      href: "https://www.instagram.com/tm.talha.chowdhury13",
      handle: "@tm.talha.chowdhury13",
    },
  ],
  focus: ["Web Technology", "Artificial Intelligence", "Game Development"],
};

export const heroIntro =
  "I design and build production-grade web applications — NestJS and Next.js back to front, PostgreSQL underneath, Docker and CI on top. My favourite ground is web technology; my side quests are game architecture in Unity and machine-learning research.";

export const aboutParagraphs: string[] = [
  "I'm Talha — Talha Chowdhury to the internet, \"Tatha\" to friends. I care about modular, multi-tier architecture and clean database design, and I ship end to end: REST APIs with JWT auth and role-based access, AI-powered SaaS tools, and data-driven products built for Bangladesh.",
  "My working style is practical: verify first, build in tested increments, and let structured prompt-engineering do the heavy lifting where AI is involved. I'm currently deep into an Advanced Web Technology course, and my longer arc points to higher studies after graduation — with an internship in mobile financial services (Nagad or City Group) on the way there.",
];

export const facts: { label: string; value: string }[] = [
  { label: "Education", value: "BSc in CSE, AIUB — 10th semester" },
  {
    label: "Daily driver",
    value: "Lenovo Legion 5 (2025) — Core Ultra 7 255HX, RTX 5060, 16GB DDR5",
  },
  { label: "Editor & tools", value: "VS Code, JetBrains Rider, GitHub Copilot, Docker" },
  { label: "Also known as", value: "#KobiTalha — Bengali fusion rap & poetry" },
];

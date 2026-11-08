# Talha Chowdhury — Portfolio

Personal portfolio of **Mohtasim Evne Helal Talha**, full-stack developer and final-year
CSE student at AIUB, Dhaka. Live at
[talha-portfolio-ivory.vercel.app](https://talha-portfolio-ivory.vercel.app).

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript** (strict mode)
- **Tailwind CSS v4** (PostCSS) + hand-written editorial design system
- **JSON API routes** — `GET /api/projects`, `POST /api/contact`, `GET /api/health`
- Deployed on **Vercel** (git-linked, auto-deploy on push to `main`)

## Project structure

```
src/
  app/
    layout.tsx        Root layout — fonts, SEO metadata, Open Graph, JSON-LD
    page.tsx          Home page — composes the section components
    globals.css       Design tokens and the full design system
    not-found.tsx     Custom 404
    loading.tsx       Route loading skeleton
    sitemap.ts        Generated sitemap
    robots.ts         Generated robots.txt
    api/
      projects/       GET  /api/projects — project index as JSON
      contact/        POST /api/contact — validated contact endpoint
      health/         GET  /api/health — uptime check
  components/         Header, Footer, Hero, Marquee, section components,
                      Reveal (scroll-in animation), SectionHeading
  data/               Typed content: profile, projects, skills, recognition
  lib/types.ts        Shared TypeScript interfaces
```

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`, `npm run format`.

# Talha Chowdhury — Portfolio

Personal portfolio of **Mohtasim Evne Helal Talha**, full-stack developer and final-year
CSE student at AIUB, Dhaka. Live at
[talha-portfolio-ivory.vercel.app](https://talha-portfolio-ivory.vercel.app).

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript** (strict mode)
- **Tailwind CSS v4** (PostCSS) + hand-written Vice City design system
- **Framer Motion** — scroll reveals, staggered hero entrance, scroll-zoom
  hero, mouse parallax sunset, scroll progress bar
- **Lenis** — inertial smooth scrolling with smooth anchor navigation
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
  components/         Header, Footer, Hero, SunsetArt (hand-drawn SVG sunset),
                      Marquee, SmoothScroll (Lenis), ScrollProgress, WordReveal,
                      section components, Reveal (scroll-in animation),
                      SectionHeading
  data/               Typed content: profile, projects, skills, recognition
  lib/types.ts        Shared TypeScript interfaces
```

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`, `npm run format`.

## Design notes

GTA VI / Vice City theme — Leonida-night background, neon sunset gradients
(hot pink, orange, purple), oversized Anton poster headlines, a hand-drawn SVG
sunset with slatted sun and palm silhouettes behind a full-screen hero, a
gradient disciplines marquee, glass project cards with neon hover glow, and
Rockstar-style motion throughout: Lenis inertial smooth scrolling, a
scroll-zoom hero (the sunset zooms in as the content lifts away), mouse
parallax on the sunset layers, scroll-triggered reveals, word-by-word text
reveals, animated section headings and a gradient scroll-progress bar. No
photos, no stock imagery, no Rockstar logos or copyrighted artwork: gradients
and original SVG do the talking. Fully responsive, keyboard-focus visible,
`prefers-reduced-motion` respected (all motion is skipped).

## Deployment

The Vercel project is git-linked to this repository: every push to `main` triggers a
production deployment. Security headers (X-Frame-Options, X-Content-Type-Options,
Referrer-Policy, Permissions-Policy) are set in `vercel.json`.

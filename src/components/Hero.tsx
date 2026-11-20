"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { heroIntro, profile } from "@/data/profile";
import Reveal from "./Reveal";
import SunsetArt from "./SunsetArt";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const line = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { y: "112%" },
          animate: { y: "0%" },
          transition: { duration: 0.9, ease: EASE, delay },
        };

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease: EASE, delay },
        };

  return (
    <section className="hero" ref={ref}>
      <SunsetArt progress={scrollYProgress} />
      <div className="wrap hero-inner">
        <motion.p className="status" {...fade(0.05)}>
          <span className="status-dot" /> Open to internships & collaborations
        </motion.p>
        <h1 className="hero-name">
          <span className="hero-line">
            <motion.span {...line(0.15)}>Mohtasim Evne</motion.span>
          </span>
          <span className="hero-line">
            <motion.span {...line(0.28)}>
              Helal <span className="hero-name-accent">Talha</span>
            </motion.span>
          </span>
        </h1>
        <motion.p className="hero-role" {...fade(0.45)}>
          {profile.role} — {profile.university}.
        </motion.p>
        <motion.p className="hero-lede" {...fade(0.55)}>{heroIntro}</motion.p>
        <motion.div className="hero-links" {...fade(0.65)}>
          <a href="#work" className="tlink">
            Selected work <span>↓</span>
          </a>
          <a href="#contact" className="tlink">
            Get in touch <span>→</span>
          </a>
        </motion.div>
        <Reveal delay={0.75}>
          <dl className="hero-meta">
            <div>
              <dt>University</dt>
              <dd>AIUB — BSc CSE, 10th semester</dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>Basundhara R/A, Dhaka</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>{profile.focus.join(" · ")}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

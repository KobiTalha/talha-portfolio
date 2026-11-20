"use client";

import { useRef, type MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
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

  // Rockstar-style scroll zoom: the backdrop zooms in while the content
  // shrinks, lifts and fades away.
  const artScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 1.18]);
  const contentScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 0.92]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], reduce ? [1, 1] : [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -70]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Mouse parallax: layers drift with the pointer at different depths.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const mouseX = useSpring(mx, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(my, { stiffness: 50, damping: 20 });

  const onMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((event.clientX - rect.left) / rect.width - 0.5);
    my.set((event.clientY - rect.top) / rect.height - 0.5);
  };

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
    <section className="hero" ref={ref} onMouseMove={onMouseMove}>
      <SunsetArt
        progress={scrollYProgress}
        scale={artScale}
        mouse={{ x: mouseX, y: mouseY }}
      />
      <motion.div
        className="wrap hero-inner"
        style={{ scale: contentScale, opacity: contentOpacity, y: contentY }}
      >
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
      </motion.div>
      <motion.div
        style={{ opacity: reduce ? 1 : cueOpacity }}
        initial={reduce ? false : { y: 12 }}
        animate={reduce ? undefined : { y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 1.1 }}
      >
        <a href="#about" className="scroll-cue">
          <span>Scroll for more</span>
          <span className="scroll-cue-arrow">↓</span>
        </a>
      </motion.div>
    </section>
  );
}

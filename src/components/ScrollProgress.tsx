"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/** Fixed neon gradient scroll-progress bar pinned to the top of the page. */
export default function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.4,
  });

  if (reduce) return null;

  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

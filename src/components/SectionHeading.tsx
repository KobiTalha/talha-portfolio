"use client";

import { motion, useReducedMotion } from "framer-motion";

interface SectionHeadingProps {
  index: string;
  title: string;
}

/**
 * Section label: gradient index numeral + ruled title. The numeral pops in
 * with a spring and the title rises out of a mask as the section scrolls
 * into view. Static when the user prefers reduced motion.
 */
export default function SectionHeading({ index, title }: SectionHeadingProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="section-heading">
        <span className="section-index">{index}</span>
        <h2 className="section-title">{title}</h2>
      </div>
    );
  }

  return (
    <div className="section-heading">
      <motion.span
        className="section-index"
        initial={{ opacity: 0, scale: 0.6, rotate: -6 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {index}
      </motion.span>
      <span className="hero-line">
        <motion.h2
          className="section-title"
          initial={{ y: "112%" }}
          whileInView={{ y: "0%" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        >
          {title}
        </motion.h2>
      </span>
    </div>
  );
}

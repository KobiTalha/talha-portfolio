"use client";

import { motion, useReducedMotion } from "framer-motion";

interface WordRevealProps {
  text: string;
  className?: string;
  /** Base delay in seconds before the first word rises. */
  delay?: number;
}

/**
 * SplitText-style reveal: each word rises out of a mask in sequence as the
 * paragraph scrolls into view. Renders as plain text for reduced motion.
 */
export default function WordReveal({ text, className = "", delay = 0 }: WordRevealProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return <p className={className}>{text}</p>;
  }

  return (
    <p className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "bottom",
            paddingBottom: "0.14em",
            marginBottom: "-0.14em",
          }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "115%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + Math.min(i * 0.018, 0.55),
            }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </p>
  );
}

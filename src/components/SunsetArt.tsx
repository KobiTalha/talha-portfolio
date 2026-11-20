"use client";

import { motion, useReducedMotion, useTransform, type MotionValue } from "framer-motion";

interface SunsetArtProps {
  /** Scroll progress of the hero section (0 at top, 1 when scrolled past). */
  progress: MotionValue<number>;
}

const stars: Array<[number, number, number, number]> = [
  [60, 48, 1.6, 0.9], [150, 120, 1.1, 0.6], [240, 60, 1.4, 0.8], [330, 150, 0.9, 0.5],
  [420, 44, 1.7, 0.9], [520, 110, 1, 0.55], [610, 58, 1.3, 0.75], [700, 130, 0.9, 0.5],
  [790, 46, 1.5, 0.85], [880, 116, 1.1, 0.6], [970, 62, 1.6, 0.9], [1060, 140, 1, 0.5],
  [1150, 52, 1.4, 0.8], [1240, 118, 0.9, 0.55], [1330, 66, 1.5, 0.85], [1400, 132, 1.1, 0.6],
  [200, 210, 1, 0.45], [480, 196, 1.2, 0.5], [760, 216, 0.9, 0.4], [1020, 200, 1.2, 0.5],
  [1290, 212, 1, 0.45], [90, 260, 0.9, 0.35], [560, 262, 1, 0.4], [1180, 264, 0.9, 0.35],
];

/**
 * Original Vice City–inspired sunset: gradient sky, slatted synthwave sun,
 * neon ocean reflection and palm silhouettes — all hand-drawn SVG, no photos
 * and no copyrighted artwork. The sun and palms drift at different rates as
 * the hero scrolls away (parallax), disabled for reduced motion.
 */
export default function SunsetArt({ progress }: SunsetArtProps) {
  const reduce = useReducedMotion();
  const sunY = useTransform(progress, [0, 1], reduce ? [0, 0] : [0, 90]);
  const palmY = useTransform(progress, [0, 1], reduce ? [0, 0] : [0, 42]);

  return (
    <div className="sunset" aria-hidden="true">
      <svg viewBox="0 0 1440 620" preserveAspectRatio="xMidYMax slice">
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#16042c" />
            <stop offset="30%" stopColor="#4c0e5c" />
            <stop offset="52%" stopColor="#a4136b" />
            <stop offset="68%" stopColor="#ff2e88" />
            <stop offset="82%" stopColor="#ff7a18" />
            <stop offset="100%" stopColor="#ffb347" />
          </linearGradient>
          <linearGradient id="sun" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffd319" />
            <stop offset="55%" stopColor="#ff7a18" />
            <stop offset="100%" stopColor="#ff2975" />
          </linearGradient>
          <radialGradient id="sunGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#ff7a18" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ff7a18" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a0a3d" />
            <stop offset="100%" stopColor="#0b0614" />
          </linearGradient>
          <radialGradient id="reflection" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#ff7a18" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ff7a18" stopOpacity="0" />
          </radialGradient>
          <mask id="sunSlats">
            <rect x="480" y="150" width="480" height="360" fill="#fff" />
            <rect x="480" y="398" width="480" height="7" fill="#000" />
            <rect x="480" y="424" width="480" height="10" fill="#000" />
            <rect x="480" y="454" width="480" height="14" fill="#000" />
            <rect x="480" y="490" width="480" height="19" fill="#000" />
          </mask>
          {/* One original palm silhouette, reused at different scales. */}
          <g id="palm">
            <path d="M104,260 C100,200 98,140 104,84 L112,84 C108,140 110,200 116,260 Z" />
            <path d="M108,86 C80,52 44,40 10,52 C44,56 78,68 106,92 Z" />
            <path d="M108,88 C72,72 34,76 6,96 C36,96 74,96 108,96 Z" />
            <path d="M108,90 C82,96 52,112 34,138 C58,124 86,108 110,98 Z" />
            <path d="M108,84 C100,50 104,22 118,2 C122,30 122,58 114,86 Z" />
            <path d="M108,86 C134,50 170,38 204,50 C172,56 138,68 110,92 Z" />
            <path d="M108,88 C144,72 182,76 210,96 C180,96 142,96 108,96 Z" />
            <path d="M108,90 C134,96 164,112 182,138 C158,124 130,108 106,98 Z" />
          </g>
        </defs>

        {/* Sky */}
        <rect x="0" y="0" width="1440" height="620" fill="url(#sky)" />

        {/* Stars */}
        {stars.map(([x, y, r, o], i) => (
          <circle key={i} cx={x} cy={y} r={r} fill="#ffffff" opacity={o} />
        ))}

        {/* Sun + glow (parallax layer) */}
        <motion.g style={{ y: sunY }}>
          <circle cx="720" cy="372" r="250" fill="url(#sunGlow)" />
          <circle cx="720" cy="372" r="168" fill="url(#sun)" mask="url(#sunSlats)" />
        </motion.g>

        {/* Ocean */}
        <rect x="0" y="392" width="1440" height="228" fill="url(#sea)" />
        <ellipse cx="720" cy="440" rx="200" ry="92" fill="url(#reflection)" />
        <rect x="560" y="424" width="320" height="2.5" fill="#ff9a3d" opacity="0.55" />
        <rect x="620" y="452" width="200" height="2" fill="#ff7a18" opacity="0.4" />
        <rect x="480" y="486" width="480" height="2" fill="#ff2e88" opacity="0.28" />
        <rect x="660" y="522" width="160" height="2" fill="#ffb347" opacity="0.3" />
        <rect x="380" y="560" width="680" height="1.5" fill="#a855f7" opacity="0.22" />

        {/* Palm silhouettes (parallax layer) */}
        <motion.g style={{ y: palmY }} fill="#0d0518">
          <use href="#palm" transform="translate(-24, 296) scale(1.18)" />
          <use href="#palm" transform="translate(1296, 318) scale(-0.96, 0.96)" />
          <use href="#palm" transform="translate(238, 372) scale(0.58)" />
          <use href="#palm" transform="translate(1080, 384) scale(-0.5, 0.5)" />
        </motion.g>
      </svg>
      <div className="sunset-scrim" />
    </div>
  );
}

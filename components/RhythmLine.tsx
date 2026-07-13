"use client";

import { motion } from "framer-motion";

type RhythmLineProps = {
  className?: string;
  color?: string;
  strokeWidth?: number;
  animate?: boolean;
};

/**
 * Angular meridian divider — a sharp chevron accent line
 * replacing the previous flowing wave motif.
 */
export function RhythmLine({
  className = "",
  color = "#C86B3A",
  strokeWidth = 1.5,
  animate = true,
}: RhythmLineProps) {
  const path = "M0 40 L200 8 L400 40 L600 8 L800 40 L1000 8 L1200 40";

  return (
    <svg
      viewBox="0 0 1200 48"
      preserveAspectRatio="none"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d={path}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="square"
        strokeLinejoin="miter"
        initial={animate ? { pathLength: 0, opacity: 0 } : false}
        whileInView={animate ? { pathLength: 1, opacity: 1 } : undefined}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />
    </svg>
  );
}

export function RhythmDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-5 ${className}`}>
      <span className="h-px w-10 bg-gold/30" />
      <span className="h-2 w-2 rotate-45 bg-gold" />
      <span className="h-px w-10 bg-gold/30" />
    </div>
  );
}

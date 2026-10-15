"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  /** rgba() colour of the cursor-following glow. */
  glow?: string;
  /** Max tilt in degrees; 0 disables the 3D effect. */
  tilt?: number;
};

/**
 * Card with a radial glow that follows the cursor and an optional gentle
 * 3D tilt. Falls back to a static card for touch and reduced-motion users.
 */
export function SpotlightCard({
  children,
  className = "",
  glow = "rgba(74,154,212,0.18)",
  tilt = 0,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const spring = { stiffness: 180, damping: 20 };
  const rotateX = useSpring(useTransform(py, [0, 1], [tilt, -tilt]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-tilt, tilt]), spring);
  const background = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, ${glow}, transparent 70%)`;

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const onLeave = () => {
    mx.set(-400);
    my.set(-400);
    px.set(0.5);
    py.set(0.5);
  };

  const useTilt = tilt > 0 && !reduce;

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={
        useTilt
          ? { rotateX, rotateY, transformPerspective: 900 }
          : undefined
      }
      className={`group relative isolate ${className}`}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      {children}
    </motion.div>
  );
}

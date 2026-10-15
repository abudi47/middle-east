"use client";

import { MotionConfig } from "framer-motion";

/** Honors the visitor's reduced-motion preference for every framer animation. */
export function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

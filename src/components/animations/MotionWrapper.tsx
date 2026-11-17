"use client";

import { MotionConfig } from "motion/react";

/** Applies the user's reduced-motion preference to every Motion animation. */
export function MotionWrapper({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

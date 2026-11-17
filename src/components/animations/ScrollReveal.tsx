"use client";

import { motion, type Variants } from "motion/react";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

/** Parent that reveals its <RevealItem> children in sequence when scrolled into view. */
export function RevealGroup({
  children,
  className,
  stagger,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const variants: Variants = stagger
    ? { hidden: {}, show: { transition: { staggerChildren: stagger } } }
    : container;
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const Comp = as === "li" ? motion.li : motion.div;
  return (
    <Comp className={className} variants={item}>
      {children}
    </Comp>
  );
}

/** Timeline rail that draws itself as it scrolls into view. */
export function TimelineLine({ orientation }: { orientation: "horizontal" | "vertical" }) {
  const horizontal = orientation === "horizontal";
  return (
    <motion.span
      aria-hidden
      className={
        horizontal
          ? "absolute left-[10%] right-[10%] top-7 hidden h-px origin-left bg-gradient-to-r from-brand-electric via-brand-cyan to-brand-electric lg:block"
          : "absolute bottom-8 left-7 top-8 w-px origin-top bg-gradient-to-b from-brand-electric via-brand-cyan to-brand-electric lg:hidden"
      }
      initial={horizontal ? { scaleX: 0 } : { scaleY: 0 }}
      whileInView={horizontal ? { scaleX: 1 } : { scaleY: 1 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 1.4, ease: "easeOut" }}
    />
  );
}

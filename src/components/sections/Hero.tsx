"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { ArrowRight, Bot, Cloud, Code2, Globe, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";

const headline = ["Building", "Digital", "Solutions", "That", "Drive", "Your", "Business", "Forward."];

const wordContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

const word: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const rise = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

const particles = [
  { top: "12%", left: "8%", delay: "0s" },
  { top: "22%", left: "46%", delay: "1.2s" },
  { top: "68%", left: "6%", delay: "2.1s" },
  { top: "80%", left: "38%", delay: "0.6s" },
  { top: "15%", left: "90%", delay: "1.8s" },
  { top: "55%", left: "62%", delay: "2.8s" },
  { top: "90%", left: "84%", delay: "0.3s" },
  { top: "40%", left: "24%", delay: "3.3s" },
];

const chips = [
  { Icon: Globe, label: "Web Apps", className: "-top-5 right-4 sm:-right-4", float: "animate-float" },
  { Icon: Smartphone, label: "Mobile Apps", className: "right-0 top-1/2 sm:-right-8", float: "animate-float-slow" },
  { Icon: Bot, label: "AI Agents", className: "-bottom-8 left-4 sm:-left-4", float: "animate-float-slow" },
  { Icon: Cloud, label: "SaaS", className: "-bottom-8 right-4 sm:right-6", float: "animate-float" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 140]);

  return (
    <section
      id="home"
      ref={ref}
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-brand-navy via-brand-navy to-brand-blue/60 pb-24 pt-32 lg:pt-28"
    >
      {/* Background lighting */}
      <motion.div aria-hidden style={{ y: glowY }} className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-[28rem] w-[28rem] animate-drift rounded-full bg-brand-electric/25 blur-[110px]" />
        <div className="absolute -right-24 top-1/3 h-[26rem] w-[26rem] animate-drift rounded-full bg-brand-cyan/15 blur-[120px] [animation-delay:-6s]" />
      </motion.div>
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      {particles.map((p, i) => (
        <span
          key={i}
          aria-hidden
          style={{ top: p.top, left: p.left, animationDelay: p.delay }}
          className="absolute -z-10 h-1 w-1 animate-twinkle rounded-full bg-brand-cyan"
        />
      ))}

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div>
          <motion.p
            variants={rise(0)}
            initial="hidden"
            animate="show"
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-cyan"
          >
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
            {company.tagline}
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={wordContainer}
            initial="hidden"
            animate="show"
            className="font-display text-[2.5rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl xl:text-7xl"
          >
            {headline.map((w, i) => (
              <motion.span
                key={i}
                variants={word}
                className={`mr-[0.25em] inline-block ${i >= 4 ? "text-gradient" : ""}`}
              >
                {w}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            variants={rise(0.9)}
            initial="hidden"
            animate="show"
            className="mt-7 max-w-xl text-base leading-relaxed text-brand-mist sm:text-lg"
          >
            {company.positioning} We transform ideas into powerful digital experiences through
            innovative software development, SaaS solutions, and technology consulting.
          </motion.p>

          <motion.div
            variants={rise(1.1)}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="#services">
              Explore Our Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </Button>
            <Button href="#contact" variant="secondary">
              Let&apos;s Build Something Together
            </Button>
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          style={{ y: visualY }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
          aria-hidden
        >
          <div className="absolute inset-6 rounded-full bg-brand-electric/30 blur-[80px]" />

          {/* Laptop */}
          <div className="relative animate-float-slow">
            <div className="rounded-2xl border border-white/15 bg-gradient-to-b from-white/15 to-white/5 p-2 shadow-2xl shadow-brand-electric/30 backdrop-blur">
              <div className="overflow-hidden rounded-xl bg-[#04102a]">
                <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-3 flex items-center gap-1.5 text-xs text-brand-mist">
                    <Code2 className="h-3.5 w-3.5" /> system-inn.tsx
                  </span>
                </div>
                <pre className="overflow-hidden p-4 font-mono text-[11px] leading-6 text-brand-mist sm:p-5 sm:text-[13px]">
                  <code>
                    <span className="text-brand-cyan">const</span> <span className="text-white">solution</span> = {"{"}
                    {"\n"}  <span className="text-[#9ec5ff]">idea</span>: <span className="text-[#7ee8b5]">&quot;your vision&quot;</span>,
                    {"\n"}  <span className="text-[#9ec5ff]">approach</span>: [
                    {"\n"}    <span className="text-[#7ee8b5]">&quot;build&quot;</span>,
                    {"\n"}    <span className="text-[#7ee8b5]">&quot;innovate&quot;</span>,
                    {"\n"}    <span className="text-[#7ee8b5]">&quot;grow&quot;</span>,
                    {"\n"}  ],
                    {"\n"}{"}"};
                    {"\n"}
                    {"\n"}<span className="text-brand-cyan">await</span> <span className="text-white">launch</span>(solution);
                  </code>
                </pre>
              </div>
            </div>
            <div className="mx-auto h-3 w-[108%] -translate-x-[3.7%] rounded-b-2xl bg-gradient-to-b from-white/25 to-white/5" />
          </div>

          {chips.map(({ Icon, label, className, float }) => (
            <div
              key={label}
              className={`glass absolute flex items-center gap-2 rounded-2xl px-3.5 py-2.5 text-xs font-semibold text-white shadow-xl shadow-black/30 sm:text-sm ${float} ${className}`}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand-electric to-brand-cyan text-brand-navy">
                <Icon className="h-4 w-4" />
              </span>
              {label}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-mist transition-colors hover:text-white lg:flex"
      >
        Scroll
        <span className="flex h-9 w-5 justify-center rounded-full border border-white/30 pt-1.5">
          <span className="h-1.5 w-1 animate-scroll-dot rounded-full bg-brand-cyan" />
        </span>
      </a>
    </section>
  );
}

"use client";

import { ArrowUp } from "lucide-react";

export function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan hover:bg-brand-cyan/10"
    >
      <ArrowUp className="h-5 w-5 transition-colors group-hover:text-brand-cyan" aria-hidden />
    </button>
  );
}

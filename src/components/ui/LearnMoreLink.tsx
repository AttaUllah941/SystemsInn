"use client";

import { ArrowRight } from "lucide-react";

export const PREFILL_EVENT = "systeminn:prefill-subject";

/** Jumps to the contact form and pre-fills its subject with the chosen service. */
export function LearnMoreLink({ service }: { service: string }) {
  return (
    <a
      href="#contact"
      onClick={() =>
        window.dispatchEvent(
          new CustomEvent(PREFILL_EVENT, { detail: `Enquiry: ${service}` }),
        )
      }
      aria-label={`Learn more about ${service}`}
      className="relative mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-brand-cyan"
    >
      Learn More
      <ArrowRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
        aria-hidden
      />
    </a>
  );
}

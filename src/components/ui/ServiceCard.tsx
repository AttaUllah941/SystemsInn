import { Check } from "lucide-react";
import { LearnMoreLink } from "@/components/ui/LearnMoreLink";
import type { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-cyan/40 hover:shadow-[0_20px_60px_-20px_rgb(8_123_255/0.6)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-electric/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-40"
      />
      <span className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-electric to-brand-cyan text-brand-navy shadow-lg shadow-brand-electric/30 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
        <Icon className="h-7 w-7" aria-hidden />
      </span>
      <h3 className="relative font-display text-xl font-bold text-white">{service.title}</h3>
      <p className="relative mt-3 text-sm leading-relaxed text-brand-mist">{service.description}</p>
      <ul className="relative mt-6 space-y-2.5 text-sm text-white/90">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" aria-hidden />
            {feature}
          </li>
        ))}
      </ul>
      <LearnMoreLink service={service.title} />
    </article>
  );
}

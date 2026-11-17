import { Handshake, Lightbulb, Rocket, ShieldCheck, TrendingUp, Cpu } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { RevealGroup, RevealItem } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  { icon: Lightbulb, label: "Innovation" },
  { icon: TrendingUp, label: "Business growth" },
  { icon: Cpu, label: "Technology-driven solutions" },
  { icon: Handshake, label: "Customer satisfaction" },
  { icon: ShieldCheck, label: "Reliable software development" },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative overflow-x-clip py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <SectionHeading
            id="about-heading"
            align="left"
            eyebrow="About System Inn"
            title="Technology That Empowers Your Business."
          />
          <FadeIn delay={0.1} className="mt-6 space-y-5 text-base leading-relaxed text-brand-mist sm:text-lg">
            <p>
              System Inn is a software development and technology company focused on building
              innovative digital solutions. We combine modern engineering with a clear
              understanding of business goals, so the software we deliver does real work for the
              people who rely on it.
            </p>
            <p>
              From custom applications to SaaS platforms and technology consulting, we aim to be a
              dependable partner that helps your business grow with confidence.
            </p>
          </FadeIn>

          <RevealGroup stagger={0.08} className="mt-8 grid gap-3 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, label }) => (
              <RevealItem key={label}>
                <div className="flex items-center gap-3 text-sm font-medium text-white">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-electric/15 text-brand-cyan">
                    <Icon className="h-4.5 w-4.5" aria-hidden />
                  </span>
                  {label}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <FadeIn delay={0.2} className="mt-10">
            <Button href="#services" variant="secondary">
              Discover More
            </Button>
          </FadeIn>
        </div>

        {/* Visual composition */}
        <FadeIn x={40} y={0} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div aria-hidden className="relative aspect-square">
            <div className="absolute inset-4 rounded-full bg-brand-electric/20 blur-[90px]" />
            <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-brand-blue to-brand-navy" />
            <div className="bg-grid absolute inset-0 rounded-[2.5rem] opacity-70" />

            <div className="glass absolute left-[8%] top-[10%] w-[58%] animate-float rounded-2xl p-5">
              <Rocket className="mb-3 h-7 w-7 text-brand-cyan" />
              <div className="h-2 w-3/4 rounded-full bg-white/30" />
              <div className="mt-2.5 h-2 w-1/2 rounded-full bg-white/15" />
              <div className="mt-5 flex items-end gap-1.5">
                {[40, 65, 50, 80, 95].map((h, i) => (
                  <span
                    key={i}
                    style={{ height: `${h * 0.55}px` }}
                    className="w-full rounded-t-md bg-gradient-to-t from-brand-electric to-brand-cyan"
                  />
                ))}
              </div>
            </div>

            <div className="glass absolute bottom-[10%] right-[6%] w-[52%] animate-float-slow rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-electric to-brand-cyan text-brand-navy">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div className="flex-1 space-y-2">
                  <div className="h-2 w-full rounded-full bg-white/30" />
                  <div className="h-2 w-2/3 rounded-full bg-white/15" />
                </div>
              </div>
              <div className="mt-5 space-y-2">
                <div className="h-2 w-full rounded-full bg-white/10" />
                <div className="h-2 w-5/6 rounded-full bg-white/10" />
                <div className="h-2 w-2/3 rounded-full bg-white/10" />
              </div>
            </div>

            <span className="absolute right-[12%] top-[16%] h-16 w-16 animate-float-slow rounded-full bg-gradient-to-br from-brand-cyan/40 to-brand-electric/10 blur-sm" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

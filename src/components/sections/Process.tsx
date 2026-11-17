import { RevealGroup, RevealItem, TimelineLine } from "@/components/animations/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/company";

export function Process() {
  return (
    <section id="process" aria-labelledby="process-heading" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="process-heading"
          eyebrow="How We Work"
          title="Turning Ideas Into Reality."
          description="A clear, collaborative process that keeps you informed from the first conversation to launch and beyond."
        />

        <div className="relative mt-16">
          <TimelineLine orientation="horizontal" />
          <TimelineLine orientation="vertical" />
          <RevealGroup stagger={0.15}>
            <ol className="grid gap-10 lg:grid-cols-5 lg:gap-6">
              {processSteps.map(({ title, description, icon: Icon }, index) => (
                <RevealItem
                  as="li"
                  key={title}
                  className="relative flex gap-5 lg:flex-col lg:items-center lg:gap-6 lg:text-center"
                >
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-brand-cyan/50 bg-brand-navy text-brand-cyan shadow-[0_0_30px_-4px_rgb(22_201_245/0.5)]">
                    <Icon className="h-6 w-6" aria-hidden />
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-brand-electric to-brand-cyan text-[11px] font-extrabold text-brand-navy">
                      {index + 1}
                    </span>
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-mist">{description}</p>
                  </div>
                </RevealItem>
              ))}
            </ol>
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}

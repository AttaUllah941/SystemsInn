import { RevealGroup, RevealItem } from "@/components/animations/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reasons } from "@/data/company";

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-heading"
      className="relative bg-gradient-to-b from-transparent via-brand-blue/30 to-transparent py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="why-heading"
          eyebrow="Why Choose Us"
          title="Why Businesses Choose System Inn"
          description="The principles that guide how we work with every client and every project."
        />
        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ title, description, icon: Icon }, index) => (
            <RevealItem key={title} className="h-full">
              <article className="glass group relative h-full overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-cyan/40 hover:shadow-[0_20px_60px_-24px_rgb(22_201_245/0.5)]">
                <span
                  aria-hidden
                  className="absolute right-5 top-4 font-display text-6xl font-extrabold text-white/[0.04] transition-colors duration-500 group-hover:text-brand-cyan/10"
                >
                  0{index + 1}
                </span>
                <span className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-cyan/30 bg-brand-electric/10 text-brand-cyan transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-brand-electric group-hover:to-brand-cyan group-hover:text-brand-navy">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="relative font-display text-lg font-bold text-white">{title}</h3>
                <p className="relative mt-2.5 text-sm leading-relaxed text-brand-mist">{description}</p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

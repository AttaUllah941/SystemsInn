import { RevealGroup, RevealItem } from "@/components/animations/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/company";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative bg-gradient-to-b from-transparent via-brand-blue/30 to-transparent py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="services-heading"
          eyebrow="What We Do"
          title="Our Services"
          description="Delivering innovative technology solutions that help businesses grow, operate efficiently, and achieve their digital goals."
        />
        <RevealGroup className="mt-16 flex flex-wrap justify-center gap-6">
          {services.map((service) => (
            <RevealItem
              key={service.title}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <ServiceCard service={service} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

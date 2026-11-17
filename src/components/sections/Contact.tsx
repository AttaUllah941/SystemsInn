import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { RevealGroup, RevealItem } from "@/components/animations/ScrollReveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company } from "@/data/company";

const cards = [
  {
    icon: Mail,
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
    external: false,
  },
  {
    icon: Phone,
    label: "Phone",
    value: company.phoneDisplay,
    href: company.phoneHref,
    external: false,
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: company.address.display,
    href: company.address.mapsHref,
    external: true,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "SystemInn on LinkedIn",
    href: company.linkedin,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-electric/15 blur-[120px]"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="contact-heading"
          eyebrow="Contact"
          title="Let's Start a Conversation."
          description="Have a project in mind? Get in touch with our team and let's discuss how we can help."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <RevealGroup className="flex flex-col gap-5" stagger={0.12}>
            {cards.map(({ icon: Icon, label, value, href, external }) => (
              <RevealItem key={label} className="min-w-0">
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  aria-label={`${label}: ${value}${external ? " (opens in a new tab)" : ""}`}
                  className="glass group flex items-center gap-4 rounded-3xl p-4 transition-all sm:gap-5 sm:p-6 duration-300 hover:-translate-y-1 hover:border-brand-cyan/40 hover:shadow-[0_16px_50px_-20px_rgb(8_123_255/0.6)]"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-electric to-brand-cyan text-brand-navy transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-brand-cyan">
                      {label}
                    </span>
                    <span className="mt-1 block font-medium text-white [overflow-wrap:anywhere]">{value}</span>
                  </span>
                  <ArrowUpRight
                    className="ml-auto h-5 w-5 shrink-0 text-brand-mist transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-cyan"
                    aria-hidden
                  />
                </a>
              </RevealItem>
            ))}
          </RevealGroup>

          <FadeIn delay={0.1}>
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}


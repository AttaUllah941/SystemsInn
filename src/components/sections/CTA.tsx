import { Mail, MessageSquare } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";

export function CTA() {
  return (
    <section aria-labelledby="cta-heading" className="px-5 py-12 sm:px-8 sm:py-16">
      <FadeIn className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-electric via-[#0a5fe0] to-brand-blue px-6 py-16 text-center shadow-[0_30px_100px_-30px_rgb(8_123_255/0.8)] sm:px-12 sm:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-20 h-72 w-72 animate-drift rounded-full bg-brand-cyan/40 blur-[80px]" />
          <div className="absolute -bottom-24 -right-16 h-80 w-80 animate-drift rounded-full bg-white/20 blur-[90px] [animation-delay:-7s]" />
          <div className="bg-grid absolute inset-0 opacity-60" />
        </div>

        <div className="relative mx-auto max-w-3xl">
          <h2
            id="cta-heading"
            className="font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl"
          >
            Let&apos;s Build Something Great Together.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            Have an idea or business challenge? Let&apos;s discuss how technology can help you
            achieve your goals.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="#contact" variant="light">
              <MessageSquare className="h-4 w-4" aria-hidden />
              Contact Us
            </Button>
            <Button href={`mailto:${company.email}`} variant="outline-light">
              <Mail className="h-4 w-4" aria-hidden />
              Email Our Team
            </Button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

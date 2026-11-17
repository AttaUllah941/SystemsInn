import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";
import { Logo } from "@/components/ui/Logo";
import { BackToTop } from "@/components/layout/BackToTop";
import { company, navLinks, services } from "@/data/company";

const heading = "font-display text-sm font-bold uppercase tracking-wider text-white";
const link = "text-sm text-brand-mist transition-colors hover:text-brand-cyan";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-brand-navy">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-electric to-transparent"
      />
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.3fr_1.3fr]">
          <div>
            <Link href="#home" aria-label="System Inn — back to top">
              <Logo size="lg" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-brand-mist">
              {company.description}
            </p>
            <a
              href={company.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="System Inn on LinkedIn (opens in a new tab)"
              className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all hover:-translate-y-0.5 hover:border-brand-cyan hover:text-brand-cyan"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>

          <nav aria-label="Footer">
            <h2 className={heading}>Navigation</h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <Link href={item.href} className={link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={heading}>Services</h2>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.title}>
                  <Link href="#services" className={link}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={heading}>Contact</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={`mailto:${company.email}`} className={`${link} inline-flex items-center gap-2.5 break-all`}>
                  <Mail className="h-4 w-4 shrink-0 text-brand-cyan" aria-hidden />
                  {company.email}
                </a>
              </li>
              <li>
                <a href={company.phoneHref} className={`${link} inline-flex items-center gap-2.5`}>
                  <Phone className="h-4 w-4 shrink-0 text-brand-cyan" aria-hidden />
                  {company.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={company.address.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Address: ${company.address.display} (opens in Google Maps)`}
                  className={`${link} inline-flex items-start gap-2.5`}
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" aria-hidden />
                  {company.address.display}
                </a>
              </li>
              <li>
                <a
                  href={company.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link} inline-flex items-center gap-2.5`}
                >
                  <LinkedinIcon className="h-4 w-4 shrink-0 text-brand-cyan" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <div className="text-sm text-brand-mist">
            <p className="font-medium text-white">{company.footerLine}</p>
            <p className="mt-1">© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          </div>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}


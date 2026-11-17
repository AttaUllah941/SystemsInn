import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "light" | "outline-light";

const base =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 will-change-transform hover:-translate-y-0.5 active:translate-y-0 sm:text-base";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-brand-electric to-brand-cyan text-brand-navy shadow-[0_8px_30px_-8px_rgb(8_123_255/0.7)] hover:shadow-[0_12px_40px_-6px_rgb(22_201_245/0.7)]",
  secondary:
    "glass text-white hover:border-brand-cyan/60 hover:bg-white/10",
  light: "bg-white text-brand-blue shadow-lg hover:bg-brand-mist/90",
  "outline-light":
    "border border-white/60 text-white hover:border-white hover:bg-white/15",
};

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  "aria-label"?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);
  if (external || /^(mailto:|tel:|https?:)/.test(href)) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

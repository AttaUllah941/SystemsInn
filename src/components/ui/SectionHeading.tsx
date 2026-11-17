import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  id,
}: SectionHeadingProps) {
  return (
    <FadeIn className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
        <span aria-hidden className="h-px w-8 bg-brand-cyan" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className="font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-brand-mist sm:text-lg">{description}</p>
      )}
    </FadeIn>
  );
}

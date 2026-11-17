import Image from "next/image";
import { cn } from "@/lib/utils";

/** Official SystemInn badge (public/logo/system-inn-logo.jpg) with a live wordmark beside it. */
export function Logo({
  className,
  priority,
  size = "md",
}: {
  className?: string;
  priority?: boolean;
  size?: "md" | "lg";
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <Image
        src="/logo/system-inn-logo.jpg"
        alt="SystemInn logo"
        width={96}
        height={96}
        priority={priority}
        className={cn(
          "shrink-0 rounded-full ring-2 ring-white/20",
          size === "lg" ? "h-16 w-16" : "h-12 w-12",
        )}
      />
      <span className="font-display text-xl font-extrabold leading-none tracking-tight text-white">
        System<span className="text-brand-cyan">Inn</span>
      </span>
    </span>
  );
}

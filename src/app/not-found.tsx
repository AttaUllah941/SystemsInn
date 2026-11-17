import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-brand-navy px-6 text-center">
      <Logo />
      <p className="text-gradient mt-10 font-display text-7xl font-extrabold">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-white">Page not found</h1>
      <p className="mt-3 max-w-md text-brand-mist">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-12 items-center rounded-full bg-gradient-to-r from-brand-electric to-brand-cyan px-7 font-semibold text-brand-navy transition-transform hover:-translate-y-0.5"
      >
        Back to home
      </Link>
    </main>
  );
}

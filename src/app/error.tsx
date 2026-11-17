"use client";

import { useEffect } from "react";

export default function Error({ error, retry }: { error: unknown; retry: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-brand-navy px-6 text-center">
      <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-md text-brand-mist">
        An unexpected error occurred. Please try again, or contact us if the problem continues.
      </p>
      <button
        type="button"
        onClick={() => retry()}
        className="mt-8 inline-flex min-h-12 items-center rounded-full bg-gradient-to-r from-brand-electric to-brand-cyan px-7 font-semibold text-brand-navy transition-transform hover:-translate-y-0.5"
      >
        Try again
      </button>
    </main>
  );
}

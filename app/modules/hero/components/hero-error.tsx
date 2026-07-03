// src/modules/hero/components/hero-error.tsx

"use client";

import { AlertCircle } from "lucide-react";

interface HeroErrorProps {
  onRetry: () => void;
}

export function HeroError({
  onRetry,
}: HeroErrorProps) {
  return (
    <section className="container mx-auto flex min-h-[80vh] items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
          <AlertCircle className="size-10 text-destructive" />
        </div>

        <h2 className="text-3xl font-bold">
          Failed to load portfolio
        </h2>

        <p className="mt-4 text-muted-foreground">
          Something went wrong while loading the
          hero section. Please try again.
        </p>

        <button
          onClick={onRetry}
          className="mt-8 rounded-xl bg-primary px-8 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
        >
          Retry
        </button>
      </div>
    </section>
  );
}
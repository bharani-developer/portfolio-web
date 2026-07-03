// src/modules/hero/components/hero.tsx

"use client";

import { HeroError } from "./hero-error";
import { HeroSection } from "./hero-section";
import { HeroSkeleton } from "./hero-skeleton";

import { useHero } from "../hooks/use-hero";

export function Hero() {
  const {
    hero,
    isLoading,
    isError,
    refetch,
  } = useHero();

  if (isLoading) {
    return <HeroSkeleton />;
  }

  if (isError || !hero) {
    return (
      <HeroError
        onRetry={() => {
          void refetch();
        }}
      />
    );
  }

  return <HeroSection hero={hero} />;
}
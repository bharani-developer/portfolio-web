// src/modules/skills/components/skills-skeleton.tsx

"use client";

import { cn } from "@/src/shared/lib/utils";

function SkillChipSkeleton() {
  return (
    <div
      className={cn(
        "rounded-xl",
        "border border-white/10",
        "bg-white/[0.03]",
        "p-3",
        "animate-pulse",
      )}
    >
      <div className="flex items-center gap-3">
        <div className="size-10 rounded-xl bg-white/10" />

        <div className="min-w-0 flex-1 space-y-2">
          <div className="h-4 w-24 rounded bg-white/10" />

          <div className="h-3 w-16 rounded bg-white/10" />
        </div>

        <div className="h-4 w-8 rounded bg-white/10" />
      </div>

      <div className="mt-3 h-2 rounded-full bg-white/10" />
    </div>
  );
}

function SkillsCategorySkeleton() {
  return (
    <section className={cn("animate-pulse", "space-y-6")}>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex items-start gap-4">
          <div className="size-14 rounded-2xl bg-white/10" />

          <div className="space-y-3">
            <div className="h-6 w-40 rounded bg-white/10" />

            <div className="h-4 w-72 rounded bg-white/10" />

            <div className="h-4 w-64 rounded bg-white/10" />
          </div>
        </div>

        <div className="h-8 w-28 rounded-full bg-white/10" />
      </div>

      <div className="h-px w-full bg-white/10" />

      <div
        className={cn(
          "grid",
          "grid-cols-2",
          "gap-3",
          "sm:grid-cols-3",
          "lg:grid-cols-4",
          "xl:grid-cols-5",
          "2xl:grid-cols-6",
        )}
      >
        {Array.from({
          length: 12,
        }).map((_, index) => (
          <SkillChipSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}

export function SkillsSkeleton() {
  return (
    <div className={cn("flex flex-col", "space-y-16")}>
      {Array.from({
        length: 6,
      }).map((_, index) => (
        <SkillsCategorySkeleton key={index} />
      ))}
    </div>
  );
}

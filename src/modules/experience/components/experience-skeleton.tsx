// src/modules/experience/components/experience-skeleton.tsx

"use client";

import * as React from "react";

import { motion } from "motion/react";

import { Skeleton } from "@/src/components/ui/skeleton";

import { cn } from "@/src/shared/lib/utils";

interface ExperienceSkeletonProps {
  readonly count?: number;

  readonly className?: string;
}

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.12,
    },
  },
} as const;

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
} as const;

interface SkeletonLineProps {
  readonly width: string;
}

function SkeletonLine({
  width,
}: Readonly<SkeletonLineProps>): React.JSX.Element {
  return (
    <Skeleton
      className={cn(
        "h-4 rounded-full",
        width,
      )}
    />
  );
}

function TimelineNode(): React.JSX.Element {
  return (
    <div
      className={cn(
        "absolute left-[18px] top-8 z-20 hidden lg:block",
        "-translate-x-1/2",
      )}
    >
      <Skeleton className="h-5 w-5 rounded-full" />
    </div>
  );
}

export function ExperienceSkeleton({
  count = 4,
  className,
}: Readonly<ExperienceSkeletonProps>): React.JSX.Element {
    return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      role="status"
      aria-label="Loading experience timeline"
      aria-live="polite"
      className={cn(
        "relative mx-auto max-w-6xl",
        className,
      )}
    >
      {/* Desktop Timeline */}

      <div
        aria-hidden
        className={cn(
          "absolute left-[18px] top-0 hidden h-full w-px",
          "bg-gradient-to-b",
          "from-transparent",
          "via-border",
          "to-transparent",
          "lg:block",
        )}
      />

      {/* Mobile Timeline */}

      <div
        aria-hidden
        className={cn(
          "absolute left-4 top-0 block h-full w-px",
          "bg-border/60",
          "lg:hidden",
        )}
      />

      <div className="space-y-10">
        {Array.from({
          length: count,
        }).map((_, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative"
          >
            <TimelineNode />

            {/* Mobile Node */}

            <div className="absolute left-4 top-8 block -translate-x-1/2 lg:hidden">
              <Skeleton className="h-4 w-4 rounded-full" />
            </div>

            <div className="pl-10 lg:pl-16">
              <div
                className={cn(
                  "overflow-hidden rounded-3xl",
                  "border border-border/60",
                  "bg-card/70",
                  "backdrop-blur-xl",
                  "shadow-sm",
                )}
              >
                <div className="p-8">
                  {/* Header */}

                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                    <div className="flex flex-1 items-start gap-5">
                      {/* Company Logo */}

                      <Skeleton className="h-16 w-16 shrink-0 rounded-2xl" />

                      {/* Title */}

                      <div className="flex-1 space-y-3">
                        <Skeleton className="h-7 w-56 rounded-full" />

                        <Skeleton className="h-5 w-40 rounded-full" />

                        <div className="flex gap-2">
                          <Skeleton className="h-6 w-24 rounded-full" />

                          <Skeleton className="h-6 w-20 rounded-full" />
                        </div>
                      </div>
                    </div>

                    {/* Right Badges */}

                    <div className="flex gap-2">
                      <Skeleton className="h-8 w-24 rounded-full" />

                      <Skeleton className="h-8 w-20 rounded-full" />
                    </div>
                  </div>
                                    {/* Meta Information */}

                  <div className="mt-8 flex flex-wrap gap-6">
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-4 w-4 rounded-full" />

                      <Skeleton className="h-4 w-36 rounded-full" />
                    </div>

                    <div className="flex items-center gap-2">
                      <Skeleton className="h-4 w-4 rounded-full" />

                      <Skeleton className="h-4 w-28 rounded-full" />
                    </div>

                    <div className="flex items-center gap-2">
                      <Skeleton className="h-4 w-4 rounded-full" />

                      <Skeleton className="h-4 w-24 rounded-full" />
                    </div>
                  </div>

                  {/* Summary */}

                  <div className="mt-8 space-y-3">
                    <SkeletonLine width="w-full" />

                    <SkeletonLine width="w-[95%]" />

                    <SkeletonLine width="w-[88%]" />

                    <SkeletonLine width="w-[75%]" />
                  </div>

                  {/* Responsibilities */}

                  <div className="mt-10">
                    <Skeleton className="mb-5 h-5 w-44 rounded-full" />

                    <div className="space-y-4">
                      {Array.from({
                        length: 4,
                      }).map((_, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3"
                        >
                          <Skeleton className="mt-2 h-2 w-2 rounded-full" />

                          <div className="flex-1 space-y-2">
                            <SkeletonLine width="w-full" />

                            <SkeletonLine width="w-[90%]" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}

                  <div className="mt-10">
                    <Skeleton className="mb-5 h-5 w-36 rounded-full" />

                    <div className="flex flex-wrap gap-2">
                      {Array.from({
                        length: 8,
                      }).map((_, index) => (
                        <Skeleton
                          key={index}
                          className="h-8 w-24 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                                    {/* Footer */}

                  <div className="mt-10 flex justify-end">
                    <Skeleton className="h-11 w-44 rounded-xl" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Screen Reader */}

      <span className="sr-only">
        Loading professional experience...
      </span>
    </motion.div>
  );
}

ExperienceSkeleton.displayName =
  "ExperienceSkeleton";

export default React.memo(
  ExperienceSkeleton,
);
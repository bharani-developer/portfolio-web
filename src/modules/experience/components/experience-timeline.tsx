// src/modules/experience/components/experience-timeline.tsx

"use client";

import * as React from "react";

import { motion } from "motion/react";

import { cn } from "@/src/shared/lib/utils";

import type { Experience } from "../types/experience.types";

import { ExperienceCard } from "./experience-card";

interface ExperienceTimelineProps {
  readonly experiences: Experience[];

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
      delayChildren: 0.08,
    },
  },
} as const;

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
} as const;

export function ExperienceTimeline({
  experiences,
  className,
}: Readonly<ExperienceTimelineProps>): React.JSX.Element {
  const prefersReducedMotion = React.useMemo(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const sortedExperiences = React.useMemo(() => {
    return [...experiences].sort((a, b) => {
      if (a.sortOrder !== b.sortOrder) {
        return b.sortOrder - a.sortOrder;
      }

      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    });
  }, [experiences]);

  if (sortedExperiences.length === 0) {
    return (
      <div
        role="status"
        aria-live="polite"
        className={cn(
          "flex min-h-80 items-center justify-center rounded-3xl",
          "border border-dashed border-border",
          "bg-card/40",
          className,
        )}
      >
        <div className="max-w-md text-center">
          <h3 className="text-xl font-semibold">No experience available</h3>

          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Professional experience will appear here once it has been published.
          </p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      role="list"
      aria-label="Professional experience timeline"
      variants={prefersReducedMotion ? undefined : containerVariants}
      initial={prefersReducedMotion ? undefined : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "visible"}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className={cn("relative mx-auto max-w-6xl", className)}
    >
      {/* Desktop Timeline */}

      <div
        aria-hidden="true"
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
        aria-hidden="true"
        className="absolute left-4 top-0 block h-full w-px bg-border/60 lg:hidden"
      />

      <div className="space-y-10">
        {sortedExperiences.map((experience, index) => {
          const isLast = index === sortedExperiences.length - 1;

          return (
            <motion.article
              key={experience._id}
              role="listitem"
              variants={prefersReducedMotion ? undefined : itemVariants}
              className="relative"
            >
              {/* Desktop Timeline Node */}

              <div
                className={cn(
                  "absolute left-[18px] top-5 z-20 hidden -translate-x-1/2 lg:block",
                )}
              >
                <motion.div
                  initial={
                    prefersReducedMotion
                      ? undefined
                      : {
                          opacity: 0,
                          scale: 0.8,
                        }
                  }
                  whileInView={
                    prefersReducedMotion
                      ? undefined
                      : {
                          opacity: 1,
                          scale: 1,
                        }
                  }
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="relative"
                >
                  {/* Current Position Pulse */}

                  {experience.isCurrent && (
                    <span className="absolute inset-0 animate-ping rounded-full bg-primary/30" />
                  )}

                  <span
                    className={cn(
                      "relative flex h-5 w-5 items-center justify-center rounded-full",
                      "border-4 border-background shadow-lg",
                      experience.isCurrent ? "bg-primary" : "bg-muted",
                    )}
                  >
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        experience.isCurrent
                          ? "bg-primary-foreground"
                          : "bg-foreground/70",
                      )}
                    />
                  </span>
                </motion.div>
              </div>

              {/* Mobile Timeline Node */}

              <div
                className={cn(
                  "absolute left-4 top-5 z-20 -translate-x-1/2 lg:hidden",
                )}
              >
                <span
                  className={cn(
                    "block h-3 w-3 rounded-full",
                    experience.isCurrent ? "bg-primary" : "bg-muted-foreground",
                  )}
                />
              </div>
              {/* Desktop Timeline Connector */}

              {!isLast && (
                <div
                  aria-hidden="true"
                  className={cn(
                    "absolute left-[18px] top-10 hidden lg:block",
                    "h-[calc(100%+2.5rem)] w-px",
                    "bg-gradient-to-b",
                    "from-border",
                    "via-border/70",
                    "to-transparent",
                  )}
                />
              )}

              {/* Mobile Timeline Connector */}

              {!isLast && (
                <div
                  aria-hidden="true"
                  className={cn(
                    "absolute left-4 top-8 block lg:hidden",
                    "h-[calc(100%+2.5rem)] w-px",
                    "bg-border/60",
                  )}
                />
              )}

              {/* Experience Card */}

              <div className="pl-10 lg:pl-16">
                <ExperienceCard experience={experience} isLast={isLast} />
              </div>
            </motion.article>
          );
        })}
      </div>
    </motion.div>
  );
}

ExperienceTimeline.displayName = "ExperienceTimeline";

export default React.memo(ExperienceTimeline);

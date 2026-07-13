"use client";

import * as React from "react";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "motion/react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/src/shared/lib/utils";

import type { Experience } from "../types/experience.types";

import { ExperienceCard } from "./experience-card";

interface ExperienceTimelineProps {
  readonly experiences: Experience[];
  readonly className?: string;
}

const CARD_WIDTH = 660;
const CARD_GAP = 32;
const SCROLL_AMOUNT = CARD_WIDTH + CARD_GAP;

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

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
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = React.useState(false);

  const [canScrollRight, setCanScrollRight] = React.useState(false);

  const [activeIndex, setActiveIndex] = React.useState(0);

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

  const { scrollXProgress } = useScroll({
    container: scrollRef,
  });

  const progress = useSpring(scrollXProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.3,
  });

  const updateScrollState = React.useCallback(() => {
    const container = scrollRef.current;

    if (!container) {
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = container;

    setCanScrollLeft(scrollLeft > 8);

    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 8);

    const step = CARD_WIDTH + CARD_GAP;

    const current = Math.round(scrollLeft / step);

    setActiveIndex(
      Math.min(Math.max(current, 0), Math.max(sortedExperiences.length - 1, 0)),
    );
  }, [sortedExperiences.length]);

  React.useEffect(() => {
    updateScrollState();

    const container = scrollRef.current;

    if (!container) {
      return;
    }

    container.addEventListener("scroll", updateScrollState, {
      passive: true,
    });

    window.addEventListener("resize", updateScrollState);

    return () => {
      container.removeEventListener("scroll", updateScrollState);

      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  useMotionValueEvent(progress, "change", () => {
    updateScrollState();
  });

  const scrollByAmount = React.useCallback(
    (direction: "left" | "right") => {
      const container = scrollRef.current;

      if (!container) {
        return;
      }

      container.scrollBy({
        left: direction === "right" ? SCROLL_AMOUNT : -SCROLL_AMOUNT,

        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    },
    [prefersReducedMotion],
  );

  const scrollToIndex = React.useCallback(
    (index: number) => {
      const container = scrollRef.current;

      if (!container) {
        return;
      }

      container.scrollTo({
        left: index * (CARD_WIDTH + CARD_GAP),

        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    },
    [prefersReducedMotion],
  );

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      switch (event.key) {
        case "ArrowLeft": {
          event.preventDefault();

          scrollByAmount("left");

          break;
        }

        case "ArrowRight": {
          event.preventDefault();

          scrollByAmount("right");

          break;
        }

        case "Home": {
          event.preventDefault();

          scrollToIndex(0);

          break;
        }

        case "End": {
          event.preventDefault();

          scrollToIndex(sortedExperiences.length - 1);

          break;
        }

        default:
          break;
      }
    },
    [scrollByAmount, scrollToIndex, sortedExperiences.length],
  );

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
    <section
      aria-label="Professional experience timeline"
      className={cn("relative w-full", className)}
    >
      <motion.div
        variants={prefersReducedMotion ? undefined : containerVariants}
        initial={prefersReducedMotion ? undefined : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="relative"
      >
        {/* Header */}

        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
              Career Journey
            </p>

            <h2 className="text-3xl font-bold tracking-tight">
              Professional Experience
            </h2>

            <p className="max-w-2xl text-muted-foreground">
              Explore my professional journey across companies, projects,
              leadership responsibilities, and the technologies Ive worked with
              over the years.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Scroll timeline left"
              disabled={!canScrollLeft}
              onClick={() => scrollByAmount("left")}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full",
                "border border-border bg-background",
                "transition-all duration-200",
                "hover:border-primary hover:bg-primary hover:text-primary-foreground",
                "disabled:pointer-events-none disabled:opacity-40",
              )}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              aria-label="Scroll timeline right"
              disabled={!canScrollRight}
              onClick={() => scrollByAmount("right")}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full",
                "border border-border bg-background",
                "transition-all duration-200",
                "hover:border-primary hover:bg-primary hover:text-primary-foreground",
                "disabled:pointer-events-none disabled:opacity-40",
              )}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Progress */}

        <div className="mb-8">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Experience {activeIndex + 1} of {sortedExperiences.length}
            </span>

            <span className="text-sm font-medium">
              {Math.round(((activeIndex + 1) / sortedExperiences.length) * 100)}
              %
            </span>
          </div>

          <div className="relative h-1 overflow-hidden rounded-full bg-border/50">
            <motion.div
              style={{
                scaleX: progress,
                transformOrigin: "left center",
              }}
              className={cn(
                "absolute inset-y-0 left-0",
                "rounded-full bg-primary",
              )}
            />
          </div>
        </div>

        {/* Edge Fade */}

        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-24 bg-gradient-to-r from-background via-background/90 to-transparent lg:block" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden w-24 bg-gradient-to-l from-background via-background/90 to-transparent lg:block" />

        {/* Horizontal Timeline */}

        <div
          ref={scrollRef}
          role="list"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className={cn(
            "relative overflow-x-auto overflow-y-hidden",
            "scroll-smooth",
            "pb-8",
            "focus-visible:outline-none",
            "snap-x snap-mandatory",
            "[scrollbar-width:none]",
            "[-ms-overflow-style:none]",
            "[&::-webkit-scrollbar]:hidden",
          )}
        >
          <div
            className="relative flex items-start gap-8"
            style={{
              width: "max-content",
              minWidth: "100%",
            }}
          >
            {/* Timeline Line */}

            <div
              aria-hidden="true"
              className={cn("absolute left-0 right-0 top-8", "h-px bg-border")}
            />

            <AnimatePresence initial={false}>
              {sortedExperiences.map((experience, index) => {
                const isLast = index === sortedExperiences.length - 1;

                return (
                  <motion.article
                    key={experience._id}
                    role="listitem"
                    variants={prefersReducedMotion ? undefined : itemVariants}
                    layout
                className={cn(
  "relative shrink-0 snap-center",
  "w-[520px]",
  "max-w-[94vw]",
)}
                  >
                    {/* Timeline Node */}

                    <div className="relative mb-10 flex justify-center">
                      <motion.div
                        initial={
                          prefersReducedMotion
                            ? undefined
                            : {
                                opacity: 0,
                                scale: 0.75,
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
                          amount: 0.5,
                        }}
                        transition={{
                          duration: 0.35,
                        }}
                        className="relative z-10"
                      >
                        {experience.isCurrent && (
                          <>
                            <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />

                            <span className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
                          </>
                        )}

                        <span
                          className={cn(
                            "relative flex h-6 w-6 items-center justify-center rounded-full",
                            "border-[5px] border-background shadow-xl",
                            experience.isCurrent ? "bg-primary" : "bg-muted",
                          )}
                        >
                          <span
                            className={cn(
                              "h-2 w-2 rounded-full",
                              experience.isCurrent
                                ? "bg-primary-foreground"
                                : "bg-foreground/70",
                            )}
                          />
                        </span>
                      </motion.div>
                    </div>

                    {/* Experience Card */}

                    <ExperienceCard experience={experience} isLast={isLast} />
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
        {/* Timeline Indicators */}

        <div className="mt-8 hidden items-center justify-center gap-3 lg:flex">
          {sortedExperiences.map((experience, index) => (
            <button
              key={experience._id}
              type="button"
              aria-label={`Go to ${experience.company}`}
              aria-current={activeIndex === index ? "true" : undefined}
              onClick={() => scrollToIndex(index)}
              className={cn(
                "relative h-3 w-3 rounded-full transition-all duration-300",
                activeIndex === index
                  ? "w-8 bg-primary"
                  : "bg-border hover:bg-primary/60",
              )}
            >
              <span className="sr-only">{experience.company}</span>
            </button>
          ))}
        </div>

        {/* Current Experience */}

        <div className="mt-6 hidden items-center justify-center lg:flex">
          <motion.div
            key={activeIndex}
            initial={
              prefersReducedMotion
                ? undefined
                : {
                    opacity: 0,
                    y: 8,
                  }
            }
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            exit={
              prefersReducedMotion
                ? undefined
                : {
                    opacity: 0,
                    y: -8,
                  }
            }
            transition={{
              duration: 0.25,
            }}
            className="text-center"
          >
            <p className="text-sm font-medium">
              {sortedExperiences[activeIndex]?.position}
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              {sortedExperiences[activeIndex]?.company}
            </p>
          </motion.div>
        </div>

        {/* Mobile Layout */}

        <div className="mt-8 space-y-8 lg:hidden">
          {sortedExperiences.map((experience, index) => {
            const isLast = index === sortedExperiences.length - 1;

            return (
              <motion.article
                key={`mobile-${experience._id}`}
                variants={prefersReducedMotion ? undefined : itemVariants}
                className="relative pl-10"
              >
                {!isLast && (
                  <div
                    aria-hidden="true"
                    className={cn(
                      "absolute left-[11px] top-6",
                      "h-[calc(100%+2rem)] w-px",
                      "bg-border",
                    )}
                  />
                )}

                <div className="absolute left-0 top-1">
                  <span
                    className={cn(
                      "flex h-6 w-6 items-center justify-center rounded-full",
                      "border-4 border-background shadow-md",
                      experience.isCurrent ? "bg-primary" : "bg-muted",
                    )}
                  >
                    <span
                      className={cn(
                        "h-2 w-2 rounded-full",
                        experience.isCurrent
                          ? "bg-primary-foreground"
                          : "bg-foreground/70",
                      )}
                    />
                  </span>
                </div>

                <ExperienceCard experience={experience} isLast={isLast} />
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

ExperienceTimeline.displayName = "ExperienceTimeline";

export default React.memo(ExperienceTimeline);

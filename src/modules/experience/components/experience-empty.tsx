// src/modules/experience/components/experience-empty.tsx

"use client";

import * as React from "react";

import Link from "next/link";

import { motion, type Variants } from "motion/react";
import {
  ArrowRightIcon,
  BriefcaseBusinessIcon,
  SparklesIcon,
} from "lucide-react";

import { Button } from "@/src/components/ui/button";

import { ROUTES } from "@/src/shared/constants/routes";
import { cn } from "@/src/shared/lib/utils";

interface ExperienceEmptyProps {
  readonly className?: string;

  readonly title?: string;

  readonly description?: string;

  readonly showAction?: boolean;
}

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const floatingVariants: Variants = {
  initial: {
    y: 0,
  },

  animate: {
    y: [-6, 6, -6],

    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function ExperienceEmpty({
  className,

  title = "Experience Coming Soon",

  description = "Professional work history is currently being updated. Please check back soon to explore my experience, achievements, and career journey.",

  showAction = true,
}: Readonly<ExperienceEmptyProps>): React.JSX.Element {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn("relative", className)}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-3xl",
          "border border-border/60",
          "bg-card/70",
          "backdrop-blur-xl",
          "shadow-xl",
        )}
      >
        {/* Background */}

        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,.08),transparent_35%)]" />

        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,.02),transparent)]" />

        {/* Decorative Glow */}

        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          aria-hidden
          className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
        />

        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{
            delay: 1.5,
          }}
          aria-hidden
          className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"
        />

        <div className="relative z-10 flex flex-col items-center px-8 py-16 text-center sm:px-12">
          {/* Icon */}

          <motion.div
            whileHover={{
              scale: 1.05,
              rotate: -5,
            }}
            transition={{
              duration: 0.25,
            }}
            className={cn(
              "relative",
              "flex h-24 w-24 items-center justify-center",
              "rounded-3xl",
              "border border-cyan-500/20",
              "bg-cyan-500/10",
              "shadow-lg",
            )}
          >
            <span className="absolute inset-0 rounded-3xl bg-cyan-500/10 blur-xl" />

            <BriefcaseBusinessIcon className="relative h-10 w-10 text-cyan-400" />
          </motion.div>

          {/* Badge */}

          <div
            className={cn(
              "mt-8 inline-flex items-center gap-2",
              "rounded-full",
              "border border-cyan-500/20",
              "bg-cyan-500/10",
              "px-4 py-1.5",
              "text-xs font-semibold uppercase tracking-[0.18em]",
              "text-cyan-300",
            )}
          >
            <SparklesIcon className="h-4 w-4" />
            Experience Timeline
          </div>
          {/* Title */}

          <motion.h3
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.15,
              duration: 0.45,
            }}
            className={cn(
              "mt-8",
              "max-w-2xl",
              "text-balance",
              "text-3xl font-bold tracking-tight",
              "sm:text-4xl",
            )}
          >
            {title}
          </motion.h3>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.25,
              duration: 0.45,
            }}
            className={cn(
              "mt-5",
              "max-w-2xl",
              "text-pretty",
              "text-base leading-8",
              "text-muted-foreground",
            )}
          >
            {description}
          </motion.p>

          {/* Highlights */}

          <motion.div
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.35,
              duration: 0.45,
            }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            {[
              "Professional Timeline",
              "Career Highlights",
              "Modern Technologies",
              "Real Projects",
            ].map((item) => (
              <span
                key={item}
                className={cn(
                  "rounded-full",
                  "border border-border/60",
                  "bg-background/70",
                  "px-4 py-2",
                  "text-sm font-medium",
                  "text-muted-foreground",
                  "backdrop-blur-sm",
                  "transition-all duration-300",
                  "hover:border-primary/30",
                  "hover:bg-primary/5",
                  "hover:text-foreground",
                )}
              >
                {item}
              </span>
            ))}
          </motion.div>
          {/* Actions */}

          {showAction && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.45,
                duration: 0.45,
              }}
              className="mt-12"
            >
              <Button asChild size="lg" className="group min-w-[220px]">
                <Link href={ROUTES.CONTACT}>
                  Get In Touch
                  <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          )}

          {/* Footer */}

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.6,
              duration: 0.4,
            }}
            className={cn(
              "mt-8",
              "max-w-lg",
              "text-sm",
              "leading-7",
              "text-muted-foreground",
            )}
          >
            New experiences, career milestones, certifications, and project
            achievements will be published here as they become available.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

ExperienceEmpty.displayName = "ExperienceEmpty";

export default React.memo(ExperienceEmpty);

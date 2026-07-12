// src/modules/experience/components/experience-cta.tsx

"use client";

import * as React from "react";

import Link from "next/link";

import { motion } from "motion/react";

import {
  ArrowRightIcon,
  DownloadIcon,
  SparklesIcon,
} from "lucide-react";

import { Button } from "@/src/components/ui/button";

import { ROUTES } from "@/src/shared/constants/routes";
import { cn } from "@/src/shared/lib/utils";

interface ExperienceCTAProps {
  readonly className?: string;

  readonly title?: string;

  readonly description?: string;

  readonly contactLabel?: string;

  readonly resumeLabel?: string;

  readonly resumeUrl?: string;
}

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
} as const;

const buttonTransition = {
  type: "spring",
  stiffness: 280,
  damping: 20,
} as const;

export function ExperienceCTA({
  className,

  title = "Interested in Working Together?",

  description =
    "I'm always excited to collaborate on innovative products, scalable platforms, and meaningful digital experiences. Let's build something exceptional together.",

  contactLabel = "Let's Talk",

  resumeLabel = "Download Resume",

  resumeUrl,
}: Readonly<ExperienceCTAProps>): React.JSX.Element {
    return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.3,
      }}
      className={cn("relative", className)}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-3xl",
          "border border-border/60",
          "bg-card/70 backdrop-blur-xl",
          "shadow-xl",
        )}
      >
        {/* Background */}

        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,.10),transparent_35%)]" />

        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,.02),transparent)]" />

        {/* Decorative Glow */}

        <motion.div
          aria-hidden
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl"
        />

        <motion.div
          aria-hidden
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"
        />

        <div className="relative z-10 px-8 py-12 sm:px-12 sm:py-16">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            {/* Badge */}

            <span
              className={cn(
                "inline-flex items-center gap-2",
                "rounded-full",
                "border border-cyan-500/20",
                "bg-cyan-500/10",
                "px-4 py-1.5",
                "text-xs font-semibold",
                "uppercase tracking-[0.18em]",
                "text-cyan-300",
              )}
            >
              <SparklesIcon className="h-4 w-4" />

              Available for Opportunities
            </span>

            {/* Title */}

            <h2
              className={cn(
                "mt-6",
                "max-w-3xl",
                "text-balance",
                "text-3xl font-bold tracking-tight",
                "sm:text-4xl",
                "lg:text-5xl",
              )}
            >
              {title}
            </h2>

            {/* Description */}

            <p
              className={cn(
                "mt-6",
                "max-w-2xl",
                "text-pretty",
                "leading-8",
                "text-muted-foreground",
              )}
            >
              {description}
            </p>
                        {/* Actions */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
                duration: 0.45,
              }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
            >
              {/* Contact */}

              <Button
                asChild
                size="lg"
                className="group min-w-[220px]"
              >
                <Link href={ROUTES.CONTACT}>
                  {contactLabel}

                  <ArrowRightIcon
                    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </Button>

              {/* Resume */}

              {resumeUrl && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="group min-w-[220px]"
                >
                  <Link
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DownloadIcon
                      className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
                    />

                    {resumeLabel}
                  </Link>
                </Button>
              )}
            </motion.div>

            {/* Footer */}

            <p className="mt-8 text-sm text-muted-foreground">
              Open to full-time, freelance, consulting,
              and remote opportunities worldwide.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

ExperienceCTA.displayName = "ExperienceCTA";

export default React.memo(ExperienceCTA);
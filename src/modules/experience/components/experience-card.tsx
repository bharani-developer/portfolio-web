// src/modules/experience/components/experience-card.tsx

"use client";

import * as React from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "motion/react";

import {
  ArrowUpRightIcon,
  BriefcaseBusinessIcon,
  Building2Icon,
  CalendarIcon,
  MapPinIcon,
} from "lucide-react";

import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";

import { cn } from "@/src/shared/lib/utils";

import type { Experience } from "../types/experience.types";

interface ExperienceCardProps {
  readonly experience: Experience;

  readonly isLast?: boolean;

  readonly className?: string;
}

const DATE_FORMATTER = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
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

const hoverTransition = {
  type: "spring",
  stiffness: 260,
  damping: 20,
} as const;

function formatDate(value: string): string {
  return DATE_FORMATTER.format(new Date(value));
}

function getDuration(startDate: string, endDate?: string | null): string {
  const start = formatDate(startDate);

  if (!endDate) {
    return `${start} – Present`;
  }

  return `${start} – ${formatDate(endDate)}`;
}

function hasWebsite(experience: Experience): boolean {
  return Boolean(
    experience.companyWebsite && experience.companyWebsite.trim().length > 0,
  );
}

function hasLogo(experience: Experience): boolean {
  return Boolean(experience.companyLogo?.url);
}

function hasResponsibilities(experience: Experience): boolean {
  return experience.responsibilities.length > 0;
}

function hasTechnologies(experience: Experience): boolean {
  return experience.technologies.length > 0;
}

export function ExperienceCard({
  experience,
  className,
}: Readonly<ExperienceCardProps>): React.JSX.Element {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{
        y: -4,
      }}
      transition={hoverTransition}
      className={cn(className)}
    >
      <Card
        className={cn(
          "group overflow-hidden rounded-3xl border",
          "border-border/60",
          "bg-background/80",
          "backdrop-blur-xl",
          "transition-all duration-300",
          "hover:border-primary/30",
          "hover:shadow-2xl",
          "hover:shadow-primary/5",
        )}
      >
        <CardContent className="p-8">
          {/* Header */}

          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
            {/* Company */}

            <div className="flex min-w-0 flex-1 items-start gap-5">
              {/* Logo */}

              <motion.div
                whileHover={{
                  rotate: -3,
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="shrink-0"
              >
                {hasLogo(experience) ? (
         <div
  className={cn(
    "relative h-16 w-16 overflow-hidden rounded-2xl",
    "bg-white",
    "border border-white",
    "shadow-xl",
    "shadow-cyan-500/20",
    "ring-2 ring-cyan-400/15",
    "transition-all duration-300",
    "group-hover:scale-105",
    "group-hover:shadow-cyan-400/35",
    "group-hover:ring-cyan-300/30",
  )}
>
  <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-100" />

  <Image
    src={experience.companyLogo!.url}
    alt={experience.company}
    fill
    sizes="64px"
    className="relative z-10 object-contain p-2"
  />
</div>
                ) : (
                  <div
                    className={cn(
                      "flex h-16 w-16 items-center justify-center rounded-2xl",
                      "border border-border/60",
                      "bg-muted",
                    )}
                  >
                    <Building2Icon className="h-7 w-7 text-muted-foreground" />
                  </div>
                )}
              </motion.div>

              {/* Company Info */}

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3
                    className={cn(
                      "truncate text-xl font-bold tracking-tight",
                      "text-foreground",
                    )}
                  >
                    {experience.position}
                  </h3>

                  {experience.isCurrent && (
                    <Badge
                      className={cn(
                        "rounded-full",
                        "border-emerald-500/20",
                        "bg-emerald-500/10",
                        "text-emerald-600 dark:text-emerald-400",
                      )}
                    >
                      Current
                    </Badge>
                  )}
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span
                    className={cn(
                      "inline-flex items-center gap-2",
                      "font-semibold",
                      "text-primary",
                    )}
                  >
                    <BriefcaseBusinessIcon className="h-4 w-4" />

                    {experience.company}
                  </span>
                </div>
              </div>
            </div>

            {/* Badges */}

            <div className="flex flex-wrap gap-2 lg:justify-end">
              <Badge variant="secondary">{experience.employmentType}</Badge>

              <Badge variant="outline">{experience.workMode}</Badge>
            </div>
          </div>

          {/* Divider */}

          <div className="my-6 h-px bg-border/60" />
          {/* Meta Information */}

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <div className="inline-flex items-center gap-2">
              <CalendarIcon className="h-4 w-4 shrink-0 text-primary" />

              <span className="font-medium">
                {getDuration(experience.startDate, experience.endDate)}
              </span>
            </div>

            {experience.location && (
              <div className="inline-flex items-center gap-2">
                <MapPinIcon className="h-4 w-4 shrink-0 text-primary" />

                <span>{experience.location}</span>
              </div>
            )}

            <div className="inline-flex items-center gap-2">
              <BriefcaseBusinessIcon className="h-4 w-4 shrink-0 text-primary" />

              <span>{experience.workMode}</span>
            </div>
          </div>

          {/* Summary */}

          {experience.summary && (
            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.1,
                duration: 0.35,
              }}
              className="mt-6"
            >
              <p className={cn("leading-8", "text-muted-foreground")}>
                {experience.summary}
              </p>
            </motion.div>
          )}
          {/* Responsibilities */}

          {hasResponsibilities(experience) && (
            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.15,
                duration: 0.35,
              }}
              className="mt-8"
            >
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
                Key Responsibilities
              </h4>

              <ul className="space-y-3">
                {experience.responsibilities.map((responsibility) => (
                  <li key={responsibility} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className={cn(
                        "mt-2 h-2 w-2 shrink-0 rounded-full",
                        "bg-primary",
                      )}
                    />

                    <p className="leading-7 text-muted-foreground">
                      {responsibility}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Technologies */}

          {hasTechnologies(experience) && (
            <motion.div
              initial={{
                opacity: 0,
                y: 12,
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
                duration: 0.35,
              }}
              className="mt-8"
            >
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
                Technologies
              </h4>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <Badge
                    key={technology}
                    variant="outline"
                    className={cn(
                      "rounded-full",
                      "px-3 py-1",
                      "transition-colors",
                      "hover:border-primary/40",
                      "hover:bg-primary/10",
                    )}
                  >
                    {technology}
                  </Badge>
                ))}
              </div>
            </motion.div>
          )}

          {/* Footer */}

          {hasWebsite(experience) && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.25,
              }}
              className="mt-10 flex justify-end"
            >
              <Button asChild variant="outline">
                <Link
                  href={experience.companyWebsite!}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Company
                  <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.article>
  );
}

ExperienceCard.displayName = "ExperienceCard";

export default React.memo(ExperienceCard);

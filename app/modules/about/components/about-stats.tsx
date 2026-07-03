// src/modules/about/components/about-stats.tsx

"use client";

import { motion } from "motion/react";
import {
  Award,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Sparkles,
} from "lucide-react";

import { Card } from "@/components/ui/card";

import { cn } from "@/app/shared/lib/utils";

import type { About } from "../types/about.types";

interface AboutStatsProps {
  readonly about: About;
  readonly className?: string;
}

const ICONS = [
  BriefcaseBusiness,
  Award,
  ChartNoAxesCombined,
  Sparkles,
] as const;

export function AboutStats({
  about,
  className,
}: AboutStatsProps) {
  const stats = [...about.stats];

  if (
    typeof about.yearsOfExperience === "number" &&
    about.yearsOfExperience > 0 &&
    !stats.some((item) =>
      item.label.toLowerCase().includes("experience"),
    )
  ) {
    stats.unshift({
      label: "Experience",
      value: `${about.yearsOfExperience}+`,
    });
  }

  if (stats.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="about-stats"
      className={cn(className)}
    >
      <h3
        id="about-stats"
        className="sr-only"
      >
        About statistics
      </h3>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon =
            ICONS[index % ICONS.length];

          return (
            <motion.div
              key={`${stat.label}-${index}`}
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
            >
              <Card
                className={cn(
                  "group relative overflow-hidden",
                  "border-white/10",
                  "bg-slate-900/70",
                  "backdrop-blur-xl",
                  "transition-all duration-300",
                  "hover:-translate-y-1",
                  "hover:border-cyan-500/30",
                  "hover:shadow-[0_20px_50px_rgba(6,182,212,.12)]",
                )}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,.08),transparent_55%)]" />

                <div className="relative p-6">
                  <div className="flex items-center justify-between">
                    <div
                      className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-xl",
                        "border border-cyan-500/15",
                        "bg-cyan-500/10",
                        "text-cyan-400",
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                      Metric
                    </span>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-3xl font-bold tracking-tight text-white">
                      {stat.value}
                    </h4>

                    <p className="mt-2 text-sm text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
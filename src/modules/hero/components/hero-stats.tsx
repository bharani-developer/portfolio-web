// src/modules/hero/components/hero-stats.tsx

"use client";

import { motion } from "motion/react";
import {
  BriefcaseBusiness,
  CalendarDays,
  Trophy,
  GitBranch,
} from "lucide-react";

interface HeroStat {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

const STATS: HeroStat[] = [
  {
    icon: <BriefcaseBusiness className="size-8" />,
    value: "5+",
    label: "Years Experience",
    color: "text-sky-500",
  },
  {
    icon: <CalendarDays className="size-8" />,
    value: "50+",
    label: "Projects Delivered",
    color: "text-emerald-500",
  },
  {
    icon: <Trophy className="size-8" />,
    value: "30+",
    label: "Happy Clients",
    color: "text-amber-500",
  },
  {
    icon: <GitBranch className="size-8" />,
    value: "10K+",
    label: "GitHub Contributions",
    color: "text-violet-500",
  },
];

export function HeroStats() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
      className="mt-16"
    >
      <div className="rounded-3xl border border-border/60 bg-card/60 backdrop-blur-xl">
        <div className="grid grid-cols-2 gap-6 p-8 md:grid-cols-4">
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{
                y: -6,
              }}
              transition={{
                duration: 0.2,
              }}
              className="flex items-center gap-5"
            >
              <div
                className={`rounded-2xl border border-border/60 bg-background p-4 ${stat.color}`}
              >
                {stat.icon}
              </div>

              <div>
                <h3
                  className={`text-4xl font-bold ${stat.color}`}
                >
                  {stat.value}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
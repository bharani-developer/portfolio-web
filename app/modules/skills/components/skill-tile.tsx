"use client";

import { motion } from "motion/react";

import { cn } from "@/app/shared/lib/utils";

import { CATEGORY_THEME } from "../constants/category-theme";
import type { Skill } from "../types/skills.types";

import { SkillImage } from "./skill-image";
import { SkillProgress } from "./skill-progress";

interface SkillTileProps {
  readonly skill: Skill;
  readonly variant?: "sm" | "md" | "lg";
  readonly isFetching?: boolean;
  readonly className?: string;
}

const VARIANT = {
  sm: {
    card: "min-h-[120px] p-4",
    icon: "sm" as const,
    iconBox: "h-10 w-10 rounded-lg",
    progress: "sm" as const,
    title: "text-sm",
    description: "text-[11px] leading-4 line-clamp-2",
    level: "text-[10px]",
  },

  md: {
    card: "min-h-[132px] p-5",
    icon: "md" as const,
    iconBox: "h-11 w-11 rounded-xl",
    progress: "md" as const,
    title: "text-[15px]",
    description: "text-xs leading-5 line-clamp-2",
    level: "text-[11px]",
  },

  lg: {
    card: "min-h-[150px] p-6",
    icon: "lg" as const,
    iconBox: "h-12 w-12 rounded-xl",
    progress: "lg" as const,
    title: "text-base",
    description: "text-sm leading-6 line-clamp-2",
    level: "text-xs",
  },
} as const;

function getSkillLevel(value: number) {
  if (value >= 90) return "Expert";
  if (value >= 75) return "Advanced";
  if (value >= 60) return "Intermediate";

  return "Beginner";
}

export function SkillTile({
  skill,
  variant = "sm",
  className,
}: SkillTileProps) {
  const styles = VARIANT[variant];
  const theme = CATEGORY_THEME[skill.category];

  return (
    <motion.article
      layout
      whileHover={{
        y: -4,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className={cn("group h-full", className)}
    >
      <div className="relative flex h-full flex-col">
        <h4 className={cn("truncate font-semibold text-white", styles.title)}>
          {skill.name}
        </h4>

        <div className="mt-4 flex flex-1 items-start justify-between gap-4">
          <div className="flex min-w-0 flex-1 items-start gap-3">
            <div
              className={cn(
                "flex shrink-0 items-center justify-center border",
                styles.iconBox,
                theme.iconBorder,
                theme.iconBackground,
              )}
            >
              <SkillImage
                image={skill.image}
                name={skill.name}
                size={styles.icon}
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className={cn("text-slate-400", styles.description)}>
                {skill.description ?? `${skill.category} technology`}
              </p>

              <span
                className={cn(
                  "mt-3 inline-flex font-medium text-slate-500",
                  styles.level,
                )}
              >
                {getSkillLevel(skill.proficiency)}
              </span>
            </div>
          </div>

          <div className="shrink-0">
            <SkillProgress
              value={skill.proficiency}
              size={styles.progress}
              color={theme.progress}
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

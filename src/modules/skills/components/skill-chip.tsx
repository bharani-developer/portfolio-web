"use client";

import { motion } from "motion/react";

import { cn } from "@/src/shared/lib/utils";

import { CATEGORY_THEME } from "../constants/category-theme";
import type { Skill } from "../types/skills.types";

import { SkillImage } from "./skill-image";
import { SkillProgress } from "./skill-progress";

interface SkillChipProps {
  readonly skill: Skill;
  readonly variant?: "sm" | "md" | "lg";
  readonly isFetching?: boolean;
  readonly className?: string;
}

function getSkillLevel(proficiency: number): string {
  if (proficiency >= 90) return "Expert";
  if (proficiency >= 75) return "Advanced";
  if (proficiency >= 60) return "Intermediate";

  return "Beginner";
}

const VARIANT = {
  sm: {
    height: "min-h-[112px]",
    padding: "p-2.5",

    iconWrapper: "h-7 w-7 rounded-md",
    icon: "sm" as const,

    title: "text-[11px]",
    description: "text-[9px] leading-3.5 line-clamp-2",

    progress: "sm" as const,

    percent: "text-[10px]",
    level: "text-[8px]",
  },

  md: {
    height: "min-h-[126px]",
    padding: "p-3",

    iconWrapper: "h-8 w-8 rounded-lg",
    icon: "sm" as const,

    title: "text-xs",
    description: "text-[9px] leading-4 line-clamp-2",

    progress: "sm" as const,

    percent: "text-[10px]",
    level: "text-[9px]",
  },

  lg: {
    height: "min-h-[142px]",
    padding: "p-3.5",

    iconWrapper: "h-9 w-9 rounded-lg",
    icon: "md" as const,

    title: "text-[13px]",
    description: "text-[10px] leading-4 line-clamp-2",

    progress: "md" as const,

    percent: "text-[11px]",
    level: "text-[10px]",
  },
} as const;

export function SkillChip({
  skill,
  variant = "md",
  isFetching = false,
  className,
}: SkillChipProps) {
  const theme = CATEGORY_THEME[skill.category];
  const styles = VARIANT[variant];

  return (
    <motion.article
      layout
      whileHover={{
        y: -2,
        scale: 1.01,
      }}
      whileTap={{
        scale: 0.995,
      }}
      transition={{
        duration: 0.18,
        ease: "easeOut",
      }}
      className={cn("group h-full", className)}
    >
      <div
        className={cn(
          "relative flex h-full flex-col overflow-hidden",
          styles.height,
          styles.padding,
          "rounded-xl",
          "border",
          theme.border,
          theme.hoverBorder,
          "bg-[#111827]",
          "transition-all duration-300",
          "hover:bg-[#152136]",
          "hover:shadow-[0_8px_20px_rgba(0,0,0,.18)]",
          isFetching && "pointer-events-none opacity-70",
        )}
      >
        {/* Glass Overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-xl bg-[linear-gradient(to_bottom,rgba(255,255,255,.02),transparent_45%)]" />

        {/* Glow */}
        <div
          className={cn(
            "pointer-events-none absolute -right-5 -top-5",
            "h-20 w-20 rounded-full blur-3xl",
            "opacity-0 transition-opacity duration-300",
            "group-hover:opacity-100",
            theme.glow,
          )}
        />

        <div className="relative flex h-full flex-col">
          {/* Icon */}
          <div
            className={cn(
              "mb-2 flex items-center justify-center",
              "border",
              styles.iconWrapper,
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

          {/* Title */}
          <h4
            className={cn(
              "line-clamp-1 font-semibold leading-tight text-white",
              styles.title,
            )}
          >
            {skill.name}
          </h4>

          {/* Description */}
          <p className={cn("mt-0.5 text-slate-500", styles.description)}>
            {skill.description ?? `${skill.category} technology`}
          </p>

          {/* Footer */}
          <div className="mt-auto pt-2">
            <SkillProgress
              value={skill.proficiency}
              size={styles.progress}
              color={theme.progress}
            />

            <div className="mt-1.5 flex items-center justify-between">
              <span
                className={cn("font-semibold", styles.percent, theme.iconColor)}
              >
                {skill.proficiency}%
              </span>

              <span className={cn("font-medium text-slate-500", styles.level)}>
                {getSkillLevel(skill.proficiency)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

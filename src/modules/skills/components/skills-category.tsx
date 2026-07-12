// src/modules/skills/components/skills-category.tsx

"use client";

import { motion } from "motion/react";
import { Code2 } from "lucide-react";

import { cn } from "@/src/shared/lib/utils";

import type { CategoryCardVariant } from "../constants/category-layout";
import { CATEGORY_DESCRIPTIONS } from "../constants/category-description";
import { CATEGORY_GRID } from "../constants/category-grid";
import { CATEGORY_ICONS } from "../constants/category-icons";
import { CATEGORY_THEME } from "../constants/category-theme";
import type { SkillGroup } from "../types/skills.types";

import { SkillPill } from "./skill-pill";
import { SkillTile } from "./skill-tile";

interface SkillsCategoryProps {
  readonly group: SkillGroup;

  readonly variant: CategoryCardVariant;

  readonly isFetching?: boolean;

  readonly className?: string;
}

export function SkillsCategory({
  group,
  variant,
  isFetching = false,
  className,
}: SkillsCategoryProps) {
  const Icon = CATEGORY_ICONS[group.category] ?? Code2;

  const theme = CATEGORY_THEME[group.category];

  const description = CATEGORY_DESCRIPTIONS[group.category];

  const skills = [...group.skills].sort((a, b) => {
    if (a.sortOrder !== b.sortOrder) {
      return a.sortOrder - b.sortOrder;
    }

    return b.proficiency - a.proficiency;
  });

  return (
    <motion.section
      layout
      initial={{
        opacity: 0,
        y: 16,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className={cn("w-full", className)}
    >
      <div
        className={cn(
          "group relative h-full overflow-hidden",

          "rounded-xl",

          "border border-slate-800/70",

          "bg-[#0f172a]",

          "transition-all duration-300",

          "hover:border-slate-700",

          "hover:shadow-[0_12px_30px_rgba(0,0,0,.18)]",
        )}
      >
        {/* Glow */}
        <div
          className={cn(
            "pointer-events-none absolute right-0 top-0",

            "h-48 w-48 rounded-full blur-3xl",

            "opacity-40",

            theme.glow,
          )}
        />

        {/* Glass Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,.02),transparent_40%)]" />

        <div className="relative flex h-full flex-col p-4 lg:p-5">
          {/* Header */}
          <div className="flex items-start gap-3">
            {/* Category Icon */}
            <div
              className={cn(
                "flex h-11 w-11 shrink-0 items-center justify-center",

                "rounded-xl",

                "border",

                theme.iconBorder,

                theme.iconBackground,
              )}
            >
              <Icon
                className={cn(
                  "h-5 w-5",

                  theme.iconColor,
                )}
              />
            </div>

            {/* Heading */}
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-bold tracking-tight text-white lg:text-2xl">
                  {group.category}
                </h3>

                <span
                  className={cn(
                    "rounded-full",

                    "border",

                    "px-2.5 py-0.5",

                    "text-[10px] font-medium",

                    theme.iconBorder,

                    theme.iconBackground,

                    theme.iconColor,
                  )}
                >
                  {skills.length} Technologies
                </span>
              </div>

              {description ? (
                <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-400">
                  {description}
                </p>
              ) : null}
            </div>
          </div>

          {/* Divider */}
          <div className="my-4 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

          <div className={cn("grid gap-3", CATEGORY_GRID[group.category])}>
            {skills.map((skill) =>
              variant === "compact" ? (
                <SkillPill key={skill._id} skill={skill} />
              ) : (
                <SkillTile
                  key={skill._id}
                  skill={skill}
                  variant="sm"
                  isFetching={isFetching}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

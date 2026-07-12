// src/modules/skills/components/skill-pill.tsx

"use client";

import { motion } from "motion/react";

import { cn } from "@/src/shared/lib/utils";

import { CATEGORY_THEME } from "../constants/category-theme";
import type { Skill } from "../types/skills.types";

import { SkillImage } from "./skill-image";

interface SkillPillProps {
  readonly skill: Skill;
}

export function SkillPill({ skill }: SkillPillProps) {
  const theme = CATEGORY_THEME[skill.category];

  return (
    <motion.div
      whileHover={{
        y: -1,
        scale: 1.01,
      }}
      whileTap={{
        scale: 0.995,
      }}
      transition={{
        duration: 0.18,
        ease: "easeOut",
      }}
      className={cn(
        "group",
        "relative",
        "flex items-center gap-2.5",
        "overflow-hidden",
        "rounded-lg",
        "border",
        theme.border,
        theme.hoverBorder,
        "bg-[#111827]",
        "px-2.5 py-2",
        "transition-all duration-300",
        "hover:bg-[#152136]",
        "hover:shadow-[0_6px_18px_rgba(0,0,0,.16)]",
      )}
    >
      {/* Glass Overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-lg bg-[linear-gradient(to_bottom,rgba(255,255,255,.02),transparent_45%)]" />

      {/* Hover Glow */}
      <div
        className={cn(
          "pointer-events-none absolute -right-4 -top-4",
          "h-14 w-14 rounded-full blur-2xl",
          "opacity-0 transition-opacity duration-300",
          "group-hover:opacity-100",
          theme.glow,
        )}
      />

      {/* Icon */}
      <div
        className={cn(
          "relative z-10",
          "flex h-8 w-8 shrink-0 items-center justify-center",
          "rounded-md",
          "border",
          theme.iconBorder,
          theme.iconBackground,
        )}
      >
        <SkillImage image={skill.image} name={skill.name} size="sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-w-0 flex-1">
        <h4 className="truncate text-[12px] font-semibold leading-tight text-white">
          {skill.name}
        </h4>

        {skill.description ? (
          <p className="mt-0.5 line-clamp-1 text-[10px] leading-4 text-slate-500">
            {skill.description}
          </p>
        ) : null}
      </div>
    </motion.div>
  );
}

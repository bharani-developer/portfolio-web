"use client";

import { motion } from "motion/react";

import { cn } from "@/src/shared/lib/utils";

import type { Skill } from "../types/skills.types";

import { SkillImage } from "./skill-image";
import { SkillProgress } from "./skill-progress";

interface SkillCardProps {
  readonly skill: Skill;
  readonly isFetching?: boolean;
  readonly className?: string;
}

function getSkillLevel(proficiency: number): string {
  if (proficiency >= 90) return "Expert";
  if (proficiency >= 75) return "Advanced";
  if (proficiency >= 60) return "Intermediate";

  return "Beginner";
}

export function SkillCard({
  skill,
  isFetching = false,
  className,
}: SkillCardProps) {
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
          "relative flex min-h-[142px] flex-col",
          "overflow-hidden",
          "rounded-xl",
          "border border-slate-800/80",
          "bg-[#111827]",
          "p-3",
          "transition-all duration-300",
          "hover:border-cyan-500/25",
          "hover:bg-[#152136]",
          "hover:shadow-[0_8px_20px_rgba(0,0,0,.20)]",
          isFetching && "pointer-events-none opacity-70",
        )}
      >
        {/* Glass Overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-xl bg-[linear-gradient(to_bottom,rgba(255,255,255,.02),transparent_45%)]" />

        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute -right-5 -top-5 h-20 w-20 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <div className="relative flex h-full flex-col">
          {/* Icon */}
          <div
            className={cn(
              "mb-2 flex h-8 w-8 items-center justify-center",
              "rounded-lg",
              "border border-cyan-500/15",
              "bg-cyan-500/8",
            )}
          >
            <SkillImage image={skill.image} name={skill.name} size="sm" />
          </div>

          {/* Title */}
          <h4
            className={cn(
              "line-clamp-1",
              "text-[13px]",
              "font-semibold",
              "leading-tight",
              "text-white",
            )}
          >
            {skill.name}
          </h4>

          {/* Description */}
          <p
            className={cn(
              "mt-0.5",
              "line-clamp-2",
              "text-[10px]",
              "leading-4",
              "text-slate-500",
            )}
          >
            {skill.description ?? `${skill.category} technology`}
          </p>

          {/* Footer */}
          <div className="mt-auto pt-2">
            <SkillProgress value={skill.proficiency} size="sm" />

            <div className="mt-1.5 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-cyan-400">
                {skill.proficiency}%
              </span>

              <span className="text-[9px] font-medium text-slate-500">
                {getSkillLevel(skill.proficiency)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

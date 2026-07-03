// src/modules/skills/components/skills-list.tsx

"use client";

import { motion } from "motion/react";

import { cn } from "@/app/shared/lib/utils";

import type { SkillGroup } from "../types/skills.types";

import { SkillsGrid } from "./skills-grid";

interface SkillsListProps {
  readonly groups: readonly SkillGroup[];

  readonly isFetching?: boolean;

  readonly className?: string;
}

export function SkillsList({
  groups,
  isFetching = false,
  className,
}: SkillsListProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className={cn("relative w-full", className)}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.04),transparent_45%)]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:48px_48px] opacity-15" />
      </div>

      <SkillsGrid
        groups={groups}
        isFetching={isFetching}
      />
    </motion.div>
  );
}
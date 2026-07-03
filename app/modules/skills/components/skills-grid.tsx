// src/modules/skills/components/skills-grid.tsx

"use client";

import { motion } from "motion/react";

import { cn } from "@/app/shared/lib/utils";

import { getCategoryLayout } from "../constants/category-layout";
import type { SkillGroup } from "../types/skills.types";

import { SkillsCategory } from "./skills-category";

interface SkillsGridProps {
  readonly groups: readonly SkillGroup[];

  readonly isFetching?: boolean;

  readonly className?: string;
}

export function SkillsGrid({
  groups,
  isFetching = false,
  className,
}: SkillsGridProps) {
  const sortedGroups = [...groups].sort(
    (a, b) =>
      getCategoryLayout(a.category).order -
      getCategoryLayout(b.category).order,
  );

  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.35,
      }}
      className={cn(
        "grid",

        // Mobile
        "grid-cols-1",

        // Tablet
        "md:grid-cols-4",

        // Desktop
        "xl:grid-cols-12",

        // Compact spacing
        "gap-5 xl:gap-6",

        // Prevent equal row heights
        "items-start",

        className,
      )}
    >
      {sortedGroups.map((group, index) => {
        const layout = getCategoryLayout(group.category);

        return (
          <motion.div
            key={group.category}
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
              delay: index * 0.04,
              ease: "easeOut",
            }}
            className={layout.className}
          >
            <SkillsCategory
              group={group}
              variant={layout.variant}
              isFetching={isFetching}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
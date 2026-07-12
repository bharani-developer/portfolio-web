// src/modules/skills/components/skills-header.tsx

"use client";

import { motion } from "motion/react";

import { cn } from "@/src/shared/lib/utils";

interface SkillsHeaderProps {
  readonly badge?: string;
  readonly title?: string;
  readonly description?: string;
  readonly className?: string;
}

export function SkillsHeader({
  badge = "Technologies",
  title = "Tech Stack",
  description = "Building modern, scalable web, mobile and cloud applications using industry-standard technologies and tools.",
  className,
}: SkillsHeaderProps) {
  return (
    <motion.header
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
        amount: 0.35,
      }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      className={cn(
        "mx-auto flex max-w-3xl flex-col items-center text-center",
        "space-y-3",
        className,
      )}
    >
      {/* Badge */}
      <span
        className={cn(
          "inline-flex items-center",
          "rounded-full",
          "border border-cyan-500/15",
          "bg-cyan-500/8",
          "px-3 py-1",
          "text-[10px]",
          "font-semibold",
          "uppercase",
          "tracking-[0.22em]",
          "text-cyan-400",
          "backdrop-blur-sm",
        )}
      >
        {badge}
      </span>

      {/* Title */}
      <h2
        className={cn(
          "text-3xl",
          "font-bold",
          "tracking-tight",
          "leading-tight",
          "text-white",
          "sm:text-4xl",
        )}
      >
        {title}
      </h2>

      {/* Description */}
      <p
        className={cn(
          "max-w-2xl",
          "text-sm",
          "leading-6",
          "text-slate-400",
          "sm:text-base",
        )}
      >
        {description}
      </p>
    </motion.header>
  );
}

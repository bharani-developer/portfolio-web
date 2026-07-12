// src/modules/skills/components/skills-empty.tsx

"use client";

import { motion } from "motion/react";
import { Boxes } from "lucide-react";

import { cn } from "@/src/shared/lib/utils";

interface SkillsEmptyProps {
  title?: string;

  description?: string;

  className?: string;
}

export function SkillsEmpty({
  title = "No Technologies Available",
  description = "The technologies section is currently empty. Please check back later as new skills and technologies are added.",
  className,
}: SkillsEmptyProps) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 24,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
      }}
      className={cn(
        "flex min-h-[360px] items-center justify-center",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-xl",
          "rounded-3xl",
          "border border-white/10",
          "bg-gradient-to-br",
          "from-slate-900/95",
          "via-slate-900/90",
          "to-slate-950",
          "p-10",
          "text-center",
          "backdrop-blur-xl",
          "shadow-2xl",
        )}
      >
        <motion.div
          initial={{
            scale: 0.9,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
            delay: 0.1,
          }}
          className={cn(
            "mx-auto mb-8 flex size-20 items-center justify-center",
            "rounded-3xl",
            "border border-cyan-500/20",
            "bg-cyan-500/10",
          )}
        >
          <Boxes className="size-10 text-cyan-400" aria-hidden="true" />
        </motion.div>

        <h3 className="text-3xl font-bold tracking-tight text-white">
          {title}
        </h3>

        <p className="mx-auto mt-4 max-w-md text-base leading-8 text-slate-400">
          {description}
        </p>
      </div>
    </motion.section>
  );
}

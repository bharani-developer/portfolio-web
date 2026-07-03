// src/modules/skills/components/skills-error.tsx

"use client";

import { motion } from "motion/react";
import { AlertCircle, RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";

import { cn } from "@/app/shared/lib/utils";

interface SkillsErrorProps {
  error?: Error | null;

  onRetry?: () => void;

  className?: string;
}

export function SkillsError({
  error,
  onRetry,
  className,
}: SkillsErrorProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className={cn(
        "flex min-h-[320px] items-center justify-center",
        className,
      )}
    >
      <div
        className={cn(
          "w-full max-w-lg rounded-3xl",
          "border border-red-500/20",
          "bg-gradient-to-br",
          "from-red-500/5",
          "via-slate-900/95",
          "to-slate-950",
          "p-8",
          "text-center",
          "backdrop-blur-xl",
        )}
      >
        <div
          className={cn(
            "mx-auto mb-6 flex size-16 items-center justify-center",
            "rounded-2xl",
            "border border-red-500/20",
            "bg-red-500/10",
          )}
        >
          <AlertCircle className="size-8 text-red-400" />
        </div>

        <h3 className="text-2xl font-semibold text-white">
          Unable to load skills
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-400">
          Something went wrong while loading the technologies.
          Please try again.
        </p>

        {error?.message && (
          <p
            className={cn(
              "mt-4 rounded-xl",
              "border border-white/10",
              "bg-black/20",
              "p-3",
              "font-mono text-xs",
              "text-slate-500",
            )}
          >
            {error.message}
          </p>
        )}

        {onRetry && (
          <Button
            onClick={onRetry}
            className="mt-8"
          >
            <RefreshCw className="mr-2 size-4" />

            Try Again
          </Button>
        )}
      </div>
    </motion.div>
  );
}
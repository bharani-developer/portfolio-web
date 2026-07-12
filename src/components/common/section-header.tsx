// components\section-header.tsx

"use client";

import { motion } from "motion/react";

import { cn } from "@/src/shared/lib/utils";

interface SectionHeaderProps {
  readonly badge?: string;
  readonly title?: string;
  readonly highlight?: string;
  readonly description?: string;
  readonly centered?: boolean;
  readonly showDivider?: boolean;
  readonly className?: string;
}

export function SectionHeader({
  badge = "Technologies",
  title = "Modern Tech Stack",
  highlight = "Tech Stack",
  description = "Building scalable web, mobile, and cloud applications using modern frameworks, robust backend technologies, and industry-standard development tools.",
  centered = true,
  showDivider = true,
  className,
}: SectionHeaderProps) {
  const titleParts =
    highlight && title.includes(highlight) ? title.split(highlight) : [title];

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: 24,
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
        duration: 0.6,
        ease: "easeOut",
      }}
      className={cn(
        "relative isolate",
        centered
          ? "mx-auto flex max-w-4xl flex-col items-center text-center"
          : "flex flex-col items-start text-left",
        className,
      )}
    >
      {/* Background Glow */}
      <div
        aria-hidden
        className="absolute -top-8 h-32 w-64 rounded-full bg-cyan-500/10 blur-3xl"
      />

      {/* Badge */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.1,
          duration: 0.35,
        }}
        className="relative"
      >
        <span
          className={cn(
            "inline-flex items-center gap-2",
            "rounded-full",
            "border border-cyan-500/20",
            "bg-cyan-500/10",
            "px-4 py-1.5",
            "text-[11px]",
            "font-semibold",
            "uppercase",
            "tracking-[0.22em]",
            "text-cyan-300",
            "backdrop-blur-md",
          )}
        >
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          {badge}
        </span>
      </motion.div>

      {/* Title */}
      <h2
        className={cn(
          "mt-6",
          "max-w-4xl",
          "text-4xl font-bold tracking-tight text-white",
          "sm:text-5xl",
          "leading-tight",
        )}
      >
        {titleParts.length === 2 ? (
          <>
            {titleParts[0]}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              {highlight}
            </span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>

      {/* Description */}
      <p
        className={cn(
          "mt-5",
          "max-w-2xl",
          "text-sm leading-7",
          "text-slate-400",
          "sm:text-base",
        )}
      >
        {description}
      </p>

      {/* Divider */}
      {showDivider && (
        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          whileInView={{
            width: 96,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
            duration: 0.5,
          }}
          className="mt-8 h-px rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        />
      )}
    </motion.header>
  );
}

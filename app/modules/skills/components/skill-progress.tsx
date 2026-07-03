"use client";

import { motion } from "motion/react";

import { cn } from "@/app/shared/lib/utils";

interface SkillProgressProps {
  readonly value: number;
  readonly showValue?: boolean;
  readonly size?: "sm" | "md" | "lg";
  readonly color?:
    | "cyan"
    | "emerald"
    | "violet"
    | "orange"
    | "blue"
    | "pink";
  readonly className?: string;
}

const SIZE = {
  sm: {
    circle: 52,
    stroke: 5,
    text: "text-[11px]",
  },
  md: {
    circle: 70,
    stroke: 6,
    text: "text-sm",
  },
  lg: {
    circle: 88,
    stroke: 7,
    text: "text-base",
  },
} as const;

const COLOR = {
  cyan: {
    stroke: "#22d3ee",
    glow: "drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]",
  },
  emerald: {
    stroke: "#34d399",
    glow: "drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]",
  },
  violet: {
    stroke: "#a78bfa",
    glow: "drop-shadow-[0_0_8px_rgba(167,139,250,0.5)]",
  },
  orange: {
    stroke: "#fb923c",
    glow: "drop-shadow-[0_0_8px_rgba(251,146,60,0.5)]",
  },
  blue: {
    stroke: "#60a5fa",
    glow: "drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]",
  },
  pink: {
    stroke: "#f472b6",
    glow: "drop-shadow-[0_0_8px_rgba(244,114,182,0.5)]",
  },
} as const;

export function SkillProgress({
  value,
  showValue = true,
  size = "md",
  color = "cyan",
  className,
}: SkillProgressProps) {
  const progress = Number.isFinite(value)
    ? Math.min(100, Math.max(0, value))
    : 0;

  const config = SIZE[size];

  const radius = (config.circle - config.stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  const dashOffset =
    circumference - (progress / 100) * circumference;

  return (
    <div
      role="progressbar"
      aria-label={`${progress}% proficiency`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
      className={cn(
        "relative flex items-center justify-center",
        className,
      )}
      style={{
        width: config.circle,
        height: config.circle,
      }}
    >
      <svg
        width={config.circle}
        height={config.circle}
        className="-rotate-90"
      >
        <circle
          cx={config.circle / 2}
          cy={config.circle / 2}
          r={radius}
          fill="transparent"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={config.stroke}
        />

        <motion.circle
          cx={config.circle / 2}
          cy={config.circle / 2}
          r={radius}
          fill="transparent"
          stroke={COLOR[color].stroke}
          strokeWidth={config.stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{
            strokeDashoffset: circumference,
          }}
          whileInView={{
            strokeDashoffset: dashOffset,
          }}
          viewport={{
            once: true,
            amount: 0.7,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className={COLOR[color].glow}
        />
      </svg>

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.4,
          delay: 0.25,
        }}
        className="absolute inset-0 flex flex-col items-center justify-center"
      >
        <span
          className={cn(
            "font-bold tracking-tight text-white",
            config.text,
          )}
        >
          {progress}
          {showValue && (
            <span className="ml-0.5 text-[0.75em] text-slate-400">
              %
            </span>
          )}
        </span>
      </motion.div>
    </div>
  );
}
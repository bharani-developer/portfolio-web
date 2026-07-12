// src/modules/skills/components/skill-image.tsx

"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { cn } from "@/src/shared/lib/utils";

import type { SkillImage as SkillImageType } from "../types/skills.types";

interface SkillImageProps {
  readonly image?: SkillImageType | null;
  readonly name: string;
  readonly size?: "sm" | "md" | "lg";
  readonly className?: string;
}

const SIZE = {
  sm: {
    container: "size-8",
    image: 16,
    text: "text-[11px]",
  },

  md: {
    container: "size-9",
    image: 20,
    text: "text-xs",
  },

  lg: {
    container: "size-10",
    image: 24,
    text: "text-sm",
  },
} as const;

export function SkillImage({
  image,
  name,
  size = "md",
  className,
}: SkillImageProps) {
  const config = SIZE[size];

  const imageUrl =
    image?.url?.trim() && image.url.startsWith("http") ? image.url : null;

  return (
    <motion.div
      whileHover={{
        scale: 1.03,
      }}
      transition={{
        duration: 0.18,
      }}
      className={cn(
        "relative",
        "flex items-center justify-center",
        "overflow-hidden",
        "rounded-lg",
        "border border-cyan-500/15",
        "bg-cyan-500/5",
        "transition-all duration-300",
        "group-hover:border-cyan-400/30",
        "group-hover:bg-cyan-500/10",
        config.container,
        className,
      )}
    >
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={name}
          width={config.image}
          height={config.image}
          loading="lazy"
          draggable={false}
          className={cn(
            "object-contain",
            "transition-transform duration-300",
            "group-hover:scale-105",
          )}
        />
      ) : (
        <span
          aria-hidden="true"
          className={cn(
            "font-semibold uppercase leading-none",
            "text-cyan-400",
            config.text,
          )}
        >
          {name.charAt(0)}
        </span>
      )}
    </motion.div>
  );
}

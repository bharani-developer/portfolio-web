// src/modules/hero/components/hero-image.tsx

"use client";

import Image from "next/image";

import { motion } from "motion/react";
import {
  BadgeCheck,
  Code2,
} from "lucide-react";

import { HeroTechStack } from "./hero-tech-stack";

import type { HeroSectionProps } from "../types/hero.types";

export function HeroImage({
  hero,
}: HeroSectionProps) {
  if (!hero.profileImage) {
    return null;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative flex justify-center"
    >
      {/* Floating Technologies */}
      <HeroTechStack
        technologies={hero.technologies}
      />

      {/* Background Glow */}
      <div className="absolute h-[520px] w-[520px] rounded-full bg-primary/20 blur-[120px]" />

      {/* Outer Circle */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute flex h-[500px] w-[500px] items-center justify-center rounded-full border border-primary/20"
      >
        <div className="absolute top-0 h-4 w-4 rounded-full bg-primary" />

        <div className="absolute bottom-0 h-3 w-3 rounded-full bg-sky-500" />

        <div className="absolute left-0 h-3 w-3 rounded-full bg-violet-500" />

        <div className="absolute right-0 h-3 w-3 rounded-full bg-emerald-500" />
      </motion.div>

      {/* Profile Card */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="relative z-20 overflow-hidden rounded-[40px] border border-border/60 bg-card/80 p-4 shadow-2xl "
      >
        <Image
          src={hero.profileImage.url}
          alt={hero.title}
          width={500}
          height={600}
          priority
          className="rounded-[30px] object-cover"
        />
      </motion.div>

      {/* Experience Badge */}
      <motion.div
        initial={{
          opacity: 0,
          x: -30,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.8,
        }}
        className="absolute bottom-16 left-0 z-30"
      >
        <div className="rounded-2xl border border-border/60 bg-background/80 p-5 shadow-xl backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-primary/10 p-3 text-primary">
              <Code2 className="size-7" />
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                5+
              </h3>

              <p className="text-sm text-muted-foreground">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Verified Badge */}
      <motion.div
        initial={{
          opacity: 0,
          x: 30,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 1,
        }}
        className="absolute right-0 top-10 z-30"
      >
        <div className="flex items-center gap-3 rounded-full border border-border/60 bg-background/80 px-5 py-3 shadow-xl backdrop-blur-xl">
          <BadgeCheck className="size-6 text-primary" />

          <span className="font-medium">
            Available
          </span>
        </div>
      </motion.div>

      {/* Online Indicator */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-8 right-8 z-30"
      >
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
          <div className="h-3 w-3 rounded-full bg-white" />
        </div>
      </motion.div>
    </motion.div>
  );
}
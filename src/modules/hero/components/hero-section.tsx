// src/modules/hero/components/hero-section.tsx

"use client";

import { motion } from "motion/react";

import type { Variants } from "motion/react";

import type { HeroSectionProps } from "../types/hero.types";

import { HeroBackground } from "./hero-background";
import { HeroContent } from "./hero-content";
import { HeroImage } from "./hero-image";
import { HeroScrollIndicator } from "./hero-scroll-indicator";
import { HeroSpotlight } from "./hero-spotlight";
import { HeroStats } from "./hero-stats";

/* -------------------------------------------------------------------------- */
/*                               Animation Variants                           */
/* -------------------------------------------------------------------------- */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                               Hero Section                                 */
/* -------------------------------------------------------------------------- */

export function HeroSection({
  hero,
}: HeroSectionProps) {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-dvh overflow-hidden bg-background"
    >
      {/* ------------------------------------------------------------------ */}
      {/* Decorative Layers */}
      {/* ------------------------------------------------------------------ */}

      <HeroSpotlight />

      <HeroBackground />

      {/* ------------------------------------------------------------------ */}
      {/* Main Container */}
      {/* ------------------------------------------------------------------ */}

      <div className="container relative z-10 mx-auto flex min-h-dvh w-full flex-col px-6">
        {/* Main Hero Content */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-1 items-center py-20 lg:py-24"
        >
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
            {/* Left */}

            <motion.div variants={itemVariants}>
              <HeroContent hero={hero} />
            </motion.div>

            {/* Right */}

            <motion.div
              variants={itemVariants}
              className="relative flex justify-center lg:justify-end"
            >
              <HeroImage hero={hero} />
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Statistics */}

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          className="pb-24"
        >
          <HeroStats />
        </motion.div>
      </div>

      {/* Scroll Indicator */}

      <HeroScrollIndicator />
    </section>
  );
}
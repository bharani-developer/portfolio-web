// src/modules/hero/components/hero-content.tsx

"use client";

import Link from "next/link";

import { motion } from "motion/react";
import {
  ArrowRight,
  Download,
  Mail,
} from "lucide-react";

import type { HeroSectionProps } from "../types/hero.types";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function HeroContent({
  hero,
}: HeroSectionProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center"
    >
      <motion.div variants={item}>
        <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          Available for Freelance
        </span>
      </motion.div>

      <motion.h1
        variants={item}
        className="mt-8 text-5xl font-black leading-tight tracking-tight md:text-6xl xl:text-7xl"
      >
        {hero.title}
      </motion.h1>

      <motion.h2
        variants={item}
        className="mt-4 text-2xl font-semibold text-primary md:text-3xl"
      >
        {hero.subtitle}
      </motion.h2>

      <motion.p
        variants={item}
        className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground"
      >
        {hero.description}
      </motion.p>

      <motion.div
        variants={item}
        className="mt-10 flex flex-wrap gap-4"
      >
        <Link
          href={hero.ctaButtonLink ?? "#projects"}
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-4 font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          {hero.ctaButtonText ?? "View Projects"}

          <ArrowRight className="size-5" />
        </Link>

        {hero.resumeUrl && (
          <Link
            href={hero.resumeUrl}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-7 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/5"
          >
            <Download className="size-5" />

            Resume
          </Link>
        )}

        <Link
          href="#contact"
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-7 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/5"
        >
          <Mail className="size-5" />

          Contact
        </Link>
      </motion.div>

      <motion.div
        variants={item}
        className="mt-10 flex flex-wrap gap-3"
      >
        {hero.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {technology}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}
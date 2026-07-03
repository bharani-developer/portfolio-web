// src/modules/hero/components/hero-scroll-indicator.tsx

"use client";

import Link from "next/link";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function HeroScrollIndicator() {
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
        delay: 1.5,
        duration: 0.8,
      }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <Link
        href="#about"
        aria-label="Scroll to About section"
        className="group flex flex-col items-center gap-3"
      >
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Scroll
        </span>

        <div className="flex h-14 w-8 justify-center rounded-full border border-border bg-background/60 backdrop-blur-md">
          <motion.div
            animate={{
              y: [4, 22, 4],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-2 h-3 w-1.5 rounded-full bg-primary"
          />
        </div>

        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
          }}
        >
          <ChevronDown className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
        </motion.div>
      </Link>
    </motion.div>
  );
}
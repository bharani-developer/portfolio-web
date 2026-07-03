// src/modules/about/components/about-empty.tsx

"use client";

import Link from "next/link";

import { motion } from "motion/react";
import {
  ArrowRight,
  FileQuestion,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { cn } from "@/app/shared/lib/utils";

interface AboutEmptyProps {
  readonly title?: string;
  readonly description?: string;
  readonly showContactButton?: boolean;
  readonly className?: string;
}

export function AboutEmpty({
  title = "About information is not available",
  description = "The About section hasn't been published yet. Please check back later or continue exploring the rest of the portfolio.",
  showContactButton = true,
  className,
}: AboutEmptyProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className={cn("mx-auto max-w-3xl", className)}
    >
      <Card
        className={cn(
          "relative overflow-hidden",
          "border-white/10",
          "bg-slate-900/70",
          "backdrop-blur-xl",
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,.08),transparent_55%)]" />

        <div className="relative flex flex-col items-center px-8 py-16 text-center">
          <div
            className={cn(
              "flex h-20 w-20 items-center justify-center rounded-2xl",
              "border border-cyan-500/20",
              "bg-cyan-500/10",
              "text-cyan-400",
            )}
          >
            <FileQuestion className="h-10 w-10" />
          </div>

          <h3 className="mt-8 text-2xl font-bold tracking-tight text-white">
            {title}
          </h3>

          <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">
            {description}
          </p>

          {showContactButton && (
            <div className="mt-10">
              <Button
                asChild
                size="lg"
              >
                <Link href="#contact">
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
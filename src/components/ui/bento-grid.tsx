"use client";

import type { ReactNode } from "react";

import Image from "next/image";

import { motion } from "motion/react";

import { cn } from "@/src/shared/lib/utils";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export interface Technology {
  name: string;
  logo: string;
}

export interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export interface BentoGridItemProps {
  className?: string;

  badge?: string;

  title: ReactNode;

  description: ReactNode;

  technologies?: Technology[];

  img?: string;

  imgClassName?: string;

  titleClassName?: string;

  spareImg?: string;
}

/* -------------------------------------------------------------------------- */
/*                               Animation Config                             */
/* -------------------------------------------------------------------------- */

const fadeUp = {
  initial: {
    opacity: 0,
    y: 20,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
  },

  transition: {
    duration: 0.45,
    ease: "easeOut",
  },
} as const;

/* -------------------------------------------------------------------------- */
/*                                Bento Grid                                  */
/* -------------------------------------------------------------------------- */

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <section
      className={cn(
        "mx-auto",
        "grid",
        "w-full",
        "max-w-7xl",
        "grid-cols-1",
        "gap-6",
        "md:grid-cols-6",
        "md:auto-rows-[22rem]",
        "md:grid-flow-dense",
        className,
      )}
    >
      {children}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Helper Components                            */
/* -------------------------------------------------------------------------- */

interface CardBadgeProps {
  badge: string;
}

interface CardImageProps {
  img: string;
  className?: string;
}

interface TechnologyChipProps {
  technology: Technology;
  index: number;
}
/* -------------------------------------------------------------------------- */
/*                                Card Badge                                  */
/* -------------------------------------------------------------------------- */

function CardBadge({ badge }: CardBadgeProps) {
  return (
    <motion.div {...fadeUp} className="mb-5">
      <span
        className={cn(
          "inline-flex items-center rounded-full",
          "border border-primary/20",
          "bg-primary/10",
          "px-3 py-1.5",
          "text-[11px] font-semibold uppercase tracking-[0.22em]",
          "text-primary",
          "backdrop-blur-sm",
          "transition-colors duration-300",
        )}
      >
        {badge}
      </span>
    </motion.div>
  );
}
/* -------------------------------------------------------------------------- */
/*                                Card Image                                  */
/* -------------------------------------------------------------------------- */

function CardImage({ img, className }: CardImageProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Background Image */}
      <motion.div
        whileHover={{
          scale: 1.08,
          rotate: 1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="absolute inset-0"
      >
        <Image
          src={img}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={cn(
            "object-cover",
            "opacity-[0.08]",
            "transition-all duration-700",
            "group-hover:scale-105",
            "group-hover:opacity-15",
            className,
          )}
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />

      {/* Subtle Accent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-primary/[0.08]" />

      {/* Top Glow */}
      <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl transition-all duration-700 group-hover:scale-125" />

      {/* Bottom Right Glow */}
      <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl transition-all duration-700 group-hover:scale-125" />

      {/* Bottom Left Glow */}
      <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-all duration-700 group-hover:scale-125" />

      {/* Soft Border Highlight */}
      <div className="absolute inset-0 rounded-[inherit] ring-1 ring-white/5" />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "14px 14px",
        }}
      />
    </div>
  );
}
/* -------------------------------------------------------------------------- */
/*                              Technology Chip                               */
/* -------------------------------------------------------------------------- */

function TechnologyChip({ technology, index }: TechnologyChipProps) {
  return (
    <motion.li
      initial={{
        opacity: 0,
        scale: 0.9,
        y: 10,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: index * 0.05,
        duration: 0.3,
        ease: "easeOut",
      }}
      whileHover={{
        y: -3,
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className={cn(
        "group/chip",
        "relative",
        "inline-flex",
        "items-center",
        "gap-2.5",
        "overflow-hidden",
        "rounded-full",
        "border",
        "border-border/60",
        "bg-background/70",
        "px-3.5",
        "py-2",
        "backdrop-blur-md",
        "transition-all",
        "duration-300",
        "hover:border-primary/40",
        "hover:bg-primary/10",
        "hover:shadow-lg",
        "hover:shadow-primary/10",
      )}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.04] via-transparent to-primary/[0.02] opacity-0 transition-opacity duration-300 group-hover/chip:opacity-100" />

      {/* Logo */}
      <motion.div
        whileHover={{
          rotate: 8,
          scale: 1.15,
        }}
        transition={{
          duration: 0.25,
        }}
        className="relative z-10 flex h-5 w-5 shrink-0 items-center justify-center"
      >
        <Image
          src={technology.logo}
          alt={technology.name}
          width={18}
          height={18}
          sizes="18px"
          className="h-[18px] w-[18px] object-contain"
        />
      </motion.div>

      {/* Name */}
      <span
        className={cn(
          "relative",
          "z-10",
          "text-xs",
          "font-medium",
          "whitespace-nowrap",
          "tracking-wide",
          "text-foreground",
        )}
      >
        {technology.name}
      </span>
    </motion.li>
  );
}
/* -------------------------------------------------------------------------- */
/*                            Bento Grid Item                                 */
/* -------------------------------------------------------------------------- */

export function BentoGridItem({
  className,
  badge,
  title,
  description,
  technologies = [],
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: BentoGridItemProps) {
  return (
    <motion.article
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
        amount: 0.2,
      }}
      whileHover={{
        y: -8,
        scale: 1.015,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className={cn(
        "group",
        "relative",
        "overflow-hidden",
        "rounded-[28px]",
        "border",
        "border-border/60",
        "bg-gradient-to-br",
        "from-background",
        "via-background",
        "to-muted/20",
        "shadow-lg",
        "transition-all",
        "duration-500",
        "hover:border-primary/30",
        "hover:shadow-[0_25px_80px_rgba(0,0,0,0.18)]",
        className,
      )}
    >
      {/* ------------------------------------------------------------------ */}
      {/* Background Layers                                                  */}
      {/* ------------------------------------------------------------------ */}

      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-primary/[0.08]" />

      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl transition-transform duration-700 group-hover:scale-125" />

      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl transition-transform duration-700 group-hover:scale-125" />

      <div className="absolute inset-0 rounded-[28px] ring-1 ring-white/5" />

      {/* ------------------------------------------------------------------ */}
      {/* Background Image                                                   */}
      {/* ------------------------------------------------------------------ */}

      {img && <CardImage img={img} className={imgClassName} />}

      {/* ------------------------------------------------------------------ */}
      {/* Optional Decorative Image                                          */}
      {/* ------------------------------------------------------------------ */}

      {spareImg && (
        <motion.div
          aria-hidden="true"
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 0.18,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="pointer-events-none absolute bottom-0 right-0"
        >
          <Image
            src={spareImg}
            alt=""
            width={220}
            height={220}
            className="object-contain"
          />
        </motion.div>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Content Wrapper                                                    */}
      {/* ------------------------------------------------------------------ */}

      <div className="relative z-10 flex h-full flex-col p-7">
        {/* ------------------------------------------------------------------ */}
        {/* Badge                                                              */}
        {/* ------------------------------------------------------------------ */}

        {badge && <CardBadge badge={badge} />}

        {/* ------------------------------------------------------------------ */}
        {/* Body                                                               */}
        {/* ------------------------------------------------------------------ */}

        <div className="flex flex-1 flex-col">
          {/* -------------------------------------------------------------- */}
          {/* Title                                                         */}
          {/* -------------------------------------------------------------- */}

          <motion.h3
            {...fadeUp}
            transition={{
              delay: 0.05,
              duration: 0.45,
              ease: "easeOut",
            }}
            className={cn(
              "max-w-[95%]",
              "text-2xl",
              "font-bold",
              "leading-tight",
              "tracking-tight",
              "text-foreground",
              "text-balance",
              titleClassName,
            )}
          >
            {title}
          </motion.h3>

          {/* -------------------------------------------------------------- */}
          {/* Description                                                   */}
          {/* -------------------------------------------------------------- */}

          <motion.p
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.1,
              duration: 0.45,
              ease: "easeOut",
            }}
            className={cn(
              "mt-4",
              "max-w-xl",
              "text-[15px]",
              "leading-7",
              "text-muted-foreground",
              "text-pretty",
            )}
          >
            {description}
          </motion.p>

          {/* -------------------------------------------------------------- */}
          {/* Flexible Spacer                                               */}
          {/* -------------------------------------------------------------- */}

          <div className="min-h-6 flex-1" />
          {/* ------------------------------------------------------------------ */}
          {/* Technology Stack                                                   */}
          {/* ------------------------------------------------------------------ */}

          {technologies.length > 0 && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.15,
                duration: 0.45,
                ease: "easeOut",
              }}
              className="mt-8 border-t border-border/50 pt-6"
            >
              {/* Section Header */}
              <div className="mb-5 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  Technology Stack
                </span>

                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-medium text-primary">
                  {technologies.length} Tech
                </span>
              </div>

              {/* Technology List */}
              <ul
                role="list"
                aria-label="Technology Stack"
                className="flex flex-wrap gap-3"
              >
                {technologies.map((technology, index) => (
                  <TechnologyChip
                    key={`${technology.name}-${index}`}
                    technology={technology}
                    index={index}
                  />
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

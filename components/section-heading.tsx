"use client";

/* ============================================================================
   React
============================================================================ */

import {
  memo,
  type ReactNode,
} from "react";

/* ============================================================================
   Motion
============================================================================ */

import { motion } from "motion/react";

/* ============================================================================
   Icons
============================================================================ */

import { Sparkles } from "lucide-react";

/* ============================================================================
   Utilities
============================================================================ */

import { cn } from "@/app/shared/lib/utils";

/* ============================================================================
   Types
============================================================================ */

export type SectionHeadingAlign =
  | "left"
  | "center";

export type SectionHeadingSize =
  | "sm"
  | "md"
  | "lg";

export type HeadingElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4";

export interface SectionHeadingProps {
  /**
   * Small badge displayed above the title.
   */
  badge?: string;

  /**
   * Optional icon inside badge.
   */
  badgeIcon?: ReactNode;

  /**
   * Main heading.
   */
  title: string;

  /**
   * Optional supporting description.
   */
  description?: string;

  /**
   * Alignment.
   * @default "left"
   */
  align?: SectionHeadingAlign;

  /**
   * Heading element.
   * @default "h2"
   */
  as?: HeadingElement;

  /**
   * Heading size.
   * @default "lg"
   */
  size?: SectionHeadingSize;

  /**
   * Optional actions.
   */
  actions?: ReactNode;

  /**
   * Additional class names.
   */
  className?: string;
}

/* ============================================================================
   Constants
============================================================================ */

const DEFAULT_BADGE_ICON = (
  <Sparkles className="h-4 w-4" />
);

const TITLE_SIZE: Record<
  SectionHeadingSize,
  string
> = {
  sm: cn(
    "text-3xl",
    "md:text-4xl",
  ),

  md: cn(
    "text-4xl",
    "md:text-5xl",
  ),

  lg: cn(
    "text-4xl",
    "md:text-5xl",
    "xl:text-6xl",
  ),
};

const DESCRIPTION_SIZE: Record<
  SectionHeadingSize,
  string
> = {
  sm: "text-base",

  md: "text-lg",

  lg: "text-lg lg:text-xl",
};

const ALIGNMENT: Record<
  SectionHeadingAlign,
  string
> = {
  left: "items-start text-left",

  center:
    "items-center text-center",
};

/* ============================================================================
   Motion
============================================================================ */

const CONTAINER_VARIANTS = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
} as const;

const ITEM_VARIANTS = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
    },
  },
} as const;

/* ============================================================================
   Helpers
============================================================================ */

function HeadingTag({
  as = "h2",
  className,
  children,
}: {
  as?: HeadingElement;
  className?: string;
  children: ReactNode;
}) {
  const Component = as;

  return (
    <Component className={className}>
      {children}
    </Component>
  );
}
/* ============================================================================
   Component
============================================================================ */

function SectionHeading({
  badge,
  badgeIcon = DEFAULT_BADGE_ICON,
  title,
  description,
  align = "left",
  as = "h2",
  size = "lg",
  actions,
  className,
}: SectionHeadingProps) {
  return (
    <motion.header
      variants={CONTAINER_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.3,
      }}
      className={cn(
        "mx-auto flex w-full max-w-4xl flex-col",
        "gap-6",
        ALIGNMENT[align],
        className,
      )}
    >
      {/* ----------------------------------------------------------------------
          Badge
      ---------------------------------------------------------------------- */}

      {badge && (
        <motion.div variants={ITEM_VARIANTS}>
          <span
            className={cn(
              "inline-flex w-fit items-center gap-2",
              "rounded-full",
              "border border-cyan-500/20",
              "bg-cyan-500/10",
              "px-4 py-2",
              "text-xs font-semibold uppercase",
              "tracking-[0.24em]",
              "text-cyan-300",
              "backdrop-blur-xl",
            )}
          >
            {badgeIcon}

            <span>{badge}</span>
          </span>
        </motion.div>
      )}

      {/* ----------------------------------------------------------------------
          Title
      ---------------------------------------------------------------------- */}

      <motion.div variants={ITEM_VARIANTS}>
        <HeadingTag
          as={as}
          className={cn(
            "max-w-5xl",
            "font-black",
            "tracking-tight",
            "text-white",
            "text-balance",
            TITLE_SIZE[size],
          )}
        >
          {title}
        </HeadingTag>
      </motion.div>

      {/* Description continues in Part 2A.1.2 */}
            {/* ----------------------------------------------------------------------
          Description
      ---------------------------------------------------------------------- */}

      {description && (
        <motion.p
          variants={ITEM_VARIANTS}
          className={cn(
            "max-w-3xl",
            "leading-8",
            "text-zinc-400",
            "text-pretty",
            DESCRIPTION_SIZE[size],
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </motion.p>
      )}

      {/* ----------------------------------------------------------------------
          Actions
      ---------------------------------------------------------------------- */}

      {actions && (
        <motion.div
          variants={ITEM_VARIANTS}
          className={cn(
            "flex flex-wrap items-center gap-4",
            align === "center"
              ? "justify-center"
              : "justify-start",
          )}
        >
          {actions}
        </motion.div>
      )}
    </motion.header>
  );
}
/* ============================================================================
   Display Name
============================================================================ */

SectionHeading.displayName = "SectionHeading";

/* ============================================================================
   Export
============================================================================ */

export default memo(SectionHeading);
// src/components/layout/section.tsx

"use client";

import * as React from "react";

import { cn } from "@/app/shared/lib/utils";

type SectionElement = "section" | "div" | "main" | "article" | "aside";

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement> {
  /**
   * Section id.
   */
  id?: string;

  /**
   * Render children without an internal container.
   */
  fullWidth?: boolean;

  /**
   * Maximum container width.
   */
  containerSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";

  /**
   * Vertical spacing.
   */
  spacing?: "none" | "sm" | "md" | "lg" | "xl";

  /**
   * HTML element.
   */
  as?: SectionElement;

  children: React.ReactNode;
}

const CONTAINER_SIZE = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  "2xl": "max-w-[100rem]",
  full: "max-w-none",
} as const;

const SPACING = {
  none: "",
  sm: "py-12 md:py-16",
  md: "py-16 md:py-20",
  lg: "py-20 md:py-24",
  xl: "py-24 md:py-32",
} as const;

export function Section({
  id,
  children,
  className,
  fullWidth = false,
  containerSize = "xl",
  spacing = "lg",
  as = "section",
  ...props
}: SectionProps) {
  const Component = as;

  return (
    <Component
      id={id}
      className={cn(
        "relative w-full",
        SPACING[spacing],
        className,
      )}
      {...props}
    >
      {fullWidth ? (
        children
      ) : (
        <div
          className={cn(
            "mx-auto w-full",
            CONTAINER_SIZE[containerSize],
            "px-4 sm:px-6 lg:px-8",
          )}
        >
          {children}
        </div>
      )}
    </Component>
  );
}
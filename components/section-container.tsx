"use client";

/* ============================================================================
   React
============================================================================ */

import {
  memo,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";

/* ============================================================================
   Utilities
============================================================================ */

import { cn } from "@/app/shared/lib/utils";

/* ============================================================================
   Base Types
============================================================================ */

/**
 * Supported HTML elements.
 */
export type SectionElement = "section" | "div" | "main" | "article" | "aside";

/**
 * Width variants.
 */
export type SectionWidth = "sm" | "md" | "lg" | "xl" | "2xl" | "full";
/**
 * Vertical spacing variants.
 */
export type SectionSpacing = "none" | "sm" | "md" | "lg" | "xl";

/**
 * Background variants.
 */
export type SectionBackground = "transparent" | "default" | "muted" | "glass";

/**
 * Container alignment.
 */
export type SectionAlign = "left" | "center";

/* ============================================================================
   Polymorphic Types
============================================================================ */

export type AsProp<T extends ElementType> = {
  as?: T;
};

export type PolymorphicRef<T extends ElementType> =
  React.ComponentPropsWithRef<T>["ref"];

export type PolymorphicComponentProps<
  T extends ElementType,
  Props extends object = object,
> = Props & AsProp<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props | "as">;

/* ============================================================================
   Shared Types
============================================================================ */

export interface SectionContainerBaseProps {
  /**
   * Optional id.
   */
  id?: string;

  /**
   * Children.
   */
  children: ReactNode;

  /**
   * Additional classes.
   */
  className?: string;
}
/* ============================================================================
   Component Props
============================================================================ */

export interface SectionContainerOwnProps {
  /**
   * Section width.
   *
   * @default "xl"
   */
  width?: SectionWidth;

  /**
   * Vertical spacing.
   *
   * @default "lg"
   */
  spacing?: SectionSpacing;

  /**
   * Background style.
   *
   * @default "transparent"
   */
  background?: SectionBackground;

  /**
   * Horizontal alignment.
   *
   * @default "left"
   */
  align?: SectionAlign;

  /**
   * Stretch container to full width.
   *
   * @default false
   */
  fluid?: boolean;

  /**
   * Remove horizontal padding.
   *
   * @default false
   */
  disableGutters?: boolean;

  /**
   * Center section vertically.
   *
   * @default false
   */
  centered?: boolean;

  /**
   * Render as full viewport height.
   *
   * @default false
   */
  fullHeight?: boolean;
}

/* ============================================================================
   Generic Props
============================================================================ */

export type SectionContainerProps<T extends ElementType = "section"> =
  PolymorphicComponentProps<
    T,
    SectionContainerBaseProps & SectionContainerOwnProps
  >;

/* ============================================================================
   Default Configuration
============================================================================ */

const DEFAULT_ELEMENT: SectionElement = "section";

const DEFAULT_WIDTH: SectionWidth = "xl";

const DEFAULT_SPACING: SectionSpacing = "lg";

const DEFAULT_BACKGROUND: SectionBackground = "transparent";

const DEFAULT_ALIGNMENT: SectionAlign = "left";

/* ============================================================================
   Internal Configuration
============================================================================ */

interface SectionConfig {
  width: SectionWidth;

  spacing: SectionSpacing;

  background: SectionBackground;

  align: SectionAlign;

  fluid: boolean;

  disableGutters: boolean;

  centered: boolean;

  fullHeight: boolean;
}

/* ============================================================================
   Internal Defaults
============================================================================ */

const DEFAULT_CONFIG: Readonly<SectionConfig> = {
  width: DEFAULT_WIDTH,

  spacing: DEFAULT_SPACING,

  background: DEFAULT_BACKGROUND,

  align: DEFAULT_ALIGNMENT,

  fluid: false,

  disableGutters: false,

  centered: false,

  fullHeight: false,
} as const;
/* ============================================================================
   Width Variants
============================================================================ */

const WIDTH_VARIANTS: Record<SectionWidth, string> = {
  sm: "max-w-3xl",

  md: "max-w-5xl",

  lg: "max-w-6xl",

  xl: "max-w-7xl",

  "2xl": "max-w-screen-2xl",

  full: "max-w-none",
} as const;

/* ============================================================================
   Vertical Spacing Variants
============================================================================ */

const SPACING_VARIANTS: Record<SectionSpacing, string> = {
  none: "",

  sm: "py-12 md:py-16",

  md: "py-16 md:py-20",

  lg: "py-20 md:py-28 xl:py-32",

  xl: "py-28 md:py-36 xl:py-44",
} as const;

/* ============================================================================
   Background Variants
============================================================================ */

const BACKGROUND_VARIANTS: Record<SectionBackground, string> = {
  transparent: "bg-transparent",

  default: cn("bg-background"),

  muted: cn("bg-muted/30"),

  glass: cn(
    "relative overflow-hidden",
    "border-y border-white/10",
    "bg-white/[0.03]",
    "backdrop-blur-3xl",
  ),
} as const;

/* ============================================================================
   Alignment Variants
============================================================================ */

const ALIGNMENT_VARIANTS: Record<SectionAlign, string> = {
  left: cn("items-start", "text-left"),

  center: cn("items-center", "text-center"),
} as const;

/* ============================================================================
   Container Width
============================================================================ */

const CONTAINER_VARIANTS = {
  base: cn(
    "relative",
    "z-10",
    "w-full",
  ),

  centered: "mx-auto",

  gutters: cn(
    "px-6",
    "sm:px-8",
    "lg:px-10",
    "xl:px-12",
    "2xl:px-18",
  ),

  noGutters: "px-0",
} as const;

/* ============================================================================
   Full Height
============================================================================ */

const HEIGHT_VARIANTS = {
  auto: "",

  screen: "min-h-screen",
} as const;

/* ============================================================================
   Centering
============================================================================ */

const CENTER_VARIANTS = {
  default: "",

  center: cn("flex", "flex-col", "justify-center"),
} as const;
/* ============================================================================
   Variant Resolvers
============================================================================ */



function resolveSpacing(spacing: SectionSpacing): string {
  return SPACING_VARIANTS[spacing];
}

function resolveBackground(background: SectionBackground): string {
  return BACKGROUND_VARIANTS[background];
}

function resolveAlignment(align: SectionAlign): string {
  return ALIGNMENT_VARIANTS[align];
}

function resolveHeight(fullHeight: boolean): string {
  return fullHeight ? HEIGHT_VARIANTS.screen : HEIGHT_VARIANTS.auto;
}

function resolveCenter(centered: boolean): string {
  return centered ? CENTER_VARIANTS.center : CENTER_VARIANTS.default;
}

/* ============================================================================
   Class Builders
============================================================================ */

function buildSectionClassName(
  config: SectionConfig,
  className?: string,
): string {
  return cn(
    "relative",
    "w-full",

    resolveBackground(config.background),

    resolveSpacing(config.spacing),

    resolveHeight(config.fullHeight),

    className,
  );
}

function buildContainerClassName(
  config: SectionConfig,
): string {
  const fullWidth =
    config.width === "full" ||
    config.fluid;

  return cn(
    CONTAINER_VARIANTS.base,

    !fullWidth &&
      CONTAINER_VARIANTS.centered,

    !config.disableGutters
      ? CONTAINER_VARIANTS.gutters
      : CONTAINER_VARIANTS.noGutters,

    !fullWidth &&
      WIDTH_VARIANTS[config.width],

    resolveAlignment(config.align),

    resolveCenter(config.centered),
  );
}

/* ============================================================================
   Config Builder
============================================================================ */

function createSectionConfig(props: SectionContainerOwnProps): SectionConfig {
  return {
    width: props.width ?? DEFAULT_CONFIG.width,

    spacing: props.spacing ?? DEFAULT_CONFIG.spacing,

    background: props.background ?? DEFAULT_CONFIG.background,

    align: props.align ?? DEFAULT_CONFIG.align,

    fluid: props.fluid ?? DEFAULT_CONFIG.fluid,

    disableGutters: props.disableGutters ?? DEFAULT_CONFIG.disableGutters,

    centered: props.centered ?? DEFAULT_CONFIG.centered,

    fullHeight: props.fullHeight ?? DEFAULT_CONFIG.fullHeight,
  };
}

/* ============================================================================
   Component
============================================================================ */

function SectionContainerInner<T extends ElementType = typeof DEFAULT_ELEMENT>({
  as,
  id,
  children,
  className,

  width = DEFAULT_CONFIG.width,
  spacing = DEFAULT_CONFIG.spacing,
  background = DEFAULT_CONFIG.background,
  align = DEFAULT_CONFIG.align,

  fluid = DEFAULT_CONFIG.fluid,
  disableGutters = DEFAULT_CONFIG.disableGutters,
  centered = DEFAULT_CONFIG.centered,
  fullHeight = DEFAULT_CONFIG.fullHeight,

  ...props
}: SectionContainerProps<T>) {
  /* --------------------------------------------------------------------------
     Component
  -------------------------------------------------------------------------- */

  const Component = (as ?? DEFAULT_ELEMENT) as ElementType;

  /* --------------------------------------------------------------------------
     Runtime Configuration
  -------------------------------------------------------------------------- */

  const config = createSectionConfig({
    width,
    spacing,
    background,
    align,
    fluid,
    disableGutters,
    centered,
    fullHeight,
  });

  /* --------------------------------------------------------------------------
     Computed Classes
  -------------------------------------------------------------------------- */

  const sectionClassName = buildSectionClassName(config, className);

  const containerClassName = buildContainerClassName(config);

  return (
    <Component id={id} className={sectionClassName} {...props}>
      <div className={containerClassName}>{children}</div>
    </Component>
  );
}

/* ============================================================================
   Memoized Component
============================================================================ */

const SectionContainer = memo(SectionContainerInner);

/* ============================================================================
   Display Name
============================================================================ */

SectionContainer.displayName = "SectionContainer";

/* ============================================================================
   Export
============================================================================ */

export default SectionContainer;

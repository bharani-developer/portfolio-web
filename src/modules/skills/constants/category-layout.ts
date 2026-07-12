// src/modules/skills/constants/category-layout.ts

import type { SkillCategory } from "../types/skills.types";

export type CategoryCardVariant = "grid" | "compact";

export interface CategoryLayoutConfig {
  /**
   * Responsive grid column span.
   */
  readonly className: string;

  /**
   * Card rendering variant.
   */
  readonly variant: CategoryCardVariant;

  /**
   * Display order.
   */
  readonly order: number;
}

/**
 * Default layout used for unknown or newly added categories.
 */
export const DEFAULT_CATEGORY_LAYOUT: CategoryLayoutConfig = {
  className: "col-span-1 md:col-span-2 xl:col-span-4",
  variant: "grid",
  order: Number.MAX_SAFE_INTEGER,
};

/**
 * Category-specific layouts.
 */
export const CATEGORY_LAYOUT = {
  Frontend: {
    className: "col-span-1 md:col-span-2 xl:col-span-8",
    variant: "grid",
    order: 1,
  },

  Backend: {
    className: "col-span-1 md:col-span-2 xl:col-span-4",
    variant: "grid",
    order: 2,
  },

  Database: {
    className: "col-span-1 md:col-span-2 xl:col-span-4",
    variant: "grid",
    order: 3,
  },

  Mobile: {
    className: "col-span-1 md:col-span-2 xl:col-span-3",
    variant: "grid",
    order: 4,
  },

  "API Integration": {
    className: "col-span-1 md:col-span-4 xl:col-span-5",
    variant: "compact",
    order: 5,
  },

  Cloud: {
    className: "col-span-1 md:col-span-2 xl:col-span-4",
    variant: "grid",
    order: 6,
  },

  DevOps: {
    className: "col-span-1 md:col-span-2 xl:col-span-3",
    variant: "grid",
    order: 7,
  },

  Tools: {
    className: "col-span-1 md:col-span-4 xl:col-span-5",
    variant: "grid",
    order: 8,
  },

  Other: {
    className: "col-span-1 md:col-span-2 xl:col-span-4",
    variant: "grid",
    order: 999,
  },
} as const satisfies Record<SkillCategory, CategoryLayoutConfig>;

/**
 * Categories sorted by display order.
 */
export const CATEGORY_ORDER = (
  Object.entries(CATEGORY_LAYOUT) as [
    SkillCategory,
    CategoryLayoutConfig,
  ][]
)
  .sort(([, a], [, b]) => a.order - b.order)
  .map(([category]) => category);

/**
 * Returns layout configuration.
 */
export function getCategoryLayout(
  category: SkillCategory,
): CategoryLayoutConfig {
  return CATEGORY_LAYOUT[category] ?? DEFAULT_CATEGORY_LAYOUT;
}
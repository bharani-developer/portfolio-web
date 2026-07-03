import type { SkillGroup } from "../types/skills.types";

export type SkillVariant = "sm" | "md" | "lg" | "pill";

interface CategoryLayout {
  variant: SkillVariant;
  columns: string;
}

export const CATEGORY_LAYOUT: Record<
  SkillGroup["category"],
  CategoryLayout
> = {
  Frontend: {
    variant: "sm",
    columns: "grid-cols-2 md:grid-cols-4 xl:grid-cols-8",
  },

  Backend: {
    variant: "sm",
    columns: "grid-cols-2 xl:grid-cols-4",
  },

  Database: {
    variant: "md",
    columns: "grid-cols-2 xl:grid-cols-3",
  },

  Mobile: {
    variant: "md",
    columns: "grid-cols-2",
  },

  "API Integration": {
    variant: "pill",
    columns: "grid-cols-2 md:grid-cols-3 xl:grid-cols-6",
  },

  Cloud: {
    variant: "md",
    columns: "grid-cols-2 xl:grid-cols-3",
  },

  DevOps: {
    variant: "md",
    columns: "grid-cols-2 xl:grid-cols-3",
  },

  Tools: {
    variant: "sm",
    columns: "grid-cols-2 md:grid-cols-3 xl:grid-cols-6",
  },

  Other: {
    variant: "md",
    columns: "grid-cols-2 md:grid-cols-3 xl:grid-cols-4",
  },
} as const;
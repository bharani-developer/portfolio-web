// src/modules/skills/constants/category-icons.tsx

import type { LucideIcon } from "lucide-react";

import {
  Boxes,
  Cloud,
  Code2,
  Database,
  Globe,
  Monitor,
  Server,
  Smartphone,
  Wrench,
} from "lucide-react";

import type { SkillCategory } from "../types/skills.types";

export const CATEGORY_ICONS: Readonly<
  Record<SkillCategory, LucideIcon>
> = {
  Frontend: Monitor,

  Backend: Server,

  Database,

  Mobile: Smartphone,

  "API Integration": Globe,

  Cloud,

  DevOps: Wrench,

  Tools: Boxes,

  Other: Code2,
} as const;

export function getCategoryIcon(
  category: SkillCategory,
): LucideIcon {
  return CATEGORY_ICONS[category];
}
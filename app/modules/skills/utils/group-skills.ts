import { CATEGORY_DESCRIPTIONS } from "../constants/category-description";
import { CATEGORY_ICONS } from "../constants/category-icons";
import { CATEGORY_THEME } from "../constants/category-theme";

import type {
  Skill,
  SkillCategory,
  SkillGroup,
} from "../types/skills.types";

/**
 * Display order for skill categories.
 * Keep this synchronized with SkillCategory and CATEGORY_THEME.
 */
const CATEGORY_ORDER: readonly SkillCategory[] = [
  "Frontend",
  "Backend",
  "Database",
  "Mobile",
  "API Integration",
  "Cloud",
  "DevOps",
  "Tools",
  "Other",
] as const;

/**
 * Groups active skills by category and sorts them.
 */
export function groupSkills(
  skills: readonly Skill[],
): SkillGroup[] {
  const grouped = new Map<SkillCategory, Skill[]>();

  // Initialize all categories
  for (const category of CATEGORY_ORDER) {
    grouped.set(category, []);
  }

  // Group active skills
  for (const skill of skills) {
    if (!skill.isActive) {
      continue;
    }

    grouped.get(skill.category)?.push(skill);
  }

  // Build ordered groups
  return CATEGORY_ORDER.map((category) => ({
    category,

    skills: (grouped.get(category) ?? []).sort((a, b) => {
      // Primary sort: sortOrder
      if (a.sortOrder !== b.sortOrder) {
        return a.sortOrder - b.sortOrder;
      }

      // Secondary sort: proficiency (descending)
      if (a.proficiency !== b.proficiency) {
        return b.proficiency - a.proficiency;
      }

      // Final sort: alphabetical
      return a.name.localeCompare(b.name);
    }),

    description: CATEGORY_DESCRIPTIONS[category],

    icon: CATEGORY_ICONS[category],

    color: CATEGORY_THEME[category],
  })).filter((group) => group.skills.length > 0);
}
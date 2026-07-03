import {
  CATEGORY_COLORS,
} from "../constants/category-theme";

import {
  CATEGORY_DESCRIPTIONS,
} from "../constants/category-description";

import {
  CATEGORY_ICONS,
} from "../constants/category-icons";

import type {
  Skill,
  SkillCategory,
  SkillGroup,
} from "../types/skills.types";

const CATEGORY_ORDER: readonly SkillCategory[] = [
  "Frontend",
  "Backend",
  "Database",
  "Mobile",
  "DevOps",
  "Tools",
  "Other",
] as const;

export function groupSkills(
  skills: readonly Skill[],
): SkillGroup[] {
  const grouped = new Map<
    SkillCategory,
    Skill[]
  >();

  for (const category of CATEGORY_ORDER) {
    grouped.set(category, []);
  }

  for (const skill of skills) {
    if (!skill.isActive) {
      continue;
    }

    grouped
      .get(skill.category)
      ?.push(skill);
  }

  return CATEGORY_ORDER.map(
    (category) => ({
      category,

      skills: (
        grouped.get(category) ?? []
      ).sort((a, b) => {
        if (
          a.sortOrder !==
          b.sortOrder
        ) {
          return (
            a.sortOrder -
            b.sortOrder
          );
        }

        if (
          a.proficiency !==
          b.proficiency
        ) {
          return (
            b.proficiency -
            a.proficiency
          );
        }

        return a.name.localeCompare(
          b.name,
        );
      }),

      description:
        CATEGORY_DESCRIPTIONS[
          category
        ],

      icon:
        CATEGORY_ICONS[category],

      color:
        CATEGORY_COLORS[category],
    }),
  ).filter(
    (group) =>
      group.skills.length > 0,
  );
}
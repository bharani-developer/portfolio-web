import type { SkillCategory } from "../types/skills.types";

export interface CategoryTheme {
  border: string;
  hoverBorder: string;

  iconBorder: string;
  iconBackground: string;
  iconColor: string;

  badgeBorder: string;
  badgeBackground: string;
  badgeColor: string;

  glow: string;

  progress:
    | "cyan"
    | "emerald"
    | "violet"
    | "orange"
    | "blue"
    | "pink";
}

export const CATEGORY_THEME: Record<
  SkillCategory,
  CategoryTheme
> = {
  Frontend: {
    border: "border-cyan-500/15",
    hoverBorder: "hover:border-cyan-400/30",

    iconBorder: "border-cyan-500/20",
    iconBackground: "bg-cyan-500/10",
    iconColor: "text-cyan-300",

    badgeBorder: "border-cyan-500/20",
    badgeBackground: "bg-cyan-500/10",
    badgeColor: "text-cyan-300",

    glow: "bg-cyan-500/10",

    progress: "cyan",
  },

  Backend: {
    border: "border-emerald-500/15",
    hoverBorder: "hover:border-emerald-400/30",

    iconBorder: "border-emerald-500/20",
    iconBackground: "bg-emerald-500/10",
    iconColor: "text-emerald-300",

    badgeBorder: "border-emerald-500/20",
    badgeBackground: "bg-emerald-500/10",
    badgeColor: "text-emerald-300",

    glow: "bg-emerald-500/10",

    progress: "emerald",
  },

  Database: {
    border: "border-violet-500/15",
    hoverBorder: "hover:border-violet-400/30",

    iconBorder: "border-violet-500/20",
    iconBackground: "bg-violet-500/10",
    iconColor: "text-violet-300",

    badgeBorder: "border-violet-500/20",
    badgeBackground: "bg-violet-500/10",
    badgeColor: "text-violet-300",

    glow: "bg-violet-500/10",

    progress: "violet",
  },

  Mobile: {
    border: "border-pink-500/15",
    hoverBorder: "hover:border-pink-400/30",

    iconBorder: "border-pink-500/20",
    iconBackground: "bg-pink-500/10",
    iconColor: "text-pink-300",

    badgeBorder: "border-pink-500/20",
    badgeBackground: "bg-pink-500/10",
    badgeColor: "text-pink-300",

    glow: "bg-pink-500/10",

    progress: "pink",
  },

  "API Integration": {
    border: "border-amber-500/15",
    hoverBorder: "hover:border-amber-400/30",

    iconBorder: "border-amber-500/20",
    iconBackground: "bg-amber-500/10",
    iconColor: "text-amber-300",

    badgeBorder: "border-amber-500/20",
    badgeBackground: "bg-amber-500/10",
    badgeColor: "text-amber-300",

    glow: "bg-amber-500/10",

    progress: "orange",
  },

  Cloud: {
    border: "border-sky-500/15",
    hoverBorder: "hover:border-sky-400/30",

    iconBorder: "border-sky-500/20",
    iconBackground: "bg-sky-500/10",
    iconColor: "text-sky-300",

    badgeBorder: "border-sky-500/20",
    badgeBackground: "bg-sky-500/10",
    badgeColor: "text-sky-300",

    glow: "bg-sky-500/10",

    progress: "blue",
  },

  DevOps: {
    border: "border-orange-500/15",
    hoverBorder: "hover:border-orange-400/30",

    iconBorder: "border-orange-500/20",
    iconBackground: "bg-orange-500/10",
    iconColor: "text-orange-300",

    badgeBorder: "border-orange-500/20",
    badgeBackground: "bg-orange-500/10",
    badgeColor: "text-orange-300",

    glow: "bg-orange-500/10",

    progress: "orange",
  },

  Tools: {
    border: "border-fuchsia-500/15",
    hoverBorder: "hover:border-fuchsia-400/30",

    iconBorder: "border-fuchsia-500/20",
    iconBackground: "bg-fuchsia-500/10",
    iconColor: "text-fuchsia-300",

    badgeBorder: "border-fuchsia-500/20",
    badgeBackground: "bg-fuchsia-500/10",
    badgeColor: "text-fuchsia-300",

    glow: "bg-fuchsia-500/10",

    progress: "violet",
  },

  Other: {
    border: "border-slate-500/15",
    hoverBorder: "hover:border-slate-400/30",

    iconBorder: "border-slate-500/20",
    iconBackground: "bg-slate-500/10",
    iconColor: "text-slate-300",

    badgeBorder: "border-slate-500/20",
    badgeBackground: "bg-slate-500/10",
    badgeColor: "text-slate-300",

    glow: "bg-slate-500/10",

    progress: "cyan",
  },
};
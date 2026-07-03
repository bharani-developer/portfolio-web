// src\shared\constants\navigation.ts

import { ROUTES } from "@/app/shared/constants/routes";

export interface NavigationItem {
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
  readonly disabled?: boolean;
}

export const MAIN_NAVIGATION: readonly NavigationItem[] = [
  {
    label: "Home",
    href: ROUTES.HOME,
  },
  {
    label: "About",
    href: ROUTES.ABOUT,
  },
  {
    label: "Services",
    href: ROUTES.SERVICES,
  },
  {
    label: "Projects",
    href: ROUTES.PROJECTS,
  },
  {
    label: "Blog",
    href: ROUTES.BLOG,
  },
  {
    label: "Contact",
    href: ROUTES.CONTACT,
  },
] as const;

export const FOOTER_NAVIGATION: readonly NavigationItem[] = [
  {
    label: "Home",
    href: ROUTES.HOME,
  },
  {
    label: "About",
    href: ROUTES.ABOUT,
  },
  {
    label: "Services",
    href: ROUTES.SERVICES,
  },
  {
    label: "Projects",
    href: ROUTES.PROJECTS,
  },
  {
    label: "Blog",
    href: ROUTES.BLOG,
  },
  {
    label: "Contact",
    href: ROUTES.CONTACT,
  },
] as const;

export const LEGAL_NAVIGATION: readonly NavigationItem[] = [] as const;

export const CTA_NAVIGATION = {
  PROJECTS: {
    label: "View Projects",
    href: ROUTES.PROJECTS,
  },

  CONTACT: {
    label: "Contact Me",
    href: ROUTES.CONTACT,
  },
} as const;
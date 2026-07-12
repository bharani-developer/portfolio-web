// src/shared/constants/routes.ts

export const ROUTES = {
  HOME: "/",

  ABOUT: "/about",

  SERVICES: "/services",

  PROJECTS: "/projects",

  BLOG: "/blog",

  CONTACT: "/contact",

  PROJECT_DETAILS: (slug: string): string =>
    `/projects/${slug}`,

  BLOG_DETAILS: (slug: string): string =>
    `/blog/${slug}`,
} as const;

export const NAVIGATION_ITEMS = [
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

export const FOOTER_LINKS = [
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

export type NavigationItem =
  (typeof NAVIGATION_ITEMS)[number];

export type FooterLink =
  (typeof FOOTER_LINKS)[number];
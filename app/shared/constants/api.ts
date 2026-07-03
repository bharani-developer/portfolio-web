// src\shared\constants\api.ts

export const API_CONFIG = {
  BASE_URL:
    process.env.NEXT_PUBLIC_API_URL ??
    "https://portfolio-backend-ovqj.onrender.com",

  TIMEOUT: 30_000,

  HEADERS: {
    ACCEPT: "application/json",
    CONTENT_TYPE: "application/json",
  },

  PAGINATION: {
    DEFAULT_PAGE: 1,
    DEFAULT_LIMIT: 10,
    MAX_LIMIT: 100,
  },
} as const;

export const API_ENDPOINTS = {
  HERO: "/hero",

  ABOUT: "/about",

  SKILLS: "/skills",

  SERVICES: "/services",

  PROJECTS: "/projects",

  EXPERIENCE: "/experience",

  EDUCATION: "/education",

  CERTIFICATIONS: "/certifications",

  TESTIMONIALS: "/testimonials",

  BLOGS: "/blogs",

  CONTACT: "/contact",

  SETTINGS: "/settings",
} as const;

export const CACHE_KEYS = {
  HERO: "hero",

  ABOUT: "about",

  SKILLS: "skills",

  SERVICES: "services",

  PROJECTS: "projects",

  EXPERIENCE: "experience",

  EDUCATION: "education",

  CERTIFICATIONS: "certifications",

  TESTIMONIALS: "testimonials",

  BLOGS: "blogs",

  CONTACT: "contact",

  SETTINGS: "settings",
} as const;

export type ApiEndpoint =
  (typeof API_ENDPOINTS)[keyof typeof API_ENDPOINTS];

export type CacheKey =
  (typeof CACHE_KEYS)[keyof typeof CACHE_KEYS];
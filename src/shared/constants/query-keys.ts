// src\shared\constants\query-keys.ts

export const QUERY_KEYS = {
    home: ["home"],

  hero: ["hero"] as const,

  about: ["about"] as const,

  skills: ["skills"] as const,

  services: ["services"] as const,

  projects: ["projects"] as const,

  project: (slug: string) =>
    ["projects", slug] as const,

  experience: ["experience"] as const,

  education: ["education"] as const,

  certifications: ["certifications"] as const,

  testimonials: ["testimonials"] as const,

  blogs: ["blogs"] as const,

  blog: (slug: string) =>
    ["blogs", slug] as const,

  contact: ["contact"] as const,

  settings: ["settings"] as const,
} as const;

export type QueryKeys = typeof QUERY_KEYS;
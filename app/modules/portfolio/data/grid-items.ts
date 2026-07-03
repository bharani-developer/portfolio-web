// src/data/grid-items.ts

import type { Technology } from "@/components/ui/bento-grid";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export interface GridItem {
  id: number;

  badge: string;

  title: string;

  description: string;

  technologies: Technology[];

  className: string;

  img: string;

  imgClassName?: string;

  titleClassName?: string;

  spareImg?: string;
}

/* -------------------------------------------------------------------------- */
/*                          Reusable Technology Stack                         */
/* -------------------------------------------------------------------------- */

const TECH = {
  react: {
    name: "React",
    logo: "/logo/react.png",
  },

  next: {
    name: "Next.js",
    logo: "/logo/nextjs.png",
  },

  express: {
    name: "Express",
    logo: "/logo/express.png",
  },

  node: {
    name: "Node.js",
    logo: "/logo/nodejs.png",
  },

  typescript: {
    name: "TypeScript",
    logo: "/logo/typescript.png",
  },

  mongodb: {
    name: "MongoDB",
    logo: "/logo/mongodb.png",
  },

  mongoose: {
    name: "Mongoose",
    logo: "/logo/mongoose.png",
  },

  jwt: {
    name: "JWT",
    logo: "/logo/jwt.png",
  },

  google: {
    name: "Google OAuth",
    logo: "/logo/google.png",
  },

  cloudinary: {
    name: "Cloudinary",
    logo: "/logo/cloudinary.png",
  },

  zod: {
    name: "Zod",
    logo: "/logo/zod.png",
  },

  swagger: {
    name: "Swagger",
    logo: "/logo/swagger.png",
  },

  vite: {
    name: "Vite",
    logo: "/logo/vite.png",
  },

  reactQuery: {
    name: "TanStack Query",
    logo: "/logo/react-query.png",
  },

  reactHookForm: {
    name: "React Hook Form",
    logo: "/logo/react-hook-form.png",
  },

  shadcn: {
    name: "Shadcn UI",
    logo: "/logo/shadcn.png",
  },

  tailwind: {
    name: "Tailwind CSS",
    logo: "/logo/tailwindcss.png",
  },

  axios: {
    name: "Axios",
    logo: "/logo/axios.png",
  },

  motion: {
    name: "Motion",
    logo: "/logo/motion.png",
  },

  nextThemes: {
    name: "Next Themes",
    logo: "/logo/nextthemes.png",
  },

  git: {
    name: "Git",
    logo: "/logo/git.png",
  },

  github: {
    name: "GitHub",
    logo: "/logo/github.png",
  },

  vscode: {
    name: "VS Code",
    logo: "/logo/vscode.png",
  },

  postman: {
    name: "Postman",
    logo: "/logo/postman.png",
  },

  npm: {
    name: "npm",
    logo: "/logo/npm.png",
  },

  eslint: {
    name: "ESLint",
    logo: "/logo/eslint.png",
  },

  prettier: {
    name: "Prettier",
    logo: "/logo/prettier.png",
  },

  seo: {
    name: "SEO",
    logo: "/logo/seo.png",
  },

  responsive: {
    name: "Responsive",
    logo: "/logo/responsive.png",
  },

  performance: {
    name: "Performance",
    logo: "/logo/performance.png",
  },

  darkMode: {
    name: "Dark Mode",
    logo: "/logo/darkmode.png",
  },

  restApi: {
    name: "REST API",
    logo: "/logo/restapi.png",
  },
} as const;

/* -------------------------------------------------------------------------- */
/*                                 Grid Items                                 */
/* -------------------------------------------------------------------------- */

export const gridItems: GridItem[] = [
  {
    id: 1,

    badge: "Architecture",

    title: "Full Stack Portfolio",

    description:
      "A modern portfolio platform built with a scalable three-tier architecture consisting of an Express.js REST API backend, a React admin dashboard, and a high-performance Next.js website.",

    technologies: [
      TECH.express,
      TECH.react,
      TECH.next,
      TECH.mongodb,
    ],

    className: "md:col-span-4 md:row-span-2",

    img: "/portfolio/portfolio.png",
  },

  {
    id: 2,

    badge: "Database",

    title: "MongoDB Database",

    description:
      "Designed a flexible NoSQL database using MongoDB and Mongoose with schema validation, indexing, optimized queries, reusable models, and scalable collections.",

    technologies: [
      TECH.mongodb,
      TECH.mongoose,
    ],

    className: "md:col-span-2 md:row-span-2",

    img: "/logo/mongodb.png",
  },

  {
    id: 3,

    badge: "Backend",

    title: "REST API Backend",

    description:
      "Developed a secure REST API with authentication, authorization, image uploads, validation, modular architecture, and comprehensive API documentation.",

    technologies: [
      TECH.node,
      TECH.express,
      TECH.typescript,
      TECH.mongodb,
      TECH.jwt,
      TECH.google,
      TECH.cloudinary,
      TECH.zod,
      TECH.swagger,
    ],

    className: "md:col-span-2",

    img: "/portfolio/restapi.png",
  },
  {
    id: 4,

    badge: "Admin Panel",

    title: "Content Management System",

    description:
      "Modern React-based administration dashboard for managing hero, about, skills, services, experience, education, certifications, projects, blogs, testimonials, contact information, and application settings.",

    technologies: [
      TECH.react,
      TECH.typescript,
      TECH.vite,
      TECH.reactQuery,
      TECH.reactHookForm,
      TECH.shadcn,
      TECH.tailwind,
      TECH.axios,
    ],

    className: "md:col-span-2",

    img: "/portfolio/adminpanel.png",
  },

  {
    id: 5,

    badge: "Frontend",

    title: "Portfolio Website",

    description:
      "Built with Next.js App Router using reusable components, smooth Motion animations, React Query, dark mode, responsive layouts, SEO optimization, and excellent performance.",

    technologies: [
      TECH.next,
      TECH.react,
      TECH.typescript,
      TECH.motion,
      TECH.tailwind,
      TECH.reactQuery,
      TECH.axios,
      TECH.nextThemes,
    ],

    className: "md:col-span-2",

    img: "/portfolio/portfolio.png",
  },

  {
    id: 6,

    badge: "Developer Tools",

    title: "Development Workflow",

    description:
      "Maintained clean architecture and high code quality using Git, GitHub, VS Code, Postman, ESLint, Prettier, npm, and modern development best practices.",

    technologies: [
      TECH.git,
      TECH.github,
      TECH.vscode,
      TECH.postman,
      TECH.npm,
      TECH.eslint,
      TECH.prettier,
    ],

    className: "md:col-span-4",

    img: "/portfolio/development.png",
  },
  {
    id: 7,

    badge: "Features",

    title: "Project Highlights",

    description:
      "A production-ready portfolio featuring secure authentication, Google OAuth, REST APIs, Cloudinary image uploads, responsive layouts, SEO optimization, dark mode, reusable architecture, and performance-focused development.",

    technologies: [
      TECH.jwt,
      TECH.google,
      TECH.cloudinary,
      TECH.restApi,
      TECH.responsive,
      TECH.seo,
      TECH.performance,
      TECH.darkMode,
    ],

    className: "md:col-span-2",

    img: "/portfolio/security.png",
  },
];
// src/shared/constants/site.ts

export const SITE_CONFIG = {
  name: "Bharani",
  shortName: "Bharani",
  title: "Bharani | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, Express.js, MongoDB, Laravel, and Flutter. Building scalable web and mobile applications with modern technologies.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-backend-ovqj.onrender.com",

  ogImage: "/images/og-image.png",
  twitterImage: "/images/twitter-image.png",

  author: {
    name: "Bharani",
    email: "bharani@example.com",
    role: "Full Stack Developer",
  },

  keywords: [
    "Bharani",
    "Full Stack Developer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Express.js Developer",
    "MongoDB Developer",
    "Laravel Developer",
    "Flutter Developer",
    "Portfolio",
    "Web Developer",
    "Mobile App Developer",
  ],

  navigation: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],

  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    instagram: "https://instagram.com/yourusername",
    facebook: "https://facebook.com/yourusername",
    youtube: "",
  },

  contact: {
    email: "bharani@example.com",
    phone: "+91XXXXXXXXXX",
    location: "Tamil Nadu, India",
  },

  resume: {
    downloadUrl: "/resume/bharani-resume.pdf",
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Bharani. All rights reserved.`,
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
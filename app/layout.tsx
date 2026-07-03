// ============================================================================
// src/app/layout.tsx
// Part 1A
// Imports • Fonts • Viewport • Metadata (Part 1)
// ============================================================================

import type { Metadata, Viewport } from "next";

import type { ReactNode } from "react";

import { Geist, Geist_Mono } from "next/font/google";

import "./styles/globals.css";

import { AppProvider } from "@/app/providers/app-provider";

/* ============================================================================
   Fonts
============================================================================ */

export const geistSans = Geist({
  subsets: ["latin"],

  variable: "--font-geist-sans",

  display: "swap",

  preload: true,

  fallback: ["Inter", "system-ui", "Arial", "sans-serif"],
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],

  variable: "--font-geist-mono",

  display: "swap",

  preload: true,

  fallback: ["JetBrains Mono", "Consolas", "monospace"],
});

/* ============================================================================
   Viewport
============================================================================ */

export const viewport: Viewport = {
  width: "device-width",

  initialScale: 1,

  maximumScale: 5,

  viewportFit: "cover",

  colorScheme: "dark",

  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#020617",
    },
  ],
};

/* ============================================================================
   Metadata
============================================================================ */

export const metadata: Metadata = {
  metadataBase: new URL("https://bharani.dev"),

  applicationName: "Bharani Portfolio",

  title: {
    default: "Bharani | Full Stack Developer",

    template: "%s | Bharani",
  },

  description:
    "Professional Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, Express.js, Laravel, MongoDB, REST APIs, and scalable modern web applications.",

  keywords: [
    "Bharani",
    "Portfolio",
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "Laravel",
    "PHP",
    "MongoDB",
    "MySQL",
    "Tailwind CSS",
    "REST API",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
  ],

  authors: [
    {
      name: "Bharani",
      url: "https://bharani.dev",
    },
  ],

  creator: "Bharani",

  publisher: "Bharani",

  category: "Technology",

  classification: "Portfolio Website",

  generator: "Next.js 16",

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,

    address: false,

    telephone: false,
  },

  alternates: {
    canonical: "/",
  },

  manifest: "/manifest.webmanifest",

  /* ==========================================================================
     Icons
  ========================================================================== */

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon-192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: "/icon-512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],

    shortcut: ["/favicon.ico"],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  },

  /* ==========================================================================
     Robots
  ========================================================================== */

  robots: {
    index: true,

    follow: true,

    nocache: false,

    googleBot: {
      index: true,

      follow: true,

      noimageindex: false,

      "max-image-preview": "large",

      "max-video-preview": -1,

      "max-snippet": -1,
    },
  },

  /* ==========================================================================
     Verification
  ========================================================================== */

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,

    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,

    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
  },

  /* ==========================================================================
     Apple Web App
  ========================================================================== */

  appleWebApp: {
    capable: true,

    title: "Bharani",

    statusBarStyle: "black-translucent",
  },

  /* ==========================================================================
     Open Graph
  ========================================================================== */

  openGraph: {
    type: "website",

    locale: "en_US",

    url: "https://bharani.dev",

    siteName: "Bharani Portfolio",

    title: "Bharani | Full Stack Developer",

    description:
      "Professional Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, Express.js, Laravel, MongoDB, and scalable web applications.",

    images: [
      {
        url: "/og.png",

        width: 1200,

        height: 630,

        alt: "Bharani Portfolio",
      },
    ],
  },

  /* ==========================================================================
     Twitter
  ========================================================================== */

  twitter: {
    card: "summary_large_image",

    creator: "@bharani",

    title: "Bharani | Full Stack Developer",

    description:
      "Professional Full Stack Developer portfolio showcasing projects, skills, blogs, and experience.",

    images: ["/og.png"],
  },

  /* ==========================================================================
     Archives
  ========================================================================== */

  archives: ["https://bharani.dev"],

  /* ==========================================================================
     Assets
  ========================================================================== */

  assets: ["https://bharani.dev"],

  /* ==========================================================================
     Bookmarks
  ========================================================================== */

  bookmarks: ["https://bharani.dev"],

  /* ==========================================================================
     Other
  ========================================================================== */

  other: {
    "mobile-web-app-capable": "yes",

    "apple-mobile-web-app-capable": "yes",

    "apple-mobile-web-app-title": "Bharani",

    "msapplication-TileColor": "#020617",

    "color-scheme": "dark",
  },
};
/* ============================================================================
   Root Layout
============================================================================ */

interface RootLayoutProps {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={[geistSans.variable, geistMono.variable].join(" ")}
    >
      <body
        className={[
          "min-h-screen",
          "bg-background",
          "font-sans",
          "text-foreground",
          "antialiased",
          "overflow-x-hidden",
          "selection:bg-cyan-500/30",
          "selection:text-white",
          "supports-[overflow:clip]:overflow-x-clip",
        ].join(" ")}
      >
        <AppProvider>
          <main
            id="main-content"
            role="main"
            className="relative flex min-h-screen flex-col"
          >
            {children}
          </main>
        </AppProvider>
      </body>
    </html>
  );
}

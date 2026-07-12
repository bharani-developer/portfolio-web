// components/ui/floating-navbar.tsx

"use client";

import * as React from "react";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

import { cn } from "@/src/shared/lib/utils";

export interface FloatingNavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

interface FloatingNavProps {
  navItems: ReadonlyArray<FloatingNavItem>;
  className?: string;
}

export function FloatingNav({
  navItems,
  className,
}: Readonly<FloatingNavProps>): React.JSX.Element {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = React.useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    const previous = scrollYProgress.getPrevious() ?? 0;

    const direction = current - previous;

    if (current < 0.05) {
      setVisible(false);
      return;
    }

    setVisible(direction < 0);
  });

  return (
    <AnimatePresence>
      <motion.nav
        aria-label="Main Navigation"
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: visible ? 1 : 0,
          y: visible ? 0 : -100,
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        className={cn(
          "fixed inset-x-0 top-6 z-[5000]",
          "mx-auto flex w-fit justify-center",
          className,
        )}
      >
        <div
          className={cn(
            "flex items-center gap-2",
            "rounded-full border border-border/50",
            "bg-background/80",
            "px-2 py-1.5",
            "shadow-lg",
            "backdrop-blur-xl",
            "supports-[backdrop-filter]:bg-background/60",
          )}
        >
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.link}
                href={item.link}
                aria-label={item.name}
                className={cn(
                  "relative flex items-center gap-2",
                  "rounded-full px-4 py-2",
                  "text-sm font-medium",
                  "text-muted-foreground",
                  "transition-all duration-200",
                  "hover:bg-accent",
                  "hover:text-foreground",
                )}
              >
                <span className="sm:hidden">{item.icon}</span>

                <span className="hidden sm:block">{item.name}</span>
              </a>
            ))}
          </div>

          <div className="h-5 w-px bg-border" />

          <button
            type="button"
            className={cn(
              "rounded-full px-4 py-2",
              "text-sm font-medium",
              "bg-primary text-primary-foreground",
              "transition-all duration-200",
              "hover:scale-105",
              "hover:shadow-lg",
            )}
          >
            Login
          </button>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}

// src\shared\hooks\use-theme.ts

"use client";

import * as React from "react";

import { useTheme as useNextTheme } from "next-themes";

export type Theme = "light" | "dark" | "system";

export interface UseThemeReturn {
  theme: Theme;
  resolvedTheme: Exclude<Theme, "system">;
  mounted: boolean;
  isDark: boolean;
  isLight: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export function useTheme(): UseThemeReturn {
  const {
    theme,
    resolvedTheme,
    setTheme,
  } = useNextTheme();

  const [mounted, setMounted] =
    React.useState(false);

  React.useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => {
      window.cancelAnimationFrame(id);
    };
  }, []);

  const currentTheme: Theme =
    theme === "light" ||
    theme === "dark" ||
    theme === "system"
      ? theme
      : "system";

  const currentResolvedTheme: "light" | "dark" =
    resolvedTheme === "dark"
      ? "dark"
      : "light";

  const toggleTheme =
    React.useCallback((): void => {
      setTheme(
        currentResolvedTheme === "dark"
          ? "light"
          : "dark",
      );
    }, [currentResolvedTheme, setTheme]);

  return {
    theme: currentTheme,
    resolvedTheme: currentResolvedTheme,
    mounted,
    isDark:
      mounted &&
      currentResolvedTheme === "dark",
    isLight:
      mounted &&
      currentResolvedTheme === "light",
    setTheme: (value: Theme) => {
      setTheme(value);
    },
    toggleTheme,
  };
}
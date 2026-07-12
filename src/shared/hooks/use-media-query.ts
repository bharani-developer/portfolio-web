// src\shared\hooks\use-media-query.ts

"use client";

import * as React from "react";

function subscribe(
  query: string,
  callback: () => void,
): () => void {
  const mediaQueryList = window.matchMedia(query);

  mediaQueryList.addEventListener(
    "change",
    callback,
  );

  return () => {
    mediaQueryList.removeEventListener(
      "change",
      callback,
    );
  };
}

function getSnapshot(
  query: string,
): boolean {
  return window.matchMedia(query).matches;
}

function getServerSnapshot(
  defaultValue: boolean,
): boolean {
  return defaultValue;
}

export function useMediaQuery(
  query: string,
  defaultValue = false,
): boolean {
  return React.useSyncExternalStore(
    (callback) => subscribe(query, callback),
    () => getSnapshot(query),
    () => getServerSnapshot(defaultValue),
  );
}

/**
 * Breakpoint Helpers
 */

export function useIsMobile(): boolean {
  return useMediaQuery(
    "(max-width: 767px)",
  );
}

export function useIsTablet(): boolean {
  return useMediaQuery(
    "(min-width: 768px) and (max-width: 1023px)",
  );
}

export function useIsDesktop(): boolean {
  return useMediaQuery(
    "(min-width: 1024px)",
  );
}

export function usePrefersDarkMode(): boolean {
  return useMediaQuery(
    "(prefers-color-scheme: dark)",
  );
}

export function usePrefersReducedMotion(): boolean {
  return useMediaQuery(
    "(prefers-reduced-motion: reduce)",
  );
}
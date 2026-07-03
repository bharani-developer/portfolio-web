// src\shared\hooks\use-scroll.ts

"use client";

import * as React from "react";

interface UseScrollOptions {
  /**
   * Scroll position threshold before isScrolled becomes true.
   * Default: 10
   */
  threshold?: number;

  /**
   * Enable direction tracking.
   * Default: true
   */
  trackDirection?: boolean;
}

export type ScrollDirection = "up" | "down";

export interface UseScrollReturn {
  scrollY: number;
  scrollX: number;
  isScrolled: boolean;
  direction: ScrollDirection;
}

export function useScroll(
  options: UseScrollOptions = {},
): UseScrollReturn {
  const {
    threshold = 10,
    trackDirection = true,
  } = options;

  const [scrollState, setScrollState] =
    React.useState<UseScrollReturn>({
      scrollY: 0,
      scrollX: 0,
      isScrolled: false,
      direction: "up",
    });

  const previousScrollYRef = React.useRef(0);
  const tickingRef = React.useRef(false);

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const updateScrollState = (): void => {
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;

      const direction: ScrollDirection =
        trackDirection
          ? scrollY > previousScrollYRef.current
            ? "down"
            : "up"
          : "up";

      setScrollState((previousState) => {
        if (
          previousState.scrollY === scrollY &&
          previousState.scrollX === scrollX &&
          previousState.direction === direction &&
          previousState.isScrolled ===
            scrollY > threshold
        ) {
          return previousState;
        }

        return {
          scrollY,
          scrollX,
          isScrolled: scrollY > threshold,
          direction,
        };
      });

      previousScrollYRef.current = scrollY;
      tickingRef.current = false;
    };

    const handleScroll = (): void => {
      if (tickingRef.current) {
        return;
      }

      tickingRef.current = true;

      window.requestAnimationFrame(
        updateScrollState,
      );
    };

    updateScrollState();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, [threshold, trackDirection]);

  return scrollState;
}
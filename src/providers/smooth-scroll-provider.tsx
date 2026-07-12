// src/providers/smooth-scroll-provider.tsx

"use client";

import * as React from "react";

import Lenis from "lenis";

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export function SmoothScrollProvider({
  children,
}: Readonly<SmoothScrollProviderProps>): React.JSX.Element {
  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const lenis = new Lenis({
      autoRaf: false,

      duration: 1.2,

      smoothWheel: true,

      syncTouch: false,

      touchMultiplier: 1.5,

      wheelMultiplier: 1,

      gestureOrientation: "vertical",
    });

    let frameId: number;

    const animate = (time: number): void => {
      lenis.raf(time);

      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);

      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
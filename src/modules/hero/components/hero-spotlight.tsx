// src/modules/hero/components/hero-spotlight.tsx

"use client";

import { useEffect, useState } from "react";

import { motion } from "motion/react";

interface Position {
  x: number;
  y: number;
}

export function HeroSpotlight() {
  const [position, setPosition] = useState<Position>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove,
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove,
      );
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 300,
        y: position.y - 300,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        mass: 0.6,
      }}
      className="pointer-events-none fixed left-0 top-0 z-0 h-[600px] w-[600px] rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.08) 35%, transparent 70%)",
        filter: "blur(60px)",
      }}
    />
  );
}
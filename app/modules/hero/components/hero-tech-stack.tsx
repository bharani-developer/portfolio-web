"use client";

import Image from "next/image";

import { motion } from "motion/react";

interface HeroTechStackProps {
  technologies: string[];
}

interface TechIcon {
  name: string;
  icon: string;
  position: string;
}

const TECH_ICONS: TechIcon[] = [
  {
    name: "React",
    icon: "/logo/react.png",
    position: "left-6 top-8",
  },
  {
    name: "Next.js",
    icon: "/logo/nextjs.png",
    position: "right-0 top-16",
  },
  {
    name: "Node.js",
    icon: "/logo/nodejs.png",
    position: "left-0 top-1/2",
  },
  {
    name: "MongoDB",
    icon: "/logo/mongodb.png",
    position: "right-4 top-1/2",
  },
  {
    name: "Express",
    icon: "/logo/express.png",
    position: "right-10 bottom-8",
  },
];

export function HeroTechStack({
  technologies,
}: HeroTechStackProps) {
  const icons = TECH_ICONS.filter((item) =>
    technologies.includes(item.name),
  );

  return (
    <>
      {icons.map((tech, index) => (
        <motion.div
          key={tech.name}
          className={`absolute ${tech.position} z-20`}
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 3 + index,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-border/60 bg-background/80 shadow-xl backdrop-blur-xl">
            <Image
              src={tech.icon}
              alt={tech.name}
              width={42}
              height={42}
            />
          </div>
        </motion.div>
      ))}
    </>
  );
}
"use client";

import * as React from "react";

import { FloatingNav } from "@/src/components/ui/floating-navbar";
import { NAV_ITEMS } from "@/src/config/navigation";

import { AboutSection } from "@/src/modules/about/components/about-section";
import { ExperienceSection } from "@/src/modules/experience/components/experience-section";
import { HeroSection } from "@/src/modules/hero/components/hero-section";
import PortfolioSection from "@/src/modules/portfolio/components/portfolio-section";
import { SkillsSection } from "@/src/modules/skills/components/skills-section";

import { useHomeData } from "../hooks/use-home-data";

export function HomePage(): React.ReactNode {
  console.log("HomePage rendered");

  const { hero, about, skills, experiences } = useHomeData();

  return (
    <main className="relative overflow-hidden">
      <FloatingNav navItems={NAV_ITEMS} />
      {hero && <HeroSection hero={hero} />}
      <PortfolioSection />
      <SkillsSection />
      <AboutSection />
      <ExperienceSection />
    </main>
  );
}

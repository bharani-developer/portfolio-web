"use client";

import * as React from "react";

import { HeroSection } from "@/app/modules//hero/components/hero-section";
import { useHomeData } from "../hooks/use-home-data";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { NAV_ITEMS } from "@/app/config/navigation";
// import { Grid } from "lucide-react";
import PortfolioSection from "../../portfolio/components/portfolio-section";

import { SkillsSection } from "../../skills/components/skills-section";
import { AboutSection } from "../../about/components/about-section";

export function HomePage(): React.JSX.Element {
  const { hero } = useHomeData();

  return (
    <main className="relative overflow-hidden">
      <FloatingNav navItems={NAV_ITEMS} />
      <div>{hero ? <HeroSection hero={hero} /> : null}</div>
      <PortfolioSection />
      <SkillsSection />
      <AboutSection />
      {/* <Grid /> */}
    </main>
  );
}

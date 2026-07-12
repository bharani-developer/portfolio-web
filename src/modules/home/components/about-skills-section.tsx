// src/modules/home/components/about-skills-section.tsx

"use client";

import SectionContainer from "@/src/components/common/section-container";

import { AboutSection } from "@/src/modules/about/components/about-section";
import { SkillsSection } from "@/src/modules/skills/components/skills-section";

export function AboutSkillsSection() {
  return (
    <SectionContainer
      id="about-skills"
      width="full"
      fluid
      spacing="xl"
      background="transparent"
    >
      <div className="grid items-start gap-8 xl:grid-cols-[0.42fr_0.58fr]">
        <SkillsSection />
        <AboutSection />
      </div>
    </SectionContainer>
  );
}

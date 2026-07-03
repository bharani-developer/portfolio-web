// src/modules/home/components/about-skills-section.tsx

"use client";

import SectionContainer from "@/components/section-container";

import { AboutSection } from "@/app/modules/about/components/about-section";
import { SkillsSection } from "@/app/modules/skills/components/skills-section";

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
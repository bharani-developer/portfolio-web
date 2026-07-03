"use client";

import { motion } from "motion/react";

import { SectionHeader } from "@/components/section-header";
import { Section } from "@/components/layout/section";

import { useGroupedSkills } from "../hooks/use-skills";

import { SkillsEmpty } from "./skills-empty";
import { SkillsError } from "./skills-error";
import { SkillsList } from "./skills-list";
import { SkillsSkeleton } from "./skills-skeleton";

export function SkillsSection() {
  const {
    groups,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  } = useGroupedSkills();

  const header = (
    <SectionHeader
      badge="Technologies"
      title="Modern Tech Stack"
      highlight="Tech Stack"
      description="Building scalable web, mobile, and cloud applications using modern frameworks, robust backend technologies, and industry-standard development tools."
    />
  );

  if (isLoading) {
    return (
      <Section
        id="skills"
        spacing="xl"
        fullWidth
        className="relative overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {header}
          <SkillsSkeleton />
        </div>
      </Section>
    );
  }

  if (isError) {
    return (
      <Section
        id="skills"
        spacing="xl"
        fullWidth
        className="relative overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {header}

          <SkillsError
            error={error}
            onRetry={() => {
              void refetch();
            }}
          />
        </div>
      </Section>
    );
  }

  if (groups.length === 0) {
    return (
      <Section
        id="skills"
        spacing="xl"
        fullWidth
        className="relative overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {header}
          <SkillsEmpty />
        </div>
      </Section>
    );
  }

  return (
    <Section
      id="skills"
      spacing="xl"
      fullWidth
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_35%)]" />

      <motion.div
        initial={{
          opacity: 0,
          y: 24,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.5,
        }}
        className="space-y-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {header}
        </div>

        <div className="w-full">
          <SkillsList
            groups={groups}
            isFetching={isFetching}
          />
        </div>
      </motion.div>
    </Section>
  );
}
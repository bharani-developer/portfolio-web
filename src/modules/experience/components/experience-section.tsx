// src/modules/experience/components/experience-section.tsx

"use client";

import * as React from "react";

import { motion } from "motion/react";

import { SectionHeader } from "@/src/components/common/section-header";
import { Section } from "@/src/components/layout/section";

import { useHomepageExperiences } from "../hooks/use-experience";

import { ExperienceEmpty } from "./experience-empty";
import { ExperienceError } from "./experience-error";
import { ExperienceSkeleton } from "./experience-skeleton";
import { ExperienceTimeline } from "./experience-timeline";
import { ExperienceCTA } from "./experience-cta";

export function ExperienceSection(): React.JSX.Element {
  const {
    experiences,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  } = useHomepageExperiences();

  const header = (
    <SectionHeader
      badge="Experience"
      title="Professional"
      highlight="Journey"
      description="Building scalable software, solving real-world business problems, and delivering modern digital experiences across startups and enterprise environments."
    />
  );

  /**
   * Loading
   */
  if (isLoading) {
    return (
      <Section
        id="experience"
        spacing="xl"
        className="relative overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {header}

          <div className="mt-16">
            <ExperienceSkeleton />
          </div>
        </div>
      </Section>
    );
  }
    /**
   * Error
   */
  if (isError) {
    return (
      <Section
        id="experience"
        spacing="xl"
        className="relative overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {header}

          <div className="mt-16">
            <ExperienceError
              error={error}
              onRetry={() => {
                void refetch();
              }}
            />
          </div>
        </div>
      </Section>
    );
  }

  /**
   * Empty
   */
  if (experiences.length === 0) {
    return (
      <Section
        id="experience"
        spacing="xl"
        className="relative overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {header}

          <div className="mt-16">
            <ExperienceEmpty />
          </div>
        </div>
      </Section>
    );
  }

  /**
   * Success
   */
  return (
    <Section
      id="experience"
      spacing="xl"
      className="relative overflow-hidden"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,.07),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,.06),transparent_35%)]" />

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,.015),transparent)]" />

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {header}

        <div className="mt-20">
          <ExperienceTimeline
            experiences={experiences}
          />
        </div>
                {/* CTA */}

        <div className="mt-20">
          <ExperienceCTA />
        </div>

        {/* Background Refresh Indicator */}

        {isFetching && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="mt-8 flex justify-end"
          >
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-cyan-500/20
                bg-cyan-500/10
                px-3
                py-1
                text-xs
                font-medium
                text-cyan-300
                backdrop-blur-sm
              "
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

              Updating experience...
            </span>
          </motion.div>
        )}
      </motion.div>
    </Section>
  );
}

ExperienceSection.displayName =
  "ExperienceSection";

export default React.memo(
  ExperienceSection,
);
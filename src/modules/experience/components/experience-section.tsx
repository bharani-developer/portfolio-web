"use client";

import * as React from "react";

import { motion } from "motion/react";

import { SectionHeader } from "@/src/components/common/section-header";
import { Section } from "@/src/components/layout/section";

import { useHomepageExperiences } from "../hooks/use-experience";

import { ExperienceCTA } from "./experience-cta";
import { ExperienceEmpty } from "./experience-empty";
import { ExperienceError } from "./experience-error";
import { ExperienceSkeleton } from "./experience-skeleton";
import { ExperienceTimeline } from "./experience-timeline";

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
   * Loading State
   */

  if (isLoading) {
    return (
      <Section
        id="experience"
        spacing="xl"
        containerSize="2xl"
        className="relative overflow-hidden"
      >
        {/* Background */}

        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,.07),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,.06),transparent_35%)]" />

        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,.015),transparent)]" />

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
        >
          {header}

          <div className="mt-20">
            <ExperienceSkeleton />
          </div>
        </motion.div>
      </Section>
    );
  }
    /**
   * Error State
   */

  if (isError) {
    return (
      <Section
        id="experience"
        spacing="xl"
        containerSize="2xl"
        className="relative overflow-hidden"
      >
        {/* Background */}

        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,.07),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,.06),transparent_35%)]" />

        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,.015),transparent)]" />

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
        >
          {header}

          <div className="mt-20">
            <ExperienceError
              error={error}
              onRetry={() => {
                void refetch();
              }}
            />
          </div>
        </motion.div>
      </Section>
    );
  }

  /**
   * Empty State
   */

  if (experiences.length === 0) {
    return (
      <Section
        id="experience"
        spacing="xl"
        containerSize="2xl"
        className="relative overflow-hidden"
      >
        {/* Background */}

        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,.07),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,.06),transparent_35%)]" />

        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,.015),transparent)]" />

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
        >
          {header}

          <div className="mt-20">
            <ExperienceEmpty />
          </div>
        </motion.div>
      </Section>
    );
  }

  /**
   * Success State
   */

  return (
    <Section
      id="experience"
      spacing="xl"
      containerSize="2xl"
      className="relative overflow-hidden"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,.07),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,.06),transparent_35%)]" />

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,.015),transparent)]" />

      <motion.div
        initial={{
          opacity: 0,
          y: 32,
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
      >
        {header}

        {/* Timeline */}
                <div className="mt-20">
          <div className="-mx-4 sm:-mx-6 lg:-mx-8 2xl:-mx-12">
            <ExperienceTimeline
              experiences={experiences}
            />
          </div>
        </div>

        {/* Call To Action */}

        <div className="mt-24">
          <ExperienceCTA />
        </div>

        {/* Background Refresh Indicator */}

        {isFetching && (
          <motion.div
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -8,
            }}
            transition={{
              duration: 0.25,
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
                px-3.5
                py-1.5
                text-xs
                font-medium
                text-cyan-300
                shadow-sm
                backdrop-blur-md
              "
            >
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

              Updating experience...
            </span>
          </motion.div>
        )}
      </motion.div>
    </Section>
  );
}

ExperienceSection.displayName = "ExperienceSection";

export default React.memo(ExperienceSection);
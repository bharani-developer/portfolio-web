"use client";

import { motion } from "motion/react";

import { SectionHeader } from "@/components/section-header";
import { Section } from "@/components/layout/section";

import { useAbout } from "../hooks/use-about";

import { AboutContact } from "./about-contact";
import { AboutContent } from "./about-content";
import { AboutEmpty } from "./about-empty";
import { AboutError } from "./about-error";
import { AboutProfile } from "./about-profile";
import { AboutSkeleton } from "./about-skeleton";
import { AboutStats } from "./about-stats";

export function AboutSection() {
  const {
    about,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  } = useAbout();

  const header = (
    <SectionHeader
      badge="About Me"
      title="Passion Meets"
      highlight="Technology"
      description="I'm a Full Stack Developer who enjoys designing and building modern, scalable, and high-performance web applications with a strong focus on user experience, clean architecture, and maintainable code."
    />
  );

  if (isLoading) {
    return (
      <Section
        id="about"
        spacing="xl"
        className="relative overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {header}

          <div className="mt-16">
            <AboutSkeleton />
          </div>
        </div>
      </Section>
    );
  }

  if (isError) {
    return (
      <Section
        id="about"
        spacing="xl"
        className="relative overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {header}

          <div className="mt-16">
            <AboutError
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

  if (!about) {
    return (
      <Section
        id="about"
        spacing="xl"
        className="relative overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {header}

          <div className="mt-16">
            <AboutEmpty />
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section
      id="about"
      spacing="xl"
      className="relative overflow-hidden"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,.07),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,.06),transparent_35%)]" />

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

        <div className="mt-20 grid gap-12 xl:grid-cols-[360px_minmax(0,1fr)]">
          {/* Left Side */}

          <AboutProfile
            about={about}
            className="xl:sticky xl:top-28 xl:self-start"
          />

          {/* Right Side */}

          <div className="flex flex-col gap-12">

                        <AboutContent
              about={about}
              className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl lg:p-10"
            />

            <AboutStats
              about={about}
            />

            <AboutContact
              about={about}
            />

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
                className="flex justify-end"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300 backdrop-blur-sm">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                  Updating...
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
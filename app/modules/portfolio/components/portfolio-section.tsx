"use client";

import { motion } from "motion/react";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

import { gridItems } from "@/app/modules/portfolio/data/grid-items";

/* -------------------------------------------------------------------------- */
/*                            Portfolio Section                               */
/* -------------------------------------------------------------------------- */

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* ------------------------------------------------------------------ */}
      {/* Background                                                         */}
      {/* ------------------------------------------------------------------ */}

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/5 blur-[120px]" />

        <div className="absolute left-0 top-1/2 h-80 w-80 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ------------------------------------------------------------------ */}
        {/* Section Header                                                     */}
        {/* ------------------------------------------------------------------ */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold tracking-wide text-primary backdrop-blur-sm">
            Portfolio Architecture
          </span>

          <h2
            id="portfolio-heading"
            className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            Built With Modern
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Full Stack Technologies
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
            This portfolio showcases a scalable three-tier architecture
            consisting of a secure Express.js REST API, a modern React
            administration dashboard, and a high-performance Next.js frontend
            built with the latest technologies and best development practices.
          </p>
        </motion.div>

        {/* ------------------------------------------------------------------ */}
        {/* Portfolio Grid                                                     */}
        {/* ------------------------------------------------------------------ */}

        <BentoGrid>
          {gridItems.map((item) => (
            <BentoGridItem
              key={item.id}
              className={item.className}
              badge={item.badge}
              title={item.title}
              description={item.description}
              technologies={item.technologies}
              img={item.img}
              imgClassName={item.imgClassName}
              titleClassName={item.titleClassName}
              spareImg={item.spareImg}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
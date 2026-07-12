// src/modules/about/components/about-content.tsx

"use client";

import Link from "next/link";

import { motion } from "motion/react";
import { ArrowRight, Download, Mail, MapPin, Phone } from "lucide-react";

import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Separator } from "@/src/components/ui/separator";

import { cn } from "@/src/shared/lib/utils";

import type { About } from "../types/about.types";

interface AboutContentProps {
  readonly about: About;
  readonly className?: string;
}

export function AboutContent({ about, className }: AboutContentProps) {
  const hasContact = about.email || about.phone || about.address;

  return (
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
        amount: 0.25,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className={cn("flex h-full flex-col", className)}
    >
      <Badge
        variant="secondary"
        className="w-fit border-cyan-500/20 bg-cyan-500/10 text-cyan-300"
      >
        About Me
      </Badge>

      <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl xl:text-5xl">
        {about.fullName}
      </h2>

      <p className="mt-3 text-lg font-semibold text-cyan-400">
        {about.designation}
      </p>

      <Separator className="my-8 bg-white/10" />

      <div className="space-y-6">
        <p className="whitespace-pre-line text-base leading-8 text-slate-300">
          {about.bio}
        </p>

        {hasContact && (
          <div className="grid gap-4 pt-2 sm:grid-cols-2">
            {about.email && (
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-cyan-400" />

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Email
                  </p>

                  <a
                    href={`mailto:${about.email}`}
                    className="text-sm text-slate-300 transition-colors hover:text-cyan-300"
                  >
                    {about.email}
                  </a>
                </div>
              </div>
            )}

            {about.phone && (
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-cyan-400" />

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Phone
                  </p>

                  <a
                    href={`tel:${about.phone}`}
                    className="text-sm text-slate-300 transition-colors hover:text-cyan-300"
                  >
                    {about.phone}
                  </a>
                </div>
              </div>
            )}

            {about.address && (
              <div className="flex items-start gap-3 sm:col-span-2">
                <MapPin className="mt-0.5 h-5 w-5 text-cyan-400" />

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Location
                  </p>

                  <p className="text-sm text-slate-300">{about.address}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        {about.resumeUrl && (
          <Button asChild size="lg">
            <Link
              href={about.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Link>
          </Button>
        )}

        <Button asChild size="lg" variant="outline">
          <Link href="#contact">
            Contact Me
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}

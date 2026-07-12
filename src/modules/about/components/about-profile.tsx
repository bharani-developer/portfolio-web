// src/modules/about/components/about-profile.tsx

"use client";

import Image from "next/image";

import { motion } from "motion/react";
import { BriefcaseBusiness, UserRound } from "lucide-react";

import { Avatar, AvatarFallback } from "@/src/components/ui/avatar";
import { Badge } from "@/src/components/ui/badge";
import { Card } from "@/src/components/ui/card";

import { cn } from "@/src/shared/lib/utils";

import type { About } from "../types/about.types";

interface AboutProfileProps {
  readonly about: About;
  readonly className?: string;
}

export function AboutProfile({ about, className }: AboutProfileProps) {
  const initials = about.fullName
    .split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.aside
      initial={{
        opacity: 0,
        x: -24,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className={cn(className)}
    >
      <Card
        className={cn(
          "group relative overflow-hidden",
          "border-white/10",
          "bg-slate-900/70",
          "backdrop-blur-xl",
          "shadow-2xl",
        )}
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.18),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_40%)]" />

        <div className="relative flex flex-col items-center p-8">
          {/* Profile Image */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-2xl" />

            {about.profileImage ? (
              <div className="relative h-52 w-52 overflow-hidden rounded-full border-4 border-cyan-500/20 shadow-xl">
                <Image
                  src={about.profileImage.url}
                  alt={about.fullName}
                  fill
                  priority
                  sizes="208px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ) : (
              <Avatar className="h-52 w-52 border-4 border-cyan-500/20">
                <AvatarFallback className="bg-slate-800 text-5xl font-bold text-cyan-300">
                  {initials || <UserRound className="h-20 w-20" />}
                </AvatarFallback>
              </Avatar>
            )}
          </div>

          {/* Name */}
          <h3 className="mt-8 text-center text-2xl font-bold text-white">
            {about.fullName}
          </h3>

          {/* Designation */}
          <p className="mt-2 text-center text-sm font-medium text-cyan-400">
            {about.designation}
          </p>

          {/* Experience */}
          {typeof about.yearsOfExperience === "number" &&
            about.yearsOfExperience > 0 && (
              <Badge
                variant="secondary"
                className="mt-6 flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-300"
              >
                <BriefcaseBusiness className="h-4 w-4" />
                {about.yearsOfExperience}+ Years Experience
              </Badge>
            )}
        </div>
      </Card>
    </motion.aside>
  );
}

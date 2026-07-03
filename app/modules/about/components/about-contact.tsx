// src/modules/about/components/about-contact.tsx

"use client";

import Link from "next/link";

import { motion } from "motion/react";
import {
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { cn } from "@/app/shared/lib/utils";

import type { About } from "../types/about.types";

interface AboutContactProps {
  readonly about: About;
  readonly className?: string;
}

interface ContactItem {
  label: string;
  value: string;
  href?: string;
  icon: React.ComponentType<{
    className?: string;
  }>;
}

export function AboutContact({
  about,
  className,
}: AboutContactProps) {
  const contacts: ContactItem[] = [];

  if (about.email) {
    contacts.push({
      label: "Email",
      value: about.email,
      href: `mailto:${about.email}`,
      icon: Mail,
    });
  }

  if (about.phone) {
    contacts.push({
      label: "Phone",
      value: about.phone,
      href: `tel:${about.phone}`,
      icon: Phone,
    });
  }

  if (about.address) {
    contacts.push({
      label: "Location",
      value: about.address,
      icon: MapPin,
    });
  }

  if (contacts.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="about-contact"
      className={cn(className)}
    >
      <h3
        id="about-contact"
        className="mb-6 text-xl font-semibold tracking-tight text-white"
      >
        Contact Information
      </h3>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {contacts.map((contact, index) => {
          const Icon = contact.icon;

          return (
            <motion.div
              key={contact.label}
              initial={{
                opacity: 0,
                y: 20,
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
                duration: 0.4,
                delay: index * 0.08,
              }}
            >
              <Card
                className={cn(
                  "group relative h-full overflow-hidden",
                  "border-white/10",
                  "bg-slate-900/70",
                  "backdrop-blur-xl",
                  "transition-all duration-300",
                  "hover:-translate-y-1",
                  "hover:border-cyan-500/30",
                  "hover:shadow-[0_20px_45px_rgba(6,182,212,.12)]",
                )}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,.08),transparent_55%)]" />

                <div className="relative flex h-full flex-col p-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
                        "border border-cyan-500/15",
                        "bg-cyan-500/10",
                        "text-cyan-400",
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                        {contact.label}
                      </p>

                      <p className="mt-1 break-words text-sm font-medium text-slate-200">
                        {contact.value}
                      </p>
                    </div>
                  </div>

                  {contact.href && (
                    <div className="mt-6">
                      <Button
                        asChild
                        variant="ghost"
                        className="h-auto px-0 text-cyan-400 hover:bg-transparent hover:text-cyan-300"
                      >
                        <Link
                          href={contact.href}
                          target={
                            contact.href.startsWith("mailto:")
                              ? undefined
                              : "_blank"
                          }
                          rel={
                            contact.href.startsWith("mailto:")
                              ? undefined
                              : "noopener noreferrer"
                          }
                        >
                          Open

                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
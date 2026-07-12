"use client";

import * as React from "react";

import Link from "next/link";

import { cn } from "@/src/shared/lib/utils";

interface MagicButtonProps {
  title: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  onClick?: () => void;
  className?: string;
}

export default function MagicButton({
  title,
  icon,
  position = "right",
  href,
  target,
  rel,
  onClick,
  className,
}: Readonly<MagicButtonProps>): React.JSX.Element {
  const content = (
    <>
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#7C3AED_50%,#06B6D4_100%)]" />

      <span
        className={cn(
          "relative inline-flex h-full w-full items-center justify-center gap-2",
          "rounded-xl bg-background/95 px-7",
          "text-sm font-semibold",
          "backdrop-blur-xl",
          "transition-all duration-300",
          "hover:bg-background",
        )}
      >
        {position === "left" && icon}

        {title}

        {position === "right" && icon}
      </span>
    </>
  );

  const sharedClasses = cn(
    "group relative inline-flex h-12 overflow-hidden rounded-xl p-[1px]",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-primary",
    "focus-visible:ring-offset-2",
    className,
  );

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={sharedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={sharedClasses}>
      {content}
    </button>
  );
}

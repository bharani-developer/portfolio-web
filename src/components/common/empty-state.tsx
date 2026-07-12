"use client";

import type { ComponentType, ReactNode } from "react";

import { Inbox } from "lucide-react";

import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/shared/lib/utils";

interface EmptyStateAction {
  label: string;
  onClick?: () => void;
  href?: string;
  icon?: ReactNode;
}

export interface EmptyStateProps {
  title: string;

  description?: string;

  icon?: ComponentType<{
    className?: string;
  }>;

  image?: ReactNode;

  action?: EmptyStateAction;

  secondaryAction?: EmptyStateAction;

  className?: string;

  children?: ReactNode;
}

export function EmptyState({
  title,
  description,
  icon: Icon = Inbox,
  image,
  action,
  secondaryAction,
  className,
  children,
}: EmptyStateProps) {
  return (
    <section
      className={cn(
        "flex w-full flex-col items-center justify-center rounded-3xl border border-border/60 bg-background px-6 py-16 text-center shadow-sm",
        className,
      )}
      aria-live="polite"
    >
      {image ? (
        <div className="mb-8">{image}</div>
      ) : (
        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border bg-muted/50">
          <Icon className="h-10 w-10 text-muted-foreground" />
        </div>
      )}

      <div className="mx-auto max-w-xl space-y-3">
        <h2 className="text-2xl font-bold tracking-tight">
          {title}
        </h2>

        {description && (
          <p className="text-sm leading-7 text-muted-foreground md:text-base">
            {description}
          </p>
        )}

        {children}
      </div>

      {(action || secondaryAction) && (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {action && (
            action.href ? (
              <Button asChild>
                <a href={action.href}>
                  {action.icon}
                  {action.label}
                </a>
              </Button>
            ) : (
              <Button onClick={action.onClick}>
                {action.icon}
                {action.label}
              </Button>
            )
          )}

          {secondaryAction && (
            secondaryAction.href ? (
              <Button
                variant="outline"
                asChild
              >
                <a href={secondaryAction.href}>
                  {secondaryAction.icon}
                  {secondaryAction.label}
                </a>
              </Button>
            ) : (
              <Button
                variant="outline"
                onClick={secondaryAction.onClick}
              >
                {secondaryAction.icon}
                {secondaryAction.label}
              </Button>
            )
          )}
        </div>
      )}
    </section>
  );
}
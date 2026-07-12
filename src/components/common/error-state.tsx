"use client";

import type { ComponentType, ReactNode } from "react";

import {
  AlertTriangle,
  ChevronDown,
  RefreshCw,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/src/components/ui/collapsible";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/src/components/ui/alert";
import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/shared/lib/utils";

interface ErrorStateAction {
  label: string;
  onClick?: () => void;
  href?: string;
  icon?: ReactNode;
}

export interface ErrorStateProps {
  title?: string;

  description?: string;

  icon?: ComponentType<{
    className?: string;
  }>;

  image?: ReactNode;

  error?: unknown;

  retry?: () => void;

  retryLabel?: string;

  action?: ErrorStateAction;

  secondaryAction?: ErrorStateAction;

  className?: string;

  children?: ReactNode;

  showDetails?: boolean;
}

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.stack ?? error.message;
  }

  if (typeof error === "string") {
    return error;
  }

  try {
    return JSON.stringify(error, null, 2);
  } catch {
    return "Unknown error";
  }
}

export function ErrorState({
  title = "Something went wrong",
  description = "An unexpected error occurred while loading this content.",
  icon: Icon = AlertTriangle,
  image,
  error,
  retry,
  retryLabel = "Try Again",
  action,
  secondaryAction,
  className,
  children,
  showDetails = process.env.NODE_ENV === "development",
}: ErrorStateProps) {
  const errorMessage =
    error && showDetails
      ? getErrorMessage(error)
      : null;

  return (
    <section
      role="alert"
      aria-live="assertive"
      className={cn(
        "flex w-full flex-col items-center justify-center rounded-3xl border border-destructive/20 bg-background px-6 py-16 text-center shadow-sm",
        className,
      )}
    >
      {image ? (
        <div className="mb-8">{image}</div>
      ) : (
        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-destructive/20 bg-destructive/5">
          <Icon className="h-10 w-10 text-destructive" />
        </div>
      )}

      <div className="mx-auto max-w-2xl space-y-3">
        <h2 className="text-2xl font-bold tracking-tight">
          {title}
        </h2>

        <p className="text-sm leading-7 text-muted-foreground md:text-base">
          {description}
        </p>

        {children}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {retry && (
          <Button onClick={retry}>
            <RefreshCw className="mr-2 h-4 w-4" />
            {retryLabel}
          </Button>
        )}

        {action &&
          (action.href ? (
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
          ))}

        {secondaryAction &&
          (secondaryAction.href ? (
            <Button variant="outline" asChild>
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
          ))}
      </div>

      {errorMessage && (
        <div className="mt-8 w-full max-w-3xl">
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button variant="ghost">
                <ChevronDown className="mr-2 h-4 w-4" />
                Error Details
              </Button>
            </CollapsibleTrigger>

            <CollapsibleContent className="mt-4">
              <Alert>
                <AlertTitle>Technical Details</AlertTitle>

                <AlertDescription>
                  <pre className="overflow-auto rounded-lg bg-muted p-4 text-left text-xs whitespace-pre-wrap break-all">
                    {errorMessage}
                  </pre>
                </AlertDescription>
              </Alert>
            </CollapsibleContent>
          </Collapsible>
        </div>
      )}
    </section>
  );
}
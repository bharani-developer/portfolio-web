// src/modules/experience/components/experience-error.tsx

"use client";

import * as React from "react";

import { motion } from "motion/react";

import { AlertTriangleIcon, RefreshCwIcon, SparklesIcon } from "lucide-react";

import { Button } from "@/src/components/ui/button";

import { cn } from "@/src/shared/lib/utils";

interface ExperienceErrorProps {
  readonly error?: Error | null;

  readonly onRetry?: () => void | Promise<void>;

  readonly className?: string;

  readonly title?: string;

  readonly description?: string;

  readonly showDetails?: boolean;
}

export function ExperienceError({
  error,

  onRetry,

  className,

  title = "Unable to Load Experience",

  description = "Something went wrong while loading professional experience. Please try again.",

  showDetails = process.env.NODE_ENV !== "production",
}: Readonly<ExperienceErrorProps>): React.JSX.Element {
  const [isRetrying, setIsRetrying] = React.useState(false);

  const handleRetry = React.useCallback(async () => {
    if (!onRetry) {
      return;
    }

    try {
      setIsRetrying(true);

      await onRetry();
    } finally {
      setIsRetrying(false);
    }
  }, [onRetry]);
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-3xl",
          "border border-destructive/20",
          "bg-card/70",
          "backdrop-blur-xl",
          "shadow-xl",
        )}
      >
        {/* Background */}

        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,.08),transparent_35%)]" />

        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,.02),transparent)]" />

        {/* Decorative Glow */}

        <motion.div
          aria-hidden
          initial={{
            y: 0,
          }}
          animate={{
            y: [-6, 6, -6],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
          }}
          className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-destructive/10 blur-3xl"
        />

        <motion.div
          aria-hidden
          initial={{
            y: 0,
          }}
          animate={{
            y: [-6, 6, -6],
          }}
          transition={{
            duration: 6,
            delay: 1.5,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
          }}
          className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl"
        />

        <div className="relative z-10 flex flex-col items-center px-8 py-16 text-center sm:px-12">
          {/* Error Icon */}

          <motion.div
            whileHover={{
              scale: 1.05,
              rotate: -6,
            }}
            transition={{
              duration: 0.25,
            }}
            className={cn(
              "relative",
              "flex h-24 w-24 items-center justify-center",
              "rounded-3xl",
              "border border-destructive/20",
              "bg-destructive/10",
              "shadow-lg",
            )}
          >
            <span className="absolute inset-0 rounded-3xl bg-destructive/10 blur-xl" />

            <AlertTriangleIcon className="relative h-10 w-10 text-destructive" />
          </motion.div>

          {/* Badge */}

          <div
            className={cn(
              "mt-8 inline-flex items-center gap-2",
              "rounded-full",
              "border border-destructive/20",
              "bg-destructive/10",
              "px-4 py-1.5",
              "text-xs font-semibold uppercase tracking-[0.18em]",
              "text-destructive",
            )}
          >
            <SparklesIcon className="h-4 w-4" />
            Experience Service Error
          </div>
          {/* Title */}

          <motion.h3
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.15,
              duration: 0.4,
            }}
            className={cn(
              "mt-8",
              "max-w-2xl",
              "text-balance",
              "text-3xl font-bold tracking-tight",
              "sm:text-4xl",
            )}
          >
            {title}
          </motion.h3>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.25,
              duration: 0.4,
            }}
            className={cn(
              "mt-5",
              "max-w-2xl",
              "text-pretty",
              "text-base leading-8",
              "text-muted-foreground",
            )}
          >
            {description}
          </motion.p>

          {/* Error Details */}

          {showDetails && error && (
            <motion.div
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.35,
                duration: 0.4,
              }}
              className={cn(
                "mt-8",
                "w-full max-w-2xl",
                "overflow-auto rounded-2xl",
                "border border-destructive/20",
                "bg-destructive/5",
                "p-5",
                "text-left",
              )}
            >
              <p className="mb-3 text-sm font-semibold text-destructive">
                Error Details
              </p>

              <pre
                className={cn(
                  "overflow-x-auto",
                  "whitespace-pre-wrap break-words",
                  "font-mono text-xs leading-6",
                  "text-muted-foreground",
                )}
              >
                {error.message}
              </pre>
            </motion.div>
          )}

          {/* Retry */}

          {onRetry && (
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
                delay: 0.45,
                duration: 0.4,
              }}
              className="mt-10"
            >
              <Button
                size="lg"
                onClick={() => {
                  void handleRetry();
                }}
                disabled={isRetrying}
                className="group min-w-[220px]"
              >
                <RefreshCwIcon
                  className={cn(
                    "mr-2 h-4 w-4 transition-transform",
                    isRetrying && "animate-spin",
                  )}
                />

                {isRetrying ? "Retrying..." : "Try Again"}
              </Button>
            </motion.div>
          )}
          {/* Footer */}

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.6,
              duration: 0.35,
            }}
            className={cn(
              "mt-8",
              "max-w-lg",
              "text-center",
              "text-sm leading-7",
              "text-muted-foreground",
            )}
          >
            If the issue persists, please refresh the page or try again later.
            You can also contact me directly if youd like to discuss a project
            or report the problem.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

ExperienceError.displayName = "ExperienceError";

export default React.memo(ExperienceError);

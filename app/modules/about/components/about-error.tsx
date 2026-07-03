"use client";

import { motion } from "motion/react";
import {
  AlertCircle,
  RefreshCw,
} from "lucide-react";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { cn } from "@/app/shared/lib/utils";

interface AboutErrorProps {
  readonly error: Error | null;
  readonly onRetry?: () => void;
  readonly className?: string;
}

export function AboutError({
  error,
  onRetry,
  className,
}: AboutErrorProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className={cn("mx-auto max-w-3xl", className)}
    >
      <Alert className="border-destructive/20 bg-card/70 backdrop-blur-xl">
        <AlertCircle className="h-5 w-5" />

        <AlertTitle>
          Unable to load the About section
        </AlertTitle>

        <AlertDescription className="mt-2 space-y-6">
          <p className="text-sm leading-6 text-muted-foreground">
            Something went wrong while loading this section.
            Please try again. If the problem persists,
            it may be a temporary server issue.
          </p>

          {error && (
            <Collapsible>
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                >
                  View technical details
                </Button>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <pre className="mt-3 overflow-x-auto rounded-lg border bg-muted/40 p-4 text-xs leading-6 text-muted-foreground">
                  {error.message}
                </pre>
              </CollapsibleContent>
            </Collapsible>
          )}

          {onRetry && (
            <Button
              onClick={onRetry}
              className="gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Try Again
            </Button>
          )}
        </AlertDescription>
      </Alert>
    </motion.div>
  );
}
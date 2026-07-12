// src/providers/app-provider.tsx

"use client";

import * as React from "react";

import { QueryProvider } from "@/src/providers/query-provider";
import { SmoothScrollProvider } from "@/src/providers/smooth-scroll-provider";
import { ThemeProvider } from "@/src/providers/theme-provider";

interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({
  children,
}: Readonly<AppProviderProps>): React.JSX.Element {
  return (
    <ThemeProvider>
      <QueryProvider>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}

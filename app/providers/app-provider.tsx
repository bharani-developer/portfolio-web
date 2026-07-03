// src/providers/app-provider.tsx

"use client";

import * as React from "react";

import { QueryProvider } from "@/app/providers/query-provider";
import { SmoothScrollProvider } from "@/app/providers/smooth-scroll-provider";
import { ThemeProvider } from "@/app/providers/theme-provider";

interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({
  children,
}: Readonly<AppProviderProps>): React.JSX.Element {
  return (
    <ThemeProvider>
      <QueryProvider>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}

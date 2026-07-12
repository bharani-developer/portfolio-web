// src/providers/query-provider.tsx

"use client";

import * as React from "react";

import { QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { queryClient } from "@/src/shared/lib/query-client";

interface QueryProviderProps {
  children: React.ReactNode;
}

export function QueryProvider({
  children,
}: Readonly<QueryProviderProps>): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      {children}

      {process.env.NODE_ENV === "development" ? (
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-left"
        />
      ) : null}
    </QueryClientProvider>
  );
}

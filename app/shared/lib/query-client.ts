// src/shared/lib/query-client.ts

import {
  MutationCache,
  QueryCache,
  QueryClient,
} from "@tanstack/react-query";

function getErrorMessage(
  error: unknown,
): string {
  if (error instanceof Error) {
    return error.message;
  }

  return "Something went wrong.";
}

export function createQueryClient(): QueryClient {
  return new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => {
        console.error(
          "Query Error:",
          getErrorMessage(error),
        );
      },
    }),

    mutationCache: new MutationCache({
      onError: (error) => {
        console.error(
          "Mutation Error:",
          getErrorMessage(error),
        );
      },
    }),

    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,

        gcTime: 1000 * 60 * 30,

        retry: (
          failureCount,
          error,
        ): boolean => {
          const message =
            error instanceof Error
              ? error.message.toLowerCase()
              : "";

          if (
            message.includes("401") ||
            message.includes("403") ||
            message.includes("404")
          ) {
            return false;
          }

          return failureCount < 2;
        },

        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
        refetchOnMount: false,
      },

      mutations: {
        retry: false,
      },
    },
  });
}

export const queryClient =
  createQueryClient();
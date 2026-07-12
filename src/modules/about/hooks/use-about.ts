// src\modules\about\hooks\use-about.ts

"use client";

import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/src/shared/constants/query-keys";

import { aboutService } from "@/src/modules/about";

import type {
  About,
  UseAboutReturn,
} from "@/src/modules/about";

export function useAbout(): UseAboutReturn {
  const query = useQuery<About, Error>({
    queryKey: QUERY_KEYS.about,

    queryFn: () => aboutService.getAbout(),

    staleTime: 1000 * 60 * 10, // 10 minutes

    gcTime: 1000 * 60 * 30, // 30 minutes
  });

  return {
    about: query.data ?? null,

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () => {
      return query.refetch();
    },
  };
}
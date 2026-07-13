"use client";

import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/src/shared/constants/query-keys";

import { experienceService } from "@/src/modules/experience/services/experience.service";

import type {
  Experience,
  UseExperienceReturn,
  UseExperiencesReturn,
} from "@/src/modules/experience/types/experience.types";

const STALE_TIME = 1000 * 60 * 10; // 10 minutes

const GC_TIME = 1000 * 60 * 30; // 30 minutes

/**
 * Shared React Query options
 */
const QUERY_OPTIONS = {
  staleTime: STALE_TIME,

  gcTime: GC_TIME,

  refetchOnWindowFocus: false,

  refetchOnReconnect: true,

  refetchOnMount: false,

  retry: 2,
} as const;

/**
 * Shared mapper for list hooks
 */
function createExperiencesReturn(
  query: ReturnType<
    typeof useQuery<Experience[], Error>
  >,
): UseExperiencesReturn {
  return {
    experiences: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Shared mapper for single experience hooks
 */
function createExperienceReturn(
  query: ReturnType<
    typeof useQuery<Experience, Error>
  >,
): UseExperienceReturn {
  return {
    experience: query.data ?? null,

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}
/**
 * Get all experiences
 */
export function useExperiences(): UseExperiencesReturn {
  const query = useQuery<
    Experience[],
    Error
  >({
    queryKey: [
      ...QUERY_KEYS.experience,
      "all",
    ],

    queryFn: () =>
      experienceService.getExperiences(),

    ...QUERY_OPTIONS,
  });

  return createExperiencesReturn(
    query,
  );
}

/**
 * Get active experiences
 */
export function useActiveExperiences(): UseExperiencesReturn {
  const query = useQuery<
    Experience[],
    Error
  >({
    queryKey: [
      ...QUERY_KEYS.experience,
      "active",
    ],

    queryFn: () =>
      experienceService.getActiveExperiences(),

    ...QUERY_OPTIONS,
  });

  return createExperiencesReturn(
    query,
  );
}

/**
 * Get current experiences
 */
export function useCurrentExperiences(): UseExperiencesReturn {
  const query = useQuery<
    Experience[],
    Error
  >({
    queryKey: [
      ...QUERY_KEYS.experience,
      "current",
    ],

    queryFn: () =>
      experienceService.getCurrentExperiences(),

    ...QUERY_OPTIONS,
  });

  return createExperiencesReturn(
    query,
  );
}
/**
 * Get homepage experiences
 */
export function useHomepageExperiences(): UseExperiencesReturn {
  const query = useQuery<
    Experience[],
    Error
  >({
    queryKey: [
      ...QUERY_KEYS.experience,
      "homepage",
    ],

    queryFn: () =>
      experienceService.getHomepageExperiences(),

    ...QUERY_OPTIONS,
  });

  return createExperiencesReturn(
    query,
  );
}

/**
 * Get featured experiences
 */
export function useFeaturedExperiences(): UseExperiencesReturn {
  const query = useQuery<
    Experience[],
    Error
  >({
    queryKey: [
      ...QUERY_KEYS.experience,
      "featured",
    ],

    queryFn: () =>
      experienceService.getFeaturedExperiences(),

    ...QUERY_OPTIONS,
  });

  return createExperiencesReturn(
    query,
  );
}
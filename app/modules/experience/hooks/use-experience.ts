// src\modules\experience\hooks\use-experience.ts

"use client";

import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/app/shared/constants/query-keys";

import { experienceService } from "@/app/modules//experience/services/experience.service";

import type {
  ExperienceQueryParams,
  UseExperienceReturn,
  UseExperiencesReturn,
} from "@/app/modules//experience/types/experience.types";

const STALE_TIME = 1000 * 60 * 10; // 10 minutes
const GC_TIME = 1000 * 60 * 30; // 30 minutes

/**
 * Get experiences list
 */
export function useExperiences(
  params?: ExperienceQueryParams,
): UseExperiencesReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.experience,
      params,
    ],

    queryFn: async () => {
      const response =
        await experienceService.getExperiences(
          params,
        );

      return response.data;
    },

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

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
 * Get active experiences
 */
export function useActiveExperiences(): UseExperiencesReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.experience,
      "active",
    ],

    queryFn: () =>
      experienceService.getActiveExperiences(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

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
 * Get current experiences
 */
export function useCurrentExperiences(): UseExperiencesReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.experience,
      "current",
    ],

    queryFn: () =>
      experienceService.getCurrentExperiences(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

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
 * Get featured experiences
 */
export function useFeaturedExperiences(
  limit = 6,
): UseExperiencesReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.experience,
      "featured",
      limit,
    ],

    queryFn: () =>
      experienceService.getFeaturedExperiences(
        limit,
      ),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

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
 * Get homepage experiences
 */
export function useHomepageExperiences(): UseExperiencesReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.experience,
      "homepage",
    ],

    queryFn: () =>
      experienceService.getHomepageExperiences(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

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
 * Get experience by id
 */
export function useExperience(
  id: string,
): UseExperienceReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.experience,
      id,
    ],

    queryFn: () =>
      experienceService.getExperience(id),

    enabled: Boolean(id),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

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
 * Get experience by slug
 */
export function useExperienceBySlug(
  slug: string,
): UseExperienceReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.experience,
      "slug",
      slug,
    ],

    queryFn: () =>
      experienceService.getExperienceBySlug(
        slug,
      ),

    enabled: Boolean(slug),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

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
 * Get experiences by company
 */
export function useExperiencesByCompany(
  company: string,
): UseExperiencesReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.experience,
      "company",
      company,
    ],

    queryFn: () =>
      experienceService.getExperiencesByCompany(
        company,
      ),

    enabled: Boolean(company),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

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
 * Get experiences by technology
 */
export function useExperiencesByTechnology(
  technology: string,
): UseExperiencesReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.experience,
      "technology",
      technology,
    ],

    queryFn: () =>
      experienceService.getExperiencesByTechnology(
        technology,
      ),

    enabled: Boolean(technology),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

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
 * Get total experiences count
 */
export function useExperiencesCount() {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.experience,
      "count",
    ],

    queryFn: () =>
      experienceService.getExperiencesCount(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });
}

/**
 * Get current positions count
 */
export function useCurrentPositionsCount() {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.experience,
      "current-count",
    ],

    queryFn: () =>
      experienceService.getCurrentPositionsCount(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });
}
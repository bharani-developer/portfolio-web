// src\modules\services\hooks\use-services.ts

"use client";

import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/src/shared/constants/query-keys";

import { servicesService } from "@/src/modules/services/services/services.service";

import type {
  ServicesQueryParams,
  UseServiceReturn,
  UseServicesReturn,
} from "@/src/modules/services/types/services.types";

const STALE_TIME = 1000 * 60 * 10; // 10 minutes
const GC_TIME = 1000 * 60 * 30; // 30 minutes

/**
 * Get services list
 */
export function useServices(
  params?: ServicesQueryParams,
): UseServicesReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.services,
      params,
    ],

    queryFn: async () => {
      const response =
        await servicesService.getServices(
          params,
        );

      return response.data;
    },

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    services: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get active services
 */
export function useActiveServices(): UseServicesReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.services,
      "active",
    ],

    queryFn: () =>
      servicesService.getActiveServices(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    services: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get featured services
 */
export function useFeaturedServices(
  limit = 6,
): UseServicesReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.services,
      "featured",
      limit,
    ],

    queryFn: () =>
      servicesService.getFeaturedServices(
        limit,
      ),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    services: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get homepage services
 */
export function useHomepageServices(): UseServicesReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.services,
      "homepage",
    ],

    queryFn: () =>
      servicesService.getHomepageServices(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    services: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get single service by id
 */
export function useService(
  id: string,
): UseServiceReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.services,
      id,
    ],

    queryFn: () =>
      servicesService.getService(id),

    enabled: Boolean(id),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    service: query.data ?? null,

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get service by slug
 */
export function useServiceBySlug(
  slug: string,
): UseServiceReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.services,
      "slug",
      slug,
    ],

    queryFn: () =>
      servicesService.getServiceBySlug(
        slug,
      ),

    enabled: Boolean(slug),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    service: query.data ?? null,

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get services count
 */
export function useServicesCount() {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.services,
      "count",
    ],

    queryFn: () =>
      servicesService.getServicesCount(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });
}
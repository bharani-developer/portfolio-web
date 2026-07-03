// src\modules\testimonials\hooks\use-testimonials.ts

"use client";

import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/app/shared/constants/query-keys";

import { testimonialsService } from "@/app/modules//testimonials/services/testimonials.service";

import type {
  ClientType,
  TestimonialsQueryParams,
  UseAverageRatingReturn,
  UseTestimonialReturn,
  UseTestimonialsReturn,
} from "@/app/modules//testimonials/types/testimonials.types";

const STALE_TIME = 1000 * 60 * 10; // 10 minutes
const GC_TIME = 1000 * 60 * 30; // 30 minutes

/**
 * Get testimonials list
 */
export function useTestimonials(
  params?: TestimonialsQueryParams,
): UseTestimonialsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.testimonials,
      params,
    ],

    queryFn: async () => {
      const response =
        await testimonialsService.getTestimonials(
          params,
        );

      return response.data;
    },

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    testimonials: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get active testimonials
 */
export function useActiveTestimonials(): UseTestimonialsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.testimonials,
      "active",
    ],

    queryFn: () =>
      testimonialsService.getActiveTestimonials(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    testimonials: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get featured testimonials
 */
export function useFeaturedTestimonials(): UseTestimonialsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.testimonials,
      "featured",
    ],

    queryFn: () =>
      testimonialsService.getFeaturedTestimonials(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    testimonials: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get homepage testimonials
 */
export function useHomepageTestimonials(): UseTestimonialsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.testimonials,
      "homepage",
    ],

    queryFn: () =>
      testimonialsService.getHomepageTestimonials(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    testimonials: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get portfolio testimonials
 */
export function usePortfolioTestimonials(): UseTestimonialsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.testimonials,
      "portfolio",
    ],

    queryFn: () =>
      testimonialsService.getPortfolioTestimonials(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    testimonials: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get testimonial by id
 */
export function useTestimonial(
  id: string,
): UseTestimonialReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.testimonials,
      id,
    ],

    queryFn: () =>
      testimonialsService.getTestimonial(
        id,
      ),

    enabled: Boolean(id),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    testimonial: query.data ?? null,

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get testimonials by rating
 */
export function useTestimonialsByRating(
  rating: number,
): UseTestimonialsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.testimonials,
      "rating",
      rating,
    ],

    queryFn: () =>
      testimonialsService.getTestimonialsByRating(
        rating,
      ),

    enabled:
      rating >= 1 &&
      rating <= 5,

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    testimonials: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get testimonials by client type
 */
export function useTestimonialsByClientType(
  clientType: ClientType,
): UseTestimonialsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.testimonials,
      "client-type",
      clientType,
    ],

    queryFn: () =>
      testimonialsService.getTestimonialsByClientType(
        clientType,
      ),

    enabled: Boolean(clientType),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    testimonials: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get testimonials by project
 */
export function useTestimonialsByProject(
  projectName: string,
): UseTestimonialsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.testimonials,
      "project",
      projectName,
    ],

    queryFn: () =>
      testimonialsService.getTestimonialsByProject(
        projectName,
      ),

    enabled: Boolean(
      projectName.trim(),
    ),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    testimonials: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get average rating
 */
export function useAverageRating(): UseAverageRatingReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.testimonials,
      "average-rating",
    ],

    queryFn: () =>
      testimonialsService.getAverageRating(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    averageRating:
      query.data?.averageRating ?? 0,

    totalTestimonials:
      query.data?.totalTestimonials ?? 0,

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Total testimonials count
 */
export function useTestimonialsCount() {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.testimonials,
      "count",
    ],

    queryFn: () =>
      testimonialsService.getTestimonialsCount(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });
}

/**
 * Active testimonials count
 */
export function useActiveTestimonialsCount() {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.testimonials,
      "active-count",
    ],

    queryFn: () =>
      testimonialsService.getActiveTestimonialsCount(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });
}

/**
 * Featured testimonials count
 */
export function useFeaturedTestimonialsCount() {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.testimonials,
      "featured-count",
    ],

    queryFn: () =>
      testimonialsService.getFeaturedTestimonialsCount(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });
}

/**
 * Average rating value
 */
export function useAverageRatingValue() {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.testimonials,
      "average-rating-value",
    ],

    queryFn: () =>
      testimonialsService.getAverageRatingValue(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });
}

/**
 * Five-star testimonials count
 */
export function useFiveStarTestimonialsCount() {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.testimonials,
      "five-star-count",
    ],

    queryFn: () =>
      testimonialsService.getFiveStarTestimonialsCount(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });
}
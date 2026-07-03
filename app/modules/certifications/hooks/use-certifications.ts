// src\modules\certifications\hooks\use-certifications.ts
"use client";

import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/app/shared/constants/query-keys";

import { certificationsService } from "@/app/modules//certifications/services/certifications.service";

import type {
  CertificationsQueryParams,
  UseCertificationReturn,
  UseCertificationsReturn,
} from "@/app/modules//certifications/types/certifications.types";

const STALE_TIME = 1000 * 60 * 10; // 10 minutes
const GC_TIME = 1000 * 60 * 30; // 30 minutes

/**
 * Get certifications list
 */
export function useCertifications(
  params?: CertificationsQueryParams,
): UseCertificationsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.certifications,
      params,
    ],

    queryFn: async () => {
      const response =
        await certificationsService.getCertifications(
          params,
        );

      return response.data;
    },

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    certifications:
      query.data ?? [],

    isLoading: query.isLoading,

    isFetching:
      query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get active certifications
 */
export function useActiveCertifications(): UseCertificationsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.certifications,
      "active",
    ],

    queryFn: () =>
      certificationsService.getActiveCertifications(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    certifications:
      query.data ?? [],

    isLoading: query.isLoading,

    isFetching:
      query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get valid certifications
 */
export function useValidCertifications(): UseCertificationsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.certifications,
      "valid",
    ],

    queryFn: () =>
      certificationsService.getValidCertifications(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    certifications:
      query.data ?? [],

    isLoading: query.isLoading,

    isFetching:
      query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get expired certifications
 */
export function useExpiredCertifications(): UseCertificationsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.certifications,
      "expired",
    ],

    queryFn: () =>
      certificationsService.getExpiredCertifications(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    certifications:
      query.data ?? [],

    isLoading: query.isLoading,

    isFetching:
      query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get featured certifications
 */
export function useFeaturedCertifications(
  limit = 6,
): UseCertificationsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.certifications,
      "featured",
      limit,
    ],

    queryFn: () =>
      certificationsService.getFeaturedCertifications(
        limit,
      ),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    certifications:
      query.data ?? [],

    isLoading: query.isLoading,

    isFetching:
      query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get homepage certifications
 */
export function useHomepageCertifications(): UseCertificationsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.certifications,
      "homepage",
    ],

    queryFn: () =>
      certificationsService.getHomepageCertifications(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    certifications:
      query.data ?? [],

    isLoading: query.isLoading,

    isFetching:
      query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get certification by id
 */
export function useCertification(
  id: string,
): UseCertificationReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.certifications,
      id,
    ],

    queryFn: () =>
      certificationsService.getCertification(
        id,
      ),

    enabled: Boolean(id),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    certification:
      query.data ?? null,

    isLoading: query.isLoading,

    isFetching:
      query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get certification by slug
 */
export function useCertificationBySlug(
  slug: string,
): UseCertificationReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.certifications,
      "slug",
      slug,
    ],

    queryFn: () =>
      certificationsService.getCertificationBySlug(
        slug,
      ),

    enabled: Boolean(slug),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    certification:
      query.data ?? null,

    isLoading: query.isLoading,

    isFetching:
      query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get certifications by issuer
 */
export function useCertificationsByIssuer(
  issuer: string,
): UseCertificationsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.certifications,
      "issuer",
      issuer,
    ],

    queryFn: () =>
      certificationsService.getCertificationsByIssuer(
        issuer,
      ),

    enabled: Boolean(
      issuer.trim(),
    ),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    certifications:
      query.data ?? [],

    isLoading: query.isLoading,

    isFetching:
      query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get certifications by skill
 */
export function useCertificationsBySkill(
  skill: string,
): UseCertificationsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.certifications,
      "skill",
      skill,
    ],

    queryFn: () =>
      certificationsService.getCertificationsBySkill(
        skill,
      ),

    enabled: Boolean(
      skill.trim(),
    ),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    certifications:
      query.data ?? [],

    isLoading: query.isLoading,

    isFetching:
      query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Total certifications count
 */
export function useCertificationsCount() {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.certifications,
      "count",
    ],

    queryFn: () =>
      certificationsService.getCertificationsCount(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });
}

/**
 * Active certifications count
 */
export function useActiveCertificationsCount() {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.certifications,
      "active-count",
    ],

    queryFn: () =>
      certificationsService.getActiveCertificationsCount(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });
}

/**
 * Valid certifications count
 */
export function useValidCertificationsCount() {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.certifications,
      "valid-count",
    ],

    queryFn: () =>
      certificationsService.getValidCertificationsCount(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });
}

/**
 * Expired certifications count
 */
export function useExpiredCertificationsCount() {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.certifications,
      "expired-count",
    ],

    queryFn: () =>
      certificationsService.getExpiredCertificationsCount(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });
}
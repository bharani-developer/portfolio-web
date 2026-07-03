// src\modules\projects\hooks\use-projects.ts

"use client";

import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/app/shared/constants/query-keys";

import { projectsService } from "@/app/modules//projects/services/projects.service";

import type {
  ProjectsQueryParams,
  ProjectStatus,
  UseProjectReturn,
  UseProjectsReturn,
} from "@/app/modules//projects/types/projects.types";

const STALE_TIME = 1000 * 60 * 10; // 10 minutes
const GC_TIME = 1000 * 60 * 30; // 30 minutes

/**
 * Get projects list
 */
export function useProjects(
  params?: ProjectsQueryParams,
): UseProjectsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.projects,
      params,
    ],

    queryFn: async () => {
      const response =
        await projectsService.getProjects(
          params,
        );

      return response.data;
    },

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    projects: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get active projects
 */
export function useActiveProjects(): UseProjectsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.projects,
      "active",
    ],

    queryFn: () =>
      projectsService.getActiveProjects(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    projects: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get featured projects
 */
export function useFeaturedProjects(): UseProjectsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.projects,
      "featured",
    ],

    queryFn: () =>
      projectsService.getFeaturedProjects(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    projects: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get homepage projects
 */
export function useHomepageProjects(): UseProjectsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.projects,
      "homepage",
    ],

    queryFn: () =>
      projectsService.getHomepageProjects(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    projects: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get portfolio projects
 */
export function usePortfolioProjects(): UseProjectsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.projects,
      "portfolio",
    ],

    queryFn: () =>
      projectsService.getPortfolioProjects(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    projects: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get project by id
 */
export function useProject(
  id: string,
): UseProjectReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.projects,
      id,
    ],

    queryFn: () =>
      projectsService.getProject(id),

    enabled: Boolean(id),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    project: query.data ?? null,

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get project by slug
 */
export function useProjectBySlug(
  slug: string,
): UseProjectReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.projects,
      "slug",
      slug,
    ],

    queryFn: () =>
      projectsService.getProjectBySlug(
        slug,
      ),

    enabled: Boolean(slug),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    project: query.data ?? null,

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get projects by category
 */
export function useProjectsByCategory(
  category: string,
): UseProjectsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.projects,
      "category",
      category,
    ],

    queryFn: () =>
      projectsService.getProjectsByCategory(
        category,
      ),

    enabled: Boolean(
      category.trim(),
    ),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    projects: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get projects by technology
 */
export function useProjectsByTechnology(
  technology: string,
): UseProjectsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.projects,
      "technology",
      technology,
    ],

    queryFn: () =>
      projectsService.getProjectsByTechnology(
        technology,
      ),

    enabled: Boolean(
      technology.trim(),
    ),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    projects: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get projects by status
 */
export function useProjectsByStatus(
  status: ProjectStatus,
): UseProjectsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.projects,
      "status",
      status,
    ],

    queryFn: () =>
      projectsService.getProjectsByStatus(
        status,
      ),

    enabled: Boolean(status),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    projects: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Total projects count
 */
export function useProjectsCount() {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.projects,
      "count",
    ],

    queryFn: () =>
      projectsService.getProjectsCount(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });
}

/**
 * Active projects count
 */
export function useActiveProjectsCount() {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.projects,
      "active-count",
    ],

    queryFn: () =>
      projectsService.getActiveProjectsCount(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });
}

/**
 * Featured projects count
 */
export function useFeaturedProjectsCount() {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.projects,
      "featured-count",
    ],

    queryFn: () =>
      projectsService.getFeaturedProjectsCount(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });
}

/**
 * Completed projects count
 */
export function useCompletedProjectsCount() {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.projects,
      "completed-count",
    ],

    queryFn: () =>
      projectsService.getCompletedProjectsCount(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });
}
// src\modules\blog\hooks\use-blog.ts

"use client";

import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/app/shared/constants/query-keys";

import { blogService } from "@/app/modules//blog/services/blog.service";

import type {
  BlogStatus,
  BlogsQueryParams,
  UseBlogReturn,
  UseBlogsReturn,
} from "@/app/modules//blog/types/blog.types";

const STALE_TIME = 1000 * 60 * 10; // 10 minutes
const GC_TIME = 1000 * 60 * 30; // 30 minutes

/**
 * Get blogs list
 */
export function useBlogs(
  params?: BlogsQueryParams,
): UseBlogsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.blogs,
      params,
    ],

    queryFn: async () => {
      const response =
        await blogService.getBlogs(
          params,
        );

      return response.data;
    },

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    blogs: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get active blogs
 */
export function useActiveBlogs(): UseBlogsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.blogs,
      "active",
    ],

    queryFn: () =>
      blogService.getActiveBlogs(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    blogs: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get published blogs
 */
export function usePublishedBlogs(): UseBlogsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.blogs,
      "published",
    ],

    queryFn: () =>
      blogService.getPublishedBlogs(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    blogs: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get featured blogs
 */
export function useFeaturedBlogs(): UseBlogsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.blogs,
      "featured",
    ],

    queryFn: () =>
      blogService.getFeaturedBlogs(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    blogs: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get popular blogs
 */
export function usePopularBlogs(): UseBlogsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.blogs,
      "popular",
    ],

    queryFn: () =>
      blogService.getPopularBlogs(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    blogs: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get homepage blogs
 */
export function useHomepageBlogs(): UseBlogsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.blogs,
      "homepage",
    ],

    queryFn: () =>
      blogService.getHomepageBlogs(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    blogs: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get latest blogs
 */
export function useLatestBlogs(
  limit = 6,
): UseBlogsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.blogs,
      "latest",
      limit,
    ],

    queryFn: () =>
      blogService.getLatestBlogs(
        limit,
      ),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    blogs: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get blog listing blogs
 */
export function useBlogListingBlogs(): UseBlogsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.blogs,
      "listing",
    ],

    queryFn: () =>
      blogService.getBlogListingBlogs(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    blogs: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get blog by id
 */
export function useBlog(
  id: string,
): UseBlogReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.blogs,
      id,
    ],

    queryFn: () =>
      blogService.getBlog(id),

    enabled: Boolean(id),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    blog: query.data ?? null,

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get blog by slug
 */
export function useBlogBySlug(
  slug: string,
): UseBlogReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.blogs,
      "slug",
      slug,
    ],

    queryFn: () =>
      blogService.getBlogBySlug(
        slug,
      ),

    enabled: Boolean(slug),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    blog: query.data ?? null,

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get blogs by category
 */
export function useBlogsByCategory(
  category: string,
): UseBlogsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.blogs,
      "category",
      category,
    ],

    queryFn: () =>
      blogService.getBlogsByCategory(
        category,
      ),

    enabled: Boolean(
      category.trim(),
    ),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    blogs: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get blogs by tag
 */
export function useBlogsByTag(
  tag: string,
): UseBlogsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.blogs,
      "tag",
      tag,
    ],

    queryFn: () =>
      blogService.getBlogsByTag(
        tag,
      ),

    enabled: Boolean(
      tag.trim(),
    ),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    blogs: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get blogs by status
 */
export function useBlogsByStatus(
  status: BlogStatus,
): UseBlogsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.blogs,
      "status",
      status,
    ],

    queryFn: () =>
      blogService.getBlogsByStatus(
        status,
      ),

    enabled: Boolean(status),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    blogs: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Related blogs
 */
export function useRelatedBlogs(
  category: string,
  currentBlogId: string,
  limit = 3,
): UseBlogsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.blogs,
      "related",
      category,
      currentBlogId,
      limit,
    ],

    queryFn: () =>
      blogService.getRelatedBlogs(
        category,
        currentBlogId,
        limit,
      ),

    enabled:
      Boolean(category) &&
      Boolean(currentBlogId),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    blogs: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Total blogs count
 */
export function useBlogsCount() {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.blogs,
      "count",
    ],

    queryFn: () =>
      blogService.getBlogsCount(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });
}

/**
 * Active blogs count
 */
export function useActiveBlogsCount() {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.blogs,
      "active-count",
    ],

    queryFn: () =>
      blogService.getActiveBlogsCount(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });
}

/**
 * Published blogs count
 */
export function usePublishedBlogsCount() {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.blogs,
      "published-count",
    ],

    queryFn: () =>
      blogService.getPublishedBlogsCount(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });
}

/**
 * Featured blogs count
 */
export function useFeaturedBlogsCount() {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.blogs,
      "featured-count",
    ],

    queryFn: () =>
      blogService.getFeaturedBlogsCount(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });
}

/**
 * Total views count
 */
export function useTotalViewsCount() {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.blogs,
      "views-count",
    ],

    queryFn: () =>
      blogService.getTotalViewsCount(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });
}
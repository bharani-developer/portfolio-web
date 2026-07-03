// src\modules\blog\types\blog.types.ts

import type { ApiResponse } from "@/app/shared/types/api";
import type { BaseEntity } from "@/app/shared/types/common";
import type { Image } from "@/app/shared/types/image";
import type { PaginationMeta } from "@/app/shared/types/pagination";

/**
 * Blog status
 * Must match backend enum exactly.
 */
export type BlogStatus =
  | "Draft"
  | "Published"
  | "Archived";

/**
 * Blog entity
 * Matches backend Blog schema.
 */
export interface Blog
  extends BaseEntity {
  title: string;

  slug: string;

  excerpt: string;

  content: string;

  featuredImage?: Image;

  category: string;

  tags: string[];

  author: string;

  status: BlogStatus;

  readTime: number;

  viewCount: number;

  isFeatured: boolean;

  isPublished: boolean;

  publishedAt?: string | null;

  seoTitle?: string;

  seoDescription?: string;

  seoKeywords: string[];

  canonicalUrl?: string;

  sortOrder: number;

  isActive: boolean;
}

/**
 * Create blog request
 */
export interface CreateBlogRequest {
  title: string;

  excerpt: string;

  content: string;

  featuredImage?: Image;

  category: string;

  tags?: string[];

  author: string;

  status?: BlogStatus;

  readTime?: number;

  isFeatured?: boolean;

  seoTitle?: string;

  seoDescription?: string;

  seoKeywords?: string[];

  canonicalUrl?: string;

  sortOrder?: number;

  isActive?: boolean;
}

/**
 * Update blog request
 */
export interface UpdateBlogRequest {
  title?: string;

  excerpt?: string;

  content?: string;

  featuredImage?: Image;

  category?: string;

  tags?: string[];

  author?: string;

  status?: BlogStatus;

  readTime?: number;

  viewCount?: number;

  isFeatured?: boolean;

  isPublished?: boolean;

  publishedAt?: string | null;

  seoTitle?: string;

  seoDescription?: string;

  seoKeywords?: string[];

  canonicalUrl?: string;

  sortOrder?: number;

  isActive?: boolean;
}

/**
 * Blogs query params
 */
export interface BlogsQueryParams {
  searchTerm?: string;

  page?: number;

  limit?: number;

  sortBy?: string;

  sortOrder?: "asc" | "desc";

  isActive?: boolean;

  isFeatured?: boolean;

  isPublished?: boolean;

  category?: string;

  tag?: string;

  author?: string;

  status?: BlogStatus;
}

/**
 * Single blog response
 */
export type BlogResponse =
  ApiResponse<Blog>;

/**
 * Delete blog response
 */
export type DeleteBlogResponse =
  ApiResponse<Blog>;

/**
 * Blogs list response
 */
export interface BlogsResponse {
  success: boolean;

  message: string;

  meta: PaginationMeta;

  data: Blog[];
}

/**
 * Blogs state
 */
export interface BlogsState {
  blogs: Blog[];

  isLoading: boolean;

  isError: boolean;

  error: string | null;
}

/**
 * Blog card props
 */
export interface BlogCardProps {
  blog: Blog;
}

/**
 * Blogs section props
 */
export interface BlogsSectionProps {
  blogs: Blog[];
}

/**
 * Featured blog
 */
export interface FeaturedBlog {
  id: string;

  title: string;

  slug: string;

  excerpt: string;

  featuredImage?: Image;

  category: string;

  author: string;

  readTime: number;

  publishedAt?: string | null;
}

/**
 * Blog statistics
 */
export interface BlogStats {
  totalBlogs: number;

  activeBlogs: number;

  publishedBlogs: number;

  featuredBlogs: number;

  totalViews: number;
}

/**
 * Category group
 */
export interface BlogCategoryGroup {
  category: string;

  blogs: Blog[];
}

/**
 * Tag group
 */
export interface BlogTagGroup {
  tag: string;

  blogs: Blog[];
}

/**
 * Popular blog
 */
export interface PopularBlog {
  id: string;

  title: string;

  slug: string;

  excerpt: string;

  featuredImage?: Image;

  viewCount: number;

  readTime: number;

  publishedAt?: string | null;
}

/**
 * Hook return
 */
export interface UseBlogsReturn {
  blogs: Blog[];

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}

/**
 * Single blog hook return
 */
export interface UseBlogReturn {
  blog: Blog | null;

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}

/**
 * Featured blogs hook return
 */
export interface UseFeaturedBlogsReturn {
  blogs: Blog[];

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}

/**
 * Popular blogs hook return
 */
export interface UsePopularBlogsReturn {
  blogs: Blog[];

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}

/**
 * Published blogs hook return
 */
export interface UsePublishedBlogsReturn {
  blogs: Blog[];

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}

/**
 * Active blogs hook return
 */
export interface UseActiveBlogsReturn {
  blogs: Blog[];

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}
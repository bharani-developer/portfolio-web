// src\modules\blog\services\blog.service.ts

import { API_ENDPOINTS } from "@/src/shared/constants/api";

import {
  get,
  patch,
} from "@/src/shared/services/http-client";

import type {
  Blog,
  BlogResponse,
  BlogsQueryParams,
  BlogsResponse,
  BlogStatus,
} from "@/src/modules/blog/types/blog.types";

class BlogService {
  /**
   * Build query string
   */
  private buildQueryString(
    params?: BlogsQueryParams,
  ): string {
    if (!params) {
      return "";
    }

    const searchParams =
      new URLSearchParams();

    if (params.searchTerm) {
      searchParams.set(
        "searchTerm",
        params.searchTerm,
      );
    }

    if (params.page) {
      searchParams.set(
        "page",
        params.page.toString(),
      );
    }

    if (params.limit) {
      searchParams.set(
        "limit",
        params.limit.toString(),
      );
    }

    if (params.sortBy) {
      searchParams.set(
        "sortBy",
        params.sortBy,
      );
    }

    if (params.sortOrder) {
      searchParams.set(
        "sortOrder",
        params.sortOrder,
      );
    }

    if (
      typeof params.isActive ===
      "boolean"
    ) {
      searchParams.set(
        "isActive",
        String(params.isActive),
      );
    }

    if (
      typeof params.isFeatured ===
      "boolean"
    ) {
      searchParams.set(
        "isFeatured",
        String(params.isFeatured),
      );
    }

    if (
      typeof params.isPublished ===
      "boolean"
    ) {
      searchParams.set(
        "isPublished",
        String(params.isPublished),
      );
    }

    if (params.category) {
      searchParams.set(
        "category",
        params.category,
      );
    }

    if (params.tag) {
      searchParams.set(
        "tag",
        params.tag,
      );
    }

    if (params.author) {
      searchParams.set(
        "author",
        params.author,
      );
    }

    if (params.status) {
      searchParams.set(
        "status",
        params.status,
      );
    }

    const queryString =
      searchParams.toString();

    return queryString
      ? `?${queryString}`
      : "";
  }

  /**
   * Get all blogs
   */
  async getBlogs(
    params?: BlogsQueryParams,
  ): Promise<BlogsResponse> {
    const queryString =
      this.buildQueryString(params);

    return get<BlogsResponse>(
      `${API_ENDPOINTS.BLOGS}${queryString}`,
    );
  }

  /**
   * Get active blogs
   */
  async getActiveBlogs(): Promise<
    Blog[]
  > {
    const response =
      await get<BlogsResponse>(
        `${API_ENDPOINTS.BLOGS}/active`,
      );

    return response.data;
  }

  /**
   * Get published blogs
   */
  async getPublishedBlogs(): Promise<
    Blog[]
  > {
    const response =
      await get<BlogsResponse>(
        `${API_ENDPOINTS.BLOGS}/published`,
      );

    return response.data;
  }

  /**
   * Get featured blogs
   */
  async getFeaturedBlogs(): Promise<
    Blog[]
  > {
    const response =
      await get<BlogsResponse>(
        `${API_ENDPOINTS.BLOGS}/featured`,
      );

    return response.data;
  }

  /**
   * Get popular blogs
   */
  async getPopularBlogs(): Promise<
    Blog[]
  > {
    const response =
      await get<BlogsResponse>(
        `${API_ENDPOINTS.BLOGS}/popular`,
      );

    return response.data;
  }

  /**
   * Get blog by id
   */
  async getBlog(
    id: string,
  ): Promise<Blog> {
    const response =
      await get<BlogResponse>(
        `${API_ENDPOINTS.BLOGS}/${id}`,
      );

    return response.data;
  }

  /**
   * Get blog by slug
   */
  async getBlogBySlug(
    slug: string,
  ): Promise<Blog> {
    const response =
      await get<BlogResponse>(
        `${API_ENDPOINTS.BLOGS}/slug/${slug}`,
      );

    return response.data;
  }

  /**
   * Increment blog view count
   */
  async incrementViewCount(
    slug: string,
  ): Promise<Blog> {
    const response =
      await patch<BlogResponse>(
        `${API_ENDPOINTS.BLOGS}/slug/${slug}/view`,
        {},
      );

    return response.data;
  }

  /**
   * Get blogs by category
   */
  async getBlogsByCategory(
    category: string,
  ): Promise<Blog[]> {
    const response =
      await get<BlogsResponse>(
        `${API_ENDPOINTS.BLOGS}/category/${encodeURIComponent(
          category,
        )}`,
      );

    return response.data;
  }

  /**
   * Get blogs by tag
   */
  async getBlogsByTag(
    tag: string,
  ): Promise<Blog[]> {
    const response =
      await get<BlogsResponse>(
        `${API_ENDPOINTS.BLOGS}/tag/${encodeURIComponent(
          tag,
        )}`,
      );

    return response.data;
  }

  /**
   * Get blogs by status
   */
  async getBlogsByStatus(
    status: BlogStatus,
  ): Promise<Blog[]> {
    const response =
      await get<BlogsResponse>(
        `${API_ENDPOINTS.BLOGS}/status/${encodeURIComponent(
          status,
        )}`,
      );

    return response.data;
  }

  /**
   * Homepage blogs
   */
  async getHomepageBlogs(): Promise<
    Blog[]
  > {
    const response =
      await this.getBlogs({
        page: 1,
        limit: 6,
        isActive: true,
        isPublished: true,
        isFeatured: true,
        sortBy: "publishedAt",
        sortOrder: "desc",
      });

    return response.data;
  }

  /**
   * Latest blogs
   */
  async getLatestBlogs(
    limit = 6,
  ): Promise<Blog[]> {
    const response =
      await this.getBlogs({
        page: 1,
        limit,
        isActive: true,
        isPublished: true,
        sortBy: "publishedAt",
        sortOrder: "desc",
      });

    return response.data;
  }

  /**
   * Blog listing page
   */
  async getBlogListingBlogs(): Promise<
    Blog[]
  > {
    const response =
      await this.getBlogs({
        isActive: true,
        isPublished: true,
        sortBy: "publishedAt",
        sortOrder: "desc",
      });

    return response.data;
  }

  /**
   * Total blogs count
   */
  async getBlogsCount(): Promise<number> {
    const response =
      await this.getBlogs({
        page: 1,
        limit: 1,
      });

    return response.meta.total;
  }

  /**
   * Active blogs count
   */
  async getActiveBlogsCount(): Promise<number> {
    const blogs =
      await this.getActiveBlogs();

    return blogs.length;
  }

  /**
   * Published blogs count
   */
  async getPublishedBlogsCount(): Promise<number> {
    const blogs =
      await this.getPublishedBlogs();

    return blogs.length;
  }

  /**
   * Featured blogs count
   */
  async getFeaturedBlogsCount(): Promise<number> {
    const blogs =
      await this.getFeaturedBlogs();

    return blogs.length;
  }

  /**
   * Total blog views
   */
  async getTotalViewsCount(): Promise<number> {
    const response =
      await this.getBlogs({
        page: 1,
        limit: 1000,
      });

    return response.data.reduce(
      (
        total,
        blog,
      ) => total + blog.viewCount,
      0,
    );
  }

  /**
   * Get related blogs
   */
  async getRelatedBlogs(
    category: string,
    currentBlogId: string,
    limit = 3,
  ): Promise<Blog[]> {
    const blogs =
      await this.getBlogsByCategory(
        category,
      );

    return blogs
      .filter(
        (blog) =>
          blog._id !== currentBlogId,
      )
      .slice(0, limit);
  }
}

export const blogService =
  new BlogService();
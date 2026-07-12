// src\modules\testimonials\services\testimonials.service.ts

import { API_ENDPOINTS } from "@/src/shared/constants/api";

import { get } from "@/src/shared/services/http-client";

import type {
  AverageRatingResponse,
  ClientType,
  Testimonial,
  TestimonialResponse,
  TestimonialsQueryParams,
  TestimonialsResponse,
} from "@/src/modules/testimonials/types/testimonials.types";

class TestimonialsService {
  /**
   * Build query string
   */
  private buildQueryString(
    params?: TestimonialsQueryParams,
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
      typeof params.rating ===
      "number"
    ) {
      searchParams.set(
        "rating",
        String(params.rating),
      );
    }

    if (params.clientType) {
      searchParams.set(
        "clientType",
        params.clientType,
      );
    }

    if (params.projectName) {
      searchParams.set(
        "projectName",
        params.projectName,
      );
    }

    const queryString =
      searchParams.toString();

    return queryString
      ? `?${queryString}`
      : "";
  }

  /**
   * Get all testimonials
   */
  async getTestimonials(
    params?: TestimonialsQueryParams,
  ): Promise<TestimonialsResponse> {
    const queryString =
      this.buildQueryString(params);

    return get<TestimonialsResponse>(
      `${API_ENDPOINTS.TESTIMONIALS}${queryString}`,
    );
  }

  /**
   * Get active testimonials
   */
  async getActiveTestimonials(): Promise<
    Testimonial[]
  > {
    const response =
      await get<TestimonialsResponse>(
        `${API_ENDPOINTS.TESTIMONIALS}/active`,
      );

    return response.data;
  }

  /**
   * Get featured testimonials
   */
  async getFeaturedTestimonials(): Promise<
    Testimonial[]
  > {
    const response =
      await get<TestimonialsResponse>(
        `${API_ENDPOINTS.TESTIMONIALS}/featured`,
      );

    return response.data;
  }

  /**
   * Get testimonial by id
   */
  async getTestimonial(
    id: string,
  ): Promise<Testimonial> {
    const response =
      await get<TestimonialResponse>(
        `${API_ENDPOINTS.TESTIMONIALS}/${id}`,
      );

    return response.data;
  }

  /**
   * Get testimonials by rating
   */
  async getTestimonialsByRating(
    rating: number,
  ): Promise<Testimonial[]> {
    const response =
      await get<TestimonialsResponse>(
        `${API_ENDPOINTS.TESTIMONIALS}/rating/${rating}`,
      );

    return response.data;
  }

  /**
   * Get testimonials by client type
   */
  async getTestimonialsByClientType(
    clientType: ClientType,
  ): Promise<Testimonial[]> {
    const response =
      await get<TestimonialsResponse>(
        `${API_ENDPOINTS.TESTIMONIALS}/client-type/${encodeURIComponent(
          clientType,
        )}`,
      );

    return response.data;
  }

  /**
   * Get testimonials by project name
   */
  async getTestimonialsByProject(
    projectName: string,
  ): Promise<Testimonial[]> {
    const response =
      await get<TestimonialsResponse>(
        `${API_ENDPOINTS.TESTIMONIALS}/project/${encodeURIComponent(
          projectName,
        )}`,
      );

    return response.data;
  }

  /**
   * Get average rating
   */
  async getAverageRating(): Promise<AverageRatingResponse> {
    return get<AverageRatingResponse>(
      `${API_ENDPOINTS.TESTIMONIALS}/average-rating`,
    );
  }

  /**
   * Homepage testimonials
   */
  async getHomepageTestimonials(): Promise<
    Testimonial[]
  > {
    const response =
      await this.getTestimonials({
        page: 1,
        limit: 6,
        isActive: true,
        isFeatured: true,
        sortBy: "sortOrder",
        sortOrder: "asc",
      });

    return response.data;
  }

  /**
   * Portfolio testimonials
   */
  async getPortfolioTestimonials(): Promise<
    Testimonial[]
  > {
    const response =
      await this.getTestimonials({
        isActive: true,
        sortBy: "sortOrder",
        sortOrder: "asc",
      });

    return response.data;
  }

  /**
   * Total testimonials count
   */
  async getTestimonialsCount(): Promise<number> {
    const response =
      await this.getTestimonials({
        page: 1,
        limit: 1,
      });

    return response.meta.total;
  }

  /**
   * Active testimonials count
   */
  async getActiveTestimonialsCount(): Promise<number> {
    const testimonials =
      await this.getActiveTestimonials();

    return testimonials.length;
  }

  /**
   * Featured testimonials count
   */
  async getFeaturedTestimonialsCount(): Promise<number> {
    const testimonials =
      await this.getFeaturedTestimonials();

    return testimonials.length;
  }

  /**
   * Average rating value
   */
  async getAverageRatingValue(): Promise<number> {
    const response =
      await this.getAverageRating();

    return response.averageRating;
  }

  /**
   * Five-star testimonials count
   */
  async getFiveStarTestimonialsCount(): Promise<number> {
    const testimonials =
      await this.getTestimonialsByRating(
        5,
      );

    return testimonials.length;
  }
}

export const testimonialsService =
  new TestimonialsService();
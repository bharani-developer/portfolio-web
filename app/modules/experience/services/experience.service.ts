// src\modules\experience\services\experience.service.ts

import { API_ENDPOINTS } from "@/app/shared/constants/api";

import { get } from "@/app/shared/services/http-client";

import type {
  Experience,
  ExperienceQueryParams,
  ExperienceResponse,
  ExperiencesResponse,
} from "@/app/modules//experience/types/experience.types";

class ExperienceService {
  /**
   * Build query string
   */
  private buildQueryString(
    params?: ExperienceQueryParams,
  ): string {
    if (!params) {
      return "";
    }

    const searchParams = new URLSearchParams();

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

    if (params.sort) {
      searchParams.set(
        "sort",
        params.sort,
      );
    }

    if (params.fields) {
      searchParams.set(
        "fields",
        params.fields,
      );
    }

    if (
      typeof params.isActive === "boolean"
    ) {
      searchParams.set(
        "isActive",
        String(params.isActive),
      );
    }

    if (params.company) {
      searchParams.set(
        "company",
        params.company,
      );
    }

    if (params.technology) {
      searchParams.set(
        "technology",
        params.technology,
      );
    }

    if (params.employmentType) {
      searchParams.set(
        "employmentType",
        params.employmentType,
      );
    }

    if (params.workMode) {
      searchParams.set(
        "workMode",
        params.workMode,
      );
    }

    if (
      typeof params.isCurrent ===
      "boolean"
    ) {
      searchParams.set(
        "isCurrent",
        String(params.isCurrent),
      );
    }

    const queryString =
      searchParams.toString();

    return queryString
      ? `?${queryString}`
      : "";
  }

  /**
   * Get all experiences
   */
  async getExperiences(
    params?: ExperienceQueryParams,
  ): Promise<ExperiencesResponse> {
    const queryString =
      this.buildQueryString(params);

    return get<ExperiencesResponse>(
      `${API_ENDPOINTS.EXPERIENCE}${queryString}`,
    );
  }

  /**
   * Get active experiences
   */
  async getActiveExperiences(): Promise<
    Experience[]
  > {
    const response =
      await get<ExperiencesResponse>(
        `${API_ENDPOINTS.EXPERIENCE}/active`,
      );

    return response.data;
  }

  /**
   * Get current experiences
   */
  async getCurrentExperiences(): Promise<
    Experience[]
  > {
    const response =
      await get<ExperiencesResponse>(
        `${API_ENDPOINTS.EXPERIENCE}/current`,
      );

    return response.data;
  }

  /**
   * Get experience by id
   */
  async getExperience(
    id: string,
  ): Promise<Experience> {
    const response =
      await get<ExperienceResponse>(
        `${API_ENDPOINTS.EXPERIENCE}/${id}`,
      );

    return response.data;
  }

  /**
   * Get experience by slug
   */
  async getExperienceBySlug(
    slug: string,
  ): Promise<Experience> {
    const response =
      await get<ExperienceResponse>(
        `${API_ENDPOINTS.EXPERIENCE}/slug/${slug}`,
      );

    return response.data;
  }

  /**
   * Get experiences by company
   */
  async getExperiencesByCompany(
    company: string,
  ): Promise<Experience[]> {
    const response =
      await get<ExperiencesResponse>(
        `${API_ENDPOINTS.EXPERIENCE}/company/${encodeURIComponent(
          company,
        )}`,
      );

    return response.data;
  }

  /**
   * Get experiences by technology
   */
  async getExperiencesByTechnology(
    technology: string,
  ): Promise<Experience[]> {
    const response =
      await get<ExperiencesResponse>(
        `${API_ENDPOINTS.EXPERIENCE}/technology/${encodeURIComponent(
          technology,
        )}`,
      );

    return response.data;
  }

  /**
   * Homepage timeline
   */
  async getHomepageExperiences(): Promise<
    Experience[]
  > {
    const response =
      await this.getExperiences({
        page: 1,
        limit: 4,
        sort: "-startDate,sortOrder",
        isActive: true,
      });

    return response.data;
  }

  /**
   * Featured experiences
   */
  async getFeaturedExperiences(
    limit = 6,
  ): Promise<Experience[]> {
    const response =
      await this.getExperiences({
        page: 1,
        limit,
        sort: "-startDate,sortOrder",
        isActive: true,
      });

    return response.data;
  }

  /**
   * Total experience count
   */
  async getExperiencesCount(): Promise<number> {
    const response =
      await this.getExperiences({
        page: 1,
        limit: 1,
      });

    return response.meta.total;
  }

  /**
   * Current positions count
   */
  async getCurrentPositionsCount(): Promise<number> {
    const experiences =
      await this.getCurrentExperiences();

    return experiences.length;
  }
}

export const experienceService =
  new ExperienceService();
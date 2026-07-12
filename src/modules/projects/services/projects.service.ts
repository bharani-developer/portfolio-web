// src\modules\projects\services\projects.service.ts

import { API_ENDPOINTS } from "@/src/shared/constants/api";

import { get } from "@/src/shared/services/http-client";

import type {
  Project,
  ProjectResponse,
  ProjectsQueryParams,
  ProjectsResponse,
  ProjectStatus,
} from "@/src/modules/projects/types/projects.types";

class ProjectsService {
  /**
   * Build query string
   */
  private buildQueryString(
    params?: ProjectsQueryParams,
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
      typeof params.featured ===
      "boolean"
    ) {
      searchParams.set(
        "featured",
        String(params.featured),
      );
    }

    if (params.category) {
      searchParams.set(
        "category",
        params.category,
      );
    }

    if (params.technology) {
      searchParams.set(
        "technology",
        params.technology,
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
   * Get all projects
   */
  async getProjects(
    params?: ProjectsQueryParams,
  ): Promise<ProjectsResponse> {
    const queryString =
      this.buildQueryString(params);

    return get<ProjectsResponse>(
      `${API_ENDPOINTS.PROJECTS}${queryString}`,
    );
  }

  /**
   * Get active projects
   */
  async getActiveProjects(): Promise<
    Project[]
  > {
    const response =
      await get<ProjectsResponse>(
        `${API_ENDPOINTS.PROJECTS}/active`,
      );

    return response.data;
  }

  /**
   * Get featured projects
   */
  async getFeaturedProjects(): Promise<
    Project[]
  > {
    const response =
      await get<ProjectsResponse>(
        `${API_ENDPOINTS.PROJECTS}/featured`,
      );

    return response.data;
  }

  /**
   * Get project by id
   */
  async getProject(
    id: string,
  ): Promise<Project> {
    const response =
      await get<ProjectResponse>(
        `${API_ENDPOINTS.PROJECTS}/${id}`,
      );

    return response.data;
  }

  /**
   * Get project by slug
   */
  async getProjectBySlug(
    slug: string,
  ): Promise<Project> {
    const response =
      await get<ProjectResponse>(
        `${API_ENDPOINTS.PROJECTS}/slug/${slug}`,
      );

    return response.data;
  }

  /**
   * Get projects by category
   */
  async getProjectsByCategory(
    category: string,
  ): Promise<Project[]> {
    const response =
      await get<ProjectsResponse>(
        `${API_ENDPOINTS.PROJECTS}/category/${encodeURIComponent(
          category,
        )}`,
      );

    return response.data;
  }

  /**
   * Get projects by technology
   */
  async getProjectsByTechnology(
    technology: string,
  ): Promise<Project[]> {
    const response =
      await get<ProjectsResponse>(
        `${API_ENDPOINTS.PROJECTS}/technology/${encodeURIComponent(
          technology,
        )}`,
      );

    return response.data;
  }

  /**
   * Get projects by status
   */
  async getProjectsByStatus(
    status: ProjectStatus,
  ): Promise<Project[]> {
    const response =
      await get<ProjectsResponse>(
        `${API_ENDPOINTS.PROJECTS}/status/${encodeURIComponent(
          status,
        )}`,
      );

    return response.data;
  }

  /**
   * Homepage projects
   */
  async getHomepageProjects(): Promise<
    Project[]
  > {
    const response =
      await this.getProjects({
        page: 1,
        limit: 6,
        featured: true,
        isActive: true,
        sortBy: "sortOrder",
        sortOrder: "asc",
      });

    return response.data;
  }

  /**
   * Portfolio projects
   */
  async getPortfolioProjects(): Promise<
    Project[]
  > {
    const response =
      await this.getProjects({
        isActive: true,
        sortBy: "sortOrder",
        sortOrder: "asc",
      });

    return response.data;
  }

  /**
   * Total projects count
   */
  async getProjectsCount(): Promise<number> {
    const response =
      await this.getProjects({
        page: 1,
        limit: 1,
      });

    return response.meta.total;
  }

  /**
   * Active projects count
   */
  async getActiveProjectsCount(): Promise<number> {
    const projects =
      await this.getActiveProjects();

    return projects.length;
  }

  /**
   * Featured projects count
   */
  async getFeaturedProjectsCount(): Promise<number> {
    const projects =
      await this.getFeaturedProjects();

    return projects.length;
  }

  /**
   * Completed projects count
   */
  async getCompletedProjectsCount(): Promise<number> {
    const projects =
      await this.getProjectsByStatus(
        "Completed",
      );

    return projects.length;
  }
}

export const projectsService =
  new ProjectsService();
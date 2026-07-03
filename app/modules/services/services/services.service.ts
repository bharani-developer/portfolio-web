// src\modules\services\services\services.service.ts

import { API_ENDPOINTS } from "@/app/shared/constants/api";
import { get } from "@/app/shared/services/http-client";

import type {
  Service,
  ServiceResponse,
  ServicesQueryParams,
  ServicesResponse,
} from "@/app/modules//services/types/services.types";

class ServicesService {
  /**
   * Build query string
   */
  private buildQueryString(
    params?: ServicesQueryParams,
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
      searchParams.set("sort", params.sort);
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

    const queryString =
      searchParams.toString();

    return queryString
      ? `?${queryString}`
      : "";
  }

  /**
   * Get all services
   */
  async getServices(
    params?: ServicesQueryParams,
  ): Promise<ServicesResponse> {
    const queryString =
      this.buildQueryString(params);

    return get<ServicesResponse>(
      `${API_ENDPOINTS.SERVICES}${queryString}`,
    );
  }

  /**
   * Get active services
   */
  async getActiveServices(): Promise<
    Service[]
  > {
    const response =
      await this.getServices({
        isActive: true,
        sort: "sortOrder",
      });

    return response.data;
  }

  /**
   * Get featured services
   */
  async getFeaturedServices(
    limit = 6,
  ): Promise<Service[]> {
    const response =
      await this.getServices({
        page: 1,
        limit,
        sort: "sortOrder",
        isActive: true,
      });

    return response.data;
  }

  /**
   * Get service by id
   */
  async getService(
    id: string,
  ): Promise<Service> {
    const response =
      await get<ServiceResponse>(
        `${API_ENDPOINTS.SERVICES}/${id}`,
      );

    return response.data;
  }

  /**
   * Get service by slug
   */
  async getServiceBySlug(
    slug: string,
  ): Promise<Service | null> {
    const response =
      await this.getServices({
        searchTerm: slug,
        limit: 100,
      });

    const service =
      response.data.find(
        (item) => item.slug === slug,
      ) ?? null;

    return service;
  }

  /**
   * Get homepage services
   */
  async getHomepageServices(): Promise<
    Service[]
  > {
    return this.getFeaturedServices(3);
  }

  /**
   * Get total services count
   */
  async getServicesCount(): Promise<number> {
    const response =
      await this.getServices({
        page: 1,
        limit: 1,
      });

    return response.meta.total;
  }
}

export const servicesService =
  new ServicesService();
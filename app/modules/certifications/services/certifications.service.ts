// src\modules\certifications\services\certifications.service.ts

import { API_ENDPOINTS } from "@/app/shared/constants/api";

import { get } from "@/app/shared/services/http-client";

import type {
  Certification,
  CertificationResponse,
  CertificationsQueryParams,
  CertificationsResponse,
} from "@/app/modules//certifications/types/certifications.types";

class CertificationsService {
  /**
   * Build query string
   */
  private buildQueryString(
    params?: CertificationsQueryParams,
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

    if (params.issuer) {
      searchParams.set(
        "issuer",
        params.issuer,
      );
    }

    if (params.skill) {
      searchParams.set(
        "skill",
        params.skill,
      );
    }

    const queryString =
      searchParams.toString();

    return queryString
      ? `?${queryString}`
      : "";
  }

  /**
   * Get all certifications
   */
  async getCertifications(
    params?: CertificationsQueryParams,
  ): Promise<CertificationsResponse> {
    const queryString =
      this.buildQueryString(params);

    return get<CertificationsResponse>(
      `${API_ENDPOINTS.CERTIFICATIONS}${queryString}`,
    );
  }

  /**
   * Get active certifications
   */
  async getActiveCertifications(): Promise<
    Certification[]
  > {
    const response =
      await get<CertificationsResponse>(
        `${API_ENDPOINTS.CERTIFICATIONS}/active`,
      );

    return response.data;
  }

  /**
   * Get valid certifications
   */
  async getValidCertifications(): Promise<
    Certification[]
  > {
    const response =
      await get<CertificationsResponse>(
        `${API_ENDPOINTS.CERTIFICATIONS}/valid`,
      );

    return response.data;
  }

  /**
   * Get expired certifications
   */
  async getExpiredCertifications(): Promise<
    Certification[]
  > {
    const response =
      await get<CertificationsResponse>(
        `${API_ENDPOINTS.CERTIFICATIONS}/expired`,
      );

    return response.data;
  }

  /**
   * Get certification by id
   */
  async getCertification(
    id: string,
  ): Promise<Certification> {
    const response =
      await get<CertificationResponse>(
        `${API_ENDPOINTS.CERTIFICATIONS}/${id}`,
      );

    return response.data;
  }

  /**
   * Get certification by slug
   */
  async getCertificationBySlug(
    slug: string,
  ): Promise<Certification> {
    const response =
      await get<CertificationResponse>(
        `${API_ENDPOINTS.CERTIFICATIONS}/slug/${slug}`,
      );

    return response.data;
  }

  /**
   * Get certifications by issuer
   */
  async getCertificationsByIssuer(
    issuer: string,
  ): Promise<Certification[]> {
    const response =
      await get<CertificationsResponse>(
        `${API_ENDPOINTS.CERTIFICATIONS}/issuer/${encodeURIComponent(
          issuer,
        )}`,
      );

    return response.data;
  }

  /**
   * Get certifications by skill
   */
  async getCertificationsBySkill(
    skill: string,
  ): Promise<Certification[]> {
    const response =
      await get<CertificationsResponse>(
        `${API_ENDPOINTS.CERTIFICATIONS}/skill/${encodeURIComponent(
          skill,
        )}`,
      );

    return response.data;
  }

  /**
   * Homepage certifications
   */
  async getHomepageCertifications(): Promise<
    Certification[]
  > {
    const response =
      await this.getCertifications({
        page: 1,
        limit: 6,
        sortBy: "sortOrder",
        sortOrder: "asc",
        isActive: true,
      });

    return response.data;
  }

  /**
   * Featured certifications
   */
  async getFeaturedCertifications(
    limit = 6,
  ): Promise<Certification[]> {
    const response =
      await this.getCertifications({
        page: 1,
        limit,
        sortBy: "sortOrder",
        sortOrder: "asc",
        isActive: true,
      });

    return response.data;
  }

  /**
   * Total certifications count
   */
  async getCertificationsCount(): Promise<number> {
    const response =
      await this.getCertifications({
        page: 1,
        limit: 1,
      });

    return response.meta.total;
  }

  /**
   * Active certifications count
   */
  async getActiveCertificationsCount(): Promise<number> {
    const certifications =
      await this.getActiveCertifications();

    return certifications.length;
  }

  /**
   * Valid certifications count
   */
  async getValidCertificationsCount(): Promise<number> {
    const certifications =
      await this.getValidCertifications();

    return certifications.length;
  }

  /**
   * Expired certifications count
   */
  async getExpiredCertificationsCount(): Promise<number> {
    const certifications =
      await this.getExpiredCertifications();

    return certifications.length;
  }
}

export const certificationsService =
  new CertificationsService();
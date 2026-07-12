// src\modules\experience\services\experience.service.ts

import { API_ENDPOINTS } from "@/src/shared/constants/api";

import { get } from "@/src/shared/services/http-client";

import type {
  Experience,

  ExperiencesResponse,
} from "@/src/modules/experience/types/experience.types";

class ExperienceService {
  /**
   * Build query string
   */
  /**
 * Get all experiences
 */
async getExperiences(): Promise<Experience[]> {
  const response =
    await get<ExperiencesResponse>(
      API_ENDPOINTS.EXPERIENCE,
    );

  return response.data;
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
 * Homepage experiences
 */
async getHomepageExperiences(): Promise<
  Experience[]
> {
  return this.getActiveExperiences();
}

/**
 * Featured experiences
 */
async getFeaturedExperiences(): Promise<
  Experience[]
> {
  return this.getActiveExperiences();
}
}

export const experienceService =
  new ExperienceService();
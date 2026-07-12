// src\modules\about\services\about.service.ts

import { API_ENDPOINTS } from "@/src/shared/constants/api";

import { get } from "@/src/shared/services/http-client";

import type {
  About,
  AboutResponse,
} from "@/src/modules/about/types/about.types";

class AboutService {
  /**
   * Get active about section
   */
  async getAbout(): Promise<About> {
    const response =
      await get<AboutResponse>(
        API_ENDPOINTS.ABOUT,
      );

    return response.data;
  }
}

export const aboutService =
  new AboutService();
// src\modules\about\services\about.service.ts

import { API_ENDPOINTS } from "@/app/shared/constants/api";

import { get } from "@/app/shared/services/http-client";

import type {
  About,
  AboutResponse,
} from "@/app/modules/about/types/about.types";

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
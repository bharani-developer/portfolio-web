// src/modules/hero/services/hero.service.ts

import { API_ENDPOINTS } from "@/src/shared/constants/api";

import { get } from "@/src/shared/services/http-client";

import type {
  Hero,
  HeroResponse,
} from "@/src/modules/hero/types/hero.types";

class HeroService {
  /**
   * Get active hero section
   */
  async getHero(): Promise<Hero> {
    const response = await get<HeroResponse>(
      API_ENDPOINTS.HERO,
    );

    return response.data;
  }
}

export const heroService = new HeroService();
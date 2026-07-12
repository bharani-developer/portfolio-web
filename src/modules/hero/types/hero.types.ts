// src/modules/hero/types/hero.types.ts

import type { ApiResponse } from "@/src/shared/types/api";
import type { BaseEntity } from "@/src/shared/types/common";
import type { Image } from "@/src/shared/types/image";

export interface Hero extends BaseEntity {
  title: string;
  subtitle: string;
  description: string;

  profileImage?: Image;

  resumeUrl?: string;

  ctaButtonText?: string;
  ctaButtonLink?: string;

  technologies: string[];

  isActive: boolean;
}

export interface HeroSectionProps {
  hero: Hero;
}

export type HeroResponse = ApiResponse<Hero>;

export interface HeroState {
  hero: Hero | null;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}
// src/modules/about/types/about.types.ts

import type { ApiResponse } from "@/src/shared/types/api";
import type { BaseEntity } from "@/src/shared/types/common";
import type { Image } from "@/src/shared/types/image";

/**
 * About statistics item.
 */
export interface AboutStat {
  label: string;

  value: string;
}

/**
 * About entity.
 * Matches the backend About schema.
 */
export interface About extends BaseEntity {
  /**
   * Primary profile image.
   */
  profileImage?: Image;

  /**
   * About gallery images.
   */
  images: Image[];

  /**
   * Full name.
   */
  fullName: string;

  /**
   * Professional designation.
   */
  designation: string;

  /**
   * Biography.
   */
  bio: string;

  /**
   * Contact email.
   */
  email?: string;

  /**
   * Contact phone number.
   */
  phone?: string;

  /**
   * Address or location.
   */
  address?: string;

  /**
   * Resume download URL.
   */
  resumeUrl?: string;

  /**
   * Years of professional experience.
   */
  yearsOfExperience?: number;

  /**
   * Statistics shown in the About section.
   */
  stats: AboutStat[];

  /**
   * Active status.
   */
  isActive: boolean;
}

/**
 * Create About request.
 */
export interface CreateAboutRequest {
  profileImage?: Image;

  images: Image[];

  fullName: string;

  designation: string;

  bio: string;

  email?: string;

  phone?: string;

  address?: string;

  resumeUrl?: string;

  yearsOfExperience?: number;

  stats?: AboutStat[];

  isActive: boolean;
}

/**
 * Update About request.
 */
export interface UpdateAboutRequest {
  profileImage?: Image;

  images?: Image[];

  fullName?: string;

  designation?: string;

  bio?: string;

  email?: string;

  phone?: string;

  address?: string;

  resumeUrl?: string;

  yearsOfExperience?: number;

  stats?: AboutStat[];

  isActive?: boolean;
}

/**
 * About API response.
 */
export type AboutResponse = ApiResponse<About>;

/**
 * Delete About API response.
 */
export type DeleteAboutResponse = ApiResponse<null>;

/**
 * Local About state.
 */
export interface AboutState {
  about: About | null;

  isLoading: boolean;

  isError: boolean;

  error: string | null;
}

/**
 * About statistics card.
 */
export interface AboutCardItem {
  title: string;

  value: string;
}

/**
 * Experience helper.
 */
export interface AboutExperience {
  years: number;

  label: string;
}

/**
 * About section props.
 */
export interface AboutSectionProps {
  about: About;
}

/**
 * React Query hook return type.
 */
export interface UseAboutReturn {
  about: About | null;

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}
// src\modules\experience\types\experience.types.ts

import type { ApiResponse } from "@/src/shared/types/api";
import type { BaseEntity } from "@/src/shared/types/common";
import type { Image } from "@/src/shared/types/image";
import type { PaginationMeta } from "@/src/shared/types/pagination";

/**
 * Employment type
 * Must match backend enum exactly.
 */
export type EmploymentType =
  | "Full Time"
  | "Part Time"
  | "Contract"
  | "Freelance"
  | "Internship"
  | "Apprenticeship"
  | "Temporary";

/**
 * Work mode
 * Must match backend enum exactly.
 */
export type WorkMode =
  | "Remote"
  | "Hybrid"
  | "Onsite";

/**
 * Experience entity
 * Matches backend Experience schema.
 */
export interface Experience
  extends BaseEntity {
  company: string;

  slug: string;

  companyLogo?: Image;

  position: string;

  employmentType: EmploymentType;

  workMode: WorkMode;

  location: string;

  startDate: string;

  endDate?: string | null;

  isCurrent: boolean;

  summary: string;

  responsibilities: string[];

  technologies: string[];

  companyWebsite?: string;

  sortOrder: number;

  isActive: boolean;
}

/**
 * Create experience request
 */
export interface CreateExperienceRequest {
  company: string;

  companyLogo?: Image;

  position: string;

  employmentType: EmploymentType;

  workMode: WorkMode;

  location: string;

  startDate: string;

  endDate?: string | null;

  isCurrent?: boolean;

  summary: string;

  responsibilities: string[];

  technologies: string[];

  companyWebsite?: string;

  sortOrder?: number;

  isActive?: boolean;
}

/**
 * Update experience request
 */
export interface UpdateExperienceRequest {
  company?: string;

  companyLogo?: Image;

  position?: string;

  employmentType?: EmploymentType;

  workMode?: WorkMode;

  location?: string;

  startDate?: string;

  endDate?: string | null;

  isCurrent?: boolean;

  summary?: string;

  responsibilities?: string[];

  technologies?: string[];

  companyWebsite?: string;

  sortOrder?: number;

  isActive?: boolean;
}

/**
 * Experience query params
 */
export interface ExperienceQueryParams {
  searchTerm?: string;

  page?: number;

  limit?: number;

  sort?: string;

  fields?: string;

  isActive?: boolean;

  company?: string;

  technology?: string;

  employmentType?: EmploymentType;

  workMode?: WorkMode;

  isCurrent?: boolean;
}

/**
 * Single experience response
 */
export type ExperienceResponse =
  ApiResponse<Experience>;

/**
 * Delete experience response
 */
export type DeleteExperienceResponse =
  ApiResponse<Experience>;

/**
 * Experience list response
 */
export interface ExperiencesResponse {
  success: boolean;

  message: string;

  meta: PaginationMeta;

  data: Experience[];
}

/**
 * Experience state
 */
export interface ExperiencesState {
  experiences: Experience[];

  isLoading: boolean;

  isError: boolean;

  error: string | null;
}

/**
 * Timeline item
 */
export interface ExperienceTimelineItem {
  experience: Experience;

  duration: string;
}

/**
 * Experience card props
 */
export interface ExperienceCardProps {
  experience: Experience;
}

/**
 * Experience section props
 */
export interface ExperienceSectionProps {
  experiences: Experience[];
}

/**
 * Hook return
 */
export interface UseExperiencesReturn {
  experiences: Experience[];

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}

/**
 * Single experience hook return
 */
export interface UseExperienceReturn {
  experience: Experience | null;

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}

/**
 * Experience statistics
 */
export interface ExperienceStats {
  totalExperiences: number;

  currentPositions: number;

  totalTechnologies: number;
}

/**
 * Technology group
 */
export interface ExperienceTechnologyGroup {
  technology: string;

  experiences: Experience[];
}

/**
 * Company group
 */
export interface ExperienceCompanyGroup {
  company: string;

  experiences: Experience[];
}
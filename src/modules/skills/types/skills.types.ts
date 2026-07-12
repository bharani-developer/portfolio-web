// src/modules/skills/types/skills.types.ts

import type { ApiResponse } from "@/src/shared/types/api";
import type { BaseEntity } from "@/src/shared/types/common";
import type { PaginationMeta } from "@/src/shared/types/pagination";

/* -------------------------------------------------------------------------- */
/*                               Skill Category                               */
/* -------------------------------------------------------------------------- */

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Mobile"
  | "API Integration"
  | "Cloud"
  | "DevOps"
  | "Tools"
  | "Other";

/* -------------------------------------------------------------------------- */
/*                                Skill Image                                 */
/* -------------------------------------------------------------------------- */

export interface SkillImage {
  url: string;
  publicId: string;
}

/* -------------------------------------------------------------------------- */
/*                                Skill Entity                                */
/* -------------------------------------------------------------------------- */

export interface Skill extends BaseEntity {
  name: string;

  slug: string;

  category: SkillCategory;

  proficiency: number;

  image?: SkillImage | null;

  description?: string;

  sortOrder: number;

  isActive: boolean;
}

/* -------------------------------------------------------------------------- */
/*                             Create Skill Request                           */
/* -------------------------------------------------------------------------- */

export interface CreateSkillRequest {
  name: string;

  category: SkillCategory;

  proficiency?: number;

  image?: SkillImage | null;

  description?: string;

  sortOrder?: number;

  isActive?: boolean;
}

/* -------------------------------------------------------------------------- */
/*                             Update Skill Request                           */
/* -------------------------------------------------------------------------- */

export interface UpdateSkillRequest {
  name?: string;

  category?: SkillCategory;

  proficiency?: number;

  image?: SkillImage | null;

  description?: string;

  sortOrder?: number;

  isActive?: boolean;
}

/* -------------------------------------------------------------------------- */
/*                             Skill Query Params                             */
/* -------------------------------------------------------------------------- */

export interface SkillsQueryParams {
  searchTerm?: string;

  page?: number;

  limit?: number;

  sort?: string;

  fields?: string;

  category?: SkillCategory;

  isActive?: boolean;
}

/* -------------------------------------------------------------------------- */
/*                               API Responses                                */
/* -------------------------------------------------------------------------- */

export type SkillResponse = ApiResponse<Skill>;

export type DeleteSkillResponse = ApiResponse<Skill>;

export interface SkillsResponse {
  success: boolean;

  message: string;

  meta: PaginationMeta;

  data: Skill[];
}

/* -------------------------------------------------------------------------- */
/*                               Local State                                  */
/* -------------------------------------------------------------------------- */

export interface SkillsState {
  skills: Skill[];

  isLoading: boolean;

  isError: boolean;

  error: string | null;
}

/* -------------------------------------------------------------------------- */
/*                              Component Props                               */
/* -------------------------------------------------------------------------- */

export interface SkillCardProps {
  skill: Skill;
}

export interface SkillsSectionProps {
  skills: Skill[];
}

/* -------------------------------------------------------------------------- */
/*                               Skill Group                                  */
/* -------------------------------------------------------------------------- */

export interface SkillGroup {
  category: SkillCategory;

  skills: Skill[];
}

/* -------------------------------------------------------------------------- */
/*                                 Hooks                                      */
/* -------------------------------------------------------------------------- */

export interface UseSkillsReturn {
  skills: Skill[];

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}

export interface UseSkillsByCategoryReturn {
  skills: Skill[];

  category: SkillCategory;

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}

/* -------------------------------------------------------------------------- */
/*                              Helper Types                                  */
/* -------------------------------------------------------------------------- */

export interface SkillProgress {
  name: string;

  percentage: number;
}
// src\modules\projects\types\projects.types.ts

import type { ApiResponse } from "@/app/shared/types/api";
import type { BaseEntity } from "@/app/shared/types/common";
import type { Image } from "@/app/shared/types/image";
import type { PaginationMeta } from "@/app/shared/types/pagination";

/**
 * Project status
 * Must match backend enum.
 */
export type ProjectStatus =
  | "Planning"
  | "In Progress"
  | "Completed"
  | "On Hold"
  | "Archived";

/**
 * Project entity
 * Matches backend Project schema.
 */
export interface Project
  extends BaseEntity {
  title: string;

  slug: string;

  shortDescription: string;

  description: string;

  thumbnail?: Image;

  gallery: Image[];

  technologies: string[];

  category: string;

  githubUrl?: string;

  liveUrl?: string;

  featured: boolean;

  status: ProjectStatus;

  startDate?: string;

  endDate?: string | null;

  sortOrder: number;

  isActive: boolean;
}

/**
 * Create project request
 */
export interface CreateProjectRequest {
  title: string;

  shortDescription: string;

  description: string;

  thumbnail?: Image;

  gallery?: Image[];

  technologies: string[];

  category: string;

  githubUrl?: string;

  liveUrl?: string;

  featured?: boolean;

  status: ProjectStatus;

  startDate?: string;

  endDate?: string | null;

  sortOrder?: number;

  isActive?: boolean;
}

/**
 * Update project request
 */
export interface UpdateProjectRequest {
  title?: string;

  shortDescription?: string;

  description?: string;

  thumbnail?: Image;

  gallery?: Image[];

  technologies?: string[];

  category?: string;

  githubUrl?: string;

  liveUrl?: string;

  featured?: boolean;

  status?: ProjectStatus;

  startDate?: string;

  endDate?: string | null;

  sortOrder?: number;

  isActive?: boolean;
}

/**
 * Projects query params
 */
export interface ProjectsQueryParams {
  searchTerm?: string;

  page?: number;

  limit?: number;

  sortBy?: string;

  sortOrder?: "asc" | "desc";

  isActive?: boolean;

  featured?: boolean;

  category?: string;

  technology?: string;

  status?: ProjectStatus;
}

/**
 * Single project response
 */
export type ProjectResponse =
  ApiResponse<Project>;

/**
 * Delete project response
 */
export type DeleteProjectResponse =
  ApiResponse<Project>;

/**
 * Projects list response
 */
export interface ProjectsResponse {
  success: boolean;

  message: string;

  meta: PaginationMeta;

  data: Project[];
}

/**
 * Projects state
 */
export interface ProjectsState {
  projects: Project[];

  isLoading: boolean;

  isError: boolean;

  error: string | null;
}

/**
 * Project card props
 */
export interface ProjectCardProps {
  project: Project;
}

/**
 * Projects section props
 */
export interface ProjectsSectionProps {
  projects: Project[];
}

/**
 * Featured project
 */
export interface FeaturedProject {
  id: string;

  title: string;

  slug: string;

  shortDescription: string;

  thumbnail?: Image;

  technologies: string[];

  liveUrl?: string;

  githubUrl?: string;
}

/**
 * Project statistics
 */
export interface ProjectStats {
  totalProjects: number;

  activeProjects: number;

  featuredProjects: number;

  completedProjects: number;
}

/**
 * Category group
 */
export interface ProjectCategoryGroup {
  category: string;

  projects: Project[];
}

/**
 * Technology group
 */
export interface ProjectTechnologyGroup {
  technology: string;

  projects: Project[];
}

/**
 * Hook return
 */
export interface UseProjectsReturn {
  projects: Project[];

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}

/**
 * Single project hook return
 */
export interface UseProjectReturn {
  project: Project | null;

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}

/**
 * Featured projects hook return
 */
export interface UseFeaturedProjectsReturn {
  projects: Project[];

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}

/**
 * Active projects hook return
 */
export interface UseActiveProjectsReturn {
  projects: Project[];

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}
// src\modules\services\types\services.types.ts

import type { ApiResponse } from "@/src/shared/types/api";
import type { BaseEntity } from "@/src/shared/types/common";
import type { PaginationMeta } from "@/src/shared/types/pagination";

/**
 * Service entity
 * Matches backend Service schema.
 */
export interface Service extends BaseEntity {
  title: string;

  slug: string;

  shortDescription: string;

  description: string;

  icon?: string;

  sortOrder: number;

  isActive: boolean;
}

/**
 * Create service request
 */
export interface CreateServiceRequest {
  title: string;

  shortDescription: string;

  description: string;

  icon?: string;

  sortOrder?: number;

  isActive?: boolean;
}

/**
 * Update service request
 */
export interface UpdateServiceRequest {
  title?: string;

  shortDescription?: string;

  description?: string;

  icon?: string;

  sortOrder?: number;

  isActive?: boolean;
}

/**
 * Services query params
 */
export interface ServicesQueryParams {
  searchTerm?: string;

  page?: number;

  limit?: number;

  sort?: string;

  fields?: string;

  isActive?: boolean;
}

/**
 * Single service response
 */
export type ServiceResponse =
  ApiResponse<Service>;

/**
 * Delete service response
 */
export type DeleteServiceResponse =
  ApiResponse<Service>;

/**
 * Services list response
 */
export interface ServicesResponse {
  success: boolean;

  message: string;

  meta: PaginationMeta;

  data: Service[];
}

/**
 * Services state
 */
export interface ServicesState {
  services: Service[];

  isLoading: boolean;

  isError: boolean;

  error: string | null;
}

/**
 * Service card props
 */
export interface ServiceCardProps {
  service: Service;
}

/**
 * Services section props
 */
export interface ServicesSectionProps {
  services: Service[];
}

/**
 * Hook return
 */
export interface UseServicesReturn {
  services: Service[];

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}

/**
 * Single service hook return
 */
export interface UseServiceReturn {
  service: Service | null;

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}

/**
 * Featured service item
 */
export interface FeaturedService {
  id: string;

  title: string;

  description: string;

  icon?: string;
}

/**
 * Service statistics
 */
export interface ServiceStats {
  totalServices: number;

  activeServices: number;
}
// src\shared\types\api.ts

export type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE";

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface ApiListResponse<T> {
  success: boolean;
  message: string;
  data: T[];
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface PaginatedResponse<T> {
  success: boolean;
  message: string;
  data: T[];
  pagination: PaginationMeta;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  code?: string;
  errors?: Record<string, string[]>;
}

export interface ApiSuccessResponse {
  success: true;
  message: string;
}

export interface DeleteResponse {
  success: boolean;
  message: string;
  data: null;
}

export interface QueryParams {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface BaseFilters {
  search?: string;
}

export interface RequestMetadata {
  requestId?: string;
  timestamp?: string;
}

export interface ApiResponseWithMeta<T> {
  success: boolean;
  message: string;
  data: T;
  meta?: RequestMetadata;
}

export interface HealthCheckResponse {
  success: boolean;
  message: string;
  timestamp: string;
  environment: string;
}

export type ApiResult<T> =
  | ApiResponse<T>
  | ApiErrorResponse;

export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;
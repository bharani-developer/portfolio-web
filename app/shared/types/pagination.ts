// src\shared\types\pagination.ts

/**
 * Pagination request parameters.
 */
export interface PaginationParams {
  page?: number;
  limit?: number;
}

/**
 * Pagination query parameters.
 */
export interface PaginationQuery
  extends PaginationParams {
  search?: string;
  sortBy?: string;
  sortOrder?: SortOrder;
}

/**
 * Pagination metadata.
 */
export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

/**
 * Generic paginated data.
 */
export interface PaginatedData<T> {
  items: T[];
  pagination: PaginationMeta;
}

/**
 * Pagination links.
 */
export interface PaginationLinks {
  first?: string;
  previous?: string;
  next?: string;
  last?: string;
}

/**
 * Extended pagination metadata.
 */
export interface PaginationMetaWithLinks
  extends PaginationMeta {
  links?: PaginationLinks;
}

/**
 * Pagination state for UI.
 */
export interface PaginationState {
  page: number;
  limit: number;
}

/**
 * Sort order.
 */
export type SortOrder =
  | "asc"
  | "desc";

/**
 * Sort configuration.
 */
export interface SortConfig {
  field: string;
  order: SortOrder;
}

/**
 * Page information helper.
 */
export interface PageInfo {
  startItem: number;
  endItem: number;
  totalItems: number;
}

/**
 * Infinite scroll cursor pagination.
 */
export interface CursorPagination {
  cursor?: string;
  limit?: number;
}

/**
 * Infinite scroll response metadata.
 */
export interface CursorPaginationMeta {
  nextCursor?: string;
  hasMore: boolean;
}

/**
 * Generic cursor paginated data.
 */
export interface CursorPaginatedData<T> {
  items: T[];
  pagination: CursorPaginationMeta;
}
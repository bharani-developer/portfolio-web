// src\modules\certifications\types\certifications.types.ts
import type { ApiResponse } from "@/app/shared/types/api";
import type { BaseEntity } from "@/app/shared/types/common";
import type { Image } from "@/app/shared/types/image";
import type { PaginationMeta } from "@/app/shared/types/pagination";

/**
 * Certification entity
 * Matches backend Certification schema.
 */
export interface Certification
  extends BaseEntity {
  title: string;

  slug: string;

  issuer: string;

  certificateImage?: Image;

  credentialId?: string;

  credentialUrl?: string;

  issueDate: string;

  expiryDate?: string | null;

  neverExpires: boolean;

  description?: string;

  skills: string[];

  sortOrder: number;

  isActive: boolean;
}

/**
 * Create certification request
 */
export interface CreateCertificationRequest {
  title: string;

  issuer: string;

  certificateImage?: Image;

  credentialId?: string;

  credentialUrl?: string;

  issueDate: string;

  expiryDate?: string | null;

  neverExpires?: boolean;

  description?: string;

  skills?: string[];

  sortOrder?: number;

  isActive?: boolean;
}

/**
 * Update certification request
 */
export interface UpdateCertificationRequest {
  title?: string;

  issuer?: string;

  certificateImage?: Image;

  credentialId?: string;

  credentialUrl?: string;

  issueDate?: string;

  expiryDate?: string | null;

  neverExpires?: boolean;

  description?: string;

  skills?: string[];

  sortOrder?: number;

  isActive?: boolean;
}

/**
 * Certifications query params
 */
export interface CertificationsQueryParams {
  searchTerm?: string;

  page?: number;

  limit?: number;

  sortBy?: string;

  sortOrder?: "asc" | "desc";

  isActive?: boolean;

  issuer?: string;

  skill?: string;
}

/**
 * Single certification response
 */
export type CertificationResponse =
  ApiResponse<Certification>;

/**
 * Delete certification response
 */
export type DeleteCertificationResponse =
  ApiResponse<Certification>;

/**
 * Certifications list response
 */
export interface CertificationsResponse {
  success: boolean;

  message: string;

  meta: PaginationMeta;

  data: Certification[];
}

/**
 * Certifications state
 */
export interface CertificationsState {
  certifications: Certification[];

  isLoading: boolean;

  isError: boolean;

  error: string | null;
}

/**
 * Certification card props
 */
export interface CertificationCardProps {
  certification: Certification;
}

/**
 * Certifications section props
 */
export interface CertificationsSectionProps {
  certifications: Certification[];
}

/**
 * Issuer group
 */
export interface CertificationIssuerGroup {
  issuer: string;

  certifications: Certification[];
}

/**
 * Certification statistics
 */
export interface CertificationStats {
  totalCertifications: number;

  activeCertifications: number;

  validCertifications: number;

  expiredCertifications: number;
}

/**
 * Hook return
 */
export interface UseCertificationsReturn {
  certifications: Certification[];

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}

/**
 * Single certification hook return
 */
export interface UseCertificationReturn {
  certification: Certification | null;

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}

/**
 * Valid certifications hook return
 */
export interface UseValidCertificationsReturn {
  certifications: Certification[];

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}

/**
 * Expired certifications hook return
 */
export interface UseExpiredCertificationsReturn {
  certifications: Certification[];

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}
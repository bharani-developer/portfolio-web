// src\modules\testimonials\types\testimonials.types.ts

import type { ApiResponse } from "@/app/shared/types/api";
import type { BaseEntity } from "@/app/shared/types/common";
import type { Image } from "@/app/shared/types/image";
import type { PaginationMeta } from "@/app/shared/types/pagination";

/**
 * Client type
 * Must match backend enum exactly.
 */
export type ClientType =
  | "Individual"
  | "Freelancer"
  | "Startup"
  | "Company"
  | "Agency"
  | "Organization"
  | "Other";

/**
 * Testimonial entity
 * Matches backend Testimonial schema.
 */
export interface Testimonial
  extends BaseEntity {
  clientName: string;

  clientPosition?: string;

  clientCompany?: string;

  clientImage?: Image;

  clientWebsite?: string;

  projectName?: string;

  review: string;

  rating: number;

  clientType: ClientType;

  isFeatured: boolean;

  sortOrder: number;

  isActive: boolean;
}

/**
 * Create testimonial request
 */
export interface CreateTestimonialRequest {
  clientName: string;

  clientPosition?: string;

  clientCompany?: string;

  clientImage?: Image;

  clientWebsite?: string;

  projectName?: string;

  review: string;

  rating: number;

  clientType: ClientType;

  isFeatured?: boolean;

  sortOrder?: number;

  isActive?: boolean;
}

/**
 * Update testimonial request
 */
export interface UpdateTestimonialRequest {
  clientName?: string;

  clientPosition?: string;

  clientCompany?: string;

  clientImage?: Image;

  clientWebsite?: string;

  projectName?: string;

  review?: string;

  rating?: number;

  clientType?: ClientType;

  isFeatured?: boolean;

  sortOrder?: number;

  isActive?: boolean;
}

/**
 * Testimonials query params
 */
export interface TestimonialsQueryParams {
  searchTerm?: string;

  page?: number;

  limit?: number;

  sortBy?: string;

  sortOrder?: "asc" | "desc";

  isActive?: boolean;

  isFeatured?: boolean;

  rating?: number;

  clientType?: ClientType;

  projectName?: string;
}

/**
 * Average rating response
 */
export interface AverageRatingResponse {
  averageRating: number;

  totalTestimonials: number;
}

/**
 * Single testimonial response
 */
export type TestimonialResponse =
  ApiResponse<Testimonial>;

/**
 * Delete testimonial response
 */
export type DeleteTestimonialResponse =
  ApiResponse<Testimonial>;

/**
 * Testimonials list response
 */
export interface TestimonialsResponse {
  success: boolean;

  message: string;

  meta: PaginationMeta;

  data: Testimonial[];
}

/**
 * Testimonials state
 */
export interface TestimonialsState {
  testimonials: Testimonial[];

  isLoading: boolean;

  isError: boolean;

  error: string | null;
}

/**
 * Testimonial card props
 */
export interface TestimonialCardProps {
  testimonial: Testimonial;
}

/**
 * Testimonials section props
 */
export interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

/**
 * Rating group
 */
export interface TestimonialRatingGroup {
  rating: number;

  testimonials: Testimonial[];
}

/**
 * Client type group
 */
export interface TestimonialClientTypeGroup {
  clientType: ClientType;

  testimonials: Testimonial[];
}

/**
 * Featured testimonial
 */
export interface FeaturedTestimonial {
  id: string;

  clientName: string;

  clientCompany?: string;

  clientPosition?: string;

  review: string;

  rating: number;

  clientImage?: Image;
}

/**
 * Testimonial statistics
 */
export interface TestimonialStats {
  totalTestimonials: number;

  activeTestimonials: number;

  featuredTestimonials: number;

  averageRating: number;
}

/**
 * Hook return
 */
export interface UseTestimonialsReturn {
  testimonials: Testimonial[];

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}

/**
 * Single testimonial hook return
 */
export interface UseTestimonialReturn {
  testimonial: Testimonial | null;

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}

/**
 * Featured testimonials hook return
 */
export interface UseFeaturedTestimonialsReturn {
  testimonials: Testimonial[];

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}

/**
 * Active testimonials hook return
 */
export interface UseActiveTestimonialsReturn {
  testimonials: Testimonial[];

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}

/**
 * Average rating hook result
 */
export interface UseAverageRatingReturn {
  averageRating: number;

  totalTestimonials: number;

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}
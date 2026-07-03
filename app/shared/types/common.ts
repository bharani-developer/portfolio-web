// src\shared\types\common.ts

/**
 * Common utility types
 */

export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

export type ValueOf<T> = T[keyof T];

export type MaybeArray<T> = T | T[];

export type AsyncStatus =
  | "idle"
  | "pending"
  | "success"
  | "error";

/**
 * Database base entity
 */

export interface BaseEntity {
  _id: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Sort
 */

export type SortOrder = "asc" | "desc";

export interface SortOptions {
  field: string;
  order: SortOrder;
}

/**
 * Select options
 */

export interface SelectOption {
  label: string;
  value: string;
}

export interface GroupedSelectOption {
  label: string;
  options: SelectOption[];
}

/**
 * Navigation
 */

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
  disabled?: boolean;
}

/**
 * Social links
 */

export interface SocialLink {
  label: string;
  url: string;
  icon?: string;
}

/**
 * Statistics
 */

export interface StatItem {
  label: string;
  value: string | number;
}

/**
 * Generic card content
 */

export interface CardItem {
  title: string;
  description?: string;
  image?: string;
  href?: string;
}

/**
 * SEO
 */

export interface SeoMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  image?: string;
}

/**
 * Date range
 */

export interface DateRange {
  from: string;
  to?: string;
}

/**
 * Loading state
 */

export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

/**
 * Generic ID params
 */

export interface IdParams {
  id: string;
}

/**
 * Generic slug params
 */

export interface SlugParams {
  slug: string;
}

/**
 * Generic children props
 */

export interface ChildrenProps {
  children: React.ReactNode;
}

/**
 * Generic page props
 */

export interface PageParams<
  TParams extends Record<string, string> = Record<
    string,
    string
  >,
> {
  params: Promise<TParams>;
}

/**
 * Generic search params
 */

export interface PageSearchParams {
  searchParams: Promise<
    Record<
      string,
      string | string[] | undefined
    >
  >;
}

/**
 * Theme
 */

export type ThemeMode =
  | "light"
  | "dark"
  | "system";

/**
 * Contact information
 */

export interface ContactInfo {
  email?: string;
  phone?: string;
  location?: string;
  website?: string;
}

/**
 * Social platforms
 */

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  facebook?: string;
  youtube?: string;
  website?: string;
}
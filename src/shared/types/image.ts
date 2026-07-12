// src\shared\types\image.ts

import type { BaseEntity } from "@/src/shared/types/common";

/**
 * Core image object
 * Matches backend upload/image schema.
 */
export interface Image {
  url: string;
  publicId: string;
}

/**
 * Optional image helper.
 */
export type OptionalImage = Image | null;

/**
 * Image dimensions.
 */
export interface ImageDimensions {
  width: number;
  height: number;
}

/**
 * Image with metadata.
 */
export interface ImageMetadata extends Image {
  format?: string;
  bytes?: number;
  dimensions?: ImageDimensions;
  alt?: string;
  blurDataURL?: string;
}

/**
 * Gallery image.
 */
export interface GalleryImage extends Image {
  alt?: string;
  caption?: string;
  sortOrder?: number;
}

/**
 * Uploaded image record.
 */
export interface UploadedImage
  extends BaseEntity,
  Image {
  format?: string;
  bytes?: number;
  width?: number;
  height?: number;
}

/**
 * Image upload response.
 */
export interface UploadImageResponse {
  success: boolean;
  message: string;
  data: UploadedImage;
}

/**
 * Multiple image upload response.
 */
export interface UploadImagesResponse {
  success: boolean;
  message: string;
  data: UploadedImage[];
}

/**
 * Next.js image props helper.
 */
export interface ResponsiveImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  blurDataURL?: string;
}

/**
 * Image transformation options.
 */
export interface ImageTransformOptions {
  width?: number;
  height?: number;
  quality?: number;
  crop?: "fill" | "fit" | "scale";
}

/**
 * Common image aspect ratios.
 */
export type ImageAspectRatio =
  | "1:1"
  | "4:3"
  | "3:2"
  | "16:9"
  | "21:9";

/**
 * Image loading state.
 */
export interface ImageState {
  isLoading: boolean;
  hasError: boolean;
}
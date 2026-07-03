// src\shared\types\seo.ts

/**
 * Open Graph image.
 */
export interface OpenGraphImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

/**
 * Twitter card types.
 */
export type TwitterCardType =
  | "summary"
  | "summary_large_image"
  | "app"
  | "player";

/**
 * Open Graph metadata.
 */
export interface OpenGraphMetadata {
  title: string;
  description: string;
  url: string;
  siteName: string;
  locale?: string;
  type?:
    | "website"
    | "article"
    | "profile";
  images?: OpenGraphImage[];
}

/**
 * Twitter metadata.
 */
export interface TwitterMetadata {
  card?: TwitterCardType;
  title: string;
  description: string;
  creator?: string;
  images?: string[];
}

/**
 * Canonical metadata.
 */
export interface CanonicalMetadata {
  canonical: string;
}

/**
 * Robots metadata.
 */
export interface RobotsMetadata {
  index?: boolean;
  follow?: boolean;
  noarchive?: boolean;
  nosnippet?: boolean;
  noimageindex?: boolean;
  nocache?: boolean;
}

/**
 * Generic SEO metadata.
 */
export interface SeoMetadata {
  title: string;
  description: string;

  keywords?: string[];

  canonicalUrl?: string;

  image?: string;

  noIndex?: boolean;

  openGraph?: OpenGraphMetadata;

  twitter?: TwitterMetadata;

  robots?: RobotsMetadata;
}

/**
 * Sitemap entry.
 */
export interface SitemapEntry {
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}

/**
 * JSON-LD base type.
 */
export interface JsonLd {
  "@context": "https://schema.org";
  "@type": string;
}

/**
 * Person schema.
 */
export interface PersonJsonLd
  extends JsonLd {
  "@type": "Person";

  name: string;

  jobTitle?: string;

  description?: string;

  image?: string;

  url?: string;

  sameAs?: string[];
}

/**
 * Website schema.
 */
export interface WebsiteJsonLd
  extends JsonLd {
  "@type": "WebSite";

  name: string;

  url: string;

  description?: string;
}

/**
 * Organization schema.
 */
export interface OrganizationJsonLd
  extends JsonLd {
  "@type": "Organization";

  name: string;

  url: string;

  logo?: string;

  sameAs?: string[];
}

/**
 * Article schema.
 */
export interface ArticleJsonLd
  extends JsonLd {
  "@type": "Article";

  headline: string;

  description?: string;

  image?: string | string[];

  datePublished?: string;

  dateModified?: string;

  author?: {
    "@type": "Person";
    name: string;
  };
}

/**
 * Breadcrumb item.
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Breadcrumb schema.
 */
export interface BreadcrumbJsonLd
  extends JsonLd {
  "@type": "BreadcrumbList";

  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
}

/**
 * SEO page configuration.
 */
export interface SeoPageConfig {
  path: string;

  title: string;

  description: string;

  image?: string;
}

/**
 * Metadata generation params.
 */
export interface MetadataParams {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
}
// src\modules\contact\types\contact.types.ts

import type { ApiResponse } from "@/src/shared/types/api";
import type { BaseEntity } from "@/src/shared/types/common";
import type { PaginationMeta } from "@/src/shared/types/pagination";

/**
 * Contact status
 * Must match backend enum exactly.
 */
export type ContactStatus =
  | "New"
  | "In Progress"
  | "Replied"
  | "Closed";

/**
 * Contact priority
 * Must match backend enum exactly.
 */
export type ContactPriority =
  | "Low"
  | "Medium"
  | "High"
  | "Urgent";

/**
 * Contact source
 * Must match backend enum exactly.
 */
export type ContactSource =
  | "Website"
  | "Email"
  | "LinkedIn"
  | "GitHub"
  | "Referral"
  | "Other";

/**
 * Contact entity
 * Matches backend Contact schema.
 */
export interface Contact
  extends BaseEntity {
  name: string;

  email: string;

  phone?: string | null;

  company?: string | null;

  subject: string;

  message: string;

  status: ContactStatus;

  priority: ContactPriority;

  source: ContactSource;

  isRead: boolean;

  isReplied: boolean;

  repliedAt?: string | null;

  notes?: string | null;

  ipAddress?: string | null;

  userAgent?: string | null;

  sortOrder: number;

  isActive: boolean;
}

/**
 * Public contact form request
 */
export interface CreateContactRequest {
  name: string;

  email: string;

  phone?: string;

  company?: string;

  subject: string;

  message: string;

  source?: ContactSource;
}

/**
 * Admin update request
 */
export interface UpdateContactRequest {
  name?: string;

  email?: string;

  phone?: string;

  company?: string;

  subject?: string;

  message?: string;

  status?: ContactStatus;

  priority?: ContactPriority;

  source?: ContactSource;

  isRead?: boolean;

  isReplied?: boolean;

  repliedAt?: string | null;

  notes?: string;

  sortOrder?: number;

  isActive?: boolean;
}

/**
 * Contact query params
 */
export interface ContactsQueryParams {
  searchTerm?: string;

  page?: number;

  limit?: number;

  sortBy?: string;

  sortOrder?: "asc" | "desc";

  status?: ContactStatus;

  priority?: ContactPriority;

  source?: ContactSource;

  isRead?: boolean;

  isReplied?: boolean;

  isActive?: boolean;
}

/**
 * Contact statistics
 */
export interface ContactStats {
  totalContacts: number;

  newContacts: number;

  inProgressContacts: number;

  repliedContacts: number;

  closedContacts: number;

  unreadContacts: number;

  readContacts: number;

  activeContacts: number;
}

/**
 * Single contact response
 */
export type ContactResponse =
  ApiResponse<Contact>;

/**
 * Delete contact response
 */
export type DeleteContactResponse =
  ApiResponse<Contact>;

/**
 * Contacts list response
 */
export interface ContactsResponse {
  success: boolean;

  message: string;

  meta: PaginationMeta;

  data: Contact[];
}

/**
 * Contact statistics response
 */
export type ContactStatsResponse =
  ApiResponse<ContactStats>;

/**
 * Contact form state
 */
export interface ContactFormState {
  isSubmitting: boolean;

  isSuccess: boolean;

  error: string | null;
}

/**
 * Contacts state
 */
export interface ContactsState {
  contacts: Contact[];

  isLoading: boolean;

  isError: boolean;

  error: string | null;
}

/**
 * Contact card props
 */
export interface ContactCardProps {
  contact: Contact;
}

/**
 * Contact table row props
 */
export interface ContactRowProps {
  contact: Contact;
}

/**
 * Contact section props
 */
export interface ContactsSectionProps {
  contacts: Contact[];
}

/**
 * Status group
 */
export interface ContactStatusGroup {
  status: ContactStatus;

  contacts: Contact[];
}

/**
 * Priority group
 */
export interface ContactPriorityGroup {
  priority: ContactPriority;

  contacts: Contact[];
}

/**
 * Source group
 */
export interface ContactSourceGroup {
  source: ContactSource;

  contacts: Contact[];
}

/**
 * Hook return
 */
export interface UseContactsReturn {
  contacts: Contact[];

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}

/**
 * Single contact hook return
 */
export interface UseContactReturn {
  contact: Contact | null;

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}

/**
 * Contact stats hook return
 */
export interface UseContactStatsReturn {
  stats: ContactStats | null;

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}

/**
 * Active contacts hook return
 */
export interface UseActiveContactsReturn {
  contacts: Contact[];

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}

/**
 * Unread contacts hook return
 */
export interface UseUnreadContactsReturn {
  contacts: Contact[];

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}

/**
 * Read contacts hook return
 */
export interface UseReadContactsReturn {
  contacts: Contact[];

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}

/**
 * Replied contacts hook return
 */
export interface UseRepliedContactsReturn {
  contacts: Contact[];

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}
// src\modules\contact\hooks\use-contact.ts

"use client";

import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/app/shared/constants/query-keys";

import { contactService } from "@/app/modules//contact/services/contact.service";

import type {
  ContactsQueryParams,
  UseActiveContactsReturn,
  UseContactReturn,
  UseContactsReturn,
  UseContactStatsReturn,
  UseReadContactsReturn,
  UseRepliedContactsReturn,
  UseUnreadContactsReturn,
} from "@/app/modules//contact/types/contact.types";

const STALE_TIME = 1000 * 60 * 10; // 10 minutes
const GC_TIME = 1000 * 60 * 30; // 30 minutes

/**
 * Get contacts list
 */
export function useContacts(
  params?: ContactsQueryParams,
): UseContactsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.contact,
      params,
    ],

    queryFn: async () => {
      const response =
        await contactService.getContacts(
          params,
        );

      return response.data;
    },

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    contacts: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get contact by id
 */
export function useContact(
  id: string,
): UseContactReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.contact,
      id,
    ],

    queryFn: () =>
      contactService.getContact(id),

    enabled: Boolean(id),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    contact: query.data ?? null,

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get contact statistics
 */
export function useContactStats(): UseContactStatsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.contact,
      "stats",
    ],

    queryFn: () =>
      contactService.getContactStats(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    stats: query.data ?? null,

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get active contacts
 */
export function useActiveContacts(): UseActiveContactsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.contact,
      "active",
    ],

    queryFn: () =>
      contactService.getActiveContacts(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    contacts: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get unread contacts
 */
export function useUnreadContacts(): UseUnreadContactsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.contact,
      "unread",
    ],

    queryFn: () =>
      contactService.getUnreadContacts(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    contacts: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get read contacts
 */
export function useReadContacts(): UseReadContactsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.contact,
      "read",
    ],

    queryFn: () =>
      contactService.getReadContacts(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    contacts: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get replied contacts
 */
export function useRepliedContacts(): UseRepliedContactsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.contact,
      "replied",
    ],

    queryFn: () =>
      contactService.getRepliedContacts(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    contacts: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get recent contacts
 */
export function useRecentContacts(
  limit = 10,
): UseContactsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.contact,
      "recent",
      limit,
    ],

    queryFn: () =>
      contactService.getRecentContacts(
        limit,
      ),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    contacts: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get contact listing
 */
export function useContactListing(): UseContactsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.contact,
      "listing",
    ],

    queryFn: () =>
      contactService.getContactListing(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    contacts: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Total contacts count
 */
export function useContactsCount() {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.contact,
      "count",
    ],

    queryFn: () =>
      contactService.getContactsCount(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });
}

/**
 * Active contacts count
 */
export function useActiveContactsCount() {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.contact,
      "active-count",
    ],

    queryFn: () =>
      contactService.getActiveContactsCount(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });
}

/**
 * Unread contacts count
 */
export function useUnreadContactsCount() {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.contact,
      "unread-count",
    ],

    queryFn: () =>
      contactService.getUnreadContactsCount(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });
}

/**
 * Read contacts count
 */
export function useReadContactsCount() {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.contact,
      "read-count",
    ],

    queryFn: () =>
      contactService.getReadContactsCount(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });
}

/**
 * Replied contacts count
 */
export function useRepliedContactsCount() {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.contact,
      "replied-count",
    ],

    queryFn: () =>
      contactService.getRepliedContactsCount(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });
}

/**
 * New contacts count
 */
export function useNewContactsCount() {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.contact,
      "new-count",
    ],

    queryFn: () =>
      contactService.getNewContactsCount(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });
}

/**
 * Closed contacts count
 */
export function useClosedContactsCount() {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.contact,
      "closed-count",
    ],

    queryFn: () =>
      contactService.getClosedContactsCount(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });
}

/**
 * In progress contacts count
 */
export function useInProgressContactsCount() {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.contact,
      "in-progress-count",
    ],

    queryFn: () =>
      contactService.getInProgressContactsCount(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });
}
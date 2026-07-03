// src\modules\contact\services\contact.service.ts

import { API_ENDPOINTS } from "@/app/shared/constants/api";

import { get } from "@/app/shared/services/http-client";

import type {
  Contact,
  ContactResponse,
  ContactsQueryParams,
  ContactsResponse,
  ContactStats,
  ContactStatsResponse,
} from "@/app/modules//contact/types/contact.types";

class ContactService {
  /**
   * Build query string
   */
  private buildQueryString(
    params?: ContactsQueryParams,
  ): string {
    if (!params) {
      return "";
    }

    const searchParams =
      new URLSearchParams();

    if (params.searchTerm) {
      searchParams.set(
        "searchTerm",
        params.searchTerm,
      );
    }

    if (params.page) {
      searchParams.set(
        "page",
        params.page.toString(),
      );
    }

    if (params.limit) {
      searchParams.set(
        "limit",
        params.limit.toString(),
      );
    }

    if (params.sortBy) {
      searchParams.set(
        "sortBy",
        params.sortBy,
      );
    }

    if (params.sortOrder) {
      searchParams.set(
        "sortOrder",
        params.sortOrder,
      );
    }

    if (
      typeof params.isActive ===
      "boolean"
    ) {
      searchParams.set(
        "isActive",
        String(params.isActive),
      );
    }

    if (
      typeof params.isRead ===
      "boolean"
    ) {
      searchParams.set(
        "isRead",
        String(params.isRead),
      );
    }

    if (
      typeof params.isReplied ===
      "boolean"
    ) {
      searchParams.set(
        "isReplied",
        String(params.isReplied),
      );
    }

    if (params.status) {
      searchParams.set(
        "status",
        params.status,
      );
    }

    if (params.priority) {
      searchParams.set(
        "priority",
        params.priority,
      );
    }

    if (params.source) {
      searchParams.set(
        "source",
        params.source,
      );
    }

    const queryString =
      searchParams.toString();

    return queryString
      ? `?${queryString}`
      : "";
  }

  /**
   * Get all contacts
   */
  async getContacts(
    params?: ContactsQueryParams,
  ): Promise<ContactsResponse> {
    const queryString =
      this.buildQueryString(params);

    return get<ContactsResponse>(
      `${API_ENDPOINTS.CONTACT}${queryString}`,
    );
  }

  /**
   * Get contact by id
   */
  async getContact(
    id: string,
  ): Promise<Contact> {
    const response =
      await get<ContactResponse>(
        `${API_ENDPOINTS.CONTACT}/${id}`,
      );

    return response.data;
  }

  /**
   * Get contact statistics
   */
  async getContactStats(): Promise<ContactStats> {
    const response =
      await get<ContactStatsResponse>(
        `${API_ENDPOINTS.CONTACT}/stats`,
      );

    return response.data;
  }

  /**
   * Get active contacts
   */
  async getActiveContacts(): Promise<
    Contact[]
  > {
    const response =
      await get<ContactsResponse>(
        `${API_ENDPOINTS.CONTACT}/active`,
      );

    return response.data;
  }

  /**
   * Get unread contacts
   */
  async getUnreadContacts(): Promise<
    Contact[]
  > {
    const response =
      await get<ContactsResponse>(
        `${API_ENDPOINTS.CONTACT}/unread`,
      );

    return response.data;
  }

  /**
   * Get read contacts
   */
  async getReadContacts(): Promise<
    Contact[]
  > {
    const response =
      await get<ContactsResponse>(
        `${API_ENDPOINTS.CONTACT}/read`,
      );

    return response.data;
  }

  /**
   * Get replied contacts
   */
  async getRepliedContacts(): Promise<
    Contact[]
  > {
    const response =
      await get<ContactsResponse>(
        `${API_ENDPOINTS.CONTACT}/replied`,
      );

    return response.data;
  }

  /**
   * Dashboard recent contacts
   */
  async getRecentContacts(
    limit = 10,
  ): Promise<Contact[]> {
    const response =
      await this.getContacts({
        page: 1,
        limit,
        sortBy: "createdAt",
        sortOrder: "desc",
      });

    return response.data;
  }

  /**
   * Contact page contacts
   */
  async getContactListing(): Promise<
    Contact[]
  > {
    const response =
      await this.getContacts({
        sortBy: "createdAt",
        sortOrder: "desc",
      });

    return response.data;
  }

  /**
   * Total contacts count
   */
  async getContactsCount(): Promise<number> {
    const response =
      await this.getContacts({
        page: 1,
        limit: 1,
      });

    return response.meta.total;
  }

  /**
   * Active contacts count
   */
  async getActiveContactsCount(): Promise<number> {
    const contacts =
      await this.getActiveContacts();

    return contacts.length;
  }

  /**
   * Unread contacts count
   */
  async getUnreadContactsCount(): Promise<number> {
    const contacts =
      await this.getUnreadContacts();

    return contacts.length;
  }

  /**
   * Read contacts count
   */
  async getReadContactsCount(): Promise<number> {
    const contacts =
      await this.getReadContacts();

    return contacts.length;
  }

  /**
   * Replied contacts count
   */
  async getRepliedContactsCount(): Promise<number> {
    const contacts =
      await this.getRepliedContacts();

    return contacts.length;
  }

  /**
   * New contacts count
   */
  async getNewContactsCount(): Promise<number> {
    const stats =
      await this.getContactStats();

    return stats.newContacts;
  }

  /**
   * Closed contacts count
   */
  async getClosedContactsCount(): Promise<number> {
    const stats =
      await this.getContactStats();

    return stats.closedContacts;
  }

  /**
   * In progress contacts count
   */
  async getInProgressContactsCount(): Promise<number> {
    const stats =
      await this.getContactStats();

    return stats.inProgressContacts;
  }
}

export const contactService =
  new ContactService();
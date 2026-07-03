// src/shared/lib/utils.ts

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(
  ...inputs: ClassValue[]
): string {
  return twMerge(clsx(inputs));
}

export function formatDate(
  date: string | Date,
  locale = "en-US",
): string {
  return new Intl.DateTimeFormat(
    locale,
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  ).format(new Date(date));
}

export function formatDateTime(
  date: string | Date,
  locale = "en-US",
): string {
  return new Intl.DateTimeFormat(
    locale,
    {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    },
  ).format(new Date(date));
}

export function truncate(
  value: string,
  length = 100,
): string {
  if (value.length <= length) {
    return value;
  }

  return `${value.slice(0, length)}...`;
}

export function slugify(
  value: string,
): string {
  return value
    .toLowerCase()
    .trim()
    .replace(
      /[^a-z0-9\s-]/g,
      "",
    )
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
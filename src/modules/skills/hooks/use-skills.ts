// src\modules\skills\hooks\use-skills.ts

"use client";

import { useMemo } from "react";

import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/src/shared/constants/query-keys";

import { skillsService } from "@/src/modules/skills/services/skills.service";

import type {
  Skill,
  SkillCategory,
  SkillGroup,
  SkillsQueryParams,
  UseSkillsByCategoryReturn,
  UseSkillsReturn,
} from "@/src/modules/skills/types/skills.types";

const STALE_TIME = 1000 * 60 * 10; // 10 minutes
const GC_TIME = 1000 * 60 * 30; // 30 minutes

/**
 * Get all skills
 */
export function useHomepageSkills(
  params?: SkillsQueryParams,
): UseSkillsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.skills,
      params,
    ],

    queryFn: async () => {
      const response =
        await skillsService.getSkills(
          params,
        );

      return response.data;
    },

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    skills: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get active skills
 */
export function useActiveSkills(): UseSkillsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.skills,
      "active",
    ],

    queryFn: () =>
      skillsService.getActiveSkills(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    skills: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get skills by category
 */
export function useSkillsByCategory(
  category: SkillCategory,
): UseSkillsByCategoryReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.skills,
      "category",
      category,
    ],

    queryFn: () =>
      skillsService.getSkillsByCategory(
        category,
      ),

    enabled: Boolean(category),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    category,

    skills: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get featured skills
 */
export function useFeaturedSkills(
  limit = 8,
): UseSkillsReturn {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.skills,
      "featured",
      limit,
    ],

    queryFn: () =>
      skillsService.getFeaturedSkills(
        limit,
      ),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  return {
    skills: query.data ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get grouped skills
 */
export function useGroupedSkills(): {
  groups: SkillGroup[];
  skills: Skill[];
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => Promise<unknown>;
} {
  const query = useQuery({
    queryKey: [
      ...QUERY_KEYS.skills,
      "grouped",
    ],

    queryFn: () =>
      skillsService.getGroupedSkills(),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });

  const groups = useMemo<
    SkillGroup[]
  >(() => {
    if (!query.data) {
      return [];
    }

    return Object.entries(
      query.data,
    ).map(
      ([category, skills]) => ({
        category:
          category as SkillCategory,
        skills,
      }),
    );
  }, [query.data]);

  const skills = useMemo(
    () =>
      groups.flatMap(
        (group) => group.skills,
      ),
    [groups],
  );

  return {
    groups,

    skills,

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: async () =>
      query.refetch(),
  };
}

/**
 * Get single skill
 */
export function useSkill(
  id: string,
) {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.skills,
      id,
    ],

    queryFn: () =>
      skillsService.getSkill(id),

    enabled: Boolean(id),

    staleTime: STALE_TIME,

    gcTime: GC_TIME,
  });
}
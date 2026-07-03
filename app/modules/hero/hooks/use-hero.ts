// src\modules\hero\hooks\use-hero.ts

import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/app/shared/constants/query-keys";

import { heroService } from "@/app/modules/hero/services/hero.service";

import type { Hero } from "@/app/modules//hero/types/hero.types";

export interface UseHeroReturn {
  hero: Hero | null;

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}

export function useHero(): UseHeroReturn {
  const query = useQuery<Hero, Error>({
    queryKey: QUERY_KEYS.hero,

    queryFn: () => heroService.getHero(),
  });

  return {
    hero: query.data ?? null,

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: query.refetch,
  };
}
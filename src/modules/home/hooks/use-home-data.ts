// app\modules\home\hooks\use-home-data.ts

"use client";

import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/src/shared/constants/query-keys";

import { homeService } from "../services/home.service";

export function useHomeData() {
    console.log("useHomeData called");

  const query = useQuery({
    queryKey: QUERY_KEYS.home,

    queryFn: () =>
      homeService.getHomeData(),

    staleTime: 1000 * 60 * 10,

    gcTime: 1000 * 60 * 30,

    refetchOnWindowFocus: false,
  });

  return {
    hero: query.data?.hero ?? null,

    about: query.data?.about ?? null,

    skills: query.data?.skills ?? [],

    services: query.data?.services ?? [],

    experiences:
      query.data?.experiences ?? [],

    projects:
      query.data?.projects ?? [],

    testimonials:
      query.data?.testimonials ?? [],

    blogs:
      query.data?.blogs ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: query.refetch,
  };
}
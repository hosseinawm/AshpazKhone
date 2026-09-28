"use client";

import { useInfiniteQuery } from "@tanstack/react-query";

import { getRecipes } from "../api/recipes.api";

const RECIPES_PER_PAGE = 12;

export function useInfiniteRecipes() {
  return useInfiniteQuery({
    queryKey: ["recipes", "infinite"],

    queryFn: ({ pageParam }) => {
      return getRecipes(RECIPES_PER_PAGE, pageParam);
    },

    initialPageParam: 0,

    getNextPageParam: (lastPage) => {
      const nextSkip = lastPage.skip + lastPage.limit;

      if (nextSkip >= lastPage.total) {
        return undefined;
      }

      return nextSkip;
    },
  });
}

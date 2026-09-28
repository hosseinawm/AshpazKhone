"use client";

import { useEffect, useMemo, useRef } from "react";

import RecipeCard from "./RecipeCard";
import { useInfiniteRecipes } from "../hooks/useInfiniteRecipes";

function InfiniteRecipeList() {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteRecipes();

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const recipes = useMemo(() => {
    return data?.pages.flatMap((page) => page.recipes) ?? [];
  }, [data]);

  useEffect(() => {
    const element = loadMoreRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];

        if (!firstEntry) return;

        if (firstEntry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      {
        threshold: 0,
        rootMargin: "300px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isLoading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="h-96 animate-pulse rounded-2xl bg-muted"
          />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-20 text-center">
        <p className="text-destructive">{error.message}</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {/* Infinite scroll trigger */}
      <div ref={loadMoreRef} className="mt-10 h-10" />

      {isFetchingNextPage && (
        <div className="flex justify-center py-6">
          <p className="text-sm text-muted-foreground">
            Loading more recipes...
          </p>
        </div>
      )}

      {!hasNextPage && (
        <p className="py-6 text-center text-sm text-muted-foreground">
          You&apos;ve reached the end of the recipes.
        </p>
      )}
    </>
  );
}

export default InfiniteRecipeList;

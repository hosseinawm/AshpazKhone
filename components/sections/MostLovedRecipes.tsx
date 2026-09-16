"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RecipeCard from "@/features/recipies/components/RecipeCard";
import { useRecipes } from "@/features/recipies/hooks/useRecipes";

function MostLovedRecipes() {
  const { data, isLoading, isError } = useRecipes();

  const mostLovedRecipes = data?.recipes
    ? [...data.recipes].sort((a, b) => b.rating - a.rating).slice(0, 4)
    : [];

  if (isLoading) {
    return (
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <div className="h-8 w-56 animate-pulse rounded-lg bg-muted" />
            <div className="mt-2 h-4 w-80 animate-pulse rounded bg-muted" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-96 animate-pulse rounded-2xl bg-muted"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-muted-foreground">
            Failed to load recipes.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Most Loved Recipes
            </h2>

            <p className="mt-2 text-muted-foreground">
              Discover the recipes our community loves the most.
            </p>
          </div>

          <Link
            href="/recipes"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-2
              font-medium
              text-primary
            "
          >
            View All Recipes
            <ArrowRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>

        {/* Recipes */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mostLovedRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MostLovedRecipes;

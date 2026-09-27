"use client";

import RecipeCard from "@/features/recipes/components/RecipeCard";
import { useRecipes } from "@/features/recipes/hooks/useRecipes";

export default function Recipes() {
  const { data, isLoading, isError } = useRecipes();

  const recipes = data?.recipes;

  console.log(data);

  if (isLoading) {
    return (
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <div className="h-8 w-56 animate-pulse rounded-lg bg-muted" />
            <div className="mt-2 h-4 w-80 animate-pulse rounded bg-muted" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
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
            <h2 className="text-3xl font-bold tracking-tight">All Recipes</h2>

            <p className="mt-2 text-muted-foreground">
              Discover the of our recipes.
            </p>
          </div>
        </div>

        {/* Recipes */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {recipes?.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}

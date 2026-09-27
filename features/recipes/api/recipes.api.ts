import type { RecipesResponse } from "../types/recipe";

const RECIPES_API_URL = "https://dummyjson.com/recipes";

export async function getRecipes(): Promise<RecipesResponse> {
  const response = await fetch(RECIPES_API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }

  return response.json();
}

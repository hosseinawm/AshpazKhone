import type { RecipesResponse } from "../types/recipe";

const RECIPES_API_URL = "https://dummyjson.com/recipes";

export async function getRecipes(
  limit?: number,
  skip?: number,
): Promise<RecipesResponse> {
  const response = await fetch(
    `${RECIPES_API_URL}?limit=${limit}&skip=${skip}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }

  return response.json();
}

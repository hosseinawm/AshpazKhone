import Hero from "@/components/sections/Hero";
import MostLovedRecipes from "@/components/sections/MostLovedRecipes";
import RecipeCategories from "@/components/sections/RecipeCategories";
import RecipeCTA from "@/components/sections/RecipiesCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <RecipeCategories />
      <MostLovedRecipes />
      <RecipeCTA />
    </>
  );
}

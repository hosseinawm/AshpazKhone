import InfiniteRecipeList from "@/features/recipes/components/InfiniteRecipeList";

export default function Recipes() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">All Recipes</h2>

          <p className="mt-2 text-muted-foreground">
            Discover all of our recipes.
          </p>
        </div>

        <InfiniteRecipeList />
      </div>
    </section>
  );
}

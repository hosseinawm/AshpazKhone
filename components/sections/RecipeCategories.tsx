"use client";

import { recipeCategories } from "@/data/categories";
import Link from "next/link";
import Image from "next/image";

function RecipeCategories() {
  return (
    <section className="py-12 px-5 md:px-10 lg:px-13 xl:px-20">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Explore Categories</h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Find your favorite recipes by category
          </p>
        </div>
      </div>

      <div className="flex gap-3 md:gap-5 xl:gap-9 overflow-x-auto py-3 max-w-7xl m-auto">
        {recipeCategories.map((category) => (
          <Link
            key={category.slug}
            href={`/recipes?category=${category.slug}`}
            className={`
              ${category.color}
              group
              flex
              min-w-35
              shrink-0
              flex-col
              items-center
              justify-center
              gap-3
              rounded-2xl
              px-5
              py-6
              text-card-foreground
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-primary
              hover:shadow-lg
              dark:text-black
            `}
          >
            <Image
              src={category.icon}
              alt={category.name}
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-muted
                text-3xl
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />

            <span className="font-medium">{category.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default RecipeCategories;

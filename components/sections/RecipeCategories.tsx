"use client";

import { recipeCategories } from "@/data/categories";
import Link from "next/link";
import Image from "next/image";
import category from "@/public/sections/category.svg";

function RecipeCategories() {
  return (
    <section className="py-12 px-5 md:px-10 lg:px-13 xl:px-20">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={category}
              alt="Logo"
              width={40}
              height={40}
              className="dark:invert"
            />
            <h2 className="text-3xl font-bold">Explore Categories</h2>
          </div>
          <div className="px-13">
            <p className="mt-1 text-sm text-muted-foreground">
              Find your favorite recipes by category
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-3 md:gap-5 overflow-x-auto lg:overflow-hidden py-3 px-6 max-w-7xl mx-auto">
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
              px-10
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
                h-18
                w-20
                items-center
                justify-center
                rounded-full
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

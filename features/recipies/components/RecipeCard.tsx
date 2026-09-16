import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

import type { Recipe } from "../types/recipe";

interface RecipeCardProps {
  recipe: Recipe;
}

function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Card
      className="
        group
        overflow-hidden
        border-border
        bg-card
        py-0
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <Link href={`/recipes/${recipe.id}`}>
        <div className="relative aspect-4/3 overflow-hidden">
          <Image
            src={recipe.image}
            alt={recipe.name}
            fill
            className="
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
            sizes="
              (max-width: 640px) 100vw,
              (max-width: 1024px) 50vw,
              25vw
            "
          />

          <button
            type="button"
            aria-label={`Save ${recipe.name}`}
            onClick={(event) => {
              event.preventDefault();
            }}
            className="
              absolute
              right-3
              top-3
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-white/90
              text-gray-700
              shadow-sm
              backdrop-blur-sm
              transition-colors
              hover:bg-white
            "
          >
            <Heart size={18} />
          </button>
        </div>

        <CardContent className="p-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="rounded-full bg-muted px-3 py-1 text-xs">
              {recipe.cuisine}
            </span>

            <div className="flex items-center gap-1">
              <Star size={16} fill="currentColor" className="text-yellow-500" />

              <span className="text-sm font-medium">
                {recipe.rating.toFixed(1)}
              </span>
            </div>
          </div>

          <h3
            className="
              line-clamp-2
              text-lg
              font-semibold
              text-card-foreground
            "
          >
            {recipe.name}
          </h3>
        </CardContent>

        <CardFooter
          className="
            justify-between
            border-t
            border-border
            px-5
            py-4
            text-sm
            text-muted-foreground
          "
        >
          <span>{recipe.reviewCount} reviews</span>

          <span>{recipe.difficulty}</span>
        </CardFooter>
      </Link>
    </Card>
  );
}

export default RecipeCard;

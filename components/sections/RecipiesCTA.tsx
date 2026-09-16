import Link from "next/link";
import { ArrowRight, CookingPot } from "lucide-react";

function RecipeCTA() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-3xl
          bg-primary
          px-6
          py-14
          sm:px-10
          lg:px-16
        "
      >
        {/* Decorative circles */}
        <div
          className="
            absolute
            -right-20
            -top-20
            h-56
            w-56
            rounded-full
            bg-white/10
          "
        />

        <div
          className="
            absolute
            -bottom-24
            -left-16
            h-64
            w-64
            rounded-full
            bg-white/10
          "
        />

        {/* Content */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            max-w-3xl
            flex-col
            items-center
            text-center
          "
        >
          {/* Icon */}
          <div
            className="
              mb-6
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-white/15
              backdrop-blur-sm
            "
          >
            <CookingPot
              size={32}
              strokeWidth={1.8}
              className="text-primary-foreground"
            />
          </div>

          {/* Heading */}
          <h2
            className="
              max-w-2xl
              text-3xl
              font-bold
              tracking-tight
              text-primary-foreground
              sm:text-4xl
              lg:text-5xl
            "
          >
            Ready to Cook Something Delicious?
          </h2>

          {/* Description */}
          <p
            className="
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-primary-foreground/80
              sm:text-base
            "
          >
            Discover delicious recipes, find your next favorite meal, and bring
            something special to your kitchen today.
          </p>

          {/* CTA */}
          <Link
            href="/recipes"
            className="
              group
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-primary-foreground
              px-6
              py-3
              font-semibold
              text-primary
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-lg
            "
          >
            Explore Recipes
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
      </div>
    </section>
  );
}

export default RecipeCTA;

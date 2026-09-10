import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-190
        w-full
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{
        backgroundImage: "url('/sections/hero_food.webp')",
      }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-150 max-w-7xl items-center px-5 sm:px-8 lg:px-10">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Delicious Foods For A Healthier Life
          </h1>

          <p className="mt-5 max-w-lg text-base leading-7 text-white/80 sm:text-lg">
            Diverse And Delicious Recipies For Every Taste And Skill Level
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/recipies" className="button">
              See Recipies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

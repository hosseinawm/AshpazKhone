"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="
        relative
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        transition-colors
        hover:cursor-pointer
        hover:bg-gray-100
        dark:hover:bg-gray-800
      "
    >
      <Sun
        size={24}
        className="
          absolute
          text-orange-400
          opacity-0
          dark:opacity-100
        "
      />

      <Moon
        size={24}
        className="
          text-gray-700
          opacity-100
          dark:opacity-0
        "
      />
    </button>
  );
}

export default ThemeToggle;

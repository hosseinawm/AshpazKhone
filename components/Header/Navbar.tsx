"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

import {
  CookingPot,
  UserRound,
  Blender,
  House,
  Info,
  Headset,
  Menu,
  X,
} from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      href: "/",
      label: "Home",
      icon: <House size={20} />,
    },
    {
      href: "/recipes",
      label: "Recipes",
      icon: <Blender size={20} />,
    },
    {
      href: "/about",
      label: "About Us",
      icon: <Info size={20} />,
    },
    {
      href: "/contact",
      label: "Contact Us",
      icon: <Headset size={20} />,
    },
  ];

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <header className="relative z-50 flex h-16 w-full items-center justify-between px-4 shadow-xl sm:px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2 sm:gap-3">
          <CookingPot className="text-[#49762b]" size={26} />

          <span className="text-xl sm:text-2xl lg:text-3xl">AshpazKhone</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 transition-transform hover:-translate-y-1"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-4 lg:flex xl:gap-5">
          <Link href="/login" className="button">
            Login/Register
          </Link>
          <div
            className=" relative
        flex
        items-center
        h-10 w-10
        justify-center
        rounded-full
        transition-colors
        hover:cursor-pointer
        hover:bg-gray-100
        dark:hover:bg-gray-800"
          >
            <UserRound size={24} />
          </div>

          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="rounded-md p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
          aria-label="Open menu"
          aria-expanded={isOpen}
        >
          <Menu size={28} />
        </button>
      </header>

      {/* Overlay */}
      <div
        onClick={closeDrawer}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-[85%] max-w-sm flex-col bg-white text-gray-900 dark:bg-[#3d3d3d] dark:text-white p-6 shadow-2xl transition-transform duration-700 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            onClick={closeDrawer}
            className="flex items-center gap-2"
          >
            <CookingPot className="text-[#49762b]" size={26} />

            <span className="text-2xl">AshpazKhone</span>
          </Link>

          <button
            type="button"
            onClick={closeDrawer}
            className="rounded-md p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeDrawer}
              className="
    flex
    items-center
    gap-4
    rounded-lg
    px-4
    py-3
    text-lg
    text-gray-900
    transition-colors
    hover:bg-gray-100

    dark:text-white
    dark:hover:bg-[#636363]
  "
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="my-6 border-t border-gray-200 dark:border-gray-700" />

        {/* Login */}
        <Link
          href="/login"
          onClick={closeDrawer}
          className="button flex w-full items-center justify-center"
        >
          Login/Register
        </Link>

        {/* User + Theme */}
        <div
          className="
    mt-6
    flex
    items-center
    justify-between
    rounded-lg
    bg-gray-100
    p-4
    dark:bg-[#636363]
  "
        >
          <div className="flex items-center gap-3">
            <UserRound size={22} />
            <span>Account</span>
          </div>

          <ThemeToggle />
        </div>
      </aside>
    </>
  );
}

export default Navbar;

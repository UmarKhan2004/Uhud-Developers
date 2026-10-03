"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand Logo */}
        <Link href="/" className="text-2xl font-bold">
          Uhud Developers
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="hover:text-orange-500 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-orange-500 transition-colors">
            About
          </Link>
          <Link href="/services" className="hover:text-orange-500 transition-colors">
            Services
          </Link>
          <Link href="/projects" className="hover:text-orange-500 transition-colors">
            Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-xl bg-orange-500 px-4 py-2 text-white hover:bg-orange-600 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 hover:text-black focus:outline-none md:hidden"
          aria-label="Toggle Navigation Menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="flex flex-col gap-4 border-t border-gray-900 px-6 py-4 md:hidden">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-orange-500 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-orange-500 transition-colors"
          >
            About
          </Link>
          <Link
            href="/services"
            onClick={() => setIsOpen(false)}
            className="hover:text-orange-500 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/projects"
            onClick={() => setIsOpen(false)}
            className="hover:text-orange-500 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="inline-block rounded-xl bg-orange-500 px-4 py-2 text-center text-white hover:bg-orange-600 transition-colors"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
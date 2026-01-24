"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-surface-dark-lighter px-4 py-2 md:px-10 bg-background-light sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity">
        <div className="size-10 relative">
          <Image
            src="/logo-bright.png"
            alt="Bright Gym Logo"
            width={40}
            height={40}
            className="w-full h-full object-contain"
            priority
          />
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] hidden sm:block">
          Bright Gym
        </h2>
      </Link>

      {/* Desktop Navigation - Centered */}
      <div className="hidden lg:flex flex-1 justify-center">
        <div className="flex items-center gap-9">
          <Link
            className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
            href="/about"
          >
            About Us
          </Link>
          <Link
            className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
            href="/services"
          >
            Membership
          </Link>
          <Link
            className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
            href="/faq"
          >
            FAQ
          </Link>
          <Link
            className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Desktop CTA Button */}
      <div className="hidden lg:flex items-center gap-4">
        <Link
          href="/register"
          className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary text-black text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-opacity"
        >
          <span className="truncate">Join Now</span>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className="material-symbols-outlined">
          {mobileMenuOpen ? "close" : "menu"}
        </span>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`absolute top-full left-0 right-0 bg-background-light border-b border-surface-dark-lighter lg:hidden z-50 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`flex flex-col px-4 py-6 gap-4 items-center transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <Link
            className="text-white text-base font-medium hover:text-primary transition-colors py-2 text-center w-full"
            href="/"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className="text-white text-base font-medium hover:text-primary transition-colors py-2 text-center w-full"
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            className="text-white text-base font-medium hover:text-primary transition-colors py-2 text-center w-full"
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
          >
            Membership
          </Link>
          <Link
            className="text-white text-base font-medium hover:text-primary transition-colors py-2 text-center w-full"
            href="/faq"
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link
            className="text-white text-base font-medium hover:text-primary transition-colors py-2 text-center w-full"
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/register"
            className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-black text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-opacity mt-2 w-full max-w-[200px]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Join Now
          </Link>
        </div>
      </div>
    </header>
  );
}

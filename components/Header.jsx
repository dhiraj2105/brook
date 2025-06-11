"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import parentLogo from "../assets/fusion.png";
import parentLogo from "../assets/fusion-logo.webp";
import mainLogo from "../assets/BrookLogo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white/50 backdrop-blur-sm"
        }`}
    >
      <div className="mx-auto p-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Side Logos */}
          <div className="flex items-center space-x-4">
            {/* Desktop Logo */}
            <div className="hidden md:flex items-center">
              {!isScrolled ? (
                <Image
                  src={parentLogo}
                  alt="Logo"
                  width={200}
                  height={200}
                  className="w-auto h-8"
                />
              ) : (
                <Image
                  src={mainLogo}
                  alt="Scrolled Logo"
                  width={600}
                  height={600}
                  className="w-auto h-20"
                />
              )}
            </div>

            {/* Mobile Logo */}
            <div className="md:hidden flex items-center">
              {!isScrolled ? (
                <Image
                  src={parentLogo}
                  alt="Mobile Logo"
                  width={250}
                  height={250}
                  className="w-auto h-10"
                />
              ) : (
                <Image
                  src={mainLogo}
                  alt="Mobile Scrolled Logo"
                  width={300}
                  height={300}
                  className="w-auto h-16"
                />
              )}
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              {[
                ["#hero", "Home"],
                ["#about", "About"],
                ["#highlights", "Highlights"],
                ["#amenities", "Amenities"],
                ["#location", "Location"],
                ["#floorPlan", "Floor Plans"],
                ["#contact", "Contact"],
              ].map(([href, label]) => (
                <Link
                  key={label}
                  href={href}
                  className="text-black text-xl hover:text-[#F34F43] transition"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Hamburger Menu Button */}
          <div className="flex md:hidden items-center z-50">
            <button
              className="text-black focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
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
        </div>
      </div>

      {/* Full-Screen Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white z-40 transition-transform duration-500 ease-in-out transform ${mobileMenuOpen
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        {/* Padding pushes content below header */}
        <div className="flex flex-col justify-start px-6 pt-20 pb-8 space-y-6">
          {[
            ["#hero", "Home"],
            ["#about", "About"],
            ["#highlights", "Highlights"],
            ["#amenities", "Amenities"],
            ["#location", "Location"],
            ["#floorPlan", "Floor Plans"],
            ["#contact", "Contact"],
          ].map(([href, label]) => (
            <Link
              key={label}
              href={href}
              className="text-lg text-gray-800 font-medium hover:text-[#F34F43] transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

        </div>
      </div>
    </header>
  );
}

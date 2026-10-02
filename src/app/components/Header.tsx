"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          className={`text-lg font-bold tracking-wide transition-colors ${
            isScrolled ? "text-primary" : "text-white"
          }`}
        >
          Hostel Frères Houat
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#accueil"
            className={`text-sm font-medium transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-accent"
            }`}
          >
            Accueil
          </a>

          <a
            href="#hebergement"
            className={`text-sm font-medium transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-accent"
            }`}
          >
            Hébergement
          </a>

          <a
            href="#services"
            className={`text-sm font-medium transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-accent"
            }`}
          >
            Services
          </a>

          <a
            href="#contact"
            className={`text-sm font-medium transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-accent"
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Booking button */}
        <a
          href="#reservation"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
        >
          Réserver
        </a>
      </div>
    </header>
  );
}
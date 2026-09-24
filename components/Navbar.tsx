"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, Car, ShieldCheck } from "lucide-react";
import { CONFIG } from "@/lib/config";

interface NavbarProps {
  onBookClick?: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg py-2.5 border-b border-amber-500/20"
          : "bg-gradient-to-b from-slate-950/90 to-slate-900/80 backdrop-blur-sm py-4 border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Car className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl text-white tracking-tight leading-none font-sans">
                श्री काबरिया बालाजी <span className="text-amber-400 font-medium text-base">Travels</span>
              </span>
              <span className="text-[10px] sm:text-xs text-slate-300 tracking-wider uppercase font-medium mt-0.5">
                Direct Cab Booking
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("cars")}
              className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors"
            >
              Our Cars
            </button>
            <button
              onClick={() => scrollToSection("fare")}
              className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors"
            >
              Fare & Calculator
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Right side CTA & Quick Call */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${CONFIG.BUSINESS_PHONE}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{CONFIG.BUSINESS_PHONE}</span>
            </a>

            <button
              onClick={() => {
                if (onBookClick) onBookClick();
                else scrollToSection("booking");
              }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-md shadow-amber-500/25 active:scale-95 transition-all"
            >
              Book a Cab
            </button>
          </div>

          {/* Mobile Right Quick Call + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${CONFIG.BUSINESS_PHONE}`}
              className="p-2 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-400 active:scale-95 transition-transform"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white border border-slate-700"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/98 border-b border-amber-500/30 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => scrollToSection("home")}
              className="text-left py-2.5 px-3 rounded-lg text-slate-200 hover:bg-slate-800 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left py-2.5 px-3 rounded-lg text-slate-200 hover:bg-slate-800 font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("cars")}
              className="text-left py-2.5 px-3 rounded-lg text-slate-200 hover:bg-slate-800 font-medium"
            >
              Our Cars & Driver
            </button>
            <button
              onClick={() => scrollToSection("fare")}
              className="text-left py-2.5 px-3 rounded-lg text-slate-200 hover:bg-slate-800 font-medium"
            >
              Fare & Calculator
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-left py-2.5 px-3 rounded-lg text-slate-200 hover:bg-slate-800 font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left py-2.5 px-3 rounded-lg text-slate-200 hover:bg-slate-800 font-medium"
            >
              Contact
            </button>
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onBookClick) onBookClick();
                else scrollToSection("booking");
              }}
              className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-center shadow-lg shadow-amber-500/20"
            >
              Book Your Cab Now
            </button>

            <a
              href={`tel:${CONFIG.BUSINESS_PHONE}`}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-center border border-slate-700 flex items-center justify-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              Call {CONFIG.BUSINESS_PHONE}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

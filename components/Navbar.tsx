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
    window.addEventListener("scroll", handleScroll, { passive: true });
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2.5 border-b border-slate-200/90"
          : "bg-white/80 backdrop-blur-sm py-4 border-b border-slate-200/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 shadow-md shadow-amber-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <Car className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight leading-none font-sans group-hover:text-amber-600 transition-colors">
                श्री काबरिया बालाजी <span className="text-amber-600 font-bold text-base">Travels</span>
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 tracking-wider uppercase font-semibold mt-0.5">
                Direct Cab Booking
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "cars", label: "Our Cars" },
              { id: "fare", label: "Fare & Calculator" },
              { id: "how-it-works", label: "How It Works" },
              { id: "contact", label: "Contact" },
            ].map((navItem) => (
              <button
                key={navItem.id}
                onClick={() => scrollToSection(navItem.id)}
                className="text-sm font-semibold text-slate-700 hover:text-amber-600 transition-all hover:scale-105 relative py-1 group"
              >
                <span>{navItem.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Right side CTA & Quick Call */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${CONFIG.BUSINESS_PHONE}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-300 transition-all hover:scale-105"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
              <span>{CONFIG.BUSINESS_PHONE}</span>
            </a>

            <button
              onClick={() => {
                if (onBookClick) onBookClick();
                else scrollToSection("booking");
              }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm shadow-md shadow-amber-500/25 active:scale-95 transition-all duration-300 hover:scale-105"
            >
              Book a Cab
            </button>
          </div>

          {/* Mobile Right Quick Call + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${CONFIG.BUSINESS_PHONE}`}
              className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-600 active:scale-95 transition-transform"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4 animate-pulse" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-800 hover:text-black border border-slate-300 transition-transform active:scale-95"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-2xl transition-all duration-300 text-slate-900">
          <div className="flex flex-col space-y-2">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About Us" },
              { id: "cars", label: "Our Cars & Driver" },
              { id: "fare", label: "Fare & Calculator" },
              { id: "how-it-works", label: "How It Works" },
              { id: "contact", label: "Contact" },
            ].map((mItem) => (
              <button
                key={mItem.id}
                onClick={() => scrollToSection(mItem.id)}
                className="text-left py-2.5 px-3 rounded-lg text-slate-800 hover:bg-slate-100 font-semibold transition-colors"
              >
                {mItem.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onBookClick) onBookClick();
                else scrollToSection("booking");
              }}
              className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-center shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
            >
              Book Your Cab Now
            </button>

            <a
              href={`tel:${CONFIG.BUSINESS_PHONE}`}
              className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-center border border-slate-300 flex items-center justify-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              Call {CONFIG.BUSINESS_PHONE}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

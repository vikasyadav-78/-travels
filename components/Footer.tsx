"use client";

import Link from "next/link";
import { Car, Phone, MessageSquare, MapPin, ShieldCheck } from "lucide-react";
import { CONFIG } from "@/lib/config";
import ScrollReveal from "@/components/ScrollReveal";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
            
            {/* Brand Info */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-amber-500/50 shadow-md shadow-amber-500/20">
                  <img
                    src="/hanuman-logo.jpg"
                    alt="Shri Kabariya Balaji Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-lg text-white font-sans leading-none">
                    {CONFIG.BUSINESS_NAME_HI}
                  </span>
                  <span className="text-[10px] text-amber-400 font-semibold tracking-wider uppercase mt-1">
                    {CONFIG.BUSINESS_NAME_EN}
                  </span>
                </div>
              </div>

              <p className="text-xs text-amber-300 font-semibold">
                "{CONFIG.TAGLINE_HI}"
              </p>

              <p className="text-xs text-slate-400 leading-relaxed">
                Direct cab booking platform for local and outstation rides. Check transparent per-KM pricing and submit direct booking requests online or by phone.
              </p>

              <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Direct Driver Booking • No Commission</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-amber-400 transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#cars" className="hover:text-amber-400 transition-colors">Our Cars</a>
                </li>
                <li>
                  <a href="#fare" className="hover:text-amber-400 transition-colors">Fare & Calculator</a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-amber-400 transition-colors">How It Works</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-amber-400 transition-colors">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Our Services
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#services" className="hover:text-amber-400 transition-colors">Local City Cab</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-amber-400 transition-colors">Outstation Taxi</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-amber-400 transition-colors">Jaipur Airport Transfer</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-amber-400 transition-colors">Full Day Package (₹2,000/Day)</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-amber-400 transition-colors">Family Road Trips</a>
                </li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Direct Contact
              </h4>
              <div className="space-y-2 text-xs">
                <a
                  href={`tel:${CONFIG.BUSINESS_PHONE}`}
                  className="flex items-center gap-2 text-amber-400 hover:underline font-bold"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Us: {CONFIG.BUSINESS_PHONE}</span>
                </a>
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{CONFIG.LOCATION}</span>
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 {CONFIG.BUSINESS_NAME_EN}. Demo Website.</p>
          <p className="text-amber-400/80 font-medium">
            Designed for Direct Cab Driver Business
          </p>
        </div>

      </div>
    </footer>
  );
}

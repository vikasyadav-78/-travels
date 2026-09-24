"use client";

import Image from "next/image";
import { Phone, ShieldCheck, Car, ChevronRight, CheckCircle2, QrCode } from "lucide-react";
import { CONFIG } from "@/lib/config";

interface HeroProps {
  onBookClick: () => void;
  onViewCarsClick: () => void;
}

export default function Hero({ onBookClick, onViewCarsClick }: HeroProps) {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-slate-950 overflow-hidden text-white">
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1e3a8a_0%,transparent_50%)] opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Trust Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold shadow-inner">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Direct Booking • Transparent Fare • Personal Service</span>
            </div>

            {/* Main Headings */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight font-sans tracking-tight">
                अपना सफर, सीधे अपने <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                  भरोसेमंद Cab Driver
                </span>{" "}
                के साथ।
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-200">
                Book your next journey directly with{" "}
                <span className="text-amber-400 font-semibold">{CONFIG.BUSINESS_NAME_EN}</span>.
              </p>
            </div>

            {/* Supporting paragraph */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Transparent fares, driver & vehicle details available before you book, and instant direct confirmation via WhatsApp. No middleman charges.
            </p>

            {/* Trust Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>₹13/KM Starting Rate</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Fixed Day Package ₹2,000</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Driver & Car Info Shown</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onBookClick}
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-base shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 active:scale-95 transition-all group"
              >
                <span>Book Your Cab</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onViewCarsClick}
                className="px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-base border border-slate-700 flex items-center justify-center gap-2 transition-colors"
              >
                <Car className="w-5 h-5 text-amber-400" />
                <span>View Our Cars</span>
              </button>
            </div>

            {/* Call Action Note */}
            <div className="pt-2 flex items-center gap-3 text-slate-400 text-sm">
              <span>Or Call Directly:</span>
              <a
                href={`tel:${CONFIG.BUSINESS_PHONE}`}
                className="text-amber-400 font-bold hover:underline flex items-center gap-1.5 text-base"
              >
                <Phone className="w-4 h-4" />
                {CONFIG.BUSINESS_PHONE}
              </a>
            </div>

          </div>

          {/* Right Visual / Card Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800 p-4 sm:p-6 shadow-2xl overflow-hidden group">
              
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Cab Image Visual */}
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-5 border border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800"
                  alt="Shri Kabariya Balaji Travels Cab"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Floating Badge on Image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-slate-950/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-700/60">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold text-slate-200">Available For Booking</span>
                  </div>
                  <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/30">
                    RJ 14 CZ 9876
                  </span>
                </div>
              </div>

              {/* Driver & Car Quick Summary Card */}
              <div className="bg-slate-950/90 rounded-2xl p-4 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400/60 shrink-0">
                      <img
                        src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=200"
                        alt="Driver राजेश कुमार"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Rajesh Kumar (राजेश कुमार)</h4>
                      <p className="text-xs text-slate-400">10+ Years Experience • Sedan Cab</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-400">Rating</div>
                    <div className="text-xs font-bold text-amber-400">★ 4.9 / 5.0</div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
                  <span>Per KM Rate: <strong className="text-white">₹13 - ₹14</strong></span>
                  <span>Fixed Day: <strong className="text-white">₹2,000 / Day</strong></span>
                </div>
              </div>

              {/* QR Mini Banner */}
              <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-amber-500/10 to-amber-600/5 border border-amber-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <QrCode className="w-6 h-6 text-amber-400" />
                  <span className="text-xs font-medium text-slate-300">
                    Scanned Driver QR Card? <br />
                    <strong className="text-white font-bold">Direct Cab Booking Active</strong>
                  </span>
                </div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  Verified Ride
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

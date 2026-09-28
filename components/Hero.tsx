"use client";

import Image from "next/image";
import { Phone, ShieldCheck, Car, ChevronRight, CheckCircle2, QrCode, Star, Sparkles } from "lucide-react";
import { CONFIG } from "@/lib/config";
import ScrollReveal from "@/components/ScrollReveal";

interface HeroProps {
  onBookClick: () => void;
  onViewCarsClick: () => void;
}

export default function Hero({ onBookClick, onViewCarsClick }: HeroProps) {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-amber-50/70 via-slate-50 to-white overflow-hidden text-slate-900 border-b border-slate-200/80">
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Trust Pill Badge */}
            <ScrollReveal animation="fade-down" delay={100} duration={600}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300/80 text-amber-950 text-xs sm:text-sm font-bold shadow-sm backdrop-blur-sm transition-transform hover:scale-105">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 animate-bounce" />
                <span>Direct Booking • Transparent Fare • Personal Service</span>
              </div>
            </ScrollReveal>

            {/* Main Headings */}
            <div className="space-y-3">
              <ScrollReveal animation="fade-up" delay={200} duration={700}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight font-sans tracking-tight">
                  अपना सफर, सीधे अपने <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700">
                    भरोसेमंद Cab Driver
                  </span>{" "}
                  के साथ।
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={300} duration={700}>
                <p className="text-lg sm:text-xl font-semibold text-slate-700 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-500 inline shrink-0" />
                  Book your next journey directly with{" "}
                  <span className="text-amber-700 font-bold">{CONFIG.BUSINESS_NAME_EN}</span>.
                </p>
              </ScrollReveal>
            </div>

            {/* Supporting paragraph */}
            <ScrollReveal animation="fade-up" delay={400} duration={700}>
              <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
                Transparent fares, driver & vehicle details available before you book, and instant direct confirmation via WhatsApp. No middleman charges.
              </p>
            </ScrollReveal>

            {/* Trust Bullet Highlights */}
            <ScrollReveal animation="fade-up" delay={500} duration={700}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-slate-700 text-sm font-semibold p-2.5 rounded-xl bg-white/70 border border-slate-200/70 shadow-xs hover:border-amber-400 transition-colors">
                  <CheckCircle2 className="w-4.5 h-4.5 text-amber-600 shrink-0" />
                  <span>₹13/KM Starting Rate</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 text-sm font-semibold p-2.5 rounded-xl bg-white/70 border border-slate-200/70 shadow-xs hover:border-amber-400 transition-colors">
                  <CheckCircle2 className="w-4.5 h-4.5 text-amber-600 shrink-0" />
                  <span>Fixed Day Package ₹2,000</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 text-sm font-semibold p-2.5 rounded-xl bg-white/70 border border-slate-200/70 shadow-xs hover:border-amber-400 transition-colors">
                  <CheckCircle2 className="w-4.5 h-4.5 text-amber-600 shrink-0" />
                  <span>Driver & Car Info Shown</span>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal animation="fade-up" delay={600} duration={700}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button
                  onClick={onBookClick}
                  className="px-7 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-base shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 active:scale-95 transition-all duration-300 hover:scale-105 group"
                >
                  <span>Book Your Cab</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </button>

                <button
                  onClick={onViewCarsClick}
                  className="px-6 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-base border border-slate-300 shadow-sm flex items-center justify-center gap-2 transition-all duration-300 hover:border-amber-400 hover:scale-105"
                >
                  <Car className="w-5 h-5 text-amber-600" />
                  <span>View Our Cars</span>
                </button>
              </div>
            </ScrollReveal>

            {/* Call Action Note */}
            <ScrollReveal animation="fade-up" delay={700} duration={700}>
              <div className="pt-2 flex items-center gap-3 text-slate-600 text-sm">
                <span>Or Call Directly:</span>
                <a
                  href={`tel:${CONFIG.BUSINESS_PHONE}`}
                  className="text-amber-600 font-extrabold hover:underline flex items-center gap-1.5 text-base transition-transform hover:scale-105"
                >
                  <Phone className="w-4 h-4" />
                  {CONFIG.BUSINESS_PHONE}
                </a>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Visual / Card Preview */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal animation="zoom-in" delay={300} duration={800}>
              <div className="relative rounded-3xl bg-white border border-slate-200/90 p-4 sm:p-6 shadow-2xl overflow-hidden group card-hover-effect">
                
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100/50 rounded-full blur-2xl pointer-events-none" />

                {/* Cab Image Visual */}
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-5 border border-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800"
                    alt="Shri Kabariya Balaji Travels Cab"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  
                  {/* Floating Badge on Image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-slate-900/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-700/60 text-white shadow-lg">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-xs font-semibold text-slate-100">Available For Booking</span>
                    </div>
                    <span className="text-xs font-bold text-amber-400 bg-amber-500/20 px-2 py-1 rounded border border-amber-500/40">
                      RJ 14 CZ 9876
                    </span>
                  </div>
                </div>

                {/* Driver & Car Quick Summary Card */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-3 transition-colors group-hover:border-amber-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500 shrink-0 shadow transform transition-transform group-hover:scale-105">
                        <img
                          src="/driver-owner.png"
                          alt="Driver & Owner"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Bhanwar Lal Yadav (भंवर लाल यादव)</h4>
                        <p className="text-xs text-slate-600 font-medium">10+ Years Experience • Sedan Cab</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-500">Rating</div>
                      <div className="text-xs font-bold text-amber-600 flex items-center gap-1 justify-end">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        <span>4.9 / 5.0</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-700">
                    <span>Per KM Rate: <strong className="text-slate-900 font-bold">₹13 - ₹14</strong></span>
                    <span>Fixed Day: <strong className="text-slate-900 font-bold">₹2,000 / Day</strong></span>
                  </div>
                </div>

                {/* QR Mini Banner */}
                <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between transition-transform group-hover:translate-x-1">
                  <div className="flex items-center gap-2.5">
                    <QrCode className="w-6 h-6 text-amber-600 animate-bounce" />
                    <span className="text-xs font-medium text-slate-700">
                      Scanned Driver QR Card? <br />
                      <strong className="text-slate-900 font-bold">Direct Cab Booking Active</strong>
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2 py-1 rounded uppercase tracking-wider">
                    Verified Ride
                  </span>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}

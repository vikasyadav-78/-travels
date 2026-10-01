"use client";

import { QrCode, Search, Calculator, CalendarCheck, CheckCircle, ArrowRight } from "lucide-react";
import DriverCard from "./DriverCard";
import { DEFAULT_DRIVER } from "@/lib/data/drivers";
import { DEFAULT_VEHICLE } from "@/lib/data/vehicles";
import ScrollReveal from "@/components/ScrollReveal";

interface QRBookingProps {
  onBookClick: () => void;
}

export default function QRBooking({ onBookClick }: QRBookingProps) {
  const steps = [
    {
      num: "01",
      title: "Scan the QR",
      desc: "Scan the QR code on your driver's visiting card with your smartphone camera.",
      icon: QrCode,
      color: "from-amber-500 to-amber-600",
    },
    {
      num: "02",
      title: "Check Driver & Car Details",
      desc: "Instantly view driver experience, vehicle model, AC status, and registration number.",
      icon: Search,
      color: "from-blue-500 to-blue-600",
    },
    {
      num: "03",
      title: "Choose Your Fare",
      desc: "Select Per KM rate (₹13-₹14/KM) or Fixed Day Package (₹2,000/Day).",
      icon: Calculator,
      color: "from-emerald-500 to-emerald-600",
    },
    {
      num: "04",
      title: "Enter Trip Details",
      desc: "Fill pickup location, drop location, travel date, time, and passenger count.",
      icon: CalendarCheck,
      color: "from-purple-500 to-purple-600",
    },
    {
      num: "05",
      title: "Confirm Booking",
      desc: "Send booking request directly online or call driver in 1 click.",
      icon: CheckCircle,
      color: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <section id="qr-flow" className="py-20 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200/80">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold shadow-xs hover:scale-105 transition-transform">
              <QrCode className="w-4 h-4 text-amber-600 animate-pulse" />
              <span>Direct QR Booking Concept</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-sans tracking-tight">
              Scan. Book. <span className="text-amber-600">Travel.</span>
            </h2>
            
            <p className="text-slate-600 text-base sm:text-lg">
              Scan the QR code on our driver's visiting card during your ride and book your next outstation or city trip directly without app downloads or middleman fees.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 5 Step Flow */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal animation="fade-right" delay={200}>
              <h3 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                <span>How Direct QR Booking Works</span>
                <ArrowRight className="w-5 h-5 text-amber-600 animate-pulse" />
              </h3>
            </ScrollReveal>

            <div className="space-y-4">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <ScrollReveal key={step.num} animation="fade-right" delay={200 + idx * 100}>
                    <div
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-amber-50/20 transition-all duration-300 flex items-start gap-4 group shadow-sm hover:shadow-md hover:-translate-y-0.5"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-black text-lg shadow-md shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                      >
                        <Icon className="w-6 h-6 stroke-[2.2]" />
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-extrabold text-amber-600 uppercase tracking-wider">
                            Step {step.num}
                          </span>
                          <h4 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                            {step.title}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            <ScrollReveal animation="fade-up" delay={700}>
              <div className="pt-4">
                <button
                  onClick={onBookClick}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-base shadow-lg shadow-amber-500/20 active:scale-95 transition-all text-center hover:scale-105 duration-300"
                >
                  Test Direct Booking Flow Now
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Driver Card Mockup */}
          <div className="lg:col-span-5">
            <ScrollReveal animation="zoom-in" delay={400} duration={800}>
              <DriverCard driver={DEFAULT_DRIVER} vehicle={DEFAULT_VEHICLE} />
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}

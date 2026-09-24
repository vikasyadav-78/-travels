"use client";

import { QrCode, Search, Calculator, CalendarCheck, CheckCircle, ArrowRight } from "lucide-react";
import DriverCard from "./DriverCard";
import { DEFAULT_DRIVER } from "@/lib/data/drivers";
import { DEFAULT_VEHICLE } from "@/lib/data/vehicles";

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
      desc: "Send pre-filled booking request directly to WhatsApp & Google Sheets in 1 click.",
      icon: CheckCircle,
      color: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <section id="qr-flow" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold">
            <QrCode className="w-4 h-4" />
            <span>Direct QR Booking Concept</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans tracking-tight">
            Scan. Book. <span className="text-amber-400">Travel.</span>
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg">
            Scan the QR code on our driver's visiting card during your ride and book your next outstation or city trip directly without app downloads or middleman fees.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 5 Step Flow */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span>How Direct QR Booking Works</span>
              <ArrowRight className="w-5 h-5 text-amber-400" />
            </h3>

            <div className="space-y-4">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.num}
                    className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex items-start gap-4 group"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-slate-950 font-black text-lg shadow-md shrink-0 group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                          Step {step.num}
                        </span>
                        <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-base shadow-lg shadow-amber-500/20 active:scale-95 transition-all text-center"
              >
                Test Direct Booking Flow Now
              </button>
            </div>
          </div>

          {/* Right Column: Driver Card Mockup */}
          <div className="lg:col-span-5">
            <DriverCard driver={DEFAULT_DRIVER} vehicle={DEFAULT_VEHICLE} />
          </div>

        </div>
      </div>
    </section>
  );
}

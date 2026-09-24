"use client";

import { ShieldCheck, UserCheck, Calculator, MessageSquare, PhoneCall, FileText } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Calculator,
      title: "Transparent Fare Structure",
      desc: "Clear per-kilometer rates (₹13-₹14/KM) and fixed day package rates displayed upfront with zero hidden charges.",
    },
    {
      icon: UserCheck,
      title: "Direct Cab Booking",
      desc: "Connect directly with your cab driver without marketplace app fees, middleman commissions, or surge pricing.",
    },
    {
      icon: ShieldCheck,
      title: "Driver & Car Info Pre-Booking",
      desc: "Know your driver's profile, vehicle model, AC status, and registration number before starting your journey.",
    },
    {
      icon: PhoneCall,
      title: "Personal & Direct Service",
      desc: "Enjoy direct personal communication with your travel provider for special requests, itinerary updates, or luggage needs.",
    },
    {
      icon: FileText,
      title: "Easy Multi-Step Form",
      desc: "Fill in your pickup, drop, and travel details in a simple mobile-optimized online booking request form.",
    },
    {
      icon: MessageSquare,
      title: "Instant WhatsApp Confirmation",
      desc: "Receive pre-filled booking details directly on WhatsApp for fast turnarounds and direct driver chat.",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
            Why Shri Kabariya Balaji Travels
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans">
            Why Travel With Us?
          </h2>
          <p className="text-slate-300 text-base">
            We focus on honest pricing, direct relationships, and clear communication for every journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-950/80 rounded-3xl p-6 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 space-y-3 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

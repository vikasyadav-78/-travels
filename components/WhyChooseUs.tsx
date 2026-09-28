"use client";

import { ShieldCheck, UserCheck, Calculator, MessageSquare, PhoneCall, FileText } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

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
    <section id="why-us" className="py-20 bg-slate-50 text-slate-900 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block">
              Why Shri Kabariya Balaji Travels
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-sans">
              Why Travel With Us?
            </h2>
            <p className="text-slate-600 text-base">
              We focus on honest pricing, direct relationships, and clear communication for every journey.
            </p>
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} animation="zoom-in" delay={150 + idx * 80}>
                <div
                  className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-amber-400 transition-all duration-300 space-y-3 group shadow-sm hover:shadow-xl hover:-translate-y-1.5 h-full card-hover-effect"
                >
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

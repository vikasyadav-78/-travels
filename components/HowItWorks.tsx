"use client";

import { Calculator, Navigation, FileCheck, Send, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Choose Trip Package",
      desc: "Select Per KM rate or Fixed Day package option.",
      icon: Navigation,
    },
    {
      step: "02",
      title: "Estimate Your Fare",
      desc: "Use live calculator to preview instant rate & fare breakdown.",
      icon: Calculator,
    },
    {
      step: "03",
      title: "Enter Details",
      desc: "Fill pickup, drop, travel date, time & passenger count.",
      icon: FileCheck,
    },
    {
      step: "04",
      title: "Send Booking Request",
      desc: "Submit lead online or call directly for quick booking.",
      icon: Send,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white text-slate-900 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block">
              Simple Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-sans">
              Your Journey in 4 Simple Steps
            </h2>
            <p className="text-slate-600 text-base">
              No complex app signups. Quick and direct cab booking from your phone browser.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} animation="fade-up" delay={150 + idx * 100}>
                <div
                  className="bg-slate-50 rounded-3xl p-6 border border-slate-200 hover:border-amber-400 hover:bg-amber-50/20 transition-all duration-300 text-center space-y-4 group relative shadow-sm hover:shadow-xl hover:-translate-y-1.5 h-full card-hover-effect"
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <Icon className="w-7 h-7 stroke-[2.2]" />
                  </div>

                  <div className="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-amber-700 shadow-sm">
                    Step {item.step}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Final Confirmation Banner */}
        <ScrollReveal animation="zoom-in" delay={600}>
          <div className="mt-12 p-5 rounded-2xl bg-amber-50 border border-amber-300 text-center max-w-2xl mx-auto flex items-center justify-center gap-3 shadow-sm hover:scale-102 transition-transform">
            <CheckCircle2 className="w-6 h-6 text-amber-600 shrink-0 animate-bounce" />
            <span className="text-sm font-bold text-slate-900">
              Final Step: <span className="text-amber-700 font-extrabold">Driver confirms your journey directly!</span>
            </span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

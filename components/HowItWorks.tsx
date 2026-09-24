"use client";

import { QrCode, Navigation, FileCheck, Send, CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Scan QR",
      desc: "Scan QR code on visiting card or visit website link.",
      icon: QrCode,
    },
    {
      step: "02",
      title: "Choose Trip",
      desc: "Select Per KM rate or Fixed Day package option.",
      icon: Navigation,
    },
    {
      step: "03",
      title: "Enter Details",
      desc: "Fill pickup, drop, travel date, time & passenger count.",
      icon: FileCheck,
    },
    {
      step: "04",
      title: "Send Request",
      desc: "Submit lead instantly to WhatsApp & Google Sheets.",
      icon: Send,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans">
            Your Journey in 4 Simple Steps
          </h2>
          <p className="text-slate-300 text-base">
            No complex app signups. Quick and direct cab booking from your phone browser.
          </p>
        </div>

        {/* Steps Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900 rounded-3xl p-6 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 text-center space-y-4 group relative"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 stroke-[2.2]" />
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-xs font-bold text-amber-400">
                  Step {item.step}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Final Confirmation Banner */}
        <div className="mt-12 p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-500/30 text-center max-w-2xl mx-auto flex items-center justify-center gap-3">
          <CheckCircle2 className="w-6 h-6 text-amber-400 shrink-0" />
          <span className="text-sm font-bold text-white">
            Final Step: <span className="text-amber-300">Driver confirms your journey directly!</span>
          </span>
        </div>

      </div>
    </section>
  );
}

"use client";

import { ShieldCheck, HeartHandshake, UserCheck, PhoneCall, Award } from "lucide-react";
import { CONFIG } from "@/lib/config";

export default function AboutBusiness() {
  return (
    <section id="about" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
              About Our Business
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-white font-sans leading-tight">
              About <span className="text-amber-400">{CONFIG.BUSINESS_NAME_EN}</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Local travel made simple with direct booking, clear pricing, and personal service. <strong className="text-white">{CONFIG.BUSINESS_NAME_EN}</strong> ({CONFIG.BUSINESS_NAME_HI}) provides reliable cab and outstation travel services focused on direct customer relationship.
            </p>

            <p className="text-slate-300 text-base leading-relaxed">
              Instead of paying commission markups on third-party marketplace apps, scan our driver's visiting card QR code, verify vehicle and driver details directly on your phone, calculate your estimated fare, and send a direct booking request via WhatsApp.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Direct & Honest</h4>
                  <p className="text-xs text-slate-400">No hidden fees or unexpected surge multipliers.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Personal Attention</h4>
                  <p className="text-xs text-slate-400">Direct driver contact for personalized journey support.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 p-8 rounded-3xl border border-slate-800 shadow-2xl relative">
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Award className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">{CONFIG.BUSINESS_NAME_HI}</h3>
                <p className="text-xs text-amber-400 font-semibold">{CONFIG.TAGLINE_HI}</p>
                <p className="text-xs text-slate-300">{CONFIG.TAGLINE_EN}</p>
              </div>

              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-2">
                <div className="flex items-center justify-between">
                  <span>Primary Location:</span>
                  <span className="font-bold text-white">{CONFIG.LOCATION}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Booking Mode:</span>
                  <span className="font-bold text-amber-400">Direct QR & WhatsApp</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

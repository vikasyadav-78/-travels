"use client";

import { ShieldCheck, HeartHandshake, UserCheck, PhoneCall, Award } from "lucide-react";
import { CONFIG } from "@/lib/config";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutBusiness() {
  return (
    <section id="about" className="py-20 bg-white text-slate-900 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal animation="fade-right" delay={100}>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block">
                About Our Business
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-sans leading-tight mt-1">
                About <span className="text-amber-600">{CONFIG.BUSINESS_NAME_EN}</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" delay={200}>
              <p className="text-slate-600 text-base leading-relaxed">
                Local travel made simple with direct booking, clear pricing, and personal service. <strong className="text-slate-900">{CONFIG.BUSINESS_NAME_EN}</strong> ({CONFIG.BUSINESS_NAME_HI}) provides reliable cab and outstation travel services focused on direct customer relationship.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" delay={300}>
              <p className="text-slate-600 text-base leading-relaxed">
                Instead of paying commission markups on third-party marketplace apps, scan our driver's visiting card QR code, verify vehicle and driver details directly on your phone, calculate your estimated fare, and send a direct booking request via WhatsApp.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={400}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3 shadow-sm hover:border-amber-400 transition-colors">
                  <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Direct & Honest</h4>
                    <p className="text-xs text-slate-600">No hidden fees or unexpected surge multipliers.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3 shadow-sm hover:border-amber-400 transition-colors">
                  <HeartHandshake className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Personal Attention</h4>
                    <p className="text-xs text-slate-600">Direct driver contact for personalized journey support.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Visual Box */}
          <div className="lg:col-span-5">
            <ScrollReveal animation="zoom-in" delay={300} duration={800}>
              <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-slate-50 p-8 rounded-3xl border border-amber-300 shadow-xl relative hover:border-amber-400 transition-colors card-hover-effect">
                <div className="space-y-6 text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-700 animate-bounce">
                    <Award className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900">{CONFIG.BUSINESS_NAME_HI}</h3>
                    <p className="text-xs text-amber-800 font-bold">{CONFIG.TAGLINE_HI}</p>
                    <p className="text-xs text-slate-600 font-medium">{CONFIG.TAGLINE_EN}</p>
                  </div>

                  <div className="pt-4 border-t border-amber-200 text-xs text-slate-600 space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Primary Location:</span>
                      <span className="font-bold text-slate-900">{CONFIG.LOCATION}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Booking Mode:</span>
                      <span className="font-bold text-amber-700">Direct QR & WhatsApp</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import { Phone, MessageSquare, ShieldCheck, Award, Languages, MapPin, CheckCircle2 } from "lucide-react";
import { Driver } from "@/lib/data/drivers";
import { CONFIG } from "@/lib/config";
import ScrollReveal from "@/components/ScrollReveal";

interface DriverProfileProps {
  driver: Driver;
}

export default function DriverProfile({ driver }: DriverProfileProps) {
  return (
    <ScrollReveal animation="fade-up" delay={150}>
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl text-slate-900 relative overflow-hidden group card-hover-effect">
        {/* Decorative Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-100/40 rounded-full blur-2xl pointer-events-none" />

        {/* Trust Badge */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
              Verified Cab Driver Profile
            </span>
            <h3 className="text-2xl font-black text-slate-900 mt-1">Your Driver</h3>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-xs font-bold text-slate-700 hover:border-amber-400 transition-colors">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{driver.verifiedStatus}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Photo Avatar */}
          <div className="md:col-span-4 flex flex-col items-center text-center">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-amber-500 shadow-xl mb-3 group-hover:scale-105 transition-transform duration-500">
              <img
                src={driver.photoUrl}
                alt={driver.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-2 right-2 bg-emerald-500 text-slate-950 p-1 rounded-full shadow-md animate-bounce">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <h4 className="text-lg font-extrabold text-slate-900">{driver.name}</h4>
            <p className="text-xs text-amber-700 font-bold">{driver.nameHindi}</p>
            <div className="mt-2 text-xs text-slate-600 font-medium flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              <span>{driver.location}</span>
            </div>
          </div>

          {/* Details Column */}
          <div className="md:col-span-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 hover:border-amber-300 hover:bg-amber-50/20 transition-colors">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>Driving Experience</span>
                </div>
                <p className="text-sm font-extrabold text-slate-900">{driver.experience}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 hover:border-amber-300 hover:bg-amber-50/20 transition-colors">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                  <Languages className="w-4 h-4 text-amber-600" />
                  <span>Languages Spoken</span>
                </div>
                <p className="text-sm font-extrabold text-slate-900">{driver.languages.join(" • ")}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 hover:border-amber-300 hover:bg-amber-50/20 transition-colors">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                  <Phone className="w-4 h-4 text-amber-600" />
                  <span>Driver Contact</span>
                </div>
                <p className="text-sm font-extrabold text-amber-700">{driver.phone}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 hover:border-amber-300 hover:bg-amber-50/20 transition-colors">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Customer Rating</span>
                </div>
                <p className="text-sm font-extrabold text-emerald-700">
                  ★ {driver.rating} / 5.0 ({driver.totalTrips} Rides)
                </p>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`tel:${driver.phone}`}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm shadow-md flex items-center justify-center gap-2 active:scale-95 transition-all hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4 text-slate-950" />
                <span>Call Driver Directly ({driver.phone})</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

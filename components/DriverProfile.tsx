"use client";

import { Phone, MessageSquare, ShieldCheck, Award, Languages, MapPin, CheckCircle2 } from "lucide-react";
import { Driver } from "@/lib/data/drivers";
import { CONFIG } from "@/lib/config";

interface DriverProfileProps {
  driver: Driver;
}

export default function DriverProfile({ driver }: DriverProfileProps) {
  const whatsappUrl = `https://wa.me/${driver.whatsapp}?text=${encodeURIComponent(
    `Hello ${driver.name}, I scanned your Shri Kabariya Balaji Travels card and want to inquire about a cab ride.`
  )}`;

  return (
    <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl text-white relative overflow-hidden group">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Trust Badge */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            Verified Cab Driver Profile
          </span>
          <h3 className="text-2xl font-bold text-white mt-1">Your Driver</h3>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>{driver.verifiedStatus}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Photo Avatar */}
        <div className="md:col-span-4 flex flex-col items-center text-center">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-xl mb-3">
            <img
              src={driver.photoUrl}
              alt={driver.name}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-2 right-2 bg-emerald-500 text-slate-950 p-1 rounded-full">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <h4 className="text-lg font-bold text-white">{driver.name}</h4>
          <p className="text-xs text-amber-400 font-medium">{driver.nameHindi}</p>
          <div className="mt-2 text-xs text-slate-400 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>{driver.location}</span>
          </div>
        </div>

        {/* Details Column */}
        <div className="md:col-span-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Driving Experience</span>
              </div>
              <p className="text-sm font-bold text-white">{driver.experience}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                <Languages className="w-4 h-4 text-amber-400" />
                <span>Languages Spoken</span>
              </div>
              <p className="text-sm font-bold text-white">{driver.languages.join(" • ")}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Driver Contact</span>
              </div>
              <p className="text-sm font-bold text-amber-400">{driver.phone}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Customer Rating</span>
              </div>
              <p className="text-sm font-bold text-emerald-400">
                ★ {driver.rating} / 5.0 ({driver.totalTrips} Rides)
              </p>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={`tel:${driver.phone}`}
              className="flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Driver</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Driver</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

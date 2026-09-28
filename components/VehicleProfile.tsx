"use client";

import { Car, Users, Wind, Luggage, Fuel, ShieldCheck, Check } from "lucide-react";
import { Vehicle } from "@/lib/data/vehicles";
import ScrollReveal from "@/components/ScrollReveal";

interface VehicleProfileProps {
  vehicle: Vehicle;
}

export default function VehicleProfile({ vehicle }: VehicleProfileProps) {
  return (
    <ScrollReveal animation="fade-up" delay={250}>
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl text-slate-900 relative overflow-hidden group card-hover-effect">
        {/* Decorative Glow */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-blue-100/40 rounded-full blur-2xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
              Vehicle Specification
            </span>
            <h3 className="text-2xl font-black text-slate-900 mt-1">Your Ride</h3>
          </div>
          <div className="px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs sm:text-sm font-mono font-extrabold tracking-wider transition-transform group-hover:scale-105">
            {vehicle.regNumber}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Car Image Visual */}
          <div className="md:col-span-6 relative">
            <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-lg group">
              <img
                src={vehicle.imageUrl}
                alt={vehicle.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              
              <div className="absolute bottom-3 left-3 bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-2 text-xs font-bold text-slate-100 shadow-md">
                <Car className="w-4 h-4 text-amber-400" />
                <span>{vehicle.name}</span>
              </div>
            </div>
          </div>

          {/* Vehicle Spec Grid */}
          <div className="md:col-span-6 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-300 hover:bg-amber-50/20 transition-colors">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold mb-1">
                  <Users className="w-4 h-4 text-amber-600" />
                  <span>Seating Capacity</span>
                </div>
                <div className="text-sm font-extrabold text-slate-900">{vehicle.seating}</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-300 hover:bg-amber-50/20 transition-colors">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold mb-1">
                  <Wind className="w-4 h-4 text-amber-600" />
                  <span>Air Conditioning</span>
                </div>
                <div className="text-sm font-extrabold text-slate-900">{vehicle.acStatus}</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-300 hover:bg-amber-50/20 transition-colors">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold mb-1">
                  <Luggage className="w-4 h-4 text-amber-600" />
                  <span>Luggage Space</span>
                </div>
                <div className="text-sm font-extrabold text-slate-900">{vehicle.luggageCapacity}</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-300 hover:bg-amber-50/20 transition-colors">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold mb-1">
                  <Fuel className="w-4 h-4 text-amber-600" />
                  <span>Fuel Type</span>
                </div>
                <div className="text-sm font-extrabold text-slate-900">{vehicle.fuelType}</div>
              </div>

            </div>

            {/* Features bullet list */}
            <div className="space-y-1.5 pt-2">
              <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider block mb-2">
                Vehicle Highlights
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {vehicle.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <div className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-amber-700" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

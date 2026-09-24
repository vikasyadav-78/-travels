"use client";

import { Car, Users, Wind, Luggage, Fuel, ShieldCheck, Check } from "lucide-react";
import { Vehicle } from "@/lib/data/vehicles";

interface VehicleProfileProps {
  vehicle: Vehicle;
}

export default function VehicleProfile({ vehicle }: VehicleProfileProps) {
  return (
    <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl text-white relative overflow-hidden group">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            Vehicle Specification
          </span>
          <h3 className="text-2xl font-bold text-white mt-1">Your Ride</h3>
        </div>
        <div className="px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-mono font-extrabold tracking-wider">
          {vehicle.regNumber}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Car Image Visual */}
        <div className="md:col-span-6 relative">
          <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden border border-slate-800 shadow-lg">
            <img
              src={vehicle.imageUrl}
              alt={vehicle.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            
            <div className="absolute bottom-3 left-3 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-2 text-xs font-bold text-slate-200">
              <Car className="w-4 h-4 text-amber-400" />
              <span>{vehicle.name}</span>
            </div>
          </div>
        </div>

        {/* Vehicle Spec Grid */}
        <div className="md:col-span-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                <Users className="w-4 h-4 text-amber-400" />
                <span>Seating Capacity</span>
              </div>
              <div className="text-sm font-bold text-white">{vehicle.seating}</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                <Wind className="w-4 h-4 text-amber-400" />
                <span>Air Conditioning</span>
              </div>
              <div className="text-sm font-bold text-white">{vehicle.acStatus}</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                <Luggage className="w-4 h-4 text-amber-400" />
                <span>Luggage Space</span>
              </div>
              <div className="text-sm font-bold text-white">{vehicle.luggageCapacity}</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                <Fuel className="w-4 h-4 text-amber-400" />
                <span>Fuel Type</span>
              </div>
              <div className="text-sm font-bold text-white">{vehicle.fuelType}</div>
            </div>

          </div>

          {/* Features bullet list */}
          <div className="space-y-1.5 pt-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
              Vehicle Highlights
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {vehicle.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                  <div className="w-4 h-4 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-amber-400" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

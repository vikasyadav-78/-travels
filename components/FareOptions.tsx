"use client";

import { Check, ShieldAlert, Sparkles, Navigation, Calendar } from "lucide-react";
import { TripType } from "@/lib/fareCalculator";
import ScrollReveal from "@/components/ScrollReveal";

interface FareOptionsProps {
  selectedType: TripType;
  onSelectType: (type: TripType) => void;
}

export default function FareOptions({ selectedType, onSelectType }: FareOptionsProps) {
  return (
    <div className="space-y-6">
      <ScrollReveal animation="fade-up" delay={100}>
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-sans">
            Simple & Transparent Pricing Options
          </h3>
          <p className="text-slate-600 text-sm sm:text-base">
            No hidden surge charges or commission fees. Choose the plan that fits your travel plans best.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Option 1: Per Kilometer */}
        <ScrollReveal animation="fade-right" delay={200}>
          <div
            onClick={() => onSelectType("per_km")}
            className={`relative rounded-3xl p-6 sm:p-8 cursor-pointer transition-all duration-300 border-2 hover:-translate-y-1 ${
              selectedType === "per_km"
                ? "bg-amber-50/40 border-amber-500 shadow-xl shadow-amber-500/10 ring-2 ring-amber-400/20"
                : "bg-slate-50 border-slate-200 hover:border-slate-300"
            }`}
          >
            {selectedType === "per_km" && (
              <div className="absolute top-4 right-4 bg-amber-500 text-slate-950 p-1.5 rounded-full shadow-md animate-bounce">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
            )}

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600">
                <Navigation className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-amber-700 uppercase tracking-wider block">
                  Option 01
                </span>
                <h4 className="text-xl font-bold text-slate-900">Per Kilometer Fare</h4>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
              Ideal for standard point-to-point journeys, outstation trips, and highway travel.
            </p>

            <div className="space-y-3 bg-white p-4 rounded-2xl border border-slate-200/80 mb-6 shadow-sm">
              <div className="flex items-center justify-between text-sm py-1 border-b border-slate-100">
                <span className="text-slate-600 font-medium">Up to 250 KM:</span>
                <span className="font-black text-amber-600 text-base">₹13 / KM</span>
              </div>
              <div className="flex items-center justify-between text-sm py-1">
                <span className="text-slate-600 font-medium">Above 250 KM:</span>
                <span className="font-black text-amber-600 text-base">₹14 / KM</span>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Full distance charged at ₹14/KM if trip exceeds 250 KM</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span>Toll Tax & Parking: Customer Responsibility</span>
              </div>
            </div>

            <button
              type="button"
              className={`w-full mt-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                selectedType === "per_km"
                  ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                  : "bg-slate-200 text-slate-800 hover:bg-slate-300"
              }`}
            >
              {selectedType === "per_km" ? "Selected (Per KM)" : "Choose Per KM Fare"}
            </button>
          </div>
        </ScrollReveal>

        {/* Option 2: Fixed Day Package */}
        <ScrollReveal animation="fade-left" delay={300}>
          <div
            onClick={() => onSelectType("fixed_day")}
            className={`relative rounded-3xl p-6 sm:p-8 cursor-pointer transition-all duration-300 border-2 hover:-translate-y-1 ${
              selectedType === "fixed_day"
                ? "bg-blue-50/40 border-amber-500 shadow-xl shadow-amber-500/10 ring-2 ring-amber-400/20"
                : "bg-slate-50 border-slate-200 hover:border-slate-300"
            }`}
          >
            {selectedType === "fixed_day" && (
              <div className="absolute top-4 right-4 bg-amber-500 text-slate-950 p-1.5 rounded-full shadow-md animate-bounce">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
            )}

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-600">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-blue-700 uppercase tracking-wider block">
                  Option 02
                </span>
                <h4 className="text-xl font-bold text-slate-900">Fixed Day Package</h4>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
              Perfect for full-day city tours, multiple stops, wedding functions, or multi-day travel.
            </p>

            <div className="space-y-3 bg-white p-4 rounded-2xl border border-slate-200/80 mb-6 text-center shadow-sm">
              <div className="text-xs text-slate-500 uppercase font-bold">Fixed Cab & Driver Charge</div>
              <div className="text-3xl font-black text-amber-600">₹2,000 <span className="text-sm font-medium text-slate-500">/ Day</span></div>
            </div>

            <div className="space-y-2 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Includes Dedicated Vehicle & Experienced Driver</span>
              </div>
              <div className="flex items-center gap-2 text-amber-800 font-semibold">
                <ShieldAlert className="w-4 h-4 shrink-0 text-amber-600" />
                <span>Customer responsibility: Fuel, Toll & Parking</span>
              </div>
            </div>

            <div className="mt-3 p-2.5 rounded-xl bg-slate-100 text-[11px] text-slate-600 border border-slate-200 italic">
              * Final trip terms and daily usage limits will be confirmed before booking.
            </div>

            <button
              type="button"
              className={`w-full mt-4 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                selectedType === "fixed_day"
                  ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                  : "bg-slate-200 text-slate-800 hover:bg-slate-300"
              }`}
            >
              {selectedType === "fixed_day" ? "Selected (Fixed Day)" : "Choose Fixed Day Package"}
            </button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

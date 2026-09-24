"use client";

import { useState } from "react";
import { Calculator, Info, ShieldAlert, Sparkles, Navigation, Calendar } from "lucide-react";
import { calculateFare, TripType } from "@/lib/fareCalculator";

interface FareCalculatorProps {
  initialTripType?: TripType;
  onApplyToBooking?: (tripType: TripType, distanceKm: number, numberOfDays: number) => void;
}

export default function FareCalculator({
  initialTripType = "per_km",
  onApplyToBooking,
}: FareCalculatorProps) {
  const [tripType, setTripType] = useState<TripType>(initialTripType);
  const [distanceKm, setDistanceKm] = useState<number>(270);
  const [numberOfDays, setNumberOfDays] = useState<number>(2);

  const fareResult = calculateFare({
    tripType,
    distanceKm,
    numberOfDays,
  });

  return (
    <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-6">
        <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-extrabold text-white">Live Fare Calculator</h3>
          <p className="text-xs text-slate-400">Calculate estimated cost instantly</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Trip Type Selector Pills */}
          <div>
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
              Select Trip Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setTripType("per_km")}
                className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border transition-all ${
                  tripType === "per_km"
                    ? "bg-amber-500 text-slate-950 border-amber-400 shadow-md"
                    : "bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700"
                }`}
              >
                <Navigation className="w-4 h-4" />
                <span>Per Kilometer</span>
              </button>

              <button
                type="button"
                onClick={() => setTripType("fixed_day")}
                className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border transition-all ${
                  tripType === "fixed_day"
                    ? "bg-amber-500 text-slate-950 border-amber-400 shadow-md"
                    : "bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700"
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Fixed Day Package</span>
              </button>
            </div>
          </div>

          {/* Dynamic Slider/Input depending on type */}
          {tripType === "per_km" ? (
            <div className="space-y-4 bg-slate-950/80 p-5 rounded-2xl border border-slate-800">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-slate-200">
                  Estimated Distance (KM):
                </label>
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    min="1"
                    max="3000"
                    value={distanceKm}
                    onChange={(e) => setDistanceKm(Math.max(1, parseInt(e.target.value) || 0))}
                    className="w-24 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-right font-mono font-bold text-amber-400 focus:outline-none focus:border-amber-500 text-base"
                  />
                  <span className="text-sm font-bold text-slate-400">KM</span>
                </div>
              </div>

              {/* Slider Input */}
              <input
                type="range"
                min="20"
                max="1000"
                step="5"
                value={distanceKm}
                onChange={(e) => setDistanceKm(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />

              {/* Rate Info Banner */}
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Rate Rule:</span>
                <span className="font-semibold text-slate-200">
                  {distanceKm <= 250 ? (
                    <span className="text-emerald-400">Up to 250 KM @ ₹13/KM</span>
                  ) : (
                    <span className="text-amber-400">Above 250 KM @ ₹14/KM (Full Distance)</span>
                  )}
                </span>
              </div>
            </div>
          ) : (
            <div className="space-y-4 bg-slate-950/80 p-5 rounded-2xl border border-slate-800">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-slate-200">
                  Number of Days:
                </label>
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    min="1"
                    max="30"
                    value={numberOfDays}
                    onChange={(e) => setNumberOfDays(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-right font-mono font-bold text-amber-400 focus:outline-none focus:border-amber-500 text-base"
                  />
                  <span className="text-sm font-bold text-slate-400">Day(s)</span>
                </div>
              </div>

              {/* Stepper Buttons */}
              <div className="flex items-center gap-2">
                {[1, 2, 3, 5, 7].map((days) => (
                  <button
                    key={days}
                    type="button"
                    onClick={() => setNumberOfDays(days)}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold border transition-colors ${
                      numberOfDays === days
                        ? "bg-amber-500 text-slate-950 border-amber-400"
                        : "bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800"
                    }`}
                  >
                    {days} {days === 1 ? "Day" : "Days"}
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Right Fare Summary Result Box */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 rounded-2xl border-2 border-amber-500/40 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Estimated Total Fare
            </span>
            <span className="text-xs font-extrabold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
              {fareResult.rateFormatted}
            </span>
          </div>

          <div className="text-4xl font-black text-amber-400 font-sans tracking-tight">
            {fareResult.estimatedFareFormatted}
          </div>

          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1 text-xs text-slate-300">
            <div className="flex items-center justify-between text-slate-400">
              <span>Calculation:</span>
              <span className="font-mono text-white font-bold">{fareResult.breakdownText}</span>
            </div>
          </div>

          {/* Disclaimer Note */}
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-[11px] text-amber-200/90 space-y-1">
            <div className="font-bold flex items-center gap-1.5 text-amber-300">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Additional Charges Notice:</span>
            </div>
            <p className="leading-relaxed">
              {fareResult.additionalChargesNote}
            </p>
          </div>

          {onApplyToBooking && (
            <button
              type="button"
              onClick={() => onApplyToBooking(tripType, distanceKm, numberOfDays)}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/20 active:scale-95 transition-all text-center"
            >
              Book With This Estimate
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

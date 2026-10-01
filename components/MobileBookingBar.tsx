"use client";

import { Phone, Car } from "lucide-react";
import { CONFIG } from "@/lib/config";

interface MobileBookingBarProps {
  onBookClick: () => void;
}

export default function MobileBookingBar({ onBookClick }: MobileBookingBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-2xl transition-all duration-300">
      <div className="max-w-md mx-auto grid grid-cols-12 gap-2 items-center">
        
        {/* Call Button */}
        <a
          href={`tel:${CONFIG.BUSINESS_PHONE}`}
          className="col-span-5 py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>Call Us</span>
        </a>

        {/* Book Cab Main CTA */}
        <button
          onClick={onBookClick}
          className="col-span-7 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/25 active:scale-95 transition-all hover:scale-[1.02]"
        >
          <Car className="w-4 h-4 stroke-[2.5]" />
          <span>Book Cab Now</span>
        </button>

      </div>
    </div>
  );
}

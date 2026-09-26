"use client";

import { QrCode, Phone, MessageSquare, Globe, ShieldCheck } from "lucide-react";
import { CONFIG } from "@/lib/config";
import { Driver } from "@/lib/data/drivers";
import { Vehicle } from "@/lib/data/vehicles";

interface DriverCardProps {
  driver: Driver;
  vehicle: Vehicle;
}

export default function DriverCard({ driver, vehicle }: DriverCardProps) {
  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="text-center space-y-1">
        <h4 className="text-sm font-bold text-amber-400 uppercase tracking-widest">
          Driver Visiting Card Demo
        </h4>
        <p className="text-xs text-slate-400">
          This card is given to passengers to scan and book directly next time.
        </p>
      </div>

      {/* Front Side of Card */}
      <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 p-6 border-2 border-amber-500/40 shadow-2xl text-white overflow-hidden">
        {/* Subtle decorative watermark */}
        <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />
        
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div>
            <h3 className="font-extrabold text-base text-white">
              {CONFIG.BUSINESS_NAME_HI}
            </h3>
            <p className="text-[11px] text-amber-400 font-medium">
              {CONFIG.BUSINESS_NAME_EN}
            </p>
          </div>
          <span className="text-[10px] font-bold uppercase bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded border border-amber-500/30">
            Direct Cab Booking
          </span>
        </div>

        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-7 space-y-2">
            <p className="text-xs text-slate-300 italic">
              "{CONFIG.TAGLINE_HI}"
            </p>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-1.5 text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Transparent Fare</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>No Middleman Commission</span>
              </div>
            </div>
            <div className="pt-2 text-[11px] font-semibold text-amber-400">
              Scan QR code to check estimated fare & book!
            </div>
          </div>

          {/* QR Code Container */}
          <div className="col-span-5 bg-white p-3 rounded-xl shadow-lg flex flex-col items-center justify-center text-center">
            {/* SVG QR Code Illustration */}
            <div className="w-20 h-20 bg-slate-950 p-1.5 rounded flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full fill-white"
                aria-label="QR Code Demo"
              >
                <path d="M0 0h35v35H0zM10 10h15v15H10zM65 0h35v35H65zM75 10h15v15H75zM0 65h35v35H0zM10 75h15v15H10zM40 5h10v10H40zM50 20h10v10H50zM40 35h20v10H40zM70 45h25v10H70zM40 60h10v20H40zM55 70h15v10H55zM80 65h15v30H80zM60 85h15v10H60z" />
              </svg>
            </div>
            <span className="text-[9px] font-extrabold text-slate-900 mt-1 uppercase tracking-tight">
              Scan To Book
            </span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] text-slate-400 flex items-center justify-between">
          <span>Card Side: FRONT</span>
          <span className="text-amber-400">Scan QR Code With Any Camera App</span>
        </div>
      </div>

      {/* Back Side of Card */}
      <div className="relative rounded-2xl bg-slate-900 p-6 border border-slate-800 shadow-xl text-white">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-400 shrink-0">
              <img
                src={driver.photoUrl}
                alt={driver.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">{driver.name}</h4>
              <p className="text-[11px] text-slate-400">{driver.experience}</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[11px] font-mono font-bold bg-slate-800 px-2 py-1 rounded text-amber-400 border border-slate-700">
              {vehicle.regNumber}
            </span>
          </div>
        </div>

        <div className="space-y-2 text-xs text-slate-300">
          <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
            <span className="text-slate-400">Vehicle:</span>
            <span className="font-semibold text-white">{vehicle.name}</span>
          </div>
          <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
            <span className="text-slate-400 flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-amber-400" /> Phone:
            </span>
            <span className="font-bold text-amber-400">{driver.phone}</span>
          </div>
          <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
            <span className="text-slate-400 flex items-center gap-1">
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp:
            </span>
            <span className="font-bold text-emerald-400">+{driver.whatsapp}</span>
          </div>
          <div className="flex items-center justify-between py-1">
            <span className="text-slate-400 flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-blue-400" /> Website:
            </span>
            <span className="text-slate-300 font-mono text-[11px]">shrikabariyabalajitravels.com</span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
          <span>Card Side: BACK</span>
          <span className="text-slate-300 font-medium">Keep this card for direct ride bookings</span>
        </div>
      </div>
    </div>
  );
}

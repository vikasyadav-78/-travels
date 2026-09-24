"use client";

import { CheckCircle2, Phone, MessageSquare, RotateCcw, Calendar, MapPin, Clock, ShieldCheck } from "lucide-react";
import { BookingPayload, openWhatsAppBooking } from "@/lib/whatsapp";
import { CONFIG } from "@/lib/config";

interface BookingSuccessProps {
  booking: BookingPayload;
  onReset: () => void;
}

export default function BookingSuccess({ booking, onReset }: BookingSuccessProps) {
  return (
    <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 border-2 border-emerald-500/50 shadow-2xl text-white text-center space-y-6 relative overflow-hidden animate-in zoom-in-95 duration-300">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Success Icon */}
      <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-500/20">
        <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
      </div>

      {/* Heading */}
      <div className="space-y-2">
        <h3 className="text-2xl sm:text-4xl font-black text-white font-sans">
          Booking Request Received
        </h3>
        <p className="text-lg font-bold text-amber-400 font-sans">
          आपकी Booking Request प्राप्त हो गई है।
        </p>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto pt-1">
          Our team / driver will contact you shortly on <strong className="text-white">{booking.mobile}</strong> to confirm vehicle availability and journey details.
        </p>
      </div>

      {/* Booking Summary Card */}
      <div className="max-w-md mx-auto bg-slate-950 p-5 rounded-2xl border border-slate-800 text-left space-y-3">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs text-slate-400 block">Customer Name</span>
            <span className="font-bold text-white text-sm">{booking.customerName}</span>
          </div>
          <div className="text-right">
            <span className="text-xs text-slate-400 block">Estimated Fare</span>
            <span className="font-black text-amber-400 text-lg">{booking.fareResult.estimatedFareFormatted}</span>
          </div>
        </div>

        <div className="space-y-2 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <span><strong>Pickup:</strong> {booking.pickupLocation}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
            <span><strong>Drop:</strong> {booking.dropLocation}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-blue-400 shrink-0" />
            <span><strong>Date & Time:</strong> {booking.travelDate} @ {booking.pickupTime}</span>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-800 text-[11px] text-amber-300">
          * Final booking status will be confirmed after driver confirmation.
        </div>
      </div>

      {/* Direct Contact Buttons */}
      <div className="max-w-md mx-auto pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <button
          onClick={() => openWhatsAppBooking(booking)}
          className="flex-1 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Booking</span>
        </button>

        <a
          href={`tel:${CONFIG.BUSINESS_PHONE}`}
          className="flex-1 py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 flex items-center justify-center gap-2 active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>Call Us Now</span>
        </a>
      </div>

      <div className="pt-2">
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Submit Another Booking Request</span>
        </button>
      </div>

    </div>
  );
}

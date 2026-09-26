"use client";

import { Phone, MessageSquare, MapPin, Mail, Clock, ArrowRight } from "lucide-react";
import { CONFIG } from "@/lib/config";

interface ContactProps {
  onBookClick: () => void;
}

export default function Contact({ onBookClick }: ContactProps) {
  const whatsappUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello Shri Kabariya Balaji Travels, I would like to inquire about booking a cab.`
  )}`;

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Call Actions */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
              Quick Direct Contact
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-white font-sans leading-tight">
              Need a Cab? <br />
              <span className="text-amber-400">Let's Talk Directly.</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Have an urgent pickup or want to ask about custom outstation routes? Call or WhatsApp us directly anytime.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Call Business Owner / Driver:</span>
                  <a
                    href={`tel:${CONFIG.BUSINESS_PHONE}`}
                    className="text-lg font-bold text-amber-400 hover:underline"
                  >
                    {CONFIG.BUSINESS_PHONE}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">WhatsApp Contact:</span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-emerald-400 hover:underline"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Business Location:</span>
                  <span className="text-base font-bold text-white">{CONFIG.LOCATION}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Email Address:</span>
                  <a
                    href={`mailto:${CONFIG.BUSINESS_EMAIL}`}
                    className="text-sm font-bold text-slate-200 hover:text-amber-400"
                  >
                    {CONFIG.BUSINESS_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: CTA Prompt Box */}
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 sm:p-10 rounded-3xl border-2 border-amber-500/40 shadow-2xl text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Clock className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white font-sans">
                Ready To Book Your Ride?
              </h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Fill out our quick 3-step booking form to compute your fare and send an instant WhatsApp booking request.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-base shadow-xl shadow-amber-500/25 inline-flex items-center justify-center gap-2 active:scale-95 transition-all"
              >
                <span>Book Your Journey Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

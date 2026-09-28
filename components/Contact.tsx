"use client";

import { Phone, MessageSquare, MapPin, Mail, Clock, ArrowRight } from "lucide-react";
import { CONFIG } from "@/lib/config";
import ScrollReveal from "@/components/ScrollReveal";

interface ContactProps {
  onBookClick: () => void;
}

export default function Contact({ onBookClick }: ContactProps) {
  const whatsappUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello Shri Kabariya Balaji Travels, I would like to inquire about booking a cab.`
  )}`;

  return (
    <section id="contact" className="py-20 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Call Actions */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal animation="fade-right" delay={100}>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block">
                Quick Direct Contact
              </span>

              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 font-sans leading-tight mt-1">
                Need a Cab? <br />
                <span className="text-amber-600">Let's Talk Directly.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" delay={200}>
              <p className="text-slate-600 text-base leading-relaxed">
                Have an urgent pickup or want to ask about custom outstation routes? Call or WhatsApp us directly anytime.
              </p>
            </ScrollReveal>

            <div className="space-y-4 pt-2">
              <ScrollReveal animation="fade-right" delay={300}>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-4 shadow-sm hover:border-amber-400 transition-all hover:scale-[1.02]">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 shrink-0">
                    <Phone className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Call Business Owner / Driver:</span>
                    <a
                      href={`tel:${CONFIG.BUSINESS_PHONE}`}
                      className="text-lg font-extrabold text-amber-700 hover:underline"
                    >
                      {CONFIG.BUSINESS_PHONE}
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-right" delay={400}>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-4 shadow-sm hover:border-emerald-400 transition-all hover:scale-[1.02]">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">WhatsApp Contact:</span>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-extrabold text-emerald-700 hover:underline"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-right" delay={500}>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-4 shadow-sm hover:border-blue-400 transition-all hover:scale-[1.02]">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-600 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Business Location:</span>
                    <span className="text-base font-bold text-slate-900">{CONFIG.LOCATION}</span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-right" delay={600}>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-4 shadow-sm hover:border-purple-400 transition-all hover:scale-[1.02]">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-600 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Email Address:</span>
                    <a
                      href={`mailto:${CONFIG.BUSINESS_EMAIL}`}
                      className="text-sm font-bold text-slate-800 hover:text-amber-600"
                    >
                      {CONFIG.BUSINESS_EMAIL}
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Column: CTA Prompt Box */}
          <div className="lg:col-span-6">
            <ScrollReveal animation="zoom-in" delay={300} duration={800}>
              <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 sm:p-10 rounded-3xl border-2 border-amber-500/40 shadow-2xl text-center space-y-6 text-white hover:border-amber-400 transition-colors card-hover-effect">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 animate-bounce">
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
                    className="w-full sm:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-base shadow-xl shadow-amber-500/25 inline-flex items-center justify-center gap-2 active:scale-95 transition-all duration-300 hover:scale-105"
                  >
                    <span>Book Your Journey Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}

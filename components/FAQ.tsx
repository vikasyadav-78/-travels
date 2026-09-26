"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How can I book a cab?",
      a: "Scan the QR code on your driver's visiting card, select your preferred trip type (Per KM or Fixed Day), enter your pickup/drop details, and submit the booking request. You can send the lead directly on WhatsApp for instant confirmation.",
    },
    {
      q: "What is the per-kilometre rate?",
      a: "For journeys up to 250 KM, the rate is ₹13/KM. For journeys above 250 KM, the entire distance is calculated at ₹14/KM.",
    },
    {
      q: "Is toll included in the calculated fare?",
      a: "No. State toll taxes, expressway fees, and parking charges are customer responsibility and will be paid actuals during the trip.",
    },
    {
      q: "What is the fixed-day package?",
      a: "The fixed-day cab charge is ₹2,000 per day. Fuel/running expenses, toll tax, and parking remain customer responsibility. Final trip terms and daily usage limits are confirmed before booking.",
    },
    {
      q: "Is the fare displayed on the calculator final?",
      a: "The displayed amount is an estimated fare based on standard distance inputs. Final trip details, route preferences, and exact pickup locations are confirmed directly by the travel provider.",
    },
    {
      q: "Can I contact the driver directly?",
      a: "Yes! Driver contact phone numbers and direct WhatsApp links are provided on the website profile for clear personal communication.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white font-sans">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-sm">
            Everything you need to know about our rates, policies, and booking process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full py-4 px-6 text-left font-bold text-sm sm:text-base text-white flex items-center justify-between gap-4 hover:text-amber-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

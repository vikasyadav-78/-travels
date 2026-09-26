"use client";

import { Quote, Star, Info } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul M.",
      location: "Jaipur Passenger",
      text: "Booking directly was simple and the driver details were available before the trip.",
      rating: 5,
    },
    {
      name: "Neha S.",
      location: "Outstation Traveler",
      text: "The pricing was easy to understand and the WhatsApp booking was convenient.",
      rating: 5,
    },
    {
      name: "Amit K.",
      location: "Business Traveler",
      text: "Very convenient way to book a cab directly for an outstation trip.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-xs font-semibold">
            <Info className="w-3.5 h-3.5 text-amber-400" />
            <span>Fictional Demo Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white font-sans">
            What Our Customers Say
          </h2>
          <p className="text-slate-300 text-sm">
            Read demo feedback on direct QR cab booking experience.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-slate-950 p-6 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-4 shadow-xl relative"
            >
              <Quote className="w-8 h-8 text-amber-500/20" />

              <p className="text-slate-300 text-sm italic leading-relaxed">
                "{rev.text}"
              </p>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                  <span className="text-xs text-slate-400">{rev.location}</span>
                </div>
                <div className="flex items-center gap-0.5 text-amber-400 text-xs font-bold">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Disclaimer */}
        <div className="mt-8 text-center text-xs text-slate-300 italic">
          * Note: The testimonials shown above are fictional demo representations for client presentation purposes.
        </div>

      </div>
    </section>
  );
}

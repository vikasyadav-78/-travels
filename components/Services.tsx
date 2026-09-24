"use client";

import { Car, MapPin, Plane, Calendar, HeartHandshake, Briefcase, ChevronRight } from "lucide-react";

interface ServicesProps {
  onBookClick: () => void;
}

export default function Services({ onBookClick }: ServicesProps) {
  const services = [
    {
      icon: Car,
      title: "Local Cab Service",
      desc: "Comfortable and convenient cab service for city travel, shopping trips, and local errands.",
      highlight: "City Rides",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: MapPin,
      title: "Outstation Travel",
      desc: "Intercity taxi bookings across Rajasthan and North India with transparent per-kilometer pricing.",
      highlight: "Intercity Cab",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Plane,
      title: "Airport Transfer",
      desc: "Punctual pickup and drop service for Jaipur International Airport (JAI) and nearby airports.",
      highlight: "Airport Taxi",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Calendar,
      title: "Full Day Cab Package",
      desc: "Fixed-day rental option for full day city sightseeing, multiple stops, or full day work.",
      highlight: "₹2,000 / Day",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: HeartHandshake,
      title: "Family Travel",
      desc: "Spacious, clean, and family-friendly rides with dedicated legroom and courteous driving.",
      highlight: "Family Rides",
      color: "from-red-500 to-amber-600",
    },
    {
      icon: Briefcase,
      title: "Business Travel",
      desc: "Reliable travel for professional client visits, corporate meetings, and business trips.",
      highlight: "Executive Rides",
      color: "from-slate-600 to-slate-800",
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
            Our Travel Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans">
            Cab Services Tailored For You
          </h2>
          <p className="text-slate-300 text-base">
            From quick city drops to full-day outstation road trips, book directly with Shri Kabariya Balaji Travels.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900 rounded-3xl p-6 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${svc.color} flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                      {svc.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                </div>

                <button
                  onClick={onBookClick}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-200 hover:text-amber-400 text-xs font-bold border border-slate-800 flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Book This Service</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

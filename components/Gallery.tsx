"use client";

import { useState } from "react";
import { Image as ImageIcon, Camera } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Gallery() {
  const images = [
    {
      title: "Clean Sedan Exterior",
      category: "Cab Fleet",
      url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Spotless Interior & AC",
      category: "Car Comfort",
      url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Jaipur - Delhi Highway Drive",
      category: "Outstation",
      url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Hawa Mahal & Jaipur Sightseeing",
      category: "Local Tour",
      url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Jaipur Airport Pickup Service",
      category: "Airport Transfer",
      url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Comfortable Family Road Trip",
      category: "Family Travel",
      url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Cab Fleet", "Outstation", "Airport Transfer", "Family Travel"];

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-slate-50 text-slate-900 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block">
              Visual Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-sans">
              Travel & Fleet Gallery
            </h2>
            <p className="text-slate-600 text-sm">
              Take a look at our clean cars, comfortable seats, and memorable road trip moments.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Pills */}
        <ScrollReveal animation="fade-down" delay={150}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 hover:scale-105 ${
                  activeCategory === cat
                    ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 scale-105"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => (
            <ScrollReveal key={idx} animation="zoom-in" delay={150 + idx * 80}>
              <div
                className="relative h-64 rounded-2xl overflow-hidden border border-slate-200 group shadow-md hover:shadow-xl transition-all duration-500 card-hover-effect"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30 inline-block mb-1">
                    {img.category}
                  </span>
                  <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                    {img.title}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

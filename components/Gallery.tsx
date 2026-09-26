"use client";

import { useState } from "react";
import { Image as ImageIcon, Camera } from "lucide-react";

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
    <section id="gallery" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
            Visual Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-sans">
            Travel & Fleet Gallery
          </h2>
          <p className="text-slate-300 text-sm">
            Take a look at our clean cars, comfortable seats, and memorable road trip moments.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat
                  ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                  : "bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              className="relative h-64 rounded-2xl overflow-hidden border border-slate-800 group shadow-lg"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 inline-block mb-1">
                  {img.category}
                </span>
                <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                  {img.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

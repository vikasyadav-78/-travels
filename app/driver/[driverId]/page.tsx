"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import TravelIntro from "@/components/TravelIntro";
import Navbar from "@/components/Navbar";
import DriverProfile from "@/components/DriverProfile";
import VehicleProfile from "@/components/VehicleProfile";
import FareCalculator from "@/components/FareCalculator";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import MobileBookingBar from "@/components/MobileBookingBar";
import { DRIVERS } from "@/lib/data/drivers";
import { VEHICLES } from "@/lib/data/vehicles";
import { QrCode, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface DriverPageProps {
  params: Promise<{
    driverId: string;
  }>;
}

export default function DriverPage({ params }: DriverPageProps) {
  const resolvedParams = use(params);
  const driverId = resolvedParams.driverId;

  const driver = DRIVERS[driverId];

  if (!driver) {
    notFound();
  }

  const vehicle = VEHICLES[driver.vehicleId] || VEHICLES["veh-dzire-01"];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative">
      <TravelIntro onComplete={() => {}} />

      <Navbar onBookClick={() => scrollToSection("booking")} />

      {/* Driver-Specific Dedicated Header */}
      <section className="pt-28 pb-12 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Shri Kabariya Balaji Travels Home</span>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
                <QrCode className="w-4 h-4" />
                <span>Driver-Specific Direct Booking Page</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white">
                Book Ride With {driver.name}
              </h1>
              <p className="text-slate-300 text-sm">
                Vehicle: <strong className="text-white">{vehicle.name}</strong> ({vehicle.regNumber})
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                <span className="text-slate-400 block">Rating</span>
                <span className="text-sm font-bold text-amber-400">★ {driver.rating} / 5.0</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                <span className="text-slate-400 block">Location</span>
                <span className="text-sm font-bold text-white">{driver.location}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Driver & Vehicle Profiles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <DriverProfile driver={driver} />
          <VehicleProfile vehicle={vehicle} />
        </div>
      </section>

      {/* Live Calculator & Booking Form */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Calculate & Book Direct
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Instant fare estimation and WhatsApp lead submission
            </p>
          </div>

          <FareCalculator />

          <div id="booking">
            <BookingForm driver={driver} vehicle={vehicle} />
          </div>
        </div>
      </section>

      <Footer />
      <MobileBookingBar onBookClick={() => scrollToSection("booking")} />
    </main>
  );
}

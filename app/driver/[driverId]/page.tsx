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
import ScrollProgressBar from "@/components/ScrollProgressBar";
import ScrollReveal from "@/components/ScrollReveal";
import { DRIVERS } from "@/lib/data/drivers";
import { VEHICLES } from "@/lib/data/vehicles";
import { ShieldCheck, ArrowLeft } from "lucide-react";
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
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col relative">
      <ScrollProgressBar />
      <TravelIntro onComplete={() => {}} />

      <Navbar onBookClick={() => scrollToSection("booking")} />

      {/* Driver-Specific Dedicated Header */}
      <section className="pt-28 pb-12 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal animation="fade-down" delay={100}>
            <div className="mb-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-extrabold text-amber-700 hover:text-amber-800 transition-colors hover:scale-105"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Shri Kabariya Balaji Travels Home</span>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold">
                  <ShieldCheck className="w-4 h-4 text-amber-600 animate-pulse" />
                  <span>Driver-Specific Direct Booking Page</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
                  Book Ride With {driver.name}
                </h1>
                <p className="text-slate-600 text-sm font-medium">
                  Vehicle: <strong className="text-slate-900 font-bold">{vehicle.name}</strong> ({vehicle.regNumber})
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                  <span className="text-slate-500 block font-medium">Rating</span>
                  <span className="text-sm font-extrabold text-amber-600">★ {driver.rating} / 5.0</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                  <span className="text-slate-500 block font-medium">Location</span>
                  <span className="text-sm font-extrabold text-slate-900">{driver.location}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

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
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Calculate & Book Direct
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm font-medium">
                Instant fare estimation and direct booking request submission
              </p>
            </div>
          </ScrollReveal>

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

"use client";

import { useState } from "react";
import TravelIntro from "@/components/TravelIntro";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QRBooking from "@/components/QRBooking";
import DriverProfile from "@/components/DriverProfile";
import VehicleProfile from "@/components/VehicleProfile";
import FareOptions from "@/components/FareOptions";
import FareCalculator from "@/components/FareCalculator";
import BookingForm from "@/components/BookingForm";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Gallery from "@/components/Gallery";
import AboutBusiness from "@/components/AboutBusiness";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileBookingBar from "@/components/MobileBookingBar";

import { DEFAULT_DRIVER } from "@/lib/data/drivers";
import { DEFAULT_VEHICLE } from "@/lib/data/vehicles";
import { TripType } from "@/lib/fareCalculator";

export default function Home() {
  const [selectedTripType, setSelectedTripType] = useState<TripType>("per_km");
  const [calculatedKm, setCalculatedKm] = useState<number>(270);
  const [calculatedDays, setCalculatedDays] = useState<number>(2);
  const [introCompleted, setIntroCompleted] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleApplyFareToBooking = (type: TripType, km: number, days: number) => {
    setSelectedTripType(type);
    setCalculatedKm(km);
    setCalculatedDays(days);
    scrollToSection("booking");
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative">
      {/* Cinematic Intro Animation Overlay */}
      <TravelIntro onComplete={() => setIntroCompleted(true)} />

      {/* Main Website Content */}
      <Navbar onBookClick={() => scrollToSection("booking")} />

      {/* Hero Section */}
      <Hero
        onBookClick={() => scrollToSection("booking")}
        onViewCarsClick={() => scrollToSection("cars")}
      />

      {/* QR Code Concept Section */}
      <QRBooking onBookClick={() => scrollToSection("booking")} />

      {/* Driver & Car Details Section */}
      <section id="cars" className="py-20 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
              Verified Ride Profile
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans">
              Driver & Vehicle Details
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Know exactly who will drive you and what car you'll be riding in before placing a booking.
            </p>
          </div>

          <DriverProfile driver={DEFAULT_DRIVER} />
          <VehicleProfile vehicle={DEFAULT_VEHICLE} />
        </div>
      </section>

      {/* Fare & Calculator Section */}
      <section id="fare" className="py-20 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FareOptions
            selectedType={selectedTripType}
            onSelectType={(type) => {
              setSelectedTripType(type);
              scrollToSection("fare-calculator");
            }}
          />

          <div id="fare-calculator" className="pt-4">
            <FareCalculator
              initialTripType={selectedTripType}
              onApplyToBooking={handleApplyFareToBooking}
            />
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking-section" className="py-20 bg-slate-950 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingForm
            driver={DEFAULT_DRIVER}
            vehicle={DEFAULT_VEHICLE}
            preselectedTripType={selectedTripType}
            preselectedDistance={calculatedKm}
            preselectedDays={calculatedDays}
          />
        </div>
      </section>

      {/* Services Section */}
      <Services onBookClick={() => scrollToSection("booking")} />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* How It Works */}
      <HowItWorks />

      {/* Gallery */}
      <Gallery />

      {/* About Business */}
      <AboutBusiness />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Contact Section */}
      <Contact onBookClick={() => scrollToSection("booking")} />

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Booking Bar */}
      <MobileBookingBar onBookClick={() => scrollToSection("booking")} />
    </main>
  );
}

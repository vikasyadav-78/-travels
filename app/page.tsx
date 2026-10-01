"use client";

import { useState, useEffect } from "react";
import TravelIntro from "@/components/TravelIntro";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DriverProfile from "@/components/DriverProfile";
import VehicleProfile from "@/components/VehicleProfile";
import FareOptions from "@/components/FareOptions";
import FareCalculator from "@/components/FareCalculator";
import BookingForm from "@/components/BookingForm";
import BookingModal from "@/components/BookingModal";
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
import ScrollProgressBar from "@/components/ScrollProgressBar";
import ScrollReveal from "@/components/ScrollReveal";

import { DEFAULT_DRIVER } from "@/lib/data/drivers";
import { DEFAULT_VEHICLE } from "@/lib/data/vehicles";
import { TripType } from "@/lib/fareCalculator";

export default function Home() {
  const [selectedTripType, setSelectedTripType] = useState<TripType>("per_km");
  const [calculatedKm, setCalculatedKm] = useState<number>(270);
  const [calculatedDays, setCalculatedDays] = useState<number>(2);
  const [introCompleted, setIntroCompleted] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Automatically open Booking Popup Modal shortly after vehicle intro animation completes
  useEffect(() => {
    if (introCompleted) {
      const timer = setTimeout(() => {
        setIsBookingModalOpen(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [introCompleted]);

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

  const openBookingModal = (tripType?: TripType, km?: number, days?: number) => {
    if (tripType) setSelectedTripType(tripType);
    if (km) setCalculatedKm(km);
    if (days) setCalculatedDays(days);
    setIsBookingModalOpen(true);
  };

  const handleApplyFareToBooking = (type: TripType, km: number, days: number) => {
    openBookingModal(type, km, days);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col relative">
      {/* Scroll Progress Bar & Floating Top Button */}
      <ScrollProgressBar />

      {/* Cinematic Intro Animation Overlay */}
      <TravelIntro onComplete={() => setIntroCompleted(true)} />

      {/* Main Website Content */}
      <Navbar onBookClick={() => openBookingModal()} />

      {/* Hero Section */}
      <Hero
        onBookClick={() => openBookingModal()}
        onViewCarsClick={() => scrollToSection("cars")}
      />

      {/* Driver & Car Details Section */}
      <section id="cars" className="py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block">
                Verified Ride Profile
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-sans">
                Driver & Vehicle Details
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Know exactly who will drive you and what car you'll be riding in before placing a booking.
              </p>
            </div>
          </ScrollReveal>

          <DriverProfile driver={DEFAULT_DRIVER} />
          <VehicleProfile vehicle={DEFAULT_VEHICLE} />
        </div>
      </section>

      {/* Fare & Calculator Section */}
      <section id="fare" className="py-20 bg-white relative border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FareOptions
            selectedType={selectedTripType}
            onSelectType={(type) => {
              setSelectedTripType(type);
              openBookingModal(type);
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
      <section id="booking-section" className="py-20 bg-slate-50 relative">
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
      <Services onBookClick={() => openBookingModal()} />

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
      <Contact onBookClick={() => openBookingModal()} />

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Booking Bar */}
      <MobileBookingBar onBookClick={() => openBookingModal()} />

      {/* Popup Modal for Instant Booking */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialTripType={selectedTripType}
        initialDistance={calculatedKm}
        initialDays={calculatedDays}
      />
    </main>
  );
}

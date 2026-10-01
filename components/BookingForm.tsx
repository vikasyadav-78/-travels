"use client";

import { useState } from "react";
import {
  User,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Users,
  Navigation,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles
} from "lucide-react";
import { TripType, calculateFare, FareCalculationResult } from "@/lib/fareCalculator";
import { BookingPayload } from "@/lib/whatsapp";
import { submitBookingToGoogleSheets } from "@/lib/googleSheets";
import BookingSuccess from "./BookingSuccess";
import { Driver } from "@/lib/data/drivers";
import { Vehicle } from "@/lib/data/vehicles";
import ScrollReveal from "@/components/ScrollReveal";

interface BookingFormProps {
  driver?: Driver;
  vehicle?: Vehicle;
  preselectedTripType?: TripType;
  preselectedDistance?: number;
  preselectedDays?: number;
}

export default function BookingForm({
  driver,
  vehicle,
  preselectedTripType = "per_km",
  preselectedDistance = 270,
  preselectedDays = 2,
}: BookingFormProps) {
  // Step state
  const [step, setStep] = useState<number>(1);

  // Form Fields
  const [tripType, setTripType] = useState<TripType>(preselectedTripType);
  const [customerName, setCustomerName] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [pickupLocation, setPickupLocation] = useState<string>("");
  const [dropLocation, setDropLocation] = useState<string>("");
  const [travelDate, setTravelDate] = useState<string>("");
  const [pickupTime, setPickupTime] = useState<string>("06:00 AM");
  const [passengers, setPassengers] = useState<number>(4);
  const [distanceKm, setDistanceKm] = useState<number>(preselectedDistance);
  const [numberOfDays, setNumberOfDays] = useState<number>(preselectedDays);

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [bookingSubmittedPayload, setBookingSubmittedPayload] = useState<BookingPayload | null>(null);

  // Live fare calculation
  const fareResult: FareCalculationResult = calculateFare({
    tripType,
    distanceKm,
    numberOfDays,
  });

  // Step 2 Validation Logic
  const validateStep2 = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!customerName.trim()) {
      newErrors.customerName = "Please enter your name (कृपया नाम दर्ज करें)";
    }
    if (!mobile.trim() || mobile.replace(/[^0-9]/g, "").length < 10) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number (कृपया 10 अंकों का मोबाइल नंबर दर्ज करें)";
    }
    if (!pickupLocation.trim()) {
      newErrors.pickupLocation = "Please enter pickup location (कृपया Pickup Location दर्ज करें)";
    }
    if (!dropLocation.trim()) {
      newErrors.dropLocation = "Please enter drop location (कृपया Drop Location दर्ज करें)";
    }
    if (!travelDate) {
      newErrors.travelDate = "Please select travel date (कृपया यात्रा की तारीख चुनें)";
    }
    if (!pickupTime) {
      newErrors.pickupTime = "Please select pickup time (कृपया समय दर्ज करें)";
    }
    if (tripType === "per_km" && (!distanceKm || distanceKm <= 0)) {
      newErrors.distanceKm = "Please enter estimated distance in KM (कृपया किमी दर्ज करें)";
    }
    if (tripType === "fixed_day" && (!numberOfDays || numberOfDays <= 0)) {
      newErrors.numberOfDays = "Please select number of days (कृपया दिनों की संख्या दर्ज करें)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (validateStep2()) {
        setStep(3);
      }
    }
  };

  const handlePrevStep = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmitBooking = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep2()) {
      setStep(2);
      return;
    }

    setIsSubmitting(true);

    const payload: BookingPayload = {
      customerName,
      mobile,
      pickupLocation,
      dropLocation,
      travelDate,
      pickupTime,
      passengers,
      fareResult,
      driverName: driver?.name,
      vehicleName: vehicle?.name,
      vehicleNumber: vehicle?.regNumber,
    };

    // Submit to Google Sheets API / Webhook
    await submitBookingToGoogleSheets(payload);

    setIsSubmitting(false);
    setBookingSubmittedPayload(payload);
  };

  if (bookingSubmittedPayload) {
    return (
      <BookingSuccess
        booking={bookingSubmittedPayload}
        onReset={() => {
          setBookingSubmittedPayload(null);
          setStep(1);
        }}
      />
    );
  }

  return (
    <ScrollReveal animation="fade-up" delay={150}>
      <div id="booking" className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-500/40 shadow-2xl text-slate-900 relative card-hover-effect">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-5 mb-6 gap-4">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block">
              Direct Cab Booking System
            </span>
            <h3 className="text-2xl font-black text-slate-900 font-sans mt-0.5">
              Book Your Journey
            </h3>
          </div>

          {/* Step Progress Indicator */}
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                  step === s
                    ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 scale-105"
                    : step > s
                    ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                    : "bg-slate-100 text-slate-500 border border-slate-300"
                }`}
              >
                <span>Step {s}</span>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmitBooking}>
          
          {/* STEP 1: CHOOSE YOUR TRIP */}
          {step === 1 && (
            <div className="space-y-6 transition-all duration-300">
              <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 text-xs font-black flex items-center justify-center">
                  1
                </span>
                <span>Choose Your Trip Option</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Option 1 Pill */}
                <div
                  onClick={() => setTripType("per_km")}
                  className={`p-5 rounded-2xl cursor-pointer border-2 transition-all duration-300 hover:scale-[1.02] ${
                    tripType === "per_km"
                      ? "bg-amber-50/50 border-amber-500 shadow-md ring-1 ring-amber-400/30"
                      : "bg-slate-50 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-slate-900">Option 1: Per Kilometer</span>
                    <div className="w-5 h-5 rounded-full border border-amber-500 flex items-center justify-center">
                      {tripType === "per_km" && <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />}
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 mb-3">₹13/KM (up to 250 KM) • ₹14/KM (above 250 KM)</p>
                  <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2 py-1 rounded">
                    Best for point-to-point trips
                  </span>
                </div>

                {/* Option 2 Pill */}
                <div
                  onClick={() => setTripType("fixed_day")}
                  className={`p-5 rounded-2xl cursor-pointer border-2 transition-all duration-300 hover:scale-[1.02] ${
                    tripType === "fixed_day"
                      ? "bg-amber-50/50 border-amber-500 shadow-md ring-1 ring-amber-400/30"
                      : "bg-slate-50 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-slate-900">Option 2: Fixed Day Package</span>
                    <div className="w-5 h-5 rounded-full border border-amber-500 flex items-center justify-center">
                      {tripType === "fixed_day" && <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />}
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 mb-3">₹2,000 / Day (Cab & Driver Charge)</p>
                  <span className="text-[11px] font-bold text-blue-800 bg-blue-100 px-2 py-1 rounded">
                    Best for full day / multiple stops
                  </span>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 transition-all hover:scale-105"
                >
                  <span>Continue to Journey Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: JOURNEY DETAILS */}
          {step === 2 && (
            <div className="space-y-6 transition-all duration-300">
              <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 text-xs font-black flex items-center justify-center">
                  2
                </span>
                <span>Enter Journey Details</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Customer Name */}
                <div>
                  <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block mb-1.5">
                    Customer Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder="e.g. Vikas Yadav"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors ${
                        errors.customerName ? "border-red-500" : "border-slate-300"
                      }`}
                    />
                  </div>
                  {errors.customerName && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.customerName}
                    </p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block mb-1.5">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      maxLength={10}
                      placeholder="e.g. 98290XXXXX"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value.replace(/[^0-9]/g, "").slice(0, 10))}
                      className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors ${
                        errors.mobile ? "border-red-500" : "border-slate-300"
                      }`}
                    />
                  </div>
                  {errors.mobile && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.mobile}
                    </p>
                  )}
                </div>

                {/* Pickup Location */}
                <div>
                  <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block mb-1.5">
                    Pickup Location *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-amber-600 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder="e.g. Jaipur Railway Station"
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors ${
                        errors.pickupLocation ? "border-red-500" : "border-slate-300"
                      }`}
                    />
                  </div>
                  {errors.pickupLocation && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.pickupLocation}
                    </p>
                  )}
                </div>

                {/* Drop Location */}
                <div>
                  <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block mb-1.5">
                    Drop Location *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-emerald-600 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder="e.g. Delhi IGI Airport T3"
                      value={dropLocation}
                      onChange={(e) => setDropLocation(e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors ${
                        errors.dropLocation ? "border-red-500" : "border-slate-300"
                      }`}
                    />
                  </div>
                  {errors.dropLocation && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.dropLocation}
                    </p>
                  )}
                </div>

                {/* Popular Route Quick Fill Chips */}
                <div className="sm:col-span-2 bg-amber-50/60 p-3 rounded-xl border border-amber-200">
                  <span className="text-[11px] font-extrabold text-amber-900 uppercase tracking-wider block mb-1.5">
                    ⚡ Quick Fill Popular Routes (1-Click Auto Fill):
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { name: "Khatu Shyam Ji", pickup: "Jaipur City / Railway Station", drop: "Khatu Shyam Ji Temple", km: 80 },
                      { name: "Salasar Balaji", pickup: "Jaipur City", drop: "Salasar Balaji Temple", km: 170 },
                      { name: "Ajmer & Pushkar", pickup: "Jaipur City", drop: "Pushkar & Ajmer Dargah", km: 135 },
                      { name: "Delhi Airport Drop", pickup: "Jaipur City", drop: "Delhi IGI Airport T3", km: 270 },
                    ].map((route) => (
                      <button
                        key={route.name}
                        type="button"
                        onClick={() => {
                          setPickupLocation(route.pickup);
                          setDropLocation(route.drop);
                          setDistanceKm(route.km);
                          setTripType("per_km");
                        }}
                        className="text-xs px-2.5 py-1 rounded-lg bg-white hover:bg-amber-100 text-slate-800 hover:text-amber-900 border border-amber-300 font-semibold shadow-2xs transition-all hover:scale-102"
                      >
                        📍 {route.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Travel Date */}
                <div>
                  <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block mb-1.5">
                    Travel Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors ${
                        errors.travelDate ? "border-red-500" : "border-slate-300"
                      }`}
                    />
                  </div>
                  {errors.travelDate && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.travelDate}
                    </p>
                  )}
                </div>

                {/* Pickup Time Select Dropdown */}
                <div>
                  <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block mb-1.5">
                    Pickup Time *
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-amber-600 absolute left-3.5 top-3.5 pointer-events-none z-10" />
                    <select
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className={`w-full pl-10 pr-8 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors cursor-pointer ${
                        errors.pickupTime ? "border-red-500" : "border-slate-300"
                      }`}
                    >
                      {[
                        "04:00 AM (Early Morning)",
                        "04:30 AM",
                        "05:00 AM",
                        "05:30 AM",
                        "06:00 AM",
                        "06:30 AM",
                        "07:00 AM",
                        "07:30 AM",
                        "08:00 AM",
                        "08:30 AM",
                        "09:00 AM",
                        "09:30 AM",
                        "10:00 AM",
                        "10:30 AM",
                        "11:00 AM",
                        "11:30 AM",
                        "12:00 PM (Noon)",
                        "12:30 PM",
                        "01:00 PM",
                        "01:30 PM",
                        "02:00 PM",
                        "02:30 PM",
                        "03:00 PM",
                        "03:30 PM",
                        "04:00 PM",
                        "04:30 PM",
                        "05:00 PM",
                        "05:30 PM",
                        "06:00 PM",
                        "06:30 PM",
                        "07:00 PM",
                        "07:30 PM",
                        "08:00 PM",
                        "08:30 PM",
                        "09:00 PM",
                        "09:30 PM",
                        "10:00 PM",
                        "10:30 PM",
                        "11:00 PM",
                        "11:30 PM",
                        "12:00 AM (Midnight)",
                      ].map((t) => (
                        <option key={t} value={t}>
                          ⏰ {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.pickupTime && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.pickupTime}
                    </p>
                  )}
                </div>

                {/* Number of Passengers */}
                <div>
                  <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block mb-1.5">
                    Passengers
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <select
                      value={passengers}
                      onChange={(e) => setPassengers(parseInt(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors"
                    >
                      <option value={1}>1 Person</option>
                      <option value={2}>2 Persons</option>
                      <option value={3}>3 Persons</option>
                      <option value={4}>4 Persons (Full Sedan)</option>
                      <option value={5}>5 Persons (SUV Request)</option>
                      <option value={6}>6 Persons (Full SUV)</option>
                    </select>
                  </div>
                </div>

                {/* Distance or Days field depending on option */}
                {tripType === "per_km" ? (
                  <div>
                    <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block mb-1.5">
                      Estimated Distance (KM) *
                    </label>
                    <div className="relative">
                      <Navigation className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      <input
                        type="number"
                        min="1"
                        placeholder="e.g. 270"
                        value={distanceKm}
                        onChange={(e) => setDistanceKm(parseInt(e.target.value) || 0)}
                        className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors ${
                          errors.distanceKm ? "border-red-500" : "border-slate-300"
                        }`}
                      />
                    </div>
                    {errors.distanceKm && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.distanceKm}
                      </p>
                    )}
                  </div>
                ) : (
                  <div>
                    <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block mb-1.5">
                      Number of Days *
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      <input
                        type="number"
                        min="1"
                        placeholder="e.g. 2"
                        value={numberOfDays}
                        onChange={(e) => setNumberOfDays(parseInt(e.target.value) || 1)}
                        className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors ${
                          errors.numberOfDays ? "border-red-500" : "border-slate-300"
                        }`}
                      />
                    </div>
                    {errors.numberOfDays && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.numberOfDays}
                      </p>
                    )}
                  </div>
                )}

              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm flex items-center gap-2 border border-slate-300 transition-all hover:scale-105"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 transition-all hover:scale-105"
                >
                  <span>View Fare Summary</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: FARE SUMMARY & CONFIRMATION */}
          {step === 3 && (
            <div className="space-y-6 transition-all duration-300">
              <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 text-xs font-black flex items-center justify-center">
                  3
                </span>
                <span>Review Fare Summary & Send Request</span>
              </h4>

              {/* Summary Box */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-500 block font-medium">Customer Name:</span>
                    <span className="font-bold text-slate-900 text-sm">{customerName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block font-medium">Mobile Number:</span>
                    <span className="font-bold text-amber-700 text-sm">{mobile}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block font-medium">Pickup Location:</span>
                    <span className="font-semibold text-slate-900">{pickupLocation}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block font-medium">Drop Location:</span>
                    <span className="font-semibold text-slate-900">{dropLocation}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block font-medium">Date & Time:</span>
                    <span className="font-semibold text-slate-900">{travelDate} @ {pickupTime}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block font-medium">Trip Type:</span>
                    <span className="font-bold text-amber-700">
                      {tripType === "per_km" ? `Per KM (${distanceKm} KM)` : `Fixed Day (${numberOfDays} Days)`}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-600 block">Applicable Rate: {fareResult.rateFormatted}</span>
                    <span className="text-xs font-bold text-slate-700">Calculation: {fareResult.breakdownText}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-500 block uppercase font-bold">Estimated Fare</span>
                    <span className="text-3xl font-black text-amber-600 animate-pulse">{fareResult.estimatedFareFormatted}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-amber-100/80 border border-amber-300 text-xs text-amber-900">
                  <strong>Notice:</strong> {fareResult.additionalChargesNote}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm flex items-center gap-2 border border-slate-300 transition-all hover:scale-105"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Edit Details</span>
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-600 text-white font-black text-base shadow-xl shadow-emerald-600/25 flex items-center gap-2 active:scale-95 transition-all duration-300 hover:scale-105 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Processing Request...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Send Booking Request</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

        </form>
      </div>
    </ScrollReveal>
  );
}

"use client";

import { useState, useEffect } from "react";
import {
  X,
  Phone,
  MessageSquare,
  User,
  MapPin,
  Calendar,
  Clock,
  Users,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Car,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { CONFIG } from "@/lib/config";
import { TripType, calculateFare, FareCalculationResult } from "@/lib/fareCalculator";
import { BookingPayload, openWhatsAppBooking } from "@/lib/whatsapp";
import { submitBookingToGoogleSheets } from "@/lib/googleSheets";
import { DEFAULT_DRIVER } from "@/lib/data/drivers";
import { DEFAULT_VEHICLE } from "@/lib/data/vehicles";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTripType?: TripType;
  initialDistance?: number;
  initialDays?: number;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialTripType = "per_km",
  initialDistance = 270,
  initialDays = 2,
}: BookingModalProps) {
  // Form state
  const [tripType, setTripType] = useState<TripType>(initialTripType);
  const [customerName, setCustomerName] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [pickupLocation, setPickupLocation] = useState<string>("");
  const [dropLocation, setDropLocation] = useState<string>("");
  const [travelDate, setTravelDate] = useState<string>("");
  const [pickupTime, setPickupTime] = useState<string>("06:00 AM");
  const [passengers, setPassengers] = useState<number>(4);
  const [distanceKm, setDistanceKm] = useState<number>(initialDistance);
  const [numberOfDays, setNumberOfDays] = useState<number>(initialDays);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  // Sync initial values on open
  useEffect(() => {
    if (isOpen) {
      setTripType(initialTripType);
      setDistanceKm(initialDistance);
      setNumberOfDays(initialDays);
      setErrors({});
      setIsSuccess(false);
      // Lock scroll
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, initialTripType, initialDistance, initialDays]);

  // ESC key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const fareResult: FareCalculationResult = calculateFare({
    tripType,
    distanceKm,
    numberOfDays,
  });

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!customerName.trim()) {
      newErrors.customerName = "कृपया अपना नाम दर्ज करें (Enter Name)";
    }
    if (!mobile.trim() || mobile.replace(/[^0-9]/g, "").length < 10) {
      newErrors.mobile = "कृपया 10 अंकों का मोबाइल नंबर दर्ज करें (Enter 10-digit Mobile)";
    }
    if (!pickupLocation.trim()) {
      newErrors.pickupLocation = "कृपया Pickup Location दर्ज करें";
    }
    if (!dropLocation.trim()) {
      newErrors.dropLocation = "कृपया Drop Location दर्ज करें";
    }
    if (!travelDate) {
      newErrors.travelDate = "कृपया तारीख दर्ज करें (Select Date)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

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
      driverName: DEFAULT_DRIVER.name,
      vehicleName: DEFAULT_VEHICLE.name,
      vehicleNumber: DEFAULT_VEHICLE.regNumber,
    };

    try {
      // Direct submission to Google Sheets
      await submitBookingToGoogleSheets(payload);
      setIsSuccess(true);
    } catch (err) {
      console.error("Booking submission error:", err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-auto animate-scale-up">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white p-5 sm:p-6 border-b border-amber-500/30 flex items-center justify-between relative">
          
          {/* Logo & Title */}
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-amber-500/80 shadow-lg shadow-amber-500/20 shrink-0">
              <img
                src="/hanuman-logo.jpg"
                alt="Shri Kabariya Balaji Travels"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest block">
                Instant Cab & Contact Booking
              </span>
              <h3 className="text-lg sm:text-xl font-black font-sans text-white leading-tight">
                {CONFIG.BUSINESS_NAME_HI}
              </h3>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-8 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-400 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-black text-slate-900">
                  आपकी Booking / Request भेज दी गई है!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  आपकी बुकिंग का अनुरोध सफलतापूर्वक प्राप्त हो गया है। हमारी टीम / ड्राइवर आपसे तुरंत संपर्क करेंगे।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-left max-w-md mx-auto space-y-2 text-xs text-slate-800">
                <div className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Direct Call Driver / Owner:</span>
                </div>
                <a
                  href={`tel:${CONFIG.BUSINESS_PHONE}`}
                  className="text-base font-extrabold text-amber-700 hover:underline flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-600 animate-pulse" />
                  <span>{CONFIG.BUSINESS_PHONE}</span>
                </a>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    onClose();
                  }}
                  className="px-8 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Trip Selection Pills */}
              <div className="grid grid-cols-2 gap-3 pb-1">
                <button
                  type="button"
                  onClick={() => setTripType("per_km")}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    tripType === "per_km"
                      ? "bg-amber-50 border-amber-500 text-amber-950 ring-2 ring-amber-400/30 font-bold"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <span className="text-xs block font-bold">Option 1: Per KM</span>
                  <span className="text-[11px] text-slate-500 font-medium">₹13 - ₹14 / KM</span>
                </button>

                <button
                  type="button"
                  onClick={() => setTripType("fixed_day")}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    tripType === "fixed_day"
                      ? "bg-amber-50 border-amber-500 text-amber-950 ring-2 ring-amber-400/30 font-bold"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <span className="text-xs block font-bold">Option 2: Fixed Day</span>
                  <span className="text-[11px] text-slate-500 font-medium">₹2,000 / Day Package</span>
                </button>
              </div>

              {/* Form Input Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                
                {/* Customer Name */}
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    आपका नाम (Your Name) *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Vikas Yadav"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className={`w-full pl-9 pr-3 py-2.5 bg-slate-50 border rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors ${
                        errors.customerName ? "border-red-500" : "border-slate-300"
                      }`}
                    />
                  </div>
                  {errors.customerName && (
                    <p className="text-[11px] text-red-600 mt-0.5">{errors.customerName}</p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    मोबाइल नंबर (Mobile No.) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      maxLength={10}
                      placeholder="10-digit mobile number"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value.replace(/[^0-9]/g, "").slice(0, 10))}
                      className={`w-full pl-9 pr-3 py-2.5 bg-slate-50 border rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors ${
                        errors.mobile ? "border-red-500" : "border-slate-300"
                      }`}
                    />
                  </div>
                  {errors.mobile && (
                    <p className="text-[11px] text-red-600 mt-0.5">{errors.mobile}</p>
                  )}
                </div>

                {/* Pickup Location */}
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    कहाँ से ले जाना है (Pickup) *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-emerald-600 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="Pickup Location / City"
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      className={`w-full pl-9 pr-3 py-2.5 bg-slate-50 border rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors ${
                        errors.pickupLocation ? "border-red-500" : "border-slate-300"
                      }`}
                    />
                  </div>
                  {errors.pickupLocation && (
                    <p className="text-[11px] text-red-600 mt-0.5">{errors.pickupLocation}</p>
                  )}
                </div>

                {/* Drop Location */}
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    कहाँ जाना है (Drop) *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-red-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="Drop Destination / City"
                      value={dropLocation}
                      onChange={(e) => setDropLocation(e.target.value)}
                      className={`w-full pl-9 pr-3 py-2.5 bg-slate-50 border rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors ${
                        errors.dropLocation ? "border-red-500" : "border-slate-300"
                      }`}
                    />
                  </div>
                  {errors.dropLocation && (
                    <p className="text-[11px] text-red-600 mt-0.5">{errors.dropLocation}</p>
                  )}
                </div>

                {/* Date */}
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    यात्रा की तारीख (Date) *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className={`w-full pl-9 pr-3 py-2.5 bg-slate-50 border rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors ${
                        errors.travelDate ? "border-red-500" : "border-slate-300"
                      }`}
                    />
                  </div>
                  {errors.travelDate && (
                    <p className="text-[11px] text-red-600 mt-0.5">{errors.travelDate}</p>
                  )}
                </div>

                {/* Time Select Dropdown */}
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    समय (Pickup Time) *
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-amber-600 absolute left-3 top-3 pointer-events-none z-10" />
                    <select
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className="w-full pl-9 pr-8 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors cursor-pointer"
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
                </div>

              </div>

              {/* Estimated Fare Live Preview */}
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between mt-3 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-600 block">अनुमानित किराया (Estimated Fare):</span>
                  <span className="font-extrabold text-amber-700 text-base sm:text-lg font-sans">
                    {fareResult.estimatedFareFormatted}
                  </span>
                </div>
                <div className="text-right text-[11px] text-slate-600 font-medium">
                  <span>{fareResult.rateFormatted}</span>
                </div>
              </div>

              {/* Actions: Fast Submit */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3.5 px-5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm sm:text-base shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 active:scale-95 transition-all duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-slate-950" />
                      <span>Submit Booking Request (बुकिंग सबमिट करें)</span>
                    </>
                  )}
                </button>

                <a
                  href={`tel:${CONFIG.BUSINESS_PHONE}`}
                  className="py-3.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm border border-slate-300 flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-amber-600" />
                  <span>Direct Call</span>
                </a>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}

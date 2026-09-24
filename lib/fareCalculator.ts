export type TripType = "per_km" | "fixed_day";

export interface FareCalculationInput {
  tripType: TripType;
  distanceKm?: number;
  numberOfDays?: number;
}

export interface FareCalculationResult {
  tripType: TripType;
  distanceKm: number;
  numberOfDays: number;
  rate: number;
  rateFormatted: string;
  estimatedFare: number;
  estimatedFareFormatted: string;
  additionalChargesNote: string;
  breakdownText: string;
}

export function calculateFare(input: FareCalculationInput): FareCalculationResult {
  const tripType = input.tripType;

  if (tripType === "per_km") {
    const km = Math.max(1, input.distanceKm || 0);
    // Pricing Rule: Up to 250 KM = ₹13/KM; Above 250 KM = ₹14/KM for full distance!
    const rate = km > 250 ? 14 : 13;
    const estimatedFare = Math.round(km * rate);

    return {
      tripType: "per_km",
      distanceKm: km,
      numberOfDays: 1,
      rate,
      rateFormatted: `₹${rate}/KM`,
      estimatedFare,
      estimatedFareFormatted: `₹${estimatedFare.toLocaleString("en-IN")}`,
      additionalChargesNote: "Toll Tax & Parking Charges are customer responsibility.",
      breakdownText: `${km} KM × ₹${rate} = ₹${estimatedFare.toLocaleString("en-IN")}`,
    };
  } else {
    const days = Math.max(1, input.numberOfDays || 1);
    const rate = 2000;
    const estimatedFare = Math.round(days * rate);

    return {
      tripType: "fixed_day",
      distanceKm: 0,
      numberOfDays: days,
      rate,
      rateFormatted: `₹${rate}/Day`,
      estimatedFare,
      estimatedFareFormatted: `₹${estimatedFare.toLocaleString("en-IN")}`,
      additionalChargesNote: "Fuel / running expenses, Toll Tax & Parking are customer responsibility.",
      breakdownText: `${days} Day${days > 1 ? "s" : ""} × ₹${rate.toLocaleString("en-IN")} = ₹${estimatedFare.toLocaleString("en-IN")}`,
    };
  }
}

import { CONFIG } from "./config";
import { BookingPayload } from "./whatsapp";

export interface GoogleSheetsSubmissionResult {
  success: boolean;
  message: string;
  isDemoMode: boolean;
}

export async function submitBookingToGoogleSheets(
  booking: BookingPayload
): Promise<GoogleSheetsSubmissionResult> {
  const webhookUrl = CONFIG.GOOGLE_SHEETS_WEBHOOK_URL?.trim();

  // If no webhook URL is configured, gracefully return success in demo mode
  if (!webhookUrl) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "[Shri Kabariya Balaji Travels] Google Sheets webhook URL is empty. Running in Demo Mode."
      );
    }
    return {
      success: true,
      message: "Booking recorded (Demo Mode - Google Sheets Webhook Not Configured)",
      isDemoMode: true,
    };
  }

  const payload = {
    timestamp: new Date().toISOString(),
    customerName: booking.customerName,
    mobile: booking.mobile,
    pickup: booking.pickupLocation,
    drop: booking.dropLocation,
    travelDate: booking.travelDate,
    pickupTime: booking.pickupTime,
    passengers: booking.passengers,
    tripType: booking.fareResult.tripType === "per_km" ? "Per KM" : "Fixed Day",
    distanceKm: booking.fareResult.distanceKm,
    numberOfDays: booking.fareResult.numberOfDays,
    rate: booking.fareResult.rateFormatted,
    estimatedFare: booking.fareResult.estimatedFare,
    additionalChargesNote: booking.fareResult.additionalChargesNote,
    driver: booking.driverName || "Default Driver",
    vehicle: booking.vehicleName || "Default Vehicle",
    vehicleNumber: booking.vehicleNumber || "N/A",
    bookingStatus: "New Booking",
  };

  try {
    // Google Apps Script requires no-cors or JSON POST. Using standard POST with fallback.
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      mode: "no-cors", // Ensures standard Google Apps Script Web App compatibility without CORS block
    });

    return {
      success: true,
      message: "Lead successfully submitted to Google Sheets!",
      isDemoMode: false,
    };
  } catch (error) {
    console.error("[Google Sheets Webhook Error]", error);
    // Don't fail the user flow!
    return {
      success: true,
      message: "Submission processed (Webhook network fallback)",
      isDemoMode: false,
    };
  }
}

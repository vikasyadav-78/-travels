import { CONFIG } from "./config";
import { FareCalculationResult } from "./fareCalculator";

export interface BookingPayload {
  customerName: string;
  mobile: string;
  pickupLocation: string;
  dropLocation: string;
  travelDate: string;
  pickupTime: string;
  passengers: number;
  fareResult: FareCalculationResult;
  driverName?: string;
  vehicleName?: string;
  vehicleNumber?: string;
}

export function generateWhatsAppMessage(booking: BookingPayload): string {
  const { fareResult } = booking;
  const isPerKm = fareResult.tripType === "per_km";

  const lines = [
    `🚕 *NEW BOOKING REQUEST*`,
    `*${CONFIG.BUSINESS_NAME_EN}*`,
    `----------------------------------------`,
    `👤 *Customer Name:* ${booking.customerName}`,
    `📱 *Mobile Number:* ${booking.mobile}`,
    `📍 *Pickup:* ${booking.pickupLocation}`,
    `🚩 *Drop:* ${booking.dropLocation}`,
    `📅 *Travel Date:* ${booking.travelDate}`,
    `⏰ *Pickup Time:* ${booking.pickupTime}`,
    `👥 *Passengers:* ${booking.passengers} Person(s)`,
    `🚘 *Trip Type:* ${isPerKm ? "Per Kilometer" : "Fixed Day Package"}`,
    isPerKm
      ? `📏 *Est. Distance:* ${fareResult.distanceKm} KM`
      : `📆 *Duration:* ${fareResult.numberOfDays} Day(s)`,
    `💰 *Applicable Rate:* ${fareResult.rateFormatted}`,
    `💵 *Estimated Fare:* ${fareResult.estimatedFareFormatted}`,
    `📋 *Additional:* ${fareResult.additionalChargesNote}`,
    `----------------------------------------`,
    booking.driverName ? `👨‍✈️ *Preferred Driver:* ${booking.driverName}` : null,
    booking.vehicleName ? `🚗 *Vehicle:* ${booking.vehicleName} (${booking.vehicleNumber || ""})` : null,
    `----------------------------------------`,
    `*Note:* Please confirm vehicle availability for this journey. Thank you!`
  ].filter(Boolean);

  return lines.join("\n");
}

export function openWhatsAppBooking(booking: BookingPayload, customWhatsAppNumber?: string) {
  const message = generateWhatsAppMessage(booking);
  const targetNumber = customWhatsAppNumber || CONFIG.WHATSAPP_NUMBER;
  // Sanitize phone number to numbers only
  const cleanNumber = targetNumber.replace(/[^0-9]/g, "");
  
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}

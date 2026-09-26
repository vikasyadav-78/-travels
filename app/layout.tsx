import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shri Kabariya Balaji Travels | Direct Cab Booking",
  description:
    "Book local and outstation cab services directly with Shri Kabariya Balaji Travels. View driver and vehicle details, check fare options and send a booking request through WhatsApp.",
  keywords: [
    "Shri Kabariya Balaji Travels",
    "Cab Booking Jaipur",
    "Direct Driver Booking",
    "Outstation Taxi Jaipur",
    "Taxi Booking Rajasthan",
    "Per KM Cab Rate",
    "Fixed Day Cab Package",
    "QR Cab Booking"
  ],
  openGraph: {
    title: "Shri Kabariya Balaji Travels | Direct Cab Booking",
    description:
      "Book your next journey directly with Shri Kabariya Balaji Travels. Transparent fares, verified vehicle details and easy WhatsApp booking.",
    url: "https://shrikabariyabalajitravels.com",
    siteName: "Shri Kabariya Balaji Travels",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className="dark scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </head>
      <body className="antialiased bg-slate-950 text-slate-100 min-h-screen flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}

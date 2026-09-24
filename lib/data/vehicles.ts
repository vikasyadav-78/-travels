export interface Vehicle {
  id: string;
  driverId: string;
  name: string;
  brand: string;
  type: string; // Sedan / SUV / Hatchback
  regNumber: string;
  seating: string;
  acStatus: string;
  luggageCapacity: string;
  fuelType: string;
  imageUrl: string;
  features: string[];
}

export const VEHICLES: Record<string, Vehicle> = {
  "veh-dzire-01": {
    id: "veh-dzire-01",
    driverId: "rajesh-kumar",
    name: "Maruti Suzuki Dzire (Tour S)",
    brand: "Maruti Suzuki",
    type: "Sedan",
    regNumber: "RJ 14 CZ 9876",
    seating: "4 + 1 Driver",
    acStatus: "Dual Zone Climate AC",
    luggageCapacity: "2 Large + 2 Small Bags",
    fuelType: "CNG + Petrol (Eco-Friendly)",
    imageUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800",
    features: [
      "Spotless & Sanitized Interior",
      "Fast Mobile Charger Slot",
      "Comfortable Rear Legroom",
      "High-speed AC Cooling",
      "Luggage Carrier Available"
    ]
  },
  "veh-ertiga-02": {
    id: "veh-ertiga-02",
    driverId: "vikram-singh",
    name: "Maruti Suzuki Ertiga ZXi",
    brand: "Maruti Suzuki",
    type: "MPV / SUV",
    regNumber: "RJ 14 EX 4321",
    seating: "6 + 1 Driver",
    acStatus: "Triple Row AC Vents",
    luggageCapacity: "4 Large Bags",
    fuelType: "CNG + Petrol",
    imageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800",
    features: [
      "Spacious Family Seating",
      "Individual Rear AC Controls",
      "Extra Boot Space",
      "Smooth Highway Suspension",
      "Bluetooth & Sound System"
    ]
  }
};

export const DEFAULT_VEHICLE = VEHICLES["veh-dzire-01"];

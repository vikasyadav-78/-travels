export interface Driver {
  id: string;
  name: string;
  nameHindi: string;
  phone: string;
  whatsapp: string;
  experience: string;
  experienceYears: number;
  languages: string[];
  rating: number;
  totalTrips: string;
  photoUrl: string;
  vehicleId: string;
  verifiedStatus: string;
  location: string;
}

export const DRIVERS: Record<string, Driver> = {
  "rajesh-kumar": {
    id: "rajesh-kumar",
    name: "Rajesh Kumar",
    nameHindi: "राजेश कुमार",
    phone: "+91 98290 12345",
    whatsapp: "919829012345",
    experience: "10+ Years Professional Driving",
    experienceYears: 10,
    languages: ["Hindi", "English", "Rajasthani"],
    rating: 4.9,
    totalTrips: "1,500+",
    photoUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=600",
    vehicleId: "veh-dzire-01",
    verifiedStatus: "Driver & Vehicle Details Available",
    location: "Jaipur, Rajasthan",
  },
  "vikram-singh": {
    id: "vikram-singh",
    name: "Vikram Singh",
    nameHindi: "विक्रम सिंह",
    phone: "+91 98290 54321",
    whatsapp: "919829054321",
    experience: "8+ Years Intercity Specialist",
    experienceYears: 8,
    languages: ["Hindi", "English"],
    rating: 4.85,
    totalTrips: "1,200+",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    vehicleId: "veh-ertiga-02",
    verifiedStatus: "Driver & Vehicle Details Available",
    location: "Jaipur, Rajasthan",
  }
};

export const DEFAULT_DRIVER = DRIVERS["rajesh-kumar"];

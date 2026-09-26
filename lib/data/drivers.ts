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
  "bhanwar-lal-yadav": {
    id: "bhanwar-lal-yadav",
    name: "Bhanwar Lal Yadav",
    nameHindi: "भंवर लाल यादव",
    phone: "+91 9680345318",
    whatsapp: "919680345318",
    experience: "10+ Years Professional Driving",
    experienceYears: 10,
    languages: ["Hindi", "English", "Rajasthani"],
    rating: 4.9,
    totalTrips: "1,500+",
    photoUrl: "/driver-owner.png",
    vehicleId: "veh-dzire-01",
    verifiedStatus: "Driver & Vehicle Details Available",
    location: "Jaipur, Rajasthan",
  },
  "rajesh-kumar": {
    id: "bhanwar-lal-yadav",
    name: "Bhanwar Lal Yadav",
    nameHindi: "भंवर लाल यादव",
    phone: "+91 9680345318",
    whatsapp: "919680345318",
    experience: "10+ Years Professional Driving",
    experienceYears: 10,
    languages: ["Hindi", "English", "Rajasthani"],
    rating: 4.9,
    totalTrips: "1,500+",
    photoUrl: "/driver-owner.png",
    vehicleId: "veh-dzire-01",
    verifiedStatus: "Driver & Vehicle Details Available",
    location: "Jaipur, Rajasthan",
  }
};

export const DEFAULT_DRIVER = DRIVERS["bhanwar-lal-yadav"];

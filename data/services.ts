export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  { id: "local-trips", title: "Local Trips", description: "Hassle-free travel for all your local needs within town and nearby areas.", icon: "MapPin" },
  { id: "railway-pickup", title: "Railway Pickup", description: "Timely pickup from the railway station whenever you arrive.", icon: "TrainFront" },
  { id: "railway-drop", title: "Railway Drop", description: "On-time drop to the railway station so you never miss your train.", icon: "TrainFront" },
  { id: "round-trips", title: "Round Trips", description: "Comfortable two-way trips with the same trusted driver.", icon: "Repeat" },
  { id: "outstation-trips", title: "Outstation Trips", description: "Safe and relaxed long-distance outstation travel.", icon: "Route" },
  { id: "temple-visits", title: "Temple Visits", description: "Peaceful rides for temple visits and pilgrimages.", icon: "Landmark" },
  { id: "marriage-functions", title: "Marriage Functions", description: "Reliable transport for weddings and family functions.", icon: "PartyPopper" },
  { id: "corporate-travel", title: "Corporate Travel", description: "Professional rides for corporate commutes and clients.", icon: "Briefcase" },
  { id: "business-meetings", title: "Business Meetings", description: "Punctual rides so you always reach meetings on time.", icon: "Building2" },
  { id: "school-pickup", title: "School Pickup", description: "Safe and caring pickup & drop for students.", icon: "GraduationCap" },
  { id: "hospital-visits", title: "Hospital Visits", description: "Comfortable and quick rides for hospital visits.", icon: "HeartPulse" },
  { id: "airport-pickup", title: "Airport Pickup", description: "Prompt airport pickup with flight tracking care.", icon: "PlaneLanding" },
  { id: "airport-drop", title: "Airport Drop", description: "Stress-free drop to the airport, always on schedule.", icon: "PlaneTakeoff" },
  { id: "tour-packages", title: "Tour Packages", description: "Curated tour packages for memorable getaways.", icon: "Map" },
  { id: "monthly-rental", title: "Monthly Rental", description: "Flexible monthly car rental for daily commuters.", icon: "CalendarDays" },
  { id: "driver-on-demand", title: "Driver On Demand", description: "Professional drivers available whenever you need.", icon: "UserRoundCheck" },
  { id: "emergency-ride", title: "24/7 Emergency Ride", description: "Round-the-clock emergency rides you can count on.", icon: "Siren" },
];

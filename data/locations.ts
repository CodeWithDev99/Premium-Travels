export interface ServiceLocation {
  id: string;
  name: string;
  description: string;
}

export const locations: ServiceLocation[] = [
  { id: "bhimavaram", name: "Bhimavaram", description: "Our home base with round-the-clock rides." },
  { id: "palakollu", name: "Palakollu", description: "Reliable pickup & drop across Palakollu town." },
  { id: "narasapuram", name: "Narasapuram", description: "Comfortable local & outstation trips." },
  { id: "akividu", name: "Akividu", description: "Timely rides for daily commutes." },
  { id: "undi", name: "Undi", description: "Safe travel for families and business trips." },
  { id: "railway-station", name: "Railway Station", description: "On-time railway station pickup & drop." },
  { id: "nearby-villages", name: "Nearby Villages", description: "Doorstep service to surrounding villages." },
];

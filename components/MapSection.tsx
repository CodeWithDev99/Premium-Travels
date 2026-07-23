"use client";

import { motion } from "framer-motion";
import { MapPin, Car } from "lucide-react";
import { locations } from "@/data/locations";

const points = [
  { name: "Narsapuram", top: "22%", left: "58%" },
  { name: "Undi", top: "48%", left: "88%" },
  { name: "Bhimavaram", top: "62%", left: "18%" },
  { name: "Palakollu", top: "80%", left: "52%" },
  { name: "Akividu", top: "58%", left: "78%" },
];

export default function MapSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative rounded-premium overflow-hidden bg-[#DCEEE4] h-[380px] shadow-card"
    >
      {/* Decorative "roads" */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <line x1="18%" y1="62%" x2="58%" y2="22%" stroke="#0B1F3A" strokeWidth="2" strokeDasharray="6 6" opacity="0.4" />
        <line x1="18%" y1="62%" x2="52%" y2="80%" stroke="#0B1F3A" strokeWidth="2" strokeDasharray="6 6" opacity="0.4" />
        <line x1="18%" y1="62%" x2="78%" y2="58%" stroke="#0B1F3A" strokeWidth="2" strokeDasharray="6 6" opacity="0.4" />
        <line x1="18%" y1="62%" x2="88%" y2="48%" stroke="#0B1F3A" strokeWidth="2" strokeDasharray="6 6" opacity="0.4" />
      </svg>

      {points.map((p) => (
        <div
          key={p.name}
          style={{ top: p.top, left: p.left }}
          className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
        >
          <MapPin className="h-6 w-6 text-primary fill-secondary" strokeWidth={1.5} />
          <span className="text-xs font-semibold text-primary bg-white/80 px-2 py-0.5 rounded-full mt-1 whitespace-nowrap">
            {p.name}
          </span>
        </div>
      ))}

      {/* Central car marker */}
      <div className="absolute top-[62%] left-[18%] -translate-x-1/2 -translate-y-1/2 h-9 w-9 flex items-center justify-center rounded-full bg-secondary shadow-soft">
        <Car className="h-5 w-5 text-primary" />
      </div>

      <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-primary/90 backdrop-blur-sm px-5 py-3 text-center text-white text-xs sm:text-sm font-medium">
        Pickup &amp; Drop • Railway Stations • Local Trips • 24/7 Service
      </div>
    </motion.div>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import type { Car } from "@/data/cars";

export default function CarCard({
  car,
  index = 0,
}: {
  car: Car;
  index?: number;
}) {
  const features = car.features ?? [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card-base flex flex-col overflow-hidden"
    >
      <div className="relative h-56 w-full bg-surface">
        <Image
          src={car.image}
          alt={`${car.brand} ${car.name}`}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover"
        />

        <span className="badge absolute left-4 top-4 bg-secondary text-primary shadow-soft">
          {car.seats} Seater
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <p className="text-sm font-medium text-primary/50">
          {car.brand}
        </p>

        <h3 className="mb-1 text-2xl font-bold text-primary">
          {car.name}
        </h3>

        <p className="mb-5 text-sm text-primary/60">
          {car.tagline}
        </p>

        {features.length > 0 && (
          <ul className="mb-7 flex-1 space-y-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm text-primary/75"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-secondary" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <a
          href={WHATSAPP_LINK(
            `Hi! I would like to book the ${car.name} (${car.seats} seater).`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full"
        >
          Book Now
        </a>
      </div>
    </motion.div>
  );
}
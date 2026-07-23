"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Phone, MapPin, CalendarDays, Clock, Users, Car, Route, MessageSquare, ShieldCheck } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import { cars } from "@/data/cars";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
    date: "",
    time: "",
    passengers: "",
    vehicle: "",
    tripType: "",
    notes: "",
  });

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi! I would like to prebook a ride.
Name: ${form.name}
Phone: ${form.phone}
Pickup: ${form.pickup}
Drop: ${form.drop}
Date: ${form.date}
Time: ${form.time}
Passengers: ${form.passengers}
Vehicle: ${form.vehicle}
Trip Type: ${form.tripType}
Special Request: ${form.notes}`;
    window.open(WHATSAPP_LINK(message), "_blank");
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="card-base p-8 space-y-5"
    >
      <div>
        <h3 className="text-2xl font-bold text-primary">Book Your Ride</h3>
        <p className="text-primary/50 text-sm mt-1">Fill the details and we&apos;ll confirm instantly via WhatsApp.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field icon={User} placeholder="Full Name" value={form.name} onChange={handleChange("name")} required />
        <Field icon={Phone} placeholder="Phone Number" value={form.phone} onChange={handleChange("phone")} required type="tel" />
        <Field icon={MapPin} placeholder="Pickup Location" value={form.pickup} onChange={handleChange("pickup")} required />
        <Field icon={MapPin} placeholder="Drop Location" value={form.drop} onChange={handleChange("drop")} required />
        <Field icon={CalendarDays} placeholder="Pickup Date" value={form.date} onChange={handleChange("date")} type="date" />
        <Field icon={Clock} placeholder="Pickup Time" value={form.time} onChange={handleChange("time")} type="time" />
        <Field icon={Users} placeholder="Number of Passengers" value={form.passengers} onChange={handleChange("passengers")} type="number" />

        <label className="relative flex items-center">
          <Car className="absolute left-4 h-4 w-4 text-primary/40" />
          <select
            value={form.vehicle}
            onChange={handleChange("vehicle")}
            className="input-field pl-11 appearance-none"
            aria-label="Select Vehicle"
          >
            <option value="">Select Vehicle</option>
            {cars.map((car) => (
              <option key={car.id} value={car.name}>
                {car.name} ({car.seats} Seater)
              </option>
            ))}
          </select>
        </label>

        <label className="relative flex items-center sm:col-span-2">
          <Route className="absolute left-4 h-4 w-4 text-primary/40" />
          <select
            value={form.tripType}
            onChange={handleChange("tripType")}
            className="input-field pl-11 appearance-none"
            aria-label="Trip Type"
          >
            <option value="">Select Trip Type</option>
            <option value="Local Trip">Local Trip</option>
            <option value="Railway Pickup/Drop">Railway Pickup/Drop</option>
            <option value="Outstation">Outstation</option>
            <option value="Round Trip">Round Trip</option>
            <option value="Airport Pickup/Drop">Airport Pickup/Drop</option>
          </select>
        </label>
      </div>

      <label className="relative flex items-start">
        <MessageSquare className="absolute left-4 top-4 h-4 w-4 text-primary/40" />
        <textarea
          placeholder="Special Request (Optional)"
          value={form.notes}
          onChange={handleChange("notes")}
          rows={3}
          className="input-field pl-11 resize-none"
        />
      </label>

      <button type="submit" className="btn-secondary w-full">
        Prebook Now
      </button>
      <p className="flex items-center justify-center gap-1.5 text-xs text-primary/40">
        <ShieldCheck className="h-4 w-4" /> Your information is safe with us
      </p>
    </motion.form>
  );
}

interface FieldProps {
  icon: React.ComponentType<{ className?: string }>;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}

function Field({ icon: Icon, placeholder, value, onChange, type = "text", required }: FieldProps) {
  return (
    <label className="relative flex items-center">
      <Icon className="absolute left-4 h-4 w-4 text-primary/40" />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="input-field pl-11"
        aria-label={placeholder}
      />
    </label>
  );
}

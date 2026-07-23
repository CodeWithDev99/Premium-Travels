"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Phone as PhoneIcon, MapPin, Wrench, MessageSquare, Send } from "lucide-react";
import Hero from "@/components/Hero";
import ContactCard from "@/components/ContactCard";
import MapSection from "@/components/MapSection";
import SectionTitle from "@/components/SectionTitle";
import TestimonialSlider from "@/components/TestimonialSlider";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { reviews } from "@/data/reviews";
import { generalFaqs } from "@/data/faq";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function ContactPageClient() {
  const [form, setForm] = useState({ name: "", phone: "", pickup: "", drop: "", service: "", date: "", message: "" });

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi! I have a message for Premium Car Travels.
Name: ${form.name}
Phone: ${form.phone}
Pickup: ${form.pickup}
Drop: ${form.drop}
Service: ${form.service}
Preferred Date: ${form.date}
Message: ${form.message}`;
    window.open(WHATSAPP_LINK(message), "_blank");
  };

  return (
    <>
      <Hero
        eyebrow="We're Here 24/7 for Your Journey"
        title="Contact"
        highlight="Us"
        subtitle="Have a question or need a ride? Reach out to us anytime. We're happy to help!"
        backgroundImage="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&q=80"
      />

      <section className="section-pad">
        <div className="container-wrap grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="card-base p-8 space-y-5"
          >
            <h3 className="text-2xl font-bold text-primary mb-1">Send Us a Message</h3>
            <p className="text-primary/50 text-sm mb-4">
              Fill in the details and we will get back to you as soon as possible.
            </p>

            <label className="relative flex items-center">
              <User className="absolute left-4 h-4 w-4 text-primary/40" />
              <input
                required
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange("name")}
                className="input-field pl-11"
              />
            </label>

            <label className="relative flex items-center">
              <PhoneIcon className="absolute left-4 h-4 w-4 text-primary/40" />
              <input
                required
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange("phone")}
                className="input-field pl-11"
              />
            </label>

            <div className="grid sm:grid-cols-2 gap-5">
              <label className="relative flex items-center">
                <MapPin className="absolute left-4 h-4 w-4 text-primary/40" />
                <input
                  placeholder="Pickup Location"
                  value={form.pickup}
                  onChange={handleChange("pickup")}
                  className="input-field pl-11"
                />
              </label>
              <label className="relative flex items-center">
                <MapPin className="absolute left-4 h-4 w-4 text-primary/40" />
                <input
                  placeholder="Drop Location"
                  value={form.drop}
                  onChange={handleChange("drop")}
                  className="input-field pl-11"
                />
              </label>
            </div>

            <label className="relative flex items-center">
              <Wrench className="absolute left-4 h-4 w-4 text-primary/40" />
              <select
                value={form.service}
                onChange={handleChange("service")}
                className="input-field pl-11 appearance-none"
                aria-label="Select Service"
              >
                <option value="">Select Service</option>
                <option value="Local Trip">Local Trip</option>
                <option value="Railway Pickup/Drop">Railway Pickup/Drop</option>
                <option value="Outstation">Outstation</option>
                <option value="Corporate Travel">Corporate Travel</option>
              </select>
            </label>

            <label className="relative flex items-center">
              <input
                type="date"
                value={form.date}
                onChange={handleChange("date")}
                className="input-field"
                aria-label="Preferred Date"
              />
            </label>

            <label className="relative flex items-start">
              <MessageSquare className="absolute left-4 top-4 h-4 w-4 text-primary/40" />
              <textarea
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={handleChange("message")}
                className="input-field pl-11 resize-none"
              />
            </label>

            <button type="submit" className="btn-secondary w-full">
              Send Message <Send className="h-4 w-4" />
            </button>
          </motion.form>

          {/* Get in touch + map */}
          <div className="space-y-8">
            <ContactCard />
            <MapSection />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-wrap grid lg:grid-cols-2 gap-10">
          <div>
            <SectionTitle eyebrow="Reviews" title="What Our Customers Say" align="left" />
            <div className="mt-10">
              <TestimonialSlider reviews={reviews} />
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="FAQ" title="Frequently Asked Questions" align="left" />
            <div className="mt-10">
              <FAQ items={generalFaqs} />
            </div>
          </div>
        </div>
      </section>

      <div className="container-wrap pb-20">
        <CTA compact />
      </div>
    </>
  );
}

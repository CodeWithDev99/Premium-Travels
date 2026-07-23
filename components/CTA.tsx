"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { CALL_LINK, WHATSAPP_LINK } from "@/lib/constants";

interface CTAProps {
  heading?: string;
  description?: string;
  compact?: boolean;
}

export default function CTA({
  heading = "Ready For Your Next Ride?",
  description = "Book instantly through WhatsApp or call us directly.",
  compact = false,
}: CTAProps) {
  if (compact) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex flex-col gap-4 rounded-2xl bg-secondary px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7"
      >
        <div className="flex items-start gap-3">
          <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 sm:flex">
            <MessageCircle className="h-5 w-5 text-primary" />
          </div>

          <div>
            <p className="font-bold text-primary">
              Need a ride? We&apos;re just a message away.
            </p>

            <p className="mt-1 text-sm leading-6 text-primary/70">
              Pickup, drop, railway transfers and 24/7 local service.
            </p>
          </div>
        </div>

        <a
          href={WHATSAPP_LINK(
            "Hi! I need a ride, please help me book."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </motion.div>
    );
  }

  return (
  <section className="pt-4 pb-10 sm:pt-6 sm:pb-12">
    <div className="container-wrap">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="flex flex-col gap-5 rounded-2xl bg-primary px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
            Book Your Ride
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            {heading}
          </h2>

          <p className="mt-2 text-white/70">
            {description}
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <a
            href={WHATSAPP_LINK(
              "Hi! I would like to book a ride with Premium Car Travels."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-primary transition hover:brightness-95"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>

          <a
            href={CALL_LINK}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);
}
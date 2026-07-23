"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  index?: number;
}

export default function ServiceCard({ icon, title, description, index = 0 }: ServiceCardProps) {
  const Icon = (Icons as unknown as Record<string, LucideIcon>)[icon] ?? Icons.Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="card-base p-7 flex flex-col h-full"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-secondary">
        <Icon className="h-6 w-6" strokeWidth={2} />
      </div>
      <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
      <p className="text-sm text-primary/60 leading-relaxed flex-1">{description}</p>
      <a
        href={WHATSAPP_LINK(`Hi! I'm interested in your ${title} service.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary transition-colors"
      >
        Learn More <ArrowRight className="h-4 w-4" />
      </a>
    </motion.div>
  );
}

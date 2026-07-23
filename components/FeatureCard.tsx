"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  index?: number;
}

export default function FeatureCard({ icon, title, description, index = 0 }: FeatureCardProps) {
  const Icon = (Icons as unknown as Record<string, LucideIcon>)[icon] ?? Icons.Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card-base p-8 text-center group"
    >
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/15 text-primary transition-colors group-hover:bg-secondary group-hover:text-primary">
        <Icon className="h-7 w-7" strokeWidth={2} />
      </div>
      <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
      <p className="text-sm text-primary/60 leading-relaxed">{description}</p>
    </motion.div>
  );
}

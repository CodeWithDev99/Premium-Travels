"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={align === "center" ? "text-center mx-auto max-w-2xl" : "text-left"}
    >
      {eyebrow && (
        <span
          className={
            light
              ? "inline-flex items-center gap-1.5 rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-semibold text-secondary mb-4"
              : "section-eyebrow"
          }
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={
          light
            ? "text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-white leading-tight"
            : "section-title"
        }
      >
        {title}
      </h2>
      {description && (
        <p className={light ? "mt-4 text-white/70 text-lg" : "mt-4 text-primary/60 text-lg"}>
          {description}
        </p>
      )}
    </motion.div>
  );
}

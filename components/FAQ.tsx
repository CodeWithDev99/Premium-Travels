"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { Faq } from "@/data/faq";

export default function FAQ({ items }: { items: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={faq.question}
            className="rounded-2xl bg-white shadow-card overflow-hidden border border-primary/5"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-primary">{faq.question}</span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-secondary/15 text-primary"
              >
                <ChevronDown className="h-4 w-4" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm text-primary/60 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

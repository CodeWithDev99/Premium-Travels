"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReviewCard from "./ReviewCard";
import type { Review } from "@/data/reviews";

export default function TestimonialSlider({ reviews }: { reviews: Review[] }) {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    const updatePerPage = () => {
      if (window.innerWidth < 768) setPerPage(1);
      else if (window.innerWidth < 1200) setPerPage(2);
      else setPerPage(3);
    };
    updatePerPage();
    window.addEventListener("resize", updatePerPage);
    return () => window.removeEventListener("resize", updatePerPage);
  }, []);

  const totalPages = Math.ceil(reviews.length / perPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((p) => (p + 1) % totalPages);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const visible = reviews.slice(page * perPage, page * perPage + perPage);

  return (
    <div>
      <div className="grid gap-6" style={{ gridTemplateColumns: `repeat(${perPage}, minmax(0, 1fr))` }}>
        <AnimatePresence mode="wait">
          {visible.map((review, i) => (
            <motion.div
              key={`${page}-${review.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-4 mt-9">
        <button
          aria-label="Previous testimonials"
          onClick={() => setPage((p) => (p - 1 + totalPages) % totalPages)}
          className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-card text-primary hover:bg-secondary transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to page ${i + 1}`}
              onClick={() => setPage(i)}
              className={`h-2 rounded-full transition-all ${
                i === page ? "w-6 bg-secondary" : "w-2 bg-primary/20"
              }`}
            />
          ))}
        </div>
        <button
          aria-label="Next testimonials"
          onClick={() => setPage((p) => (p + 1) % totalPages)}
          className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-card text-primary hover:bg-secondary transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

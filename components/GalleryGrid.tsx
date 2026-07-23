"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, PlayCircle, MapPin } from "lucide-react";
import { galleryItems, galleryCategories, type GalleryItem } from "@/data/gallery";

export default function GalleryGrid() {
  const [active, setActive] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered: GalleryItem[] =
    active === "all" ? galleryItems : galleryItems.filter((g) => g.category === active);

  const openLightbox = (id: string) => {
    const idx = filtered.findIndex((g) => g.id === id);
    setLightboxIndex(idx);
  };

  const closeLightbox = () => setLightboxIndex(null);
  const next = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  const prev = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {galleryCategories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActive(cat.value)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              active === cat.value
                ? "bg-primary text-white shadow-soft"
                : "bg-white text-primary/70 hover:bg-primary/5 shadow-card"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry-style responsive grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        <AnimatePresence>
          {filtered.map((item, i) => (
            <motion.button
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              onClick={() => openLightbox(item.id)}
              className="relative block w-full break-inside-avoid overflow-hidden rounded-premium group focus:outline-none"
            >
              <div className="relative w-full h-64">
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-sm font-medium flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-secondary" /> {item.caption}
                </p>
              </div>
            </motion.button>
          ))}

          {/* Video placeholder card */}
          <motion.div
            key="video-placeholder"
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative block w-full break-inside-avoid overflow-hidden rounded-premium bg-primary flex items-center justify-center h-64"
          >
            <div className="text-center text-white/70">
              <PlayCircle className="h-12 w-12 mx-auto mb-2 text-secondary" />
              <p className="text-sm font-medium">Journey Highlights Video</p>
              <p className="text-xs text-white/40">Coming Soon</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary-dark/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={closeLightbox}
          >
            <button
              aria-label="Close"
              onClick={closeLightbox}
              className="absolute top-6 right-6 h-11 w-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-secondary hover:text-primary transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 sm:left-8 h-11 w-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-secondary hover:text-primary transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 sm:right-8 h-11 w-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-secondary hover:text-primary transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.div
              key={filtered[lightboxIndex].id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl h-[70vh]"
            >
              <Image
                src={filtered[lightboxIndex].image}
                alt={filtered[lightboxIndex].caption}
                fill
                sizes="800px"
                className="object-contain"
              />
              <p className="absolute -bottom-10 left-0 right-0 text-center text-white/80 text-sm">
                {filtered[lightboxIndex].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

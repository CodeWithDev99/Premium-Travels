"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import type { Review } from "@/data/reviews";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="card-base p-7 h-full flex flex-col">
      <Quote className="h-8 w-8 text-secondary/40 mb-3" />
      <p className="text-primary/70 text-sm leading-relaxed flex-1">{review.text}</p>
      <div className="flex gap-1 my-4">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
        ))}
      </div>
      <div className="flex items-center gap-3">
        <div className="relative h-11 w-11 rounded-full overflow-hidden bg-surface shrink-0">
          <Image src={review.image} alt={review.name} fill sizes="44px" className="object-cover" />
        </div>
        <div>
          <p className="font-semibold text-primary text-sm">{review.name}</p>
          <p className="text-xs text-primary/50">{review.city}</p>
        </div>
      </div>
    </div>
  );
}

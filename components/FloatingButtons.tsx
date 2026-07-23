"use client";

import { Phone } from "lucide-react";
import { CALL_LINK } from "@/lib/constants";
import WhatsappButton from "./WhatsappButton";
import ScrollTop from "./ScrollTop";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      <ScrollTop />
      <a
        href={CALL_LINK}
        aria-label="Call now"
        className="h-14 w-14 flex items-center justify-center rounded-full bg-primary text-white shadow-soft hover:bg-primary-light transition-colors"
      >
        <Phone className="h-6 w-6" />
      </a>
      <WhatsappButton />
    </div>
  );
}

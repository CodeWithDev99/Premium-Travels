"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function WhatsappButton({ message }: { message?: string }) {
  return (
    <a
      href={WHATSAPP_LINK(message ?? "Hi! I would like to book a ride with Premium Car Travels.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="h-14 w-14 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-6 w-6" fill="white" strokeWidth={0} />
    </a>
  );
}

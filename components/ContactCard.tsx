import { Phone, MessageCircle, Mail, Clock } from "lucide-react";
import { SITE, CALL_LINK, WHATSAPP_LINK } from "@/lib/constants";

export default function ContactCard() {
  const items = [
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: SITE.phoneDisplay,
      sub: "24/7 Available",
    },
    {
      icon: Clock,
      label: "Support Hours",
      value: "24 Hours",
      sub: "Every Day",
    },
    {
      icon: Mail,
      label: "Email",
      value: SITE.email,
      sub: "Write to us anytime",
    },
  ];

  return (
    <div className="rounded-premium bg-primary text-white p-8 sm:p-10">
      <h3 className="text-2xl font-bold mb-1">Get In Touch</h3>
      <div className="h-1 w-16 bg-secondary rounded-full mb-8" />

      <div className="grid sm:grid-cols-3 gap-6 mb-8">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-start gap-3">
            <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-secondary text-primary">
              <item.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-white/50 uppercase tracking-wide">{item.label}</p>
              <p className="font-semibold text-white break-all">{item.value}</p>
              <p className="text-xs text-white/50">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href={WHATSAPP_LINK("Hi! I would like to get in touch with Premium Car Travels.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp Us
        </a>
        <a href={CALL_LINK} className="btn-outline">
          <Phone className="h-4 w-4" /> Call Now
        </a>
      </div>
    </div>
  );
}

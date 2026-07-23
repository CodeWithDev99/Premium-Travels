import Link from "next/link";
import { Car, Facebook, Instagram, MessageCircle } from "lucide-react";
import { NAV_LINKS, SITE, WHATSAPP_LINK } from "@/lib/constants";
import { locations } from "@/data/locations";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white/70">
      <div className="container-wrap py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Car className="h-7 w-7 text-secondary" />
            <span className="font-bold text-lg text-white">
              Premium <span className="text-secondary">Car Travels</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            Comfortable, safe and always-on-time car travel across Bhimavaram and nearby areas.
          </p>
          <p className="mt-3 text-xs uppercase tracking-widest text-secondary/80">
            Comfort • Trust • Always
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-secondary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Locations</h4>
          <ul className="space-y-2.5 text-sm">
            {locations.slice(0, 5).map((loc) => (
              <li key={loc.id}>{loc.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2.5 text-sm">
            <li>{SITE.phoneDisplay}</li>
            <li>{SITE.email}</li>
            <li>{SITE.addressArea}</li>
          </ul>
          <div className="flex gap-3 mt-5">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-secondary hover:text-primary transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-secondary hover:text-primary transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_LINK()}
              aria-label="WhatsApp"
              className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-secondary hover:text-primary transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs">
        © {year} {SITE.name}. All Rights Reserved.
      </div>
    </footer>
  );
}

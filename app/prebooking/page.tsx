import Image from "next/image";
import { CheckCircle2, MapPin } from "lucide-react";
import Hero from "@/components/Hero";
import BookingForm from "@/components/BookingForm";
import CTA from "@/components/CTA";
import { cars } from "@/data/cars";
import { locations } from "@/data/locations";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { WHATSAPP_LINK } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Prebooking — Reserve Your Ride in Advance",
  description:
    "Prebook your Baleno or Ertiga ride with Premium Car Travels. Choose pickup, drop, date, time and vehicle — confirmed instantly over WhatsApp.",
  path: "/prebooking",
  keywords: ["prebook car ride", "advance taxi booking Bhimavaram"],
});

export default function PrebookingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Prebooking", path: "/prebooking" },
            ])
          ),
        }}
      />

      <Hero
        eyebrow="Plan Ahead"
        title="Prebook Your"
        highlight="Ride"
        subtitle="Safe rides. On time. Every time. Reserve your car in advance for a stress-free journey."
        backgroundImage="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1600&q=80"
      />

      <section className="section-pad">
        <div className="container-wrap grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <BookingForm />

          <div className="space-y-8 lg:sticky lg:top-28">
            <div>
              <h3 className="section-title !text-2xl mb-6">Choose Your Perfect Ride</h3>
              <div className="space-y-6">
                {cars.map((car) => (
                  <div key={car.id} className="card-base overflow-hidden flex">
                    <div className="relative w-36 shrink-0">
                      <Image src={car.image} alt={car.name} fill sizes="144px" className="object-cover" />
                    </div>
                    <div className="p-5 flex-1">
                      <p className="text-xs text-primary/50">{car.brand}</p>
                      <h4 className="font-bold text-primary text-lg">{car.name}</h4>
                      <span className="badge bg-secondary/15 text-primary text-xs my-2">
                        {car.seats} Seater
                      </span>
                      <ul className="space-y-1 mt-2 mb-4">
                        {car.features.slice(0, 3).map((f) => (
                          <li key={f} className="flex items-center gap-1.5 text-xs text-primary/60">
                            <CheckCircle2 className="h-3.5 w-3.5 text-secondary" /> {f}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={WHATSAPP_LINK(`Hi! I would like to book the ${car.name}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-full bg-primary px-5 py-2 text-xs font-semibold text-white hover:bg-secondary hover:text-primary transition-colors"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-base p-6">
              <h4 className="font-semibold text-primary mb-4">We Cover Your Nearby Locations</h4>
              <div className="flex flex-wrap gap-2">
                {locations.slice(0, 5).map((loc) => (
                  <span
                    key={loc.id}
                    className="inline-flex items-center gap-1.5 rounded-full bg-surface px-3.5 py-1.5 text-xs font-medium text-primary/70"
                  >
                    <MapPin className="h-3 w-3 text-secondary" /> {loc.name}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs text-primary/40">Railway Station Pickup &amp; Drop Available</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-wrap pb-20">
        <CTA compact />
      </div>
    </>
  );
}

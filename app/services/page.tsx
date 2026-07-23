import Image from "next/image";
import { CheckCircle2, XCircle } from "lucide-react";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import FeatureCard from "@/components/FeatureCard";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { services } from "@/data/services";
import { cars } from "@/data/cars";
import { servicesFaqs } from "@/data/faq";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services — Complete Car Travel Solutions",
  description:
    "Explore all services offered by Premium Car Travels: pickup & drop, airport transfers, corporate travel, marriage events, temple trips, monthly rentals and 24/7 support.",
  path: "/services",
  keywords: ["car travel services", "airport pickup drop Bhimavaram", "monthly car rental"],
});

const whyChooseUs = [
  { icon: "ShieldCheck", title: "Safe & Reliable", description: "Well-maintained cars and experienced drivers for every ride." },
  { icon: "Clock", title: "On Time Always", description: "We value your time and always arrive punctually." },
  { icon: "Car", title: "Comfortable Rides", description: "Clean and comfortable cars for a relaxed journey." },
  { icon: "IndianRupee", title: "Affordable Rates", description: "Best prices with complete transparency, always." },
  { icon: "Headphones", title: "24/7 Support", description: "We're here for you anytime, day or night." },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(servicesFaqs)) }}
      />

      <Hero
        eyebrow="What We Offer"
        title="Our"
        highlight="Services"
        subtitle="Safe rides. Every time. For every need. We offer reliable and comfortable car services for all your travel needs."
        backgroundImage="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1600&q=80"
      />

      <section className="section-pad">
        <div className="container-wrap">
          <SectionTitle
            eyebrow="Service Categories"
            title="Complete Travel Solutions"
            description="From daily commutes to special occasions, we handle every kind of journey."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {services.map((service, i) => (
              <ServiceCard key={service.id} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-pad bg-white">
        <div className="container-wrap">
          <SectionTitle eyebrow="Compare" title="Baleno vs Ertiga" description="Pick the perfect ride for your journey." />
          <div className="mt-14 max-w-4xl mx-auto rounded-premium overflow-hidden shadow-card">
            <div className="grid grid-cols-3 bg-primary text-white text-center text-sm sm:text-base font-semibold">
              <div className="p-4 sm:p-5 text-left pl-6">Feature</div>
              <div className="p-4 sm:p-5">Baleno (5 Seater)</div>
              <div className="p-4 sm:p-5">Ertiga (7 Seater)</div>
            </div>
            {[
              { label: "City Rides", baleno: true, ertiga: true },
              { label: "Family Trips", baleno: false, ertiga: true },
              { label: "Business Travel", baleno: true, ertiga: true },
              { label: "Large Luggage", baleno: false, ertiga: true },
              { label: "Fuel Efficiency", baleno: true, ertiga: false },
              { label: "Railway Trips", baleno: true, ertiga: true },
            ].map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 text-center text-sm ${i % 2 === 0 ? "bg-surface" : "bg-white"}`}
              >
                <div className="p-4 text-left pl-6 font-medium text-primary/80">{row.label}</div>
                <div className="p-4 flex justify-center">
                  {row.baleno ? (
                    <CheckCircle2 className="h-5 w-5 text-secondary-dark" />
                  ) : (
                    <XCircle className="h-5 w-5 text-primary/20" />
                  )}
                </div>
                <div className="p-4 flex justify-center">
                  {row.ertiga ? (
                    <CheckCircle2 className="h-5 w-5 text-secondary-dark" />
                  ) : (
                    <XCircle className="h-5 w-5 text-primary/20" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {cars.map((car) => (
              <div key={car.id} className="flex items-center gap-4 rounded-2xl bg-surface p-5">
                <div className="relative h-16 w-24 shrink-0">
                  <Image src={car.image} alt={car.name} fill sizes="96px" className="object-cover rounded-lg" />
                </div>
                <div>
                  <p className="font-semibold text-primary">{car.brand} {car.name}</p>
                  <p className="text-xs text-primary/50">{car.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-pad">
        <div className="container-wrap">
          <SectionTitle eyebrow="Why Choose Us" title="Excellence In Every Ride" />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyChooseUs.map((item, i) => (
              <FeatureCard key={item.title} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-white">
        <div className="container-wrap max-w-3xl">
          <SectionTitle eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-14">
            <FAQ items={servicesFaqs} />
          </div>
        </div>
      </section>

      <div className="container-wrap pb-20">
        <CTA />
      </div>
    </>
  );
}

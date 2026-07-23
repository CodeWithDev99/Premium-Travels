import {
  MapPin,
  CalendarCheck,
  CheckCircle2,
  Smile,
  Clock3,
  UserCheck,
  Sparkles,
  MapPinCheck,
} from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import SectionTitle from "@/components/SectionTitle";
import CarCard from "@/components/CarCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { cars } from "@/data/cars";
import { locations } from "@/data/locations";
import { reviews } from "@/data/reviews";
import { generalFaqs } from "@/data/faq";
import {
  buildMetadata,
  breadcrumbSchema,
  faqSchema,
  reviewSchema,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Premium Car Travels — Comfortable Rides Across West Godavari",
  description:
    "Book reliable pickup & drop, railway station transfers, local trips and family travel across Bhimavaram and nearby areas. Available 24/7 via WhatsApp or call.",
  path: "/",
});

/*
 * Only these two local images are used anywhere a car image is required.
 * The second filename follows the supplied path exactly: eritga.jpg.
 */
const homepageCars = cars.map((car, index) => ({
  ...car,
  image:
    index === 0
      ? "/images/baleno.jpg"
      : "/images/ertiga.jpg",
}));

const whyChooseUs = [
  {
    title: "24/7 Availability",
    description:
      "Book a ride at any hour with dependable support whenever you need it.",
    icon: Clock3,
  },
  {
    title: "Professional Drivers",
    description:
      "Travel with trained, verified and courteous drivers on every journey.",
    icon: UserCheck,
  },
  {
    title: "Premium Clean Cars",
    description:
      "Enjoy carefully maintained and sanitized vehicles for a comfortable trip.",
    icon: Sparkles,
  },
  {
    title: "On-Time Pickups",
    description:
      "Smart scheduling and reliable drivers help keep every trip on time.",
    icon: MapPinCheck,
  },
];

const bookingSteps = [
  {
    icon: CheckCircle2,
    title: "Choose Ride",
    description:
      "Pick between our Baleno or Ertiga based on your trip.",
  },
  {
    icon: CalendarCheck,
    title: "Select Date",
    description:
      "Choose your preferred pickup date and time.",
  },
  {
    icon: Smile,
    title: "Confirm Booking",
    description:
      "We confirm your ride instantly over WhatsApp or call.",
  },
  {
    icon: MapPin,
    title: "Enjoy Ride",
    description:
      "Sit back and enjoy a safe, comfortable journey.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ name: "Home", path: "/" }])
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(generalFaqs)),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema(reviews)),
        }}
      />

      <HeroSlider cars={homepageCars} />

      {/* Why Choose Us */}
      <section className="section-pad overflow-hidden bg-slate-50">
        <div className="container-wrap">
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

            {/* Left content */}
            <div className="max-w-xl">
              <span className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-slate-900">
                Why Choose Us
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
                Reliable service built around your journey
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                From professional drivers to spotless vehicles, every detail is
                handled to give you a safe, comfortable and stress-free ride.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {["JD", "MK", "AL"].map((name) => (
                    <div
                      key={name}
                      className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-slate-900 text-xs font-semibold text-white"
                    >
                      {name}
                    </div>
                  ))}
                </div>

                <div>
                  <p className="font-semibold text-slate-950">
                    Trusted by local riders
                  </p>
                  <p className="text-sm text-slate-500">
                    Safe and dependable trips every day
                  </p>
                </div>
              </div>
            </div>

            {/* Right feature grid */}
            <div className="grid gap-5 sm:grid-cols-2">
              {whyChooseUs.map((item, index) => (
                <div
                  key={item.title}
                  className={[
                    "group rounded-3xl border border-slate-200 bg-white p-7",
                    "shadow-[0_18px_50px_rgba(15,23,42,0.07)]",
                    "transition duration-300 hover:-translate-y-1 hover:shadow-xl",
                    index === 1 ? "sm:translate-y-8" : "",
                    index === 2 ? "sm:-translate-y-2" : "",
                  ].join(" ")}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-slate-950 transition group-hover:bg-slate-950 group-hover:text-white">
                    <item.icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-6 h-px w-full bg-slate-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Cars */}
      <section className="section-pad bg-white">
        <div className="container-wrap">
          <SectionTitle
            eyebrow="Our Fleet"
            title="Our Cars — Your Comfort"
            description="Choose the perfect ride for your city trip or family journey."
          />

          <div className="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-2">
            {homepageCars.map((car, index) => (
              <CarCard
                key={car.id}
                car={car}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-pad bg-primary text-white">
        <div className="container-wrap">
          <SectionTitle
            eyebrow="Service Locations"
            title="Where We Drive You"
            description="Covering Bhimavaram and every nearby town, village and railway station."
            light
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((location) => (
              <div
                key={location.id}
                className="rounded-premium border border-white/10 bg-white/5 p-6 text-center transition-colors hover:bg-white/10"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <MapPin className="h-5 w-5" />
                </div>

                <h3 className="mb-1.5 font-semibold">
                  {location.name}
                </h3>

                <p className="text-sm text-white/50">
                  {location.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="section-pad">
        <div className="container-wrap">
          <SectionTitle
            eyebrow="Simple Process"
            title="Book Your Ride in 4 Easy Steps"
          />

          <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {bookingSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-secondary">
                  <step.icon className="h-7 w-7" />
                </div>

                <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-2 select-none text-5xl font-extrabold text-primary/5">
                  0{index + 1}
                </span>

                <h3 className="mb-2 font-semibold text-primary">
                  {step.title}
                </h3>

                <p className="text-sm text-primary/60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-pad bg-white">
        <div className="container-wrap">
          <SectionTitle
            eyebrow="Customer Reviews"
            title="What Our Customers Say"
            description="Real experiences from riders across our service area."
          />

          <div className="mt-14">
            <TestimonialSlider reviews={reviews} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="container-wrap max-w-3xl">
          <SectionTitle
            eyebrow="FAQ"
            title="Frequently Asked Questions"
          />

          <div className="mt-14">
            <FAQ items={generalFaqs} />
          </div>
        </div>
      </section>

      <div className="container-wrap pb-20">
        <CTA />
      </div>
    </>
  );
}
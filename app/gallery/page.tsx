import Hero from "@/components/Hero";
import GalleryGrid from "@/components/GalleryGrid";
import CTA from "@/components/CTA";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Gallery — Moments From Every Journey",
  description:
    "Browse photos of our Baleno and Ertiga fleet, local trips, railway pickups, family journeys and special functions with Premium Car Travels.",
  path: "/gallery",
  keywords: ["car travels gallery", "Bhimavaram taxi photos"],
});

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Our Gallery", path: "/gallery" },
            ])
          ),
        }}
      />

      <Hero
        eyebrow="Our Journeys"
        title="Our"
        highlight="Gallery"
        subtitle="Every Journey. Every Moment. Trusted Always."
        backgroundImage="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=80"
      />

      <section className="section-pad">
        <div className="container-wrap">
          <div className="text-center mx-auto max-w-2xl mb-14">
            <span className="section-eyebrow">Moments From Our Journeys</span>
            <h2 className="section-title">Safe Rides. Happy People. Memorable Journeys.</h2>
          </div>
          <GalleryGrid />
        </div>
      </section>

      <div className="container-wrap pb-20">
        <CTA compact />
      </div>
    </>
  );
}

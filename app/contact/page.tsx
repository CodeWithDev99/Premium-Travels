import ContactPageClient from "@/components/ContactPageClient";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us — Book Your Ride Anytime",
  description:
    "Get in touch with Premium Car Travels. Call or WhatsApp Siva Teja at 8555961443 for bookings, or fill out our contact form and we'll respond promptly.",
  path: "/contact",
  keywords: ["contact car travels Bhimavaram", "Siva Teja Travels phone number"],
});

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contact" },
            ])
          ),
        }}
      />
      <ContactPageClient />
    </>
  );
}

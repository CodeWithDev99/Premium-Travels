// import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
// import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

// const BUSINESS_NAME = "Premium Car Travels";
// const PHONE_NUMBER = "+91 8555961443";
// const PHONE_DISPLAY = "+91 8555961443";
// const WHATSAPP_NUMBER = "+91 8555961443";
// const WHATSAPP_MESSAGE = "Hi, I need a car with driver in Bhimavaram.";
// const BUSINESS_ADDRESS = "Main Road, Bhimavaram, West Godavari, Andhra Pradesh 534201";
// const OPEN_HOURS = "Open 24 hours";
// const LAT = 16.5449;
// const LNG = 81.5212;

// export const metadata = buildMetadata({
//   title: "Premium Car Travels Bhimavaram — Contact Number & WhatsApp",
//   description:
//     "Premium Car Travels — car & driver service in Bhimavaram and nearby villages. Call or WhatsApp us directly for pickup, drop, local trips and outstation travel.",
//   path: "/contact-bhimavaram",
//   keywords: [
//     "Premium Car Travels Bhimavaram contact",
//     "car driver Bhimavaram phone number",
//     "car travels Bhimavaram WhatsApp",
//   ],
// });

// export default function ContactBhimavaramPage() {
//   const localBusinessSchema = {
//     "@context": "https://schema.org",
//     "@type": "LocalBusiness",
//     name: BUSINESS_NAME,
//     telephone: PHONE_NUMBER,
//     address: {
//       "@type": "PostalAddress",
//       streetAddress: BUSINESS_ADDRESS,
//       addressLocality: "Bhimavaram",
//       addressRegion: "Andhra Pradesh",
//       postalCode: "534201",
//       addressCountry: "IN",
//     },
//     geo: { "@type": "GeoCoordinates", latitude: LAT, longitude: LNG },
//     url: "https://YOUR_DOMAIN.com/contact-bhimavaram",
//     priceRange: "₹₹",
//   };

//   const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
//     WHATSAPP_MESSAGE
//   )}`;

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(
//             breadcrumbSchema([
//               { name: "Home", path: "/" },
//               { name: "Contact", path: "/contact-bhimavaram" },
//             ])
//           ),
//         }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
//       />

//       <main className="min-h-screen bg-surface flex items-center justify-center px-4 py-16">
//         <div className="w-full max-w-md rounded-2xl bg-white border border-primary/10 shadow-soft p-6 sm:p-8">
//           {/* Header */}
//           <div className="text-center">
//             <h1 className="text-lg font-semibold text-primary">{BUSINESS_NAME}</h1>
//             <p className="text-xs text-primary/60 mt-1">
//               Car & Driver Service — Bhimavaram
//             </p>
//           </div>

//           {/* Contact details */}
//           <div className="mt-6 space-y-3 text-xs text-primary/70">
//             <div className="flex items-start gap-2.5 rounded-xl bg-surface p-3">
//               <Phone className="h-4 w-4 text-secondary-dark shrink-0 mt-0.5" />
//               <span>{PHONE_DISPLAY}</span>
//             </div>
//             <div className="flex items-start gap-2.5 rounded-xl bg-surface p-3">
//               <MapPin className="h-4 w-4 text-secondary-dark shrink-0 mt-0.5" />
//               <span>{BUSINESS_ADDRESS}</span>
//             </div>
//             <div className="flex items-start gap-2.5 rounded-xl bg-surface p-3">
//               <Clock className="h-4 w-4 text-secondary-dark shrink-0 mt-0.5" />
//               <span>{OPEN_HOURS}</span>
//             </div>
//           </div>

//           {/* Action buttons */}
//           <div className="mt-6 grid gap-3">
            
//             <a  href={`tel:${PHONE_NUMBER}`}
//               className="flex items-center justify-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-primary"
//             >
//               <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
//             </a>
            
//             <a  href={whatsappLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white"
//             >
//               <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
//             </a>
//           </div>

//           {/* Short SEO text */}
//           <p className="mt-6 text-center text-[11px] text-primary/50 leading-relaxed">
//             Serving Bhimavaram and nearby villages including Palakollu,
//             Narasapuram, Tanuku, Akiveedu, Undi and Attili — pickup & drop,
//             local trips, and outstation travel with an experienced local driver.
//           </p>
//         </div>
//       </main>
//     </>
//   );
// }


import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

// ⚠️ Replace with your real details
const BUSINESS_NAME = "Premium Car Travels";
const PHONE_NUMBER = "+918555961443";
const PHONE_DISPLAY = "+91 8555961443";
const WHATSAPP_NUMBER = "918555961443";
const WHATSAPP_MESSAGE = "Hi, I need a car with driver in Bhimavaram.";
const BUSINESS_ADDRESS = "Main Road, Bhimavaram, West Godavari, Andhra Pradesh 534201";
const OPEN_HOURS = "Open 24 hours";
const LAT = 16.5449;
const LNG = 81.5212;

export const metadata = buildMetadata({
  title: "Premium Car Travels Bhimavaram — Contact Number & WhatsApp",
  description:
    "Premium Car Travels — car & driver service in Bhimavaram and nearby villages. Call or WhatsApp us directly for pickup, drop, local trips and outstation travel.",
  path: "/contact-bhimavaram",
  keywords: [
    "Premium Car Travels Bhimavaram contact",
    "car driver Bhimavaram phone number",
    "car travels Bhimavaram WhatsApp",
  ],
});

export default function ContactBhimavaramPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS_NAME,
    telephone: PHONE_NUMBER,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_ADDRESS,
      addressLocality: "Bhimavaram",
      addressRegion: "Andhra Pradesh",
      postalCode: "534201",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: LAT, longitude: LNG },
    url: "https://YOUR_DOMAIN.com/contact-bhimavaram",
    priceRange: "₹₹",
  };

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contact-bhimavaram" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <main
        className="relative min-h-screen flex items-center justify-center px-4 py-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/baleno.jpg')" }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-primary/70" />

        {/* Card */}
        <div className="relative z-10 w-full max-w-md rounded-2xl bg-white/95 backdrop-blur-sm border border-white/10 shadow-soft p-6 sm:p-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-lg font-semibold text-primary">{BUSINESS_NAME}</h1>
            <p className="text-xs text-primary/60 mt-1">
              Car & Driver Service — Bhimavaram
            </p>
          </div>

          {/* Contact details */}
          <div className="mt-6 space-y-3 text-xs text-primary/70">
            <div className="flex items-start gap-2.5 rounded-xl bg-surface p-3">
              <Phone className="h-4 w-4 text-secondary-dark shrink-0 mt-0.5" />
              <span>{PHONE_DISPLAY}</span>
            </div>
            <div className="flex items-start gap-2.5 rounded-xl bg-surface p-3">
              <MapPin className="h-4 w-4 text-secondary-dark shrink-0 mt-0.5" />
              <span>{BUSINESS_ADDRESS}</span>
            </div>
            <div className="flex items-start gap-2.5 rounded-xl bg-surface p-3">
              <Clock className="h-4 w-4 text-secondary-dark shrink-0 mt-0.5" />
              <span>{OPEN_HOURS}</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-6 grid gap-3">
            
            <a  href={`tel:${PHONE_NUMBER}`}
              className="flex items-center justify-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-primary"
            >
              <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
            </a>
            
            <a href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>

          {/* Short SEO text */}
          <p className="mt-6 text-center text-[11px] text-primary/50 leading-relaxed">
            Serving Bhimavaram and nearby villages including Palakollu,
            Narasapuram, Tanuku, Akiveedu, Undi and Attili — pickup & drop,
            local trips, and outstation travel with an experienced local driver.
          </p>
        </div>
      </main>
    </>
  );
}
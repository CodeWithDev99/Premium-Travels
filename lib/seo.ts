import type { Metadata } from "next";
import { SITE } from "./constants";

interface SeoInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
}

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  image = "/images/hero/hero-1.jpg",
}: SeoInput): Metadata {
  const url = `${SITE.domain}${path}`;
  const fullTitle = `${title} | ${SITE.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "car travels",
      "cab service",
      "Bhimavaram taxi",
      "West Godavari car rental",
      "railway station pickup",
      ...keywords,
    ],
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.domain}/#business`,
    name: SITE.name,
    image: `${SITE.domain}/images/hero/hero-1.jpg`,
    url: SITE.domain,
    telephone: `+91${SITE.phone}`,
    // email: SITE.email,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bhimavaram",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN",
    },
    areaServed: ["Bhimavaram", "Palakollu", "Narasapuram", "Akividu", "Undi"],
    openingHours: "Mo-Su 00:00-23:59",
    sameAs: ["https://facebook.com", "https://instagram.com"],
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.domain,
    logo: `${SITE.domain}/images/hero/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+91${SITE.phone}`,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Telugu"],
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.domain}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function reviewSchema(reviews: { name: string; rating: number; text: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: SITE.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: reviews.length.toString(),
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: r.rating.toString() },
      reviewBody: r.text,
    })),
  };
}

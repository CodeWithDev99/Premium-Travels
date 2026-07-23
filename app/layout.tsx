import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { buildMetadata, localBusinessSchema, organizationSchema } from "@/lib/seo";
import { SITE } from "@/lib/constants";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  ...buildMetadata({
    title: "Premium Car Travels | Comfort, Trust, Always",
    description:
      "Premium Car Travels offers safe, comfortable car rides across Bhimavaram, Palakollu, Narasapuram, Akividu and Undi. Railway station pickup & drop, local trips, and 24/7 service.",
    path: "/",
    keywords: ["Premium Car Travels", "Siva Teja Travels", "car travels Bhimavaram"],
  }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}

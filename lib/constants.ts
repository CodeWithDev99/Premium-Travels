export const SITE = {
  name: "Premium Car Travels",
  tagline: "Comfort • Trust • Always",
  domain: "https://www.premiumcartravels.com",
  phone: "8555961443",
  phoneDisplay: "+91 85559 61443",
  whatsapp: "918555961443",
  email: "ssvtejatravels@gmail.com",
  owner: "Siva Teja",
  addressArea: "Bhimavaram, West Godavari, Andhra Pradesh",
  foundingYear: "2020",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Prebooking", href: "/prebooking" },
  { label: "Local Trips", href: "/trips" },
  { label: "Our Gallery", href: "/gallery" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const WHATSAPP_LINK = (message?: string) =>
  `https://wa.me/${SITE.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const CALL_LINK = `tel:+91${SITE.phone}`;

export const SOCIAL_LINKS = [
  { name: "Facebook", href: "https://facebook.com" },
  { name: "Instagram", href: "https://instagram.com" },
  { name: "WhatsApp", href: WHATSAPP_LINK() },
];

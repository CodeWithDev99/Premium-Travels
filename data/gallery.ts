export interface GalleryItem {
  id: string;
  category: "cars" | "trips" | "railway" | "functions" | "families" | "nature";
  image: string;
  caption: string;
}

export const galleryItems: GalleryItem[] = [
  { id: "g1", category: "cars", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80", caption: "Maruti Suzuki Baleno – Ready for Every Trip" },
  { id: "g2", category: "cars", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80", caption: "Maruti Suzuki Ertiga – Comfort for Everyone" },
  { id: "g3", category: "cars", image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80", caption: "Spacious & Comfortable 5 & 7 Seater Cars" },
  { id: "g4", category: "nature", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80", caption: "Local Trips – Safe and Smooth Rides" },
  { id: "g5", category: "railway", image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=800&q=80", caption: "Railway Station Pickup & Drop" },
  { id: "g6", category: "nature", image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80", caption: "Connecting You to Every Destination" },
  { id: "g7", category: "trips", image: "https://images.unsplash.com/photo-1553260168-69b041873e65?w=800&q=80", caption: "Your Comfort. Our Responsibility" },
  { id: "g8", category: "families", image: "https://images.unsplash.com/photo-1476234251651-f353703a034d?w=800&q=80", caption: "More Than Rides, We Deliver Trust" },
  { id: "g9", category: "nature", image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80", caption: "24x7 Service, Anytime, Anywhere" },
  { id: "g10", category: "functions", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", caption: "Memorable Rides for Special Functions" },
  { id: "g11", category: "trips", image: "https://images.unsplash.com/photo-1541348263662-e068662d82af?w=800&q=80", caption: "Clean & Comfortable Interiors" },
  { id: "g12", category: "families", image: "https://images.unsplash.com/photo-1591456983933-0a76246db7ea?w=800&q=80", caption: "Family Journeys Made Easy" },
];

export const galleryCategories = [
  { label: "All", value: "all" },
  { label: "Cars", value: "cars" },
  { label: "Trips", value: "trips" },
  { label: "Railway", value: "railway" },
  { label: "Functions", value: "functions" },
  { label: "Families", value: "families" },
  { label: "Nature", value: "nature" },
];

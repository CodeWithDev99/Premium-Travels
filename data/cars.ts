export interface Car {
  id: string;
  name: string;
  brand: string;
  seats: number;
  image: string;
  tagline: string;
  features: string[];
}

export const cars: Car[] = [
  {
    id: "baleno",
    name: "Baleno",
    brand: "Maruti Suzuki",
    seats: 5,
    image: "/images/baleno.jpg",
    tagline: "Perfect for City & Local Rides",
    features: [
      "Comfortable seating for 5",
      "Ideal for local trips",
      "Clean and well maintained",
      "Available 24/7",
    ],
  },
  {
    id: "ertiga",
    name: "Ertiga",
    brand: "Maruti Suzuki",
    seats: 7,
    image: "/images/ertiga.jpg",
    tagline: "Spacious Rides for Family & Business",
    features: [
      "Spacious seating for 7",
      "Ideal for family journeys",
      "Ample luggage space",
      "Available 24/7",
    ],
  },
];
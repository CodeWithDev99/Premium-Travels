export interface Review {
  id: string;
  name: string;
  city: string;
  rating: number;
  text: string;
  image: string;
}

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Ravi Kumar",
    city: "Bhimavaram",
    rating: 5,
    text: "Excellent service! On time and very comfortable ride.",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: "r2",
    name: "Harsha",
    city: "Narasapuram",
    rating: 5,
    text: "Safe and smooth ride for my family trip. Thank you Siva Teja!",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: "r3",
    name: "Prasad",
    city: "Palakollu",
    rating: 5,
    text: "Safe and smooth journey to Palakollu. Thank you Siva Teja Travels!",
    image: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: "r4",
    name: "Anil",
    city: "Undi",
    rating: 5,
    text: "Very polite driver and clean car. Will book again.",
    image: "https://i.pravatar.cc/150?img=14",
  },
];

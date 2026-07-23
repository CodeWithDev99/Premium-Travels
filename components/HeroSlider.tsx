// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   CheckCircle2,
//   MapPin,
//   MessageCircle,
// } from "lucide-react";
// import { WHATSAPP_LINK } from "@/lib/constants";

// const highlights = [
//   "Reliable Drivers",
//   "Clean & Well Maintained Cars",
//   "24/7 Support",
// ];

// const carSlides = [
//   {
//     id: "baleno",
//     name: "BALENO",
//     seats: 5,
//     image: "/images/baleno.jpg",
//     alt: "Maruti Suzuki Baleno",
//   },
//   {
//     id: "ertiga",
//     name: "ERTIGA",
//     seats: 7,
//     image: "/images/ertiga.jpg",
//     alt: "Maruti Suzuki Ertiga",
//   },
// ];

// const SLIDE_INTERVAL = 4000;

// export default function HeroSlider() {
//   const [activeSlide, setActiveSlide] = useState(0);

//   useEffect(() => {
//     const timer = window.setInterval(() => {
//       setActiveSlide((previous) => {
//         return (previous + 1) % carSlides.length;
//       });
//     }, SLIDE_INTERVAL);

//     return () => window.clearInterval(timer);
//   }, []);

//   const activeCar = carSlides[activeSlide];

//   return (
//     <section className="relative min-h-[515px] w-full overflow-hidden bg-[#031b31] lg:h-[515px]">
//       {/* Sliding car background */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={activeCar.id}
//           initial={{ opacity: 0, x: 100, scale: 1.04 }}
//           animate={{ opacity: 1, x: 0, scale: 1 }}
//           exit={{ opacity: 0, x: -100, scale: 0.98 }}
//           transition={{
//             duration: 0.8,
//             ease: "easeInOut",
//           }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={activeCar.image}
//             alt={activeCar.alt}
//             fill
//             priority
//             sizes="100vw"
//             className="object-cover object-center"
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* Dark overlays for readable text */}
//       <div className="absolute inset-0 bg-[#031b31]/45" />
//       <div className="absolute inset-0 bg-gradient-to-r from-[#03182d]/95 via-[#03182d]/80 to-[#03182d]/25" />
//       <div className="absolute inset-0 bg-gradient-to-t from-[#03182d]/70 via-transparent to-[#03182d]/20" />

//       <div className="container-wrap relative z-10 flex min-h-[515px] items-center">
//         <div className="grid w-full items-center lg:grid-cols-[52%_48%]">
//           {/* Hero text */}
//           <motion.div
//             initial={{ opacity: 0, x: -35 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{
//               duration: 0.65,
//               ease: "easeOut",
//             }}
//             className="py-16 lg:py-0"
//           >
//             <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#ffb916]">
//               <MapPin className="h-4 w-4 fill-[#ffb916] text-[#ffb916]" />
//               Bhimavaram &amp; Nearby
//             </div>

//             <h1 className="text-[42px] font-extrabold leading-[1.06] tracking-[-1.5px] text-white sm:text-5xl lg:text-[55px]">
//               Your Journey,
//               <br />
//               <span className="text-[#ffb916]">
//                 Our Responsibility
//               </span>
//             </h1>

//             <p className="mt-5 max-w-[550px] text-base leading-6 text-white/90 lg:text-[17px] lg:leading-7">
//               Safe, Comfortable and Punctual car travel for your every need –
//               Local Trips &amp; Railway Station Pickups/Drops.
//             </p>

//             <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
//               {highlights.map((highlight) => (
//                 <span
//                   key={highlight}
//                   className="flex items-center gap-2 text-xs font-medium text-white sm:text-sm"
//                 >
//                   <CheckCircle2 className="h-4 w-4 fill-[#ffb916] text-[#ffb916]" />
//                   {highlight}
//                 </span>
//               ))}
//             </div>

//             <div className="mt-7 flex flex-wrap gap-3">
//               <Link
//                 href="/prebooking"
//                 className="inline-flex h-[44px] items-center justify-center rounded-[9px] bg-[#ffb916] px-7 text-sm font-bold text-[#061b31] shadow-[0_8px_20px_rgba(255,185,22,0.28)] transition-colors hover:bg-[#ffc63d]"
//               >
//                 Prebooking
//               </Link>

//               <a
//                 href={WHATSAPP_LINK(
//                   "Hi! I would like to book a ride with Premium Car Travels."
//                 )}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex h-[44px] items-center justify-center gap-2 rounded-[9px] border border-white/70 bg-[#061b31]/55 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
//               >
//                 <MessageCircle className="h-5 w-5" />
//                 Chat on WhatsApp
//               </a>
//             </div>
//           </motion.div>

//           {/* Seat badge */}
//           <div className="pointer-events-none absolute right-[13%] top-[27%] hidden lg:block">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={`${activeCar.id}-badge`}
//                 initial={{ opacity: 0, y: -15, scale: 0.85 }}
//                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                 exit={{ opacity: 0, y: 15, scale: 0.85 }}
//                 transition={{ duration: 0.45 }}
//                 className="flex h-[78px] w-[78px] flex-col items-center justify-center rounded-full bg-[#ffb916] text-center text-[#061b31] shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
//               >
//                 <span className="text-[26px] font-extrabold leading-none">
//                   {activeCar.seats}
//                 </span>

//                 <span className="mt-1 text-[9px] font-extrabold uppercase leading-[10px]">
//                   Seater
//                   <br />
//                   {activeCar.name}
//                 </span>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>

//       {/* Slide controls */}
//       <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
//         {carSlides.map((car, index) => (
//           <button
//             key={car.id}
//             type="button"
//             aria-label={`Show ${car.name}`}
//             onClick={() => setActiveSlide(index)}
//             className={`h-2 rounded-full transition-all duration-300 ${
//               activeSlide === index
//                 ? "w-8 bg-[#ffb916]"
//                 : "w-2 bg-white/50 hover:bg-white/80"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

interface HeroCar {
  id: string | number;
  name: string;
  brand?: string;
  seats: number;
  image: string;
}

interface HeroSliderProps {
  cars?: HeroCar[];
}

const defaultCars: HeroCar[] = [
  {
    id: "baleno",
    name: "Baleno",
    brand: "Maruti Suzuki",
    seats: 5,
    image: "/images/baleno.jpg",
  },
  {
    id: "ertiga",
    name: "Ertiga",
    brand: "Maruti Suzuki",
    seats: 7,
    image: "/images/ertiga.jpg",
  },
];

const highlights = [
  "Reliable Drivers",
  "Clean & Well Maintained Cars",
  "24/7 Support",
];

const SLIDE_INTERVAL = 4000;

export default function HeroSlider({
  cars = defaultCars,
}: HeroSliderProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const availableCars = cars.length > 0 ? cars : defaultCars;
  const activeCar =
    availableCars[activeSlide % availableCars.length];

  useEffect(() => {
    if (availableCars.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => {
        return (current + 1) % availableCars.length;
      });
    }, SLIDE_INTERVAL);

    return () => window.clearInterval(timer);
  }, [availableCars.length]);

  return (
    <section className="relative min-h-[515px] w-full overflow-hidden bg-[#031b31] lg:h-[515px]">
      {/* Car background slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCar.id}
          initial={{
            opacity: 0,
            x: 80,
            scale: 1.03,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            x: -80,
            scale: 0.98,
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <Image
            src={activeCar.image}
            alt={`${activeCar.brand ?? "Maruti Suzuki"} ${activeCar.name}`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-[#031b31]/45" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#03182d]/95 via-[#03182d]/80 to-[#03182d]/25" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#03182d]/70 via-transparent to-[#03182d]/20" />

      <div className="container-wrap relative z-10 flex min-h-[515px] items-center">
        <div className="grid w-full items-center lg:grid-cols-[52%_48%]">
          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
            className="py-16 lg:py-0"
          >
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#ffb916]">
              <MapPin className="h-4 w-4 fill-[#ffb916] text-[#ffb916]" />
              Bhimavaram &amp; Nearby
            </div>

            <h1 className="text-[42px] font-extrabold leading-[1.06] tracking-[-1.5px] text-white sm:text-5xl lg:text-[55px]">
              Your Journey,
              <br />

              <span className="text-[#ffb916]">
                Our Responsibility
              </span>
            </h1>

            <p className="mt-5 max-w-[550px] text-base leading-6 text-white/90 lg:text-[17px] lg:leading-7">
              Safe, Comfortable and Punctual car travel for your
              every need – Local Trips &amp; Railway Station
              Pickups/Drops.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="flex items-center gap-2 text-xs font-medium text-white sm:text-sm"
                >
                  <CheckCircle2 className="h-4 w-4 fill-[#ffb916] text-[#ffb916]" />
                  {highlight}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/prebooking"
                className="inline-flex h-[44px] items-center justify-center rounded-[9px] bg-[#ffb916] px-7 text-sm font-bold text-[#061b31] shadow-[0_8px_20px_rgba(255,185,22,0.28)] transition-colors hover:bg-[#ffc63d]"
              >
                Prebooking
              </Link>

              <a
                href={WHATSAPP_LINK(
                  "Hi! I would like to book a ride with Premium Car Travels."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[44px] items-center justify-center gap-2 rounded-[9px] border border-white/70 bg-[#061b31]/55 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          <div className="pointer-events-none absolute right-[13%] top-[27%] hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCar.id}-badge`}
                initial={{
                  opacity: 0,
                  y: -15,
                  scale: 0.85,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: 15,
                  scale: 0.85,
                }}
                transition={{ duration: 0.45 }}
                className="flex h-[78px] w-[78px] flex-col items-center justify-center rounded-full bg-[#ffb916] text-center text-[#061b31] shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
              >
                <span className="text-[26px] font-extrabold leading-none">
                  {activeCar.seats}
                </span>

                <span className="mt-1 text-[9px] font-extrabold uppercase leading-[10px]">
                  Seater
                  <br />
                  {activeCar.name}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {availableCars.map((car, index) => (
          <button
            key={car.id}
            type="button"
            aria-label={`Show ${car.name}`}
            onClick={() => setActiveSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? "w-8 bg-[#ffb916]"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
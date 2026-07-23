"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle: string;
  backgroundImage: string;
  showCars?: boolean;
}

const heroCars = [
  {
    id: "baleno",
    name: "BALENO",
    seats: 5,
    image: "/images/baleno.jpg",
    width: "w-[310px]",
    height: "h-[215px]",
  },
  {
    id: "ertiga",
    name: "ERTIGA",
    seats: 7,
    image: "/images/ertiga.jpg",
    width: "w-[340px]",
    height: "h-[230px]",
  },
];

export default function Hero({
  eyebrow,
  title,
  highlight,
  subtitle,
  backgroundImage,
  showCars = true,
}: HeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[440px] w-full overflow-hidden">
      <Image
        src={backgroundImage}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#031a31]/95 via-[#06233d]/70 to-[#031a31]/20" />

      <div className="container-wrap relative z-10 flex h-full items-center">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[42%_58%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {eyebrow && (
              <span className="mb-4 inline-flex rounded-full bg-[#ffbd16]/15 px-4 py-2 text-sm font-semibold text-[#ffbd16]">
                {eyebrow}
              </span>
            )}

            <h1 className="text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              {title}
              {highlight && (
                <>
                  <br />
                  <span className="text-[#ffbd16]">{highlight}</span>
                </>
              )}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/85 lg:text-lg">
              {subtitle}
            </p>

            <div className="mt-6 h-[3px] w-20 rounded-full bg-[#ffbd16]" />
          </motion.div>

          {showCars && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative hidden h-[300px] items-end justify-end lg:flex"
            >
              {heroCars.map((car, index) => (
                <div
                  key={car.id}
                  className={`relative ${car.width} ${car.height} ${
                    index === 1 ? "-ml-20 z-20" : "z-10"
                  }`}
                >
                  <div className="absolute left-1/2 top-0 z-30 flex h-[74px] w-[74px] -translate-x-1/2 -translate-y-8 flex-col items-center justify-center rounded-full bg-[#ffbd16] text-center text-[#071a2e] shadow-xl">
                    <span className="text-2xl font-extrabold leading-none">
                      {car.seats}
                    </span>
                    <span className="mt-1 text-[9px] font-bold uppercase leading-[10px]">
                      Seater
                      <br />
                      {car.name}
                    </span>
                  </div>

                  <Image
                    src={car.image}
                    alt={`Maruti Suzuki ${car.name}`}
                    fill
                    priority
                    sizes={index === 0 ? "310px" : "340px"}
                    className="object-contain object-bottom drop-shadow-[0_22px_18px_rgba(0,0,0,0.45)]"
                  />
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
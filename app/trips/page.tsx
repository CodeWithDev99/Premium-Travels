// import Hero from "@/components/Hero";
// import CarCard from "@/components/CarCard";
// import SectionTitle from "@/components/SectionTitle";
// import TestimonialSlider from "@/components/TestimonialSlider";
// import CTA from "@/components/CTA";

// import { services } from "@/data/services";
// import { cars } from "@/data/cars";
// import { locations } from "@/data/locations";
// import { reviews } from "@/data/reviews";

// import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

// import {
//   ArrowUpRight,
//   Building2,
//   CalendarCheck2,
//   Clock3,
//   Landmark,
//   Map,
//   MapPin,
//   MapPinned,
//   Navigation,
//   Route,
//   School,
//   TrainFront,
//   type LucideIcon,
// } from "lucide-react";

// export const metadata = buildMetadata({
//   title: "Local Trips — Railway, Outstation, Corporate & More",
//   description:
//     "Explore all local trip services from Premium Car Travels: railway pickup & drop, outstation trips, temple visits, corporate travel, school pickup and 24/7 emergency rides.",
//   path: "/trips",
//   keywords: [
//     "local trips Bhimavaram",
//     "railway pickup drop",
//     "outstation cab",
//   ],
// });

// const localTripServices = services.slice(0, 8);

// const serviceIcons: LucideIcon[] = [
//   TrainFront,
//   MapPinned,
//   Landmark,
//   Building2,
//   School,
//   Clock3,
//   CalendarCheck2,
//   Navigation,
// ];

// export default function TripsPage() {
//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(
//             breadcrumbSchema([
//               {
//                 name: "Home",
//                 path: "/",
//               },
//               {
//                 name: "Local Trips",
//                 path: "/trips",
//               },
//             ])
//           ),
//         }}
//       />

//       <Hero
//         eyebrow="Local Trips & More"
//         title="Local Trips"
//         highlight="Made Easy"
//         subtitle="Safe rides. On time. Every time. From daily errands to railway transfers, we've got you covered."
//         backgroundImage="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&q=80"
//       />

//       {/* Local trip services */}
//       <section className="section-pad bg-slate-50">
//         <div className="container-wrap">
//           <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
//             {/* Section introduction */}
//             <div className="lg:sticky lg:top-28 lg:self-start">
//               <span className="inline-flex rounded-full bg-secondary/15 px-4 py-2 text-sm font-semibold text-primary">
//                 Our Local Trip Services
//               </span>

//               <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl">
//                 Every Trip,
//                 <span className="block text-secondary">
//                   Perfectly Handled
//                 </span>
//               </h2>

//               <p className="mt-5 max-w-md text-lg leading-8 text-slate-600">
//                 From everyday errands to special occasions, we tailor every
//                 ride to your needs.
//               </p>

//               <a
//                 href="/contact"
//                 className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
//               >
//                 Plan your trip
//                 <ArrowUpRight className="h-4 w-4" />
//               </a>
//             </div>

//             {/* Service list */}
//             <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
//               {localTripServices.map((service, index) => {
//                 const Icon = serviceIcons[index] ?? Route;

//                 return (
//                   <a
//                     key={service.id}
//                     href={`/trips/${service.id}`}
//                     className="group grid gap-5 border-b border-slate-200 p-6 transition duration-300 last:border-b-0 hover:bg-slate-50 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-7"
//                   >
//                     <div className="flex items-center gap-4">
//                       <span className="w-6 text-sm font-bold text-slate-300">
//                         {String(index + 1).padStart(2, "0")}
//                       </span>

//                       <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-secondary/15 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
//                         <Icon className="h-6 w-6" />
//                       </div>
//                     </div>

//                     <div>
//                       <h3 className="text-xl font-bold text-primary">
//                         {service.title}
//                       </h3>

//                       <p className="mt-2 max-w-xl leading-7 text-slate-600">
//                         {service.description}
//                       </p>
//                     </div>

//                     <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-primary transition duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
//                       <ArrowUpRight className="h-4 w-4" />
//                     </div>
//                   </a>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Fleet */}
//       <section className="section-pad bg-white">
//         <div className="container-wrap">
//           <SectionTitle
//             eyebrow="Our Fleet"
//             title="Our Cars"
//             description="Choose a comfortable and well-maintained vehicle for your next journey."
//           />

//           <div className="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-2">
//             {cars.map((car, index) => (
//               <CarCard
//                 key={car.id}
//                 car={car}
//                 index={index}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Service locations */}
//       <section className="section-pad relative overflow-hidden bg-primary text-white">
//         <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
//         <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

//         <div className="container-wrap relative">
//           <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20">
//             {/* Location introduction */}
//             <div className="max-w-xl">
//               <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
//                 <Map className="h-4 w-4 text-secondary" />
//                 Service Locations
//               </span>

//               <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
//                 Where We Drive You
//               </h2>

//               <p className="mt-5 text-lg leading-8 text-white/70">
//                 Covering Bhimavaram and every nearby town, village and railway
//                 station.
//               </p>

//               <div className="mt-8 grid max-w-md grid-cols-2 gap-4">
//                 <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
//                   <p className="text-3xl font-bold text-secondary">
//                     {locations.length}+
//                   </p>

//                   <p className="mt-1 text-sm leading-6 text-white/60">
//                     Covered destinations
//                   </p>
//                 </div>

//                 <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
//                   <p className="text-3xl font-bold text-secondary">24/7</p>

//                   <p className="mt-1 text-sm leading-6 text-white/60">
//                     Pickup availability
//                   </p>
//                 </div>
//               </div>

//               <a
//                 href="/contact"
//                 className="mt-8 inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3 font-semibold text-primary transition duration-300 hover:-translate-y-0.5 hover:brightness-95"
//               >
//                 Book your ride
//                 <ArrowUpRight className="ml-2 h-4 w-4" />
//               </a>
//             </div>

//             {/* Coverage panel */}
//             <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 shadow-2xl backdrop-blur sm:p-7">
//               <div className="flex items-center justify-between border-b border-white/10 pb-6">
//                 <div>
//                   <p className="text-sm font-semibold text-secondary">
//                     Active service network
//                   </p>

//                   <h3 className="mt-1 text-2xl font-bold">
//                     Bhimavaram Coverage
//                   </h3>
//                 </div>

//                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
//                   <Navigation className="h-5 w-5" />
//                 </div>
//               </div>

//               <div className="mt-6 grid gap-3 sm:grid-cols-2">
//                 {locations.map((location, index) => (
//                   <div
//                     key={location.id}
//                     className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-secondary/40 hover:bg-white/10"
//                   >
//                     <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
//                       <MapPin className="h-5 w-5 text-secondary" />

//                       {index === 0 && (
//                         <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-primary bg-green-400" />
//                       )}
//                     </div>

//                     <div className="min-w-0 flex-1">
//                       <p className="truncate font-semibold text-white">
//                         {location.name}
//                       </p>

//                       <p className="mt-1 text-xs text-white/50">
//                         Pickup and drop available
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-secondary p-5 text-primary sm:flex-row sm:items-center sm:justify-between">
//                 <div className="flex items-center gap-3">
//                   <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
//                     <Route className="h-5 w-5" />
//                   </div>

//                   <div>
//                     <p className="font-bold">
//                       Need another destination?
//                     </p>

//                     <p className="mt-1 text-sm text-primary/70">
//                       Request a custom pickup or drop location.
//                     </p>
//                   </div>
//                 </div>

//                 <a
//                   href="/contact"
//                   className="inline-flex shrink-0 items-center font-semibold"
//                 >
//                   Ask us
//                   <ArrowUpRight className="ml-2 h-4 w-4" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Reviews */}
//       <section className="section-pad">
//         <div className="container-wrap">
//           <SectionTitle
//             eyebrow="Reviews"
//             title="What Our Customers Say"
//             description="Real experiences from customers who travel with us."
//           />

//           <div className="mt-14">
//             <TestimonialSlider reviews={reviews} />
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <CTA />
//     </>
//   );
// }


import Hero from "@/components/Hero";
import CarCard from "@/components/CarCard";
import SectionTitle from "@/components/SectionTitle";
import TestimonialSlider from "@/components/TestimonialSlider";
import CTA from "@/components/CTA";

import { services } from "@/data/services";
import { cars } from "@/data/cars";
import { locations } from "@/data/locations";
import { reviews } from "@/data/reviews";

import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

import {
  ArrowUpRight,
  Building2,
  CalendarCheck2,
  Clock3,
  Landmark,
  Map,
  MapPin,
  MapPinned,
  Navigation,
  Route,
  School,
  TrainFront,
  type LucideIcon,
} from "lucide-react";

export const metadata = buildMetadata({
  title: "Local Trips — Railway, Outstation, Corporate & More",
  description:
    "Explore all local trip services from Premium Car Travels: railway pickup & drop, outstation trips, temple visits, corporate travel, school pickup and 24/7 emergency rides.",
  path: "/trips",
  keywords: [
    "local trips Bhimavaram",
    "railway pickup drop",
    "outstation cab",
  ],
});

const localTripServices = services.slice(0, 8);

const serviceIcons: LucideIcon[] = [
  TrainFront,
  MapPinned,
  Landmark,
  Building2,
  School,
  Clock3,
  CalendarCheck2,
  Navigation,
];

export default function TripsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              {
                name: "Home",
                path: "/",
              },
              {
                name: "Local Trips",
                path: "/trips",
              },
            ])
          ),
        }}
      />

      <Hero
        eyebrow="Local Trips & More"
        title="Local Trips"
        highlight="Made Easy"
        subtitle="Safe rides. On time. Every time. From daily errands to railway transfers, we've got you covered."
        backgroundImage="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&q=80"
      />

      {/* Local trip services */}
      <section className="bg-slate-50 py-14 sm:py-20 lg:py-24">
        <div className="container-wrap">
          <div className="grid gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            {/* Section introduction */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="inline-flex rounded-full bg-secondary/15 px-3.5 py-2 text-xs font-semibold text-primary sm:px-4 sm:text-sm">
                Our Local Trip Services
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl lg:mt-6 lg:text-5xl">
                Every Trip,
                <span className="block text-secondary">
                  Perfectly Handled
                </span>
              </h2>

              <p className="mt-4 max-w-md text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
                From everyday errands to special occasions, we tailor every
                ride to your needs.
              </p>

              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-primary/90 sm:mt-8 sm:px-6"
              >
                Plan your trip
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Service list */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:rounded-[2rem]">
              {localTripServices.map((service, index) => {
                const Icon = serviceIcons[index] ?? Route;

                return (
                  <a
                    key={service.id}
                    href={`/trips/${service.id}`}
                    className="group block border-b border-slate-200 p-4 transition duration-300 last:border-b-0 hover:bg-slate-50 sm:p-6 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-5 lg:p-7"
                  >
                    {/* Mobile and tablet */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="mt-3 w-6 shrink-0 text-xs font-bold text-slate-300 sm:text-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white sm:h-14 sm:w-14 sm:rounded-2xl">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>

                      <div className="min-w-0 flex-1 lg:hidden">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-base font-bold leading-6 text-primary sm:text-lg">
                            {service.title}
                          </h3>

                          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                        </div>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Desktop content */}
                    <div className="hidden lg:block">
                      <h3 className="text-xl font-bold text-primary">
                        {service.title}
                      </h3>

                      <p className="mt-2 max-w-xl leading-7 text-slate-600">
                        {service.description}
                      </p>
                    </div>

                    <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-primary transition duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white lg:flex">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="bg-white py-14 sm:py-20 lg:py-24">
        <div className="container-wrap">
          <SectionTitle
            eyebrow="Our Fleet"
            title="Our Cars"
            description="Choose a comfortable and well-maintained vehicle for your next journey."
          />

          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:mt-14 sm:gap-8 md:grid-cols-2">
            {cars.map((car, index) => (
              <CarCard
                key={car.id}
                car={car}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service locations */}
      <section className="relative overflow-hidden bg-primary py-14 text-white sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

        <div className="container-wrap relative">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20">
            {/* Location introduction */}
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3.5 py-2 text-xs font-semibold backdrop-blur sm:px-4 sm:text-sm">
                <Map className="h-4 w-4 text-secondary" />
                Service Locations
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:mt-6 sm:text-4xl lg:text-5xl">
                Where We Drive You
              </h2>

              <p className="mt-4 text-base leading-7 text-white/70 sm:mt-5 sm:text-lg sm:leading-8">
                Covering Bhimavaram and every nearby town, village and railway
                station.
              </p>

              <div className="mt-7 grid max-w-md grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur sm:p-5">
                  <p className="text-2xl font-bold text-secondary sm:text-3xl">
                    {locations.length}+
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/60">
                    Covered destinations
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur sm:p-5">
                  <p className="text-2xl font-bold text-secondary sm:text-3xl">
                    24/7
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/60">
                    Pickup availability
                  </p>
                </div>
              </div>

              <a
                href="/contact"
                className="mt-7 inline-flex items-center justify-center rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-primary transition duration-300 hover:-translate-y-0.5 hover:brightness-95 sm:mt-8 sm:px-6"
              >
                Book your ride
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Coverage panel */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.07] p-4 shadow-2xl backdrop-blur sm:rounded-[2rem] sm:p-7">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5 sm:pb-6">
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-secondary sm:text-sm">
                    Active service network
                  </p>

                  <h3 className="mt-1 text-xl font-bold sm:text-2xl">
                    Bhimavaram Coverage
                  </h3>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary sm:h-12 sm:w-12 sm:rounded-2xl">
                  <Navigation className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2">
                {locations.map((location, index) => (
                  <div
                    key={location.id}
                    className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-3 transition duration-300 hover:-translate-y-0.5 hover:border-secondary/40 hover:bg-white/10 sm:gap-4 sm:rounded-2xl sm:p-4"
                  >
                    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 sm:h-11 sm:w-11 sm:rounded-xl">
                      <MapPin className="h-4 w-4 text-secondary sm:h-5 sm:w-5" />

                      {index === 0 && (
                        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-primary bg-green-400" />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-white sm:text-base">
                        {location.name}
                      </p>

                      <p className="mt-1 text-xs text-white/50">
                        Pickup and drop available
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-col gap-4 rounded-xl bg-secondary p-4 text-primary sm:mt-6 sm:rounded-2xl sm:p-5 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white sm:h-11 sm:w-11 sm:rounded-xl">
                    <Route className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-bold">
                      Need another destination?
                    </p>

                    <p className="mt-1 text-sm leading-6 text-primary/70">
                      Request a custom pickup or drop location.
                    </p>
                  </div>
                </div>

                <a
                  href="/contact"
                  className="inline-flex shrink-0 items-center text-sm font-semibold sm:text-base"
                >
                  Ask us
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="container-wrap">
          <SectionTitle
            eyebrow="Reviews"
            title="What Our Customers Say"
            description="Real experiences from customers who travel with us."
          />

          <div className="mt-10 sm:mt-14">
            <TestimonialSlider reviews={reviews} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTA />
    </>
  );
}
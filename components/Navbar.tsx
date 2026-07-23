"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, WHATSAPP_LINK } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 h-[94px] w-full transition-all duration-300 ${scrolled
          ? "bg-[#031b33]/95 shadow-[0_6px_20px_rgba(0,0,0,0.18)] backdrop-blur-xl"
          : "bg-[#031b33]"
        }`}
    >
      <nav className="mx-auto flex h-full w-full max-w-[1440px] items-center px-6 sm:px-8 lg:px-[50px]">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Premium Car Travels home"
          className="relative h-[86px] w-[230px] shrink-0"
        >
          <Image
            src="/images/Logo.png"
            alt="Premium Car Travels"
            fill
            priority
            sizes="230px"
            className="object-contain object-left"
          />
        </Link>

        {/* Desktop navigation */}
        <ul className="ml-auto hidden h-full items-center gap-[38px] lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;

            return (
              <li key={link.href} className="flex h-full items-center">
                <Link
                  href={link.href}
                  className={`relative flex h-full items-center whitespace-nowrap text-[14px] font-medium transition-colors ${active
                      ? "text-[#ffbd16]"
                      : "text-white hover:text-[#ffbd16]"
                    }`}
                >
                  {link.label}

                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-[21px] left-0 right-0 h-[2px] bg-[#ffbd16]"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop WhatsApp action */}
        <div className="ml-[42px] hidden shrink-0 lg:flex">
          <a
            href={WHATSAPP_LINK(
              "Hi! I would like to book a ride with Premium Car Travels."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[48px] items-center justify-center gap-2 rounded-[11px] bg-[#ffbd16] px-[22px] text-[14px] font-bold text-[#041a30] shadow-[0_5px_14px_rgba(255,189,22,0.22)] transition-colors hover:bg-[#ffc83b]"
          >
            <MessageCircle className="h-[19px] w-[19px]" strokeWidth={2} />
            Chat on WhatsApp
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="ml-auto rounded-md p-2 text-white lg:hidden"
        >
          {open ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-[#031b33]/98 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col px-6 py-4">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block border-b border-white/10 py-3 text-[15px] font-medium ${active ? "text-[#ffbd16]" : "text-white"
                        }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="px-6 pb-6">
              <a
                href={WHATSAPP_LINK(
                  "Hi! I would like to book a ride with Premium Car Travels."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#ffbd16] px-4 py-3 text-sm font-bold text-[#041a30]"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { startTransition, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/lib/services-data";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

const whatsappHref = "https://wa.me/917994073491";

const exploreItems = services.map((service) => ({
  href: `/${service.slug}`,
  label: service.title,
  subtitle: service.subtitle,
}));

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const isHomePage = pathname === "/";
  const isServicePage = services.some((service) => pathname === `/${service.slug}`);

  useEffect(() => {
    startTransition(() => {
      setMenuOpen(false);
      setDestinationsOpen(false);
    });
  }, [pathname]);

  const activeHref = useMemo(() => {
    if (pathname.startsWith("/experience")) return "/experience";
    return pathname;
  }, [pathname]);

  if (isHomePage) {
    return (
      <header className="pointer-events-none absolute inset-x-0 top-0 z-50 text-white">
        <div className="pointer-events-auto mx-auto flex w-full max-w-[1600px] items-start justify-between gap-4 px-5 py-6 sm:px-8 lg:px-10 lg:py-8">
          {/* Desktop left: Menu + Explore */}
          <div className="hidden items-center gap-5 lg:flex">
            <button
              type="button"
              className="inline-flex items-center gap-5 text-white transition hover:text-white/80"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="home-overlay-menu"
            >
              <span className="flex flex-col gap-2" aria-hidden="true">
                <span className="h-0.5 w-10 bg-current" />
                <span className="h-0.5 w-10 bg-current" />
                <span className="h-0.5 w-10 bg-current" />
              </span>
              <span className="text-lg font-semibold uppercase tracking-[0.28em]">Menu</span>
            </button>

            <span className="text-white/60">|</span>

            <div
              className="relative"
              onMouseEnter={() => setDestinationsOpen(true)}
              onMouseLeave={() => setDestinationsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setDestinationsOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={destinationsOpen}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/88 transition hover:text-white"
              >
                <span>Explore</span>
                <span className="text-[0.7rem] opacity-70">▾</span>
              </button>

              <AnimatePresence>
                {destinationsOpen && (
                  <motion.div
                    role="menu"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.16, ease: "easeOut" }}
                    className="absolute left-0 top-full z-50 mt-4 w-[380px] overflow-hidden rounded-[1.75rem] border border-white/18 bg-[rgba(15,34,48,0.84)] shadow-2xl shadow-black/20 backdrop-blur-xl"
                  >
                    <div className="p-4">
                      <div className="px-4 pb-3 pt-1 text-[0.7rem] font-semibold tracking-[0.18em] text-white/48">
                        EXPLORE EXPERIENCES
                      </div>
                      <div className="grid gap-2">
                        {exploreItems.map((item) => (
                          <Link
                            key={item.href}
                            role="menuitem"
                            href={item.href}
                            className="flex flex-col items-start rounded-2xl px-4 py-3 text-left text-sm text-white/84 transition hover:bg-white/10 hover:text-white"
                            onClick={() => setDestinationsOpen(false)}
                          >
                            <span className="font-semibold leading-5">{item.label}</span>
                            <span className="mt-1 text-xs leading-5 text-white/58">{item.subtitle}</span>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-3 border-t border-white/12 pt-3">
                        <Link
                          role="menuitem"
                          href="/experience"
                          className="flex items-center justify-center rounded-2xl border border-white/16 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#274865]"
                          onClick={() => setDestinationsOpen(false)}
                        >
                          View full gallery
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="hidden flex-1 lg:block" aria-hidden="true" />

          {/* Desktop: Book Now */}
          <div className="hidden lg:block">
            <Link
              href={whatsappHref}
              className="inline-flex min-w-[260px] items-center justify-center border-2 border-white px-10 py-5 text-lg font-semibold uppercase tracking-[0.22em] text-white transition duration-300 hover:bg-white hover:text-[#274865]"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile: Explore + Hamburger */}
          <div className="ml-auto flex items-center gap-2 lg:hidden">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/8 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition hover:bg-white/16"
              onClick={() => setDestinationsOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={destinationsOpen}
              aria-controls="home-mobile-explore-menu"
            >
              <span>Explore</span>
              <span className="text-[0.7rem] opacity-80">▾</span>
            </button>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/8 p-3 text-white backdrop-blur-sm transition hover:bg-white/16"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="home-overlay-menu"
            >
              <span className="sr-only">Toggle menu</span>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                ) : (
                  <>
                    <path d="M4 7h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M4 12h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Explore dropdown */}
        <AnimatePresence>
          {destinationsOpen && (
            <motion.div
              id="home-mobile-explore-menu"
              role="menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="pointer-events-auto mx-5 mt-3 rounded-[28px] border border-white/20 bg-[rgba(15,34,48,0.78)] p-4 text-white shadow-2xl shadow-black/20 backdrop-blur-xl sm:mx-8 lg:hidden"
            >
              <div className="px-2 pb-3 pt-1 text-[0.7rem] font-semibold tracking-[0.18em] text-white/48">
                EXPLORE EXPERIENCES
              </div>
              <div className="grid gap-2">
                {exploreItems.map((item) => (
                  <Link
                    key={item.href}
                    role="menuitem"
                    href={item.href}
                    className="flex flex-col items-start rounded-2xl px-4 py-3 text-left text-sm text-white/84 transition hover:bg-white/10 hover:text-white"
                    onClick={() => setDestinationsOpen(false)}
                  >
                    <span className="font-semibold leading-5">{item.label}</span>
                    <span className="mt-1 text-xs leading-5 text-white/58">{item.subtitle}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-3 border-t border-white/12 pt-3">
                <Link
                  role="menuitem"
                  href="/experience"
                  className="flex items-center justify-center rounded-2xl border border-white/16 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#274865]"
                  onClick={() => setDestinationsOpen(false)}
                >
                  View full gallery
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Home overlay nav menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="home-overlay-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="pointer-events-auto mx-5 rounded-[28px] border border-white/20 bg-[rgba(15,34,48,0.72)] p-4 text-white shadow-2xl shadow-black/20 backdrop-blur-xl sm:mx-8 lg:mx-10 lg:mt-2"
            >
              <nav className="flex flex-col gap-2" aria-label="Homepage quick menu">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl px-4 py-3 text-sm font-medium uppercase tracking-[0.18em] text-white/88 transition hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href={whatsappHref}
                  className="mt-2 inline-flex items-center justify-center rounded-2xl border border-white px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-[#274865]"
                >
                  Book Now
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    );
  }

  // Non-home pages
  const navBg = isServicePage
    ? "border border-[#6f95ab]/20 bg-[rgba(16,36,51,0.58)] shadow-[0_20px_60px_rgba(10,24,35,0.28)]"
    : "border border-[#d7e3ea] bg-[rgba(250,252,253,0.94)] shadow-[0_26px_70px_rgba(23,50,71,0.12)]";

  const textColor = isServicePage ? "text-white" : "text-[#173247]";
  const subtleText = isServicePage ? "text-[#d7e8f2]/74" : "text-[#173247]/48";
  const logoBg = isServicePage
    ? "bg-[#6f95ab]/16 shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
    : "bg-[#173247] shadow-[0_10px_24px_rgba(23,50,71,0.16)]";
  const badgeBg = isServicePage
    ? "border border-[#6f95ab]/22 bg-[#6f95ab]/12 text-[#e2eef5]/82 shadow-[0_8px_18px_rgba(0,0,0,0.14)]"
    : "border border-[#d7e3ea] bg-white/80 text-[#173247]/56 shadow-[0_8px_18px_rgba(23,50,71,0.06)]";
  const dotColor = isServicePage ? "bg-[#9ec0d3]" : "bg-[#b89356]";
  const navPillBg = isServicePage ? "bg-[#6f95ab]/12" : "bg-[#edf4f7]";
  const dropdownBg = isServicePage
    ? "border border-[#6f95ab]/22 bg-[rgba(14,31,44,0.94)] shadow-black/20"
    : "border border-[#d7e3ea] bg-[rgba(250,252,253,0.98)] shadow-[rgba(23,50,71,0.14)]";
  const dropdownLabel = isServicePage ? "text-[#d7e8f2]/54" : "text-[#173247]/44";
  const dropdownItemText = isServicePage ? "text-[#eef7fb]/88 hover:bg-white/10 hover:text-white" : "text-[#173247]/84 hover:bg-[#edf4f7] hover:text-[#173247]";
  const dropdownSubtext = isServicePage ? "text-[#c6dbe8]/64" : "text-[#173247]/52";
  const dropdownDivider = isServicePage ? "border-t border-[#6f95ab]/16" : "border-t border-[#d7e3ea]";
  const dropdownCta = isServicePage
    ? "border border-[#6f95ab]/22 bg-[#6f95ab]/14 text-[#f4fbff] hover:bg-[#9ec0d3] hover:text-[#173247]"
    : "bg-[#173247] text-white hover:bg-[#234760]";
  const navLinkActive = "bg-[#173247] text-white shadow-sm";
  const navLinkInactive = isServicePage
    ? "text-[#eef7fb]/82 hover:bg-white/12 hover:text-white"
    : "text-[#173247]/76 hover:bg-white hover:text-[#173247]";
  const bookNowBtn = isServicePage
    ? "border border-[#6f95ab]/20 bg-[#6f95ab]/14 shadow-[0_12px_30px_rgba(0,0,0,0.18)] hover:bg-[#9ec0d3] hover:text-[#173247]"
    : "bg-[#173247] shadow-[0_12px_30px_rgba(23,50,71,0.14)] hover:bg-[#234760]";
  const mobileMenuBtn = isServicePage
    ? "border border-[#6f95ab]/20 bg-[#6f95ab]/14 hover:bg-[#9ec0d3] hover:text-[#173247]"
    : "bg-[#173247] hover:bg-[#234760]";
  const mobilePanelBg = isServicePage
    ? "border border-[#6f95ab]/20 bg-[rgba(14,31,44,0.9)] shadow-black/20"
    : "border border-[#d7e3ea] bg-[rgba(250,252,253,0.98)] shadow-[rgba(23,50,71,0.12)]";
  const mobileLinkInactive = isServicePage
    ? "text-[#eef7fb]/84 hover:bg-white/10 hover:text-white"
    : "text-[#173247]/80 hover:bg-[#edf4f7] hover:text-[#173247]";

  return (
    <header className={isServicePage ? "absolute inset-x-0 top-0 z-50 px-2 pt-2 text-white sm:px-6 sm:pt-4" : "sticky top-0 z-50 px-2 pt-2 sm:px-6 sm:pt-4"}>
      <div className="mx-auto max-w-7xl">
        <div className={`rounded-[1.4rem] px-2 py-2 backdrop-blur-xl sm:rounded-[2rem] sm:px-4 sm:py-3 ${navBg}`}>
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Logo */}
            <Link
              href="/"
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-transform duration-300 hover:scale-[1.03] sm:h-14 sm:w-14 ${logoBg}`}
              aria-label="Go to homepage"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3.5 15.5c2.2-3 4.7-4.5 7.5-4.5 2.1 0 4.1.8 5.9 2.3 1.1.9 2.1 2 3.1 3.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                <path d="M7 14.5c.6-2.6 2-5 4.3-7 1.4 1 2.4 2.2 3.1 3.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                <path d="M5 18.5h13.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </Link>

            <div className="min-w-0 flex-1 lg:px-2">
              {/* Desktop nav */}
              <div className="hidden items-center justify-between gap-5 lg:flex">
                {/* Brand */}
                <div className="min-w-[220px]">
                  <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.24em] ${badgeBg}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${dotColor}`} />
                    <span>Kerala Backwaters</span>
                  </div>
                  <p className={`mt-3 font-[var(--font-display)] text-[1.6rem] font-semibold uppercase leading-none tracking-[0.28em] ${textColor}`}>
                    Tranquil
                  </p>
                  <p className={`mt-1 pl-[0.26em] font-[var(--font-display)] text-[1.75rem] uppercase leading-none tracking-[0.34em] ${isServicePage ? "text-white/92" : "text-[#173247]/86"}`}>
                    Cruise
                  </p>
                </div>

                {/* Nav links */}
                <nav className={`flex items-center justify-center gap-2 rounded-full px-3 py-2 text-sm ${navPillBg}`} aria-label="Primary">
                  {/* Explore dropdown */}
                  <div
                    className="relative"
                    onMouseEnter={() => setDestinationsOpen(true)}
                    onMouseLeave={() => setDestinationsOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setDestinationsOpen((v) => !v)}
                      aria-haspopup="menu"
                      aria-expanded={destinationsOpen}
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 font-medium transition ${navLinkInactive}`}
                    >
                      <span>Explore</span>
                      <span className="text-[0.7rem] opacity-70">▾</span>
                    </button>

                    <AnimatePresence>
                      {destinationsOpen && (
                        <motion.div
                          role="menu"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.16, ease: "easeOut" }}
                          className={`absolute left-1/2 top-full z-50 mt-4 w-[380px] -translate-x-1/2 overflow-hidden rounded-[1.75rem] shadow-2xl backdrop-blur-xl ${dropdownBg}`}
                        >
                          <div className="p-4">
                            <div className={`px-4 pb-3 pt-1 text-[0.7rem] font-semibold tracking-[0.18em] ${dropdownLabel}`}>
                              CATEGORIES
                            </div>
                            <div className="grid gap-2">
                              {exploreItems.map((item) => (
                                <Link
                                  key={item.href}
                                  role="menuitem"
                                  href={item.href}
                                  className={`flex flex-col items-start rounded-2xl px-4 py-3 text-left text-sm transition ${dropdownItemText}`}
                                  onClick={() => setDestinationsOpen(false)}
                                >
                                  <span className="font-semibold leading-5">{item.label}</span>
                                  <span className={`mt-1 text-xs leading-5 ${dropdownSubtext}`}>{item.subtitle}</span>
                                </Link>
                              ))}
                            </div>
                            <div className={`mt-3 pt-3 ${dropdownDivider}`}>
                              <Link
                                role="menuitem"
                                href="/experience"
                                className={`flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition ${dropdownCta}`}
                                onClick={() => setDestinationsOpen(false)}
                              >
                                View full gallery
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {navItems.map((item) => {
                    const isActive = activeHref === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`inline-flex items-center rounded-full px-4 py-2.5 font-medium transition ${isActive ? navLinkActive : navLinkInactive}`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>

                <Link
                  href={whatsappHref}
                  className={`inline-flex min-w-[180px] items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] ${bookNowBtn}`}
                >
                  Book Now
                </Link>
              </div>

              {/* Mobile brand */}
              <div className="lg:hidden">
                <div className="flex min-w-0 flex-col">
                  <span className={`truncate text-[0.5rem] font-semibold uppercase tracking-[0.18em] sm:text-[0.55rem] sm:tracking-[0.22em] ${subtleText}`}>
                    Kerala Backwaters
                  </span>
                  <span className={`mt-1 truncate font-[var(--font-display)] text-[0.9rem] font-semibold uppercase leading-none tracking-[0.12em] sm:text-[1rem] sm:tracking-[0.24em] ${textColor}`}>
                    Tranquil
                  </span>
                  <span className={`mt-0.5 truncate font-[var(--font-display)] text-[0.9rem] font-semibold uppercase leading-none tracking-[0.14em] sm:text-[1rem] sm:tracking-[0.28em] ${textColor}`}>
                    Cruise
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full px-0 text-[0.8rem] font-semibold text-white transition sm:h-14 sm:w-auto sm:gap-2 sm:px-4 sm:text-sm lg:hidden ${mobileMenuBtn}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span className="sr-only sm:not-sr-only">{menuOpen ? "Close" : "Menu"}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mx-auto mt-3 max-w-7xl px-3 sm:px-6 lg:hidden"
          >
            <div className={`rounded-[1.75rem] p-3 shadow-2xl backdrop-blur-xl ${mobilePanelBg}`}>
              <div className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = activeHref === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${isActive ? navLinkActive : mobileLinkInactive}`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Link
                  href={whatsappHref}
                  className={`mt-2 inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold text-white transition ${mobileMenuBtn}`}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

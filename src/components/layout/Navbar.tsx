"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { startTransition, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/lib/services-data";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
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
  const desktopLogoBox = isServicePage ? "h-[5rem] w-[9.2rem]" : "h-[5rem] w-[9rem]";
  const desktopLogoImage = isServicePage
    ? "object-contain scale-[2.12] drop-shadow-[0_10px_22px_rgba(8,20,30,0.26)]"
    : "object-contain scale-[2.08]";
  const mobileLogoBox = isServicePage ? "h-[3.2rem] w-[8.7rem]" : "h-[3.1rem] w-[8.4rem]";
  const mobileLogoImage = isServicePage
    ? "object-contain scale-[2.02] drop-shadow-[0_8px_18px_rgba(8,20,30,0.24)]"
    : "object-contain scale-[1.98]";

  useEffect(() => {
    startTransition(() => {
      setMenuOpen(false);
      setDestinationsOpen(false);
    });
  }, [pathname]);

  const activeHref = useMemo(() => {
    if (pathname.startsWith("/gallery") || pathname.startsWith("/experience")) return "/gallery";
    return pathname;
  }, [pathname]);

  if (isHomePage) {
    return (
      <header className="pointer-events-none absolute inset-x-0 top-0 z-50 text-white">
        <div className="pointer-events-auto mx-auto flex w-full max-w-[1600px] items-center justify-between gap-4 px-4 py-4 sm:px-8 sm:py-6 lg:px-10 lg:py-8">
          {/* Desktop left: Menu + Explore */}
          <div className="hidden items-center gap-5 lg:flex">
            <button
              type="button"
              className="inline-flex items-center gap-4 rounded-full border border-white/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.16)_0%,rgba(159,214,208,0.2)_48%,rgba(245,214,122,0.18)_100%)] px-4 py-3 text-white shadow-[0_14px_36px_rgba(4,13,22,0.14)] backdrop-blur-md transition hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.22)_0%,rgba(159,214,208,0.28)_48%,rgba(245,214,122,0.24)_100%)]"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls={menuOpen ? "home-overlay-menu" : undefined}
            >
              <span className="flex flex-col gap-2" aria-hidden="true">
                <span className="h-0.5 w-10 bg-current" />
                <span className="h-0.5 w-10 bg-current" />
                <span className="h-0.5 w-10 bg-current" />
              </span>
              <span className="bg-[linear-gradient(90deg,#ffffff_0%,#dff7ff_28%,#9fe0d7_58%,#f5d67a_84%,#ffffff_100%)] bg-clip-text text-lg font-semibold uppercase tracking-[0.28em] text-transparent">
                Menu
              </span>
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
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.14)_0%,rgba(127,212,255,0.18)_34%,rgba(139,224,196,0.2)_64%,rgba(245,214,122,0.16)_100%)] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-[0_14px_34px_rgba(4,13,22,0.12)] backdrop-blur-md transition hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.2)_0%,rgba(127,212,255,0.24)_34%,rgba(139,224,196,0.26)_64%,rgba(245,214,122,0.22)_100%)]"
              >
                <span className="bg-[linear-gradient(90deg,#ffffff_0%,#dff7ff_24%,#8fd8cf_54%,#f5d67a_82%,#ffffff_100%)] bg-clip-text text-transparent">
                  Explore
                </span>
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
                          href="/gallery"
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

          <div className="ml-auto grid w-full max-w-[15.5rem] grid-cols-2 gap-2 lg:hidden">
            <button
              type="button"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/35 bg-[linear-gradient(135deg,rgba(255,255,255,0.16)_0%,rgba(127,212,255,0.18)_34%,rgba(139,224,196,0.2)_64%,rgba(245,214,122,0.16)_100%)] px-3 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.22)_0%,rgba(127,212,255,0.24)_34%,rgba(139,224,196,0.26)_64%,rgba(245,214,122,0.22)_100%)]"
              onClick={() => setDestinationsOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={destinationsOpen}
              aria-controls={destinationsOpen ? "home-mobile-explore-menu" : undefined}
            >
              <span className="bg-[linear-gradient(90deg,#ffffff_0%,#dff7ff_24%,#8fd8cf_54%,#f5d67a_82%,#ffffff_100%)] bg-clip-text text-transparent">
                Explore
              </span>
              <span className="text-[0.7rem] opacity-80">▾</span>
            </button>

            <button
              type="button"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/35 bg-[linear-gradient(135deg,rgba(255,255,255,0.16)_0%,rgba(159,214,208,0.2)_48%,rgba(245,214,122,0.18)_100%)] px-3 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.22)_0%,rgba(159,214,208,0.28)_48%,rgba(245,214,122,0.24)_100%)]"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls={menuOpen ? "home-overlay-menu" : undefined}
            >
              <span className="bg-[linear-gradient(90deg,#ffffff_0%,#dff7ff_28%,#9fe0d7_58%,#f5d67a_84%,#ffffff_100%)] bg-clip-text text-transparent">
                {menuOpen ? "Close" : "Menu"}
              </span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
              aria-label="Explore experiences"
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
                  href="/gallery"
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
              aria-label="Homepage quick menu"
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
    ? "border border-[#88aabd]/24 bg-[linear-gradient(180deg,rgba(18,38,52,0.82)_0%,rgba(21,45,61,0.76)_100%)] shadow-[0_22px_60px_rgba(10,24,35,0.28)]"
    : "border border-[#d4e2ea] bg-[linear-gradient(180deg,rgba(252,254,255,0.96)_0%,rgba(241,247,250,0.94)_100%)] shadow-[0_26px_70px_rgba(23,50,71,0.12)]";

  const navPillBg = isServicePage
    ? "border border-[#88aabd]/14 bg-[#88aabd]/10"
    : "border border-[#dbe8ef] bg-[#eef5f8]";
  const dropdownBg = isServicePage
    ? "border border-[#88aabd]/18 bg-[rgba(15,34,48,0.95)] shadow-black/20"
    : "border border-[#d4e2ea] bg-[rgba(250,252,253,0.98)] shadow-[rgba(23,50,71,0.14)]";
  const dropdownLabel = isServicePage ? "text-[#cfe0ea]/56" : "text-[#173247]/44";
  const dropdownItemText = isServicePage
    ? "text-[#eef7fb]/88 hover:bg-white/10 hover:text-white"
    : "text-[#173247]/84 hover:bg-[#edf4f7] hover:text-[#173247]";
  const dropdownSubtext = isServicePage ? "text-[#c6dbe8]/64" : "text-[#173247]/52";
  const dropdownDivider = isServicePage ? "border-t border-[#88aabd]/16" : "border-t border-[#d4e2ea]";
  const dropdownCta = isServicePage
    ? "border border-[#88aabd]/22 bg-[#88aabd]/16 text-[#f4fbff] hover:bg-[#b4cddb] hover:text-[#173247]"
    : "bg-[#173247] text-white hover:bg-[#234760]";
  const navLinkActive = isServicePage
    ? "bg-[#d9c28a] text-[#173247] shadow-[0_8px_22px_rgba(0,0,0,0.16)]"
    : "bg-[#173247] text-white shadow-[0_8px_22px_rgba(23,50,71,0.14)]";
  const navLinkInactive = isServicePage
    ? "text-[#eef7fb]/82 hover:bg-white/12 hover:text-white"
    : "text-[#173247]/76 hover:bg-white hover:text-[#173247]";
  const bookNowBtn = isServicePage
    ? "border border-[#7fb7b2]/34 bg-[#7fb7b2] text-[#173247] shadow-[0_12px_30px_rgba(0,0,0,0.18)] hover:bg-[#9bc8c4]"
    : "bg-[#6f95ab] text-white shadow-[0_12px_30px_rgba(23,50,71,0.14)] hover:bg-[#84a9bc]";
  const mobileMenuBtn = isServicePage
    ? "border border-[#88aabd]/22 bg-[#88aabd]/14 text-[#f3f9fc] hover:bg-[#d9c28a] hover:text-[#173247]"
    : "bg-[#173247] text-white hover:bg-[#234760]";
  const mobilePanelBg = isServicePage
    ? "border border-[#88aabd]/20 bg-[rgba(14,31,44,0.92)] shadow-black/20"
    : "border border-[#d4e2ea] bg-[rgba(250,252,253,0.98)] shadow-[rgba(23,50,71,0.12)]";
  const mobileLinkInactive = isServicePage
    ? "text-[#eef7fb]/84 hover:bg-white/10 hover:text-white"
    : "text-[#173247]/80 hover:bg-[#edf4f7] hover:text-[#173247]";

  return (
    <header className={isServicePage ? "absolute inset-x-0 top-0 z-50 px-2 pt-2 text-white sm:px-6 sm:pt-4" : "sticky top-0 z-50 px-2 pt-2 sm:px-6 sm:pt-4"}>
      <div className="mx-auto max-w-7xl">
        <div className={`rounded-[1.4rem] px-2 py-2 backdrop-blur-xl sm:rounded-[2rem] sm:px-4 sm:py-3 ${navBg}`}>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="min-w-0 flex-1 lg:px-2">
              {/* Desktop nav */}
              <div className="hidden items-center justify-between gap-5 lg:flex">
                {/* Brand */}
                <Link
                  href="/"
                  className={`relative block shrink-0 overflow-hidden transition-transform duration-300 hover:scale-[1.02] ${desktopLogoBox}`}
                  aria-label="Go to homepage"
                >
                  <Image
                    src="/images/tranquil-cruise-logo.webp"
                    alt="Tranquil Cruise"
                    fill
                    sizes="360px"
                    className={`object-center ${desktopLogoImage}`}
                    style={{ objectPosition: "center 43%" }}
                  />
                </Link>

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
                                href="/gallery"
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
                <Link
                  href="/"
                  className={`relative block overflow-hidden ${mobileLogoBox}`}
                  aria-label="Go to homepage"
                >
                  <Image
                    src="/images/tranquil-cruise-logo.webp"
                    alt="Tranquil Cruise"
                    fill
                    sizes="280px"
                    className={`object-center ${mobileLogoImage}`}
                    style={{ objectPosition: "center 39%" }}
                  />
                </Link>
              </div>
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full px-0 text-[0.8rem] font-semibold text-white transition sm:h-14 sm:w-auto sm:gap-2 sm:px-4 sm:text-sm lg:hidden ${mobileMenuBtn}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls={menuOpen ? "mobile-menu" : undefined}
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
            aria-label="Mobile navigation"
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

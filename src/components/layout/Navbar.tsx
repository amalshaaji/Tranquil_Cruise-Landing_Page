"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/lib/services-data";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

const homeExploreItems = [
  ...services.map((service) => ({
    href: `/${service.slug}`,
    label: service.title,
    subtitle: service.subtitle,
  })),
  {
    href: "/experience?category=kayaking",
    label: "Kayaking Trails",
    subtitle: "Active paddling routes through quieter Kerala waterways",
  },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const isHomePage = pathname === "/";

  useEffect(() => {
    // Close mobile menu after navigation.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);
  }, [pathname]);

  const activeHref = useMemo(() => {
    // Simple active logic for nested listing routes.
    if (pathname.startsWith("/experience")) return "/experience";
    return pathname;
  }, [pathname]);

  if (isHomePage) {
    return (
      <header className="pointer-events-none absolute inset-x-0 top-0 z-50 text-white">
        <div className="pointer-events-auto mx-auto flex w-full max-w-[1600px] items-start justify-between gap-4 px-5 py-6 sm:px-8 lg:px-10 lg:py-8">
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
              <span className="text-lg font-semibold uppercase tracking-[0.28em]">
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
                        {homeExploreItems.map((item) => (
                          <Link
                            key={`${item.href}-${item.label}-home-explore`}
                            role="menuitem"
                            href={item.href}
                            className="flex flex-col items-start rounded-2xl px-4 py-3 text-left text-sm text-white/84 transition hover:bg-white/10 hover:text-white"
                            onClick={() => setDestinationsOpen(false)}
                          >
                            <span className="font-semibold leading-5">
                              {item.label}
                            </span>
                            <span className="mt-1 text-xs leading-5 text-white/58">
                              {item.subtitle}
                            </span>
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

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex min-w-[260px] items-center justify-center border-2 border-white px-10 py-5 text-lg font-semibold uppercase tracking-[0.22em] text-white transition duration-300 hover:bg-white hover:text-[#274865]"
            >
              Book Now
            </Link>
          </div>

          <button
            type="button"
            className="ml-auto inline-flex items-center justify-center rounded-full border border-white/35 bg-white/8 p-3 text-white backdrop-blur-sm transition hover:bg-white/16 lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="home-overlay-menu"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path
                  d="M6 6l12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <path
                    d="M4 7h16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 12h16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 17h16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </>
              )}
            </svg>
          </button>
        </div>

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
                      key={`${item.href}-${item.label}-home`}
                      href={item.href}
                    className="rounded-2xl px-4 py-3 text-sm font-medium uppercase tracking-[0.18em] text-white/88 transition hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
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

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-[#d7e3ea] bg-[rgba(250,252,253,0.94)] px-3 py-3 shadow-[0_26px_70px_rgba(23,50,71,0.12)] backdrop-blur-xl sm:px-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#173247] text-white shadow-[0_10px_24px_rgba(23,50,71,0.16)] transition-transform duration-300 hover:scale-[1.03]"
              aria-label="Go to homepage"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3.5 15.5c2.2-3 4.7-4.5 7.5-4.5 2.1 0 4.1.8 5.9 2.3 1.1.9 2.1 2 3.1 3.4"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
                <path
                  d="M7 14.5c.6-2.6 2-5 4.3-7 1.4 1 2.4 2.2 3.1 3.6"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
                <path
                  d="M5 18.5h13.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </Link>

            <div className="min-w-0 flex-1 md:px-2">
              <div className="hidden items-center justify-between gap-5 md:flex">
                <p className="min-w-[180px] text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-[#173247]/52">
                  Tranquil Cruise
                </p>

                <nav
                  className="flex items-center justify-center gap-2 rounded-full bg-[#edf4f7] px-3 py-2 text-sm"
                  aria-label="Primary"
                >
                  {[
                    { href: "/experience", label: "Explore" },
                    ...navItems,
                  ].map((item) => {
                    const isActive = activeHref === item.href && item.label !== "Explore";

                    if (item.label === "Explore") {
                      return (
                        <div
                          key={`${item.href}-${item.label}`}
                          className="relative"
                          onMouseEnter={() => setDestinationsOpen(true)}
                          onMouseLeave={() => setDestinationsOpen(false)}
                        >
                          <button
                            type="button"
                            onClick={() => setDestinationsOpen((v) => !v)}
                            aria-haspopup="menu"
                            aria-expanded={destinationsOpen}
                            className={[
                              "inline-flex items-center gap-2 rounded-full px-4 py-2.5 font-medium transition",
                              isActive
                                ? "bg-[#173247] text-white shadow-sm"
                                : "text-[#173247]/76 hover:bg-white hover:text-[#173247]",
                            ].join(" ")}
                          >
                            <span>{item.label}</span>
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
                                className="absolute left-1/2 top-full z-50 mt-4 w-[380px] -translate-x-1/2 overflow-hidden rounded-[1.75rem] border border-[#d7e3ea] bg-[rgba(250,252,253,0.98)] shadow-2xl shadow-[rgba(23,50,71,0.14)] backdrop-blur-xl"
                              >
                                <div className="p-4">
                                  <div className="px-4 pb-3 pt-1 text-[0.7rem] font-semibold tracking-[0.18em] text-[#173247]/44">
                                    CATEGORIES
                                  </div>
                                  <div className="grid gap-2">
                                    {services.map((s) => (
                                      <Link
                                        key={s.slug}
                                        role="menuitem"
                                        href={`/${s.slug}`}
                                        className="flex flex-col items-start rounded-2xl px-4 py-3 text-left text-sm text-[#173247]/84 transition hover:bg-[#edf4f7] hover:text-[#173247]"
                                        onClick={() => setDestinationsOpen(false)}
                                      >
                                        <span className="font-semibold leading-5">
                                          {s.title}
                                        </span>
                                        <span className="mt-1 text-xs leading-5 text-[#173247]/52">
                                          {s.subtitle}
                                        </span>
                                      </Link>
                                    ))}
                                  </div>

                                  <div className="mt-3 border-t border-[#d7e3ea] pt-3">
                                    <Link
                                      role="menuitem"
                                      href="/experience"
                                      className="flex items-center justify-center rounded-2xl bg-[#173247] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#234760]"
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
                      );
                    }

                    return (
                      <Link
                        key={`${item.href}-${item.label}`}
                        href={item.href}
                        className={[
                          "inline-flex items-center rounded-full px-4 py-2.5 font-medium transition",
                          isActive
                            ? "bg-[#173247] text-white shadow-sm"
                            : "text-[#173247]/76 hover:bg-white hover:text-[#173247]",
                        ].join(" ")}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>

                <Link
                  href="/contact"
                  className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-[#173247] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(23,50,71,0.14)] transition hover:translate-y-[-1px] hover:bg-[#234760]"
                >
                  Book Now
                </Link>
              </div>

              <div className="md:hidden">
                <p className="truncate text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#173247]/52">
                  Tranquil Cruise
                </p>
                <p className="mt-1 truncate text-sm font-medium text-[#173247]">
                  Backwater rides and private cruise stories
                </p>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex h-14 items-center gap-2 rounded-full bg-[#173247] px-4 text-sm font-semibold text-white transition hover:bg-[#234760] md:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span>{menuOpen ? "Close" : "Menu"}</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {menuOpen ? (
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mx-auto mt-3 max-w-7xl px-4 sm:px-6 md:hidden"
          >
            <div className="rounded-[1.75rem] border border-[#d7e3ea] bg-[rgba(250,252,253,0.98)] p-3 shadow-2xl shadow-[rgba(23,50,71,0.12)] backdrop-blur-xl">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive =
                    activeHref === item.href && item.label !== "Explore";
                  return (
                    <Link
                      key={`${item.href}-${item.label}`}
                      href={item.href}
                      className={[
                        "rounded-2xl px-4 py-3 text-sm font-medium transition",
                        isActive
                          ? "bg-[#173247] text-white"
                          : "text-[#173247]/80 hover:bg-[#edf4f7] hover:text-[#173247]",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Link
                  href="/contact"
                  className="mt-2 inline-flex items-center justify-center rounded-2xl bg-[#173247] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#234760]"
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

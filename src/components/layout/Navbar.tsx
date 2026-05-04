"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { categories } from "@/lib/tranquil-data";

const navItems = [
  { href: "/experience", label: "Explore" },
  { href: "/", label: "Home" },
  { href: "/experience", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);

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

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#fbf7ee]/88 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-sand">
          <span className="text-base font-semibold tracking-[0.35em]">
            TRANQUIL CRUISE
          </span>
        </Link>

        <nav
          className="hidden flex-1 items-center justify-center gap-8 text-xs font-medium tracking-[0.18em] text-foreground/80 md:flex"
          aria-label="Primary"
        >
          {navItems.map((item, index) => {
            const isActive = activeHref === item.href && item.label !== "Explore";
            const hasChevron = index === 0;
            if (index === 0) {
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
                      "inline-flex items-center gap-1.5 border-b border-transparent pb-1 transition-colors",
                      isActive
                        ? "border-sand text-sand"
                        : "hover:border-white/40 hover:text-foreground",
                    ].join(" ")}
                  >
                    <span className="uppercase">{item.label}</span>
                    {hasChevron && (
                      <span className="text-[0.6rem] text-foreground/60">▾</span>
                    )}
                  </button>

                  <AnimatePresence>
                    {destinationsOpen && (
                      <motion.div
                        role="menu"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.16, ease: "easeOut" }}
                        className="absolute left-1/2 top-full z-50 mt-4 w-[380px] -translate-x-1/2 overflow-hidden rounded-3xl border border-black/10 bg-[#fbf7ee]/94 shadow-lg shadow-black/10 backdrop-blur"
                      >
                        <div className="p-4">
                          <div className="px-4 pb-3 pt-1 text-[0.7rem] font-semibold tracking-[0.18em] text-foreground/60">
                            CATEGORIES
                          </div>
                          <div className="grid gap-2">
                            {categories.map((c) => (
                              <Link
                                key={c.type}
                                role="menuitem"
                                href={`/experience?category=${encodeURIComponent(
                                  c.type
                                )}`}
                                className="flex flex-col items-start rounded-2xl px-4 py-3 text-left text-sm text-foreground/85 transition hover:bg-black/5 hover:text-foreground"
                                onClick={() => setDestinationsOpen(false)}
                              >
                                <span className="font-semibold leading-5">
                                  {c.title}
                                </span>
                                <span className="mt-1 text-xs leading-5 text-foreground/60">
                                  {c.subtitle}
                                </span>
                              </Link>
                            ))}
                          </div>

                          <div className="mt-3 border-t border-black/10 pt-3">
                            <Link
                              role="menuitem"
                              href="/experience"
                              className="flex items-center justify-center rounded-2xl bg-gold px-4 py-3 text-sm font-semibold text-ink shadow-sm shadow-gold/20 transition hover:bg-gold/90"
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
                  "inline-flex items-center gap-1.5 border-b border-transparent pb-1 transition-colors",
                  isActive
                    ? "border-sand text-sand"
                    : "hover:border-white/40 hover:text-foreground",
                ].join(" ")}
              >
                <span className="uppercase">{item.label}</span>
                {hasChevron && (
                  <span className="text-[0.6rem] text-foreground/60">▾</span>
                )}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm text-foreground/90 transition hover:bg-black/5 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className="font-semibold">{menuOpen ? "Close" : "Menu"}</span>
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

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="md:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 pb-4">
              <div className="flex flex-col gap-2 rounded-2xl border border-black/10 bg-[#fbf7ee]/94 p-3 backdrop-blur">
                {navItems.map((item) => {
                  const isActive =
                    activeHref === item.href && item.label !== "Explore";
                  return (
                    <Link
                      key={`${item.href}-${item.label}`}
                      href={item.href}
                      className={[
                        "rounded-xl px-3 py-2 text-sm font-medium transition",
                        isActive
                          ? "bg-black/5 text-sand"
                          : "text-foreground/80 hover:bg-black/5 hover:text-foreground",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

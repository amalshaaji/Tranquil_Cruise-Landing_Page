"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { whatsappLink } from "@/lib/enquiry";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

function NavLinks({
  items,
  pathname,
  className,
}: {
  items: ReadonlyArray<{ href: string; label: string }>;
  pathname: string;
  className?: string;
}) {
  return (
    <nav aria-label="Primary" className={cn("hidden items-center gap-4 xl:gap-6 lg:flex", className)}>
      {items.map((item) => {
        const current = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={current ? "page" : undefined}
            className={cn(
              "group relative whitespace-nowrap px-1 py-2 font-serif text-[0.95rem] font-medium tracking-tight text-ink transition-colors duration-300 ease-calm [text-shadow:0_1px_3px_rgb(31_42_38/0.28)] hover:text-clay xl:text-base",
            )}
          >
            {item.label}
            <span
              aria-hidden
              className={cn(
                "absolute inset-x-1 -bottom-0.5 h-0.5 origin-left rounded-full bg-clay transition-transform duration-500 ease-calm",
                current ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Lock page scroll behind the open menu and allow Esc to close it.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-stone/60 bg-paper/95 backdrop-blur">
        <Container className="flex h-16 items-center justify-between lg:grid lg:h-[5.25rem] lg:grid-cols-[1fr_auto_1fr]">
          <NavLinks items={nav.slice(0, 4)} pathname={pathname} className="justify-self-start" />

          <Link href="/" aria-label={site.name} className="group flex items-center justify-center" onClick={close}>
            <Image
              src="/logo.png"
              alt={site.name}
              width={780}
              height={498}
              className="h-11 w-auto transition-transform duration-500 ease-calm group-hover:scale-105 lg:h-16"
              priority
            />
          </Link>

          <div className="hidden items-center gap-4 justify-self-end xl:gap-6 lg:flex">
            <NavLinks items={nav.slice(4)} pathname={pathname} />
            <Button href="/contact" className="min-h-10 px-5 py-2">
              Enquire
            </Button>
          </div>

          <button
            className="-mr-3 flex size-12 flex-col items-center justify-center gap-[6px] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span
              className={cn(
                "h-px w-6 bg-ink transition-transform duration-300",
                open && "translate-y-[3.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-6 bg-ink transition-transform duration-300",
                open && "-translate-y-[3.5px] -rotate-45",
              )}
            />
          </button>
        </Container>
      </header>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="fixed inset-x-0 bottom-0 top-16 z-[35] flex flex-col overflow-y-auto bg-paper pb-[calc(1.5rem+env(safe-area-inset-bottom))]"
        >
          <Container className="flex flex-1 flex-col">
            <ul className="py-2">
              {nav.map((item) => (
                <li key={item.href} className="border-b border-stone/60">
                  <Link
                    href={item.href}
                    onClick={close}
                    className="flex min-h-16 items-center justify-between font-serif text-2xl"
                  >
                    {item.label}
                    <span aria-hidden className="text-base text-clay">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-3 pt-8">
              <Button href="/contact" onClick={close}>
                Plan your journey
              </Button>
              <Button
                href={whatsappLink(
                  "Hello Tranquil Cruise, I'd like to enquire.",
                )}
                variant="outline"
                target="_blank"
                rel="noopener"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </Container>
        </nav>
      )}
    </>
  );
}

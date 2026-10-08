"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/enquiry";

/** Always-reachable actions on phones. Hidden on larger screens and on pages that are already about enquiring. */
export function MobileBar() {
  const pathname = usePathname();
  if (pathname.startsWith("/contact")) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-stone/70 bg-paper/95 backdrop-blur lg:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-3 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3">
        <Button href="/contact" className="px-4">
          Enquire
        </Button>
        <Button
          href={whatsappLink("Hello Tranquil Cruise, I'd like to enquire.")}
          variant="outline"
          target="_blank"
          rel="noopener"
          className="px-4"
        >
          WhatsApp
        </Button>
      </div>
    </div>
  );
}

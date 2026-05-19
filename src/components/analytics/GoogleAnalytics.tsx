"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { ensureDataLayer, trackPageView } from "@/lib/analytics";

const measurementId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
const tagManagerId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    ensureDataLayer();

    if (measurementId) {
      window.gtag =
        window.gtag ||
        function gtag(...args: unknown[]) {
          ensureDataLayer().push(args as never);
        };

      window.gtag("js", new Date());
      window.gtag("config", measurementId, {
        send_page_view: false,
      });
    }
  }, []);

  useEffect(() => {
    const query = searchParams.toString();
    const url = query ? `${pathname}?${query}` : pathname;
    trackPageView(url);
  }, [pathname, searchParams]);

  return (
    <>
      {measurementId ? (
        <Script
          id="ga4-script"
          src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
          strategy="afterInteractive"
        />
      ) : null}

      {tagManagerId ? (
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${tagManagerId}');
            `,
          }}
        />
      ) : null}
    </>
  );
}

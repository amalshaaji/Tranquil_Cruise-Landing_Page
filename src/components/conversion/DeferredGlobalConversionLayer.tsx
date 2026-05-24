"use client";

import dynamic from "next/dynamic";

const GlobalConversionLayer = dynamic(
  () => import("@/components/conversion/GlobalConversionLayer"),
  { ssr: false },
);

export default function DeferredGlobalConversionLayer() {
  return <GlobalConversionLayer />;
}

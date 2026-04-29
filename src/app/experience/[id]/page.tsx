import { getListingById, listings } from "@/lib/tranquil-data";
import { notFound } from "next/navigation";
import ListingDetailClient from "@/components/listings/ListingDetailClient";

export const dynamicParams = false;
export const dynamic = "force-static";

export async function generateStaticParams() {
  return listings.map((l) => ({ id: l.id }));
}

export default function ExperienceDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const listing = getListingById(params.id);

  if (!listing) notFound();

  return <ListingDetailClient listing={listing} />;
}


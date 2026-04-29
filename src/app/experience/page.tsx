import { categories, listings } from "@/lib/tranquil-data";
import ListingsClient from "@/components/listings/ListingsClient";

export default function ExperiencePage() {
  return <ListingsClient listings={listings} categories={categories} />;
}


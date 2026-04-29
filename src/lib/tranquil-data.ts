import categoriesData from "../../data/categories.json";
import listingsData from "../../data/listings.json";

export type ListingType = "houseboat" | "shikkara" | "kayaking" | "room";

export type Category = {
  type: ListingType;
  title: string;
  subtitle: string;
};

export type Listing = {
  id: string;
  type: ListingType;
  title: string;
  subtitle: string;
  location: string;
  priceFrom: number;
  rating: number;
  reviewsCount: number;
  minGuests: number;
  maxGuests: number;
  duration: string;
  tags: string[];
  highlights: string[];
  about: string;
  facilities: string[];
  images: string[];
};

export const categories: Category[] = categoriesData as Category[];
export const listings: Listing[] = listingsData as Listing[];

export function getListingById(id: string): Listing | undefined {
  return listings.find((l) => l.id === id);
}


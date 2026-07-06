import type { SeoKnowledgePageData } from "@/lib/seo-knowledge";
import { tourismBlogPages } from "@/lib/tourism-blog-pages";
import { tourismLandingPages } from "@/lib/tourism-landing-pages";

export const seoKnowledgePages: SeoKnowledgePageData[] = [
  ...tourismLandingPages,
  ...tourismBlogPages,
];

const seoKnowledgePageMap = new Map(
  seoKnowledgePages.map((page) => [page.slug, page] as const),
);

export function getSeoKnowledgePageBySlug(slug: string) {
  return seoKnowledgePageMap.get(slug);
}

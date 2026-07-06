import type { InternalLinkGraph } from "@/lib/seo-content";

export type SeoKnowledgeSection = {
  title: string;
  answer: string;
  paragraphs: string[];
  bullets?: string[];
};

export type SeoKnowledgeComparisonRow = {
  label: string;
  bestFor: string;
  details: string;
};

export type SeoKnowledgePageData = {
  kind: "landing" | "blog";
  slug: string;
  path: string;
  title: string;
  eyebrow: string;
  description: string;
  heroImage: {
    src: string;
    alt: string;
  };
  gallery: {
    src: string;
    alt: string;
  }[];
  keywords: string[];
  directAnswer: string;
  intro: string[];
  quickFacts: string[];
  sections: SeoKnowledgeSection[];
  faqs: {
    question: string;
    answer: string;
  }[];
  internalLinks: InternalLinkGraph;
  comparisonRows?: SeoKnowledgeComparisonRow[];
  answerFirstItems?: {
    question: string;
    answer: string;
  }[];
  ctas?: {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
  }[];
};

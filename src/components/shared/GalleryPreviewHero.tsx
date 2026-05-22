import type { ReactNode } from "react";
import Link from "next/link";
import ScrollableImageRow from "@/components/services/ScrollableImageRow";

type GalleryPreviewImage = {
  src: string;
  alt: string;
  objectPosition?: string;
  objectFit?: "cover" | "contain";
  containerClassName?: string;
  aspectRatio?: string;
};

type GalleryPreviewAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export default function GalleryPreviewHero({
  galleryImages,
  breadcrumbs,
  eyebrow,
  title,
  description,
  metaLines = [],
  actions = [],
  aside,
  bottomTags,
}: {
  galleryImages: GalleryPreviewImage[];
  breadcrumbs?: ReactNode;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  metaLines?: string[];
  actions?: GalleryPreviewAction[];
  aside?: ReactNode;
  bottomTags?: ReactNode;
}) {
  return (
    <>
      <div className="grid gap-10">
        <div className="min-w-0">
          <ScrollableImageRow images={galleryImages} />
        </div>

        <div className="min-w-0">
          {breadcrumbs}
          <div className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-teal/80">
            {eyebrow}
          </div>
          <h1 className="responsive-title-flow mt-4 font-[var(--font-display)] text-[clamp(2.7rem,7vw,5rem)] leading-[0.9] tracking-[-0.05em] text-navy">
            {title}
          </h1>

          <div className="mt-6 max-w-xl space-y-4 text-base leading-8 text-foreground/70 sm:text-[1.05rem]">
            {description}
          </div>

          {metaLines.length > 0 ? (
            <div className="mt-8 text-sm text-sand/65">
              {metaLines.map((line) => (
                <p key={line} className="mt-2 first:mt-0">
                  {line}
                </p>
              ))}
            </div>
          ) : null}

          {actions.length > 0 ? (
            <div className="mt-10 flex flex-wrap gap-4">
              {actions.map((action) => (
                <Link
                  key={`${action.href}-${action.label}`}
                  href={action.href}
                  className={
                    action.variant === "secondary"
                      ? "inline-flex min-h-12 items-center justify-center rounded-full border border-teal/20 bg-white/90 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-navy transition hover:bg-[#e8f0f5]"
                      : "inline-flex min-h-12 items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_40px_rgba(47,79,104,0.18)] transition hover:bg-sand"
                  }
                >
                  {action.label}
                </Link>
              ))}
            </div>
          ) : null}

          {aside ? <div className="mt-10">{aside}</div> : null}
        </div>
      </div>

      {bottomTags ? <div className="mt-10">{bottomTags}</div> : null}
    </>
  );
}

import Link from "next/link";

type Crumb = {
  label: string;
  href?: string;
};

export default function InnerPageHeader({
  eyebrow,
  title,
  description,
  crumbs,
  sideLabel,
  sideValue,
  actions,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  sideLabel?: string;
  sideValue?: string;
  actions?: React.ReactNode;
}) {
  return (
    <section className="border-b border-navy/10 bg-[linear-gradient(180deg,#edf5f8_0%,#f8fbfc_100%)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        {crumbs && crumbs.length > 0 ? (
          <div className="flex flex-wrap items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-foreground/52">
            {crumbs.map((crumb, index) => (
              <div key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                {crumb.href ? (
                  <Link href={crumb.href} className="transition hover:text-foreground">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-foreground/72">{crumb.label}</span>
                )}
                {index < crumbs.length - 1 ? <span>/</span> : null}
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr,18rem] lg:items-end">
          <div>
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-teal/80">
              {eyebrow}
            </div>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[0.97] text-sand sm:text-5xl md:text-6xl">
              {title}
            </h1>
            {description ? (
              <p className="mt-6 max-w-3xl text-sm leading-8 text-foreground/72 sm:text-base">
                {description}
              </p>
            ) : null}
            {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
          </div>

          {sideLabel && sideValue ? (
            <div className="border-l border-navy/10 pl-6">
              <div className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-foreground/44">
                {sideLabel}
              </div>
              <div className="mt-3 text-sm leading-7 text-foreground/72">{sideValue}</div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

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
  void crumbs;
  void sideLabel;
  void sideValue;
  void actions;

  return (
    <section className="border-b border-navy/10 bg-[linear-gradient(180deg,#eef4f7_0%,#f8fbfc_100%)]">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 text-center sm:px-6 sm:py-20">
        <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/80 sm:text-[0.72rem] sm:tracking-[0.26em]">
          {eyebrow}
        </div>
        <h1 className="responsive-title-flow mx-auto mt-3 text-[2.1rem] font-semibold leading-[1.02] text-sand sm:mt-5 sm:text-5xl sm:leading-[0.98] md:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-foreground/70 sm:mt-6 sm:text-base sm:leading-8">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}

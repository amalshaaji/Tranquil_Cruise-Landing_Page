type ComparisonRow = {
  label: string;
  bestFor: string;
  details: string;
};

export function ComparisonTable({
  eyebrow = "Quick Comparison",
  title,
  intro,
  rows,
}: {
  eyebrow?: string;
  title: string;
  intro: string;
  rows: ComparisonRow[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
      <div className="overflow-hidden rounded-[2rem] border border-navy/8 bg-white shadow-[0_18px_40px_rgba(23,50,71,0.05)]">
        <div className="border-b border-navy/8 bg-[linear-gradient(180deg,#f8fbfc_0%,#ffffff_100%)] px-6 py-8 sm:px-8">
          <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
            {eyebrow}
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-foreground/66 sm:text-base">
            {intro}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#f4f8fa] text-left">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.22em] text-teal/75 sm:px-8">
                  Option
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.22em] text-teal/75 sm:px-8">
                  Best For
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.22em] text-teal/75 sm:px-8">
                  What It Means
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={`${row.label}-${index}`}
                  className="border-t border-navy/8 align-top"
                >
                  <td className="px-6 py-5 text-sm font-semibold text-[#173247] sm:px-8 sm:text-base">
                    {row.label}
                  </td>
                  <td className="px-6 py-5 text-sm leading-7 text-foreground/68 sm:px-8">
                    {row.bestFor}
                  </td>
                  <td className="px-6 py-5 text-sm leading-7 text-foreground/68 sm:px-8">
                    {row.details}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function QuestionAnswerList({
  eyebrow = "Quick Q&A",
  title,
  intro,
  items,
}: {
  eyebrow?: string;
  title: string;
  intro: string;
  items: {
    question: string;
    answer: string;
  }[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
      <div className="rounded-[2rem] border border-navy/8 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfc_100%)] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.05)] sm:p-10">
        <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
          {eyebrow}
        </div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-foreground/66 sm:text-base">
          {intro}
        </p>

        <div className="mt-8 grid gap-4">
          {items.map((item) => (
            <article
              key={item.question}
              className="rounded-[1.5rem] border border-navy/8 bg-white p-5"
            >
              <h3 className="text-lg font-semibold text-[#173247]">
                Q: {item.question}
              </h3>
              <p className="mt-3 text-sm leading-7 text-foreground/68">
                A: {item.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { FaqItem } from "@/lib/seo";

export default function FaqSection({
  eyebrow = "Frequently Asked Questions",
  title = "Questions guests often ask",
  intro,
  faqs,
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  faqs: FaqItem[];
}) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-20">
      <div className="mb-10 text-center sm:mb-14">
        <span className="mb-3 block text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
          {eyebrow}
        </span>
        <h2 className="text-3xl font-semibold tracking-tight text-sand sm:text-5xl">
          {title}
        </h2>
        {intro ? (
          <p className="mt-4 text-base text-foreground/60 sm:text-lg">
            {intro}
          </p>
        ) : null}
      </div>

      <div className="grid gap-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-[2rem] border border-navy/5 bg-white transition-all duration-300 open:shadow-xl open:shadow-navy-500/5"
          >
            <summary className="flex list-none cursor-pointer items-start justify-between gap-4 p-5 text-left transition-all group-hover:bg-[#fbfbfc] sm:items-center sm:p-6">
              <span className="text-base font-semibold leading-tight text-[#173247] sm:text-lg">
                {faq.question}
              </span>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-50 text-[#173247] transition-all group-open:rotate-45 group-open:bg-[#173247] group-open:text-white">
                <span className="text-xl font-light">+</span>
              </div>
            </summary>
            <div className="px-5 pb-5 sm:px-6 sm:pb-6">
              <div className="mb-4 h-px w-full bg-navy/5" />
              <p className="text-sm leading-relaxed text-foreground/70 sm:text-lg">
                {faq.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

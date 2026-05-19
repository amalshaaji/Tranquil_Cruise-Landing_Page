import SkeletonCard from "@/components/ui/SkeletonCard";

export default function ExperienceLoading() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="h-10 w-44 animate-pulse rounded-xl bg-white/5" />
          <div className="mt-3 h-5 w-72 animate-pulse rounded-xl bg-white/5" />
        </div>
        <div className="h-11 w-56 animate-pulse rounded-2xl bg-white/5" />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[340px,1fr]">
        <div className="animate-pulse rounded-3xl bg-white/5 p-5">
          <div className="h-6 w-28 rounded-xl bg-white/5" />
          <div className="mt-4 space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-12 rounded-2xl bg-white/5" />
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}


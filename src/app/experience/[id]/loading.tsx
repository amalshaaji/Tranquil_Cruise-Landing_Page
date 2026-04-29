import SkeletonCard from "@/components/ui/SkeletonCard";

export default function ExperienceDetailLoading() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-24">
      <div className="h-10 w-40 animate-pulse rounded-xl bg-white/5" />

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
        <div className="space-y-4">
          <div className="animate-pulse rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="h-56 w-full rounded-2xl bg-white/5" />
            <div className="mt-4 flex gap-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-14 w-20 rounded-2xl bg-white/5" />
              ))}
            </div>
          </div>

          <div className="animate-pulse rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="h-6 w-48 rounded-xl bg-white/5" />
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-28 rounded-2xl bg-white/5" />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="animate-pulse rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="h-6 w-28 rounded-xl bg-white/5" />
            <div className="mt-3 h-8 w-64 rounded-xl bg-white/5" />
            <div className="mt-4 h-6 w-52 rounded-xl bg-white/5" />
            <div className="mt-6 h-72 w-full rounded-3xl bg-white/5" />
          </div>

          <div className="grid gap-4">
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </div>
      </div>
    </section>
  );
}


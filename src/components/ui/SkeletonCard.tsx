export default function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-3xl border border-white/10 bg-white/5 p-4 shadow-sm shadow-navy/20">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5" />
      </div>
      <div className="mt-4 space-y-3">
        <div className="h-5 w-3/4 rounded-xl bg-white/5" />
        <div className="h-4 w-1/2 rounded-xl bg-white/5" />
        <div className="mt-2 h-4 w-2/3 rounded-xl bg-white/5" />
        <div className="flex gap-2 pt-1">
          <div className="h-6 w-20 rounded-full bg-white/5" />
          <div className="h-6 w-16 rounded-full bg-white/5" />
        </div>
      </div>
    </div>
  );
}


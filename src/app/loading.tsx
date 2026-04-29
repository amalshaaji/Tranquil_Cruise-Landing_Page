export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-24">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
        <div className="h-10 w-56 animate-pulse rounded-xl bg-white/5" />
        <div className="mt-4 h-14 w-3/4 animate-pulse rounded-2xl bg-white/5" />
        <div className="mt-3 h-5 w-2/3 animate-pulse rounded-xl bg-white/5" />
        <div className="mt-8 h-12 w-full animate-pulse rounded-2xl bg-white/5" />
      </div>
    </main>
  );
}


export function Stars({ count = 5, className = "size-4" }: { count?: number; className?: string }) {
  return (
    <span aria-hidden className="flex gap-0.5 text-gold">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={`${className} ${i < count ? "fill-current" : "fill-stone"}`}>
          <path d="M10 1.5l2.6 5.5 6 .8-4.4 4.2 1.1 6L10 15l-5.3 3 1.1-6L1.4 7.8l6-.8z" />
        </svg>
      ))}
    </span>
  );
}

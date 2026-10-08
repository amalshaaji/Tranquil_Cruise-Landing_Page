import { cn } from "@/lib/cn";

/** Small label laid over a photo, in the site's paper-and-gold style. */
export function PhotoChip({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "absolute z-20 inline-flex items-center gap-2 rounded-full bg-paper/90 px-3 py-1.5 text-xs font-medium text-moss-deep backdrop-blur",
        className,
      )}
    >
      <span aria-hidden className="size-1.5 shrink-0 rotate-45 bg-gold" />
      {children}
    </span>
  );
}

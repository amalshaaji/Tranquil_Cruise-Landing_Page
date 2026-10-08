import { cn } from "@/lib/cn";

export function Card({ className, ...props }: React.ComponentProps<"article">) {
  return (
    <article
      className={cn("rounded-soft border border-stone/70 bg-paper p-7", className)}
      {...props}
    />
  );
}

/** Placeholder for photography until real images are supplied. */
export function ImageFrame({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "flex items-end rounded-soft bg-stone p-4",
        className,
      )}
    >
      <span className="text-xs uppercase tracking-[0.18em] text-moss-deep/70">{label}</span>
    </div>
  );
}

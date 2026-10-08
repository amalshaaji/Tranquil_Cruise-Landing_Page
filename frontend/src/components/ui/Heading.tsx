import { cn } from "@/lib/cn";

export function Eyebrow({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "mb-5 inline-block rounded-full bg-clay/10 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-clay",
        className,
      )}
      {...props}
    />
  );
}

export function Heading({
  as: Tag = "h2",
  className,
  ...props
}: React.ComponentProps<"h2"> & { as?: "h1" | "h2" | "h3" }) {
  const size = {
    h1: "text-[2.5rem] sm:text-6xl lg:text-7xl",
    h2: "text-[1.9rem] sm:text-4xl lg:text-5xl",
    h3: "text-xl sm:text-2xl",
  }[Tag];
  return (
    <Tag
      className={cn("font-serif font-normal leading-[1.12] tracking-tight", size, className)}
      {...props}
    />
  );
}

export function Lead({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p className={cn("max-w-xl text-base leading-relaxed sm:text-lg text-mist", className)} {...props} />
  );
}

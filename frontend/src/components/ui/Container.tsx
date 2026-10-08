import { cn } from "@/lib/cn";

export function Container({
  className,
  narrow,
  ...props
}: React.ComponentProps<"div"> & { narrow?: boolean }) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8",
        narrow ? "max-w-3xl" : "max-w-6xl",
        className,
      )}
      {...props}
    />
  );
}

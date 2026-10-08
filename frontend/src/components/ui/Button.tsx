import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "solid" | "outline" | "light";

const base =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-colors duration-300 ease-calm";

const variants: Record<Variant, string> = {
  solid: "bg-moss text-paper hover:bg-moss-deep",
  outline: "border border-ink/30 text-ink hover:border-ink hover:bg-ink/5",
  light: "bg-paper text-moss-deep hover:bg-sand",
};

const Arrow = () => (
  <span aria-hidden className="transition-transform duration-300 ease-calm group-hover:translate-x-1">
    →
  </span>
);

export function Button({
  href,
  variant = "solid",
  arrow,
  className,
  children,
  ...props
}: (React.ComponentProps<"button"> & { href?: undefined } | (React.ComponentProps<typeof Link> & { href: string })) & {
  variant?: Variant;
  /** Trailing arrow that nudges on hover. On by default, except for form submit buttons. */
  arrow?: boolean;
}) {
  const cls = cn(base, variants[variant], className);
  const showArrow = arrow ?? (href !== undefined || (props as React.ComponentProps<"button">).type !== "submit");
  const content = (
    <>
      {children as React.ReactNode}
      {showArrow && <Arrow />}
    </>
  );
  if (href !== undefined) {
    return (
      <Link href={href} className={cls} {...(props as object)}>
        {content}
      </Link>
    );
  }
  return (
    <button className={cls} {...(props as React.ComponentProps<"button">)}>
      {content}
    </button>
  );
}

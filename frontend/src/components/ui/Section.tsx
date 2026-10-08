import { cn } from "@/lib/cn";
import { Container } from "./Container";

export function Section({
  tone = "paper",
  className,
  children,
  ...props
}: React.ComponentProps<"section"> & { tone?: "paper" | "sand" | "moss" }) {
  const tones = {
    paper: "bg-paper text-ink",
    sand: "bg-sand text-ink",
    moss: "bg-moss-deep text-paper",
  };
  return (
    <section className={cn("scroll-mt-16 py-16 sm:py-28 lg:scroll-mt-24", tones[tone], className)} {...props}>
      <Container>{children}</Container>
    </section>
  );
}

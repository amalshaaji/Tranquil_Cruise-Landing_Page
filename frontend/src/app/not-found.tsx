import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Heading } from "@/components/ui/Heading";

export default function NotFound() {
  return (
    <Container className="py-32">
      <Eyebrow>404</Eyebrow>
      <Heading as="h1">This channel leads nowhere.</Heading>
      <Button href="/" className="mt-10">
        Back to shore
      </Button>
    </Container>
  );
}

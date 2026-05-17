import { Suspense } from "react";
import ContactPageContent from "@/components/contact/ContactPageContent";

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactPageContent />
    </Suspense>
  );
}

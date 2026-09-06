import type { Metadata } from "next";
import { H1Client } from "./H1Client";

export const metadata: Metadata = {
  title: "H1 · Interactive intelligent home study",
  description:
    "Explore Horizon H1's architectural concept, synthetic energy and water scenarios, and the research behind a more resilient home.",
};

export default function H1Page() {
  return (
    <main id="main-content" className="h1-page">
      <H1Client />
    </main>
  );
}

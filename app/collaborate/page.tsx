import type { Metadata } from "next";
import { SectionLabel } from "@/components/Editorial";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";
export const metadata: Metadata = {
  title: "Start a conversation",
  description:
    "Share a question or idea with Horizon’s founder. Open to conversations across architecture, AI, energy, engineering and research.",
};
export default function CollaboratePage() {
  return (
    <main id="main-content" className="inner-page">
      <section className="page-intro">
        <SectionLabel>Different disciplines. A shared horizon.</SectionLabel>
        <h1>
          Good ideas begin
          <br />
          <em>with a conversation.</em>
        </h1>
        <p>
          A research question. A different perspective. An idea worth testing. I
          would love to hear what you are thinking.
        </p>
      </section>
      <section className="contact-layout section-space">
        <div className="contact-note">
          <h2>Let’s find common ground.</h2>
          <p>
            Horizon is an independent, early-stage initiative. I’m interested in
            learning from people working across architecture, AI, engineering,
            energy and urban life.
          </p>
          <p>You can reach me directly:</p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p style={{ marginTop: 32 }}>
            Solomon Eshun
            <br />
            Founder, Horizon
          </p>
        </div>
        <ContactForm email={site.email} />
      </section>
    </main>
  );
}

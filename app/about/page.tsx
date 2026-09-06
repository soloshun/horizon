import type { Metadata } from "next";
import {
  SectionLabel,
  TextLink,
  CollaborateBand,
} from "@/components/Editorial";
import { FounderPortrait } from "@/components/FounderPortrait";
export const metadata: Metadata = {
  title: "A founder’s perspective",
  description:
    "Solomon Eshun’s personal vision for Horizon: a journey from AI and data toward intelligent, resilient environments, starting in Africa.",
};
export default function AboutPage() {
  return (
    <main id="main-content" className="inner-page">
      <section className="page-intro about-intro">
        <SectionLabel>A founder’s perspective</SectionLabel>
        <h1>
          Every horizon begins
          <br />
          <em>with a question.</em>
        </h1>
        <p>
          Can the places we live become more intelligent, resilient and human at
          the same time?
        </p>
      </section>
      <section className="about-body section-space">
        <figure className="founder-portrait-figure">
          <FounderPortrait />
          <figcaption>
            Solomon Eshun <span>Founder, Horizon</span>
          </figcaption>
        </figure>
        <div className="about-text">
          <h2>
            From thinking in software
            <br />
            <em>to thinking in spaces.</em>
          </h2>
          <p>
            I come from an AI and data background. Much of my work has been
            about intelligence on a screen: data, models and the software
            systems that connect them.
          </p>
          <p>
            Horizon is my exploration of what happens next—when those ideas meet
            buildings, energy, water and the places we experience every day.
          </p>
          <p>
            It starts in Africa, with a desire to design around our climates,
            infrastructure and everyday realities. The ambition reaches further,
            but the first step is close to home.
          </p>
          <p>
            Today, Horizon is me, an idea, and a commitment to learn by making.
            I am starting with research, architectural studies and small
            experiments, one system at a time.
          </p>
          <div className="about-signature">Solomon Eshun</div>
          <p className="eyebrow">Founder, Horizon</p>
          <TextLink href="/research">Explore the first study</TextLink>
        </div>
      </section>
      <CollaborateBand />
    </main>
  );
}

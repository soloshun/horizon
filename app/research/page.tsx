import type { Metadata } from "next";
import {
  SectionLabel,
  TextLink,
  CollaborateBand,
} from "@/components/Editorial";
import { HorizonVideo } from "@/components/media/HorizonVideo";
import { outputs, researchModules } from "@/content/research";
export const metadata: Metadata = {
  title: "Horizon Labs · H1 study",
  description:
    "Explore the first Horizon H1 architectural concept: an editable Blender study, initial system thinking and a transparent research roadmap.",
};
export default function ResearchPage() {
  return (
    <main id="main-content" className="inner-page">
      <section className="page-intro">
        <SectionLabel>Horizon Labs / 001</SectionLabel>
        <h1>
          One home.
          <br />
          <em>A world of questions.</em>
        </h1>
        <div className="research-intro-bottom">
          <p>
            H1 — Intelligent Home Study
            <br />
            An exploration of how a home could connect energy, sensing, water
            and human comfort in one resilient system.
          </p>
          <span className="status-tag">
            <i className="status-dot" /> Research → Architecture
          </span>
        </div>
      </section>
      <section className="research-film" aria-label="H1 architectural film">
        <HorizonVideo
          src="/video/h1-study.mp4"
          poster="/images/h1-study.webp"
          title="H1 architectural massing study"
          caption="01 / Blender massing study · 8 seconds · Silent film"
          transcript="A slow camera movement around a small courtyard-home model on a dark display plinth. Two low wings enclose a terrace. An upper studio has roof-mounted solar panels. Timber screens, wide overhangs, trees and a bench suggest shade and outdoor living. This is a visual concept, with no engineering or energy performance validation."
        />
      </section>
      <section className="research-question section-space">
        <SectionLabel>The research question</SectionLabel>
        <div>
          <h2>
            How could one home
            <br />
            become more resilient,
            <br />
            <em>without becoming more complex?</em>
          </h2>
          <div className="module-list">
            {researchModules.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="research-outputs section-space">
        <SectionLabel>Work in the open</SectionLabel>
        <div className="section-heading-row">
          <h2>
            A study, <em>taking shape.</em>
          </h2>
          <p>
            What exists today.
            <br />
            What comes next.
          </p>
        </div>
        {outputs.map((o) => (
          <article className="output-row" key={o.number}>
            <span>{o.number}</span>
            <h3>{o.title}</h3>
            <p>{o.detail}</p>
            <span className="status-tag">{o.status}</span>
          </article>
        ))}
        <article className="research-log">
          <span className="eyebrow">
            Study note 001 · 06 September 2026 · Concept
          </span>
          <h3>Beginning with the architecture.</h3>
          <p>
            The first H1 artifact is a procedural Blender massing model. It
            gives the systems thinking a place to live: a courtyard, shaded
            rooms, roof space for solar and an indicative equipment area.
          </p>
          <div className="log-grid">
            <div>
              <h4>What was explored</h4>
              <p>
                Two connected wings, deep roof overhangs, a shaded terrace and a
                simple solar-roof arrangement.
              </p>
            </div>
            <div>
              <h4>What this establishes</h4>
              <p>
                An editable visual starting point and a common scale for
                discussing the home’s future systems.
              </p>
            </div>
            <div>
              <h4>What remains unresolved</h4>
              <p>
                Orientation, dimensions, structure, thermal performance, water
                sizing, affordability and all engineering assumptions remain
                unvalidated.
              </p>
            </div>
            <div>
              <h4>The next question</h4>
              <p>
                How should essential loads, storage and local controls be
                represented in the first energy simulation?
              </p>
            </div>
          </div>
          <p className="form-note">
            Source: the Horizon H1 prototype brief and the locally created
            Blender massing study. No physical prototype or measured performance
            is claimed.
          </p>
        </article>
        <div style={{ marginTop: 32 }}>
          <TextLink href="/vision">Read the wider vision</TextLink>
        </div>
      </section>
      <CollaborateBand />
    </main>
  );
}

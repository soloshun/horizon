import type { Metadata } from "next";
import Image from "next/image";
import {
  SectionLabel,
  TextLink,
  CollaborateBand,
} from "@/components/Editorial";
import { principles } from "@/content/site";
export const metadata: Metadata = {
  title: "The vision",
  description:
    "Why Horizon begins with the environment: an Africa-first perspective on intelligent, resilient and human-centred living.",
};
export default function VisionPage() {
  return (
    <main id="main-content" className="inner-page">
      <section className="page-intro">
        <SectionLabel>The Horizon vision</SectionLabel>
        <h1>
          Intelligence belongs
          <br />
          <em>in the world we live in.</em>
        </h1>
        <p>
          A home should do more than contain smart devices. Its energy, water,
          climate and spaces should work together to make life better.
        </p>
      </section>
      <figure className="wide-image">
        <Image
          src="/images/horizon-interior.webp"
          alt="Concept illustration of a warm living room with natural light, timber finishes and a view of solar-equipped homes. Screen values are illustrative."
          fill
          sizes="90vw"
          preload
        />
        <figcaption className="image-caption">
          A possible everyday · Concept imagery, illustrative interface
        </figcaption>
      </figure>
      <section className="vision-essay section-space">
        <SectionLabel number="01">Why Horizon exists</SectionLabel>
        <div className="essay-copy">
          <h2>
            Design the environment.
            <br />
            <em>Connect the thinking.</em>
          </h2>
          <p>
            Horizon began with a question: what happens when AI, buildings,
            energy, water, connectivity and human-centred design are treated as
            parts of one system?
          </p>
          <p>
            The ambition is to explore places that can sense, understand and
            adapt—while remaining comfortable, beautiful and easy to live in.
            Intelligence matters when it improves a human or environmental
            outcome.
          </p>
          <p>
            That journey begins with learning and small experiments. Horizon is
            an early-stage initiative: a growing body of ideas and studies, with
            a long-term ambition to build.
          </p>
          <TextLink href="/research">See where the work begins</TextLink>
        </div>
      </section>
      <section
        id="africa-principles"
        className="principles-section section-space"
      >
        <SectionLabel number="02">Africa first · By design</SectionLabel>
        <div className="principles-grid">
          <h2>
            Our realities.
            <br />
            Our questions.
            <br />
            <em>Our starting point.</em>
          </h2>
          <div>
            {principles.map((p, i) => (
              <article className="principle" key={p.title}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space">
        <SectionLabel number="03">A long-term progression</SectionLabel>
        <h2>
          Start small.
          <br />
          <em>Keep a wider horizon.</em>
        </h2>
        <div className="scale-path">
          {[
            ["Research", "The current starting point"],
            ["One space", "Sensing and local control"],
            ["One home", "An integrated prototype"],
            ["Community", "Shared infrastructure"],
            ["District", "Connected urban life"],
            ["Cities", "A long-term vision"],
          ].map(([title, text], i) => (
            <article className="scale-step" key={title}>
              <span>0{i}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <p className="ecosystem-note">
          A direction of travel, not a promised delivery schedule. Each step
          should earn the next through evidence and learning.
        </p>
      </section>
      <CollaborateBand />
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { HorizonMark } from "@/components/brand/HorizonLogo";
import {
  SectionLabel,
  TextLink,
  CollaborateBand,
} from "@/components/Editorial";
import { Reveal } from "@/components/motion/Reveal";
import { SystemMap } from "@/components/diagrams/SystemMap";
import { Ecosystem } from "@/components/Ecosystem";
import { researchModules } from "@/content/research";
import { FounderPortrait } from "@/components/FounderPortrait";
import { HeroGallery } from "@/components/media/HeroGallery";

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero" aria-labelledby="hero-heading">
        <HeroGallery />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">
            <span /> Africa & Beyond
          </p>
          <h1 id="hero-heading">
            Intelligent spaces.
            <br />
            <em>Brighter lives.</em>
          </h1>
          <div className="hero-lower">
            <p>
              Exploring how intelligence, energy and human-centred design can
              shape the places we call home.
            </p>
            <Link className="button button-ivory" href="/vision">
              Explore the vision <Icon name="arrowUp" />
            </Link>
          </div>
        </div>
        <div className="hero-bottom">
          <span>
            <i className="status-dot" /> Early-stage initiative · Concept + R&D
          </span>
          <span className="hero-concept">
            Architectural concept · Imagining what comes next
          </span>
          <a
            href="#premise"
            className="hero-scroll"
            aria-label="Scroll to the Horizon premise"
          >
            <span>Discover</span>
            <Icon name="down" />
          </a>
        </div>
        <div className="hero-side-note">A more human tomorrow</div>
      </section>
      <div className="chapter-strip">
        <span>People. Places. Possibilities.</span>
        <Link href="/research">
          <span className="status-dot" /> HORIZON LABS{" "}
          <span className="strip-divider">/</span> The first study is taking
          shape <Icon name="arrowUp" />
        </Link>
      </div>
      <section id="premise" className="premise section-space">
        <SectionLabel number="01">A different starting point</SectionLabel>
        <Reveal className="premise-grid">
          <h2>
            The next chapter
            <br />
            of intelligence is
            <br />
            <em>the world around us.</em>
          </h2>
          <div className="premise-copy">
            <HorizonMark className="premise-mark" />
            <p className="lead">
              What if the places we live could understand us a little better?
            </p>
            <p>
              Horizon explores how AI, connected infrastructure and thoughtful
              design can work together in the physical world. From the comfort
              of one room to the life of a whole community.
            </p>
            <p>
              Technology should quietly improve the experience of living. More
              resilient. Less wasteful. Deeply human.
            </p>
            <TextLink href="/vision">Discover our thinking</TextLink>
          </div>
        </Reveal>
      </section>
      <section id="systems" className="systems-section section-space">
        <SectionLabel number="02">An integrated view</SectionLabel>
        <SystemMap />
        <div className="systems-baseline">
          <span>Designed as one environment</span>
          <span>Intelligence in service of life</span>
        </div>
      </section>
      <section id="ecosystem" className="ecosystem-section section-space">
        <SectionLabel number="03">One vision · Multiple scales</SectionLabel>
        <Reveal className="section-heading-row">
          <h2>
            From a single space
            <br />
            <em>to a future city.</em>
          </h2>
          <p>
            Five connected directions.
            <br />
            One long-term ambition for
            <br />
            the way we live.
          </p>
        </Reveal>
        <Ecosystem />
        <p className="ecosystem-note">
          An evolving capability roadmap, beginning with research. These are
          future directions, not five operating companies.
        </p>
      </section>
      <section id="africa" className="africa-section">
        <div className="africa-image">
          <Image
            src="/images/horizon-community.webp"
            alt="Concept artwork of African residents walking through a landscaped, solar-equipped neighbourhood at golden hour."
            fill
            sizes="(max-width: 760px) 100vw, 56vw"
          />
          <span className="image-caption">
            Community vision · Concept imagery
          </span>
        </div>
        <div className="africa-copy">
          <SectionLabel number="04">Where we begin</SectionLabel>
          <Reveal>
            <h2>
              Rooted in Africa.
              <br />
              <em>Open to the world.</em>
            </h2>
            <p>
              What should future living look like when it is designed for our
              climates, infrastructure, cultures and ambitions from the
              beginning?
            </p>
            <p>
              We start with that question. With shade and natural airflow. More
              resilient energy and water. Places for people to come together.
            </p>
            <div className="africa-mantra">
              <span>Start in Africa.</span>
              <span>Learn from Africa.</span>
              <span>Build for the world.</span>
            </div>
            <TextLink href="/vision#africa-principles">
              The principles that guide us
            </TextLink>
          </Reveal>
        </div>
      </section>
      <section className="research-preview section-space">
        <SectionLabel number="05">
          Horizon Labs / The first exploration
        </SectionLabel>
        <Reveal className="section-heading-row">
          <h2>
            A big vision.
            <br />
            <em>A deliberate first step.</em>
          </h2>
          <TextLink href="/research">Inside Horizon Labs</TextLink>
        </Reveal>
        <Link href="/research" className="study-preview">
          <div className="study-visual">
            <Image
              src="/images/h1-study.webp"
              alt="Blender massing study of an L-shaped courtyard home with solar roof, shading screens and a surrounding landscape."
              fill
              sizes="(max-width: 760px) 100vw, 65vw"
            />
            <span className="study-visual-top">
              H1 <span>ARCHITECTURAL STUDY / 001</span>
            </span>
            <span className="study-visual-bottom">
              One intelligent home <Icon name="arrowUp" />
            </span>
          </div>
          <div className="study-preview-copy">
            <span className="status-tag">
              <i className="status-dot" /> Concept study
            </span>
            <h3>
              Start with
              <br />
              one space.
            </h3>
            <p>
              The H1 Intelligent Home Study explores how energy, sensing, water
              and human comfort could operate as one coherent home system.
            </p>
            <div className="module-list">
              {researchModules.slice(0, 6).map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
            <span className="text-link">
              Explore the H1 study <Icon name="arrowUp" />
            </span>
            <small>
              Architectural concept available.
              <br />
              Simulation and physical testing are planned.
            </small>
          </div>
        </Link>
      </section>
      <section className="founder-section section-space">
        <SectionLabel number="06">A founder perspective</SectionLabel>
        <div className="founder-body">
          <span className="quote-mark">“</span>
          <Reveal>
            <h2>
              What happens when
              <br />
              intelligence <em>leaves the screen?</em>
            </h2>
            <p>
              I have spent much of my technical journey thinking about AI as
              software. Horizon is an exploration of what happens when
              intelligence becomes part of the physical environment.
            </p>
            <p>
              The long-term vision is ambitious. The starting point is
              deliberately small: learn, research, prototype, collaborate and
              build one system at a time.
            </p>
            <div className="founder-attribution">
              <FounderPortrait compact />
              <div>
                <span>Solomon Eshun · Founder, Horizon</span>
                <small>AI & data → intelligent environments</small>
              </div>
            </div>
            <TextLink href="/about">The story behind Horizon</TextLink>
          </Reveal>
        </div>
      </section>
      <CollaborateBand />
      <section className="final-statement">
        <HorizonMark />
        <p>
          A smarter,
          <br />
          <em>more human tomorrow.</em>
        </p>
        <span className="eyebrow">
          One space. One system. One community at a time.
        </span>
      </section>
    </main>
  );
}

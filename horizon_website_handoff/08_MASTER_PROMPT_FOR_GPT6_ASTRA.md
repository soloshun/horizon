# MASTER BUILD PROMPT — HORIZON WEBSITE

You are the lead product designer and senior frontend engineer responsible for designing and building the first public website for **Horizon**.

Read **every markdown file in this Horizon handoff folder** before writing implementation code.

Also inspect every supplied Horizon image and logo asset.

Do not begin by forcing the material into a generic website template.

---

## THE PRODUCT

Horizon is an early-stage future-living and intelligent-environments initiative.

It explores how:

- AI and data;
- IoT and sensing;
- edge computing;
- automation;
- clean energy;
- solar and batteries;
- water resilience;
- connectivity;
- smart buildings;
- mobility;
- digital twins;
- physical AI;
- human-centred design;

can be integrated into the environments where people live.

The long-term progression is:

**intelligent space → intelligent home → community → district → city.**

Horizon begins with an Africa-first perspective and a long-term global ambition.

Horizon has not yet built a city or completed a physical property.

The site must be visionary without making false claims.

---

## BRAND

Parent:
**HORIZON**

Tagline:
**Intelligent spaces. Brighter lives.**

Sub-brands / future capability areas:
- Horizon Living
- Horizon Systems
- Horizon Labs
- Horizon Communities
- Horizon Cities

Treat these as one ecosystem.

Do not make them look like unrelated startup companies.

---

## CREATIVE DIRECTION

The website must feel:

- elegant;
- architectural;
- premium;
- futuristic;
- calm;
- cinematic;
- human;
- intelligent;
- highly customized.

Think:

**premium architecture studio × advanced industrial technology × future mobility × world-class product design**

Do not build:

- a generic SaaS site;
- a Web3 site;
- a neon cyberpunk site;
- a conventional estate website;
- a grid of 20 feature cards;
- a site full of stock photography and buzzwords.

Use large typography, whitespace, beautiful image composition, precise linework, restrained gold accents, deep graphite/navy, warm ivory, and strong motion hierarchy.

---

## TYPOGRAPHY

The generated Horizon artwork uses an approximate light geometric sans aesthetic, not a guaranteed named font.

Use a web-safe direction such as:

- Manrope; or
- Montserrat Light / Regular;

with generous tracking in major headings.

Inter may be used for dense interface text.

Do not use an ornate luxury serif as the dominant identity unless a deliberate experiment proves it is better.

---

## MOTION

Use the current official React Motion / Framer Motion implementation.

Motion should feel slow and architectural.

Use:
- mask reveals;
- opacity;
- restrained translation;
- parallax;
- line drawing;
- crossfades.

Avoid:
- bouncing;
- excessive spring motion;
- random floating objects;
- scroll hijacking;
- animation that delays navigation.

Respect `prefers-reduced-motion`.

---

## HERO

Build an immersive hero using the strongest supplied visual or video.

If suitable, generate a new supporting image using the existing Horizon visual direction.

The agent is explicitly allowed to generate additional imagery when useful.

Do not generate fake photographs of "completed Horizon developments" without labeling them as concept imagery.

Hero copy:

Eyebrow:
`AFRICA + BEYOND`

Headline:
`Intelligent spaces. Brighter lives.`

Body:
`Horizon is exploring how AI, energy, connected infrastructure and human-centred design can shape the places we live — from individual spaces to future cities.`

Actions:
`Explore the vision`
`Research in progress`

Status:
`Early-stage initiative · Concept + R&D`

---

## REQUIRED HOMEPAGE STORY

Build these chapters in a flowing editorial narrative:

1. Hero
2. Intelligence is moving into the physical world
3. Integrated systems: intelligence, energy, water, connectivity, buildings, mobility, environment, community
4. Horizon ecosystem
5. Africa-first vision
6. Research / first prototype
7. Founder perspective on physical AI
8. Collaboration
9. Final statement

Do not make every chapter look like a separate rectangle/card section.

Create visual continuity.

---

## HORIZON ECOSYSTEM COPY

### Horizon Living
`Intelligence, made livable.`
Smart homes, hospitality and human-scale environments.

### Horizon Systems
`The intelligence behind the environment.`
AI, IoT, data, sensing, automation and infrastructure software.

### Horizon Labs
`Exploring what comes next.`
Research across physical AI, energy, digital twins, buildings, robotics, embedded systems and future materials.

### Horizon Communities
`Connected places designed around people.`
Neighbourhood-scale shared infrastructure, living, energy, mobility and community systems.

### Horizon Cities
`Intelligence at urban scale.`
The long-term vision for integrated districts and city-scale physical and digital systems.

Include a small transparency statement that these represent a long-term capability roadmap and that some are research concepts.

---

## RESEARCH

Create a visible research section even if the content is currently minimal.

Working project:

`H1 — Intelligent Home Study`

Status:
`Prototype in development`

Modules:
- Solar + energy
- Indoor climate
- Water intelligence
- Sensing + edge
- Digital twin
- Automation
- Resident interface
- AI layer

Show a tasteful `Coming soon` / research state.

Do not invent results.

---

## FOUNDER SECTION

Use a concise first-person perspective:

`I have spent much of my technical journey thinking about AI as software. Horizon is an exploration of what happens when intelligence becomes part of the physical environment — when data, models and automation begin working with buildings, energy, infrastructure and the spaces people experience every day.`

Then:

`The long-term vision is ambitious. The starting point is deliberately small: learn, research, prototype, collaborate and build one system at a time.`

Do not turn this into a long autobiography.

---

## TECHNICAL IMPLEMENTATION

Target:
Vercel.

Use:
- current stable Next.js;
- TypeScript;
- App Router;
- optimized images;
- server components by default;
- client components only for meaningful interaction;
- current Motion / Framer Motion React tooling;
- accessible semantic HTML;
- responsive implementation.

Use SVG for lightweight system diagrams where practical.

Do not add Three.js simply to say the site has 3D.

If there is a pre-rendered Blender video, prioritize it for high-quality hero motion.

---

## CUSTOM MEDIA

Create a bespoke `HorizonVideo` component.

Ambient video:
- muted;
- autoplay;
- loop;
- playsInline;
- poster;
- reduced-motion fallback.

Interactive video:
- custom play/pause;
- timeline;
- mute;
- fullscreen;
- keyboard accessibility;
- auto-hiding controls.

The player should match Horizon visually.

---

## PERFORMANCE

The site must remain practical on mobile networks.

Optimize:
- hero;
- image formats;
- video sizes;
- JS bundle;
- font loading;
- lazy loading.

Do not sacrifice the entire experience for visual effects.

---

## TRUTHFULNESS

NEVER invent:

- clients;
- completed buildings;
- investors;
- partner companies;
- municipalities;
- awards;
- revenue;
- employees;
- project locations;
- statistics.

Use honest status labels.

Concept imagery can be visually ambitious but must not be presented as a completed Horizon development.

---

## IMAGE GUIDANCE

Inspect the supplied assets before selecting.

Likely asset categories include:
- master Horizon logo;
- Horizon Living mark;
- Horizon Systems mark;
- Horizon Labs mark;
- Horizon Communities mark;
- Horizon Cities mark;
- exterior future-community scenes;
- intelligent-home interior;
- brand board.

You may create additional images if needed.

New images should:
- feel warm and architectural;
- include contemporary African life naturally where relevant;
- use greenery and climate-sensitive design;
- show technology subtly;
- avoid generic sci-fi spectacle;
- avoid third-party brands.

---

## DELIVERABLE

Produce a production-quality website, not a static mockup.

At completion:

1. verify all routes;
2. verify mobile;
3. verify keyboard interactions;
4. verify reduced motion;
5. optimize supplied assets;
6. add metadata / OG;
7. make the site Vercel-ready;
8. document how to run locally;
9. document how to replace images/video later;
10. list any assumptions separately.

You have creative freedom within this brief.

When there is a choice between "more features" and "better taste", choose better taste.

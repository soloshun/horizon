# HORIZON — Website Creative Direction

## Creative objective

Build a website that feels like the digital front door of a serious future-facing architecture, technology, and infrastructure company — even though Horizon is currently at the research/concept stage.

The aesthetic should communicate:

**quiet confidence + advanced technology + architectural luxury + optimism + human warmth**

The visitor should feel:

> "This is ambitious, but it has been thought through."

Not:

> "This is a flashy concept site pretending to have already built a city."

---

# 1. Visual language

## Core palette

Suggested direction inspired by the current Horizon artwork:

- Warm ivory / architectural white: `#F7F5F0`
- Soft paper white: `#FBFAF7`
- Deep graphite: `#111820`
- Midnight navy: `#0C1B2A`
- Slate: `#526172`
- Horizon gold: `#C79A59`
- Soft metallic gold highlight: `#D7B477`

Use gold sparingly.

Gold should feel like a material detail, not a "luxury marketing" cliché.

Most pages should be dominated by white/ivory, graphite/navy, architectural imagery, and negative space.

## Dark sections

Use dark sections for:

- cinematic video;
- systems diagrams;
- research/prototype interfaces;
- city/night visualizations.

Avoid making the entire site black.

The brand imagery works best when dark moments contrast with bright architectural whitespace.

---

# 2. Typography

## Important note about the generated logo font

The image-generation model did not use a guaranteed identifiable commercial typeface. The visual direction resembles a **light geometric / neo-grotesk sans-serif with generous tracking**, similar in feel to:

- Avenir Next
- Gotham
- Montserrat Light
- Neue Haas Grotesk
- Helvetica Neue Light

Do not claim that the generated logo uses an exact real-world font unless the final vector logo is manually recreated.

## Recommended web typography

### Safe / easy V1 recommendation

**Primary:** Manrope  
**Secondary / interface:** Inter

Alternative if closer visual similarity to current brand board is preferred:

**Primary:** Montserrat  
Use weights 300, 400, 500.

For headings:
- uppercase selectively;
- letter spacing between `0.08em` and `0.22em`;
- light / regular weights;
- large scale;
- short lines.

For body:
- do not over-track;
- use comfortable line-height;
- keep body copy human and readable.

### Luxury rule
Luxury comes from:

- spacing;
- composition;
- typography scale;
- restraint;
- high-quality media;
- motion timing;

not from using a decorative font everywhere.

---

# 3. Layout

Use a strong editorial grid.

Characteristics:

- large margins;
- strong negative space;
- asymmetrical editorial composition where appropriate;
- oversized hero type;
- thin dividers;
- cinematic full-bleed media;
- subtle line art;
- fewer, larger content blocks;
- minimal cards.

Avoid the conventional SaaS pattern:

`hero → 3 cards → logo wall → 6 feature cards → pricing cards`

Horizon should feel closer to:

**architecture studio × industrial design company × future mobility company × premium technology brand.**

---

# 4. Hero direction

## Preferred hero

Full viewport or ~90vh cinematic scene.

Possible media:
- Blender-rendered Horizon future home/community;
- slow drone-like animation;
- animated architectural model;
- sunrise/sunset community;
- macro transitions between city, building and system layers;
- abstract horizon line transforming into an architectural environment.

### Suggested hero copy

Eyebrow:
`HORIZON / AFRICA + BEYOND`

Headline:
**Intelligent spaces.  
Brighter lives.**

Subcopy:
**Horizon is exploring how AI, energy, connected infrastructure and human-centred design can shape the places we live — from individual spaces to future cities.**

Primary CTA:
`Explore the vision`

Secondary CTA:
`Research in progress`

Status microcopy:
`Early-stage initiative · Africa`

## Hero motion

Use slow motion.

Examples:
- 1–2 second type reveal;
- subtle image scale from 1.03 → 1;
- horizon line draws across;
- ambient parallax;
- nav fades in after media;
- no bouncing CTA arrows;
- no excessive particles.

---

# 5. Motion principles

Use Motion / Framer Motion for controlled transitions.

Motion must feel:

- slow;
- weighted;
- precise;
- architectural.

Suggested motion durations:
- micro interaction: 160–240 ms
- section reveal: 500–900 ms
- cinematic transitions: 900–1600 ms

Suggested easing:
- smooth cubic bezier;
- avoid springy SaaS motion except tiny interface interactions.

Use:
- opacity;
- translation;
- clip-path reveals;
- mask reveals;
- line drawing;
- scale;
- crossfade;
- parallax.

Avoid:
- excessive rotation;
- floating blobs;
- bouncing;
- 3D gimmicks with no meaning;
- scroll-jacking.

Respect `prefers-reduced-motion`.

---

# 6. Media style

## Architectural images

Should show:

- African people naturally using the environment;
- warm climate;
- greenery;
- shaded outdoor spaces;
- solar integration;
- subtle EV infrastructure;
- walkability;
- premium but believable materials;
- water features only when environmentally reasonable;
- homes and public spaces designed together.

Avoid:

- generic Dubai skyline;
- impossible megastructures as the only imagery;
- empty cities with no people;
- excessive glass towers;
- "Africa" represented only through stereotypes;
- cyberpunk neon;
- flying cars everywhere.

## Technology imagery

Prefer:

- elegant system overlays;
- sensor / energy diagrams;
- digital twin views;
- architectural models;
- edge devices;
- smart energy dashboards;
- physical prototypes;
- diagrams embedded in real-world scenes.

Avoid stock photos of:
- glowing AI brains;
- hands touching holograms;
- random circuit boards.

---

# 7. Custom video player

Do not use the browser's default-looking video UI for showcase media.

Build a Horizon video component with:

- minimal play/pause;
- thin progress line;
- time indicator only if needed;
- mute/unmute;
- fullscreen;
- keyboard accessibility;
- hover controls;
- auto-hide controls;
- mobile-friendly tap behavior;
- poster image;
- muted autoplay only for ambient hero videos;
- no autoplay sound.

Visual style:
- subtle translucent dark panel;
- thin 1px border;
- clean glyphs;
- no bulky controls.

---

# 8. Navigation

Desktop:
- Horizon logo left
- Vision
- Ecosystem
- Research
- Africa + Beyond
- About
- Contact / Collaborate

Optional compact right-side status:
`Research / 2026`

On scroll:
- nav becomes a compact translucent / ivory panel;
- subtle blur;
- thin border;
- no huge sticky header.

Mobile:
- simple full-screen menu;
- elegant type;
- no over-designed drawer.

---

# 9. Footer

Minimal.

Possible content:

HORIZON  
`Intelligent spaces. Brighter lives.`

Navigation

Status:
`Research & concept initiative`

Location:
`Africa first · Built for beyond`

Contact:
placeholder until confirmed

Footer note:
`Concepts shown on this site may represent research and future-looking design explorations rather than completed developments.`

That transparency is a strength.

---

# 10. Image-generation freedom

If the website-building agent has access to an image-generation tool, it may create additional images.

Rules:
- preserve the Horizon visual language;
- do not invent real completed projects;
- label fictional developments as `Concept`;
- keep Africa contemporary and aspirational;
- architectural realism over science-fiction spectacle;
- no third-party trademarks;
- use the existing Horizon assets as style references, not as exact vector truth.

---

# 11. Design quality checklist

Before launch, verify:

- No section feels template-generated.
- No repeated card grid pattern dominates the site.
- Every animation serves hierarchy or storytelling.
- Text remains readable.
- Mobile receives equal design attention.
- Images are optimized.
- Videos have fallbacks.
- Site works without motion.
- No fake logos, partner names, client metrics, or awards.
- The page loads quickly enough for users on mobile networks.

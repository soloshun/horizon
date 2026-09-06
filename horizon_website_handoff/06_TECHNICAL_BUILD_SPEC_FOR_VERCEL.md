# HORIZON — Technical Build Specification

## Deployment target

**Vercel**

Use the current stable version of Next.js available at implementation time.

Do not pin the project to an outdated version simply because this document contains a date.

---

# Recommended stack

## Core
- Next.js
- TypeScript
- React
- App Router

## Styling
- Tailwind CSS or a disciplined CSS Modules / CSS variables system

Recommended:
Tailwind for speed, but build a custom design system rather than using generic component-library defaults.

## Motion
Use the current official Motion / Framer Motion React package available at implementation time.

## Icons
Use simple custom SVGs or a restrained icon set.

Do not let an icon library determine the brand style.

## Fonts
Use `next/font`.

Suggested:
- Manrope as primary, or
- Montserrat for a closer geometric logo feel;
- Inter for dense UI if needed.

## 3D
Only if materially useful:
- Three.js
- React Three Fiber

Prefer pre-rendered Blender video for the hero before adding heavy real-time 3D.

## Content
V1 can use local typed data / MDX.

Do not add a CMS until content volume justifies it.

---

# Suggested file architecture

```text
app/
  page.tsx
  vision/
    page.tsx
  research/
    page.tsx
  about/
    page.tsx
  layout.tsx
  globals.css

components/
  brand/
    HorizonLogo.tsx
    HorizonDivisionMark.tsx
  navigation/
    Header.tsx
    MobileMenu.tsx
  sections/
    Hero.tsx
    Premise.tsx
    IntegratedSystem.tsx
    Ecosystem.tsx
    AfricaFirst.tsx
    ResearchPreview.tsx
    FounderVision.tsx
    Collaboration.tsx
    FinalStatement.tsx
  media/
    HorizonVideo.tsx
    ResponsiveImage.tsx
  motion/
    Reveal.tsx
    LineReveal.tsx
    ParallaxMedia.tsx
  diagrams/
    SystemMap.tsx
  ui/
    Button.tsx
    SectionLabel.tsx
    StatusTag.tsx
    Divider.tsx

content/
  site.ts
  divisions.ts
  research.ts

public/
  brand/
  images/
  video/
```

---

# Design tokens

Use CSS variables.

Example:

```css
:root {
  --hz-ivory: #f7f5f0;
  --hz-paper: #fbfaf7;
  --hz-graphite: #111820;
  --hz-navy: #0c1b2a;
  --hz-slate: #526172;
  --hz-gold: #c79a59;

  --hz-radius-sm: 8px;
  --hz-radius-md: 16px;

  --hz-page-x: clamp(20px, 4vw, 72px);
  --hz-section-y: clamp(88px, 12vw, 180px);
}
```

Treat these as starting values.

The design agent may refine them.

---

# Responsive breakpoints

Design mobile-first.

Test at minimum:
- ~360px
- ~390px
- 768px
- 1024px
- 1440px
- 1728px+

Do not merely shrink the desktop site.

On mobile:
- reduce tracking;
- simplify diagrams;
- replace horizontal compositions with vertical;
- use poster images instead of heavy video when appropriate;
- maintain generous but realistic whitespace.

---

# SEO / metadata

Suggested title:

`Horizon — Intelligent Spaces. Brighter Lives.`

Description:

`Horizon is an early-stage future-living initiative exploring AI, energy, connected infrastructure and human-centred design for homes, communities and cities — starting in Africa.`

Add:
- Open Graph image
- favicon
- web manifest if useful
- structured metadata later when business details are real

Do not add fake organization fields such as founding date, address, or legal name before confirmed.

---

# Analytics

Optional at V1.

If used:
- privacy-conscious analytics;
- Vercel Web Analytics is sufficient initially.

No need for heavy marketing trackers.

---

# Forms

Collaboration/contact form fields:

- Name
- Email
- Organisation (optional)
- Area of interest
- Message

Area:
- Research
- Architecture / Built Environment
- AI / Technology
- Energy / Infrastructure
- Development
- Investment
- General

Use server-side validation.

Implement basic spam protection.

---

# Security

- no secrets in client code;
- environment variables through Vercel;
- validate contact form server-side;
- rate limit if form is public;
- sanitize user-submitted content;
- dependency updates;
- security headers where appropriate.

---

# Image handling

The user will supply Horizon-generated assets.

Agent should:

1. inspect all supplied images;
2. classify them:
   - master brand;
   - sub-brand logos;
   - community visuals;
   - interior visuals;
   - moodboards;
3. rename files clearly;
4. crop derivatives appropriately;
5. do not use large full-resolution PNGs directly when optimization can be done;
6. preserve originals separately.

Potential production naming:

```text
horizon-master-mark.png
horizon-living-mark.png
horizon-systems-mark.png
horizon-labs-mark.png
horizon-communities-mark.png
horizon-cities-mark.png

horizon-community-golden-hour.webp
horizon-smart-living-interior.webp
horizon-brand-board.webp
```

If the logos are later professionally redrawn, replace raster logo assets with SVG.

---

# Performance targets

Aim for excellent real-world performance rather than chasing arbitrary scores.

Targets:
- fast mobile initial load;
- no giant JS bundle;
- no unnecessary client components;
- optimized hero;
- minimal layout shift;
- lazy-loaded lower-page media.

Prefer server components by default.

Use client components only where interactivity requires them.

---

# Quality gate before deployment

The website must:

- build without warnings that indicate real issues;
- have no broken links;
- work on Safari, Chrome and Firefox;
- work on modern iOS and Android;
- have no horizontal overflow;
- have meaningful page titles;
- have alt text;
- have focus states;
- respect reduced motion;
- have a 404 page;
- use optimized assets;
- have an OG preview;
- clearly label conceptual work;
- not invent company facts.

---

# Vercel deployment

Expected workflow:

1. Git repository
2. connect to Vercel
3. preview deployments for every branch/PR
4. production deploy from main
5. add custom domain later
6. configure environment variables
7. verify mobile + production media
8. enable analytics only if desired

Keep the domain abstracted from copy so it can change later without code rewrites.

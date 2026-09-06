# Website and Repository Integration

## Decision

For now, keep H1 inside the existing Horizon website repository.

Make it self-contained enough to extract later.

## Recommended structure

```text
horizon-site/
├── app/
│   └── research/
│       ├── page.tsx
│       └── h1/
│           ├── page.tsx
│           ├── loading.tsx
│           └── error.tsx
├── src/
│   └── features/
│       └── horizon-h1/
│           ├── index.ts
│           ├── components/
│           ├── scene/
│           ├── cameras/
│           ├── systems/
│           ├── simulation/
│           ├── state/
│           ├── data/
│           ├── ai/
│           ├── content/
│           ├── utils/
│           └── tests/
├── public/
│   └── h1/
│       ├── models/
│       ├── textures/
│       ├── data/
│       ├── posters/
│       └── video/
└── horizon-h1/
    ├── docs/
    ├── research/
    ├── diagrams/
    ├── schemas/
    └── README.md
```

Adapt to the existing site's exact folder conventions instead of creating a second architecture unnecessarily.

## Research page

Card:

**H1 — Intelligent Home Study**

Status:
`Prototype in development`

CTA:
`Explore H1`

Route:
`/research/h1`

## Lazy loading

The main website should not load the H1 3D bundle.

Dynamically load the H1 experience only on the H1 route.

Use a poster/brand loading shell first.

## Separation boundary

H1 can consume shared Horizon brand primitives.

H1-specific:
- simulation;
- scene;
- camera;
- datasets;
- AI explanation;
- research content;

should remain inside the feature folder.

## State

Keep simulation state local to H1.

Possible:
- Zustand;
- XState for discrete transitions;
- plain React state/context for a smaller initial version.

Avoid global app state unless required.

## Research content

Do not hardcode long source/rationale text inside 3D objects.

Use:
`src/features/horizon-h1/content/`

or MDX/JSON.

## Object mapping

Create explicit mapping between research IDs and Blender names.

```ts
const h1Objects = {
  "ENE-PV-001": "ENE_PV_ARRAY_A",
  "WAT-TANK-001": "WAT_POTABLE_TANK_A",
  "IOT-EDGE-001": "IOT_EDGE_GATEWAY_A",
}
```

## Scenario data

Generate offline.

Store production-safe outputs under:

`public/h1/data/scenarios/`

Research scripts stay outside public assets.

## Future extraction

When H1 becomes a standalone project, move:

- `src/features/horizon-h1/`
- `public/h1/`
- `horizon-h1/`

into a new repository and wrap with its own application shell.

## Git

Useful branch sequence:
- `feature/h1-foundation`
- `feature/h1-threejs`
- `feature/h1-energy`
- `feature/h1-water`
- `feature/h1-climate`
- `feature/h1-ai`

Keep meaningful commit history if the repo is used as evidence of the build/learning process.

## Large assets

Do not serve Blender source files through Vercel.

Production site:
- optimized GLB;
- textures;
- posters;
- video.

Source `.blend`:
- project folder;
- Git LFS or separate storage later if large.

## AI API

If a cloud LLM is later used:
- keep keys server-side;
- rate-limit;
- restrict tools;
- avoid arbitrary device commands.

A deterministic scenario-explanation demo can ship before a live LLM.

## Vercel

Vercel remains the web deployment target.

Research calculations can run locally or in CI, then export static scenario JSON.

Do not try to run EnergyPlus in a browser or Vercel edge function for V1.

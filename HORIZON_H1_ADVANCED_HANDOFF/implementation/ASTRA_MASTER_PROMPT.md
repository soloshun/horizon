# MASTER PROMPT — Implement Horizon H1 Inside the Existing Horizon Website

You are the senior research engineer, systems architect, 3D web engineer and product designer responsible for continuing the existing Horizon website with **Horizon H1 — Intelligent Home Study**.

## Before coding

1. Inspect the existing Horizon website and preserve its successful visual system.
2. Read the parent Horizon handoff if included.
3. Read **every file in this H1 handoff folder**.
4. Inspect all H1 screenshots, Blender files, images, video and existing website implementation.
5. Do not turn the site into a generic SaaS or video-game interface.

## What H1 is

H1 is a research-backed interactive prototype exploring how a residential environment can integrate:

- passive building design;
- PV;
- battery storage;
- grid electricity;
- outage resilience;
- critical-load management;
- water supply/storage;
- rainwater research;
- leak monitoring;
- indoor climate and IAQ;
- IoT;
- local edge computing;
- deterministic automation;
- ML/optimization;
- an optional SLM/LLM explanation layer.

The current Blender house is the visual shell. The purpose of the implementation is to reveal the system behind the shell.

Publicly describe H1 as:
- concept;
- research;
- simulation;
- prototype in development.

Never imply a completed physical Horizon development.

## Repository

Keep H1 inside the existing Horizon website repo for now.

Preferred modular layout:

```text
app/research/h1/
src/features/horizon-h1/
public/h1/
horizon-h1/
```

Adapt to the actual project structure.

Do not create a separate nested website.

## Core simulation architecture

Use two tiers.

### Research tier
Python / EnergyPlus / weather/PV tools generate scenario data.

### Web tier
Three.js / React Three Fiber renders scenario data.

Do **not** fake research-grade building physics inside Three.js.

If research outputs do not exist yet:
- create clean interfaces;
- use clearly labeled `Demo` datasets;
- leave implementation hooks;
- never invent final savings or performance numbers.

## Route

On main research page:

**H1 — Intelligent Home Study**  
`Prototype in development`

CTA:
`Explore H1`

Route:
`/research/h1`

Use same tab.

Provide fullscreen inside H1.

## H1 modes

Primary:
- Explore
- Energy
- Water
- Climate
- Systems

Scenario:
- Sunny
- Cloudy
- Rain
- Night
- Grid Outage

Later:
- Water Leak
- Internet Outage

Use one authoritative simulation clock for all state.

## Camera

Implement cinematic targets:
- overview;
- front;
- PV roof;
- energy service area;
- water;
- living/IAQ;
- edge hub;
- exploded view.

Smooth 0.9–1.6 second transitions.

Return control after focus.

## Interaction

Use semantic object mapping and research IDs.

Example:
- `ENE-PV-001`
- `ENE-BAT-001`
- `WAT-TANK-001`
- `IOT-EDGE-001`

On click:
1. highlight;
2. focus camera;
3. open research drawer;
4. show current simulation state;
5. show rationale;
6. show source links.

## Day/night

Night must change:
- sky;
- sun;
- scene lights;
- PV;
- loads;
- grid/battery;
- UI.

Do not implement visual-only night.

## Rain

Rain must change:
- clouds;
- rain visual;
- PV scenario;
- runoff/rainwater path;
- lighting/daylight if modeled.

Do rain in Three.js, not thousands of exported Blender particles.

## Grid outage

This is a flagship interaction.

Show:
- grid disconnect;
- backup state;
- critical load mode;
- PV/battery flow;
- load shedding if applicable;
- state-aware explanation.

Teach the distinction between ordinary grid-tied PV and outage-capable solar/storage architecture.

## Systems view

Create an elegant exploded/X-ray mode.

Reveal:
- energy;
- water;
- data;
- airflow.

Use restrained Horizon colors:
- gold energy;
- blue water;
- navy/cyan data;
- pale cyan air.

Avoid neon cyberpunk aesthetics.

## Research drawer

Tabs:
- Overview
- Simulation
- Why this design?
- Research
- Sources

All technical numbers must be tagged as:
- Demo
- Simulation
- Measured
- Forecast

## Blender

Before adding visual detail:
- semantic collections;
- semantic names;
- real meter scale;
- clean origins/transforms;
- optimized GLB;
- camera-target empties;
- mapped research IDs.

Use generic equipment geometry unless a real product is being researched.

## AI

Do not build a generic chatbot.

The H1 assistant should answer from:
- current structured state;
- recent events;
- H1 documentation.

Initial version can be read-only.

Example:
`Why did the battery fall today?`

The assistant should explain actual scenario data.

Do not give an LLM unbounded direct device control.

## Security/privacy

Preserve:
- local-first operation;
- segmented device architecture;
- secure update/device identity concepts;
- minimal occupancy surveillance;
- manual override.

## Mobile

Provide:
- lighter model;
- guided camera;
- bottom sheet;
- quality scaling;
- static fallback.

3D must not be the only access path to research.

## Performance

- lazy load H1;
- no H1 bundle on homepage;
- optimized GLB;
- compressed textures;
- adaptive DPR;
- limit dynamic shadows;
- LOD/instancing;
- accessible reduced-motion mode.

## Sources

Use the included `research/REFERENCES.md`.

Primary reference backbone:
- Ghana Building Code;
- Ghana Energy Commission;
- DOE/EnergyPlus;
- NASA POWER;
- PVGIS;
- NREL;
- WHO;
- ASHRAE;
- EPA;
- NIST.

Do not copy full standards into the repo.

## Implementation order

1. integrate route/folder;
2. semantic Blender export;
3. base Three.js explorer;
4. research drawer;
5. scenario state engine;
6. day/night;
7. energy;
8. outage;
9. water/rain;
10. climate;
11. AI explanation;
12. accessibility/performance;
13. research dossier cleanup.

At every milestone report:
- files changed;
- assumptions;
- demo vs research data;
- unresolved questions;
- how to run/test;
- next validation.

When forced to choose between visual spectacle and scientific honesty, choose scientific honesty while maintaining exceptional Horizon design.

# HORIZON H1 — Intelligent Home Research Prototype

**Status:** concept + research + implementation specification  
**Version:** 0.1  
**Reference context:** Accra, Ghana as the initial climate/regulatory reference; exact site TBD  
**Parent brand:** Horizon  
**Public project name:** **Horizon H1 — Intelligent Home Study**

## What H1 is

Horizon H1 is a research-backed interactive prototype exploring how a future residential environment could integrate:

- architecture and passive climate design;
- solar PV, battery storage and grid electricity;
- outage resilience and critical-load management;
- water supply, storage, rainwater research and leak monitoring;
- indoor climate, ventilation and air-quality sensing;
- IoT, edge computing and local-first automation;
- machine learning and an optional SLM/LLM explanation layer;
- a resident interface;
- an interactive Blender + Three.js visualization.

The existing Blender model is the **visual shell**. The actual project is the **technical architecture, simulation, research traceability and interaction model behind the shell**.

The visitor should be able to ask:

- Where is the house getting power from right now?
- What happens if the grid fails?
- What is the battery doing?
- What changes when it rains?
- Where is water stored?
- What sensors are active?
- What does the edge computer do?
- Which decisions use deterministic controls, ML, or an SLM/LLM?
- Why was a specific material or subsystem chosen?

Every significant answer should trace to a documented source, assumption, simulation, design decision, or explicitly unresolved research question.

## What H1 is not

H1 is not a construction package, engineered electrical design, plumbing specification, code-compliance certificate, completed Horizon house, or full operational digital twin.

Future physical construction must be reviewed by qualified local professionals against the applicable Ghana Building Code, Energy Commission rules, utility requirements, fire/life-safety requirements and site-specific engineering.

## Core rule

> **The 3D model visualizes the research. The research must not be invented to justify the 3D model.**

## Recommended location inside the current Horizon website

Keep H1 inside the existing site for now, but isolate it so it can later become a standalone repository:

```text
horizon-website/
├── app/
│   └── research/
│       └── h1/
│           └── page.tsx
├── src/
│   └── features/
│       └── horizon-h1/
│           ├── components/
│           ├── scene/
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
│       ├── images/
│       └── video/
└── horizon-h1/
    ├── docs/
    ├── diagrams/
    ├── schemas/
    ├── research/
    └── README.md
```

The runtime code belongs in `src/features/horizon-h1/`. The long-form research and architecture documentation belongs in `horizon-h1/`. That boundary makes later extraction into a dedicated GitHub repository straightforward.

## Read order

1. `docs/01_PROJECT_CHARTER.md`
2. `docs/02_BUILDING_AND_MATERIALS.md`
3. `docs/03_SYSTEM_ARCHITECTURE.md`
4. `docs/04_ENERGY_WATER_CLIMATE.md`
5. `docs/05_EDGE_AI_SECURITY.md`
6. `docs/06_INTERACTIVE_3D_BLENDER_UX.md`
7. `docs/07_SIMULATION_RESEARCH_AND_VALIDATION.md`
8. `implementation/WEBSITE_REPO_INTEGRATION.md`
9. `research/REFERENCES.md`
10. `implementation/ASTRA_MASTER_PROMPT.md`

## Public positioning

Use labels such as:

- Research
- Concept
- Reference architecture
- Simulation
- Prototype in development
- Interactive demonstrator
- Conceptual digital-twin prototype

Avoid language implying a completed physical development until that is actually true.

## One-line public description

**Horizon H1 is a research-backed interactive study of how energy, water, climate, sensing, edge computing and AI could work together as one intelligent residential system.**

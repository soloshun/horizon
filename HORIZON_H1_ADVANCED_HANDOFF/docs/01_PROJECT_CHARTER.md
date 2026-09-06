# 01 — Project Charter

## Purpose

H1 exists to transform the Horizon vision from a beautiful visual concept into a serious technical learning project.

The intended method is:

**research → assumptions → architecture → simulation → interaction → documentation → iteration**

H1 should become a credible artifact for future applications, researchers, architects, engineers, smart-city programmes, technical collaborators, developers and eventually investors.

## Core research question

> **How can a residential building designed for an African context integrate passive design, distributed energy, water, sensing, edge computing and AI into one coherent system that improves resilience, comfort, efficiency and human experience?**

## Research questions

### Architecture
- How should the building form respond to a warm/humid climate?
- What orientation, shading and glazing decisions reduce cooling demand?
- Which spaces should support natural ventilation?
- Which materials are locally practical, durable and resource-efficient?

### Energy
- What is the actual household load profile?
- What PV size is justified by load, roof area and solar resource?
- What battery capacity produces meaningful resilience?
- Which loads remain powered during outages?
- When should the house import, store or export electricity?
- How does Ghana's net-metering framework affect a future implementation?

### Water
- What are the expected water uses?
- How should primary supply and storage be represented?
- What non-potable role could rainwater play?
- How should flow, tank level and leaks be monitored?

### Comfort and indoor air
- When should shading, natural ventilation, fans, dehumidification or mechanical cooling be used?
- Which indoor variables should be measured?
- How should comfort be represented without reducing it to one fixed temperature?

### IoT and edge
- Which systems require local operation?
- What happens if the internet fails?
- Which devices use Ethernet, Wi-Fi, Thread/Matter or other links?
- How are device identity, update security and access controlled?

### AI
- What should remain deterministic?
- What should use optimization?
- What should use ML?
- What is the legitimate role of an SLM/LLM?
- What should generative AI never directly control?

### Human experience
- What should be automated silently?
- What should be visible?
- How does the resident override automation?
- How does the system explain why something happened?

## H1 success criteria

H1 V1 should let a visitor:

1. understand the house architecture;
2. inspect the PV/grid/battery relationship;
3. trigger a grid-outage scenario;
4. trigger day, night and rain scenarios;
5. inspect at least one indoor climate zone;
6. understand the water path and a leak scenario;
7. inspect the local edge/AI architecture;
8. open a research drawer containing rationale and sources;
9. distinguish simulation/demo values from real measurements;
10. use a responsive fallback if full 3D is unavailable.

## Design principles

### Human first
A technically advanced house that irritates residents has failed.

### Passive before active
Reduce the physical load before adding active control:

```text
shading
  ↓
envelope
  ↓
natural ventilation
  ↓
fans / efficient air movement
  ↓
mechanical cooling
  ↓
optimization
```

### Local before cloud
Critical operations should degrade gracefully without internet access.

### Deterministic before generative
Safety- and infrastructure-critical actions should be bounded, explicit and testable. Generative AI is initially an explanation/interface layer.

### Observable
The house should be able to explain:
- current state;
- recent events;
- alerts;
- major automated actions.

### Modular
Avoid permanent dependence on a single device vendor.

### Research-backed
Tag technical claims as:

- `SOURCE`
- `ASSUMPTION`
- `SIMULATION`
- `DESIGN DECISION`
- `EXPERIMENT`
- `OPEN QUESTION`

## Evidence levels

- **E0 — Idea:** unverified concept.
- **E1 — Sourced concept:** supported by a credible source.
- **E2 — Modeled:** tested by calculation/simulation.
- **E3 — Prototype tested:** validated with physical hardware.
- **E4 — Real deployment:** observed in an actual building.

H1 initially lives mainly at E1–E2.

## Reference context

Use Accra, Ghana as the initial climate/regulatory reference. The current Blender model does **not** represent a real Horizon site.

Before numerical analysis:
- choose a documented reference coordinate;
- record source and dataset version;
- retrieve hourly weather/solar data;
- rerun all major analyses for a real project location later.

## Research toolchain

Suggested:
- Blender — geometry/visualization;
- Three.js or React Three Fiber — web interaction;
- EnergyPlus — building thermal/energy simulation;
- OpenStudio/Honeybee optionally — modeling workflow;
- NASA POWER / PVGIS — weather and solar;
- PVGIS / NREL PVWatts or SAM — PV estimation/cross-check;
- Python, pandas, NumPy — research pipeline;
- Mermaid/SVG — diagrams.

## Long-term scale path

```text
H1 intelligent home
      ↓
Horizon Living
      ↓
multi-home shared systems
      ↓
Horizon Communities
      ↓
district systems
      ↓
Horizon Cities
```

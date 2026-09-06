# 06 — Interactive 3D, Blender, UX and Camera Specification

## 1. Experience goal

The H1 page should feel like entering a technical exhibit.

A visitor should be able to explore three depths:

### Experience
A beautiful intelligent home.

### Systems
Energy, water, climate, sensors, edge computing.

### Research
Assumptions, diagrams, simulations, rationale and sources.

The user should not have to read everything, but every visual claim should have a deeper technical layer available.

---

# 2. Route

Use:

`/research/h1`

The research page card links to H1 in the same tab.

Provide:
`Enter fullscreen`

Do not force a new browser tab.

---

# 3. Loading state

Avoid a generic spinner.

Possible sequence:

```text
HORIZON H1
INTELLIGENT HOME STUDY

Loading geometry
Loading systems
Loading scenario data
```

Use the Horizon line as a restrained progress indicator.

If WebGL fails:
- show a hero render;
- show system diagrams;
- preserve all research text.

---

# 4. Main UI modes

Primary:

```text
EXPLORE
ENERGY
WATER
CLIMATE
SYSTEMS
```

Scenario controls:

```text
SUNNY
CLOUDY
RAIN
NIGHT
GRID OUTAGE
```

Later:
- water leak;
- internet outage.

Time:
- 24-hour scrubber;
- one authoritative simulation clock.

Do not expose every control at once.

---

# 5. Camera presets

## CAM-00 — Establishing
High three-quarter view based on the current Blender composition.

## CAM-01 — Front approach
Human eye-level view of entry/facade.

## CAM-02 — PV roof
Focus on PV array and roof.

## CAM-03 — Energy service
Focus on conceptual inverter, battery, distribution and edge area.

## CAM-04 — Water
Focus on tank, pump, rainwater route or service zone.

## CAM-05 — Living / IAQ
Interior climate zone.

## CAM-06 — Edge hub
Technical close-up.

## CAM-07 — Exploded axonometric
System view.

Camera transitions:
- interpolate position + target;
- roughly 0.9–1.6 seconds;
- use smooth ease;
- return control after transition.

Avoid camera teleportation.

---

# 6. Orbit interaction

Explore mode:
- orbit;
- zoom;
- restrained pan;
- constrained polar angle;
- sensible min/max zoom.

Subsystem focus:
- guide camera;
- do not permanently lock user.

---

# 7. Clickable components

Use raycasting.

Initial selectable groups:
- PV array;
- roof;
- west/east glazing;
- shading;
- energy equipment;
- grid point;
- potable tank;
- rainwater tank;
- living zone;
- edge gateway;
- selected sensors.

On hover:
- subtle outline;
- short label.

On click:
1. focus camera;
2. highlight component;
3. open research drawer;
4. switch to relevant system overlay;
5. expose rationale/source.

---

# 8. Exploded / X-ray mode

Button:
`SYSTEM VIEW`

Animation:
- roof lifts;
- facade becomes partially transparent;
- hidden utility paths become visible.

Semantic color:
- energy — restrained gold;
- water — blue;
- data — navy/cyan;
- airflow — pale cyan;
- warning — red only for actual alert.

Do not turn the site into a cyberpunk HUD.

---

# 9. Day-to-night transition

When user selects `NIGHT`:

### 0–400 ms
UI state acknowledges selection.

### 0–1500 ms
- sun lowers;
- sky/environment crossfades;
- light intensity changes;
- shadows transition.

### 500–1800 ms
- path/exterior lights fade on;
- occupied interior zones illuminate;
- PV flow falls toward zero.

### 1000–2200 ms
- energy panel transitions to night state;
- battery/grid source updates.

No hard cut.

---

# 10. Sunny-to-rain transition

Visual:
- cloud coverage grows;
- scene darkens slightly;
- rain begins;
- roof surfaces become visually wet;
- optional subtle puddle effect if performance allows.

Systems:
- PV scenario drops;
- rainwater route activates;
- daylight/lighting state changes;
- ventilation recommendation may change.

Audio:
- never autoplay sound;
- optional user-enabled ambient rain.

Do not export thousands of Blender rain particles. Implement web rain in Three.js.

---

# 11. Grid outage

Button:
`SIMULATE GRID OUTAGE`

Sequence:
1. grid indicator pulses;
2. utility line goes offline;
3. grid energy flow disappears;
4. backup state activates if scenario supports it;
5. critical loads remain highlighted;
6. noncritical loads dim/shed if modeled;
7. battery/PV flows become prominent;
8. explanation panel updates.

The house should not automatically go fully dark merely because the grid fails.

The exact response comes from scenario data.

---

# 12. Timeline

A 24-hour scrubber can become one of H1's strongest interactions.

As time changes:
- sun position;
- sky;
- PV;
- load;
- SOC;
- interior lights;
- occupancy;
- temperature state;

all move together.

Use one clock in the state engine.

---

# 13. Research drawer

Desktop side panel with tabs:

```text
OVERVIEW
SIMULATION
WHY THIS DESIGN?
RESEARCH
SOURCES
```

Example — PV:

### Overview
Roof-mounted PV array.

### Simulation
Current output and flow.

### Why this design?
Short rationale.

### Research
Array assumptions, orientation, losses, source dataset.

### Sources
Clickable references.

---

# 14. Mobile

Do not shrink desktop controls mechanically.

Mobile V1:
- simplified model;
- guided camera;
- bottom sheet;
- large subsystem buttons;
- lower quality;
- optional lightweight/static view.

The research must remain available even if 3D is disabled.

---

# 15. Accessibility

3D is not the only interaction path.

Every subsystem needs:
- DOM button;
- text description;
- keyboard focus;
- accessible panel.

Support:
- Escape to close;
- Tab between systems;
- Enter to select;
- reduced-motion mode.

---

# 16. Horizon visual language

Use:
- warm ivory;
- graphite/navy;
- restrained gold;
- thin dividers;
- generous spacing;
- uppercase tracked micro-labels;
- calm geometric sans.

The UI should resemble architectural instrumentation, not a game.

---

# 17. Web performance

Use:
- lazy loading;
- GLB/gltf;
- Meshopt/Draco where appropriate;
- KTX2/Basis textures where useful;
- instancing;
- LODs;
- adaptive DPR;
- limited dynamic shadows;
- baked/static lighting where possible.

Do not load the H1 3D scene in the homepage bundle.

---

# 18. Blender refactor

Use collections:

```text
H1
├── 00_SITE
├── 01_STRUCTURE
├── 02_ENVELOPE
├── 03_INTERIOR
├── 04_ENERGY
├── 05_WATER
├── 06_IOT
├── 07_LANDSCAPE
├── 08_LIGHTING
├── 09_CAMERAS
├── 10_ANIMATION
└── 99_HELPERS
```

Semantic object names:

```text
ENE_PV_ARRAY_A
ENE_INVERTER_A
ENE_BATTERY_A
WAT_POTABLE_TANK_A
WAT_RAIN_TANK_A
IAQ_SENSOR_LIVING_CO2
IOT_EDGE_GATEWAY_A
BLD_WINDOW_WEST_01
BLD_SHADE_WEST_01
```

Apply sensible transforms/origins.

Use real-world meters.

---

# 19. Blender camera targets

Create empties:

```text
CAM_TARGET_OVERVIEW
CAM_TARGET_PV
CAM_TARGET_ENERGY
CAM_TARGET_WATER
CAM_TARGET_LIVING
CAM_TARGET_EDGE
CAM_TARGET_EXPLODED
```

Export or record target coordinates for the web camera controller.

---

# 20. Web asset structure

Possible:

```text
public/h1/models/
  h1-house-main.glb
  h1-systems.glb
  h1-landscape.glb
```

Or one optimized GLB if testing shows it is better.

Use lightweight geometry for hidden systems.

---

# 21. Materials

Separate realistic materials from visualization overlays.

Examples:

```text
VIS_ENERGY_FLOW
VIS_WATER_FLOW
VIS_DATA_FLOW
VIS_AIR_FLOW
VIS_SELECTION
```

These can be assigned in Three.js.

---

# 22. Blender deliverables

Produce:
- sunrise exterior;
- evening exterior;
- night;
- rain;
- energy exploded view;
- water exploded view;
- systems axonometric;
- living interior;
- technical room.

These support the website before the full interactive model is complete.

---

# 23. React architecture

```text
<H1Experience>
  <H1Scene />
  <H1CameraController />
  <H1ScenarioController />
  <H1SystemLayer />
  <H1Timeline />
  <H1ResearchPanel />
  <H1Assistant />
</H1Experience>
```

Important:
**state lives outside the Three.js scene.**

The scene renders state; it should not own the research logic.

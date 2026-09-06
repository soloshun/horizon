# 02 — Building and Materials Technical Dossier

## Status

This is a **research specification, not a construction specification**.

The current model does not yet contain enough information about site, soil, structure, cost, fire/life safety, local suppliers or final programme to justify fixed materials.

Therefore H1 should use:
- a provisional simulation baseline;
- a material decision matrix;
- explicit alternatives;
- a record of why each choice is provisional.

The 2018 Ghana Building Code contains dedicated parts on interior environment, energy efficiency/sustainability, roofs, structural loads, concrete, masonry, steel, wood/bamboo/rattan, glazing, electrical systems, mechanical systems, plumbing, small buildings and green-building requirements. H1 should use the Ghana code as its local starting point instead of importing an entire foreign house specification.

## Architectural intent

Evolve the current Blender house toward a warm-climate contemporary home that communicates:

- shade;
- airflow;
- controlled daylight;
- restrained glazing;
- a durable envelope;
- integrated solar;
- water management;
- serviceability;
- landscape;
- discreet technical infrastructure.

Do not design a sealed glass box and attempt to fix the heat load with AI.

## Massing/orientation research direction

Provisional strategy:
- orient the long building axis roughly east-west where site constraints allow;
- reduce uncontrolled east/west glazing;
- shade openings externally;
- use roof overhangs, fins, deep reveals and covered transitions;
- enable cross-ventilation where outdoor air quality, rain, noise and security allow;
- place high-heat equipment away from key occupied zones;
- provide maintainable service spaces.

Every final orientation choice should be simulated.

## Provisional material baseline

### Primary structure
Use a **reinforced-concrete frame/slab baseline** for current simulation and visualization because it is compatible with the present model and common regional construction practice.

But explicitly record:
- this is not automatically the lowest-carbon option;
- concrete quantity, cement content and structural alternatives should later be compared;
- a structural engineer must design the final system.

### External wall
Start with a locally practical masonry/block assembly as a simulation baseline.

Compare later:
- conventional concrete block;
- aerated/autoclaved block if locally available;
- insulated masonry;
- stabilized-earth/laterite systems only if engineering, moisture behavior and supply quality are validated.

Decision dimensions:
- assembly U-value;
- density;
- embodied energy/carbon;
- local availability;
- labor familiarity;
- moisture behavior;
- durability;
- maintenance;
- acoustic performance;
- cost;
- fire performance.

### Roof
The current flat-roof language can use a conceptual build-up:

```text
PV array on engineered mounting
        ↓
ventilated clearance
        ↓
high-reflectance durable roof finish
        ↓
continuous insulation
        ↓
waterproofing / drainage strategy
        ↓
structural roof
        ↓
interior finish
```

The final roof assembly and waterproofing sequence must be professionally engineered.

Research objectives:
- reduce roof solar heat gain;
- maintain drainage during intense rain;
- coordinate PV mounts and membrane;
- avoid ponding;
- allow inspection and maintenance.

DOE cool-roof guidance supports studying high solar reflectance and thermal emittance in hot climates.

### Glazing
Research direction:
- use less glass where glass has no performance benefit;
- shade externally;
- provide operable sections where natural ventilation is intentional;
- compare lower-SHGC glazing;
- investigate low-e / spectrally selective products where locally practical.

Clicking a window in H1 should later reveal:
- orientation;
- operable/fixed state;
- shading state;
- glazing assumption;
- solar-exposure indicator;
- rationale.

### Shading
Treat shading as architecture:
- roof overhangs;
- vertical fins;
- horizontal louvers;
- vegetation;
- verandas;
- screened outdoor spaces.

### Interior finishes
Research:
- durable, repairable finishes;
- low-emission/low-VOC paints;
- low-emission composite woods where applicable;
- moisture-appropriate surfaces;
- locally available materials where technically sensible.

EPA Indoor AirPlus is useful as a best-practice reference for low-emission materials, but actual products must be validated locally.

### Landscape
Landscape should perform:
- shading;
- glare reduction;
- stormwater management;
- privacy;
- outdoor comfort.

Do not place trees where they unrealistically eliminate useful PV exposure.

## Decision-record format

Every major material choice gets a record:

```text
Decision ID: MAT-ROOF-001
Component: Main roof
Status: PROVISIONAL

Problem:
Reduce solar heat gain while maintaining waterproofing and PV compatibility.

Evidence:
- Ghana Building Code
- DOE cool-roof guidance
- EnergyPlus comparison

Alternatives:
- darker membrane
- light painted metal system
- tiled roof
- green roof

Why current baseline:
[research-backed reason]

Unknowns:
- Ghana supplier
- installed cost
- reflectance/emittance
- warranty
- drainage
- PV mounting interface

Next validation:
Run EnergyPlus roof variants.
```

## First envelope experiments

Run one variable at a time:

- **ENV-01:** roof reflectance;
- **ENV-02:** roof insulation;
- **ENV-03:** west glazing area;
- **ENV-04:** shading geometry;
- **ENV-05:** natural-ventilation schedule;
- **ENV-06:** glazing SHGC.

## Blender semantic model

Refactor collections:

```text
H1_ROOT
├── STRUCTURE
├── ROOF
│   ├── Roof_Surface
│   ├── PV_Array
│   └── Drainage
├── FACADE
│   ├── Walls
│   ├── Glazing
│   ├── Shading
│   └── Doors
├── ENERGY
├── WATER
├── INTERIOR
├── IOT
└── LANDSCAPE
```

Use research-linked names such as `MAT_ROOF_HR_001`, not `Material.013`.

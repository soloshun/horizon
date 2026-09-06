# H1 Initial Reference Backbone

**Access date:** 2026-09-06

This is a starting bibliography, not an exhaustive review. Each H1 design decision should state what a source supports and what it does **not** prove.

---

## Ghana building and energy

### Ghana Building Code 2018 — GS 1207:2018
Ghana Standards Authority:
https://gsa.gov.gh/ghana-building-code-2018/

Read-only contents:
https://codes.iccsafe.org/content/GHBCBC2018

**Use in H1:** local baseline for building design, interior environment, energy efficiency, roofs, structure, materials, electrical, mechanical, plumbing and green-building requirements.

**Does not prove:** H1 code compliance. That requires project-specific professional review.

---

### Ghana Energy Commission — Net Metering Code 2023
https://energycom.gov.gh/newsite/index.php/media-center/latest-news/224-energy-commission-net-metering-code-2023

Renewable regulations/downloads:
https://energycom.gov.gh/newsite/index.php/regulation/renewable-energy-if

**Use:** Ghana context for grid-connected renewable customer generation/net metering and future equipment research.

**Does not prove:** approval of any H1 design or interconnection.

---

### Ghana Renewable Energy Master Plan
UNDP:
https://www.undp.org/ghana/publications/ghana-renewable-energy-master-plan

**Use:** broad renewable-energy policy/context.

---

## Ghana green-building precedent

### IFC — Rehoboth green homes in Ghana
https://www.ifc.org/en/pressroom/2021/ifc-rehoboth-properties-celebrate-opening-of-landmark-green-homes-in-ghana

**Use:** Ghana precedent demonstrating resource-efficient residential design approaches such as natural ventilation, efficient lighting and water-efficient fixtures under EDGE.

**Does not prove:** H1 should copy the same materials or architecture.

---

## Building physics

### U.S. Department of Energy — EnergyPlus
https://www.energy.gov/cmei/buildings/articles/energyplus
https://energyplus.net/

**Use:** research-grade whole-building energy/thermal simulation.

---

### OpenStudio
https://openstudio.net/

**Use:** optional EnergyPlus workflow/SDK.

---

### DOE — Passive Solar Home Design
https://www.energy.gov/sites/prod/files/guide_to_passive_solar_home_design.pdf

**Use:** orientation, shading, natural cooling, thermal mass and daylight research concepts.

**Limitation:** climate-specific adaptation is required; H1 is not a U.S.-climate copy.

---

### DOE — Cool Roofs
https://www.energy.gov/cmei/femp/purchasing-energy-efficient-cool-roof-products

**Use:** rationale for studying solar reflectance/emittance and roof heat gain in hot climates.

---

### DOE — Window technologies
https://www.energy.gov/energysaver/window-types-and-technologies

**Use:** low-e, spectrally selective glazing and SHGC research.

---

### DOE — Air sealing
https://bsesc.energy.gov/energy-basics/tight-air-sealed-homes

**Use:** envelope continuity, comfort and energy efficiency; must be coordinated with ventilation and moisture design.

---

## Thermal comfort / indoor air

### ASHRAE Standard 55 overview
https://www.ashrae.org/technical-resources/bookstore/standard-55-thermal-environmental-conditions-for-human-occupancy

**Use:** thermal-comfort framework and adaptive/standard methods.

---

### ASHRAE Standards 62.1 / 62.2
https://www.ashrae.org/technical-resources/bookstore/standards-62-1-62-2

**Use:** residential ventilation and acceptable indoor-air-quality reference.

---

### EPA Indoor AirPlus
https://www.epa.gov/indoorairplus/about-indoorairplus
https://www.epa.gov/indoorairplus/indoor-airplus-program-documents

**Use:** moisture, ventilation and low-emission-material research.

---

## Weather and solar

### NASA POWER — Hourly API
https://power.larc.nasa.gov/docs/services/api/temporal/hourly/

### NASA POWER — API overview
https://power.larc.nasa.gov/docs/services/api/

**Use:** hourly solar and meteorological data.

---

### European Commission JRC — PVGIS
https://joint-research-centre.ec.europa.eu/pvgis-online-tool_en

### PVGIS data/calculation methods
https://joint-research-centre.ec.europa.eu/photovoltaic-geographical-information-system-pvgis/general-information/data-sources-calculation-methods_en

**Use:** solar radiation, PV performance and typical meteorological-year data.

---

### NREL PVWatts
https://pvwatts.nrel.gov/

**Use:** PV performance estimation/cross-check.

---

### DOE — Solar and Resilience Basics
https://www.energy.gov/cmei/systems/solar-and-resilience-basics

**Use:** research basis for the important distinction that conventional grid-tied solar alone does not automatically provide outage power; appropriate inverter/storage configuration is needed.

---

## Water

### WHO — Guidelines for Drinking-Water Quality, 2026
https://www.who.int/publications/i/item/9789240121225

**Use:** potable-water risk-management framework.

---

### WHO — Rainwater collection and storage sanitary inspection package, 2026
https://www.who.int/publications/m/item/sanitary-inspection-package-%28drinking-water%29--rainwater-collection-and-storage

**Use:** rainwater collection/storage risk, inspection and maintenance research.

---

### CDC — Collecting Rainwater and Your Health
https://www.cdc.gov/drinking-water/about/collecting-rainwater-and-your-health-an-overview.html

**Use:** conservative public-health guidance; untreated collected rainwater should not be presented as automatically potable.

---

### EPA WaterSense — Leak detection and flow monitoring
https://www.epa.gov/watersense/leak-detection-and-flow-monitoring-devices

**Use:** basis for point moisture sensing and flow anomaly monitoring.

---

## IoT and security

### NISTIR 8259 Rev. 1
https://csrc.nist.gov/pubs/ir/8259/r1/final

**Use:** foundational cybersecurity activities for IoT products.

### NISTIR 8259A
https://csrc.nist.gov/pubs/ir/8259/a/final

**Use:** device cybersecurity capability baseline.

### NISTIR 8425
https://csrc.nist.gov/pubs/ir/8425/final

**Use:** consumer IoT cybersecurity profile.

---

### Thread Group — Smart Home
https://threadgroup.org/BUILT-FOR-IOT/Smart-Home

**Use:** research candidate for low-power IP-based mesh connectivity in home/building IoT.

---

# Reference discipline

For every major H1 decision:

```text
Source:
What it supports:
What it does not prove:
H1 assumption:
Simulation/validation:
Status:
```

Do not copy full paid standards or proprietary documents into the repository. Cite and summarize instead.

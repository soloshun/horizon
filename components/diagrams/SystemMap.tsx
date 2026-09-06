"use client";
import {
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from "react";
import { HorizonMark } from "../brand/HorizonLogo";
export const systems = [
  {
    name: "Intelligence",
    text: "Local intelligence that helps a home understand its state, explain what matters and respond with care.",
    detail: "Forecasting · Automation · Digital twins",
  },
  {
    name: "Energy",
    text: "Solar, storage and household demand considered together, with reliable power as the first priority.",
    detail: "Solar · Batteries · Resilient power",
  },
  {
    name: "Water",
    text: "Make water use visible, detect unusual flow and understand the reserves a household can depend on.",
    detail: "Monitoring · Storage · Leak detection",
  },
  {
    name: "Connectivity",
    text: "Connect people and systems, while keeping essential home functions available when the internet is not.",
    detail: "Local networks · Edge devices · Offline control",
  },
  {
    name: "Buildings",
    text: "Comfort starts with the building: thoughtful orientation, shade, natural light and room to breathe.",
    detail: "Passive cooling · Daylight · Adaptable spaces",
  },
  {
    name: "Mobility",
    text: "Design everyday movement around people, with walkable places and room for cleaner transport.",
    detail: "Walkability · EV readiness · Shared access",
  },
  {
    name: "Environment",
    text: "Understand indoor conditions and resource use, then make small, meaningful improvements to daily comfort.",
    detail: "Air quality · Materials · Climate awareness",
  },
  {
    name: "Community",
    text: "Shared spaces and infrastructure should support the relationships that make a place worth living in.",
    detail: "Public space · Shared resources · Human connection",
  },
];
export function SystemMap() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  function key(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    let target = i;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") target = (i + 1) % 8;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") target = (i + 7) % 8;
    else if (e.key === "Home") target = 0;
    else if (e.key === "End") target = 7;
    else return;
    e.preventDefault();
    setActive(target);
    refs.current[target]?.focus();
  }
  return (
    <div className="systems-layout">
      <div className="systems-copy">
        <h2>
          Many systems.
          <br />
          <em>One living whole.</em>
        </h2>
        <p>
          A home is more than a building. The things that sustain it should work
          together.
        </p>
        <div
          className="system-description"
          id={`system-panel-${active}`}
          role="tabpanel"
          aria-labelledby={`system-tab-${active}`}
          tabIndex={0}
        >
          <span className="eyebrow">
            0{active + 1} / {systems[active].name}
          </span>
          <p>{systems[active].text}</p>
          <small>{systems[active].detail}</small>
        </div>
      </div>
      <div className="system-diagram">
        <svg className="system-lines" viewBox="0 0 600 560" aria-hidden="true">
          <circle cx="300" cy="280" r="180" />
          <circle cx="300" cy="280" r="112" />
          {systems.map((_, i) => {
            const angle = ((i * 45 - 90) * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={300 + 85 * Math.cos(angle)}
                y1={280 + 85 * Math.sin(angle)}
                x2={300 + 210 * Math.cos(angle)}
                y2={280 + 210 * Math.sin(angle)}
                className={active === i ? "active" : ""}
              />
            );
          })}
          <path d="M20 280h560M300 20v520" className="diagram-axis" />
        </svg>
        <div className="system-center">
          <HorizonMark />
          <span>HORIZON</span>
          <small>
            Human experience
            <br />
            at the centre
          </small>
        </div>
        <div
          role="tablist"
          aria-label="Explore the integrated home systems"
          className="system-nodes"
        >
          {systems.map((s, i) => {
            const angle = ((i * 45 - 90) * Math.PI) / 180;
            return (
              <button
                ref={(el) => {
                  refs.current[i] = el;
                }}
                key={s.name}
                role="tab"
                aria-selected={active === i}
                aria-controls={active === i ? `system-panel-${i}` : undefined}
                id={`system-tab-${i}`}
                tabIndex={active === i ? 0 : -1}
                onKeyDown={(e) => key(e, i)}
                onClick={() => setActive(i)}
                style={
                  {
                    "--node-x": `${50 + 35 * Math.cos(angle)}%`,
                    "--node-y": `${50 + 39 * Math.sin(angle)}%`,
                  } as CSSProperties
                }
              >
                <i />
                {s.name}
              </button>
            );
          })}
        </div>
        <span className="diagram-caption">
          An integrated view · Select a system
        </span>
      </div>
    </div>
  );
}

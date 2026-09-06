"use client";
import { useState } from "react";
import { divisions } from "@/content/divisions";
import { DivisionMark } from "./brand/HorizonLogo";
import { Icon } from "./Icons";
export function Ecosystem() {
  const [active, setActive] = useState<string | null>("living");
  return (
    <div className="ecosystem-list">
      {divisions.map((d, i) => (
        <article
          className={`ecosystem-row ${active === d.id ? "is-open" : ""}`}
          key={d.id}
        >
          <button
            className="ecosystem-trigger"
            aria-expanded={active === d.id}
            aria-controls={`division-${d.id}`}
            onClick={() => setActive(active === d.id ? null : d.id)}
          >
            <span className="row-number">0{i + 1}</span>
            <DivisionMark name={d.id} />
            <span className="division-name">
              <span>HORIZON</span>
              {d.name}
            </span>
            <span className="division-scale">{d.scale}</span>
            <span className="round-arrow">
              <Icon name={active === d.id ? "down" : "arrowUp"} />
            </span>
          </button>
          <div
            id={`division-${d.id}`}
            className="ecosystem-detail"
            hidden={active !== d.id}
          >
            <div>
              <h3>{d.title}</h3>
              <p>{d.description}</p>
            </div>
            <span className="status-tag">{d.status}</span>
          </div>
        </article>
      ))}
    </div>
  );
}

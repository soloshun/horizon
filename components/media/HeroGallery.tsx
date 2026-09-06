"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const views = [
  {
    src: "/images/horizon-evening.webp",
    title: "The neighbourhood at dusk",
    alt: "Elevated dusk view across a hillside neighbourhood of solar-roofed courtyard homes, with residents dining and walking along lit garden paths, a bay and city skyline beyond.",
  },
  {
    src: "/images/horizon-home.webp",
    title: "Your space",
    alt: "A solar-roofed contemporary home at sunset, timber screens and banana plants along the driveway, with an EV charging and the coastal city skyline in the distance.",
  },
  {
    src: "/images/horizon-family.webp",
    title: "Family life",
    alt: "A family unwinding on a poolside terrace at sunset: a woman lounging by the infinity pool, a man at the fire pit, and children playing near the open-plan living room, city skyline beyond.",
  },
  {
    src: "/images/horizon-courtyard.webp",
    title: "Life in the shade",
    alt: "A couple relaxing on a sofa in a timber-ceilinged living room that opens onto a covered veranda, infinity pool and sunset skyline view.",
  },
];

export function HeroGallery() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const query = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (paused || reduced) return;
    let visible = true;
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    if (root.current) observer.observe(root.current);
    const timer = window.setInterval(() => {
      if (visible && !document.hidden)
        setActive((current) => (current + 1) % views.length);
    }, 18000);
    return () => {
      clearInterval(timer);
      observer.disconnect();
    };
  }, [paused, reduced, active]);

  return (
    <div
      ref={root}
      className="hero-gallery"
      role="region"
      aria-label="Horizon architectural perspectives"
    >
      {views.map((view, index) => (
        <div
          key={view.src}
          className={`hero-frame${active === index ? " is-active" : ""}`}
          aria-hidden={active !== index}
        >
          <Image
            src={view.src}
            alt={view.alt}
            fill
            preload={index === 0}
            loading={index === 0 ? undefined : "eager"}
            sizes="100vw"
            quality={85}
          />
        </div>
      ))}
      <div className="hero-gallery-controls">
        <span className="hero-view-title">{views[active].title}</span>
        <div className="hero-view-buttons">
          {views.map((view, index) => (
            <button
              key={view.src}
              type="button"
              aria-label={`Show view ${index + 1}: ${view.title}`}
              aria-pressed={active === index}
              onClick={() => setActive(index)}
            >
              <span>0{index + 1}</span>
            </button>
          ))}
          <button
            type="button"
            className="hero-gallery-pause"
            aria-label={
              paused || reduced
                ? "Play architectural slideshow"
                : "Pause architectural slideshow"
            }
            aria-pressed={paused || reduced}
            disabled={reduced}
            onClick={() => setPaused(!paused)}
          >
            {paused || reduced ? "▷" : "Ⅱ"}
          </button>
        </div>
      </div>
    </div>
  );
}

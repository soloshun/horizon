"use client";

import dynamic from "next/dynamic";
import "@horizon/h1/styles.css";

const Experience = dynamic(
  () => import("@horizon/h1").then((module) => module.H1Experience),
  {
    ssr: false,
    loading: () => (
      <div className="h1-route-loading" role="status">
        Opening Horizon H1…
      </div>
    ),
  },
);

export function H1Client() {
  return <Experience assetBaseUrl="/h1" backHref="/research" />;
}

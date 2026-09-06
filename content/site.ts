export const site = {
  name: "Horizon",
  title: "Horizon — Intelligent spaces. Brighter lives.",
  description:
    "An early-stage future-living initiative exploring AI, energy, connected infrastructure and human-centred design for homes, communities and cities — starting in Africa.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "solomoneshun373@gmail.com",
};

export const navigation = [
  { label: "Vision", href: "/vision" },
  { label: "Ecosystem", href: "/#ecosystem" },
  { label: "Research", href: "/research" },
  { label: "Africa + Beyond", href: "/#africa" },
  { label: "About", href: "/about" },
];

export const principles = [
  {
    title: "Resilience before novelty.",
    text: "Energy, water and essential controls should remain dependable when the grid or connection is imperfect.",
  },
  {
    title: "Work with the climate.",
    text: "Shade, airflow, orientation and local materials come before adding more mechanical systems.",
  },
  {
    title: "Keep people in control.",
    text: "Intelligence should be understandable, privacy-conscious and easy to override.",
  },
  {
    title: "Design for everyday life.",
    text: "Comfort, maintenance, affordability and shared public space belong in the same conversation.",
  },
];

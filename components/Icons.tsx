import type { SVGProps } from "react";
type IconName =
  | "arrow"
  | "arrowUp"
  | "down"
  | "sun"
  | "moon"
  | "menu"
  | "close"
  | "play"
  | "pause"
  | "volume"
  | "muted"
  | "expand"
  | "plus"
  | "check";
const paths: Record<IconName, React.ReactNode> = {
  arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
  arrowUp: <path d="M6 18 18 6M6 6h12v12" />,
  down: <path d="M12 4v16m-6-6 6 6 6-6" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
    </>
  ),
  moon: <path d="M20 14a8 8 0 0 1-10-10A8.2 8.2 0 1 0 20 14Z" />,
  menu: <path d="M4 8h16M4 16h16" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  play: <path d="m9 5 11 7-11 7Z" />,
  pause: <path d="M8 5v14M16 5v14" />,
  volume: (
    <>
      <path d="m12 4-6 5H3v6h3l6 5Z" />
      <path d="M16 8c3 2 3 6 0 8m3-11c5 4 5 10 0 14" />
    </>
  ),
  muted: (
    <>
      <path d="m12 4-6 5H3v6h3l6 5Z" />
      <path d="m17 9 5 6m0-6-5 6" />
    </>
  ),
  expand: <path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" />,
  plus: <path d="M12 5v14M5 12h14" />,
  check: <path d="m5 12 4 4L19 6" />,
};
export function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

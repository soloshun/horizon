import Link from "next/link";
export function HorizonMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 58"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path d="M23 42C20 0 80 0 77 42C72 7 28 7 23 42Z" fill="currentColor" />
      <path d="M1 56Q50 26 99 56Q50 37 1 56Z" fill="currentColor" />
    </svg>
  );
}
export function HorizonLogo({ large = false }: { large?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand ${large ? "brand-large" : ""}`}
      aria-label="Horizon home"
    >
      <HorizonMark />
      <span>HORIZON</span>
    </Link>
  );
}
export function DivisionMark({ name }: { name: string }) {
  return (
    <svg
      viewBox="0 0 100 76"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
      className="division-mark"
    >
      <path d="M5 69Q50 47 95 69" />
      {name === "living" && (
        <>
          <path d="M27 54V32L50 11l23 21v22M44 52V36l13 11v5" />
          <path d="M20 56V40l7-7M50 11v10l17 15v17" />
        </>
      )}
      {name === "systems" && (
        <>
          <path d="M50 52V12M32 53V25M68 53V25M18 58V41M82 58V41" />
          {[
            [50, 8],
            [32, 21],
            [68, 21],
            [18, 37],
            [82, 37],
          ].map(([x, y]) => (
            <circle key={x} cx={x} cy={y} r="4" />
          ))}
        </>
      )}
      {name === "labs" && (
        <>
          <ellipse
            cx="50"
            cy="33"
            rx="35"
            ry="13"
            transform="rotate(20 50 33)"
          />
          <ellipse
            cx="50"
            cy="33"
            rx="14"
            ry="31"
            transform="rotate(20 50 33)"
          />
          <circle cx="50" cy="33" r="6" fill="currentColor" />
          <circle cx="64" cy="8" r="4" fill="currentColor" />
        </>
      )}
      {name === "communities" && (
        <>
          <circle cx="50" cy="14" r="6" />
          <circle cx="29" cy="28" r="5" />
          <circle cx="71" cy="28" r="5" />
          <path d="M40 53V27l20 13v13M21 58V40l15-9v23M64 54V32l15 9v17" />
        </>
      )}
      {name === "cities" && (
        <>
          <path d="M24 57V35l15-15v34M44 52V7l16 15v32M66 54V29l12 12v17" />
        </>
      )}
    </svg>
  );
}

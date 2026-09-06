import Image from "next/image";
export function FounderPortrait({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={compact ? "portrait-crop portrait-compact" : "portrait-crop"}
    >
      <Image
        src="/images/solo1.webp"
        alt="Solomon Eshun sharing his ideas during a presentation."
        fill
        sizes={compact ? "300px" : "(max-width: 760px) 200vw, 94vw"}
      />
    </div>
  );
}

import Link from "next/link";
import { Icon } from "./Icons";
export function SectionLabel({
  number,
  children,
}: {
  number?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-label">
      {number && <span>{number}</span>}
      <span>{children}</span>
    </div>
  );
}
export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="text-link" href={href}>
      {children}
      <Icon name="arrowUp" />
    </Link>
  );
}
export function CollaborateBand() {
  return (
    <section className="collaborate-band section-space">
      <SectionLabel number="07">Building takes many disciplines</SectionLabel>
      <div>
        <h2>
          The future will be
          <br />
          <em>multidisciplinary.</em>
        </h2>
        <div className="collaborate-copy">
          <p>
            Architecture. Engineering. AI. Energy. Urban life.
            <br />
            Better questions start when different worlds meet.
          </p>
          <TextLink href="/collaborate">Start a conversation</TextLink>
        </div>
      </div>
    </section>
  );
}

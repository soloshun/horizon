import { TextLink } from "@/components/Editorial";
export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <span className="eyebrow">404 / Beyond this horizon</span>
      <h1>
        A different path
        <br />
        <em>back to the beginning.</em>
      </h1>
      <p>
        This page could not be found. The vision and the first study are waiting
        back home.
      </p>
      <TextLink href="/">Return to Horizon</TextLink>
    </main>
  );
}

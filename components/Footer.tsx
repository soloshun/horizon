import Link from "next/link";
import { HorizonLogo } from "./brand/HorizonLogo";
import { Icon } from "./Icons";
import { navigation, site } from "@/content/site";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <HorizonLogo large />
        <p>
          Intelligent spaces.
          <br />
          Brighter lives.
        </p>
        <Link className="text-link" href="/collaborate">
          Start a conversation <Icon name="arrowUp" />
        </Link>
      </div>
      <div className="footer-links">
        <nav aria-label="Footer navigation">
          {navigation.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/research/h1">H1 interactive study</Link>
        </nav>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Horizon</span>
        <span>
          <i className="status-dot" /> Research & concept initiative
        </span>
        <span>Africa first · A global horizon</span>
      </div>
      <p className="concept-note">
        Architectural imagery represents concepts and design explorations.
        Horizon has no completed property developments. The ecosystem describes
        a long-term capability roadmap.
      </p>
    </footer>
  );
}

"use client";
import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { HorizonLogo } from "./brand/HorizonLogo";
import { Icon } from "./Icons";
import { navigation } from "@/content/site";

function subscribeTheme(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}
const themeSnapshot = () => document.documentElement.dataset.theme === "dark";
const serverTheme = () => false;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const dark = useSyncExternalStore(subscribeTheme, themeSnapshot, serverTheme);
  const dialog = useRef<HTMLDialogElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.current?.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const close = () => {
    setOpen(false);
    menuButton.current?.focus();
  };
  const toggleTheme = () => {
    const next = !dark;
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try {
      localStorage.setItem("horizon-theme", next ? "dark" : "light");
    } catch {
      /* Preferences are optional. */
    }
  };
  return (
    <>
      <header
        className={`site-header ${pathname === "/" && !scrolled ? "header-over-hero" : "header-solid"}`}
      >
        <HorizonLogo />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="icon-button theme-toggle"
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          >
            <Icon name={dark ? "sun" : "moon"} />
          </button>
          <Link className="header-contact" href="/collaborate">
            Let’s connect <Icon name="arrowUp" />
          </Link>
          <button
            ref={menuButton}
            className="icon-button menu-button"
            aria-label="Open navigation"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Icon name="menu" />
          </button>
        </div>
      </header>
      <dialog
        ref={dialog}
        className="mobile-menu"
        onCancel={close}
        aria-label="Navigation"
      >
        <div className="mobile-menu-top">
          <HorizonLogo />
          <button
            className="icon-button"
            onClick={close}
            aria-label="Close navigation"
          >
            <Icon name="close" />
          </button>
        </div>
        <nav>
          {[
            ...navigation,
            { label: "Let’s connect", href: "/collaborate" },
          ].map((item, i) => (
            <Link key={item.label} href={item.href} onClick={close}>
              <span>0{i + 1}</span>
              {item.label}
              <Icon name="arrowUp" />
            </Link>
          ))}
        </nav>
        <p className="eyebrow">Africa first. A global horizon.</p>
      </dialog>
    </>
  );
}

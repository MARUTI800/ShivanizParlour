import React, { useEffect, useState } from "react";
import { scrollTo } from "../lib/scroll";

const links = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Story", href: "#story" },
  { label: "Contacts", href: "#contact" },
];

export default function Navbar({ onBook, dark = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const baseColor = dark && !scrolled ? "text-cream-light" : "text-ink";
  const bg = scrolled
    ? "bg-base border-b border-ink/10"
    : "bg-transparent";

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${bg}`}
    >
      <div className="px-6 md:px-12 lg:px-16 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#top");
          }}
          data-testid="nav-logo"
          className={`display-head text-2xl md:text-3xl tracking-tighter uppercase ${baseColor}`}
        >
          SHIVANI<span className="font-serif-italic font-normal lowercase">{"\u2019"}</span>Z
        </a>

        <nav className={`hidden md:flex items-center gap-8 ${baseColor}`}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(l.href);
              }}
              data-testid={`nav-${l.label.toLowerCase().replace(/\s/g, "-")}`}
              className="text-[10px] uppercase tracking-[0.25em] font-medium hover:opacity-60 transition-opacity"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            data-testid="nav-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            className={`md:hidden inline-flex items-center px-4 py-2 rounded-full text-xs uppercase tracking-wider border transition-colors ${
              dark && !scrolled
                ? "border-cream-light/40 text-cream-light"
                : "border-ink/30 text-ink bg-base"
            }`}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-base border-t border-ink/10 px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`mobile-nav-${l.label.toLowerCase().replace(/\s/g, "-")}`}
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                scrollTo(l.href);
              }}
              className="text-[10px] uppercase tracking-[0.25em] font-medium hover:opacity-60 transition-opacity"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

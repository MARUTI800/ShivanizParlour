import React, { useEffect, useState } from "react";
import { scrollTo } from "../lib/scroll";

const links = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Training", href: "#training" },
  { label: "Reviews", href: "#reviews" },
  { label: "Story", href: "#story" },
  { label: "Contacts", href: "#contact" },
];

export default function Navbar({ onBook, onEnroll, dark = false }) {
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
          <div className="hidden lg:flex items-center gap-4 mr-4">
            <button
              onClick={onBook}
              className={`text-[10px] uppercase tracking-[0.2em] font-medium border px-5 py-2.5 rounded-full transition-all duration-300 ${
                dark && !scrolled
                  ? "border-cream-light/40 text-cream-light hover:bg-cream-light hover:text-ink"
                  : "border-ink/30 text-ink bg-base hover:bg-ink hover:text-cream"
              }`}
            >
              Book Service
            </button>
            <button
              onClick={onEnroll}
              className={`text-[10px] uppercase tracking-[0.2em] font-medium border px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm ${
                dark && !scrolled
                  ? "border-cream-light text-ink bg-cream-light hover:bg-transparent hover:text-cream-light hover:border-cream-light hover:shadow-none"
                  : "border-ink text-cream bg-ink hover:bg-transparent hover:text-ink hover:border-ink hover:shadow-none"
              }`}
            >
              Enroll Training
            </button>
          </div>
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

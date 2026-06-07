import React, { useState } from "react";
import LegalModal from "./LegalModal";

export default function Footer({ onBook }) {
  const [legalType, setLegalType] = useState(null);

  return (
    <footer
      id="footer"
      data-testid="site-footer"
      className="bg-base text-ink border-t border-ink/10"
    >
      <div className="px-6 md:px-12 lg:px-16 pt-12 md:pt-16 pb-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-12 gap-10 md:gap-12 pb-16 md:pb-24">
            <div className="md:col-span-5">
              <div className="text-[10px] tracking-[0.25em] uppercase text-ink-soft mb-4 font-medium">
                Visit Us
              </div>
              <p className="display-head-sm text-ink/90 text-3xl md:text-4xl leading-[1.1]">
                Raikot, Talwandi Gate
                <br />
                Punjab, India
              </p>
              <div className="mt-6 space-y-1.5 text-ink-soft text-sm font-body">
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="text-[10px] tracking-[0.25em] uppercase text-ink-soft mb-4 font-medium">
                Contact
              </div>
              <a
                href="mailto:Shivanipassi2408@gmail.com"
                data-testid="footer-email"
                className="block text-ink/90 display-head-sm text-xl md:text-2xl hover:opacity-70 transition-opacity break-all"
              >

              </a>
              <a
                href="tel:+917710235502"
                data-testid="footer-phone"
                className="block mt-2 text-ink-soft text-sm font-body"
              >
                +91 77102 35502
              </a>
            </div>

            <div className="md:col-span-2">
              <div className="text-[10px] tracking-[0.25em] uppercase text-ink-soft mb-4 font-medium">
                Follow
              </div>
              <ul className="space-y-2 text-ink text-sm">
                <li><a href="https://instagram.com/shivani_beauty_parlour" target="_blank" rel="noreferrer" className="hover:opacity-60" data-testid="social-instagram">Instagram</a></li>
              </ul>
            </div>

            <div className="md:col-span-2 flex md:justify-end items-start">
              <button
                data-testid="footer-book-button"
                onClick={onBook}
                className="btn-animated inline-flex items-center gap-3 px-6 py-3 rounded-full border border-ink/20 text-ink text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-ink hover:text-white transition-colors duration-500"
              >
                Book Now <span aria-hidden>{"\u2192"}</span>
              </button>
            </div>
          </div>

          <div className="relative mt-8 flex flex-col items-center text-center">
            <h2
              aria-hidden
              className="display-head text-ink text-[clamp(60px,10vw,140px)] leading-[0.85] tracking-tighter uppercase"
            >
              SHIVANI<span className="font-serif-italic lowercase">{"\u2019"}</span>Z
            </h2>
            <span aria-hidden className="text-[12px] md:text-[14px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-ink/70 mt-4 md:mt-6 font-medium">
              Parlour
            </span>
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-ink-soft text-xs tracking-wider uppercase border-t border-ink/10 pt-6">
            <span>© {new Date().getFullYear()} Shivani&apos;z Beauty Parlour. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" onClick={(e) => { e.preventDefault(); setLegalType("privacy"); }} className="hover:text-ink" data-testid="footer-privacy">Privacy</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setLegalType("terms"); }} className="hover:text-ink" data-testid="footer-terms">Terms</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setLegalType("cookies"); }} className="hover:text-ink" data-testid="footer-cookies">Cookies</a>
            </div>
          </div>
        </div>
      </div>

      <LegalModal type={legalType} onClose={() => setLegalType(null)} />
    </footer>
  );
}

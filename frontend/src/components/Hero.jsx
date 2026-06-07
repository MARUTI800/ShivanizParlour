import React from "react";
import { motion } from "framer-motion";
import { scrollTo } from "../lib/scroll";

const HERO_VID = "/media/IMG_7580.MP4";

export default function Hero({ onBook }) {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative w-full h-screen overflow-hidden"
    >
      <div className="absolute inset-0 bg-black">
        <motion.video
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
          src={HERO_VID}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
          style={{ filter: "saturate(0.85) contrast(1.02)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C2218]/50 via-[#2C2218]/10 to-[#2C2218]/70" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between px-6 md:px-12 lg:px-16 pt-24 pb-12 md:pb-16">
        {/* Top tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden md:flex items-center justify-between text-cream/70 text-[10px] tracking-[0.3em] uppercase font-medium absolute top-24 left-12 right-12 lg:left-16 lg:right-16"
        >
          <span>Est. 2014 {"\u00B7"} Premium Beauty Studio</span>
          <span>Raikot, Punjab</span>
        </motion.div>

        {/* Center content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
          className="flex flex-col items-center text-center h-full justify-center"
        >
          <p className="text-cream/60 font-body text-xs tracking-[0.2em] uppercase mb-6">
            Bridal {"\u00B7"} Hair {"\u00B7"} Skin {"\u00B7"} Wellness
          </p>
          <h1
            data-testid="hero-headline"
            className="display-head text-cream flex flex-col items-center"
          >
            <span className="text-[clamp(80px,12vw,160px)] leading-[0.85] tracking-tighter">
              SHIVANI<span className="font-serif-italic">{"\u2019"}</span>Z
            </span>
            <span className="text-[12px] md:text-[16px] uppercase tracking-[0.4em] md:tracking-[0.8em] text-cream/70 mt-6 md:mt-8 font-medium">
              Parlour
            </span>
          </h1>

          <div className="mt-12 flex flex-col md:flex-row items-center gap-6">
            <button
              data-testid="hero-book-button"
              onClick={onBook}
              className="btn-animated inline-flex items-center gap-3 bg-cream text-ink px-8 py-4 rounded-full font-body text-xs tracking-[0.2em] uppercase font-bold hover:bg-ink hover:text-cream transition-colors duration-500"
            >
              Book an Appointment
            </button>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#services");
              }}
              className="hidden md:inline-flex text-cream/50 text-xs tracking-[0.2em] uppercase border-b border-cream/20 pb-1 hover:text-cream/80 hover:border-cream/50 transition-colors"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

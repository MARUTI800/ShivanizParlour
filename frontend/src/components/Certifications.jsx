import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award } from "lucide-react";

const certImages = [
  {
    src: "/media/certi_1.jpeg",
    alt: "Graduate receiving Shivani'z Activities Certificate",
  },
  {
    src: "/media/certi_2.jpeg",
    alt: "Batch of certified graduates with Shivani Passi",
  },
  {
    src: "/media/certi_3.jpeg",
    alt: "Full batch certification ceremony at Shivani'z Academy",
  },
];

export default function Certifications() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % certImages.length), []);
  const prev = useCallback(() =>
    setCurrent((c) => (c - 1 + certImages.length) % certImages.length), []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      id="certifications"
      data-testid="certifications-section"
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--dark-section)" }}
    >
      {/* Grain overlay */}
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cream/15 to-transparent" />

      <div className="relative px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto">
          {/* ── Section Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-cream/20" />
              <span className="text-cream/50 text-[10px] tracking-[0.35em] uppercase font-medium">
                Certified Excellence
              </span>
              <span className="w-8 h-px bg-cream/20" />
            </div>
            <h2 className="display-head text-cream text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Our Certified
              <br />
              <span className="font-serif-italic">Graduates</span>
            </h2>
            <p className="font-body text-cream/45 text-sm md:text-base leading-relaxed max-w-xl mx-auto mt-6">
              Every student who completes our training programs receives an
              official Shivani&apos;z Salon and Academy certificate — a
              recognition of their skill, dedication, and readiness to shine in
              the beauty industry.
            </p>
          </motion.div>

          {/* ── Certificate Gallery ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
            onTouchStart={(e) => {
              e.currentTarget._touchX = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              const dx = e.changedTouches[0].clientX - (e.currentTarget._touchX || 0);
              if (dx > 50) prev();
              else if (dx < -50) next();
            }}
          >
            {/* Main Image Showcase */}
            <div className="relative overflow-hidden rounded-sm">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={certImages[current].src}
                  alt={certImages[current].alt}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
                  className="w-full max-h-[280px] md:max-h-[360px] lg:max-h-[420px] object-contain mx-auto select-none"
                  draggable={false}
                />
              </AnimatePresence>
            </div>

            {/* ── Unique Navigation Bar ── */}
            <div className="mt-10 flex items-center justify-between gap-6">
              {/* Prev text link */}
              <button
                onClick={prev}
                aria-label="Previous photo"
                className="group flex items-center gap-2 text-cream/40 hover:text-cream transition-colors duration-300"
              >
                <span className="inline-block w-5 h-px bg-current transition-all duration-300 group-hover:w-8" />
                <span className="text-[10px] uppercase tracking-[0.25em] font-medium">Prev</span>
              </button>

              {/* Segmented progress bar */}
              <div className="flex-1 flex items-center gap-1.5 max-w-[200px]">
                {certImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`View photo ${i + 1}`}
                    className="relative flex-1 h-[2px] bg-cream/10 overflow-hidden rounded-full"
                  >
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-accent rounded-full"
                      initial={false}
                      animate={{ width: i <= current ? "100%" : "0%" }}
                      transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                    />
                  </button>
                ))}
              </div>

              {/* Next text link */}
              <button
                onClick={next}
                aria-label="Next photo"
                className="group flex items-center gap-2 text-cream/40 hover:text-cream transition-colors duration-300"
              >
                <span className="text-[10px] uppercase tracking-[0.25em] font-medium">Next</span>
                <span className="inline-block w-5 h-px bg-current transition-all duration-300 group-hover:w-8" />
              </button>
            </div>
          </motion.div>

          {/* ── Bottom Highlight Bar ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-14 md:mt-20 pt-10 md:pt-14"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
              {[
                {
                  title: "Official Certification",
                  desc: "Recognized certificate from Shivani'z Salon and Academy upon course completion.",
                },
                {
                  title: "Industry-Ready Skills",
                  desc: "Hands-on training that prepares you for real salon work and freelance opportunities.",
                },
                {
                  title: "Lifetime Recognition",
                  desc: "Join our alumni network of certified beauty professionals across Punjab.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-cream/5 flex items-center justify-center shrink-0 mt-0.5">
                    <Award size={16} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-body text-cream text-sm font-semibold tracking-wide mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-cream/40 text-[13px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

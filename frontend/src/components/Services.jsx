import React, { useEffect, useState, useCallback } from "react";
import { fetchServices } from "../lib/api";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Services({ onBook }) {
  const [services, setServices] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    fetchServices().then(setServices).catch(() => setServices([]));
  }, []);

  // Lock body scroll & Lenis when popup is open
  useEffect(() => {
    if (activeCategory) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [activeCategory]);

  // Close on Escape key
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') setActiveCategory(null);
  }, []);

  useEffect(() => {
    if (activeCategory) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [activeCategory, handleKeyDown]);

  return (
    <section
      id="services"
      data-testid="services-section"
      className="py-20 md:py-28 px-6 md:px-12 lg:px-16"
      style={{ backgroundColor: "var(--dark-section)", color: "var(--dark-section-text)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 md:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block w-8 h-px bg-cream/30" />
              <span className="text-[10px] tracking-[0.35em] uppercase text-cream/50">
                Our Services
              </span>
            </div>
            <h2
              data-testid="services-headline"
              className="display-head text-cream text-4xl md:text-5xl leading-[1.1]"
            >
              What We<br className="hidden md:block" /> Offer
            </h2>
          </div>
          <p className="font-serif-italic text-cream/40 text-base md:text-lg mt-4 md:mt-0 max-w-sm">
            Tap a category to explore the full menu of treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((category, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={category.id}
              className="group relative border border-cream/10 cursor-pointer hover:border-cream/25 transition-all duration-500 overflow-hidden min-h-[380px] flex flex-col justify-end"
              onClick={() => setActiveCategory(category)}
            >
              {/* Background media */}
              {category.image && (
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img src={category.image} alt={category.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C2218]/90 via-[#2C2218]/30 to-[#2C2218]/40" />
                </div>
              )}
              {category.video && (
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <video src={category.video} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C2218]/90 via-[#2C2218]/30 to-[#2C2218]/40" />
                </div>
              )}

              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-cream/0 via-cream/15 to-cream/0 group-hover:via-cream/30 transition-all duration-500 z-10" />

              {/* Content */}
              <div className="relative z-10 p-8 md:p-10">
                <h3 className="display-head text-cream text-2xl md:text-3xl mb-2">
                  {category.name}
                </h3>
                <p className="text-cream/50 text-sm mb-8 font-light">
                  {category.items.length} treatments available
                </p>

                <div className="flex items-center gap-3 text-accent group-hover:text-cream transition-colors duration-300">
                  <span className="text-xs tracking-[0.2em] uppercase">Explore</span>
                  <span className="inline-block w-6 h-px bg-current transition-all duration-300 group-hover:w-10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─── Refined Service Detail Popup ─── */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex"
          >
            {/* Left: Media showcase with overlay (desktop) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="hidden md:flex flex-1 relative cursor-pointer overflow-hidden items-center justify-center"
              style={{ backgroundColor: '#1a140e' }}
              onClick={() => setActiveCategory(null)}
            >
              {activeCategory.image && (
                <motion.img
                  initial={{ scale: 1.08, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.7 }}
                  exit={{ scale: 1.05, opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                  src={activeCategory.image}
                  alt={activeCategory.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              {activeCategory.video && (
                <motion.video
                  initial={{ scale: 1.08, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.7 }}
                  exit={{ scale: 1.05, opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                  src={activeCategory.video}
                  autoPlay loop muted playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              {/* Gradient overlays for depth */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#2C2218]/30" />
              <div className="absolute inset-0 bg-black/20" />

              {/* Centered label on left */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="relative z-10 text-center px-12"
              >
                <span className="text-[10px] tracking-[0.4em] uppercase text-cream/60 block mb-4">
                  {activeCategory.items.length} Treatments
                </span>
                <h3 className="display-head text-cream text-5xl lg:text-7xl leading-[0.95]">
                  {activeCategory.name}
                </h3>
              </motion.div>
            </motion.div>

            {/* Mobile: backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden absolute inset-0 backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(44, 34, 24, 0.7)' }}
              onClick={() => setActiveCategory(null)}
            />

            {/* Right: Drawer panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 250 }}
              className="relative w-full md:w-[520px] lg:w-[580px] h-full flex flex-col overflow-hidden"
              style={{ backgroundColor: 'var(--cream-light, #FBF7F2)' }}
              data-lenis-prevent="true"
            >
              {/* Drawer inner scroll container */}
              <div className="flex-1 overflow-y-auto overscroll-contain">
                <div className="min-h-full flex flex-col px-8 md:px-12 py-10 md:py-14">

                  {/* Header */}
                  <div className="flex justify-between items-start mb-10">
                    <div>
                      <span className="text-[10px] tracking-[0.35em] uppercase text-ink-soft block mb-3">
                        {activeCategory.name}
                      </span>
                      <h3 className="display-head text-3xl md:text-4xl text-ink leading-[1.1]">
                        Treatments
                      </h3>
                    </div>
                    <button
                      onClick={() => setActiveCategory(null)}
                      className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center text-ink/40 hover:text-ink hover:border-ink/25 hover:bg-cream-dark/30 transition-all duration-300 shrink-0 mt-1"
                      aria-label="Close"
                    >
                      <X size={16} strokeWidth={1.5} />
                    </button>
                  </div>

                  {/* Decorative line */}
                  <div className="w-full h-px bg-ink/15 mb-2" />

                  {/* Treatment items */}
                  <div className="flex flex-col flex-1">
                    {activeCategory.items.map((item, idx) => (
                      <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.15 + idx * 0.04, ease: [0.33, 1, 0.68, 1] }}
                      key={idx}
                      className="group flex items-center justify-between py-5 md:py-6 border-b border-ink/10 hover:border-ink/25 transition-all duration-300 cursor-pointer hover:bg-ink/[0.02] hover:px-3 rounded-sm"
                      onClick={() => { setActiveCategory(null); onBook(); }}
                    >
                      <div className="flex items-center gap-5 pr-4">
                        <span className="text-accent text-[12px] font-body w-6 shrink-0 tabular-nums font-semibold">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="font-body text-ink text-[16px] md:text-[17px] leading-snug group-hover:text-ink/80 transition-colors duration-300 font-medium">
                          {item}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                        <span className="text-[10px] tracking-[0.15em] uppercase text-ink font-semibold">
                          Book
                        </span>
                        <span className="text-ink text-sm">→</span>
                      </div>
                    </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-10 pt-8 border-t border-ink/10"
                  >
                    <button
                      onClick={() => { setActiveCategory(null); onBook(); }}
                      className="btn-animated w-full flex items-center justify-center gap-3 bg-ink text-cream px-8 py-4 rounded-full uppercase tracking-[0.2em] text-[11px] font-semibold hover:bg-ink/90 transition-colors"
                    >
                      Book on WhatsApp
                      <span className="text-cream/60">→</span>
                    </button>
                    <p className="text-center text-ink-soft/60 text-[11px] mt-4 tracking-wide">
                      Click any treatment above to book directly
                    </p>
                  </motion.div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

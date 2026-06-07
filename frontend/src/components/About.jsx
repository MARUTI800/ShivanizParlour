import React from "react";
import { motion } from "framer-motion";
import { scrollTo } from "../lib/scroll";

const SALON_IMG = "/media/IMG_7572.JPG.jpeg";

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="bg-base py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-16 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8 md:mb-10"
        >
          <span className="inline-block w-8 h-px bg-ink/30" />
          <span className="text-[10px] tracking-[0.35em] uppercase text-ink-soft font-medium">
            About Shivani&apos;z
          </span>
        </motion.div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Large Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
            className="lg:col-span-6"
          >
            {/* Ultra-minimal image wrapper: no heavy borders or shadows */}
            <div className="w-full overflow-hidden rounded-md">
              <img
                src={SALON_IMG}
                alt="Shivani'z Beauty Parlour Team"
                className="w-full h-auto block"
                style={{ filter: "saturate(0.95) brightness(1.02)" }}
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
              data-testid="about-headline"
              className="display-head text-ink text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05]"
            >
              A SPACE WHERE
              <br />
              EVERY WOMAN FEELS
              <br />
              <span className="font-serif-italic">Beautiful</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
              className="mt-6 md:mt-8 space-y-4"
            >
              <p className="font-body text-ink/75 text-base md:text-lg leading-relaxed max-w-xl">
                Founded in 2014 by Shivani Passi, Shivani&apos;z Beauty Parlour
                started with a simple belief — that beauty care should be deeply
                personal. What began as a small studio in Raikot has grown into
                the city&apos;s most trusted destination for premium beauty services.
              </p>
              <p className="font-body text-ink/55 text-sm md:text-base leading-relaxed max-w-xl">
                Today, our team of 16 skilled artists specializes in bridal
                makeup, advanced hair treatments like Botox Nanoplastia &amp;
                Keratin, skincare, and complete makeovers — all delivered with
                the warmth and attention that&apos;s become our signature.
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-8 md:mt-10 flex flex-wrap gap-8 md:gap-12 border-t border-ink/10 pt-6"
            >
              {[
                { value: "12+", label: "Years Experience" },
                { value: "5000+", label: "Happy Clients" },
                { value: "16", label: "Team Members" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display font-black text-ink text-3xl md:text-4xl leading-none">
                    {s.value}
                  </div>
                  <div className="text-ink-soft text-[10px] uppercase tracking-[0.2em] mt-2 font-medium">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-10"
            >
              <a
                href="#story"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("#story");
                }}
                data-testid="about-read-more"
                className="group inline-flex items-center gap-3 text-ink text-xs uppercase tracking-[0.2em] font-semibold"
              >
                <span className="relative">
                  Discover Our Story
                  <span className="absolute left-0 -bottom-1 w-full h-px bg-ink/30 origin-left group-hover:scale-x-100 scale-x-75 transition-transform duration-500" />
                </span>
                <span
                  aria-hidden
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1.5"
                >
                  →
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

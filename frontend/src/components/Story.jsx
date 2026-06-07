import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { scrollTo } from "../lib/scroll";

const SALON_IMG_2 = "/media/1DSC_4258 (4).jpg.jpeg";

const TIMELINE = [
  {
    year: "2014",
    title: "The Beginning",
    desc: "Shivani Passi founded Shivani'z Beauty Parlour in Raikot with a simple dream — to make every woman feel her most beautiful self. A small studio with big ambitions.",
  },
  {
    year: "2017",
    title: "Expanding Our Craft",
    desc: "Growing demand led us to introduce advanced hair treatments — Botox Nanoplastia, Keratin, and precision coloring — making us the first in the region to offer these services.",
  },
  {
    year: "2020",
    title: "Becoming a Training Hub",
    desc: "We launched our training academy, mentoring aspiring beauty artists with the same care, discipline, and personal attention that shaped the salon from day one.",
  },
  {
    year: "2024",
    title: "Raikot's Most Trusted",
    desc: "With 16 skilled team members, thousands of happy clients, and a reputation built on trust, Shivani'z continues to set the benchmark for premium beauty care in the region.",
  },
];

const STATS = [
  { label: "Years", value: 12, suffix: "+" },
  { label: "Team Members", value: 16 },
  { label: "Happy Clients", value: 5000, suffix: "+" },
];

/* ── Animated counter ── */
function AnimatedNumber({ target, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return undefined;
    let frame = 0;
    let start = 0;
    const duration = 1400;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ── Timeline Arrow SVG ── */
function TimelineArrow() {
  return (
    <svg
      width="12"
      height="20"
      viewBox="0 0 12 20"
      fill="none"
      className="text-cream/25"
    >
      <path
        d="M6 0L6 14M6 14L1 9M6 14L11 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Story() {
  return (
    <section
      id="story"
      data-testid="story-section"
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--dark-section)" }}
    >
      {/* Grain overlay */}
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cream/15 to-transparent" />

      <div className="relative px-6 md:px-12 lg:px-16 py-20 md:py-28 lg:py-36">
        <div className="max-w-[1200px] mx-auto">

          {/* ── Section Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-24"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-cream/20" />
              <span className="text-cream/50 text-[10px] tracking-[0.35em] uppercase font-medium">
                Our Story
              </span>
              <span className="w-8 h-px bg-cream/20" />
            </div>
            <h2
              data-testid="story-headline"
              className="display-head text-cream text-4xl md:text-5xl lg:text-6xl leading-[1.05]"
            >
              The Journey of
              <br />
              <span className="font-serif-italic">Shivani&apos;z</span>
            </h2>
            <p className="font-body text-cream/45 text-sm md:text-base leading-relaxed max-w-lg mx-auto mt-6">
              From a small studio dream to Raikot&apos;s most trusted beauty
              destination — a story built on passion, trust, and care.
            </p>
          </motion.div>

          {/* ── Vertical Timeline ── */}
          <div className="relative">
            {/* Vertical line - center on desktop, left on mobile */}
            <div
              className="absolute top-0 bottom-0 left-5 md:left-1/2 w-px md:-translate-x-px"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(245,237,227,0.15) 8%, rgba(245,237,227,0.15) 92%, transparent)",
              }}
            />

            {TIMELINE.map((item, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div key={item.year} className="relative">
                  {/* ── Timeline Node ── */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                    className="absolute left-5 md:left-1/2 -translate-x-1/2 top-8 md:top-10 z-10"
                  >
                    {/* Outer ring */}
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-cream/20 flex items-center justify-center bg-[#2C2218]">
                      {/* Inner dot */}
                      <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-accent" />
                    </div>
                  </motion.div>

                  {/* ── Content Card ── */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 10 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.6,
                      delay: 0.15,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                    className={`relative pl-16 md:pl-0 md:w-[calc(50%-40px)] pb-16 md:pb-20 ${
                      isLeft
                        ? "md:mr-auto md:pr-10 md:text-right"
                        : "md:ml-auto md:pl-10"
                    }`}
                  >
                    {/* Connecting arm - desktop only */}
                    <div
                      className={`hidden md:block absolute top-[52px] w-8 h-px bg-cream/15 ${
                        isLeft ? "right-0" : "left-0"
                      }`}
                    />

                    {/* Year pill */}
                    <div
                      className={`inline-flex items-center gap-2 mb-4 ${
                        isLeft ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <span className="px-3 py-1.5 border border-accent/30 text-accent text-[11px] tracking-[0.25em] uppercase font-semibold">
                        {item.year}
                      </span>
                      <span className="w-6 h-px bg-cream/15 hidden md:inline-block" />
                    </div>

                    {/* Title */}
                    <h3 className="display-head text-cream text-2xl md:text-3xl leading-[1.1] mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="font-body text-cream/50 text-sm leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </motion.div>

                  {/* ── Arrow between items ── */}
                  {i < TIMELINE.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      className="absolute left-5 md:left-1/2 -translate-x-1/2 -bottom-2 z-10"
                    >
                      <TimelineArrow />
                    </motion.div>
                  )}
                </div>
              );
            })}

            {/* ── Final node: "Now" marker ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative flex justify-center pt-4"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-px h-8 bg-cream/15" />
                <div className="px-5 py-2.5 border border-cream/20 bg-[#2C2218]">
                  <span className="text-cream/60 text-[10px] tracking-[0.3em] uppercase font-medium">
                    And the journey continues…
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Stats Bar ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-20 md:mt-28"
          >
            <div className="grid grid-cols-3 border-y border-cream/10">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  data-testid={`stat-${s.label.toLowerCase().replace(/\s/g, "-")}`}
                  className={`py-8 md:py-12 text-center ${
                    i > 0 ? "border-l border-cream/10" : ""
                  }`}
                >
                  <div className="display-head text-cream text-4xl md:text-5xl lg:text-6xl leading-none">
                    <AnimatedNumber target={s.value} suffix={s.suffix || ""} />
                  </div>
                  <div className="text-cream/45 text-[9px] md:text-[11px] uppercase tracking-[0.2em] mt-3 font-medium">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Founder Quote ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 md:mt-24 text-center max-w-2xl mx-auto"
          >
            <span className="display-head text-cream/10 text-6xl md:text-8xl leading-none block mb-4">
              {"\u201C"}
            </span>
            <p className="font-serif-italic text-cream/50 text-lg md:text-xl leading-relaxed italic">
              Every woman deserves to feel like the most beautiful version of
              herself. That&apos;s not just our belief — it&apos;s our promise.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-cream/20" />
              <span className="text-cream/40 text-[10px] tracking-[0.25em] uppercase font-medium">
                Shivani Passi, Founder
              </span>
              <span className="w-8 h-px bg-cream/20" />
            </div>
          </motion.div>

          {/* ── CTA ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-14 md:mt-20 text-center"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact");
              }}
              data-testid="story-read-more"
              className="group inline-flex items-center gap-3 text-cream text-xs uppercase tracking-[0.22em] font-semibold"
            >
              <span className="relative">
                Get in Touch
                <span className="absolute left-0 -bottom-1 w-full h-px bg-cream/30 origin-left scale-x-75 group-hover:scale-x-100 transition-transform duration-500" />
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
    </section>
  );
}

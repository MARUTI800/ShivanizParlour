import React, { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { fetchReviews } from "../lib/api";
import { motion, AnimatePresence } from "framer-motion";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchReviews().then(setReviews).catch(() => setReviews([]));
  }, []);

  const hasMultipleReviews = reviews.length > 1;

  const next = useCallback(() => {
    if (!hasMultipleReviews) return;
    setIndex((currentIndex) =>
      currentIndex === reviews.length - 1 ? 0 : currentIndex + 1
    );
  }, [hasMultipleReviews, reviews.length]);

  const prev = useCallback(() => {
    if (!hasMultipleReviews) return;
    setIndex((currentIndex) =>
      currentIndex === 0 ? reviews.length - 1 : currentIndex - 1
    );
  }, [hasMultipleReviews, reviews.length]);

  useEffect(() => {
    if (!hasMultipleReviews) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [hasMultipleReviews, next]);

  const current = reviews[index];

  return (
    <section
      id="reviews"
      data-testid="reviews-section"
      className="bg-base-light py-20 md:py-28 px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-[1040px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block w-8 h-px bg-ink/20" />
              <span className="text-[10px] tracking-[0.35em] uppercase text-ink-soft">
                Client Voices
              </span>
            </div>
            <h2 className="display-head text-ink text-4xl md:text-5xl leading-[1.05]">
              What Clients
              <br className="hidden md:block" /> Remember
            </h2>
          </div>
          <p className="font-body text-ink-soft text-sm md:text-base leading-relaxed max-w-sm">
            Real words from clients who trusted Shivani&apos;z for makeovers,
            hair transformations, and everyday beauty care.
          </p>
        </motion.div>

        <div className="relative border-y border-ink/10 py-10 md:py-14">
          <Quote
            size={110}
            strokeWidth={0.8}
            className="absolute -top-3 -left-4 text-ink/[0.06] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative min-h-[260px] flex items-center">
            <AnimatePresence mode="wait">
              {current ? (
                <motion.article
                  key={current.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.42, ease: [0.33, 1, 0.68, 1] }}
                  className="w-full"
                >
                  <div className="flex items-center gap-1 mb-6 text-accent">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        size={15}
                        strokeWidth={1.8}
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  <blockquote>
                    <p className="display-head text-ink text-2xl md:text-[2.65rem] leading-[1.25] tracking-tight max-w-[900px]">
                      {current.text}
                    </p>
                  </blockquote>

                  <div className="mt-8 flex items-center gap-4">
                    <span className="inline-block w-10 h-px bg-ink/20" />
                    <div>
                      <p className="font-body text-ink text-sm font-semibold tracking-wide">
                        {current.name}
                      </p>
                      <p className="text-ink-soft text-[10px] uppercase tracking-[0.22em] mt-1">
                        {current.service || "Google Review"}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ) : (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="font-body text-ink-soft text-sm"
                >
                  Loading client reviews...
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-between gap-6">
            <div className="flex gap-2">
              {reviews.map((review, dotIndex) => (
                <button
                  key={review.id}
                  type="button"
                  onClick={() => setIndex(dotIndex)}
                  aria-label={`Show review ${dotIndex + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    dotIndex === index
                      ? "w-7 h-1.5 bg-ink"
                      : "w-1.5 h-1.5 bg-ink/18 hover:bg-ink/35"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                data-testid="reviews-prev"
                type="button"
                onClick={prev}
                disabled={!hasMultipleReviews}
                aria-label="Previous review"
                className="btn-animated w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center text-ink/45 hover:text-ink hover:border-ink/30 disabled:opacity-35 disabled:hover:text-ink/45 disabled:hover:border-ink/10 transition-colors"
              >
                <ChevronLeft size={17} strokeWidth={1.7} />
              </button>
              <button
                data-testid="reviews-next"
                type="button"
                onClick={next}
                disabled={!hasMultipleReviews}
                aria-label="Next review"
                className="btn-animated w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center text-ink/45 hover:text-ink hover:border-ink/30 disabled:opacity-35 disabled:hover:text-ink/45 disabled:hover:border-ink/10 transition-colors"
              >
                <ChevronRight size={17} strokeWidth={1.7} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

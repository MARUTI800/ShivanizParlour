import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const programs = [
  "Diploma in Beauty Therapy Services",
  "Diploma in Beauty Therapy Treatments",
  "Certification in Makeups and Nail Arts",
  "Certification in Hair Dressing Courses",
  "Certification in Advance Mehndi Designing",
  "Diploma in makeup",
  "Professional Beauty and Hair Designers",
  "Diploma in Skin Care",
  "Diploma in Salon Management",
  "Diploma in lash artistry training",
];

export default function TrainingPrograms({ onEnroll }) {
  return (
    <section
      id="training"
      className="py-20 md:py-28 px-6 md:px-12 lg:px-16"
      style={{ backgroundColor: "var(--cream-light, #FBF7F2)", color: "var(--ink, #2C2218)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="inline-block w-8 h-px bg-ink/30" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-ink/50">
              Training Programs
            </span>
            <span className="inline-block w-8 h-px bg-ink/30" />
          </div>
          <h2 className="display-head text-4xl md:text-5xl leading-[1.1] mb-6">
            Enroll Our Training Programs <br className="hidden md:block" /> in Punjab, India
          </h2>
          <p className="font-serif-italic text-ink-soft text-base md:text-lg max-w-2xl mx-auto opacity-80">
            We offer special beauty training programs with certification. Following are our beauty and wellness training programs. Take a glance over our training programs. We have a list of courses which will help you secure your space in the beauty industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
          {programs.map((program, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              key={i}
              className="group flex items-start gap-4 p-6 md:p-8 bg-white/50 border border-ink/5 hover:border-ink/20 hover:bg-white/80 transition-all duration-500 rounded-sm"
            >
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-body text-ink/90 text-base font-medium group-hover:text-ink transition-colors duration-300">
                {program}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={onEnroll}
            className="btn-animated flex items-center gap-3 bg-ink text-cream px-10 py-5 rounded-full uppercase tracking-[0.2em] text-[11px] font-semibold hover:bg-ink/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Enroll Now
            <span className="text-cream/60 text-lg leading-none">→</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

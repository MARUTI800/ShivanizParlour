import React, { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";


export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill all fields.");
      return;
    }
    setSending(true);
    try {
      const message = `Hi Shivani'z Beauty Parlour,\n\nI have an inquiry.\n\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`;
      const url = `https://wa.me/917710235502?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
      toast.success("Redirecting to WhatsApp...");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Could not send. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="bg-base py-16 md:py-24 px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-7">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-1.5 h-1.5 bg-ink rounded-full" />
            <span className="text-xs tracking-[0.3em] uppercase text-ink-soft">
              Get In Touch
            </span>
          </div>
          <h2 className="display-head text-5xl md:text-6xl lg:text-7xl leading-[1.1] uppercase max-w-[1000px]">
            We&apos;d Love to
            <br />
            Hear From You
          </h2>
          <p className="mt-8 max-w-md font-body text-ink-soft text-base leading-relaxed hidden md:block">
            Have a question, or just want to say hello? Drop a line — we read
            every message and reply within a day.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          onSubmit={submit}
          className="md:col-span-5 md:pt-4 flex flex-col gap-7"
          data-testid="contact-form"
        >
          <div>
            <label className="block text-xs uppercase tracking-wider text-ink-soft mb-2">
              Full Name *
            </label>
            <input
              data-testid="contact-input-name"
              className="editorial-input"
              value={form.name}
              onChange={set("name")}
              placeholder="Enter name"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-ink-soft mb-2">
              Email *
            </label>
            <input
              data-testid="contact-input-email"
              type="email"
              className="editorial-input"
              value={form.email}
              onChange={set("email")}
              placeholder="Enter email"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-ink-soft mb-2">
              Message *
            </label>
            <textarea
              data-testid="contact-input-message"
              rows={3}
              className="editorial-input resize-none"
              value={form.message}
              onChange={set("message")}
              placeholder="Say Hi!"
            />
          </div>
          <button
            data-testid="contact-submit"
            type="submit"
            disabled={sending}
            className="btn-animated mt-2 self-start inline-flex items-center gap-3 bg-ink text-base px-7 py-4 rounded-full uppercase tracking-[0.2em] text-xs hover:opacity-90 disabled:opacity-50 transition-opacity"
          >
            {sending ? "Sending..." : "Send Message"}
            <span aria-hidden>→</span>
          </button>
        </motion.form>
      </div>
    </section>
  );
}

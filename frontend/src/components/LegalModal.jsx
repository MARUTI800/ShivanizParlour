import React, { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/* ──────────────────────────────────────────────
   Legal content for Shivani'z Beauty Parlour
   ────────────────────────────────────────────── */

const PRIVACY_POLICY = {
  title: "Privacy Policy",
  lastUpdated: "June 2026",
  sections: [
    {
      heading: "Introduction",
      body: `Shivani'z Beauty Parlour ("we", "our", or "us") is committed to protecting the privacy of our clients and website visitors. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services at our salon located in Raikot, Talwandi Gate, Punjab, India.`,
    },
    {
      heading: "Information We Collect",
      body: `We may collect the following types of personal information:`,
      list: [
        "Name and contact details (phone number, email address) when you book an appointment or submit a contact form",
        "Communication history when you reach out to us via WhatsApp, email, or phone",
        "Photos or media only with your explicit consent, for portfolio or promotional purposes",
        "Basic usage data such as browser type and pages visited, collected automatically through cookies",
      ],
    },
    {
      heading: "How We Use Your Information",
      body: `Your personal information is used for the following purposes:`,
      list: [
        "To schedule and manage your appointments",
        "To respond to your inquiries and provide customer support",
        "To send appointment reminders or service updates (only with your consent)",
        "To improve our website experience and services",
        "To share before/after photos on social media (only with your written consent)",
      ],
    },
    {
      heading: "Data Sharing",
      body: `We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:`,
      list: [
        "With service providers who help us operate our website (e.g., hosting providers), bound by confidentiality agreements",
        "When required by law or to protect our legal rights",
        "With your explicit consent",
      ],
    },
    {
      heading: "Data Security",
      body: `We take reasonable measures to protect your personal information from unauthorized access, alteration, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
    },
    {
      heading: "Your Rights",
      body: `You have the right to:`,
      list: [
        "Request access to the personal information we hold about you",
        "Request correction or deletion of your personal information",
        "Withdraw consent for marketing communications at any time",
        "Request that we stop processing your data in certain circumstances",
      ],
    },
    {
      heading: "Contact Us",
      body: `If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at Shivanipassi2408@gmail.com or call +91 77102 35502.`,
    },
  ],
};

const TERMS_OF_SERVICE = {
  title: "Terms of Service",
  lastUpdated: "June 2026",
  sections: [
    {
      heading: "Acceptance of Terms",
      body: `By accessing and using the Shivani'z Beauty Parlour website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.`,
    },
    {
      heading: "Services",
      body: `Shivani'z Beauty Parlour offers a range of beauty services including but not limited to bridal makeup, hair treatments, skincare, and styling. All services are subject to availability and are provided at our salon located in Raikot, Talwandi Gate, Punjab, India.`,
    },
    {
      heading: "Appointments & Bookings",
      body: `The following terms apply to all appointments:`,
      list: [
        "Appointments can be booked via WhatsApp, phone call, or in person at our salon",
        "We recommend booking bridal and event services well in advance to ensure availability",
        "A confirmation will be sent to you upon successful booking",
        "We reserve the right to reschedule appointments in case of unforeseen circumstances, with reasonable notice",
      ],
    },
    {
      heading: "Cancellations & No-Shows",
      body: `We understand that plans can change. We request the following courtesy:`,
      list: [
        "Please inform us at least 24 hours before your scheduled appointment if you need to cancel or reschedule",
        "Repeated no-shows without prior notice may result in a requirement for advance booking confirmation",
        "For bridal bookings, cancellation terms will be communicated at the time of booking",
      ],
    },
    {
      heading: "Pricing",
      body: `Service prices are communicated at the time of booking or consultation. Prices may vary based on the complexity of the treatment, hair length, or specific requirements. We reserve the right to update our pricing at any time without prior notice on the website, though confirmed bookings will be honored at the agreed price.`,
    },
    {
      heading: "Health & Safety",
      body: `For your safety and the best results:`,
      list: [
        "Please inform us of any allergies, skin conditions, or medical treatments before your service",
        "We use professional-grade products and follow strict hygiene standards",
        "We reserve the right to refuse or modify a service if we believe it may be harmful to you",
        "A patch test may be recommended for certain chemical treatments",
      ],
    },
    {
      heading: "Intellectual Property",
      body: `All content on this website — including text, images, logos, and design — is the property of Shivani'z Beauty Parlour and is protected under applicable intellectual property laws. You may not reproduce, distribute, or use any content without our prior written permission.`,
    },
    {
      heading: "Limitation of Liability",
      body: `While we strive to deliver the highest quality services, Shivani'z Beauty Parlour shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website. Our liability is limited to the amount paid for the specific service in question.`,
    },
    {
      heading: "Changes to Terms",
      body: `We may update these Terms of Service from time to time. Continued use of our website or services after any changes constitutes acceptance of the updated terms.`,
    },
    {
      heading: "Contact",
      body: `For questions regarding these terms, please reach out at Shivanipassi2408@gmail.com or call +91 77102 35502.`,
    },
  ],
};

const COOKIE_POLICY = {
  title: "Cookie Policy",
  lastUpdated: "June 2026",
  sections: [
    {
      heading: "What Are Cookies",
      body: `Cookies are small text files placed on your device when you visit a website. They help the website remember your preferences and improve your browsing experience. Shivani'z Beauty Parlour uses cookies on this website to ensure it functions correctly and to understand how visitors interact with it.`,
    },
    {
      heading: "Cookies We Use",
      body: `We use the following types of cookies:`,
      list: [
        "Essential Cookies — Required for the website to function properly (e.g., remembering your scroll position, loading preferences). These cannot be disabled.",
        "Analytics Cookies — Help us understand how visitors use our website, which pages are most popular, and how we can improve the experience. These are anonymous and do not identify you personally.",
        "Functionality Cookies — Remember your preferences such as language or region to provide a more personalized experience.",
      ],
    },
    {
      heading: "Third-Party Cookies",
      body: `Our website may include content or services from third parties (such as Google Maps for our location or Google Fonts for typography) that may set their own cookies. We do not control these cookies. Please refer to the respective third-party privacy policies for more information.`,
    },
    {
      heading: "Managing Cookies",
      body: `You can control and manage cookies through your browser settings. Most browsers allow you to:`,
      list: [
        "View and delete cookies that have been set",
        "Block third-party cookies",
        "Block cookies from specific websites",
        "Block all cookies",
        "Delete all cookies when you close your browser",
      ],
    },
    {
      heading: "Impact of Disabling Cookies",
      body: `Please note that disabling cookies may affect the functionality of this website. Some features may not work as expected if cookies are blocked.`,
    },
    {
      heading: "Contact",
      body: `If you have questions about our use of cookies, please contact us at Shivanipassi2408@gmail.com or call +91 77102 35502.`,
    },
  ],
};

const CONTENT_MAP = {
  privacy: PRIVACY_POLICY,
  terms: TERMS_OF_SERVICE,
  cookies: COOKIE_POLICY,
};

export default function LegalModal({ type, onClose }) {
  const content = CONTENT_MAP[type];

  // Lock body scroll when open
  useEffect(() => {
    if (content) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [content]);

  // Close on Escape
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (content) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [content, handleKeyDown]);

  if (!content) return null;

  return (
    <AnimatePresence>
      {content && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] flex"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 250 }}
            className="relative ml-auto w-full md:w-[600px] lg:w-[680px] h-full flex flex-col overflow-hidden bg-base"
            data-lenis-prevent="true"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 md:px-12 py-6 border-b border-ink/10 shrink-0">
              <div>
                <h2 className="display-head text-ink text-2xl md:text-3xl">
                  {content.title}
                </h2>
                <p className="text-ink-soft text-[10px] tracking-[0.2em] uppercase mt-1.5">
                  Last updated: {content.lastUpdated}
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center text-ink/40 hover:text-ink hover:border-ink/25 transition-all duration-300 shrink-0"
                aria-label="Close"
              >
                <X size={16} strokeWidth={1.5} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-8 md:px-12 py-8 md:py-10">
              <div className="space-y-8">
                {content.sections.map((section, i) => (
                  <article key={i}>
                    <h3 className="font-body text-ink font-semibold text-sm uppercase tracking-[0.15em] mb-3">
                      {section.heading}
                    </h3>
                    <p className="font-body text-ink/70 text-sm leading-relaxed">
                      {section.body}
                    </p>
                    {section.list && (
                      <ul className="mt-3 space-y-2">
                        {section.list.map((item, j) => (
                          <li
                            key={j}
                            className="font-body text-ink/60 text-sm leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-ink/20"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                ))}
              </div>

              {/* Bottom note */}
              <div className="mt-12 pt-6 border-t border-ink/10">
                <p className="font-body text-ink/40 text-xs leading-relaxed">
                  Shivani&apos;z Beauty Parlour · Raikot, Talwandi Gate, Punjab,
                  India · Shivanipassi2408@gmail.com · +91 77102 35502
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

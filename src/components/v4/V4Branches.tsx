"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, bounce: 0, duration: 0.6, delay: i * 0.1 },
  }),
};

const branches = [
  {
    name: "فرع مصر الجديدة",
    address: "٧٧ شارع النزهة، ميدان السبع عمارات، مصر الجديدة، القاهرة",
    hours: [
      "السبت — مسائاً",
      "الأحد — مسائاً",
      "الاثنين — مسائاً",
      "الأربعاء — مسائاً",
    ],
    mapUrl: "https://maps.google.com/maps?q=77+El-Nozha+St+Heliopolis+Cairo",
    mapLabel: "عرض على خرائط Google",
  },
  {
    name: "فرع التجمع الخامس",
    address: "عيادات Bless، ١٦٤ شارع التسعين الشمالي، التجمع الخامس، القاهرة الجديدة",
    hours: ["السبت — مسائاً", "الاثنين — مسائاً"],
    mapUrl: "https://maps.app.goo.gl/qEv3MSurA7GbBAW77",
    mapLabel: "عرض على خرائط Google",
  },
];

export default function V4Branches() {
  return (
    <section id="branches" className="py-24 paper-bg">
      {/* Hairline */}
      <hr className="editorial-rule mb-16" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Section label */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ color: "var(--text-muted)" }}
        >
          الفروع والمواعيد
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="text-base mb-10 max-w-lg"
          style={{ color: "var(--text-muted)", lineHeight: 1.9 }}
        >
          فرعان مجهزان في مصر الجديدة والتجمع الخامس لتيسير حجز موعدكِ ومتابعتكِ الدورية.
        </motion.p>

        {/* Two-column branch cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {branches.map((branch, idx) => (
            <motion.div
              key={branch.name}
              className="v4-card p-7 flex flex-col gap-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx + 1}
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
            >
              {/* Status */}
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#22c55e" }}
                  aria-hidden="true"
                />
                <span className="text-xs font-semibold" style={{ color: "#16a34a" }}>
                  متاح
                </span>
              </div>

              {/* Branch name */}
              <h3
                className="text-xl font-extrabold"
                style={{ color: "var(--text-ink)", letterSpacing: "-0.01em" }}
              >
                {branch.name}
              </h3>

              {/* Address */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-muted)", lineHeight: 1.8 }}
              >
                {branch.address}
              </p>

              {/* Hairline */}
              <hr className="editorial-rule" />

              {/* Hours */}
              <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>
                  مواعيد العمل
                </p>
                <ul className="flex flex-col gap-1.5">
                  {branch.hours.map((hour) => (
                    <li
                      key={hour}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: "var(--text-ink)" }}
                    >
                      <span
                        className="w-1 h-1 rounded-full shrink-0"
                        style={{ background: "var(--accent-rose)" }}
                        aria-hidden="true"
                      />
                      {hour}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hairline */}
              <hr className="editorial-rule" />

              {/* Map link */}
              <a
                href={branch.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold group"
                style={{ color: "var(--accent-rose)" }}
              >
                {branch.mapLabel}
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    transform="scale(-1,1) translate(-20,0)"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10.5v1.5m7-7h1.5M6 6l.75.75M14.25 6L13.5 6.75M6 14.25l.75-.75m7.5 0l-.75-.75"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Phone number centered */}
        <motion.div
          className="mt-12 flex flex-col items-center gap-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
        >
          <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--text-muted)" }}>
            أو تواصلي معنا مباشرة
          </p>
          <a
            href="tel:+201021107881"
            className="text-2xl font-extrabold tracking-tight transition-colors duration-200"
            style={{ color: "var(--text-ink)" }}
            dir="ltr"
          >
            +20 102 110 7881
          </a>
        </motion.div>
      </div>
    </section>
  );
}

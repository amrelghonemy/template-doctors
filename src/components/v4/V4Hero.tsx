"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, bounce: 0, duration: 0.6, delay: i * 0.1 },
  }),
};

const WHATSAPP_NUMBER = "201021107881";

const branches = [
  { id: "heliopolis", label: "مصر الجديدة", message: "أرغب في حجز موعد في فرع مصر الجديدة" },
  { id: "newcairo", label: "التجمع الخامس", message: "أرغب في حجز موعد في فرع التجمع الخامس" },
];

export default function V4Hero() {
  const [activeBranch, setActiveBranch] = useState<"heliopolis" | "newcairo">("heliopolis");

  const selectedBranch = branches.find((b) => b.id === activeBranch)!;
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(selectedBranch.message)}`;

  return (
    <section className="relative min-h-screen pt-28 pb-20 paper-bg overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-center min-h-[calc(100vh-7rem)]">

          {/* ── Left col: Content (7/12) ── */}
          <div className="md:col-span-7 flex flex-col gap-6">
            {/* Editorial tag */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="text-sm font-medium tracking-wide uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              دكتوراه واستشاري نساء وتوليد وطب الجنين – جامعة عين شمس
            </motion.p>

            {/* Display headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-5xl md:text-6xl font-extrabold leading-tight"
              style={{ letterSpacing: "-0.02em", lineHeight: 1.15, color: "var(--text-ink)" }}
            >
              رعاية طبية متخصصة<br />
              لصحة{" "}
              <span className="rose-underline">الأم والجنين</span>
            </motion.h1>

            {/* Warm editorial paragraph */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-base leading-relaxed max-w-md"
              style={{ color: "var(--text-muted)", lineHeight: 1.85 }}
            >
              متابعة دقيقة ومستمرة لكافة مراحل الحمل، وتخصص دقيق في طب الجنين والسونار التفصيلي المتقدم، مع توفير الوقت الكافي للإجابة عن كل استفساراتكِ ومتابعة تطورات صحتكِ باهتمام كامل.
            </motion.p>

            {/* ── Booking Console ── */}
            <motion.div
              id="booking"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="v4-card p-5 flex flex-col gap-4"
            >
              <p className="text-sm font-semibold" style={{ color: "var(--text-ink)" }}>
                اختاري العيادة الأنسب لكِ:
              </p>

              {/* Branch selector */}
              <div className="flex gap-3 flex-wrap">
                {branches.map((branch) => (
                  <button
                    key={branch.id}
                    onClick={() => setActiveBranch(branch.id as "heliopolis" | "newcairo")}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                    style={{
                      background: activeBranch === branch.id ? "var(--accent-rose)" : "transparent",
                      color: activeBranch === branch.id ? "#fff" : "var(--text-ink)",
                      border: activeBranch === branch.id ? "1.5px solid var(--accent-rose)" : "1.5px solid var(--border-hairline)",
                    }}
                  >
                    {/* Green available dot */}
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: "#22c55e" }}
                      aria-label="متاح"
                    />
                    {branch.label}
                    <span
                      className="text-xs font-medium"
                      style={{ color: activeBranch === branch.id ? "rgba(255,255,255,0.8)" : "#22c55e" }}
                    >
                      متاح
                    </span>
                  </button>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-3.5 rounded-xl font-bold text-base transition-transform duration-150 active:scale-95"
                style={{ background: "#25D366", color: "#fff" }}
              >
                {/* WhatsApp SVG */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                حجز موعد الكشف عبر واتساب
              </a>
            </motion.div>


          </div>

          {/* ── Right col: Image (5/12) ── */}
          <motion.div
            className="md:col-span-5 relative hidden md:block"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            {/* Main portrait image */}
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{ boxShadow: "0 24px 64px rgba(28,22,18,0.12)" }}
            >
              <Image
                src="/images/maternity-warm.jpg"
                alt="رعاية الأمومة"
                width={480}
                height={580}
                className="w-full object-cover"
                style={{ aspectRatio: "4/5" }}
                priority
              />
              {/* Warm tint overlay */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(28,22,18,0.08) 100%)" }}
              />
            </div>

            {/* Floating availability card */}
            <div className="float-card">
              <div
                className="w-9 h-9 rounded-xl overflow-hidden shrink-0"
                style={{ border: "1px solid var(--border-hairline)" }}
              >
                <Image
                  src="/images/doctor-desk.jpg"
                  alt="العيادة"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="green-dot" />
                  <span className="text-xs font-semibold" style={{ color: "var(--text-ink)" }}>
                    متاح للحجز الآن
                  </span>
                </div>
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                  مصر الجديدة والتجمع الخامس
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

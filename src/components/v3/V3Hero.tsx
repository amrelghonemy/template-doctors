"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowLeft, CheckCircle2, Sparkles, MapPin } from "lucide-react";

export default function V3Hero() {
  const [selectedBranch, setSelectedBranch] = useState<"heliopolis" | "new_cairo">("heliopolis");

  const getBookingLink = () => {
    const branch =
      selectedBranch === "heliopolis"
        ? "مصر الجديدة (شارع النزهة)"
        : "التجمع الخامس (عيادات Bless)";
    return `https://wa.me/201021107881?text=${encodeURIComponent(
      `السلام عليكم د. دينا، أود حجز موعد كشف في فرع ${branch}.`
    )}`;
  };

  // stagger container
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  } as const;
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  } as const;

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 sm:pt-32 pb-20 overflow-hidden linen-bg grain-overlay"
    >
      {/* Organic blob background blushes */}
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] blob-shape bg-rose-200/40 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 -left-24 w-[380px] h-[380px] blob-shape bg-amber-200/30 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[300px] blob-shape bg-rose-100/40 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ── Left / Image column ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative order-2 lg:order-1"
          >
            {/* Main photograph — warm, editorial framing */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-rose-200/50 aspect-[4/5] border-4 border-white group">
              <img
                src="/images/maternity-warm.jpg"
                alt="رعاية الأمومة وطب الجنين"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              {/* Warm duotone overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 via-transparent to-rose-200/10" />
            </div>

            {/* Floating trust badge — top left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute -top-5 -left-4 sm:-left-8 warm-card rounded-2xl px-4 py-3 shadow-xl shadow-amber-100/60 soft-float"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-rose-400 flex items-center justify-center text-white shadow-md">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <span className="block text-[11px] font-black text-stone-800 leading-none">استشارية</span>
                  <span className="block text-[10px] text-stone-400 mt-0.5">جامعة عين شمس</span>
                </div>
              </div>
            </motion.div>

            {/* Floating "online" pill — bottom right */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="absolute -bottom-5 -right-2 sm:-right-6 warm-card rounded-2xl px-4 py-2.5 shadow-xl shadow-amber-100/60"
            >
              <div className="flex items-center gap-2 text-right">
                <span className="text-xs font-bold text-stone-700">الفروع متاحة الآن</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 warm-pulse" />
              </div>
              <span className="block text-[10px] text-stone-400 text-right mt-0.5">مصر الجديدة • التجمع الخامس</span>
            </motion.div>
          </motion.div>

          {/* ── Right / Text + Booking column ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 text-right order-1 lg:order-2"
          >
            {/* Editorial label */}
            <motion.div variants={item} className="inline-flex items-center gap-2 mb-5">
              <span className="text-xs font-bold text-rose-500 tracking-widest uppercase">
                رعاية متكاملة • أمان حقيقي • قلب دافئ
              </span>
            </motion.div>

            {/* Main headline — large, serif-inspired weight */}
            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 leading-[1.12] tracking-tight mb-5"
            >
              لأن كل رحلة أمومة{" "}
              <span className="text-rose-500 hand-underline">تستحق</span>{" "}
              أفضل رعاية
            </motion.h1>

            <motion.p
              variants={item}
              className="text-base sm:text-lg text-stone-500 font-medium leading-loose mb-8 max-w-xl"
            >
              مع د. دينا مصطفى إبراهيم، استشاري طب الجنين والنساء والتوليد بجامعة عين شمس، لستِ مجرد حالة طبية — أنتِ وبنسانكِ أهم ما يكون.
            </motion.p>

            {/* Quick feature pills */}
            <motion.div variants={item} className="flex flex-wrap gap-2 mb-8 justify-end">
              {["سونار 4D تفصيلي", "حقن مجهري ICSI", "ولادة بدون ألم", "مناظير دقيقة"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-rose-100 shadow-sm text-xs font-bold text-stone-700 hover:border-rose-300 hover:bg-rose-50 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" />
                    {tag}
                  </span>
                )
              )}
            </motion.div>

            {/* ── Central Booking Console (the ONE place) ── */}
            <motion.div
              variants={item}
              id="booking"
              className="scroll-mt-28 warm-card rounded-3xl p-5 sm:p-6 shadow-xl shadow-amber-100/50"
            >
              {/* Header row */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-amber-100">
                <span className="text-xs font-black text-stone-700">اختاري أقرب فرع لكِ:</span>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                  حجز فوري
                </span>
              </div>

              {/* Branch toggle */}
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                {[
                  {
                    id: "heliopolis" as const,
                    name: "مصر الجديدة",
                    sub: "السبع عمارات • شارع النزهة",
                  },
                  {
                    id: "new_cairo" as const,
                    name: "التجمع الخامس",
                    sub: "عيادات Bless • التسعين",
                  },
                ].map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setSelectedBranch(b.id)}
                    className={`p-3.5 rounded-2xl text-right border-2 transition-all cursor-pointer group ${
                      selectedBranch === b.id
                        ? "border-rose-400 bg-rose-50 shadow-md shadow-rose-100"
                        : "border-transparent bg-stone-50 hover:bg-rose-50/50 hover:border-rose-200"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs sm:text-sm font-black text-stone-800">
                        {b.name}
                      </span>
                      <div className="flex items-center gap-1 px-1.5 py-0.5 bg-emerald-100 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 warm-pulse" />
                        <span className="text-[9px] font-bold text-emerald-700">متاح</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-stone-400 font-medium">{b.sub}</span>
                  </button>
                ))}
              </div>

              {/* CTA */}
              <a
                href={getBookingLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-200/60 transition-all duration-300 hover:scale-[1.01] active:scale-[0.98] group"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>
                  احجزي في {selectedBranch === "heliopolis" ? "مصر الجديدة" : "التجمع الخامس"} عبر واتساب
                </span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </a>

              <p className="text-center text-[11px] text-stone-400 mt-3">
                الرد فوري من فريق الاستقبال • لا حاجة لإنشاء حساب أو تطبيق
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

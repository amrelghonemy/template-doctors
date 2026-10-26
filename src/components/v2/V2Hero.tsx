"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MessageCircle,
  ArrowLeft,
  CheckCircle2,
  Shield,
  Sparkles,
  MapPin,
  Clock,
} from "lucide-react";
import SpotlightCard from "./SpotlightCard";

export default function V2Hero() {
  const [selectedBranch, setSelectedBranch] = useState<"heliopolis" | "new_cairo">("heliopolis");

  const getBookingLink = () => {
    const branchName =
      selectedBranch === "heliopolis"
        ? "مصر الجديدة (شارع النزهة - ميدان السبع عمارات)"
        : "التجمع الخامس (عيادات Bless - شارع التسعين الشمالي)";
    const text = encodeURIComponent(
      `السلام عليكم د. دينا، أود حجز موعد كشف في فرع ${branchName}.`
    );
    return `https://wa.me/201021107881?text=${text}`;
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 sm:pt-36 pb-20 overflow-hidden flex flex-col justify-center">
      {/* Ambient Radial Aurora Glow Blurs */}
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-900/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Subtle Mesh Grid */}
      <div className="absolute inset-0 subtle-mesh-grid opacity-30 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Right Column: Hero Typography & Booking Console */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-right"
          >
            {/* Editorial Metadata Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-[11px] font-mono tracking-tight mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
              <span>CONSULTANT OF OB/GYN & FETAL MEDICINE • AIN SHAMS UNIVERSITY</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6">
              رعاية متكاملة لكِ ولجنينكِ بأعلى المعايير الأكاديمية
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed mb-8 max-w-2xl">
              تجمع د. دينا مصطفى إبراهيم بين أدق بروتوكولات طب الجنين وتشخيص التشوهات، وخبرة جراحات الحقن المجهري والولادة القيصرية بدون ألم، في بيئة طبية راقية تمنحكِ الأمان الكامل.
            </p>

            {/* The Central Booking Terminal (#booking) */}
            <div id="booking" className="scroll-mt-32 max-w-xl">
              <SpotlightCard className="p-5 sm:p-6 border-white/15 bg-zinc-950/80 shadow-2xl">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                  <span className="text-xs font-bold text-white flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-rose-500" />
                    اختاري أقرب فرع لكي:
                  </span>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    حجز فوري عبر واتساب
                  </span>
                </div>

                {/* Branch Selection Buttons */}
                <div className="grid grid-cols-2 gap-2.5 mb-4">
                  {/* Branch Heliopolis */}
                  <button
                    type="button"
                    onClick={() => setSelectedBranch("heliopolis")}
                    className={`p-3.5 rounded-2xl text-right transition-all cursor-pointer border ${
                      selectedBranch === "heliopolis"
                        ? "bg-rose-500/15 border-rose-500/60 shadow-lg shadow-rose-500/10 ring-1 ring-rose-500/40 text-white font-bold"
                        : "bg-white/5 border-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs sm:text-sm font-black">مصر الجديدة</span>
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[10px] font-bold text-emerald-400">متاح</span>
                      </div>
                    </div>
                    <span className="text-[11px] text-zinc-400 block font-mono">
                      السبع عمارات • شارع النزهة
                    </span>
                  </button>

                  {/* Branch New Cairo */}
                  <button
                    type="button"
                    onClick={() => setSelectedBranch("new_cairo")}
                    className={`p-3.5 rounded-2xl text-right transition-all cursor-pointer border ${
                      selectedBranch === "new_cairo"
                        ? "bg-rose-500/15 border-rose-500/60 shadow-lg shadow-rose-500/10 ring-1 ring-rose-500/40 text-white font-bold"
                        : "bg-white/5 border-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs sm:text-sm font-black">التجمع الخامس</span>
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[10px] font-bold text-emerald-400">متاح</span>
                      </div>
                    </div>
                    <span className="text-[11px] text-zinc-400 block font-mono">
                      عيادات Bless • التسعين الشمالي
                    </span>
                  </button>
                </div>

                {/* Central Action CTA */}
                <a
                  href={getBookingLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] group"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-600 group-hover:scale-110 transition-transform" />
                  <span>
                    احجزي كشفكِ في {selectedBranch === "heliopolis" ? "فرع مصر الجديدة" : "فرع التجمع الخامس"}
                  </span>
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                </a>

                {/* Micro reassurance line */}
                <div className="mt-3 flex items-center justify-between text-[11px] text-zinc-400 px-1">
                  <span>كشف فحص طب الجنين والسونار 4D</span>
                  <span>الرد فوري ومباشر من فريق الاستقبال</span>
                </div>

              </SpotlightCard>
            </div>

          </motion.div>

          {/* Left Column: High-Craft Imagery Showcase (No Doctor Personal Photos) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] sm:aspect-square lg:aspect-[4/5] shadow-2xl group">
              <img
                src="/images/maternity-warm.jpg"
                alt="رعاية متكاملة للأمومة وطب الجنين"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

              {/* Bottom Editorial Caption */}
              <div className="absolute bottom-6 inset-x-6 text-right">
                <div className="p-4 rounded-2xl bg-zinc-950/80 backdrop-blur-xl border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span className="text-xs font-mono font-bold text-rose-300">
                      ADVANCED FETAL ULTRASOUND
                    </span>
                  </div>
                  <p className="text-sm font-bold text-white leading-snug">
                    سونار تفصيلي 4D/5D وتشخيص دقيق لسلامة ونمو الجنين
                  </p>
                  <p className="text-xs text-zinc-400 mt-1">
                    أحدث تقنيات الدوبلر الملون وفحص الشهور الأولى
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Glass Metric Badge */}
            <div className="absolute -top-4 -left-4 sm:top-6 sm:-left-8 p-3.5 rounded-2xl bg-zinc-950/90 backdrop-blur-2xl border border-white/15 shadow-2xl text-right">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-400">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">معايير طبية أكاديمية</span>
                  <span className="text-[10px] text-zinc-400 font-mono">MD • AIN SHAMS</span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

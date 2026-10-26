"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Baby,
  Activity,
  Heart,
  Sparkles,
  CheckCircle2,
  ArrowLeft,
  ChevronRight,
  Shield,
  Clock,
} from "lucide-react";
import SpotlightCard from "./SpotlightCard";

export default function V2ServicesBento() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const services = [
    {
      id: "fetal-medicine",
      title: "طب الجنين والسونار 4D/5D",
      code: "FETAL MEDICINE & ANOMALY SCAN",
      headline: "فحص تفصيلي شامل لأعضاء الجنين والكشف المبكر عن التشوهات",
      desc: "فحص دقيق لمخ وقلب وأطراف الجنين بأحدث أجهزة السونار المتطورة والدوبلر الملون لتقييم كفاءة تدفق الدم بالمشيمة.",
      image: "/images/ultrasound-scan.jpg",
      points: [
        "فحص تفاصيل الجنين التفصيلي (Anomaly Scan) في الأسابيع 18 - 22",
        "قياس سماكة الرقبة وعظام الأنف للتشخيص المبكر للمتلازمات (NT Scan)",
        "أشعة الدوبلر لمتابعة تدفق الدم للمشيمة ونقص نمو الجنين",
        "تسجيل صور وفيديوهات تذكارية فائقة الوضوح لملامح الجنين وسونار 4D",
      ],
      icon: Baby,
    },
    {
      id: "icsi",
      title: "الحقن المجهري وتأخر الإنجاب",
      code: "REPRODUCTIVE MEDICINE & PCOS",
      headline: "خطة علاجية مخصصة للزوجين لتحقيق حلم الأمومة بأعلى نسب النجاح",
      desc: "تقييم شامل للزوجين واختيار أنسب بروتوكول تحفيز محسوب لتجاوز صعوبات ضعف مخزون المبيض وتكيس المبايض.",
      image: "/images/ultrasound-monitor.jpg",
      points: [
        "الحقن المجهري وأطفال الأنابيب (ICSI / IVF) بأحدث التقنيات المعملية",
        "علاج متلازمة تكيس المبايض (PCOS) وتنشيط التبويض المحسوب بدقة",
        "بروتوكولات علاج حالات الفشل المتكرر لانغراس الأجنة",
        "التلقيح الصناعي (IUI) والفحوصات الوراثية والمناعية الدقيقة",
      ],
      icon: Activity,
    },
    {
      id: "painless-birth",
      title: "الولادة القيصرية بدون ألم",
      code: "PAINLESS CESAREAN & TAP BLOCK",
      headline: "ولادة آمنة وهادئة دون الإحساس بآلام ما بعد الجراحة",
      desc: "تقنيات تسكين عصبية متطورة تمكنكِ من الحركة والرضاعة الطبيعية بعد ساعات قليلة من العملية دون أي معاناة.",
      image: "/images/mother-newborn.jpg",
      points: [
        "حقن مسكن العصب الجداري (TAP Block) يدوم 48 - 72 ساعة بأمان كامل",
        "مضخة التسكين الذاتي المبرمجة إلكترونياً (PCA Pump)",
        "خياطة تجميلية دقيقة تذوب ذاتياً دون ترك أي ندبات ظاهرة",
        "رعاية مكثفة لحالات الحمل الحرج وتسمم وسكر الحمل والتوائم",
      ],
      icon: Heart,
    },
    {
      id: "gynecology",
      title: "صحة المرأة وجراحات المناظير",
      code: "MINIMALLY INVASIVE SURGERY",
      headline: "علاج اضطرابات الدورة وجراحات المناظير الدقيقة",
      desc: "حلول علاجية وتدخلات طفيفة لعلاج الأورام الليفية وأكياس المبيض والنزيف الرحمي مع أسرع فترة نقاهة ممكنة.",
      image: "/images/clinic-lounge.jpg",
      points: [
        "استئصال اللحميات والأورام الليفية وأكياس المبيض بمنظار البطن",
        "منظار الرحم التشخيصي والجراحي لعلاج الحواجز والالتصاقات",
        "تركيب اللولب الهرموني وموانع الحمل وكبسولة تحت الجلد",
        "الفحص الدوري الشامل ومسحة عنق الرحم (Pap Smear)",
      ],
      icon: Sparkles,
    },
  ];

  const current = services[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section id="services" className="py-20 sm:py-28 relative overflow-hidden bg-zinc-950">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-right max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-rose-300 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5 text-rose-500" />
              <span>PRECISION CLINICAL SPECIALTIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              تخصصات دقيقة ورعاية متكاملة
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
              تطبيق أعلى المعايير الطبية بأحدث أجهزة السونار المتقدمة وتقنيات الولادة والإخصاب، لمنح كل أم الثقة والأمان.
            </p>
          </div>

          <a
            href="#booking"
            className="self-start md:self-auto flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-zinc-900 border border-white/10 hover:border-white/20 text-white text-xs font-bold transition-all hover:bg-white/5"
          >
            <span>حجز استشارة لهذا التخصص</span>
            <ArrowLeft className="w-4 h-4 text-rose-500" />
          </a>
        </div>

        {/* Interactive Spring Tabs with Framer Motion layoutId */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-10">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={srv.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`relative p-4 rounded-2xl text-right transition-all cursor-pointer border ${
                  isActive
                    ? "border-rose-500/50 bg-zinc-900/90 text-white shadow-xl shadow-rose-500/10"
                    : "border-white/5 bg-zinc-900/30 text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-rose-500/15 via-rose-500/5 to-transparent border border-rose-500/40 -z-0 pointer-events-none"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <div className="relative z-10 flex items-center gap-3">
                  <div
                    className={`p-2 rounded-xl transition-colors shrink-0 ${
                      isActive ? "bg-rose-500 text-white" : "bg-white/5 text-zinc-400"
                    }`}
                  >
                    <Icon className="w-4 h-4" strokeWidth={1.75} />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-xs sm:text-sm font-bold truncate">
                      {srv.title}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 truncate">
                      {srv.code}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Asymmetric Bento Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <SpotlightCard className="p-6 sm:p-10 border-white/10 bg-zinc-950/80 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Text Content & Clinical Points */}
                <div className="lg:col-span-7 text-right">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      {current.code}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-3xl font-black text-white mb-3 leading-snug">
                    {current.headline}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    {current.desc}
                  </p>

                  {/* Bullet Checklist Matrix */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {current.points.map((pt, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-2xl bg-zinc-900/60 border border-white/5 text-xs text-zinc-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Booking Link directed smoothly to the unified #booking console */}
                  <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs">
                    <a
                      href="#booking"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-bold transition-all shadow-lg shadow-rose-600/20"
                    >
                      <CurrentIcon className="w-4 h-4" />
                      <span>حجز موعد لهذا التخصص في أقرب فرع لكي</span>
                      <ArrowLeft className="w-4 h-4" />
                    </a>
                    <span className="text-zinc-500 font-mono">
                      مصر الجديدة • التجمع الخامس
                    </span>
                  </div>
                </div>

                {/* Real High-Resolution Medical Photography Showcase */}
                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/3] shadow-2xl group">
                    <img
                      src={current.image}
                      alt={current.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95 contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                    
                    <div className="absolute bottom-4 inset-x-4 p-3 rounded-2xl bg-zinc-950/80 backdrop-blur-xl border border-white/10 text-right">
                      <span className="text-xs font-bold text-white block">
                        {current.title}
                      </span>
                      <span className="text-[10px] text-zinc-400 font-mono">
                        معايير استشاري كلية الطب – جامعة عين شمس
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </SpotlightCard>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

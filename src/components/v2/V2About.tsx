"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Microscope,
  Stethoscope,
  Heart,
  Award,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import SpotlightCard from "./SpotlightCard";

export default function V2About() {
  const credentials = [
    {
      title: "دكتوراه كلية الطب – جامعة عين شمس",
      desc: "استشاري أمراض النساء والتوليد والعقم وتأخر الإنجاب.",
      icon: GraduationCap,
      code: "ACADEMIC MD / PHD",
    },
    {
      title: "استشاري طب الجنين والتشخيص المبكر",
      desc: "فحص تفاصيل الجنين (Anomaly Scan) والدوبلر وسونار 4D/5D.",
      icon: Microscope,
      code: "FETAL MEDICINE",
    },
    {
      title: "استشاري الحقن المجهري وأطفال الأنابيب",
      desc: "بروتوكولات علاج فردية متقدمة وعلاج تكيس المبايض (PCOS).",
      icon: Stethoscope,
      code: "REPRODUCTIVE CARE",
    },
    {
      title: "الولادة القيصرية التجميلية بدون ألم",
      desc: "تقنية TAP Block ومضخة التسكين الذاتي لولادة آمنة وهادئة.",
      icon: Heart,
      code: "PAINLESS SURGERY",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative overflow-hidden bg-zinc-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Clinical Workstation Imagery (Zero Doctor Portrait Faces) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] sm:aspect-square group">
              <img
                src="/images/doctor-desk.jpg"
                alt="بيئة العيادة والاستشارات الطبية المتخصصة"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              
              <div className="absolute bottom-6 inset-x-6 text-right">
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full inline-block mb-2">
                  CLINICAL EXCELLENCE
                </span>
                <h3 className="text-lg font-bold text-white">بيئة علاجية هادئة ومتطورة</h3>
                <p className="text-xs text-zinc-400 mt-1">
                  استماع وافٍ وفحص دقيق لكل حالة في خصوصية تامة
                </p>
              </div>
            </div>
          </div>

          {/* Academic & Professional Credentials */}
          <div className="lg:col-span-7 text-right order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-rose-300 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5 text-rose-500" />
              <span>ACADEMIC FOUNDATION & CLINICAL INTEGRITY</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-4">
              خبرة أكاديمية موثوقة ورعاية تمنحكِ الطمأنينة
            </h2>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-8 max-w-2xl">
              تجمع د. دينا مصطفى إبراهيم بين المكانة الأكاديمية كاستشاري بكلية الطب جامعة عين شمس، وبين الحرص الشديد على توفير وقت كافٍ لكل مريضة وشرح كافة تفاصيل التشخيص والعلاج بمنتهى الشفافية والود.
            </p>

            {/* 4 Spotlight Credential Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {credentials.map((c, i) => {
                const Icon = c.icon;
                return (
                  <SpotlightCard key={i} className="p-4 sm:p-5 text-right border-white/10 bg-zinc-900/50">
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="p-2.5 rounded-xl bg-white/5 text-rose-400 border border-white/5">
                        <Icon className="w-4 h-4" strokeWidth={1.75} />
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500 tracking-wider">
                        {c.code}
                      </span>
                    </div>
                    <h3 className="font-bold text-white text-xs sm:text-sm mb-1">
                      {c.title}
                    </h3>
                    <p className="text-[11px] text-zinc-400 leading-snug">
                      {c.desc}
                    </p>
                  </SpotlightCard>
                );
              })}
            </div>

            {/* Reassurance Location Ribbon */}
            <div className="p-4 rounded-2xl bg-zinc-900/40 border border-white/5 flex items-center justify-between text-xs text-zinc-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>مقر مصر الجديدة (السبع عمارات) • مقر التجمع الخامس (شارع التسعين)</span>
              </span>
              <a
                href="#booking"
                className="font-bold text-white hover:text-rose-400 transition-colors"
              >
                اختيار الفرع والحجز ↑
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

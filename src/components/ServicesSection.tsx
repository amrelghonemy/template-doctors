"use client";

import React, { useState } from "react";
import {
  Baby,
  Activity,
  Heart,
  Sparkles,
  Check,
  MessageCircle,
  Shield,
  ArrowLeft,
} from "lucide-react";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const services = [
    {
      id: "fetal-medicine",
      title: "طب الجنين والسونار 4D",
      badge: "تخصص دقيق بجامعة عين شمس",
      icon: Baby,
      image: "/images/ultrasound-scan.jpg",
      headline: "فحص تفصيلي شامل لأعضاء الجنين والكشف المبكر عن التشوهات",
      desc: "فحص دقيق لمخ وقلب وأطراف الجنين بأحدث أجهزة السونار المتطورة والدوبلر.",
      points: [
        "فحص تفاصيل الجنين (Anomaly Scan) في الأسبوع 18 - 22",
        "قياس سماكة الرقبة والكشف المبكر عن متلازمة داون (NT Scan)",
        "أشعة الدوبلر لمتابعة تدفق الدم للمشيمة ونقص نمو الجنين",
        "صور وفيديوهات تذكارية واضحة لملامح الجنين وسونار 4D",
      ],
      whatsappMsg: "السلام عليكم د. دينا، أود حجز موعد لفحص تفاصيل الجنين (Anomaly Scan).",
    },
    {
      id: "icsi",
      title: "الحقن المجهري وتأخر الإنجاب",
      badge: "بروتوكولات علاج فردية",
      icon: Activity,
      image: "/images/ultrasound-monitor.jpg",
      headline: "خطة علاجية مخصصة للزوجين لتحقيق حلم الأمومة",
      desc: "تقييم شامل للزوجين واختيار أنسب بروتوكول لزيادة فرص نجاح الحمل بأمان.",
      points: [
        "الحقن المجهري وأطفال الأنابيب (ICSI / IVF) بأحدث التقنيات",
        "علاج متلازمة تكيس المبايض (PCOS) وتنشيط التبويض المحسوب",
        "علاج حالات الفشل المتكرر لانغراس الأجنة",
        "التلقيح الصناعي (IUI) والفحوصات الدقيقة للزوجين",
      ],
      whatsappMsg: "السلام عليكم د. دينا، أود استشارة طبية بخصوص الحقن المجهري وتأخر الحمل.",
    },
    {
      id: "maternity",
      title: "الولادة القيصرية بدون ألم",
      badge: "تقنية TAP Block وخياطة تجميلية",
      icon: Heart,
      image: "/images/mother-newborn.jpg",
      headline: "ولادة آمنة وهادئة دون الإحساس بآلام ما بعد الجراحة",
      desc: "تقنيات تسكين عصبية متطورة تمكنكِ من الحركة والرضاعة الطبيعية سريعاً.",
      points: [
        "حقن مسكن العصب الجداري (TAP Block) يدوم 48 - 72 ساعة",
        "مضخة التسكين الذاتي المبرمجة (PCA Pump)",
        "خياطة تجميلية دقيقة تذوب ذاتياً دون ترك ندبات ظاهرة",
        "متابعة الحمل الحرج وتسمم وسكر الحمل والتوائم",
      ],
      whatsappMsg: "السلام عليكم د. دينا، أود الاستفسار عن باقات الولادة القيصرية بدون ألم.",
    },
    {
      id: "gynecology",
      title: "صحة المرأة وجراحات المناظير",
      badge: "مناظير وأحدث وسائل تنظيم الأسرة",
      icon: Sparkles,
      image: "/images/clinic-lounge.jpg",
      headline: "علاج اضطرابات الدورة والنزيف وجراحات المناظير",
      desc: "حلول علاجية وتدخلات طفيفة لعلاج الأورام الليفية والأكياس وتركيب موانع الحمل.",
      points: [
        "استئصال اللحميات والأورام الليفية وأكياس المبيض بالمنظار",
        "علاج اضطرابات الهرمونات والنزيف الرحمي غير المبرر",
        "تركيب اللولب الهرموني وموانع الحمل وكبسولة تحت الجلد",
        "الفحص الدوري الشامل وعينة عنق الرحم (Pap Smear)",
      ],
      whatsappMsg: "السلام عليكم د. دينا، أود حجز كشف أمراض نساء واستشارة طبية.",
    },
  ];

  const current = services[activeTab];

  return (
    <section id="services" className="py-14 sm:py-20 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Minimal) */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            تخصصات دقيقة ورعاية متكاملة
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            أعلى معايير الأمان الطبي بأحدث أجهزة السونار وتقنيات الولادة والإخصاب.
          </p>
        </div>

        {/* 4 Interactive Service Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={srv.id}
                onClick={() => setActiveTab(idx)}
                className={`p-3.5 sm:p-4 rounded-2xl text-right transition-all border flex items-center gap-3 ${
                  isActive
                    ? "bg-white border-rose-400 shadow-md ring-2 ring-rose-500/10 text-slate-900 font-bold"
                    : "bg-white/80 border-slate-200 text-slate-600 hover:bg-white"
                }`}
              >
                <div
                  className={`p-2 rounded-xl flex-shrink-0 ${
                    isActive ? "bg-rose-700 text-white" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm truncate">{srv.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Service Card with REAL PHOTO */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-rose-100 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Service Text (Concise & Scannable) */}
            <div className="lg:col-span-7 text-right">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 leading-snug">
                {current.headline}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                {current.desc}
              </p>

              {/* Bullet Points with Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {current.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-800">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Service Information Note */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>تتوفر الخدمة في فرعي مصر الجديدة والتجمع الخامس</span>
                <span>للاستفسار الهاتفي: <a href="tel:01021107881" className="font-bold text-slate-800 hover:text-rose-700" dir="ltr">010 2110 7881</a></span>
              </div>
            </div>

            {/* Real Service Photo Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-slate-100 aspect-[4/3]">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 right-3 left-3 text-right text-white">
                  <span className="text-[11px] font-bold text-rose-200 block">
                    {current.title}
                  </span>
                  <span className="text-xs font-semibold text-white">
                    عيادة د. دينا مصطفى إبراهيم
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

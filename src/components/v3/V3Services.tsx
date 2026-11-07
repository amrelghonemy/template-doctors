"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Scan, Baby, Microscope } from "lucide-react";

type Service = {
  id: string;
  tab: string;
  icon: React.ElementType;
  color: string;
  gradFrom: string;
  gradTo: string;
  iconBg: string;
  tabBg: string;
  tabActiveBg: string;
  title: string;
  description: string;
  bullets: string[];
};

const services: Service[] = [
  {
    id: "pregnancy",
    tab: "متابعة الحمل",
    icon: Heart,
    color: "text-rose-500",
    gradFrom: "from-rose-50",
    gradTo: "to-amber-50",
    iconBg: "bg-gradient-to-br from-rose-100 to-rose-200",
    tabBg: "text-rose-600 bg-rose-50 border-rose-200",
    tabActiveBg: "bg-rose-500 text-white border-rose-500",
    title: "متابعة الحمل الطبيعي والمعقد",
    description:
      "كل حمل له قصة فريدة. نرافقكِ من بداية الرحلة حتى لقاء طفلك بكل اطمئنان وعناية.",
    bullets: [
      "متابعة دورية لصحة الأم والجنين في كل مرحلة",
      "تقييم مبكر لمخاطر الحمل والتدخل في الوقت المناسب",
      "إرشادات تغذية وأسلوب حياة تناسب كل أم",
      "خطة ولادة آمنة تراعي وضع كل حالة بشكل فردي",
    ],
  },
  {
    id: "fetal",
    tab: "طب الجنين",
    icon: Scan,
    color: "text-amber-600",
    gradFrom: "from-amber-50",
    gradTo: "to-rose-50",
    iconBg: "bg-gradient-to-br from-amber-100 to-amber-200",
    tabBg: "text-amber-600 bg-amber-50 border-amber-200",
    tabActiveBg: "bg-amber-500 text-white border-amber-500",
    title: "طب الجنين والأجنة",
    description:
      "بأحدث أجهزة السونار والموجات فوق الصوتية، نتأكد أن طفلك يكبر بكل صحة وسلامة.",
    bullets: [
      "سونار ثلاثي وثلاثي الأبعاد بدقة عالية",
      "كشف مبكر عن أي تشوهات جنينية محتملة",
      "تقييم نمو الجنين ومستوى السائل الأمنيوسي",
      "دوبلر الأوعية لرصد تدفق الدم بين الأم والجنين",
    ],
  },
  {
    id: "delivery",
    tab: "التوليد والقيصري",
    icon: Baby,
    color: "text-stone-600",
    gradFrom: "from-stone-50",
    gradTo: "to-rose-50",
    iconBg: "bg-gradient-to-br from-stone-100 to-stone-200",
    tabBg: "text-stone-600 bg-stone-50 border-stone-200",
    tabActiveBg: "bg-stone-600 text-white border-stone-600",
    title: "التوليد والعمليات القيصرية",
    description:
      "لحظة الولادة مقدسة — نحرص على أن تكون آمنة ومحاطة بالدفء والاحترافية في آنٍ واحد.",
    bullets: [
      "إدارة الولادة الطبيعية مع دعم كامل للأم",
      "العمليات القيصرية المخططة والطارئة بأعلى معايير السلامة",
      "تخفيف الألم وإدارة مرحلة ما بعد الولادة",
      "متابعة دقيقة لمرحلة النفاس وتعافي الأم",
    ],
  },
  {
    id: "gynecology",
    tab: "أمراض النساء",
    icon: Microscope,
    color: "text-rose-600",
    gradFrom: "from-rose-50",
    gradTo: "to-stone-50",
    iconBg: "bg-gradient-to-br from-rose-100 to-pink-200",
    tabBg: "text-rose-600 bg-rose-50 border-rose-200",
    tabActiveBg: "bg-rose-600 text-white border-rose-600",
    title: "أمراض النساء والمناظير",
    description:
      "صحة المرأة لا تقتصر على الحمل — نهتم بكل جانب من جوانب صحتك الأنثوية باهتمام وخصوصية تامة.",
    bullets: [
      "تشخيص وعلاج أمراض المبايض والرحم",
      "جراحات المنظار بأقل تدخل وأسرع تعافٍ",
      "علاج اضطرابات الدورة الشهرية وانقطاع الطمث",
      "الكشف المبكر ومتابعة صحة عنق الرحم",
    ],
  },
];

export default function V3Services() {
  const [activeId, setActiveId] = useState<string>("pregnancy");
  const activeService = services.find((s) => s.id === activeId) ?? services[0];

  return (
    <section id="services" className="py-24 px-4 linen-bg">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-rose-500 bg-rose-50 border border-rose-200 rounded-full px-4 py-1.5 mb-4">
            خدماتنا الطبية
          </span>
          <h2 className="text-4xl font-bold text-stone-800 mb-4">
            رعاية{" "}
            <span className="hand-underline text-rose-500">شاملة</span>
            {" "}في كل خطوة
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            من اللحظة الأولى حتى ما بعد الولادة — نقدم رعاية طبية متكاملة بروح إنسانية دافئة
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {services.map((s) => {
            const Icon = s.icon;
            const isActive = s.id === activeId;
            return (
              <button
                key={s.id}
                onClick={() => setActiveId(s.id)}
                className={`
                  flex items-center gap-2 px-5 py-2.5 rounded-full border font-medium text-sm
                  transition-all duration-300 cursor-pointer
                  ${isActive ? s.tabActiveBg : s.tabBg + " hover:opacity-80"}
                `}
              >
                <Icon strokeWidth={1.5} className="w-4 h-4" />
                {s.tab}
              </button>
            );
          })}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`warm-card rounded-3xl overflow-hidden`}
          >
            <div className={`bg-gradient-to-br ${activeService.gradFrom} ${activeService.gradTo} p-10 lg:p-14`}>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
                {/* Icon + Title */}
                <div className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-right gap-5">
                  <div
                    className={`w-24 h-24 rounded-[2rem] ${activeService.iconBg} flex items-center justify-center shadow-md`}
                  >
                    {React.createElement(activeService.icon, {
                      strokeWidth: 1.5,
                      className: `w-12 h-12 ${activeService.color}`,
                    })}
                  </div>
                  <h3 className="text-2xl font-bold text-stone-800 leading-snug">
                    {activeService.title}
                  </h3>
                  <p className="text-stone-600 text-base leading-relaxed">
                    {activeService.description}
                  </p>

                  <a
                    href="#booking"
                    className="mt-2 inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg text-sm"
                  >
                    احجزي موعدك الآن
                  </a>
                </div>

                {/* Bullets */}
                <div className="lg:col-span-3 flex flex-col gap-4 pt-2">
                  {activeService.bullets.map((bullet, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                      className="warm-card rounded-2xl px-6 py-4 flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 mt-0.5 w-7 h-7 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center">
                        <span className="text-amber-600 text-xs font-bold">{i + 1}</span>
                      </div>
                      <p className="text-stone-700 text-sm leading-relaxed pt-0.5">{bullet}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

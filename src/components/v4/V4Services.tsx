"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, bounce: 0, duration: 0.6, delay: i * 0.1 },
  }),
};

type ServiceId = "maternity" | "fetal" | "delivery" | "gynecology";

interface Service {
  id: ServiceId;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
}

const services: Service[] = [
  {
    id: "maternity",
    label: "متابعة الحمل",
    title: "متابعة الحمل والرعاية الدورية",
    description:
      "برنامج متابعة دورية دقيق يغطي كافة أسابيع الحمل، يشمل تقييم مؤشرات نمو الجنين وصحة الأم بانتظام، مع الكشف المبكر والوقائي عن أي مضاعفات صحية.",
    bullets: [
      "جدول زيارات منتظم مع فحص موجات صوتية في كل مرحلة",
      "بروتوكول متخصص لحالات الحمل الحرج ومرتفع الخطورة",
      "إرشادات طبية وغذائية مخصصة لكل حالة",
    ],
    image: "/images/pregnant-consultation.jpg",
    imageAlt: "استشارة ومتابعة الحمل مع الطبيبة داخل العيادة",
  },
  {
    id: "fetal",
    label: "طب الجنين",
    title: "طب الجنين والسونار التفصيلي",
    description:
      "فحوصات متقدمة لتقييم صحة وتشريح الجنين باستخدام أحدث أجهزة السونار ثلاثي ورباعي الأبعاد، بإشراف استشاري متخصص في طب الجنين.",
    bullets: [
      "السونار التشريحي المفصل (المورفولوجي) لسلامة الأعضاء",
      "فحص الدوبلر لقياس تدفق الدم للجنين والمشيمة",
      "التشخيص المبكر الدقيق لمتابعة نمو الجنين وسلامته",
    ],
    image: "/images/ultrasound-scan.jpg",
    imageAlt: "سونار الجنين",
  },
  {
    id: "delivery",
    label: "التوليد والقيصرية",
    title: "الولادة الطبيعية والقيصرية",
    description:
      "إشراف طبي شامل على خطة الولادة باختيار الإجراء الأنسب والآمن للأم والمولود، داخل أفضل المستشفيات المجهزة ووفق أعلى معايير السلامة الطبية.",
    bullets: [
      "تقييم إكلينيكي مسبق لاختيار أنسب وأسلم سبل الولادة",
      "إدارة حالات الولادة الحرجة والقيصريات المتكررة",
      "رعاية ومتابعة دقيقة للأم خلال فترة ما بعد الولادة",
    ],
    image: "/images/mother-newborn.jpg",
    imageAlt: "الأم والمولود",
  },
  {
    id: "gynecology",
    label: "أمراض النساء",
    title: "أمراض النساء والصحة الإنجابية",
    description:
      "تشخيص وعلاج متكامل لمختلف مشكلات الصحة الإنجابية وأمراض النساء، مع اعتماد أحدث البرتوكولات العلاجية والفحوصات الوقائية الدورية.",
    bullets: [
      "علاج متلازمة تكيس المبايض والاضطرابات الهرمونية",
      "متابعة وعلاج الأورام الليفية وأكياس المبيض",
      "الفحوصات الدورية الوقائية لصحة المرأة العامة",
    ],
    image: "/images/clinic-lounge.jpg",
    imageAlt: "عيادة أمراض النساء",
  },
];

export default function V4Services() {
  const [activeId, setActiveId] = useState<ServiceId>("maternity");

  const active = services.find((s) => s.id === activeId)!;

  return (
    <section id="services" className="py-24 paper-bg">
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
          className="text-xs font-semibold uppercase tracking-widest mb-10"
          style={{ color: "var(--text-muted)" }}
        >
          خدماتنا الطبية
        </motion.p>

        {/* Layout: tabs left (3 col), content right (9 col) on desktop */}
        <div className="flex flex-col md:grid md:grid-cols-12 gap-10">

          {/* Tab list */}
          <motion.div
            className="md:col-span-3 flex md:flex-col gap-1"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            {/* Mobile: horizontal scroll */}
            <div className="flex md:flex-col gap-1 overflow-x-auto pb-2 md:pb-0 w-full">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveId(service.id)}
                  className="relative shrink-0 md:shrink text-right px-4 py-3 rounded-xl font-semibold text-sm transition-colors duration-150"
                  style={{
                    color: activeId === service.id ? "var(--accent-rose)" : "var(--text-muted)",
                    background: activeId === service.id ? "var(--bg-blush)" : "transparent",
                    textAlign: "right",
                  }}
                >
                  {service.label}
                  {/* Active indicator */}
                  {activeId === service.id && (
                    <motion.span
                      layoutId="service-indicator"
                      className="absolute right-0 top-1/4 bottom-1/4 w-0.5 rounded-full"
                      style={{ background: "var(--accent-rose)" }}
                      transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <div className="md:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
              >
                {/* Text */}
                <div className="flex flex-col gap-5">
                  <h3
                    className="text-2xl font-extrabold"
                    style={{ color: "var(--text-ink)", letterSpacing: "-0.01em" }}
                  >
                    {active.title}
                  </h3>
                  <p
                    className="text-base leading-loose"
                    style={{ color: "var(--text-muted)", lineHeight: 1.9 }}
                  >
                    {active.description}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {active.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: "var(--accent-rose)" }}
                          aria-hidden="true"
                        />
                        <span
                          className="text-sm font-medium"
                          style={{ color: "var(--text-ink)" }}
                        >
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Text link CTA */}
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2 text-sm font-semibold mt-2 group"
                    style={{ color: "var(--accent-rose)" }}
                  >
                    حجز موعد استشارة
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 transition-transform duration-150 group-hover:-translate-x-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.293 14.707a1 1 0 010-1.414L12.586 10 9.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>

                {/* Editorial image */}
                <div
                  className="relative overflow-hidden rounded-2xl"
                  style={{ boxShadow: "0 16px 48px rgba(28,22,18,0.1)" }}
                >
                  <Image
                    src={active.image}
                    alt={active.imageAlt}
                    width={420}
                    height={340}
                    className="w-full object-cover"
                    style={{ aspectRatio: "4/3" }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

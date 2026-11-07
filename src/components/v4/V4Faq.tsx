"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, bounce: 0, duration: 0.6, delay: i * 0.1 },
  }),
};

const faqs = [
  {
    id: 1,
    question: "كم تستغرق الزيارة وهل يتوفر وقت كافٍ لمناقشة كافة التساؤلات؟",
    answer:
      "تُخصص في العيادة مدة كافية لكل كشف دون استعجال، لمراجعة التاريخ الطبي بعناية، وإجراء الفحص والموجات الصوتية بدقة، ومناقشة كافة استفساراتكِ الطبية حتى تكون كافة تفاصيل الخطة العلاجية واضحة ومطمئنة تماماً.",
  },
  {
    id: 2,
    question: "كيف يمكنني حجز موعد في العيادة؟",
    answer:
      "يمكنكِ اختيار الفرع الأنسب لكِ (مصر الجديدة أو التجمع الخامس) من أعلى الصفحة والضغط على زر الحجز المباشر عبر واتساب. يتولى فريق العيادة تنسيق وتأكيد موعد الكشف الأنسب لجدولكِ.",
  },
  {
    id: 3,
    question: "هل توفر العيادة متابعة متخصصة لحالات الحمل عالي الخطورة؟",
    answer:
      "نعم، تتخصص د. دينا مصطفى في طب الجنين ومتابعة حالات الحمل الحرج كحالات سكر وضغط الحمل، والحمل بتوأم، ومشاكل المشيمة، والولادات القيصرية السابقة، مع تطبيق بروتوكول متابعة مكثف ودقيق لضمان أمان وسلامة الأم والجنين.",
  },
  {
    id: 4,
    question: "ما الفرق بين فرعي مصر الجديدة والتجمع الخامس؟",
    answer:
      "يقدم كلا الفرعين نفس التجهيزات والخدمات الطبية بالكامل. فرع مصر الجديدة (٧٧ شارع النزهة، ميدان السبع عمارات) يعمل أربعة أيام أسبوعياً مساءً، وفرع التجمع الخامس (عيادات Bless، شارع التسعين الشمالي) يعمل يومي السبت والاثنين مساءً.",
  },
  {
    id: 5,
    question: "ما أهمية الفحص بالسونار التفصيلي للجنين ومتى يتم إجراؤه؟",
    answer:
      "فحص السونار التشريحي التفصيلي (المورفولوجي) يُجرى عادةً بين الأسبوعين ١٨ و٢٢ من الحمل لتقييم سلامة تشريح أعضاء الجنين ونموه بدقة، إلى جانب فحص الدوبلر للاطمئنان على تدفق الدم عبر الحبل السري والمشيمة.",
  },
];

export default function V4Faq() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 paper-bg">
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
          الأسئلة الشائعة
        </motion.p>

        {/* FAQ rows */}
        <div>
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.id}
              className="faq-row"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx + 1}
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex items-center justify-between gap-4 py-5 text-right"
                aria-expanded={openId === faq.id}
              >
                <span
                  className="text-base font-semibold flex-1"
                  style={{ color: "var(--text-ink)" }}
                >
                  {faq.question}
                </span>
                <motion.svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-5 h-5 shrink-0"
                  style={{ color: "var(--accent-rose)" }}
                  animate={{ rotate: openId === faq.id ? 45 : 0 }}
                  transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </motion.svg>
              </button>

              <AnimatePresence initial={false}>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                    style={{ overflow: "hidden" }}
                  >
                    <p
                      className="pb-6 text-base leading-loose"
                      style={{ color: "var(--text-muted)", lineHeight: 1.9 }}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

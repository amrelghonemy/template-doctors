"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "ما هي تخصصات الدكتورة دينا؟",
    a: "د. دينا مصطفى إبراهيم استشارية في طب النساء والتوليد وطب الجنين، وحاصلة على دكتوراه من كلية الطب جامعة عين شمس. تتخصص في متابعة الحمل الطبيعي والمعقد، وطب الجنين والسونار المتقدم، والتوليد والعمليات القيصرية، وجراحات المنظار، وأمراض النساء العامة.",
  },
  {
    q: "كيف أحجز موعداً؟",
    a: "يمكنك حجز موعدك بسهولة عبر واتساب مباشرة من خلال زر الحجز في أعلى الصفحة. سيتواصل معك فريقنا لتأكيد الموعد المناسب في الفرع الذي يناسبك — مصر الجديدة أو التجمع الخامس.",
  },
  {
    q: "هل تقبلون حالات الحمل الخطر؟",
    a: "نعم بالتأكيد. تتمتع الدكتورة دينا بخبرة واسعة في متابعة حالات الحمل عالي الخطورة، بما فيها الحمل المتعدد، والحمل مع أمراض مزمنة كالسكر وضغط الدم، وحالات المشيمة المنزاحة، وغيرها. كل حالة تُعامَل باهتمام فردي وخطة رعاية مخصصة.",
  },
  {
    q: "ما الفرق بين الفرعين؟",
    a: "كلا الفرعين يقدمان نفس الخدمات الطبية على أعلى مستوى مع حضور الدكتورة شخصياً. فرع مصر الجديدة (هليوبوليس) يعمل السبت والأحد والاثنين والأربعاء مسائاً، بينما فرع التجمع الخامس يعمل السبت والاثنين مسائاً. اختاري ما يناسب موقعك وجدولك.",
  },
  {
    q: "هل يوجد كشف للجنين بالتفصيل؟",
    a: "نعم، تُجرى عيادة طب الجنين سونار التشريح التفصيلي (Anomaly Scan) في الأسبوع ١٨–٢٢، كما يتوفر السونار ثلاثي الأبعاد وثلاثي الأبعاد المتحرك (4D) لمتابعة نمو الجنين بشكل دقيق واطمئنان على صحته في كل مراحل الحمل.",
  },
];

function FaqItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      viewport={{ once: true }}
      className="warm-card rounded-2xl overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-7 py-5 text-right cursor-pointer group"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-xs font-bold text-rose-400">
            {index + 1}
          </span>
          <span className="text-stone-800 font-semibold text-base leading-snug text-right">
            {item.q}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <ChevronDown
            strokeWidth={1.5}
            className={`w-5 h-5 transition-colors duration-300 ${
              isOpen ? "text-rose-500" : "text-stone-400 group-hover:text-rose-400"
            }`}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-7 pb-6">
              <div className="border-t border-stone-100 pt-4">
                <p className="text-stone-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function V3Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 linen-bg">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 mb-4">
            الأسئلة الشائعة
          </span>
          <h2 className="text-4xl font-bold text-stone-800 mb-4">
            كل ما تودين{" "}
            <span className="hand-underline text-rose-500">معرفته</span>
          </h2>
          <p className="text-stone-500 text-lg">
            أجوبة صادقة على أكثر الأسئلة التي تطرحها مريضاتنا
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

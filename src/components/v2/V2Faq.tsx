"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

export default function V2Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "ما هو الوقت الأنسب لإجراء فحص تشوهات الجنين التفصيلي (Anomaly Scan)؟",
      a: "الفترة المثالية والموصى بها أكاديمياً هي بين الأسبوع 18 والأسبوع 22 من الحمل. خلال هذا التوقيت تكون كافة أعضاء الجنين (المخ، القلب، الكلى، العمود الفقري والأطراف) قد اكتملت بالحجم المناسب للفحص الميكروسكوبي الدقيق وسونار 4D.",
    },
    {
      q: "كيف تتم الولادة القيصرية بدون ألم مع د. دينا مصطفى؟",
      a: "نعتمد بروتوكولاً متكاملاً متعدد المستويات يبدأ بحقن مسكن العصب الجداري (TAP Block) الموجه بالسونار أثناء الجراحة، والذي يمنع إشارات الألم لمدة 48 إلى 72 ساعة، إلى جانب مضخة التسكين الذاتي الإلكترونية (PCA) وخياطة تجميلية خفية تذوب ذاتياً دون ترك أثر.",
    },
    {
      q: "ما هي خطوات التحضير لعملية الحقن المجهري (ICSI)؟",
      a: "تبدأ بفحص تقييمي شامل للزوجين يشمل تحاليل مخزون المبيض (AMH) وسونار ثلاثي الأبعاد للرحم، ثم تصميم بروتوكول تنشيط فردي مخصص لحالتكِ بدقة لتجنب فرط التنشيط وتحقيق أعلى جودة ممكنة للبويضات والأجنة.",
    },
    {
      q: "هل فحص السونار 4D/5D آمن تماماً على صحة الجنين؟",
      a: "نعم، الموجات فوق الصوتية آمنة 100% ولا تعتمد على أي إشعاع ضار. تلتزم د. دينا مصطفى بالمعايير العالمية للسلامة الطبية (ALARA Principle) مع منح وقت كافٍ لفحص كل عضو والاطمئنان عليه.",
    },
    {
      q: "أين تقع عيادات د. دينا مصطفى وما هي مواعيد العمل؟",
      a: "لدينا فرعان مجهزان: فرع مصر الجديدة في 77 شارع النزهة بميدان السبع عمارات (أيام السبت والأحد والاثنين والأربعاء مساءً)، وفرع التجمع الخامس في عيادات Bless بشارع التسعين الشمالي (أيام السبت والاثنين).",
    },
    {
      q: "كيف يمكنني حجز موعد استشارة مع دكتورة دينا؟",
      a: "يمكنكِ الحجز مباشرة وفوراً باختيار الفرع الأقرب لكي (مصر الجديدة أو التجمع الخامس) من صندوق الحجز التفاعلي بأعلى الموقع، أو الاتصال بهاتف العيادة المباشر 01021107881.",
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 relative overflow-hidden bg-zinc-950/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-rose-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>CLINICAL KNOWLEDGE & FREQUENT INQUIRIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            إجابات وافية لتساؤلاتكِ
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            كل ما يهمكِ معرفته حول فحوصات طب الجنين، بروتوكولات الولادة بدون ألم، وخطوات الحقن المجهري.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <SpotlightCard
                key={idx}
                className="border-white/10 bg-zinc-900/60 shadow-lg text-right overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-right cursor-pointer gap-4 transition-colors hover:bg-white/5"
                >
                  <span className="font-bold text-white text-xs sm:text-sm leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-rose-400 bg-rose-500/10" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </SpotlightCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}

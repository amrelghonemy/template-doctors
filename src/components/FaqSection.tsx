"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, MessageCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "متى يتم إجراء فحص تشوهات الجنين التفصيلي (Anomaly Scan)؟ وما أهميته؟",
      a: "يُجرى الفحص التفصيلي بدقة بين الأسبوع 18 والأسبوع 22 من الحمل. وتكمن أهميته في الاطمئنان الشامل على تكوين كافة أعضاء الجنين الداخلية، مثل تجاويف المخ، غرف القلب وصماماته، الكلى والمثانة، العمود الفقري والأطراف، وسلامة موقع المشيمة وكمية السائل الأمينوسي، مما يتيح التدخل المبكر عند الحاجة.",
    },
    {
      q: "ما هو الفرق بين كيس المبيض وتكيس المبايض (PCOS)؟",
      a: "الكيس غالباً ما يكون كيساً وظيفياً مفرداً يمتلئ بالسوائل ويتلاشى غالباً تلقائياً خلال أشهر، ولا يمنع حدوث الحمل في معظم الأحوال. أما تكيس المبايض (PCOS) فهو اضطراب هرموني واستقلابي يؤدي إلى تكون حويصلات صغيرة متعددة تحت قشرة المبيض مصحوبة باضطراب في التبويض وتأخر في الدورة الشهرية، وعلاجه يعتمد على خطة متكاملة تشمل تنظيم الوزن والهرمونات وتنشيط التبويض.",
    },
    {
      q: "كيف تتم الولادة القيصرية بدون ألم؟ وهل التسكين آمن على الرضاعة الطبيعية؟",
      a: "تتم الولادة القيصرية بدون ألم من خلال حقن مسكن موضعي طويل المفعول حول الأعصاب المغذية لجدار البطن (تقنية TAP Block) بواسطة استشاري التخدير في نهاية الجراحة، بالإضافة إلى مضخة التسكين الذاتي المبرمجة (PCA). هذه الأدوية موضعية ولا تنتقل للدم بكميات تؤثر على لبن الأم، مما يتيح للأم الحركة والرضاعة الطبيعية بعد ساعات قليلة دون الشعور بآلام الجرح.",
    },
    {
      q: "متى يُنصح الزوجان باللجوء إلى الحقن المجهري (ICSI)؟",
      a: "يُنصح بالحقن المجهري في حالات: انسداد أو التصاقات قنوات فالوب، ضعف شديد في حركة أو عدد الحيوانات المنوية لدى الزوج، حالات الفشل المتكرر للتلقيح الصناعي أو التنشيط التقليدي، تقدم عمر الزوجة، أو حالات تأخر الإنجاب غير المفسر لفترة طويلة. يتم تقييم كل زوجين بشكل فردي لتحديد البروتوكول الأنسب.",
    },
    {
      q: "هل السونار ثلاثي ورباعي الأبعاد آمن على الجنين؟",
      a: "نعم، الموجات فوق الصوتية (Ultrasound) المستخدمة في السونار ثلاثي ورباعي الأبعاد آمنة تماماً وليس لها أي إشعاع أو تأثير ضار على صحة ونمو الجنين، وهي تقنية معتمدة عالمياً منذ عقود.",
    },
    {
      q: "كيف يمكنني حجز موعد كشف لتفادي فترات الانتظار الطويلة؟",
      a: "يُفضل دائماً الحجز المسبق عبر محادثة الواتساب أو الاتصال المباشر على رقم العيادة (01021107881) لتحديد موعد محدد في فرع مصر الجديدة أو التجمع الخامس، حيث يقوم طاقم التنسيق الطبي بترتيب الحالات لتسهيل الدخول وتقليل وقت الانتظار إلى أقصى حد.",
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
            الأسئلة الأكثر تكراراً حول الحمل وصحة المرأة
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            جمعنا لكِ أهم الأسئلة التي تطرحها مريضاتنا مع إجابات طبية مبسطة وموثوقة من د. دينا مصطفى.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4 text-right">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 flex justify-between items-center bg-white hover:bg-slate-50 transition-colors text-right"
                >
                  <span className="font-bold text-slate-900 text-xs sm:text-sm pl-4 leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-rose-700 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 pt-0 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

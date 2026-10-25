"use client";

import React, { useState } from "react";
import {
  Calendar,
  MessageCircle,
  Award,
  ArrowLeft,
  Star,
  CheckCircle2,
  Stethoscope,
  Heart,
  Baby,
  ShieldCheck,
} from "lucide-react";

export default function Hero() {
  const [selectedBranch, setSelectedBranch] = useState<"heliopolis" | "new_cairo">("heliopolis");

  const getBookingLink = () => {
    const branchName =
      selectedBranch === "heliopolis"
        ? "مصر الجديدة (شارع النزهة - ميدان السبع عمارات)"
        : "التجمع الخامس (عيادات Bless - شارع التسعين)";
    const text = encodeURIComponent(
      `السلام عليكم د. دينا، أود حجز موعد كشف في فرع ${branchName}.`
    );
    return `https://wa.me/201021107881?text=${text}`;
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-14 lg:pt-12 lg:pb-20 bg-gradient-to-b from-rose-50/60 via-white to-slate-50">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-200/25 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Right Column: Clean Typography & Quick Booking */}
          <div className="lg:col-span-7 flex flex-col items-start text-right">

            {/* Typography-Driven Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.25] mb-4">
              رعاية متكاملة لكِ ولجنينكِ
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 max-w-xl">
              عيادة <strong>د. دينا مصطفى إبراهيم</strong> المتخصصة في طب الجنين، السونار رباعي الأبعاد، الحقن المجهري، والولادة بدون ألم في <strong>مصر الجديدة والتجمع الخامس</strong>.
            </p>

            {/* Visual Value Chips */}
            <div className="flex flex-wrap gap-2 mb-7 text-xs font-bold text-slate-700">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-rose-100 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                فحص تفاصيل الجنين 4D
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-rose-100 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                ولادة قيصرية بدون ألم
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-rose-100 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                بروتوكولات حقن مجهري دقيقة
              </span>
            </div>

            {/* Quick Interactive Branch Selector Box */}
            <div id="booking" className="w-full max-w-lg bg-white p-4 sm:p-5 rounded-2xl shadow-lg border border-rose-100/90 scroll-mt-28">
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-rose-600" />
                  اختاري أقرب فرع لكي:
                </span>
                <span className="text-rose-700 bg-rose-50 font-semibold px-2 py-0.5 rounded-full">
                  حجز فوري عبر واتساب
                </span>
              </div>

              {/* Branch Selector Tabs */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <button
                  type="button"
                  onClick={() => setSelectedBranch("heliopolis")}
                  className={`p-2.5 rounded-xl text-right border text-xs transition-all ${
                    selectedBranch === "heliopolis"
                      ? "bg-emerald-50/70 border-emerald-500 text-slate-900 font-bold shadow-xs ring-2 ring-emerald-500/20"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>مصر الجديدة</span>
                    <div className="flex items-center gap-1 bg-emerald-100/80 px-1.5 py-0.5 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-[10px] text-emerald-800 font-bold">متاح</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500 block mt-0.5">
                    السبع عمارات (شارع النزهة)
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedBranch("new_cairo")}
                  className={`p-2.5 rounded-xl text-right border text-xs transition-all ${
                    selectedBranch === "new_cairo"
                      ? "bg-emerald-50/70 border-emerald-500 text-slate-900 font-bold shadow-xs ring-2 ring-emerald-500/20"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>التجمع الخامس</span>
                    <div className="flex items-center gap-1 bg-emerald-100/80 px-1.5 py-0.5 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-[10px] text-emerald-800 font-bold">متاح</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500 block mt-0.5">
                    عيادات Bless (التسعين)
                  </span>
                </button>
              </div>

              {/* Action Button */}
              <a
                href={getBookingLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>احجزي كشفكِ في {selectedBranch === "heliopolis" ? "مصر الجديدة" : "التجمع الخامس"}</span>
                <ArrowLeft className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Left Column: Aesthetic Editorial Artwork Matching Typography */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Editorial Frame with Aesthetic Maternity Imagery */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/5] group">
                <img
                  src="/images/maternity-warm.jpg"
                  alt="رعاية الأمومة والاطمئنان على صحة الجنين"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Soft Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                {/* Typography Card on Image */}
                <div className="absolute bottom-5 right-5 left-5 text-right text-white">
                  <div className="flex items-center gap-1 text-amber-300 text-xs mb-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-300" />
                    ))}
                    <span className="mr-1.5 text-white font-bold text-xs">4.8 / 5 (تقييم المرضى)</span>
                  </div>
                  <h3 className="text-xl font-black leading-tight text-white mb-1">
                    د. دينا مصطفى إبراهيم
                  </h3>
                  <p className="text-xs text-rose-200 font-semibold mb-0.5">
                    استشاري أمراض النساء والتوليد والعقم وطب الجنين
                  </p>
                  <p className="text-[11px] text-slate-300">
                    كلية الطب – جامعة عين شمس
                  </p>
                </div>
              </div>

              {/* Floating Stat Badge 1: Academic Authority */}
              <div className="absolute -top-3 -right-3 bg-white py-2 px-3.5 rounded-2xl shadow-xl border border-rose-100 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <span className="block text-xs font-black text-slate-900">+12 عاماً</span>
                  <span className="text-[10px] text-slate-500">خبرة سريرية وأكاديمية</span>
                </div>
              </div>

              {/* Floating Stat Badge 2: Families & Deliveries */}
              <div className="absolute -bottom-3 -left-3 bg-white py-2 px-3.5 rounded-2xl shadow-xl border border-teal-100 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center flex-shrink-0">
                  <Baby className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <span className="block text-xs font-black text-slate-900">+3,500</span>
                  <span className="text-[10px] text-slate-500">ولادة ورعاية أمومة</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

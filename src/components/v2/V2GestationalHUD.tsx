"use client";

import React, { useState } from "react";
import {
  Baby,
  Calendar,
  Sparkles,
  ArrowLeft,
  CheckCircle,
  Activity,
  Heart,
  Share2,
  Check,
} from "lucide-react";
import SpotlightCard from "./SpotlightCard";

export default function V2GestationalHUD() {
  const [lmpDate, setLmpDate] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [result, setResult] = useState<{
    edd: string;
    weeks: number;
    days: number;
    trimester: string;
    trimesterIndex: number;
    progressPercent: number;
    babySizeComparison: string;
    anomalyScanRange: string;
    ntScanRange: string;
  } | null>(null);

  const getBabySize = (weeks: number): string => {
    if (weeks <= 4) return "حبة سمسم صغيرة (بداية تكون النبض الأولي)";
    if (weeks <= 8) return "حبة توت بري (ظهور براعم اليدين والقدمين)";
    if (weeks <= 12) return "حبة ليمون (اكتمال الملامح الأساسية للأعضاء)";
    if (weeks <= 16) return "حبة أفوكادو (بداية الإحساس بحركة خفيفة)";
    if (weeks <= 20) return "ثمرة موز (الفترة المثالية لفحص التشوهات 4D التفصيلي)";
    if (weeks <= 24) return "حبة ذرة حلوة (سماع نبضات القلب بوضوح تام)";
    if (weeks <= 28) return "حبة باذنجان (تطور حاسة السمع واستجابة الجنين للأصوات)";
    if (weeks <= 32) return "ثمرة أناناس (اكتمال نمو الأظافر والجلد)";
    if (weeks <= 36) return "ثمرة شمام (استعداد الجنين للنزول في الحوض)";
    return "بطيخة صغيرة (اكتمال نمو الرئتين والجاهزية للولادة بسلام)";
  };

  const calculateDueDate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lmpDate) return;

    const lmp = new Date(lmpDate);
    if (isNaN(lmp.getTime())) return;

    const edd = new Date(lmp.getTime() + 280 * 24 * 60 * 60 * 1000);
    const today = new Date();
    const diffTime = today.getTime() - lmp.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0 || diffDays > 300) {
      alert("يرجى التأكد من إدخال تاريخ صحيح لآخر دورة شهرية.");
      return;
    }

    const weeks = Math.floor(diffDays / 7);
    const days = diffDays % 7;

    let trimester = "الثلث الأول (الأسبوع 1 - 13)";
    let trimesterIndex = 1;
    if (weeks >= 14 && weeks <= 27) {
      trimester = "الثلث الثاني (الأسبوع 14 - 27)";
      trimesterIndex = 2;
    } else if (weeks >= 28) {
      trimester = "الثلث الثالث (الأسبوع 28 - 40)";
      trimesterIndex = 3;
    }

    const progressPercent = Math.min(Math.round((weeks / 40) * 100), 100);

    const ntStart = new Date(lmp.getTime() + 11 * 7 * 24 * 60 * 60 * 1000);
    const ntEnd = new Date(lmp.getTime() + 13.5 * 7 * 24 * 60 * 60 * 1000);
    const anomalyStart = new Date(lmp.getTime() + 18 * 7 * 24 * 60 * 60 * 1000);
    const anomalyEnd = new Date(lmp.getTime() + 22 * 7 * 24 * 60 * 60 * 1000);

    const formatDate = (d: Date) =>
      d.toLocaleDateString("ar-EG", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

    setResult({
      edd: formatDate(edd),
      weeks,
      days,
      trimester,
      trimesterIndex,
      progressPercent,
      babySizeComparison: getBabySize(weeks),
      anomalyScanRange: `${formatDate(anomalyStart)} - ${formatDate(anomalyEnd)}`,
      ntScanRange: `${formatDate(ntStart)} - ${formatDate(ntEnd)}`,
    });
  };

  const copyResults = () => {
    if (!result) return;
    const text = `عمر الحمل: ${result.weeks} أسبوع | موعد الولادة المتوقع: ${result.edd} | عيادة د. دينا مصطفى (01021107881)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="due-date-calculator" className="py-20 sm:py-28 relative overflow-hidden bg-zinc-950/80">
      
      {/* Ambient Radial Lights */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE GESTATIONAL CHRONOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            حاسبة موعد الولادة وتتبع الحمل
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            أدخلي تاريخ أول يوم في آخر دورة شهرية لحساب عمر الحمل وموعد الولادة ومواعيد فحوصات طب الجنين الموصى بها.
          </p>
        </div>

        {/* Input Terminal Card */}
        <SpotlightCard className="p-6 sm:p-10 border-white/10 bg-zinc-900/60 shadow-2xl mb-8">
          <form onSubmit={calculateDueDate} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-full sm:flex-1 text-right">
                <label
                  htmlFor="lmpDate"
                  className="block text-xs font-mono font-bold text-zinc-300 mb-2"
                >
                  تاريخ أول يوم لآخر دورة شهرية (LMP):
                </label>
                <input
                  type="date"
                  id="lmpDate"
                  value={lmpDate}
                  onChange={(e) => setLmpDate(e.target.value)}
                  className="w-full p-3.5 rounded-2xl bg-zinc-950 border border-white/10 text-white font-mono text-sm focus:border-rose-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto sm:self-end py-3.5 px-8 rounded-2xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-black text-xs sm:text-sm transition-all shadow-xl shadow-rose-600/25 shrink-0 cursor-pointer"
              >
                احسبي الآن
              </button>
            </div>
          </form>

          {/* Computed Results Display */}
          {result && (
            <div className="mt-10 pt-8 border-t border-white/10 animate-in fade-in duration-300">
              
              {/* Primary Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-right">
                
                {/* EDD */}
                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-rose-500/30">
                  <span className="text-[10px] font-mono font-bold text-rose-400 block mb-1">
                    EXPECTED DUE DATE (EDD)
                  </span>
                  <span className="text-base sm:text-lg font-black text-white block">
                    {result.edd}
                  </span>
                  <span className="text-[11px] text-zinc-400 block mt-1">
                    موعد الولادة التقريبي المتوقع
                  </span>
                </div>

                {/* Weeks & Days */}
                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-emerald-500/30">
                  <span className="text-[10px] font-mono font-bold text-emerald-400 block mb-1">
                    GESTATIONAL AGE
                  </span>
                  <span className="text-base sm:text-lg font-black text-white block">
                    {result.weeks} أسبوع و {result.days} أيام
                  </span>
                  <span className="text-[11px] text-zinc-400 block mt-1">
                    {result.trimester}
                  </span>
                </div>

                {/* Baby Size Metaphor */}
                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-white/10">
                  <span className="text-[10px] font-mono font-bold text-zinc-400 block mb-1">
                    BABY SIZE ANALOGY
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white block leading-snug">
                    {result.babySizeComparison}
                  </span>
                </div>

              </div>

              {/* 40-Week Timeline Visualizer */}
              <div className="p-5 rounded-2xl bg-zinc-950/90 border border-white/5 mb-8">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-zinc-400 mb-2">
                  <span>WEEK 1</span>
                  <span className="text-emerald-400">
                    {result.progressPercent}% OF FULL TERM (40 WEEKS)
                  </span>
                  <span>WEEK 40</span>
                </div>

                {/* Progress Track */}
                <div className="w-full h-3 rounded-full bg-zinc-900 overflow-hidden border border-white/5 relative p-0.5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-emerald-400 transition-all duration-1000"
                    style={{ width: `${result.progressPercent}%` }}
                  />
                </div>

                <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-2">
                  <span>الثلث الأول (1-13)</span>
                  <span>الثلث الثاني (14-27)</span>
                  <span>الثلث الثالث (28-40)</span>
                </div>
              </div>

              {/* Recommended Ultrasound Milestones */}
              <div className="p-5 rounded-2xl bg-zinc-950/60 border border-white/5 mb-8 text-right">
                <h4 className="text-xs font-bold text-white mb-3 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-rose-500" />
                  <span>المواعيد الأكاديمية الموصى بها لفحوصات السونار:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="font-bold text-zinc-300 block mb-1">
                      فحص الشهور الأولى (NT Scan):
                    </span>
                    <span className="text-emerald-400 font-mono">
                      {result.ntScanRange}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="font-bold text-zinc-300 block mb-1">
                      فحص تفاصيل الجنين (Anomaly Scan 4D):
                    </span>
                    <span className="text-emerald-400 font-mono">
                      {result.anomalyScanRange} (الأسابيع 18-22)
                    </span>
                  </div>
                </div>
              </div>

              {/* Copy Results Action & Jump to Booking Terminal */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={copyResults}
                  className="w-full sm:w-auto py-3 px-6 rounded-2xl bg-white/5 hover:bg-white/10 text-zinc-200 border border-white/10 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">تم نسخ تفاصيل الحساب بنجاح!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4" />
                      <span>مشاركة / نسخ تفاصيل الحساب</span>
                    </>
                  )}
                </button>

                <a
                  href="#booking"
                  className="w-full sm:w-auto py-3 px-6 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-rose-600/20"
                >
                  <span>حجز موعد فحص السونار في العيادة</span>
                  <ArrowLeft className="w-4 h-4" />
                </a>
              </div>

            </div>
          )}
        </SpotlightCard>

      </div>
    </section>
  );
}

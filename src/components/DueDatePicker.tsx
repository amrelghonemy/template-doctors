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

export default function DueDatePicker() {
  const [lmpDate, setLmpDate] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [result, setResult] = useState<{
    edd: string;
    weeks: number;
    days: number;
    trimester: string;
    trimesterIndex: number; // 1, 2, or 3
    progressPercent: number;
    babySizeComparison: string;
    anomalyScanRange: string;
    ntScanRange: string;
  } | null>(null);

  // Baby fruit/size metaphor by week
  const getBabySize = (weeks: number): string => {
    if (weeks <= 4) return "حبة سمسم صغيرة (بداية تكون النبض)";
    if (weeks <= 8) return "حبة توت بري (ظهور براعم اليدين والقدمين)";
    if (weeks <= 12) return "حبة ليمون (اكتمال الملامح الأساسية)";
    if (weeks <= 16) return "حبة أفوكادو (بداية الإحساس بحركة خفيفة)";
    if (weeks <= 20) return "ثمرة موز (الفترة المثالية لفحص التشوهات 4D)";
    if (weeks <= 24) return "حبة ذرة حلوة (سماع نبضات القلب بوضوح)";
    if (weeks <= 28) return "حبة باذنجان (تطور حاسة السمع واستجابة البيبي)";
    if (weeks <= 32) return "ثمرة أناناس (اكتمال نمو الأظافر والجلد)";
    if (weeks <= 36) return "ثمرة شمام (استعداد البيبي للنزول للحوض)";
    return "بطيخة صغيرة (اكتمال نمو الرئتين والجاهزية للولادة)";
  };

  const calculateDueDate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lmpDate) return;

    const lmp = new Date(lmpDate);
    if (isNaN(lmp.getTime())) return;

    // EDD is LMP + 280 days (Naegele's rule)
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
    const progressPercent = Math.min(100, Math.max(0, Math.round((weeks / 40) * 100)));

    let trimester = "الثلث الأول";
    let trimesterIndex = 1;
    if (weeks >= 14 && weeks <= 27) {
      trimester = "الثلث الثاني";
      trimesterIndex = 2;
    } else if (weeks >= 28) {
      trimester = "الثلث الثالث";
      trimesterIndex = 3;
    }

    // Anomaly scan range: 18 to 22 weeks
    const anomalyStart = new Date(lmp.getTime() + 18 * 7 * 24 * 60 * 60 * 1000);
    const anomalyEnd = new Date(lmp.getTime() + 22 * 7 * 24 * 60 * 60 * 1000);

    // NT scan range: 11 to 13.6 weeks
    const ntStart = new Date(lmp.getTime() + 11 * 7 * 24 * 60 * 60 * 1000);
    const ntEnd = new Date(lmp.getTime() + 13.5 * 7 * 24 * 60 * 60 * 1000);

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
    <section id="due-date-calculator" className="py-14 sm:py-20 bg-gradient-to-b from-white via-rose-50/30 to-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            حاسبة موعد الولادة وتطور الحمل
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            أدخلي تاريخ أول يوم في آخر دورة شهرية لمعرفة عمر الجنين، موعد الولادة المتوقع، والمواعيد المثالية لفحوصات السونار.
          </p>
        </div>

        {/* Interactive Form Card with Modern Glassmorphism */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl border border-rose-100/90 transition-all">
          <form onSubmit={calculateDueDate} className="max-w-lg mx-auto mb-6 text-right">
            <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-2">
              تاريخ أول يوم في آخر دورة شهرية (LMP):
            </label>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="date"
                required
                value={lmpDate}
                onChange={(e) => setLmpDate(e.target.value)}
                className="flex-1 px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500 text-slate-900 text-sm font-medium shadow-2xs transition-all"
              />
              <button
                type="submit"
                className="py-3 px-6 rounded-2xl bg-gradient-to-r from-rose-700 to-pink-700 hover:from-rose-800 hover:to-pink-800 text-white font-bold text-sm shadow-md shadow-rose-700/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>احسبي موعد ولادتكِ</span>
              </button>
            </div>
          </form>

          {/* Results Display */}
          {result && (
            <div className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in zoom-in-95 duration-400">
              
              {/* 40-Week Gestational Visual Progress Bar (2026 UI Trend) */}
              <div className="mb-8 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
                <div className="flex justify-between items-center mb-2.5 text-xs">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-rose-600" />
                    رحلة الـ 40 أسبوعاً:
                  </span>
                  <span className="text-rose-700 font-extrabold" dir="ltr">
                    {result.progressPercent}% مكتمل
                  </span>
                </div>

                {/* Segmented Progress Track */}
                <div className="w-full h-3 bg-slate-200/80 rounded-full overflow-hidden flex relative p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-rose-500 via-pink-500 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${result.progressPercent}%` }}
                  ></div>
                </div>

                {/* Trimester Labels */}
                <div className="grid grid-cols-3 text-center text-[10px] text-slate-500 mt-2 font-medium">
                  <span className={result.trimesterIndex === 1 ? "text-rose-700 font-bold" : ""}>
                    الثلث الأول (1-13)
                  </span>
                  <span className={result.trimesterIndex === 2 ? "text-rose-700 font-bold" : ""}>
                    الثلث الثاني (14-27)
                  </span>
                  <span className={result.trimesterIndex === 3 ? "text-rose-700 font-bold" : ""}>
                    الثلث الثالث (28-40)
                  </span>
                </div>
              </div>

              {/* Bento Stat Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 text-center">
                
                <div className="p-4 rounded-2xl bg-gradient-to-b from-rose-50/80 to-white border border-rose-100 shadow-2xs">
                  <span className="text-[11px] text-slate-500 block mb-1">عمر الحمل الحالي</span>
                  <span className="text-2xl font-black text-rose-800 block">
                    {result.weeks} أسبوع
                  </span>
                  <span className="text-xs text-slate-600 font-medium block mt-0.5">
                    و {result.days} أيام ({result.trimester})
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-b from-teal-50/80 to-white border border-teal-100 shadow-2xs">
                  <span className="text-[11px] text-slate-500 block mb-1">موعد الولادة المتوقع (EDD)</span>
                  <span className="text-xl font-black text-teal-800 block">
                    {result.edd}
                  </span>
                  <span className="text-xs text-teal-700 font-medium block mt-0.5">
                    بإذن الله وتوفيقه
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-b from-amber-50/80 to-white border border-amber-100 shadow-2xs">
                  <span className="text-[11px] text-slate-500 block mb-1">حجم الجنين التقريبي</span>
                  <span className="text-xs font-bold text-amber-900 block mt-1">
                    {result.babySizeComparison}
                  </span>
                </div>

              </div>

              {/* Recommended Scans Milestones */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/70 mb-6 text-right">
                <h4 className="text-xs font-bold text-slate-900 mb-2.5 flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-rose-600" />
                  المواعيد الموصى بها لفحوصات السونار لجنينكِ:
                </h4>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>فحص الشهور الأولى (NT Scan): <strong>{result.ntScanRange}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>فحص تفاصيل الجنين (Anomaly Scan): <strong>{result.anomalyScanRange}</strong> (الأسبوع 18-22)</span>
                  </div>
                </div>
              </div>

              {/* Action Button: Copy Results */}
              <div className="flex items-center justify-center">
                <button
                  type="button"
                  onClick={copyResults}
                  className="w-full sm:w-auto py-3 px-6 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold text-xs flex items-center justify-center gap-1.5 shadow-2xs transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">تم نسخ النتيجة بنجاح!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>مشاركة / نسخ تفاصيل الحساب</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}

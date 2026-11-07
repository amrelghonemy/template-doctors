"use client";
import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Baby } from "lucide-react";

function calculateGestationalAge(lmpDate: Date, today: Date): {
  weeks: number;
  days: number;
  dueDate: Date;
  trimester: string;
  progressPercent: number;
} {
  const diffMs = today.getTime() - lmpDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(diffDays / 7);
  const days = diffDays % 7;

  const dueDateMs = lmpDate.getTime() + 280 * 24 * 60 * 60 * 1000;
  const dueDate = new Date(dueDateMs);

  let trimester = "";
  if (weeks < 14) trimester = "الثلث الأول";
  else if (weeks < 28) trimester = "الثلث الثاني";
  else trimester = "الثلث الثالث";

  const progressPercent = Math.min(Math.max((diffDays / 280) * 100, 0), 100);

  return { weeks, days, dueDate, trimester, progressPercent };
}

function formatArabicDate(date: Date): string {
  return date.toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function V3GestationalCalc() {
  const [lmpValue, setLmpValue] = useState<string>("");
  const [result, setResult] = useState<ReturnType<typeof calculateGestationalAge> | null>(null);
  const [error, setError] = useState<string>("");
  const [todayStr, setTodayStr] = useState<string>("");

  useEffect(() => {
    setTodayStr(new Date().toISOString().split("T")[0]);
  }, []);

  const handleCalculate = useCallback(() => {
    if (!lmpValue) {
      setError("يرجى إدخال تاريخ آخر دورة شهرية");
      setResult(null);
      return;
    }
    const lmpDate = new Date(lmpValue);
    if (isNaN(lmpDate.getTime())) {
      setError("التاريخ غير صالح");
      setResult(null);
      return;
    }
    if (lmpDate > new Date()) {
      setError("لا يمكن أن يكون التاريخ في المستقبل");
      setResult(null);
      return;
    }
    const calc = calculateGestationalAge(lmpDate, new Date());
    if (calc.weeks > 45) {
      setError("يبدو أن التاريخ قديم جداً — يرجى التحقق من الإدخال");
      setResult(null);
      return;
    }
    setError("");
    setResult(calc);
  }, [lmpValue]);

  const handleReset = () => {
    setLmpValue("");
    setResult(null);
    setError("");
  };

  return (
    <section id="calculator" className="py-24 px-4 linen-bg">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 mb-4">
            حاسبة الحمل
          </span>
          <h2 className="text-4xl font-bold text-stone-800 mb-3">
            كم أسبوعاً مضى على{" "}
            <span className="hand-underline text-rose-500">حملك؟</span>
          </h2>
          <p className="text-stone-500 text-base">
            أدخلي تاريخ آخر دورة شهرية لحساب عمر الحمل وموعد الولادة المتوقع
          </p>
        </motion.div>

        {/* Calculator Card */}
        <motion.div
          className="warm-card grain-overlay rounded-3xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative z-10 p-8 lg:p-10">
            {/* Input Section */}
            <div className="mb-6">
              <label
                htmlFor="lmp-date"
                className="block text-stone-700 font-semibold mb-2 text-sm"
              >
                تاريخ آخر دورة شهرية (LMP)
              </label>
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Calendar
                    strokeWidth={1.5}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 pointer-events-none"
                  />
                  <input
                    id="lmp-date"
                    type="date"
                    value={lmpValue}
                    max={todayStr}
                    onChange={(e) => setLmpValue(e.target.value)}
                    className="w-full pr-12 pl-4 py-3.5 rounded-2xl border border-stone-200 bg-white/70 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300 transition-all"
                    dir="ltr"
                  />
                </div>
                <button
                  onClick={handleCalculate}
                  className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3.5 rounded-2xl transition-colors duration-300 text-sm whitespace-nowrap shadow-md hover:shadow-lg"
                >
                  احسبي
                </button>
              </div>
              {error && (
                <p className="mt-2 text-sm text-rose-600 font-medium">{error}</p>
              )}
            </div>

            {/* Results */}
            <AnimatePresence mode="wait">
              {result && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="space-y-5"
                >
                  {/* Divider */}
                  <div className="border-t border-stone-200/80" />

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-rose-50 border border-rose-100 rounded-2xl px-4 py-5">
                      <p className="text-3xl font-bold text-rose-600 mb-1">
                        {result.weeks}
                      </p>
                      <p className="text-xs text-stone-500 font-medium">أسبوع</p>
                    </div>
                    <div className="bg-amber-50 border border-amber-100 rounded-2xl px-4 py-5">
                      <p className="text-3xl font-bold text-amber-600 mb-1">
                        {result.days}
                      </p>
                      <p className="text-xs text-stone-500 font-medium">يوم</p>
                    </div>
                    <div className="bg-stone-50 border border-stone-200 rounded-2xl px-4 py-5">
                      <p className="text-lg font-bold text-stone-700 mb-1 leading-tight">
                        {result.trimester}
                      </p>
                      <p className="text-xs text-stone-500 font-medium">المرحلة</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div>
                    <div className="flex justify-between text-xs text-stone-500 mb-2">
                      <span>بداية الحمل</span>
                      <span>الولادة (٤٠ أسبوع)</span>
                    </div>
                    <div className="relative h-4 bg-stone-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-l from-amber-400 to-rose-400"
                        initial={{ width: 0 }}
                        animate={{ width: `${result.progressPercent}%` }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                      />
                    </div>
                    <p className="text-left text-xs text-stone-400 mt-1">
                      {Math.round(result.progressPercent)}% من الرحلة
                    </p>
                  </div>

                  {/* Due date */}
                  <div className="flex items-center gap-4 bg-gradient-to-br from-rose-50 to-amber-50 border border-rose-100 rounded-2xl px-6 py-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-rose-200 flex items-center justify-center shadow-sm">
                      <Baby strokeWidth={1.5} className="w-6 h-6 text-rose-400" />
                    </div>
                    <div>
                      <p className="text-xs text-stone-500 font-medium mb-0.5">
                        موعد الولادة المتوقع
                      </p>
                      <p className="text-lg font-bold text-stone-800">
                        {formatArabicDate(result.dueDate)}
                      </p>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <p className="text-center text-xs text-stone-400 leading-relaxed">
                    هذه الحسابات تقديرية فقط. للتأكيد الدقيق، يرجى مراجعة الطبيبة مع سونار.
                  </p>

                  {/* Reset */}
                  <button
                    onClick={handleReset}
                    className="w-full text-center text-sm text-stone-400 hover:text-rose-500 transition-colors duration-200 font-medium"
                  >
                    إعادة الحساب
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Empty state hint */}
            {!result && !error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-6"
              >
                <div className="w-16 h-16 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center mx-auto mb-3">
                  <Baby strokeWidth={1.5} className="w-8 h-8 text-rose-300" />
                </div>
                <p className="text-stone-400 text-sm">
                  أدخلي تاريخ آخر دورة شهرية وستظهر النتائج هنا
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

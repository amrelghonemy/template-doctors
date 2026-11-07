"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, bounce: 0, duration: 0.6, delay: i * 0.1 },
  }),
};

interface GestationalResult {
  weeks: number;
  days: number;
  dueDate: string;
  trimester: string;
  progressPercent: number;
}

function calculateGestationalAge(lmpDate: Date, today: Date): GestationalResult {
  const msPerDay = 1000 * 60 * 60 * 24;
  const totalDays = Math.floor((today.getTime() - lmpDate.getTime()) / msPerDay);
  const weeks = Math.floor(totalDays / 7);
  const days = totalDays % 7;

  // Due date = LMP + 280 days
  const dueDateMs = lmpDate.getTime() + 280 * msPerDay;
  const dueDateObj = new Date(dueDateMs);
  const dueDate = dueDateObj.toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  let trimester = "الثلث الأول";
  if (weeks >= 28) trimester = "الثلث الثالث";
  else if (weeks >= 14) trimester = "الثلث الثاني";

  const progressPercent = Math.min(100, Math.round((totalDays / 280) * 100));

  return { weeks, days, dueDate, trimester, progressPercent };
}

export default function V4GestationalCalc() {
  const [todayStr, setTodayStr] = useState("");
  const [lmpValue, setLmpValue] = useState("");
  const [result, setResult] = useState<GestationalResult | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setTodayStr(new Date().toISOString().split("T")[0]);
  }, []);

  function handleCalculate() {
    setError("");
    setResult(null);

    if (!lmpValue) {
      setError("يرجى إدخال تاريخ آخر دورة شهرية.");
      return;
    }

    const lmpDate = new Date(lmpValue);
    const today = new Date();

    if (isNaN(lmpDate.getTime())) {
      setError("التاريخ غير صحيح، يرجى المحاولة مجدداً.");
      return;
    }

    if (lmpDate > today) {
      setError("لا يمكن أن يكون تاريخ الدورة في المستقبل.");
      return;
    }

    const totalDays = Math.floor((today.getTime() - lmpDate.getTime()) / (1000 * 60 * 60 * 24));
    if (totalDays > 300) {
      setError("يبدو أن التاريخ المدخل قديم جداً، تأكدي من صحته.");
      return;
    }

    setResult(calculateGestationalAge(lmpDate, today));
  }

  return (
    <section className="py-24 paper-bg">
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
          حاسبة عمر الحمل
        </motion.p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left: Form + Results */}
          <motion.div
            className="flex flex-col gap-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <div>
              <h2
                className="text-3xl font-extrabold mb-3"
                style={{ color: "var(--text-ink)", letterSpacing: "-0.02em" }}
              >
                اعرفي عمر حملك
              </h2>
              <p className="text-sm" style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
                أدخلي تاريخ أول يوم في آخر دورة شهرية لحساب عمر الحمل وتاريخ الولادة المتوقع.
              </p>
            </div>

            {/* Date input */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="lmp-date"
                className="text-sm font-semibold"
                style={{ color: "var(--text-ink)" }}
              >
                تاريخ آخر دورة شهرية
              </label>
              <input
                id="lmp-date"
                type="date"
                value={lmpValue}
                max={todayStr}
                onChange={(e) => setLmpValue(e.target.value)}
                className="editorial-input"
                dir="ltr"
              />
            </div>

            {error && (
              <p className="text-sm" style={{ color: "var(--accent-rose)" }}>
                {error}
              </p>
            )}

            <button
              onClick={handleCalculate}
              className="self-start px-6 py-3 rounded-xl font-bold text-sm transition-transform duration-150 active:scale-95"
              style={{ background: "var(--accent-rose)", color: "#fff" }}
            >
              احسبي الآن
            </button>

            {/* Results */}
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                className="v4-card p-6 flex flex-col gap-5"
              >
                {/* Weeks + days display */}
                <div className="flex items-end gap-3">
                  <div className="flex flex-col">
                    <span
                      className="text-5xl font-extrabold leading-none"
                      style={{ color: "var(--accent-rose)" }}
                    >
                      {result.weeks}
                    </span>
                    <span className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
                      أسبوعاً
                    </span>
                  </div>
                  {result.days > 0 && (
                    <>
                      <span className="text-2xl font-bold mb-1" style={{ color: "var(--text-muted)" }}>
                        +
                      </span>
                      <div className="flex flex-col">
                        <span
                          className="text-5xl font-extrabold leading-none"
                          style={{ color: "var(--accent-amber)" }}
                        >
                          {result.days}
                        </span>
                        <span className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
                          {result.days === 1 ? "يوم" : "أيام"}
                        </span>
                      </div>
                    </>
                  )}
                </div>

                <hr className="editorial-rule" />

                {/* Meta info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>
                      تاريخ الولادة المتوقع
                    </span>
                    <span className="text-sm font-bold" style={{ color: "var(--text-ink)" }}>
                      {result.dueDate}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>
                      مرحلة الحمل
                    </span>
                    <span className="text-sm font-bold" style={{ color: "var(--text-ink)" }}>
                      {result.trimester}
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs" style={{ color: "var(--text-muted)" }}>
                    <span>بداية الحمل</span>
                    <span>{result.progressPercent}%</span>
                    <span>الولادة</span>
                  </div>
                  <div className="progress-track">
                    <div
                      className="progress-fill"
                      style={{ width: `${result.progressPercent}%` }}
                      role="progressbar"
                      aria-valuenow={result.progressPercent}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>

                <p className="text-xs" style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
                  * هذه الحسابات تقديرية. تاريخ الولادة الدقيق يُحدد بالسونار الطبي لدى
                  استشاري متخصص.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Right: Fetal stages wide illustration */}
          <motion.div
            className="relative hidden md:block"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <div
              className="relative overflow-hidden rounded-2xl border"
              style={{
                borderColor: "var(--border-hairline)",
                boxShadow: "0 12px 36px rgba(28,22,18,0.08)",
              }}
            >
              <Image
                src="/images/fetal-stages-wide.jpg"
                alt="مراحل تطور الجنين في الرحم عبر أسابيع الحمل"
                width={640}
                height={360}
                className="w-full object-cover"
                style={{ aspectRatio: "16/9" }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

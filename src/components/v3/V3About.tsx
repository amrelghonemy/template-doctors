"use client";
import React from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const credentials = [
  {
    emoji: "🎓",
    title: "دكتوراه من كلية الطب – جامعة عين شمس",
    desc: "تأهيل أكاديمي رفيع في أعرق كليات الطب المصرية",
  },
  {
    emoji: "🏥",
    title: "استشاري نساء وتوليد وطب الجنين",
    desc: "خبرة واسعة في التشخيص والمتابعة على أعلى مستوى",
  },
  {
    emoji: "👶",
    title: "خبرة إكلينيكية في رعاية الحمل الدقيق والجنين",
    desc: "رعاية شاملة للحالات التي تحتاج متابعة مكثفة وحضوراً إنسانياً",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function V3About() {
  return (
    <section id="about" className="py-24 px-4 overflow-hidden linen-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Left: Image */}
          <motion.div variants={itemVariants} className="relative flex justify-center lg:justify-start">
            {/* Decorative blob background */}
            <div
              className="absolute -top-10 -right-10 w-72 h-72 bg-rose-100 blob-shape opacity-60"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-8 -left-8 w-48 h-48 bg-amber-100 blob-shape opacity-50"
              aria-hidden="true"
            />

            <div className="relative z-10 w-full max-w-md">
              <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-10px_rgba(180,130,80,0.25)]">
                <Image
                  src="/images/doctor-desk.jpg"
                  alt="مكتب الدكتورة دينا مصطفى"
                  width={520}
                  height={620}
                  className="w-full h-[520px] object-cover"
                  priority={false}
                />
                {/* Warm tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 via-transparent to-rose-900/5 pointer-events-none" />
              </div>

              {/* Floating warm badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 warm-card rounded-2xl px-5 py-4 shadow-lg z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✨</span>
                  <div>
                    <p className="text-sm font-bold text-rose-600">+١٥ سنة</p>
                    <p className="text-xs text-stone-500">من العطاء الطبي</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={containerVariants} className="flex flex-col gap-8">
            {/* Section label */}
            <motion.div variants={itemVariants}>
              <span className="inline-block text-xs font-semibold tracking-widest text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 mb-4">
                من نحن
              </span>
              <h2 className="text-4xl font-bold text-stone-800 leading-snug mb-1">
                طبيبة{" "}
                <span className="hand-underline text-rose-500">
                  تشعر بك
                </span>
                {" "}قبل أن تشخّصك
              </h2>
            </motion.div>

            {/* Warm paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-stone-600 text-lg leading-relaxed"
            >
              د. دينا مصطفى إبراهيم لم تختر طب النساء والتوليد مجرد تخصص — اختارته رسالة. منذ أكثر من خمس عشرة سنة وهي ترافق الأمهات في رحلتهن الأعمق: من أول نبضة قلب يسمعنها للجنين، حتى اللحظة التي يمسكن فيها بيدي طفلهن لأول مرة. تجمع بين الدقة العلمية والحضور الإنساني الحقيقي.
            </motion.p>

            {/* Credential cards */}
            <motion.div variants={containerVariants} className="flex flex-col gap-4">
              {credentials.map((cred, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="warm-card rounded-2xl px-6 py-5 flex items-start gap-4 group hover:shadow-md transition-shadow duration-300"
                >
                  {/* Amber dot accent */}
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-xl">
                      {cred.emoji}
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-stone-800 text-base leading-snug mb-1">
                      {cred.title}
                    </p>
                    <p className="text-stone-500 text-sm leading-relaxed">
                      {cred.desc}
                    </p>
                  </div>
                  {/* Amber dot accent on the side */}
                  <div className="flex-shrink-0 mt-2 mr-auto">
                    <div className="w-2 h-2 rounded-full bg-amber-400 group-hover:bg-rose-400 transition-colors duration-300" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

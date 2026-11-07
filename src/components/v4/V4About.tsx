"use client";

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

const credentials = [
  "دكتوراه واستشاري أمراض النساء والتوليد وطب الجنين – كلية الطب، جامعة عين شمس",
  "خبرة إكلينيكية متخصصة في متابعة حالات الحمل الروتينية والحمل الحرج عالي الخطورة",
  "تخصص دقيق في فحوصات السونار التفصيلي ثلاثي ورباعي الأبعاد وتشخيص سلامة الجنين",
];

export default function V4About() {
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
          className="text-xs font-semibold uppercase tracking-widest mb-8"
          style={{ color: "var(--text-muted)" }}
        >
          د. دينا مصطفى
        </motion.p>

        {/* Pull quote */}
        <motion.blockquote
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="pull-quote mb-12"
        >
          &quot;الرعاية الطبية الموثوقة تبدأ بالتشخيص الدقيق، وتكتمل <span className="rose-accent">بالاهتمام الواعي</span> بكل مريضة&quot;
        </motion.blockquote>

        {/* Two-column body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">

          {/* Left: Editorial paragraph + inset image */}
          <motion.div
            className="md:col-span-7 flex flex-col gap-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            {/* Doctor Portrait */}
            <div
              className="relative w-full overflow-hidden rounded-2xl"
              style={{
                border: "1px solid var(--border-hairline)",
                boxShadow: "0 16px 40px rgba(28,22,18,0.08)",
                maxHeight: "400px",
              }}
            >
              <Image
                src="/images/dr-dina-doctor.jpg"
                alt="د. دينا مصطفى إبراهيم"
                width={680}
                height={500}
                className="w-full object-cover"
                style={{ maxHeight: "400px", objectPosition: "center 20%" }}
                priority
              />
            </div>

            <p
              className="text-base leading-loose"
              style={{ color: "var(--text-muted)", lineHeight: 1.9 }}
            >
              د. دينا مصطفى إبراهيم، دكتوراه واستشاري أمراض النساء والتوليد وطب الجنين بكلية الطب – جامعة عين شمس. تجمع في عيادتها بين الكفاءة الأكاديمية والتشخيص الدقيق بأحدث المعايير الطبية، مع توفير الوقت الكافي لكل مريضة لمناقشة حالتها والاطمئنان على كافة الفحوصات والخيارات العلاجية بوضوح تام، بما يضمن راحة البال وأعلى مستويات الأمان الصحي.
            </p>
          </motion.div>

          {/* Right: Credentials list */}
          <motion.div
            className="md:col-span-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
          >
            <ul className="flex flex-col gap-5">
              {credentials.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "var(--accent-rose)" }}
                    aria-hidden="true"
                  />
                  <span
                    className="text-base font-medium leading-relaxed"
                    style={{ color: "var(--text-ink)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

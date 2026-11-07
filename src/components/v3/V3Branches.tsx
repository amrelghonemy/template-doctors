"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const branches = [
  {
    id: "heliopolis",
    name: "فرع مصر الجديدة (هليوبوليس)",
    address: "٧٧ شارع النزهة، ميدان السبع عمارات، مصر الجديدة",
    days: ["السبت", "الأحد", "الاثنين", "الأربعاء"],
    time: "مسائاً",
    phone: "+201021107881",
    mapUrl: "https://maps.google.com/maps?q=77+El-Nozha+St+Heliopolis+Cairo",
    accentFrom: "from-rose-50",
    accentTo: "to-amber-50",
    iconColor: "text-rose-400",
    iconBg: "bg-rose-100",
    daysColor: "bg-rose-50 text-rose-700 border-rose-200",
    btnColor: "bg-rose-500 hover:bg-rose-600",
  },
  {
    id: "new-cairo",
    name: "فرع التجمع الخامس (القاهرة الجديدة)",
    address: "عيادات Bless، ١٦٤ شارع التسعين الشمالي، التجمع الخامس",
    days: ["السبت", "الاثنين"],
    time: "مسائاً",
    phone: "+201021107881",
    mapUrl: "https://maps.app.goo.gl/qEv3MSurA7GbBAW77",
    accentFrom: "from-amber-50",
    accentTo: "to-rose-50",
    iconColor: "text-amber-500",
    iconBg: "bg-amber-100",
    daysColor: "bg-amber-50 text-amber-700 border-amber-200",
    btnColor: "bg-amber-500 hover:bg-amber-600",
  },
];

export default function V3Branches() {
  return (
    <section id="branches" className="py-24 px-4 linen-bg">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-rose-500 bg-rose-50 border border-rose-200 rounded-full px-4 py-1.5 mb-4">
            الفروع والمواعيد
          </span>
          <h2 className="text-4xl font-bold text-stone-800 mb-4">
            قريبة منكِ{" "}
            <span className="hand-underline text-rose-500">أينما كنتِ</span>
          </h2>
          <p className="text-stone-500 text-lg">
            نمتلك فرعين في قلب القاهرة لتكوني دائماً على مقربة من الرعاية التي تستحقينها
          </p>
        </motion.div>

        {/* Branch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {branches.map((branch, i) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              className="warm-card rounded-3xl overflow-hidden flex flex-col"
            >
              {/* Card top gradient strip */}
              <div className={`h-2 bg-gradient-to-l ${branch.accentFrom} ${branch.accentTo}`} />

              <div className="p-8 flex flex-col gap-6 flex-1">
                {/* Branch name + availability */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${branch.iconBg} flex items-center justify-center`}>
                      <MapPin strokeWidth={1.5} className={`w-5 h-5 ${branch.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-stone-800 leading-snug">
                        {branch.name}
                      </h3>
                    </div>
                  </div>

                  {/* Always-green متاح badge */}
                  <div className="flex-shrink-0 flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold rounded-full px-3 py-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 warm-pulse inline-block" />
                    متاح
                  </div>
                </div>

                {/* Address */}
                <p className="text-stone-600 text-sm leading-relaxed">
                  {branch.address}
                </p>

                {/* Days */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Clock strokeWidth={1.5} className="w-4 h-4 text-stone-400" />
                    <span className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                      أيام العمل
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {branch.days.map((day) => (
                      <span
                        key={day}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${branch.daysColor}`}
                      >
                        {day}
                      </span>
                    ))}
                    <span className="text-xs text-stone-500 self-center font-medium">
                      — {branch.time}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-stone-100" />

                {/* Actions */}
                <div className="flex items-center justify-between gap-3 mt-auto">
                  {/* Google Maps button */}
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 ${branch.btnColor} text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-300 shadow-sm`}
                  >
                    <MapPin strokeWidth={1.5} className="w-4 h-4" />
                    خريطة الموقع
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${branch.phone}`}
                    className="flex items-center gap-2 text-stone-600 hover:text-rose-500 transition-colors duration-200 text-sm font-medium"
                    dir="ltr"
                  >
                    <Phone strokeWidth={1.5} className="w-4 h-4" />
                    {branch.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

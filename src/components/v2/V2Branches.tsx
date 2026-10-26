"use client";

import React from "react";
import {
  MapPin,
  Clock,
  Phone,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import SpotlightCard from "./SpotlightCard";

export default function V2Branches() {
  const branches = [
    {
      id: "heliopolis",
      name: "فرع مصر الجديدة (المقر الرئيسي)",
      code: "HELIOPOLIS HEADQUARTERS",
      address: "77 شارع النزهة، ميدان السبع عمارات (بجوار القاهرة للمبيعات) – الدور الأرضي",
      schedule: [
        { days: "السبت، الأحد، الأربعاء", hours: "06:00 PM – 11:00 PM" },
        { days: "الاثنين", hours: "06:00 PM – 09:00 PM" },
      ],
      mapUrl:
        "https://maps.google.com/maps?q=77%2BEl-Nozha%2C%2BAlmazah%2C%2BHeliopolis%2C%2BCairo%2BGovernorate%2B4461114%2C%2BEgypt&sll=30.08933689735664,31.34185072034597",
    },
    {
      id: "new_cairo",
      name: "فرع التجمع الخامس (عيادات Bless)",
      code: "NEW CAIRO CLINIC",
      address: "164 شارع التسعين الشمالي الرئيسي، بجوار مستشفى الشفا – القاهرة الجديدة",
      schedule: [
        { days: "السبت", hours: "04:00 PM – 06:00 PM" },
        { days: "الاثنين", hours: "06:00 PM – 08:00 PM" },
      ],
      mapUrl: "https://maps.app.goo.gl/qEv3MSurA7GbBAW77",
    },
  ];

  return (
    <section id="branches" className="py-20 sm:py-28 relative overflow-hidden bg-zinc-950">
      
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-right max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-rose-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>LOCATIONS & OPERATING HOURS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            الفروع والمواعيد الرسمية
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
            موقعان استراتيجيان مجهزان بأحدث أجهزة السونار التفصيلي 4D وغرف كشف فائقة الخصوصية بمصر الجديدة والتجمع الخامس.
          </p>
        </div>

        {/* Monolithic Dual Branch Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
          {branches.map((b) => (
            <SpotlightCard
              key={b.id}
              className="p-6 sm:p-8 border-white/10 bg-zinc-900/60 shadow-2xl flex flex-col justify-between text-right"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                  <span className="text-[10px] font-mono font-bold text-zinc-400">
                    {b.code}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-rose-400 border border-white/5">
                    <MapPin className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-white mb-2">
                  {b.name}
                </h3>

                <p className="text-xs text-zinc-300 leading-relaxed mb-6 font-medium">
                  📍 {b.address}
                </p>

                {/* Operating Hours Table */}
                <div className="bg-zinc-950/80 p-4 rounded-2xl border border-white/5 mb-6">
                  <div className="flex items-center gap-2 text-xs font-bold text-zinc-300 mb-3 border-b border-white/5 pb-2">
                    <Clock className="w-3.5 h-3.5 text-rose-500" />
                    <span>مواعيد الاستقبال والعيادة:</span>
                  </div>
                  <div className="space-y-2">
                    {b.schedule.map((slot, sIdx) => (
                      <div key={sIdx} className="flex justify-between items-center text-xs">
                        <span className="font-medium text-zinc-400">{slot.days}</span>
                        <span
                          className="font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20 text-[11px]"
                          dir="ltr"
                        >
                          {slot.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action: Google Maps Direct Launch */}
              <div className="pt-4 border-t border-white/5">
                <a
                  href={b.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs flex items-center justify-center gap-2 border border-white/10 transition-all hover:scale-[1.01]"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-rose-400" />
                  <span>عرض الموقع المباشر على خرائط جوجل (Google Maps)</span>
                </a>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Central Telephone Concierge Banner */}
        <div className="max-w-2xl mx-auto p-4 sm:p-5 rounded-3xl bg-zinc-900/60 border border-white/10 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-right">
          <div>
            <span className="text-xs font-bold text-white block">
              للحجز والاستفسار الفوري عبر الهاتف:
            </span>
            <span className="text-[11px] text-zinc-400">
              فريق الاستقبال متواجد للإجابة عن مواعيد الكشف والتحضيرات
            </span>
          </div>

          <a
            href="tel:01021107881"
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-mono font-bold text-xs shadow-lg shadow-rose-600/20 transition-all"
            dir="ltr"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>010 2110 7881</span>
          </a>
        </div>

      </div>
    </section>
  );
}

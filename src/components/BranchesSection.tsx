import React from "react";
import {
  MapPin,
  Clock,
  ExternalLink,
  MessageCircle,
  Building2,
  Calendar,
} from "lucide-react";

export default function BranchesSection() {
  const branches = [
    {
      name: "فرع مصر الجديدة (المقر الجديد)",
      tag: "المقر الجديد – ميدان السبع عمارات",
      tagColor: "bg-rose-100 text-rose-800",
      address: "77 شارع النزهة، بجوار القاهرة للمبيعات، ميدان السبع عمارات – الدور الأرضي.",
      mapUrl: "https://maps.google.com/maps?q=77%2BEl-Nozha%2C%2BAlmazah%2C%2BHeliopolis%2C%2BCairo%2BGovernorate%2B4461114%2C%2BEgypt&sll=30.08933689735664,31.34185072034597",
      schedule: [
        { days: "السبت • الأحد • الأربعاء", hours: "6:00 م – 11:00 م" },
        { days: "الاثنين", hours: "6:00 م – 9:00 م" },
      ],
      whatsappMsg: "السلام عليكم د. دينا، أود حجز كشف في فرع مصر الجديدة (السبع عمارات).",
    },
    {
      name: "فرع التجمع الخامس (القاهرة الجديدة)",
      tag: "عيادات Bless التخصصية",
      tagColor: "bg-teal-100 text-teal-800",
      address: "164 شارع التسعين الشمالي الرئيسي، بجوار مستشفى الشفا، التجمع الخامس.",
      mapUrl: "https://maps.app.goo.gl/qEv3MSurA7GbBAW77",
      schedule: [
        { days: "السبت • الأربعاء", hours: "4:00 عصراً – 6:00 مساءً" },
        { days: "الاثنين", hours: "6:00 مساءً – 8:00 مساءً" },
      ],
      whatsappMsg: "السلام عليكم د. دينا، أود حجز كشف في فرع التجمع الخامس (عيادات Bless).",
    },
  ];

  return (
    <section id="branches" className="py-14 sm:py-20 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            فروعنا في مصر الجديدة والتجمع الخامس
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            اختاري الفرع الأقرب لكي للحجز المباشر واستقبالكِ دون انتظار.
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
          {branches.map((b, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-right"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${b.tagColor}`}>
                    {b.tag}
                  </span>
                  <MapPin className="w-5 h-5 text-rose-700" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {b.name}
                </h3>

                <p className="text-xs text-slate-700 font-medium leading-relaxed mb-4">
                  📍 {b.address}
                </p>

                {/* Operating Hours */}
                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100 mb-5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-2 border-b border-slate-200/60 pb-1.5">
                    <Clock className="w-3.5 h-3.5 text-rose-600" />
                    <span>مواعيد الاستقبال:</span>
                  </div>
                  <div className="space-y-1.5">
                    {b.schedule.map((slot, sIdx) => (
                      <div key={sIdx} className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-slate-700">{slot.days}</span>
                        <span className="text-rose-800 font-bold bg-white px-2 py-0.5 rounded-md border border-slate-200" dir="ltr">
                          {slot.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map Location Button */}
              <div className="pt-3 border-t border-slate-100">
                <a
                  href={b.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200/80 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-rose-700" />
                  <span>عرض موقع الفرع على خرائط جوجل</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Unified Call Ribbon */}
        <div className="max-w-xl mx-auto bg-white p-3.5 rounded-2xl border border-rose-200/80 shadow-xs flex items-center justify-between gap-3 text-right">
          <div>
            <span className="font-bold text-slate-900 text-xs block">
              للحجز والاستفسار الفوري عبر الهاتف:
            </span>
            <span className="text-[11px] text-slate-500">
              متاحون للرد على كافة أسئلتكم
            </span>
          </div>
          <a
            href="tel:01021107881"
            className="py-2 px-4 rounded-xl bg-rose-700 hover:bg-rose-800 text-white font-bold text-xs flex items-center gap-1.5 flex-shrink-0"
            dir="ltr"
          >
            010 2110 7881
          </a>
        </div>

      </div>
    </section>
  );
}

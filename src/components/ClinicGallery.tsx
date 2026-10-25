import React from "react";
import { Camera, ExternalLink } from "lucide-react";

export default function ClinicGallery() {
  const photos = [
    {
      src: "/images/ultrasound-scan.jpg",
      title: "سونار طب الجنين 4D",
      desc: "أحدث أجهزة فحص الأجنة التفصيلي والاطمئنان",
      tag: "طب الجنين",
    },
    {
      src: "/images/doctor-desk.jpg",
      title: "غرفة الاستشارات الطبية",
      desc: "خصوصية تامة واستماع وافٍ لكل حالة",
      tag: "استشارة",
    },
    {
      src: "/images/clinic-baby-door.jpg",
      title: "فرحة استقبال المواليد",
      desc: "Welcome Baby - بداية حكاية جديدة لكل أسرة",
      tag: "ولادة آمنة",
    },
    {
      src: "/images/baby-feet.jpg",
      title: "رعاية حديثي الولادة",
      desc: "عناية فائقة بصحة الأم والطفل بعد الولادة",
      tag: "أمومة",
    },
    {
      src: "/images/mother-gentle.jpg",
      title: "رحلة الأمومة المطمئنة",
      desc: "متابعة دقيقة لكل مرحلة من مراحل الحمل",
      tag: "رعاية",
    },
    {
      src: "/images/clinic-lounge.jpg",
      title: "بيئة علاجية عصرية",
      desc: "مقرات راقية في مصر الجديدة والتجمع الخامس",
      tag: "العيادة",
    },
  ];

  return (
    <section className="py-14 sm:py-18 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 text-right gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-800 text-xs font-bold mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span>لحظات وتجهيزات العيادة</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              معرض الرعاية الطبية ولحظات الأمل
            </h2>
          </div>

          <a
            href="https://www.instagram.com/dr.dinamostafaclinic/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-rose-700 hover:text-rose-800 bg-rose-50 hover:bg-rose-100 px-3.5 py-2 rounded-xl transition-colors self-start sm:self-auto"
          >
            <Camera className="w-4 h-4" />
            <span>تابعينا على إنستغرام @dr.dinamostafaclinic</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Real Photo Grid - Purely Aesthetic & Typographic */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {photos.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/5] bg-slate-100"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
              
              {/* Badge */}
              <div className="absolute top-2.5 right-2.5">
                <span className="text-[10px] font-bold bg-white/95 backdrop-blur-xs text-rose-900 px-2 py-0.5 rounded-md shadow-xs">
                  {item.tag}
                </span>
              </div>

              {/* Caption */}
              <div className="absolute bottom-2.5 right-2.5 left-2.5 text-right text-white">
                <h3 className="font-bold text-xs leading-tight mb-0.5">
                  {item.title}
                </h3>
                <p className="text-[10px] text-slate-200 line-clamp-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

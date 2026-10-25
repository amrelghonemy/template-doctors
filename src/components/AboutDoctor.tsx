import React from "react";
import {
  GraduationCap,
  Award,
  Microscope,
  Stethoscope,
  Heart,
  MessageCircle,
  Building,
} from "lucide-react";

export default function AboutDoctor() {
  const credentials = [
    {
      title: "دكتوراه كلية الطب – جامعة عين شمس",
      desc: "استشاري أمراض النساء والتوليد والعقم وتأخر الإنجاب.",
      icon: GraduationCap,
    },
    {
      title: "استشاري طب الجنين والتشخيص المبكر",
      desc: "فحص تشوهات الأجنة التفصيلي (Anomaly Scan) والدوبلر وسونار 4D.",
      icon: Microscope,
    },
    {
      title: "استشاري الحقن المجهري وأطفال الأنابيب",
      desc: "بروتوكولات علاج فردية متقدمة وعلاج تكيس المبايض (PCOS).",
      icon: Stethoscope,
    },
    {
      title: "الولادة القيصرية التجميلية بدون ألم",
      desc: "تقنية TAP Block ومضخة التسكين الذاتي لخوض ولادة آمنة ومريحة.",
      icon: Heart,
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-18 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Clinical Workspace & Stethoscope Imagery matching typography */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-slate-50 aspect-[4/3] sm:aspect-square group">
              <img
                src="/images/doctor-desk.jpg"
                alt="بيئة العيادة والاستشارات الطبية المتخصصة"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 right-5 left-5 text-right text-white">
                <span className="text-xs bg-rose-700/90 font-bold px-2.5 py-1 rounded-lg inline-block mb-1.5 shadow-xs">
                  معايير طبية أكاديمية
                </span>
                <p className="text-base font-bold text-white">بيئة علاجية هادئة ومتطورة</p>
                <p className="text-xs text-slate-200">فحص دقيق واستماع وافٍ لكل حالة في خصوصية تامة</p>
              </div>
            </div>
          </div>

          {/* Clean Credentials List */}
          <div className="lg:col-span-7 text-right">

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 leading-tight">
              خبرة أكاديمية موثوقة ورعاية تمنحكِ الطمأنينة
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              تجمع د. دينا مصطفى إبراهيم بين المكانة الأكاديمية الرفيعة كاستشاري بكلية الطب جامعة عين شمس، وبين الحرص الشديد على توفير وقت كافٍ لكل مريضة وشرح كافة تفاصيل التشخيص والعلاج.
            </p>

            {/* 4 Crisp Credential Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {credentials.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl bg-slate-50 hover:bg-rose-50/50 border border-slate-200/80 hover:border-rose-200 transition-colors text-right"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className="p-1.5 rounded-lg bg-rose-100 text-rose-700">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                        {c.title}
                      </h3>
                    </div>
                    <p className="text-[11px] text-slate-500 pr-8 leading-snug">
                      {c.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Clinics Location Note */}
            <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>عيادات مجهزة بأعلى المعايير الأكاديمية في مصر الجديدة (السبع عمارات) والتجمع الخامس (شارع التسعين)</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

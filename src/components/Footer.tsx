import React from "react";
import {
  Stethoscope,
  Phone,
  MapPin,
  Clock,
  Heart,
  Calendar,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-right">
          
          {/* Col 1: About Doctor */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-600 flex items-center justify-center text-white font-bold text-lg">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-lg block text-white">د. دينا مصطفى</span>
                <span className="text-[11px] text-rose-300 font-medium block">
                  استشاري أمراض النساء والتوليد والعقم وطب الجنين
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              دكتوراه واستشاري كلية الطب – جامعة عين شمس. نسعى لتقديم أعلى درجات الأمان والتشخيص الدقيق لحالات الحمل الحرج، والحقن المجهري، وفحص تشوهات الجنين، والولادة بدون ألم.
            </p>

            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="https://www.facebook.com/p/Dr-Dina-Mostafa-clinic-%D8%AF-%D8%AF%D9%8A%D9%86%D8%A7-%D9%85%D8%B5%D8%B7%D9%81%D9%89-100093906760151/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#1877F2] flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-xs hover:scale-110"
                aria-label="صفحة الفيسبوك الرسمية"
                title="فيسبوك"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/dr.dinamostafaclinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-xs hover:scale-110"
                aria-label="حساب إنستغرام الرسمي"
                title="إنستغرام"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/201021107881"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#25D366] flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-xs hover:scale-110"
                aria-label="محادثة واتساب"
                title="واتساب"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
              <a
                href="tel:01021107881"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-rose-600 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-xs hover:scale-110"
                aria-label="اتصال هاتفي"
                title="اتصال"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 border-b border-slate-800 pb-2">
              روابط سريعة
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#hero" className="hover:text-rose-300 transition-colors">الرئيسية</a>
              </li>
              <li>
                <a href="#services" className="hover:text-rose-300 transition-colors">خدماتنا الطبية</a>
              </li>
              <li>
                <a href="#branches" className="hover:text-rose-300 transition-colors">الفروع ومواعيد العيادات</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-rose-300 transition-colors">الأسئلة الشائعة</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 border-b border-slate-800 pb-2">
              التخصصات الطبية
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>فحص تفاصيل الجنين (Anomaly Scan)</li>
              <li>سونار 4D/5D التذكاري وأشعة الدوبلر</li>
              <li>الحقن المجهري وأطفال الأنابيب (ICSI)</li>
              <li>علاج متلازمة تكيس المبايض (PCOS)</li>
              <li>الولادة القيصرية بدون ألم (TAP Block)</li>
              <li>متابعة حالات الحمل الحرج وتسمم الحمل</li>
            </ul>
          </div>

          {/* Col 4: Clinics Info */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 border-b border-slate-800 pb-2">
              الفروع وأرقام الحجز
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div>
                <span className="font-bold text-white block mb-0.5">فرع مصر الجديدة (المقر الجديد):</span>
                <span>77 ش النزهة، ميدان السبع عمارات</span>
              </div>
              <div>
                <span className="font-bold text-white block mb-0.5">فرع التجمع الخامس:</span>
                <span>عيادات Bless، 164 ش التسعين الشمالي</span>
              </div>
              <div className="pt-2">
                <span className="font-bold text-white block mb-0.5">الخط الساخن للحجز:</span>
                <a href="tel:01021107881" className="text-rose-300 hover:text-white font-semibold text-sm" dir="ltr">
                  010 2110 7881
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-center text-[11px] text-slate-500 space-y-2">
          <p className="max-w-3xl mx-auto leading-relaxed">
            تنويه طبي: المحتوى والمعلومات الواردة في هذا الموقع مخصصة لأغراض التوعية والتثقيف الصحي العام، ولا تغني بأي حال من الأحوال عن الاستشارة الطبية والفحص السريري المباشر لدى الطبيب المختص.
          </p>
          <p>
            جميع الحقوق محفوظة © 2026 عيادة د. دينا مصطفى إبراهيم | تصميم وتطوير متوافق مع معايير محركات البحث الطبية.
          </p>
        </div>
      </div>
    </footer>
  );
}

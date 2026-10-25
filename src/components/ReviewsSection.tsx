import React from "react";
import { Star, Quote, Heart, CheckCircle2 } from "lucide-react";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "أمنية محمود",
      service: "فحص تفاصيل الجنين (Anomaly Scan) وسونار 4D",
      branch: "فرع مصر الجديدة",
      rating: 5,
      date: "منذ أسبوعين",
      comment:
        "دكتورة دينا إنسانة راقية وطبيبة ممتازة جداً. كنت قلقانة جداً بعد ما دكتور تاني قال لي في اشتباه مشكلة في الكلى، دكتورة دينا فحصت البيبي بالسونار بكل دقة وهدوء وطمنتني وشرحتلي كل جزء بالتفصيل على الشاشة. ربنا يجازيها كل خير.",
    },
    {
      name: "سارة عبد الفتاح",
      service: "ولادة قيصرية بدون ألم + خياطة تجميلية",
      branch: "فرع التجمع الخامس",
      rating: 5,
      date: "منذ شهر",
      comment:
        "أول ولادة ليا وكانت خوفي الأكبر هو ألم الجرح بعد العملية. مع تقنية الـ TAP Block ومسكن الـ PCA فعلاً ما حسيتش بأي وجع يذكر وقدرت أتحرك وأشيل بنتي تاني يوم الصبح. وشكل الجرح تجميلي ونضيف جداً بدون أي أثر.",
    },
    {
      name: "نهال سامي",
      service: "علاج تكيس المبايض ومتابعة الحمل بعد تأخر سنتين",
      branch: "فرع مصر الجديدة",
      rating: 5,
      date: "منذ 3 أسابيع",
      comment:
        "بعد رحلة استمرت سنتين مع دكاترة كتير وأدوية وتنشيط عشوائي، دكتورة دينا غيرت الخطة تماماً وبدأت معايا بروتوكول مظبوط يناسب وزني وهرموناتي. الحمد لله ربنا رزقني بالحمل وأنا حالياً بتابع معاها في الشهر السادس.",
    },
    {
      name: "مروة القاضي",
      service: "متابعة حمل حرج (سكر حمل وضغط)",
      branch: "فرع التجمع الخامس",
      rating: 5,
      date: "منذ شهرين",
      comment:
        "الدكتورة دقيقة جداً ومش بتسيب أي تفصيلة للصدفة. متابعتها للدوبلر وسريان الدم للمشيمة خلتني أعدي فترة الحمل بأمان وولدت الحمد لله بسلامة في الأسبوع الـ 38.",
    },
    {
      name: "ياسمين الشريف",
      service: "زيارة فحص نساء دوري والاطمئنان",
      branch: "فرع مصر الجديدة (المقر الجديد)",
      rating: 5,
      date: "حديثاً",
      comment:
        "المقر الجديد في شارع النزهة ميدان السبع عمارات مريح جداً ونضيف، واستقبال السكرتارية بشوش ومحترم. الدكتورة بتسمعك بكل اهتمام وما فيش استعجال زي عيادات كتير.",
    },
    {
      name: "دينا إبراهيم",
      service: "حقن مجهري وتحقيق حلم الأمومة",
      branch: "فرع التجمع الخامس",
      rating: 5,
      date: "منذ 3 أشهر",
      comment:
        "كلمة شكر مش كفاية في حق د. دينا وفريقها. علم وأمانة وإخلاص في كل خطوة من خطوات الحقن المجهري، وربنا كرمني بتوأم جميل بعد صبر 4 سنين.",
    },
  ];

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-rose-50/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold mb-3">
            <Heart className="w-3.5 h-3.5" />
            <span>قصص نجاح وثقة غالية</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
            آراء مريضاتنا وسيدات عيلتنا الكبيرة
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            شهادات حقيقية وتجارب نفخر بها تعكس التزامنا بأعلى معايير الرعاية والأمانة العلمية والاهتمام الإنساني.
          </p>
        </div>

        {/* Rating Overview Badge */}
        <div className="max-w-md mx-auto mb-12 bg-white rounded-2xl p-4 shadow-sm border border-rose-100 flex items-center justify-center gap-6">
          <div className="text-center">
            <span className="text-3xl font-black text-rose-800 block">4.8 / 5</span>
            <div className="flex justify-center text-amber-400 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
          </div>
          <div className="h-10 w-px bg-slate-200"></div>
          <div className="text-right text-xs text-slate-600">
            <span className="font-bold text-slate-800 block text-sm">تقييمات ممتازة وموثقة</span>
            <span>بناءً على تجارب حقيقية في منصات الحجز الطبية والعيادة</span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border border-rose-100/60 hover:border-rose-200 transition-all duration-300 flex flex-col justify-between text-right group"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-rose-200 group-hover:text-rose-400 transition-colors" />
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 font-normal">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-slate-900 text-xs sm:text-sm">
                    {rev.name}
                  </span>
                  <span className="text-[10px] text-slate-400">{rev.date}</span>
                </div>
                <div className="flex justify-between items-center text-[11px] text-slate-500">
                  <span className="text-rose-700 font-medium truncate max-w-[180px]">
                    {rev.service}
                  </span>
                  <span className="bg-slate-100 px-2 py-0.5 rounded-full text-[10px]">
                    {rev.branch}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

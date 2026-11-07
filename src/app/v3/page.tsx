import "./v3.css";
import V3Header from "@/components/v3/V3Header";
import V3Hero from "@/components/v3/V3Hero";
import V3About from "@/components/v3/V3About";
import V3Services from "@/components/v3/V3Services";
import V3GestationalCalc from "@/components/v3/V3GestationalCalc";
import V3Branches from "@/components/v3/V3Branches";
import V3Faq from "@/components/v3/V3Faq";
import V3Footer from "@/components/v3/V3Footer";

export const metadata = {
  title: "د. دينا مصطفى إبراهيم | استشاري نساء وتوليد وطب الجنين",
  description:
    "عيادة د. دينا مصطفى إبراهيم — رعاية الأمومة بأدق المعايير الطبية وأحدث تقنيات طب الجنين",
};

export default function V3Page() {
  return (
    <main className="min-h-screen flex flex-col linen-bg text-stone-800" dir="rtl">
      <V3Header />
      <V3Hero />
      <V3About />
      <V3Services />
      <V3GestationalCalc />
      <V3Branches />
      <V3Faq />
      <V3Footer />
    </main>
  );
}

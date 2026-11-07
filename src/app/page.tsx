import "./v4/v4.css";
import V4Header from "@/components/v4/V4Header";
import V4Hero from "@/components/v4/V4Hero";
import V4About from "@/components/v4/V4About";
import V4Services from "@/components/v4/V4Services";
import V4GestationalCalc from "@/components/v4/V4GestationalCalc";
import V4Branches from "@/components/v4/V4Branches";
import V4Faq from "@/components/v4/V4Faq";
import V4Footer from "@/components/v4/V4Footer";

export const metadata = {
  title: "د. دينا مصطفى إبراهيم | استشاري نساء وتوليد وطب الجنين",
  description: "رعاية طبية متخصصة لصحة الأم والجنين — عيادات مصر الجديدة والتجمع الخامس",
};

export default function Home() {
  return (
    <main className="min-h-screen paper-bg ink-text grain-overlay" dir="rtl">
      <V4Header />
      <V4Hero />
      <V4About />
      <V4Services />
      <V4GestationalCalc />
      <V4Branches />
      <V4Faq />
      <V4Footer />
    </main>
  );
}

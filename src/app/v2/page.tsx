import React from "react";
import type { Metadata } from "next";
import SmoothScroll from "@/components/v2/SmoothScroll";
import V2Header from "@/components/v2/V2Header";
import V2Hero from "@/components/v2/V2Hero";
import V2About from "@/components/v2/V2About";
import V2ServicesBento from "@/components/v2/V2ServicesBento";
import V2GestationalHUD from "@/components/v2/V2GestationalHUD";
import V2Branches from "@/components/v2/V2Branches";
import V2Faq from "@/components/v2/V2Faq";
import V2Footer from "@/components/v2/V2Footer";

export const metadata: Metadata = {
  title: "د. دينا مصطفى إبراهيم | استشاري طب الجنين والنساء والتوليد (النسخة المعمارية الداكنة)",
  description:
    "التجربة الرقمية المتقدمة لعيادة دكتورة دينا مصطفى إبراهيم - استشاري كلية الطب بجامعة عين شمس لطب الجنين، الحقن المجهري، والولادة القيصرية بدون ألم.",
};

export default function V2Page() {
  return (
    <SmoothScroll>
      <main className="min-h-screen flex flex-col bg-[#070709] text-zinc-100 selection:bg-rose-500/30 selection:text-white">
        <V2Header />
        <V2Hero />
        <V2About />
        <V2ServicesBento />
        <V2GestationalHUD />
        <V2Branches />
        <V2Faq />
        <V2Footer />
      </main>
    </SmoothScroll>
  );
}

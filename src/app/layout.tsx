import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drdinamostafa.com"),
  title: "د. دينا مصطفى إبراهيم | استشاري أمراض النساء والتوليد والعقم وطب الجنين - عين شمس",
  description:
    "الموقع الرسمي لعيادة دكتورة دينا مصطفى إبراهيم - دكتوراه واستشاري أمراض النساء والتوليد والحقن المجهري، واستشاري طب الجنين بجامعة عين شمس. عيادات مصر الجديدة (السبع عمارات) والتجمع الخامس.",
  keywords: [
    "دكتورة دينا مصطفى",
    "استشاري طب جنين",
    "دكتور نساء وتوليد مصر الجديدة",
    "حقن مجهري التجمع الخامس",
    "ولادة قيصرية بدون ألم",
    "فحص تشوهات الجنين",
    "سونار 4D",
    "علاج تأخر الحمل",
    "تكيس المبايض",
  ],
  authors: [{ name: "Dr. Dina Mostafa Ibrahim" }],
  openGraph: {
    title: "عيادة د. دينا مصطفى إبراهيم | نساء وتوليد وحقن مجهري وطب الجنين",
    description:
      "استشاري أمراض النساء والتوليد والعقم وطب الجنين بكلية الطب - جامعة عين شمس. رعاية فائقة للأم والجنين في مصر الجديدة والتجمع الخامس.",
    url: "https://drdinamostafa.com",
    siteName: "Dr. Dina Mostafa Clinic",
    images: [
      {
        url: "/images/maternity-warm.jpg",
        width: 1200,
        height: 630,
        alt: "عيادة د. دينا مصطفى إبراهيم - رعاية متكاملة للأم والجنين",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "عيادة د. دينا مصطفى إبراهيم | استشاري نساء وتوليد وطب الجنين",
    description:
      "استشاري أمراض النساء والتوليد والعقم وطب الجنين بكلية الطب - جامعة عين شمس. فروع مصر الجديدة والتجمع الخامس.",
    images: ["/images/maternity-warm.jpg"],
  },
  alternates: {
    canonical: "https://drdinamostafa.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "د. دينا مصطفى إبراهيم - Dr. Dina Mostafa",
  alternateName: "Dr Dina Mostafa clinic د. دينا مصطفى",
  url: "https://drdinamostafa.com",
  telephone: "+201021107881",
  medicalSpecialty: [
    "Obstetric",
    "Gynecologic",
    "FetalMedicine",
    "ReproductiveEndocrinology",
  ],
  description:
    "استشاري أمراض النساء والتوليد والعقم والحقن المجهري، واستشاري طب الجنين بكلية الطب جامعة عين شمس.",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "77 شارع النزهة، ميدان السبع عمارات",
      addressLocality: "مصر الجديدة",
      addressRegion: "القاهرة",
      addressCountry: "EG",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "عيادات بليس - 164 شارع التسعين الشمالي بجوار مستشفى الشفا",
      addressLocality: "التجمع الخامس",
      addressRegion: "القاهرة",
      addressCountry: "EG",
    },
  ],
  priceRange: "750 EGP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#FCFBFD] text-slate-800 antialiased selection:bg-rose-100 selection:text-rose-900">
        {children}
      </body>
    </html>
  );
}

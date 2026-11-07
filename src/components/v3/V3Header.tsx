"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Menu, X, Heart, Phone, Sparkles } from "lucide-react";

export default function V3Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "الرئيسية", href: "#hero" },
    { label: "خدماتنا", href: "#services" },
    { label: "الفروع والمواعيد", href: "#branches" },
    { label: "الأسئلة الشائعة", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#fdf8f2]/95 backdrop-blur-md shadow-sm shadow-amber-100/60 border-b border-amber-100/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">

        {/* Brand — warm serif wordmark */}
        <a href="#hero" className="flex items-center gap-3 group select-none">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-400 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-rose-300/40 group-hover:scale-110 transition-transform duration-300">
            <Heart className="w-5 h-5 fill-white" />
          </div>
          <div className="text-right leading-tight">
            <span className="block text-base font-black text-stone-800 tracking-tight group-hover:text-rose-600 transition-colors">
              د. دينا مصطفى
            </span>
            <span className="block text-[10px] text-stone-400 font-medium tracking-wide">
              استشاري نساء وتوليد وطب الجنين
            </span>
          </div>
        </a>

        {/* Desktop nav — clean, airy */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-semibold text-stone-600 hover:text-rose-500 transition-colors relative after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-rose-400 after:transition-all after:duration-300 hover:after:w-full pb-0.5"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA cluster */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/v2"
            className="hidden sm:flex items-center gap-1.5 text-[11px] font-bold text-stone-400 hover:text-stone-600 transition-colors"
          >
            <Sparkles className="w-3 h-3" />
            النسخة الداكنة
          </Link>

          <a
            href="#booking"
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-400 hover:to-rose-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-rose-300/50 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
          >
            <Calendar className="w-3.5 h-3.5" />
            احجزي موعدك
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl text-stone-600 hover:bg-rose-50 transition-colors"
            aria-label="القائمة"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden bg-[#fdf8f2]/98 backdrop-blur-md border-t border-amber-100/60 overflow-hidden"
          >
            <div className="px-5 py-6 flex flex-col gap-2 text-right">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 px-4 rounded-xl font-semibold text-stone-700 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-3 border-t border-amber-100 space-y-2">
                <a
                  href="#booking"
                  onClick={() => setMobileOpen(false)}
                  className="w-full py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-bold text-center rounded-2xl shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  احجزي موعدك الآن
                </a>
                <a
                  href="tel:01021107881"
                  className="w-full py-2.5 bg-amber-50 text-stone-700 font-semibold text-center rounded-2xl border border-amber-200 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-600" />
                  اتصالي مباشرة
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Calendar,
  Menu,
  X,
  Stethoscope,
  Sparkles,
} from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "الرئيسية", href: "#hero" },
    { label: "خدماتنا الطبية", href: "#services" },
    { label: "الفروع والمواعيد", href: "#branches" },
    { label: "الأسئلة الشائعة", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-rose-100 shadow-xs">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rose-500 to-rose-700 flex items-center justify-center text-white shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform">
            <Stethoscope className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
              د. دينا مصطفى
            </span>
            <span className="text-[11px] font-semibold text-rose-700 tracking-tight">
              استشاري النساء والتوليد والعقم وطب الجنين • جامعة عين شمس
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-bold text-slate-700 hover:text-rose-700 transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-rose-600 after:absolute after:bottom-0 after:right-0 after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Icons, Dark Version Pill & CTA Button */}
        <div className="hidden sm:flex items-center gap-2">
          <Link
            href="/v2"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-bold transition-all shadow-xs"
            title="معاينة النسخة المعمارية الداكنة (Awwwards 2026)"
          >
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>النسخة المعمارية الداكنة</span>
          </Link>

          <a
            href="https://www.facebook.com/p/Dr-Dina-Mostafa-clinic-%D8%AF-%D8%AF%D9%8A%D9%86%D8%A7-%D9%85%D8%B5%D8%B7%D9%81%D9%89-100093906760151/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-[#1877F2] text-slate-600 hover:text-white flex items-center justify-center transition-all shadow-2xs hover:scale-105"
            aria-label="صفحة الفيسبوك"
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
            className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] text-slate-600 hover:text-white flex items-center justify-center transition-all shadow-2xs hover:scale-105"
            aria-label="حساب إنستغرام"
            title="إنستغرام"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a
            href="#booking"
            className="flex items-center gap-2 bg-rose-700 hover:bg-rose-800 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-rose-700/20 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            <span>احجزي موعدك الآن</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-rose-50 transition-colors"
          aria-label="القائمة الرئيسية"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-rose-700" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-rose-100 px-4 pt-3 pb-6 shadow-xl animate-in fade-in duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg text-slate-800 font-medium hover:bg-rose-50 hover:text-rose-700 transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-rose-700 text-white rounded-xl font-bold text-center text-sm shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                احجزي موعدك الآن
              </a>
              <Link
                href="/v2"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 bg-slate-900 text-white rounded-xl font-bold text-center text-xs shadow-md flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                <span>النسخة المعمارية الداكنة (Awwwards 2026)</span>
              </Link>
              <a
                href="tel:01021107881"
                className="w-full py-2.5 bg-slate-100 text-slate-800 rounded-xl font-semibold text-center text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-slate-600" />
                اتصال بالعيادة: 01021107881
              </a>

              <div className="flex items-center justify-center gap-3 pt-2">
                <a
                  href="https://www.facebook.com/p/Dr-Dina-Mostafa-clinic-%D8%AF-%D8%AF%D9%8A%D9%86%D8%A7-%D9%85%D8%B5%D8%B7%D9%81%D9%89-100093906760151/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-[#1877F2] text-slate-600 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="صفحة الفيسبوك"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/dr.dinamostafaclinic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] text-slate-600 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="حساب إنستغرام"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

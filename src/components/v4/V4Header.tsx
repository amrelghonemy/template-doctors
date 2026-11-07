"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "الرئيسية", href: "#" },
  { label: "خدماتنا الطبية", href: "#services" },
  { label: "الفروع والمواعيد", href: "#branches" },
  { label: "الأسئلة الشائعة", href: "#faq" },
];

export default function V4Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 right-0 left-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(253,250,245,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(28,22,18,0.08)" : "none",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
          {/* Brand */}
          <Link href="/v4" className="flex flex-col leading-tight shrink-0">
            <span className="font-extrabold text-base" style={{ color: "var(--text-ink)" }}>
              د. دينا مصطفى
            </span>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
              استشاري نساء وتوليد
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="v4-nav-link text-sm">
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#booking"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                border: "1.5px solid var(--accent-rose)",
                color: "var(--accent-rose)",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "var(--accent-rose)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-rose)";
              }}
            >
              احجزي موعداً
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="فتح القائمة"
              onClick={() => setMenuOpen(true)}
            >
              <span className="block w-5 h-0.5 rounded" style={{ background: "var(--text-ink)" }} />
              <span className="block w-5 h-0.5 rounded" style={{ background: "var(--text-ink)" }} />
              <span className="block w-3.5 h-0.5 rounded self-end" style={{ background: "var(--text-ink)" }} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40"
              style={{ background: "rgba(28,22,18,0.4)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              className="fixed top-0 left-0 bottom-0 z-50 w-80 flex flex-col"
              style={{ background: "var(--bg-primary)" }}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.5 }}
            >
              {/* Header of drawer */}
              <div className="flex items-center justify-between px-6 py-5 border-b" style={{ borderColor: "var(--border-hairline)" }}>
                <span className="font-extrabold text-base" style={{ color: "var(--text-ink)" }}>
                  د. دينا مصطفى
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="إغلاق القائمة"
                  className="p-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Nav items */}
              <nav className="flex flex-col px-6 py-8 gap-6 flex-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-xl font-semibold"
                    style={{ color: "var(--text-ink)" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#booking"
                  className="mt-4 inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-semibold"
                  style={{ background: "var(--accent-rose)", color: "#fff" }}
                  onClick={() => setMenuOpen(false)}
                >
                  احجزي موعداً
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

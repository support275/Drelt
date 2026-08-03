"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Overview",        href: "/" },
  { label: "Classification",  href: "/classification" },
  { label: "Origination FAQs", href: "/origination-faqs" },
  { label: "DD Issues",       href: "/dd-issues" },
  { label: "Workflow",        href: "/workflow" },
  { label: "Case Study",      href: "/case-study" },
  { label: "Checklist",       href: "/checklist" },
  { label: "Credit Memo",     href: "/credit-memo" },
  { label: "Glossary",        href: "/glossary" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-green-dark">
        {/* Row 1: logo + mobile hamburger */}
        <div className="border-b border-border/20">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
            <Link href="/" className="flex items-center shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/drelt-logo.svg" alt="DRELT" className="h-14 w-auto" />
            </Link>

            {/* Hamburger button */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded hover:bg-white/5 transition-colors"
            >
              <span className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-1.75" : ""}`} />
              <span className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-1.75" : ""}`} />
            </button>
          </div>
        </div>

        {/* Row 2: desktop nav links */}
        <div className="hidden lg:block border-b border-border/20">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
            <nav className="flex items-center justify-between h-12">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative whitespace-nowrap px-6 py-1.5 font-medium font-heading text-center transition-colors text-[14px] leading-[16px] tracking-[-0.02em] ${
                    isActive(link.href)
                      ? "text-lime after:absolute after:left-0 after:right-0 after:-bottom-px after:h-0.5 after:bg-lime"
                      : "text-white/70 hover:text-white/90 hover:bg-white/5 rounded"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-ink/70 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`}
        />
        <div className={`absolute top-16 left-0 right-0 bg-green-dark border-b border-border/30 transition-all duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>
          <nav className="max-w-350 mx-auto px-4 py-3 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-3 rounded font-medium font-heading text-center transition-colors text-[14px] leading-[16px] tracking-[-0.02em] border-b border-border/20 last:border-0 ${
                  isActive(link.href)
                    ? "text-lime bg-lime/15"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

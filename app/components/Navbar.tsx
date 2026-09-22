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
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
            <Link href="/" className="flex items-center shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/drelt-logo.svg" alt="DRELT" className="h-16 w-auto" />
            </Link>

            {/* Hamburger button */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className={`lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5 rounded-full ring-1 transition-all duration-300 active:scale-90 ${
                menuOpen
                  ? "bg-lime/15 ring-lime/40"
                  : "bg-white/5 ring-white/10 hover:bg-white/10 hover:ring-white/25"
              }`}
            >
              <span className={`block h-0.5 w-6 rounded-full transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] ${menuOpen ? "bg-lime translate-y-2 rotate-45 delay-75" : "bg-white"}`} />
              <span className={`block h-0.5 rounded-full bg-white transition-all duration-200 ${menuOpen ? "w-6 opacity-0 translate-x-3" : "w-4 opacity-100 delay-150"}`} />
              <span className={`block h-0.5 w-6 rounded-full transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] ${menuOpen ? "bg-lime -translate-y-2 -rotate-45 delay-75" : "bg-white"}`} />
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
        <div className={`absolute top-20 left-0 right-0 bg-green-dark border-b border-border/30 transition-all duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>
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

"use client";

import { useEffect, useState } from "react";

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => setHasScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background,border-color] duration-300 ${
        hasScrolled
          ? "border-[#1c2333] bg-[#080c10]/70 backdrop-blur-2xl"
          : "border-transparent bg-transparent backdrop-blur-none"
      }`}
    >
      <div className="max-w-275 mx-auto px-6 h-15 flex items-center justify-between">
        <a
          href="#"
          className="font-heading font-bold text-[1.1rem] tracking-[-0.03em]"
        >
          &lt;<span className="text-primary-light">Gabriel</span> /&gt;
        </a>
        <nav className="flex gap-7 items-center">
          <a
            href="#sobre"
            className="text-sm font-medium text-[#6b7280] transition-colors duration-200 hover:text-[#e2e8f0] hidden sm:block"
          >
            Sobre
          </a>
          <a
            href="#skills"
            className="text-sm font-medium text-[#6b7280] transition-colors duration-200 hover:text-[#e2e8f0] hidden sm:block"
          >
            Skills
          </a>
          <a
            href="#projetos"
            className="text-sm font-medium text-[#6b7280] transition-colors duration-200 hover:text-[#e2e8f0] hidden sm:block"
          >
            Projetos
          </a>
          <a
            href="#experiencia"
            className="text-sm font-medium text-[#6b7280] transition-colors duration-200 hover:text-[#e2e8f0] hidden sm:block"
          >
            Experiência
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-semibold transition-[background] duration-200"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}

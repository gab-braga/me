import { ArrowRight } from "lucide-react";
import { Terminal } from "./terminal";
import { GitHubIcon } from "@/components/icons/github";
import { LinkedInIcon } from "@/components/icons/linked-in";

export function Hero() {
  return (
    <section className="bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-size-[48px_48px] min-h-screen flex items-center px-6 py-25 pb-15 relative overflow-hidden">
      <div className="pointer-events-none absolute rounded-full blur-[90px] w-125 h-125 bg-[rgba(59,130,246,0.12)] -top-20 -left-30"></div>
      <div className="pointer-events-none absolute rounded-full blur-[90px] w-75 h-75 bg-[rgba(96,165,250,0.07)] bottom-15 right-0"></div>

      <div className="max-w-275 mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="font-mono text-[0.78rem] text-primary-light tracking-[0.08em] uppercase">
            Engenheiro de Software
          </span>

          <h1 className="font-heading text-[clamp(2.4rem,5vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.04em] my-4 mb-6">
            <div className="size-10! inline-block rounded-full bg-cover bg-[url(/images/profile.jpg)] transition-transform hover:scale-120" />{" "}
            Olá, sou
            <br />
            <span className="bg-linear-to-br from-primary-light to-cyan-400 bg-clip-text text-transparent">
              Gabriel Braga
            </span>
            .
          </h1>

          <p className="text-[1.05rem] leading-[1.7] max-w-100 mb-9 text-[#6b7280]">
            Transformo requisitos complexos em interfaces que as pessoas adoram
            usar. Foco em React, Angular e TypeScript — com um olho sempre no
            detalhe e outro na performance.
          </p>

          <div className="flex gap-3 flex-wrap">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold text-sm transition-[background] duration-200"
            >
              Ver projetos
              <ArrowRight className="size-4.5" />
            </a>
            <a
              href="https://github.com/gab-braga"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#1c2333] hover:border-[rgba(59,130,246,0.5)] text-[#e2e8f0] font-medium text-sm transition-[border-color] duration-200"
            >
              <GitHubIcon />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/f-gabriel-braga"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#1c2333] hover:border-[rgba(59,130,246,0.5)] text-[#e2e8f0] font-medium text-sm transition-[border-color] duration-200"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="relative">
          <Terminal />
        </div>
      </div>
    </section>
  );
}

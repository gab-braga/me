"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function About() {
  const { elementRef, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="sobre" className="py-25 px-6">
      <div className="max-w-275 mx-auto">
        <div
          ref={elementRef}
          className={`grid grid-cols-1 md:grid-cols-2 items-center gap-20 transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          <div className="w-full max-w-110 sm:max-w-none md:max-w-90 flex flex-col sm:flex-row md:flex-col gap-4 max-sm:mx-auto">
            <div className="aspect-square w-full sm:max-w-80 md:max-w-90 rounded-2xl bg-[#0f1420] border border-[#1c2333] overflow-hidden relative flex items-center justify-center">
              <div className="absolute inset-0 bg-cover bg-[linear-gradient(135deg,#3b82f640_0%,#60a5fa40_100%),url(/images/profile.jpg)]"></div>
            </div>

            <div className="w-full grid grid-cols-2 gap-3">
              <div className="border border-[#1c2333] transition-[border-color,box-shadow] duration-250 hover:border-primary/50 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_8px_32px_rgba(59,130,246,0.08)] rounded-xl p-4 bg-[#0f1420] flex flex-col items-center justify-center">
                <div className="font-heading bg-linear-to-br from-primary-light to-cyan-400 bg-clip-text text-transparent text-[1.8rem] font-bold">
                  +6
                </div>
                <div className="text-[0.78rem] text-[#6b7280] text-center mt-0.5">
                  anos de experiência
                </div>
              </div>
              <div className="border border-[#1c2333] transition-[border-color,box-shadow] duration-250 hover:border-primary/50 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_8px_32px_rgba(59,130,246,0.08)] rounded-xl p-4 bg-[#0f1420] flex flex-col items-center justify-center">
                <div className="font-heading bg-linear-to-br from-primary-light to-cyan-400 bg-clip-text text-transparent text-[1.8rem] font-bold">
                  +30
                </div>
                <div className="text-[0.78rem] text-[#6b7280] text-center mt-0.5">
                  projetos concluídos
                </div>
              </div>
              <div className="border border-[#1c2333] transition-[border-color,box-shadow] duration-250 hover:border-primary/50 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_8px_32px_rgba(59,130,246,0.08)] rounded-xl p-4 bg-[#0f1420] flex flex-col items-center justify-center">
                <div className="font-heading bg-linear-to-br from-primary-light to-cyan-400 bg-clip-text text-transparent text-[1.8rem] font-bold">
                  +10
                </div>
                <div className="text-[0.78rem] text-[#6b7280] text-center mt-0.5">
                  stacks utilizadas
                </div>
              </div>
              <div className="border border-[#1c2333] transition-[border-color,box-shadow] duration-250 hover:border-primary/50 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_8px_32px_rgba(59,130,246,0.08)] rounded-xl p-4 bg-[#0f1420] flex flex-col items-center justify-center">
                <div className="font-heading bg-linear-to-br from-primary-light to-cyan-400 bg-clip-text text-transparent text-[1.8rem] font-bold">
                  100%
                </div>
                <div className="text-[0.78rem] text-[#6b7280] text-center mt-0.5">
                  compromisso
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs text-primary-light tracking-[0.08em] uppercase mb-3">
              {"//"} sobre mim
            </p>
            <h2 className="font-heading text-[2.2rem] font-bold leading-[1.15] tracking-[-0.03em] mb-5">
              Código limpo.
              <br />
              Interfaces que
              <span className="bg-linear-to-br from-primary-light to-cyan-400 bg-clip-text text-transparent">
                funcionam
              </span>
              .
            </h2>
            <p className="text-[#6b7280] leading-[1.75] mb-4">
              Sou engenheiro de software especializado em Frontend, com foco em
              criar experiências digitais rápidas, acessíveis e bem
              estruturadas. Trabalho com React/Next.js e Node.js no dia a dia,
              sempre com TypeScript como base.
            </p>
            <p className="text-[#6b7280] leading-[1.75] mb-7">
              Me importo com os detalhes que a maioria ignora: performance de
              renderização, acessibilidade, design systems escaláveis e código
              que o próximo dev vai agradecer em ler.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#1c2333] bg-[#0f1420] px-3 py-1.25 font-mono text-[0.78rem] text-[#e2e8f0] transition-[border-color,color] duration-200 hover:border-primary/60 hover:text-primary-light">
                #clean-code
              </span>
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#1c2333] bg-[#0f1420] px-3 py-1.25 font-mono text-[0.78rem] text-[#e2e8f0] transition-[border-color,color] duration-200 hover:border-primary/60 hover:text-primary-light">
                #performance
              </span>
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#1c2333] bg-[#0f1420] px-3 py-1.25 font-mono text-[0.78rem] text-[#e2e8f0] transition-[border-color,color] duration-200 hover:border-primary/60 hover:text-primary-light">
                #a11y
              </span>
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#1c2333] bg-[#0f1420] px-3 py-1.25 font-mono text-[0.78rem] text-[#e2e8f0] transition-[border-color,color] duration-200 hover:border-primary/60 hover:text-primary-light">
                #design-systems
              </span>
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#1c2333] bg-[#0f1420] px-3 py-1.25 font-mono text-[0.78rem] text-[#e2e8f0] transition-[border-color,color] duration-200 hover:border-primary/60 hover:text-primary-light">
                #tdd
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

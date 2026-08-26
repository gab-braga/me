"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function Portfolio() {
  const { elementRef: headerRef, isVisible: isHeaderVisible } =
    useScrollReveal<HTMLDivElement>();
  const { elementRef: contentRef, isVisible: isContentVisible } =
    useScrollReveal<HTMLDivElement>();

  return (
    <section id="projetos" className="py-25 px-6 border-t border-[#1c2333]">
      <div className="max-w-275 mx-auto">
        <div
          ref={headerRef}
          className={`flex items-end justify-between mb-12 flex-wrap gap-3 transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
            isHeaderVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
        >
          <div>
            <p className="font-mono text-xs text-primary-light tracking-[0.08em] uppercase mb-2.5">
              {"//"} projetos
            </p>
            <h2 className="font-heading text-[2rem] font-bold tracking-[-0.03em]">
              O que eu construí
            </h2>
          </div>
          <a
            href="https://github.com/gab-braga"
            target="_blank"
            className="text-[0.85rem] font-medium text-[#6b7280] hover:text-primary-light whitespace-nowrap transition-colors"
          >
            Ver todos no GitHub →
          </a>
        </div>

        <div
          ref={contentRef}
          className={`grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5 transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
            isContentVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
        >
          <div className="border border-[#1c2333] transition-[border-color,box-shadow] duration-250 hover:border-primary/50 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_8px_32px_rgba(59,130,246,0.08)] rounded-2xl bg-[#0f1420] overflow-hidden flex flex-col">
            <div className="h-50 bg-cover bg-center bg-[linear-gradient(to_bottom,#00000060,#00000010),url(/images/projects/redecon.jpg)] flex items-center justify-center border-b border-[#1c2333]"></div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-2.5">
                <h3 className="font-heading font-semibold text-base flex-1">
                  Instituto RedeCon
                </h3>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#1c2333] bg-[#0f1420] px-3 py-1.25 font-mono text-[0.78rem] text-[#e2e8f0] transition-[border-color,color] duration-200 hover:border-primary/60 hover:text-primary-light">
                  React.js
                </span>
              </div>
              <p className="text-[0.83rem] text-[#6b7280] leading-[1.65] flex-1">
                A plataforma permite o controle de matrículas de alunos,
                disponibilização de materiais de estudo, gerenciamento de
                questões e atividades, além do acompanhamento do desempenho
                acadêmico.
              </p>
              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#1c2333] bg-[#0f1420] px-3 py-1.25 font-mono text-[0.78rem] text-[#e2e8f0] transition-[border-color,color] duration-200 hover:border-primary/60 hover:text-primary-light text-xs">
                  Shadcn UI
                </span>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#1c2333] bg-[#0f1420] px-3 py-1.25 font-mono text-[0.78rem] text-[#e2e8f0] transition-[border-color,color] duration-200 hover:border-primary/60 hover:text-primary-light text-xs">
                  Prisma ORM
                </span>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#1c2333] bg-[#0f1420] px-3 py-1.25 font-mono text-[0.78rem] text-[#e2e8f0] transition-[border-color,color] duration-200 hover:border-primary/60 hover:text-primary-light text-xs">
                  Mercado Pago API
                </span>
              </div>
              {/* <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  className="text-[0.82rem] text-primary-light font-medium transition-opacity hover:opacity-[0.7]"
                  >GitHub ↗</a
                >
                <a
                  href="#"
                  className="text-[0.82rem] text-[#6b7280] hover:text(-text) font-medium transition-colors"
                  >Demo ↗</a
                >
              </div> */}
            </div>
          </div>

          <div className="border border-[#1c2333] transition-[border-color,box-shadow] duration-250 hover:border-primary/50 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_8px_32px_rgba(59,130,246,0.08)] rounded-2xl bg-[#0f1420] overflow-hidden flex flex-col">
            <div className="h-50 bg-cover bg-center bg-[linear-gradient(to_bottom,#00000060,#00000010),url(/images/projects/coprof.jpg)] flex items-center justify-center border-b border-[#1c2333]"></div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-2.5">
                <h3 className="font-heading font-semibold text-base flex-1">
                  CoProf
                </h3>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#1c2333] bg-[#0f1420] px-3 py-1.25 font-mono text-[0.78rem] text-[#e2e8f0] transition-[border-color,color] duration-200 hover:border-primary/60 hover:text-primary-light">
                  Next.js
                </span>
              </div>
              <p className="text-[0.83rem] text-[#6b7280] leading-[1.65] flex-1">
                Plataforma web desenvolvida para auxiliar professores no
                registro e organização de aulas. A aplicação permite gravar
                áudios, gerar transcrições automáticas e utilizar inteligência
                artificial para criar resumos inteligentes, destacando os
                principais tópicos abordados.
              </p>
              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#1c2333] bg-[#0f1420] px-3 py-1.25 font-mono text-[0.78rem] text-[#e2e8f0] transition-[border-color,color] duration-200 hover:border-primary/60 hover:text-primary-light text-xs">
                  MongoDB
                </span>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#1c2333] bg-[#0f1420] px-3 py-1.25 font-mono text-[0.78rem] text-[#e2e8f0] transition-[border-color,color] duration-200 hover:border-primary/60 hover:text-primary-light text-xs">
                  OpenAI API
                </span>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#1c2333] bg-[#0f1420] px-3 py-1.25 font-mono text-[0.78rem] text-[#e2e8f0] transition-[border-color,color] duration-200 hover:border-primary/60 hover:text-primary-light text-xs">
                  Google Classroom API
                </span>
              </div>
              {/* <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  className="text-[0.82rem] text-primary-light font-medium transition-opacity hover:opacity-[0.7]"
                  >GitHub ↗</a
                >
                <a
                  href="#"
                  className="text-[0.82rem] text-[#6b7280] hover:text(-text) font-medium transition-colors"
                  >Demo ↗</a
                >
              </div> */}
            </div>
          </div>

          <div className="border border-[#1c2333] transition-[border-color,box-shadow] duration-250 hover:border-primary/50 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_8px_32px_rgba(59,130,246,0.08)] rounded-2xl bg-[#0f1420] overflow-hidden flex flex-col">
            <div className="h-50 bg-cover bg-center bg-[linear-gradient(to_bottom,#00000060,#00000010),url(/images/projects/marriage.jpg)] flex items-center justify-center border-b border-[#1c2333]"></div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-2.5">
                <h3 className="font-heading font-semibold text-base flex-1">
                  Wedding Site
                </h3>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#1c2333] bg-[#0f1420] px-3 py-1.25 font-mono text-[0.78rem] text-[#e2e8f0] transition-[border-color,color] duration-200 hover:border-primary/60 hover:text-primary-light">
                  Next.js
                </span>
              </div>
              <p className="text-[0.83rem] text-[#6b7280] leading-[1.65] flex-1">
                Plataforma digital personalizada do casal que reúne informações
                do casamento em um único lugar, como história dos noivos,
                detalhes da cerimônia e recepção, confirmação de presença, lista
                de presentes, galeria de fotos e comunicados aos convidados.
              </p>
              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#1c2333] bg-[#0f1420] px-3 py-1.25 font-mono text-[0.78rem] text-[#e2e8f0] transition-[border-color,color] duration-200 hover:border-primary/60 hover:text-primary-light text-xs">
                  Firebase
                </span>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#1c2333] bg-[#0f1420] px-3 py-1.25 font-mono text-[0.78rem] text-[#e2e8f0] transition-[border-color,color] duration-200 hover:border-primary/60 hover:text-primary-light text-xs">
                  Tailwind CSS
                </span>
              </div>
              {/* <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  className="text-[0.82rem] text-primary-light font-medium transition-opacity hover:opacity-[0.7]"
                  >GitHub ↗</a
                >
                <a
                  href="#"
                  className="text-[0.82rem] text-[#6b7280] hover:text(-text) font-medium transition-colors"
                  >Demo ↗</a
                >
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

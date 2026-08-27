"use client";

import { Tag } from "@/components/tag";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const professionalStats = [
  {
    label: "+8",
    description:
      "anos de experiência transformando ideias em soluções digitais",
  },
  {
    label: "+30",
    description: "projetos desenvolvidos e entregues com sucesso.",
  },
  {
    label: "+20",
    description: "tecnologias utilizadas em diferentes projetos.",
  },
  {
    label: "100%",
    description: "compromisso com a qualidade e os resultados de cada projeto.",
  },
];

const expertiseTags = [
  "#clean-code",
  "#performance",
  "#a11y",
  "#design-systems",
  "#tdd",
];

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
          <div className="w-full grid grid-cols-1 gap-5">
            {professionalStats.map(({ label, description }) => (
              <div
                key={label}
                className="border border-[#1c2333] transition-[border-color,box-shadow] duration-250 hover:border-primary/50 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_8px_32px_rgba(59,130,246,0.08)] rounded-xl p-4 bg-[#0f1420] flex items-center gap-4"
              >
                <div className="font-heading bg-linear-to-br from-primary-light to-cyan-400 bg-clip-text text-transparent text-[1.8rem] font-bold">
                  {label}
                </div>
                <div className="text-[0.78rem] text-[#6b7280] text-center mt-0.5">
                  {description}
                </div>
              </div>
            ))}
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
                {" "}
                funcionam
              </span>
              .
            </h2>
            <p className="text-[#6b7280] leading-[1.75] mb-4">
              Sou engenheiro de software com experiência no desenvolvimento de
              soluções completas, do backend à interface. Trabalho com React.js,
              Next.js, Node.js (TypeScript) e Java na criação de aplicações
              eficientes, escaláveis e bem estruturadas.
            </p>
            <p className="text-[#6b7280] leading-[1.75] mb-7">
              Me importo com os detalhes que a maioria ignora: performance de
              renderização, acessibilidade, design systems escaláveis e código
              que o próximo dev vai agradecer em ler.
            </p>
            <div className="flex flex-wrap gap-2">
              {expertiseTags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

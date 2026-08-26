"use client";

import { PortfolioCard } from "@/components/portfolio/portfolio-card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const portfolio = [
  {
    cover: "/images/projects/redecon.jpg",
    title: "Instituto RedeCon",
    category: "React.js",
    description:
      "A plataforma permite o controle de matrículas de alunos, disponibilização de materiais de estudo, gerenciamento de questões e atividades, além do acompanhamento do desempenho acadêmico.",
    tags: ["Shadcn UI", "Prisma ORM", "Mercado Pago API"],
  },
  {
    cover: "/images/projects/coprof.jpg",
    title: "CoProf",
    category: "Next.js",
    description:
      "Plataforma web desenvolvida para auxiliar professores no registro e organização de aulas. A aplicação permite gravar áudios, gerar transcrições automáticas e utilizar inteligência artificial para criar resumos inteligentes, destacando os principais tópicos abordados.",
    tags: ["MongoDB", "OpenAI API", "Google Classroom API"],
  },
  {
    cover: "/images/projects/wedding.jpg",
    title: "Wedding Site",
    category: "Next.js",
    description:
      "Plataforma digital personalizada do casal que reúne informações do casamento em um único lugar, como história dos noivos, detalhes da cerimônia e recepção, confirmação de presença, lista de presentes, galeria de fotos e comunicados aos convidados.",
    tags: ["Firebase", "Tailwind CSS"],
  },
];

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
          {portfolio.map((item) => (
            <PortfolioCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

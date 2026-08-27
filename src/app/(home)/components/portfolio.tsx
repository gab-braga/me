"use client";

import { PortfolioCard } from "@/components/portfolio/portfolio-card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const portfolio = [
  {
    cover: "/images/projects/redecon.jpg",
    title: "Instituto RedeCon",
    category: "Educação",
    description:
      "A plataforma permite o controle de matrículas de alunos, disponibilização de materiais de estudo, gerenciamento de questões e atividades, além do acompanhamento do desempenho acadêmico.",
    tags: ["Prisma ORM", "Mercado Pago API"],
  },
  {
    cover: "/images/projects/coprof.png",
    title: "CoProf",
    category: "Inteligência Artificial",
    description:
      "Plataforma web desenvolvida para auxiliar professores no registro e organização de aulas. A aplicação permite gravar áudios, gerar transcrições automáticas e utilizar inteligência artificial para criar resumos inteligentes.",
    tags: ["OpenAI API", "Google Classroom API"],
  },
  {
    cover: "/images/projects/wedding.jpg",
    title: "Wedding Site",
    category: "Casamentos",
    description:
      "Plataforma digital personalizada do casal que reúne informações do casamento em um único lugar, com detalhes da cerimônia, confirmação de presença, galeria de fotos e comunicados aos convidados.",
    tags: ["Firebase", "Tailwind CSS"],
  },
  {
    cover: "/images/projects/detetive-sql.png",
    title: "Detetive SQL",
    category: "Jogos",
    description:
      "Jogo educativo em que o jogador utiliza consultas SQL para investigar pistas, analisar dados e solucionar um crime.",
    tags: ["React.js", "SQLite", "Firebase"],
  },
  {
    cover: "/images/projects/terragro.png",
    title: "Terragro",
    category: "Divulgação",
    description:
      "Site institucional voltado à divulgação de informações agrícolas e à apresentação de produtos e soluções para o campo.",
    tags: ["Bootstrap", "React.js"],
  },
  {
    cover: "/images/projects/controleasy.png",
    title: "Controleasy",
    category: "Gestão",
    description:
      "Plataforma para simplificar a gestão de convênios, propostas, licitações e recursos financeiros, oferecendo mais controle aos processos administrativos.",
    tags: ["Shadcn UI", "React.js", "Auth"],
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

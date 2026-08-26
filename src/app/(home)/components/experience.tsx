"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const professionalExperience = [
  {
    period: "Jan/2026 - Presente",
    role: "Software Engineer",
    company: " IVI Data Science · Remoto",
    description:
      "Desenvolvimento e evolução de uma plataforma de cursos online e e-commerce, atuando na implementação de novas funcionalidades, melhorias de experiência do usuário e integração de sistemas de pagamento e gestão de conteúdo.",
  },
  {
    period: "Nov/2025 - Feb/2026",
    role: "Software Engineer",
    company: "SoulCode Academy · Remoto",
    description:
      "Desenvolvimento de sites e sistemas para diferentes clientes, com atuação em TypeScript moderno, Next.js e desenvolvimento frontend.",
  },
  {
    period: "Jun/2022 - Nov/2025",
    role: "Programming Teacher",
    company: "SoulCode Academy · Remoto",
    description:
      "Ensino de programação e desenvolvimento fullstack, com foco em Java, JavaScript, React e aplicação prática dos conceitos em projetos.",
  },
];

const educationAndCertifications = [
  {
    title: "Formação em Desenvolvimento Front-end",
    period: "2024-2026",
    institution: "Origamid",
  },
  {
    title: " Microsoft Certified: Fundamentals + Security + AI",
    period: "2024",
    institution: "Microsoft Azure",
  },
  {
    title: "Ciência da Computação",
    period: "2020-2025",
    institution: "Instituto Federal · Tianguá, CE",
  },
  {
    title: "Formação em Técnico de Informática",
    period: "2017-2019",
    institution: "Escola Estadual Profissional · Guaraciaba do Norte, CE",
  },
];

export function Experience() {
  const { elementRef: leftColumnRef, isVisible: isLeftColumnVisible } =
    useScrollReveal<HTMLDivElement>();

  const { elementRef: rightColumnRef, isVisible: isRightColumnVisible } =
    useScrollReveal<HTMLDivElement>();

  return (
    <section id="experiencia" className="py-25 px-6 border-t border-[#1c2333]">
      <div className="max-w-275 mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <div
          ref={leftColumnRef}
          className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
            isLeftColumnVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
        >
          <p className="font-mono text-[0.75rem] text-primary-light tracking-[0.08em] uppercase mb-2.5">
            {"//"} trajetória
          </p>
          <h2 className="font-heading text-[2rem] font-bold tracking-[-0.03em] mb-10">
            Experiência
          </h2>

          <div className="relative pl-6">
            <div className="absolute inset-y-0 left-0 top-2 w-px bg-[#1c2333]"></div>

            <div className="relative mb-9">
              <div className="absolute -left-3 top-2.5 h-2.25 w-2.25 rounded-full border-2 border-[#080c10] bg-primary"></div>
              <span className="font-mono text-[0.72rem] text-[#6b7280]"></span>
              <h4 className="font-heading font-semibold text-base my-1.5 mb-1"></h4>
              <div className="text-[0.83rem] text-primary-light mb-2"></div>
              <p className="text-[0.83rem] text-[#6b7280] leading-[1.65]"></p>
            </div>

            {professionalExperience.map(
              ({ period, role, company, description }) => (
                <div key={period} className="relative mb-6">
                  <div className="absolute -left-3 top-2.5 h-2.25 w-2.25 rounded-full border-2 border-[#080c10] bg-primary"></div>
                  <span className="font-mono text-[0.72rem] text-[#6b7280]">
                    {period}
                  </span>
                  <h4 className="font-heading font-semibold text-base my-1.5 mb-1">
                    {role}
                  </h4>
                  <div className="text-[0.83rem] text-primary-light mb-2">
                    {company}
                  </div>
                  <p className="text-[0.83rem] text-[#6b7280] leading-[1.65]">
                    {description}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>

        <div
          ref={rightColumnRef}
          className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
            isRightColumnVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
        >
          <p className="font-mono text-[0.75rem] text-primary-light tracking-[0.08em] uppercase mb-2.5">
            {"//"} formação
          </p>
          <h2 className="font-heading text-[2rem] font-bold tracking-[-0.03em] mb-10">
            Educação
          </h2>

          <div className="flex flex-col gap-4">
            {educationAndCertifications.map(
              ({ title, period, institution }) => (
                <div
                  key={title}
                  className="border border-[#1c2333] transition-[border-color,box-shadow] duration-250 hover:border-primary/50 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_8px_32px_rgba(59,130,246,0.08)] rounded-[14px] p-5.5 bg-[#0f1420]"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-heading font-semibold text-[0.95rem]">
                      {title}
                    </h4>
                    <span className="font-mono text-[0.7rem] text-nowrap text-[#6b7280]">
                      {period}
                    </span>
                  </div>
                  <div className="text-[0.83rem] text-primary-light">
                    {institution}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

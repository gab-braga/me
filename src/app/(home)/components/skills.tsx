"use client";

import { FirebaseIcon } from "@/components/icons/firebase";
import { JavaScriptIcon } from "@/components/icons/javascript";
import { ReactJsIcon } from "@/components/icons/react-js";
import { SpringBootIcon } from "@/components/icons/spring-boot";
import { StrapiIcon } from "@/components/icons/strapi";
import { TailwindCssIcon } from "@/components/icons/tailwind-css";
import { Tag } from "@/components/tag";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const skills = [
  {
    icon: ReactJsIcon,
    title: "React & Next.js",
    description:
      "Componentes, hooks customizados, SSR/SSG, App Router, Server Components e otimização de bundle.",
    tags: [
      "React Hooks",
      "Server Components",
      "Next.js App Router",
      "SSR / SSG",
    ],
  },
  {
    icon: SpringBootIcon,
    title: "Spring Boot",
    description:
      "Desenvolvimento de APIs REST, microsserviços, autenticação, segurança e aplicações corporativas com o ecossistema Spring.",
    tags: ["Spring Web", "Spring Security", "JPA", "Microservices"],
  },
  {
    icon: FirebaseIcon,
    title: "",
    description:
      "Backend as a Service para autenticação, banco de dados em tempo real, storage e integrações rápidas com aplicações web e mobile.",
    tags: ["Auth", "Firestore", "Storage", "Hosting"],
  },
  {
    icon: TailwindCssIcon,
    title: "Tailwind CSS",
    description: "Design systems, Shadcn UI, responsivo",
    variant: "small",
  },
  {
    icon: StrapiIcon,
    title: "Strapi",
    description: "CMS headless, APIs, modelagem de conteúdo",
    variant: "small",
  },
  {
    icon: JavaScriptIcon,
    title: "JavaScript ES2024+",
    description: "Async/await, modules, runtime APIs",
    variant: "small",
  },
];

export function Skills() {
  const { elementRef: headerRef, isVisible: isHeaderVisible } =
    useScrollReveal<HTMLDivElement>();
  const { elementRef: contentRef, isVisible: isContentVisible } =
    useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className="py-20 px-6 border-t border-[#1c2333]">
      <div className="max-w-275 mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-14 transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
            isHeaderVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
        >
          <p className="font-mono text-xs text-primary-light tracking-[0.08em] uppercase mb-2.5">
            {"//"} stack
          </p>
          <h2 className="font-heading text-[2rem] font-bold tracking-[-0.03em]">
            Tecnologias que uso
          </h2>
        </div>

        <div
          ref={contentRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-5 transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
            isContentVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
        >
          {skills.map(({ title, variant, icon: Icon, description, tags }) =>
            variant === "small" ? (
              <div
                key={title}
                className="border border-[#1c2333] transition-[border-color,box-shadow] duration-250 hover:border-primary/50 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_8px_32px_rgba(59,130,246,0.08)] rounded-2xl p-6 bg-[#0f1420] flex items-center gap-4"
              >
                <div className="w-11 h-11 shrink-0 rounded-xl border border-primary/20 bg-primary/10 flex items-center justify-center mb-4">
                  <Icon />
                </div>
                <div>
                  <div className="font-heading font-semibold text-[0.95rem]">
                    {title}
                  </div>
                  <div className="text-[0.78rem] text-[#6b7280] mt-0.5">
                    {description}
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={title}
                className="border border-[#1c2333] transition-[border-color,box-shadow] duration-250 hover:border-primary/50 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_8px_32px_rgba(59,130,246,0.08)] rounded-2xl p-7 bg-[#0f1420]"
              >
                <div className="w-11 h-11 shrink-0 rounded-xl border border-primary/20 bg-primary/10 flex items-center justify-center mb-4">
                  <Icon />
                </div>
                <h3 className="font-heading font-semibold text-base mb-2">
                  {title}
                </h3>
                <p className="text-[0.83rem] text-[#6b7280] leading-[1.65]">
                  {description}
                </p>
                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {tags?.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

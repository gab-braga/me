"use client";

import { GitHubIcon } from "@/components/icons/github";
import { LinkedInIcon } from "@/components/icons/linked-in";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Mail } from "lucide-react";

export function Contact() {
  const { elementRef, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="contato" className="py-25 px-6 border-t border-[#1c2333]">
      <div
        ref={elementRef}
        className={`max-w-160 mx-auto text-center transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(59,130,246,0.3)] bg-[rgba(59,130,246,0.08)] mb-5">
          <div className="w-1.75 h-1.75 rounded-full bg-[#22c55e] shadow-[0_0_6px_#22c55e] animate-[blink_2s_ease-in-out_infinite] motion-reduce:animate-none"></div>
          <span className="font-mono text-[0.75rem] text-primary-light">
            disponível para novos projetos
          </span>
        </div>
        <h2 className="font-heading text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-[-0.04em] leading-[1.15] mb-4.5">
          Vamos construir algo
          <br />
          <span className="bg-linear-to-br from-primary-light to-cyan-400 bg-clip-text text-transparent">
            juntos
          </span>
          ?
        </h2>
        <p className="text-[1.05rem] text-[#6b7280] leading-[1.75] mb-10">
          Seja para trocar ideias, colaborar em um projeto open source ou
          explorar oportunidades — minha caixa de entrada está aberta.
        </p>
        <div className="flex gap-3 justify-center flex-wrap max-w-md mx-auto">
          <a
            href="mailto:gabrielbraga.me@gmail.com"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold text-[0.95rem] transition-colors"
          >
            <Mail className="size-4.5" />
            Mandar e-mail
          </a>
          <a
            href="https://wa.me/5588992714671"
            target="_blank"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-[0.95rem] transition-colors"
          >
            <WhatsAppIcon />
            Falar no WhatsApp
          </a>
          <a
            href="https://linkedin.com/in/gab-braga"
            target="_blank"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-[#1c2333] hover:border-[rgba(59,130,246,0.5)] text-[#e2e8f0] font-medium text-[0.95rem] transition-colors"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <a
            href="https://github.com/gab-braga"
            target="_blank"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-[#1c2333] hover:border-[rgba(59,130,246,0.5)] text-[#e2e8f0] font-medium text-[0.95rem] transition-colors"
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

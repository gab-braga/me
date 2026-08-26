"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

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
            <svg
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Mandar e-mail
          </a>
          <a
            href="https://wa.me/5588992714671"
            target="_blank"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-[0.95rem] transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.52 3.48A11.91 11.91 0 0012.06 0C5.5 0 .16 5.34.16 11.9c0 2.09.55 4.13 1.6 5.93L0 24l6.32-1.66a11.84 11.84 0 005.74 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.43zM12.07 21.5h-.01a9.56 9.56 0 01-4.88-1.34l-.35-.21-3.75.99 1-3.65-.23-.37a9.56 9.56 0 01-1.49-5.12c0-5.28 4.3-9.58 9.59-9.58 2.56 0 4.96 1 6.76 2.8a9.51 9.51 0 012.8 6.77c0 5.28-4.3 9.59-9.58 9.59zm5.27-7.22c-.29-.15-1.73-.85-2- .95-.27-.1-.47-.15-.66.15-.2.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.43-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.2.05-.36-.03-.51-.08-.15-.66-1.59-.9-2.17-.24-.58-.48-.5-.66-.51h-.56c-.19 0-.51.07-.78.36-.27.29-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.11 3.22 5.1 4.51.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.73-.71 1.98-1.39.25-.68.25-1.26.17-1.39-.08-.13-.27-.2-.56-.35z" />
            </svg>
            Falar no WhatsApp
          </a>
          <a
            href="www.linkedin.com/in/gab-braga"
            target="_blank"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-[#1c2333] hover:border-[rgba(59,130,246,0.5)] text-[#e2e8f0] font-medium text-[0.95rem] transition-colors"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/gab-braga"
            target="_blank"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-[#1c2333] hover:border-[rgba(59,130,246,0.5)] text-[#e2e8f0] font-medium text-[0.95rem] transition-colors"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

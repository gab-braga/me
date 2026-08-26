import { Terminal } from "./terminal";

export function Hero() {
  return (
    <section className="bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-size-[48px_48px] min-h-screen flex items-center px-6 py-25 pb-15 relative overflow-hidden">
      <div className="pointer-events-none absolute rounded-full blur-[90px] w-125 h-125 bg-[rgba(59,130,246,0.12)] -top-20 -left-30"></div>
      <div className="pointer-events-none absolute rounded-full blur-[90px] w-75 h-75 bg-[rgba(96,165,250,0.07)] bottom-15 right-0"></div>

      <div className="max-w-275 mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="font-mono text-[0.78rem] text-primary-light tracking-[0.08em] uppercase">
            Engenheiro de Software · Frontend
          </span>

          <h1 className="font-heading text-[clamp(2.4rem,5vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.04em] my-4 mb-6">
            Olá, sou
            <br />
            <span className="bg-linear-to-br from-primary-light to-cyan-400 bg-clip-text text-transparent">
              Gabriel Braga
            </span>
            <br />
            aqui.
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
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="https://github.com/gab-braga"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#1c2333] hover:border-[rgba(59,130,246,0.5)] text-[#e2e8f0] font-medium text-sm transition-[border-color] duration-200"
            >
              <svg
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
              </svg>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/f-gabriel-braga"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#1c2333] hover:border-[rgba(59,130,246,0.5)] text-[#e2e8f0] font-medium text-sm transition-[border-color] duration-200"
            >
              <svg
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
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

"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

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
          <div className="border border-[#1c2333] transition-[border-color,box-shadow] duration-250 hover:border-primary/50 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_8px_32px_rgba(59,130,246,0.08)] rounded-2xl p-7 bg-[#0f1420]">
            <div className="w-11 h-11 rounded-xl bg-[rgba(97,218,251,0.1)] border border-[rgba(97,218,251,0.2)] flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#61DAFB">
                <circle cx="12" cy="12" r="2.5" />
                <ellipse
                  cx="12"
                  cy="12"
                  rx="10"
                  ry="4"
                  fill="none"
                  stroke="#61DAFB"
                  strokeWidth="1.2"
                />
                <ellipse
                  cx="12"
                  cy="12"
                  rx="10"
                  ry="4"
                  fill="none"
                  stroke="#61DAFB"
                  strokeWidth="1.2"
                  transform="rotate(60 12 12)"
                />
                <ellipse
                  cx="12"
                  cy="12"
                  rx="10"
                  ry="4"
                  fill="none"
                  stroke="#61DAFB"
                  strokeWidth="1.2"
                  transform="rotate(120 12 12)"
                />
              </svg>
            </div>
            <h3 className="font-heading font-semibold text-base mb-2">
              React & Next.js
            </h3>
            <p className="text-[0.83rem] text-[#6b7280] leading-[1.65]">
              Componentes, hooks customizados, SSR/SSG, App Router, Server
              Components e otimização de bundle.
            </p>
            <div className="mt-3.5 flex flex-wrap gap-1.5">
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#1c2333] bg-[#0f1420] px-3 py-1.25 font-mono text-[0.78rem] text-[#e2e8f0] transition-[border-color,color] duration-200 hover:border-primary/60 hover:text-primary-light text-xs">
                React Hooks
              </span>
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#1c2333] bg-[#0f1420] px-3 py-1.25 font-mono text-[0.78rem] text-[#e2e8f0] transition-[border-color,color] duration-200 hover:border-primary/60 hover:text-primary-light text-xs">
                Next.js App Router
              </span>
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#1c2333] bg-[#0f1420] px-3 py-1.25 font-mono text-[0.78rem] text-[#e2e8f0] transition-[border-color,color] duration-200 hover:border-primary/60 hover:text-primary-light text-xs">
                Server Components
              </span>
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#1c2333] bg-[#0f1420] px-3 py-1.25 font-mono text-[0.78rem] text-[#e2e8f0] transition-[border-color,color] duration-200 hover:border-primary/60 hover:text-primary-light text-xs">
                SSR / SSG
              </span>
            </div>
          </div>

          <div className="border border-[#1c2333] transition-[border-color,box-shadow] duration-250 hover:border-primary/50 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_8px_32px_rgba(59,130,246,0.08)] rounded-2xl p-7 bg-[#0f1420]">
            <div className="w-11 h-11 rounded-xl bg-[rgba(109,179,63,0.1)] border border-[rgba(109,179,63,0.2)] flex items-center justify-center mb-4">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1797_1803)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.75788 19.2452C4.16075 19.5704 4.752 19.5099 5.0765 19.1063C5.40306 18.7041 5.34188 18.1129 4.939 17.7863C4.53681 17.4604 3.94625 17.523 3.619 17.9252C3.30962 18.3067 3.3495 18.8574 3.69806 19.1929L3.51519 19.0321C1.35575 17.0239 0 14.1604 0 10.9849C0 4.928 4.928 0 10.9862 0C14.0662 0 16.8506 1.27669 18.8478 3.32475C19.3016 2.70737 19.6948 2.01713 20.0166 1.25194C21.4163 5.45806 22.2392 8.99319 21.9381 11.7776C21.5311 17.4659 16.7764 21.9732 10.9862 21.9732C8.29675 21.9732 5.83275 20.9997 3.9215 19.3903L3.75788 19.2452ZM19.9691 15.8201C22.726 12.1516 21.1894 6.21912 19.9107 2.42756C18.7715 4.8015 15.9658 6.61719 13.5431 7.19194C11.2722 7.73369 9.26269 7.28956 7.161 8.09806C2.36913 9.94056 2.44475 15.6551 5.08475 16.9393C5.08612 16.9393 5.24288 17.0246 5.24081 17.0218C5.24081 17.0204 9.12106 16.2504 11.2661 15.4584C14.4011 14.3007 17.8427 11.4469 18.975 8.13175C18.3721 11.5796 15.4124 14.8968 12.4389 16.4203C10.8563 17.2329 9.62569 17.4137 7.02144 18.315C6.70244 18.4236 6.45219 18.5309 6.45219 18.5309C7.11219 18.4209 7.77013 18.3851 7.77013 18.3851C11.4778 18.2098 17.2624 19.4274 19.9698 15.8207L19.9691 15.8201Z"
                    fill="#70AD51"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1797_1803">
                    <rect width="22" height="22" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <h3 className="font-heading font-semibold text-base mb-2">
              Spring Boot
            </h3>

            <p className="text-[0.83rem] text-[#6b7280] leading-[1.65]">
              Desenvolvimento de APIs REST, microsserviços, autenticação,
              segurança e aplicações corporativas com o ecossistema Spring.
            </p>

            <div className="mt-3.5 flex flex-wrap gap-1.5">
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#1c2333] bg-[#0f1420] px-3 py-1.25 font-mono text-[0.78rem] text-[#e2e8f0] transition-[border-color,color] duration-200 hover:border-primary/60 hover:text-primary-light text-xs">
                Spring Web
              </span>
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#1c2333] bg-[#0f1420] px-3 py-1.25 font-mono text-[0.78rem] text-[#e2e8f0] transition-[border-color,color] duration-200 hover:border-primary/60 hover:text-primary-light text-xs">
                Spring Security
              </span>
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#1c2333] bg-[#0f1420] px-3 py-1.25 font-mono text-[0.78rem] text-[#e2e8f0] transition-[border-color,color] duration-200 hover:border-primary/60 hover:text-primary-light text-xs">
                JPA
              </span>
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#1c2333] bg-[#0f1420] px-3 py-1.25 font-mono text-[0.78rem] text-[#e2e8f0] transition-[border-color,color] duration-200 hover:border-primary/60 hover:text-primary-light text-xs">
                Microservices
              </span>
            </div>
          </div>

          <div className="border border-[#1c2333] transition-[border-color,box-shadow] duration-250 hover:border-primary/50 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_8px_32px_rgba(59,130,246,0.08)] rounded-2xl p-7 bg-[#0f1420]">
            <div className="w-11 h-11 rounded-xl bg-[rgba(255,202,40,0.12)] border border-[rgba(255,202,40,0.25)] flex items-center justify-center mb-4">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.4371 12.6265C19.4371 17.8033 15.7382 22 10.7688 22C5.79945 22 2.10059 17.8033 2.10059 12.6265C2.10059 7.44971 6.09609 13.9924 11.0655 13.9924C16.0348 13.9924 19.4371 7.44971 19.4371 12.6265Z"
                  fill="#FF9100"
                />
                <path
                  d="M19.5684 12.9529C19.4695 17.8474 16.4208 20.2534 14.4268 21.1762C9.69719 18.7867 7.29116 16.1664 6.64844 11.0578C6.64844 5.30305 8.01627 2.9004 11.2957 0C16.8823 6.60829 19.2059 8.5694 19.5684 12.9529Z"
                  fill="#DD2C00"
                />
                <path
                  d="M11.2121 12.9529C11.8215 14.881 12.1349 18.8361 7.57008 21.341C6.1858 21.0444 2 18.1144 2 12.9529C2 10.593 3.00527 9.22852 3.17004 8.81654C6.59783 8.04198 10.2068 9.77235 11.2121 12.9529Z"
                  fill="#FFC400"
                />
                <path
                  d="M6.72612 8.88037C8.81111 9.43436 10.5608 10.8878 11.2133 12.9524C11.6342 14.2842 11.914 16.5833 10.5422 18.7035C8.32312 16.8269 7.08289 14.5106 6.64844 11.0572C6.64844 10.2726 6.67389 9.55017 6.72612 8.88037Z"
                  fill="#FF9100"
                />
              </svg>
            </div>

            <h3 className="font-heading font-semibold text-base mb-2">
              Firebase
            </h3>

            <p className="text-[0.83rem] text-[#6b7280] leading-[1.65]">
              Backend as a Service para autenticação, banco de dados em tempo
              real, storage e integrações rápidas com aplicações web e mobile.
            </p>

            <div className="mt-3.5 flex flex-wrap gap-1.5">
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#1c2333] bg-[#0f1420] px-3 py-1.25 font-mono text-[0.78rem] text-[#e2e8f0] transition-[border-color,color] duration-200 hover:border-primary/60 hover:text-primary-light text-xs">
                Auth
              </span>
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#1c2333] bg-[#0f1420] px-3 py-1.25 font-mono text-[0.78rem] text-[#e2e8f0] transition-[border-color,color] duration-200 hover:border-primary/60 hover:text-primary-light text-xs">
                Firestore
              </span>
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#1c2333] bg-[#0f1420] px-3 py-1.25 font-mono text-[0.78rem] text-[#e2e8f0] transition-[border-color,color] duration-200 hover:border-primary/60 hover:text-primary-light text-xs">
                Storage
              </span>
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#1c2333] bg-[#0f1420] px-3 py-1.25 font-mono text-[0.78rem] text-[#e2e8f0] transition-[border-color,color] duration-200 hover:border-primary/60 hover:text-primary-light text-xs">
                Hosting
              </span>
            </div>
          </div>

          <div className="border border-[#1c2333] transition-[border-color,box-shadow] duration-250 hover:border-primary/50 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_8px_32px_rgba(59,130,246,0.08)] rounded-2xl p-6 bg-[#0f1420] flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[rgba(56,189,248,0.1)] border border-[rgba(56,189,248,0.2)] shrink-0 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 54 33" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                  fill="#38BDF8"
                />
              </svg>
            </div>
            <div>
              <div className="font-heading font-semibold text-[0.95rem]">
                Tailwind CSS
              </div>
              <div className="text-[0.78rem] text-[#6b7280] mt-0.5">
                Design systems, Shadcn UI, responsivo
              </div>
            </div>
          </div>

          <div className="border border-[#1c2333] transition-[border-color,box-shadow] duration-250 hover:border-primary/50 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_8px_32px_rgba(59,130,246,0.08)] rounded-2xl p-6 bg-[#0f1420] flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[rgba(120,22,249,0.1)] border border-[rgba(103,14,219,0.2)] shrink-0 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <g clipPath="url(#clip0_1794_1811)">
                  <path
                    d="M21.4731 0.171875H7.01367V7.42173H14.1284C14.3819 7.42173 14.5875 7.62736 14.5875 7.88083V14.8974H21.9322V0.63181C21.9324 0.509905 21.8842 0.392917 21.798 0.306638C21.7119 0.220359 21.595 0.171875 21.4731 0.171875Z"
                    fill="#8E75FF"
                  />
                  <path
                    opacity="0.405"
                    d="M7.01278 0.171875V7.42173H0.229567C0.136356 7.42157 0.0524646 7.36515 0.0171505 7.27889C-0.0181636 7.19263 0.00208546 7.09358 0.0684217 7.0281L7.01278 0.171875ZM14.9786 21.7611C14.9125 21.826 14.814 21.845 14.7286 21.8092C14.6432 21.7735 14.5876 21.69 14.5874 21.5975V14.8974H21.9321L14.9786 21.7603V21.7611Z"
                    fill="#8E75FF"
                  />
                  <path
                    opacity="0.405"
                    d="M7.0127 7.42188H14.3582C14.4841 7.42188 14.5874 7.52427 14.5874 7.651V14.8975H7.47263C7.21908 14.8975 7.01353 14.692 7.01353 14.4384V7.42188H7.0127Z"
                    fill="#8E75FF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1794_1811">
                    <rect width="22" height="22" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <div className="font-heading font-semibold text-[0.95rem]">
                Strapi
              </div>
              <div className="text-[0.78rem] text-[#6b7280] mt-0.5">
                CMS headless, APIs, modelagem de conteúdo
              </div>
            </div>
          </div>

          <div className="border border-[#1c2333] transition-[border-color,box-shadow] duration-250 hover:border-primary/50 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_8px_32px_rgba(59,130,246,0.08)] rounded-2xl p-6 bg-[#0f1420] flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[rgba(251,191,36,0.1)] border border-[rgba(251,191,36,0.2)] shrink-0 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="#F0DB4F">
                <g clipPath="url(#clip0_1793_1799)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.8608 20.2753C14.9413 20.2753 13.7005 19.3602 13.0955 18.1634L14.7785 17.1886C15.2218 17.9124 15.7971 18.4438 16.8168 18.4438C17.6726 18.4438 18.2193 18.0156 18.2193 17.4249C18.2193 16.5361 17.0335 16.1888 16.1964 15.8302C14.7048 15.1955 13.7148 14.398 13.7148 12.7139C13.7148 11.164 14.8962 9.98271 16.7431 9.98271C18.0565 9.98271 19.0025 10.4402 19.6812 11.6359L18.0719 12.6699C17.7177 12.0352 17.3338 11.7842 16.7431 11.7842C16.137 11.7842 15.7531 12.1683 15.7531 12.6699C15.7531 13.2903 16.137 13.5412 17.0236 13.9251C18.8815 14.7215 20.2873 15.3472 20.2873 17.3954C20.2873 19.2566 18.8254 20.2753 16.8608 20.2753ZM12.1 17.159C12.1 19.3007 10.7811 20.4327 8.94958 20.4327C7.29519 20.4327 6.30409 19.8 5.81679 18.7H5.80031H5.79259H5.78819L7.47008 17.5243C7.79458 18.0996 8.0872 18.5077 8.7956 18.5077C9.4754 18.5077 9.9 18.1635 9.9 17.1306V9.9H12.1V17.159ZM0 22H22V0H0V22Z"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1793_1799">
                    <rect width="22" height="22" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <div className="font-heading font-semibold text-[0.95rem]">
                JavaScript ES2024+
              </div>
              <div className="text-[0.78rem] text-[#6b7280] mt-0.5">
                Async/await, modules, runtime APIs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

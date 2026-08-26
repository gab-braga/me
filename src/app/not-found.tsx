import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[calc(100vh-77px)] flex-1 items-center justify-center overflow-hidden px-6 py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(59,130,246,0.14),transparent_34%)]"
      />

      <section className="relative w-full max-w-2xl text-center">
        <p className="mb-5 font-mono text-sm text-primary-light">
          <span className="text-[#6b7280]">erro:</span> recurso_não_encontrado
        </p>

        <div className="relative mx-auto mb-6 w-fit">
          <p
            aria-hidden="true"
            className="select-none font-heading text-[clamp(8rem,28vw,15rem)] font-bold leading-[0.8] -tracking-widest text-[#0e1622]"
          >
            404
          </p>
          <p className="absolute inset-0 flex items-center justify-center font-heading text-[clamp(4.5rem,15vw,8rem)] font-bold tracking-[-0.08em] text-[#e2e8f0]">
            404<span className="animate-blink text-primary-light">_</span>
          </p>
        </div>

        <h1 className="font-heading text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">
          Esta página saiu do radar.
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-[#94a3b8]">
          O endereço pode ter mudado, sido removido ou talvez nunca tenha
          existido. Mas você ainda pode voltar ao ponto de partida.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-light sm:w-auto"
          >
            <Home aria-hidden="true" className="size-4.5" />
            Voltar ao início
          </Link>
          <Link
            href="/#projetos"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#263248] bg-[#0c121a] px-5 py-3 text-sm font-semibold text-[#cbd5e1] transition-colors hover:border-primary/60 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-light sm:w-auto"
          >
            <ArrowLeft aria-hidden="true" className="size-4.5" />
            Ver projetos
          </Link>
        </div>

        <div className="mx-auto mt-12 max-w-md rounded-xl border border-[#1c2333] bg-[#0b1017]/80 p-4 text-left shadow-2xl shadow-black/20">
          <div className="mb-4 flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-[#ef4444]/70" />
            <span className="size-2.5 rounded-full bg-[#f59e0b]/70" />
            <span className="size-2.5 rounded-full bg-[#22c55e]/70" />
          </div>
          <p className="font-mono text-xs leading-6 text-[#64748b] sm:text-sm">
            <span className="text-primary-light">gabriel@portfolio</span>
            <span className="text-[#cbd5e1]">:~$ </span>
            buscar página
            <br />
            <span className="text-[#f87171]">404:</span> nenhum resultado
            encontrado
          </p>
        </div>
      </section>
    </main>
  );
}

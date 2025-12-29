export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 pt-24 pb-40 antialiased selection:bg-purple-500/30">
      
      {/* 01. HERO SECTION */}
      <section className="mb-48 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div 
          className="w-full max-w-[280px] h-24 bg-purple-500 dark:bg-purple-400"
          style={{
            maskImage: 'url(/seigan.svg)',
            maskRepeat: 'no-repeat',
            maskSize: 'contain',
            WebkitMaskImage: 'url(/seigan.svg)',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskSize: 'contain',
          }}
          role="img"
          aria-label="seigan logo"
        />
        <h1 className="sr-only">Sobre o Seigan</h1>
        <p className="mt-10 text-xl md:text-2xl font-light leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-xl italic font-serif opacity-80">
            "O grande voto pela clareza: arquitetando a democratização da sabedoria e o florescimento da revolução humana."
        </p>
      </section>

      {/* 02. O PROPÓSITO */}
      <section className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-8 md:gap-12 mb-40">
        <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-800 dark:text-zinc-200 font-bold pt-2 opacity-60">
          Missão
        </span>
        <div className="max-w-2xl">
            <p className="text-2xl md:text-3xl font-light leading-[1.4] text-zinc-900 dark:text-zinc-100 tracking-tight">
                O <strong className="font-semibold text-purple-600 dark:text-purple-400">Seigan</strong> — do japonês, "Grande Voto" — surgiu como um manifesto por <strong className="font-medium">clareza absoluta</strong> em meio ao ruído contemporâneo. Fundamentado na filosofia humanista do <strong className="font-medium text-zinc-900 dark:text-zinc-100">Budismo de Nichiren Daishonin</strong>, o projeto atua na democratização de ensinamentos profundos, traduzindo-os em ferramentas práticas para a <strong className="font-medium italic">revolução humana</strong> cotidiana.
            </p>
        </div>
      </section>

      {/* 03. O AUTOR */}
      <section className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-8 md:gap-12 mb-40">
        <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-800 dark:text-zinc-200 font-bold pt-2 opacity-60">
          Autor
        </span>
        <div className="space-y-12">
          <h2 className="text-5xl md:text-7xl font-normal tracking-tighter text-zinc-900 dark:text-zinc-100">
            Lucas Mori
          </h2>
          <div className="max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 space-y-6 font-light">
            <p>
              Com raízes na <strong className="font-medium text-zinc-900 dark:text-zinc-100">Arquitetura e Urbanismo</strong>, transpus o olhar sobre a forma e o espaço para a arquitetura de experiências digitais. Atualmente graduando em <strong className="font-medium text-zinc-900 dark:text-zinc-100">Desenvolvimento de Sistemas no SENAC</strong>, meu propósito reside na intersecção entre a sensibilidade estética e a robustez da engenharia de software.
            </p>
            <p>
              Entendo que, assim como o urbanismo planeja o convívio, um sistema bem estruturado atua como a infraestrutura invisível para o crescimento: ele deve acolher, conectar e, acima de tudo, servir como catalisador para a <strong className="font-medium italic text-purple-600 dark:text-purple-400">revolução humana</strong> de cada indivíduo.
            </p>
          </div>
        </div>
      </section>

      {/* 04. STACK TÉCNICA */}
      <section className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-8 md:gap-12">
        <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-800 dark:text-zinc-200 font-bold pt-2 opacity-60">
          Stack
        </span>
        <div className="divide-y divide-zinc-100 dark:divide-zinc-900 w-full max-w-2xl">
          
          {/* Categoria: Web & Front-end */}
          <div className="py-6 flex justify-between items-baseline group">
            <span className="text-sm uppercase tracking-widest text-purple-500 font-bold group-hover:text-purple-400 transition-colors">
              Front-end
            </span>
            <span className="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-tighter">
              Next.js / React / TypeScript / Tailwind CSS
            </span>
          </div>

          {/* Categoria: Back-end & Data */}
          <div className="py-6 flex justify-between items-baseline group">
            <span className="text-sm uppercase tracking-widest text-purple-500 font-bold group-hover:text-purple-400 transition-colors">
              Back-end
            </span>
            <span className="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-tighter">
              Python / SQL / Java / JavaScript
            </span>
          </div>

          {/* Categoria: Ferramentas & Ecossistemas */}
          <div className="py-6 flex justify-between items-baseline group">
            <span className="text-sm uppercase tracking-widest text-purple-500 font-bold group-hover:text-purple-400 transition-colors">
              Tools & Ecosystem
            </span>
            <span className="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-tighter">
              Salesforce (Apex) / Figma / GitHub
            </span>
          </div>
          
        </div>
      </section>

      {/* 05. NOTA LEGAL / DISCLAIMER */}
      <section className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-8 md:gap-12 mt-40">
        <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-800 dark:text-zinc-200 font-bold pt-2 opacity-50">
          Nota
        </span>
        <div className="max-w-xl text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-300 font-light">
          <p>
            Este é um projeto estritamente <strong className="font-medium">pessoal e independente</strong>, concebido como um laboratório de desenvolvimento técnico e aprofundamento espiritual individual. 
          </p>
          <p className="mt-2">
            O conteúdo aqui publicado não possui qualquer vínculo institucional ou oficial com a <strong className="font-medium text-zinc-700 dark:text-zinc-300">BSGI</strong> (Associação Brasil Soka Gakkai Internacional), representando apenas a jornada de estudo e a perspectiva do autor.
          </p>
        </div>
      </section>
    </main>
  )
}
export default function Contact() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-(--bg) px-6 py-24 text-white">
      
      {/* Glow de fundo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-fade-up animate-random-slow absolute -top-40 -left-40 h-96 w-96 rounded-full bg-(--primary)/20 blur-3xl"></div>
        <div className="animate-fade-up animate-random-medium absolute top-1/2 -right-40 h-134 w-134 rounded-full bg-(--primary-soft)/80 blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-transparent/10 to-(--bg)"></div><div className="absolute inset-0 bg-linear-to-b from-transparent/10 to-(--bg)"></div>

      <div className="relative mx-auto max-w-4xl animate-fade-up text-center">
        <h2 className="text-4xl font-bold text-(--destak)">
          Vamos conversar
        </h2>

        <p className="mt-4 text-(--muted)">
          Estou aberto a oportunidades, projetos freelance e colaborações.
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            className="rounded-2xl bg-(--bg-soft) p-6 backdrop-blur transition hover:-translate-y-2 hover:bg-(--surface)/50"
          >
            <h3 className="text-lg text-(--text) font-semibold">LinkedIn</h3>
            <p className="mt-2 text-sm text-(--muted)">
              Conecte-se comigo
            </p>
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            className="rounded-2xl bg-(--bg-soft) p-6 backdrop-blur transition hover:-translate-y-2 hover:bg-(--surface)/50"
          >
            <h3 className="text-lg text-(--text) font-semibold">GitHub</h3>
            <p className="mt-2 text-sm text-(--muted)">
              Veja meus projetos
            </p>
          </a>

          <a
            href="mailto:seuemail@email.com"
            className="rounded-2xl bg-(--bg-soft) p-6 backdrop-blur transition hover:-translate-y-2 hover:bg-(--surface)/50"
          >
            <h3 className="text-lg text-(--text) font-semibold">E-mail</h3>
            <p className="mt-2 text-sm text-(--muted)">
              Entre em contato direto
            </p>
          </a>

        </div>

        {/* CTA final */}
        <div className="mt-16">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            className="inline-block rounded-xl bg-(--destak) px-8 py-3 font-medium transition hover:scale-105"
          >
            Falar comigo
          </a>
        </div>

      </div>
    </section>
  );
}

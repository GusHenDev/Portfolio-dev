import "../styles/animations.css";

export default function About() {
  return (
    <section className="relative pt-28 min-h-screen overflow-hidden flex items-center bg-(--bg) text-(--text)">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-fade-up animate-random-slow absolute -top-40 -left-40 h-96 w-96 rounded-full bg-(--primary)/20 blur-3xl"></div>
        <div className="animate-fade-up animate-random-medium absolute top-1/2 -right-40 h-134 w-134 rounded-full bg-(--primary-soft)/30 blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-transparent/10 to-(--bg)"></div>

      <div className="mx-auto max-w-6xl animate-fade-up">

        {/* Título */}
        <h2 className="text-4xl font-bold text-(--destak)">
          Sobre mim
        </h2>

        <p className="mt-4 max-w-2xl text-(--text)">
          Sou desenvolvedor de software com foco em desenvolvimento web e jogos. Tenho experiência prática criando projetos do zero, lidando com lógica, estrutura de código e interface.
        </p>
        <p className="mt-4 max-w-2xl text-(--text)">        
          Minha jornada começou com jogos independentes, onde aprendi a importância da performance e da experiência do usuário. Com o tempo, expandi minhas habilidades para o desenvolvimento web, criando aplicações completas e APIs eficientes.
        </p>
        <p className="mt-4 max-w-2xl text-(--text)">
          Atualmente, busco oportunidades para atuar como desenvolvedor, onde eu possa evoluir tecnicamente, contribuir com soluções reais e crescer junto com o time.
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-(--bg-soft) p-6 backdrop-blur transition hover:-translate-y-2">
            <h3 className="text-lg font-semibold">🎮 Origem</h3>
            <p className="mt-2 text-sm text-(--muted)">
              Desenvolvimento de jogos independentes, lógica, performance e UX.
            </p>
          </div>

          <div className="rounded-2xl bg-(--bg-soft) p-6 backdrop-blur transition hover:-translate-y-2">
            <h3 className="text-lg font-semibold">💻 Desenvolvimento</h3>
            <p className="mt-2 text-sm text-(--muted)">
              Aplicações web completas, APIs e sistemas modernos.
            </p>
          </div>

          <div className="rounded-2xl bg-(--bg-soft) p-6 backdrop-blur transition hover:-translate-y-2">
            <h3 className="text-lg font-semibold">🚀 Foco atual</h3>
            <p className="mt-2 text-sm text-(--muted)">
              Projetos profissionais, automação e inteligência artificial.
            </p>
          </div>
        </div>

        {/* Tecnologias */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-(--destak)/85">
            Tecnologias
          </h3>

          <div className="mt-4 flex flex-wrap gap-3">
            {[
              "JavaScript",
              "React",
              "Node.js",
              "C# / .NET",
              "SQL",
              "Unity",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-(--destak)/30 bg-(--destak)/10 px-4 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

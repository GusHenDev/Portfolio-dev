export default function Labs() {
  const labs = [
    {
      title: "Animações CSS Avançadas",
      description:
        "Estudos de animações, keyframes, movimentos orgânicos e efeitos visuais.",
      techs: ["CSS", "Tailwind"],
      status: "Em estudo",
    },
    {
      title: "Background com Partículas",
      description:
        "Experimentos com canvas e partículas para criar fundos interativos.",
      techs: ["Canvas", "JavaScript"],
      status: "Concluído",
    },
    {
      title: "API REST – Autenticação",
      description:
        "Testes de autenticação, rotas protegidas e boas práticas de API.",
      techs: ["Node.js", "JWT"],
      status: "Em progresso",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-(--bg) px-6 py-24 text-(--text)">
      
      {/* Glow de fundo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-(--primary)/20 blur-3xl"></div>
        <div className="absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-(--primary-soft)/20 blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-transparent/10 to-(--bg)"></div>

      <div className="relative mx-auto max-w-6xl animate-fade-up">
        <h2 className="text-4xl font-bold text-(--destak)/80">
          Labs
        </h2>

        <p className="mt-4 max-w-2xl text-(--muted)">
          Espaço dedicado a estudos, experimentos técnicos e provas de conceito.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {labs.map((lab) => (
            <div
              key={lab.title}
              className="rounded-2xl bg-(--bg-soft) p-6 backdrop-blur transition hover:-translate-y-2 hover:bg-(--surface)/50"
            >
              <h3 className="text-xl font-semibold">
                {lab.title}
              </h3>

              <p className="mt-3 text-sm text-(--muted)">
                {lab.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {lab.techs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-(--destak)/30 bg-(--destak)/10 px-3 py-1 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <span className="mt-4 inline-block text-xs text-(--destak)/70">
                Status: {lab.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Labs() {
  const labs = [
    {
      title: 'Animações CSS Avançadas',
      description: 'Estudos de animações, keyframes, movimentos orgânicos e efeitos visuais.',
      techs: ['CSS', 'Tailwind'],
      status: 'Em estudo',
    },
    {
      title: 'Background com Partículas',
      description: 'Experimentos com canvas e partículas para criar fundos interativos.',
      techs: ['Canvas', 'JavaScript'],
      status: 'Concluído',
    },
    {
      title: 'API REST – Autenticação',
      description: 'Testes de autenticação, rotas protegidas e boas práticas de API.',
      techs: ['Node.js', 'JWT'],
      status: 'Em progresso',
    },
  ];

  return (
    <section className="page-shell page-section">
      <span className="eyebrow">Exploração e protótipos</span>
      <h1 className="section-heading">Labs</h1>
      <p className="section-intro">
        Espaço dedicado a estudos, experimentos técnicos e provas de conceito.
      </p>

      <div className="content-grid">
        {labs.map((lab) => (
          <article key={lab.title} className="surface-panel content-card">
            <span className="eyebrow">{lab.status}</span>
            <h3 style={{ marginTop: 8 }}>{lab.title}</h3>
            <p>{lab.description}</p>
            <div className="tag-row">
              {lab.techs.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

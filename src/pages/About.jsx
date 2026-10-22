export default function About() {
  return (
    <section className="page-shell page-section">
      <span className="eyebrow">Perfil</span>
      <h1 className="section-heading">Sobre mim</h1>
      <p className="section-intro">
        Sou desenvolvedor de software com foco em desenvolvimento web e jogos. Tenho experiência
        prática criando projetos do zero, trabalhando com lógica, estrutura de código e interface.
      </p>
      <p className="section-intro">
        Minha jornada começou com jogos independentes, onde aprendi sobre performance e experiência
        do usuário. Depois, ampliei meu trabalho para aplicações web e APIs. Hoje busco contribuir
        em projetos reais e crescer junto com uma equipe.
      </p>
      <div className="content-grid">
        <article className="surface-panel content-card">
          <span className="eyebrow">01 / Origem</span>
          <h3>Jogos independentes</h3>
          <p>Lógica, performance e experiência de jogo moldaram meu jeito de resolver problemas.</p>
        </article>
        <article className="surface-panel content-card">
          <span className="eyebrow">02 / Prática</span>
          <h3>Desenvolvimento</h3>
          <p>Aplicações web, APIs e sistemas organizados para evoluir com o tempo.</p>
        </article>
        <article className="surface-panel content-card">
          <span className="eyebrow">03 / Agora</span>
          <h3>Aprendizado contínuo</h3>
          <p>Exploro novas ferramentas e procuro transformar estudo em projetos úteis.</p>
        </article>
      </div>
      <div className="page-section">
        <span className="eyebrow">Stack</span>
        <h2 className="section-heading">Tecnologias</h2>
        <div className="hero-techs">
          {['JavaScript', 'React', 'Node.js', 'C# / .NET', 'SQL', 'Unity'].map((tech) => (
            <span className="tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

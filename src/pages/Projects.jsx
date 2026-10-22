import { useState, useEffect } from 'react';
import ProjectModal from '../components/ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'auto';
  }, [selectedProject]);

  const projects = [
    {
      title: 'Project Factory',
      predescription:
        'Jogo mobile de simulação e gerenciamento de fábrica desenvolvido em Unity e C#.',
      description: `<span style="font-size:2rem; font-weight:bold">Jogo mobile | Unity • C# </span>

Project Factory é um jogo mobile de simulação e gerenciamento no qual o jogador constrói e expande uma fábrica, tomando decisões estratégicas para otimizar produção, recursos e progressão. O foco do projeto foi criar uma base sólida de sistemas, permitindo evolução contínua do jogo com novas mecânicas no futuro.

O jogo foi desenvolvido utilizando Unity como engine principal e C# para toda a lógica de gameplay, com atenção especial à organização do código, escalabilidade e performance em dispositivos móveis.


<span style="font-size:1.25rem; font-weight:bold">🛠️ Tecnologias Utilizadas</span>
<ul style="list-style-type: disc; margin-left:20px">
<li>Unity (Game Engine)</li>
<li>C#</li>
<li>Programação orientada a objetos (POO)</li>
<li>Controle de estados do jogo</li>
<li>Otimização para mobile</li>
<li>Sistema de progressão e balanceamento</li>
<li>Build e publicação para Android</li>
</ul>

<span style="font-size:1.25rem; font-weight:bold">🧩 Principais Desafios Enfrentados</span>

Durante o desenvolvimento do projeto, alguns desafios técnicos e de design foram superados:
<ul style="list-style-type: disc; margin-left:20px">
<li><strong>Gerenciamento de sistemas interdependentes</strong>
Implementação de mecânicas onde produção, recursos e evolução precisavam se comunicar sem gerar dependências excessivas no código.
</li>
<li><strong>Arquitetura de código escalável</strong>
Organização de scripts pensando em futuras expansões do jogo, evitando código rígido ou difícil de manter.
</li>
<li><strong>Balanceamento de gameplay</strong>
Ajustes constantes para garantir progressão fluida, sem crescimento rápido demais ou sensação de estagnação para o jogador.
</li>
<li><strong>Performance em dispositivos móveis</strong>
Otimização de lógica e uso consciente de recursos para manter boa performance em celulares Android.
</li>  
<li><strong>Ciclo completo de desenvolvimento</strong>
Planejamento, implementação, testes, correções e publicação do jogo de forma independente.
</li>  
</ul>

<span style="font-size:1.25rem; font-weight:bold">🚀 Habilidades Desenvolvidas</span>

Este projeto contribuiu diretamente para o desenvolvimento das seguintes habilidades:
<ul style="list-style-type: disc; margin-left:20px">
<li>Lógica de programação aplicada a jogos</li>
<li>Estruturação de projetos em Unity</li>
<li>Escrita de código limpo e reutilizável em C#</li>
<li>Resolução de problemas técnicos de forma autônoma</li>
<li>Pensamento analítico voltado para gameplay e experiência do usuário</li>
<li>Noções práticas de game design e progressão</li>
<li>Publicação e manutenção de jogos mobile</li>
</ul>

<a href="https://gustavosan-games.netlify.app/">🎮 Confira meu Portifolio de GameDev</a>
`,
      techs: ['Unity', 'C#', 'Mobile'],
      video: 'https://www.youtube.com/embed/hjIJenf5m60?si=3cpL5QNlfQzS9OX3&autoplay=1&mute=1',
      images: ['Images/PF1.png', 'Images/PF2.png'],
      github: 'https://github.com/',
      demo: '#',
    },
    /* {
      image: "",
      title: "Portfólio Dev",
      description:
        "Portfólio profissional em React, com animações, partículas e design moderno.",
      techs: ["React", "Tailwind", "CSS"],
      link: "#",
    },
    {
      image: "",
      title: "API de Estudos",
      description:
        "API REST para estudo de back-end, autenticação e boas práticas.",
      techs: ["Node.js", "Express", "SQL"],
      link: "#",
    }, */
  ];

  return (
    <section className="page-shell page-section">
      <span className="eyebrow">Seleção de trabalhos</span>
      <h1 className="section-heading">Projetos</h1>
      <p className="section-intro">
        Alguns projetos que representam minhas habilidades em desenvolvimento, jogos e aplicações
        modernas.
      </p>

      <div className="content-grid">
        {projects.map((project, index) => (
          <article
            key={index}
            onClick={() => setSelectedProject(project)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                setSelectedProject(project);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`Ver detalhes de ${project.title}`}
            className="surface-panel project-card"
          >
            <img src={project.images?.[0]} alt={`Imagem do projeto ${project.title}`} />
            <h3>{project.title}</h3>
            <p>{project.predescription}</p>
            <div className="tag-row hero-techs">
              {project.techs.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
            <span className="eyebrow">Abrir detalhes ↗</span>
          </article>
        ))}
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

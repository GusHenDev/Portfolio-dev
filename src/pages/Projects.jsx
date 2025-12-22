import { useState, useEffect } from "react";
import ProjectModal from "../components/ProjectModal";
import parse from "html-react-parser";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
  }, [selectedProject]);


  const projects = [
    {
      title: "Project Factory",
      predescription: "Jogo mobile de simulação e gerenciamento de fábrica desenvolvido em Unity e C#.",
      description:
        `<span style="font-size:2rem; font-weight:bold">Jogo mobile | Unity • C# </span>

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
      techs: ["Unity", "C#", "Mobile"],
      video: "/Videos/ProjetFactoryTeaser.mp4",
      images: [
        "Images/PF1.png",
        "Images/PF2.png",
      ],
      github: "https://github.com/",
      demo: "#",
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
    <section className="relative min-h-screen overflow-hidden bg-(--bg) px-6 py-24 text-(--text)">
      {/* Glow de fundo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-fade-up animate-random-slow absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-(--primary)/80 blur-3xl"></div>
        <div className="animate-fade-up animate-random-medium absolute bottom-1/2 -right-40 h-134 w-134 rounded-full bg-(--primary-soft)/20 blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-transparent/10 to-(--bg)"></div>

      <div className="relative mx-auto max-w-6xl animate-fade-up">
        <h2 className="text-4xl font-bold text-(--destak)">
          Projetos
        </h2>

        <img src="../a" alt="" />

        <p className="mt-4 max-w-2xl text-(--muted)">
          Alguns projetos que representam minhas habilidades em desenvolvimento,
          jogos e aplicações modernas.
        </p>

        {/* Grid de projetos */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group rounded-2xl bg-(--bg-soft) p-6 backdrop-blur transition hover:-translate-y-2 hover:bg-(--surface)/50"
            >
              <h3 className="text-xl font-bold pb-4">
                {project.title}
              </h3>

              <img src={project.images && project.images[0]} alt='Imagem de ${project.title}' className="w-full rounded-xl border border-white/10 object-cover" />

              <p className="mt-3 text-sm text-(--muted)">
                {project.predescription}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-(--destak)/30 bg-(--destak)/10 px-3 py-1 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="mt-6 inline-block text-sm font-medium text-(--destak)/70 transition group-hover:underline"
              >
                Ver projeto →
              </a>
            </div>
          ))}
        </div>
      </div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
}

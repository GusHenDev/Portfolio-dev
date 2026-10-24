import { ArrowDownRight, ArrowUpRight, Layers3, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import ProjectModal from '../components/ProjectModal';
import projects from '../data/projects';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const featuredProject = projects[1];

  function getProjectImage(project) {
    return project.images[0].startsWith('/') ? project.images[0] : `/${project.images[0]}`;
  }

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'auto';
  }, [selectedProject]);

  return (
    <main className="page-shell pt-[54px] pb-16 max-[480px]:pt-[34px] max-[480px]:pb-11">
      <section
        className="relative grid grid-cols-[minmax(0,1fr)_minmax(220px,.34fr)] items-end gap-10 overflow-hidden border-b border-(--border) pt-[25px] pb-[34px] before:pointer-events-none before:absolute before:top-[-135px] before:right-[4%] before:size-[340px] before:rounded-full before:bg-[radial-gradient(circle,color-mix(in_srgb,var(--destak)_13%,transparent),transparent_70%)] before:content-[''] max-[760px]:grid-cols-1 max-[760px]:gap-6 max-[480px]:pt-[18px]"
        aria-labelledby="projects-title"
      >
        <div className="relative">
          <span className="eyebrow">Portfólio / projetos selecionados</span>
          <h1
            className="mt-[13px] max-w-[800px] font-['Space_Grotesk','Segoe_UI',sans-serif] text-[clamp(2.7rem,7.4vw,6rem)] leading-[.98] font-bold tracking-[-.075em] max-[480px]:text-[clamp(2.55rem,12vw,3.5rem)]"
            id="projects-title"
          >
            Ideias que viram
            <span className="block text-(--primary)"> experiências.</span>
          </h1>
          <p className="mt-5 max-w-[560px] text-[.96rem] leading-[1.75] text-(--muted)">
            Jogos, aplicações e experimentos construídos com curiosidade, intenção e muito código.
            Cada projeto é uma nova oportunidade de aprender e fazer melhor.
          </p>
          <a
            className="group mt-[23px] inline-flex items-center gap-2 text-[.82rem] font-bold text-(--text) no-underline transition-colors duration-200 hover:text-(--destak) focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-(--primary)"
            href="#project-list"
          >
            Explorar projetos
            <ArrowDownRight
              className="text-(--destak) transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              size={16}
              aria-hidden="true"
            />
          </a>
        </div>

        <aside
          className="relative grid gap-3.5 pb-1 max-[760px]:grid-cols-[minmax(125px,.6fr)_1fr] max-[760px]:items-center max-[480px]:grid-cols-1 max-[480px]:gap-2"
          aria-label="Sobre os projetos"
        >
          <div className="grid grid-cols-[26px_1fr] items-center gap-x-[11px] border-l-2 border-(--primary) py-2 pl-4">
            <Layers3 className="row-span-2 text-(--destak)" size={19} aria-hidden="true" />
            <span className="font-['Space_Grotesk','Segoe_UI',sans-serif] text-[2rem] leading-none font-bold">
              {String(projects.length).padStart(2, '0')}
            </span>
            <span className="text-[.74rem] text-(--muted)">
              {projects.length === 1 ? 'projeto apresentado' : 'projetos apresentados'}
            </span>
          </div>
          <div className="flex items-start gap-2.5 rounded-lg border border-(--border) bg-[color-mix(in_srgb,var(--surface)_74%,transparent)] p-3.5">
            <Sparkles className="mt-0.5 shrink-0 text-(--primary)" size={16} aria-hidden="true" />
            <p className="text-[.75rem] leading-[1.6] text-(--muted)">
              Feitos para explorar ideias e transformar desafios em experiências reais.
            </p>
          </div>
        </aside>
      </section>

      <section
        className="scroll-mt-[85px] pt-[34px]"
        id="project-list"
        aria-labelledby="featured-project-title"
      >
        <div className="mb-5 flex items-end justify-between gap-[18px]">
          <div>
            <span className="eyebrow">Uma ideia em foco</span>
            <h2
              className="mt-[5px] font-['Space_Grotesk','Segoe_UI',sans-serif] text-[clamp(1.45rem,3vw,2rem)] tracking-[-.04em]"
              id="featured-project-title"
            >
              Projeto em destaque
            </h2>
          </div>          
        </div>

        {featuredProject && (
          <button
            type="button"
            className="group block w-full overflow-hidden rounded-[10px] border border-(--border) bg-(--surface) text-left text-(--text) transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-[3px] hover:border-(--destak) hover:shadow-(--shadow) focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-(--primary) motion-reduce:transition-none"
            onClick={() => setSelectedProject(featuredProject)}
            aria-label={`Abrir detalhes de ${featuredProject.title}`}
          >
            <span className="relative isolate block aspect-[16/9] max-h-[560px] w-full overflow-hidden bg-slate-950">
              <img
                src={getProjectImage(featuredProject)}
                alt={`Captura de tela de ${featuredProject.title}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
              <span className="absolute bottom-3 left-3 z-10 inline-flex items-center rounded-full border border-white/20 bg-[rgb(2_11_20_/_72%)] px-2.5 py-1.5 text-[.65rem] font-bold text-slate-50 backdrop-blur-[8px] sm:bottom-6 sm:left-6 sm:text-[.7rem]">
                Em destaque
              </span>
              {featuredProject.video && (
                <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-[7px] rounded-full border border-white/20 bg-[rgb(2_11_20_/_72%)] px-[11px] py-[7px] text-[.69rem] text-slate-50 backdrop-blur-[8px] sm:top-auto sm:right-6 sm:bottom-6">
                  <span className="text-[.6rem] text-amber-300" aria-hidden="true">
                    ▶
                  </span>
                  <span className="sm:hidden">Vídeo</span>
                  <span className="hidden sm:inline">Vídeo disponível</span>
                </span>
              )}
            </span>

            <span className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-7 sm:py-6">
              <span className="min-w-0">
                <span className="text-[.68rem] font-extrabold tracking-[.1em] text-(--destak) uppercase">
                  {featuredProject.category}
                </span>
                <span className="mt-1 block font-['Space_Grotesk','Segoe_UI',sans-serif] text-[clamp(1.45rem,3vw,2rem)] leading-tight font-bold tracking-[-.04em]">
                  {featuredProject.title}
                </span>
                <span className="mt-2 block max-w-[720px] text-[.84rem] leading-relaxed text-(--muted)">
                  {featuredProject.predescription}
                </span>
              </span>
              <span className="inline-flex shrink-0 items-center gap-2 self-start text-[.8rem] font-bold sm:self-center">
                Ver projeto
                <ArrowUpRight
                  className="text-(--primary) transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
                  size={17}
                  aria-hidden="true"
                />
              </span>
            </span>
          </button>
        )}
      </section>

      <section className="scroll-mt-[85px] pt-12 sm:pt-16" aria-labelledby="all-projects-title">
        <div className="mb-5 flex items-end justify-between gap-[18px]">
          <div>
            <span className="eyebrow">Explore o portfólio</span>
            <h2
              className="mt-[5px] font-['Space_Grotesk','Segoe_UI',sans-serif] text-[clamp(1.45rem,3vw,2rem)] tracking-[-.04em]"
              id="all-projects-title"
            >
              Todos os projetos
            </h2>
          </div>
          <span className="pb-1 text-[.72rem] whitespace-nowrap text-(--muted)">
            {String(projects.length).padStart(2, '0')} trabalhos
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              className="group flex min-w-0 flex-col overflow-hidden rounded-[10px] border border-(--border) bg-(--surface) text-left text-(--text) transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-(--destak) hover:shadow-(--shadow) focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-(--primary) motion-reduce:transition-none"
              onClick={() => setSelectedProject(project)}
              aria-label={`Abrir detalhes de ${project.title}`}
            >
              <span className="relative isolate block aspect-[4/3] overflow-hidden bg-(--bg-soft)">
                <img
                  src={getProjectImage(project)}
                  alt={`Captura de tela de ${project.title}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full scale-[1.08] object-cover object-center transition-transform duration-500 group-hover:scale-[1.14]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
                <span className="absolute bottom-3.5 left-3.5 z-10 inline-flex items-center rounded-full border border-white/20 bg-[rgb(2_11_20_/_72%)] px-2.5 py-1.5 text-[.7rem] font-bold text-slate-50 backdrop-blur-[8px]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {project.video && (
                  <span className="absolute right-3.5 bottom-3.5 z-10 inline-flex items-center gap-[7px] rounded-full border border-white/20 bg-[rgb(2_11_20_/_72%)] px-[11px] py-[7px] text-[.69rem] text-slate-50 backdrop-blur-[8px]">
                    <span className="text-[.6rem] text-amber-300" aria-hidden="true">
                      ▶
                    </span>
                    Vídeo disponível
                  </span>
                )}
              </span>

              <span className="flex flex-1 flex-col items-start p-4 sm:p-5">
                <span className="text-[.68rem] font-extrabold tracking-[.1em] text-(--destak) uppercase">
                  {project.category}
                </span>
                <span className="mt-1.5 font-['Space_Grotesk','Segoe_UI',sans-serif] text-[1.3rem] leading-tight font-bold tracking-[-.04em]">
                  {project.title}
                </span>
                <span className="mt-2 line-clamp-3 text-[.78rem] leading-relaxed text-(--muted)">
                  {project.predescription}
                </span>
                <span className="mt-3.5 flex flex-wrap gap-1.5">
                  {project.techs.map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </span>
                <span className="mt-4 inline-flex items-center gap-2 text-[.78rem] font-bold">
                  Conhecer projeto
                  <ArrowUpRight
                    className="text-(--primary) transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
                    size={17}
                    aria-hidden="true"
                  />
                </span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  );
}

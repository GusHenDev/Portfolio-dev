import { ArrowDownRight, ArrowUpRight, Layers3, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import ProjectModal from '../components/ProjectModal';
import projects from '../data/projects';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

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
        aria-labelledby="project-list-title"
      >
        <div className="mb-[17px] flex items-end justify-between gap-[18px] max-[480px]:items-start">
          <div>
            <span className="eyebrow">Do conceito à execução</span>
            <h2
              className="mt-[5px] font-['Space_Grotesk','Segoe_UI',sans-serif] text-[clamp(1.45rem,3vw,2rem)] tracking-[-.04em]"
              id="project-list-title"
            >
              Projetos em destaque
            </h2>
          </div>
          <span className="pb-1 text-[.72rem] whitespace-nowrap text-(--muted) max-[480px]:pt-[19px]">
            {String(projects.length).padStart(2, '0')} trabalhos
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              className="group col-span-full grid min-w-0 grid-cols-[minmax(0,1.12fr)_minmax(270px,.88fr)] overflow-hidden rounded-[10px] border border-(--border) bg-(--surface) text-left text-(--text) transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-[3px] hover:border-(--destak) hover:shadow-(--shadow) focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-(--primary) motion-reduce:transition-none max-[760px]:grid-cols-1"
              onClick={() => setSelectedProject(project)}
              aria-label={`Abrir detalhes de ${project.title}`}
            >
              <span className="relative isolate block min-h-[310px] overflow-hidden bg-[radial-gradient(ellipse_at_20%_80%,color-mix(in_srgb,var(--destak)_35%,transparent),transparent_55%),var(--bg-soft)] after:pointer-events-none after:absolute after:inset-x-0 after:top-[45%] after:bottom-0 after:bg-[linear-gradient(0deg,rgb(2_11_20_/_62%),transparent)] after:content-[''] max-[760px]:aspect-video max-[760px]:min-h-0">
                <img
                  src={
                    project.images[0].startsWith('/') ? project.images[0] : `/${project.images[0]}`
                  }
                  alt={`Captura de tela de ${project.title}`}
                  loading="lazy"
                  className="h-full min-h-[310px] w-full object-cover transition-transform duration-[400ms] group-hover:scale-[1.035] max-[760px]:min-h-0"
                />
                <span className="absolute bottom-4 left-4 z-10 inline-flex items-center rounded-full border border-white/20 bg-[rgb(2_11_20_/_72%)] px-2.5 py-1.5 text-[.7rem] font-bold text-slate-50 backdrop-blur-[8px]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {project.video && (
                  <span className="absolute right-4 bottom-4 z-10 inline-flex items-center gap-[7px] rounded-full border border-white/20 bg-[rgb(2_11_20_/_72%)] px-[11px] py-[7px] text-[.69rem] text-slate-50 backdrop-blur-[8px]">
                    <span className="text-[.6rem] text-amber-300" aria-hidden="true">
                      ▶
                    </span>
                    Vídeo disponível
                  </span>
                )}
              </span>

              <span className="flex flex-col items-start justify-center p-[clamp(22px,4vw,42px)] max-[480px]:px-[18px] max-[480px]:pt-[22px] max-[480px]:pb-6">
                <span className="text-[.68rem] font-extrabold tracking-[.1em] text-(--destak) uppercase">
                  {project.category}
                </span>
                <span className="mt-2.5 font-['Space_Grotesk','Segoe_UI',sans-serif] text-[clamp(1.65rem,3vw,2.35rem)] leading-[1.12] font-bold tracking-[-.045em]">
                  {project.title}
                </span>
                <span className="mt-3 text-[.86rem] leading-[1.7] text-(--muted)">
                  {project.predescription}
                </span>
                <span className="mt-[19px] flex flex-wrap gap-[7px]">
                  {project.techs.map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </span>
                <span className="mt-[23px] inline-flex items-center gap-2 text-[.8rem] font-bold">
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

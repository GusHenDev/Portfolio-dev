import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Gamepad2,
  Layers3,
  MonitorSmartphone,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';

const explorations = [
  {
    title: 'Vitrine e conteúdo modular',
    category: 'Arquitetura de interface',
    description:
      'Projetos cadastrados em módulos independentes alimentam cards e detalhes em modal, com descrições e galerias de imagens.',
    techs: ['Componentes reutilizáveis', 'React Router', 'Galeria'],
    status: 'Implementado',
    icon: Layers3,
  },
  {
    title: 'Experiência responsiva',
    category: 'Interface e interação',
    description:
      'Layouts adaptáveis, navegação móvel e controles com estados de foco para manter a experiência clara em diferentes telas.',
    techs: ['Responsive UI', 'Acessibilidade', 'CSS'],
    status: 'Implementado',
    icon: MonitorSmartphone,
  },
];

export default function Labs() {
  return (
    <main className="page-shell pt-[54px] pb-16 max-[480px]:pt-[34px] max-[480px]:pb-11">
      <section className="relative grid grid-cols-[minmax(0,1fr)_minmax(220px,.34fr)] items-end gap-10 overflow-hidden border-b border-(--border) pt-[25px] pb-[34px] before:pointer-events-none before:absolute before:top-[-135px] before:right-[4%] before:size-[340px] before:rounded-full before:bg-[radial-gradient(circle,color-mix(in_srgb,var(--destak)_13%,transparent),transparent_70%)] before:content-[''] max-[760px]:grid-cols-1 max-[760px]:gap-6 max-[480px]:pt-[18px]">
        <div className="relative">
          <span className="eyebrow">Laboratório / web e jogos</span>
          <h1 className="mt-[13px] max-w-[800px] font-['Space_Grotesk','Segoe_UI',sans-serif] text-[clamp(2.7rem,7.4vw,6rem)] leading-[.98] font-bold tracking-[-.075em] max-[480px]:text-[clamp(2.55rem,12vw,3.5rem)]">
            Aprender fazendo.
            <span className="block text-(--primary)"> Evoluir sempre.</span>
          </h1>
          <p className="mt-5 max-w-[600px] text-[.96rem] leading-[1.75] text-(--muted)">
            Um espaço para mostrar os desafios técnicos, experimentos e projetos que estão
            construindo minha experiência.
          </p>
          <a
            className="group mt-[23px] inline-flex items-center gap-2 text-[.82rem] font-bold text-(--text) no-underline transition-colors duration-200 hover:text-(--destak) focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-(--primary)"
            href="#web-labs"
          >
            Explorar o laboratório
            <ArrowDownRight
              className="text-(--destak) transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              size={16}
              aria-hidden="true"
            />
          </a>
        </div>

        <aside
          className="relative grid gap-3.5 pb-1 max-[760px]:grid-cols-[minmax(125px,.6fr)_1fr] max-[760px]:items-center max-[480px]:grid-cols-1 max-[480px]:gap-2"
          aria-label="Resumo do laboratório"
        >
          <div className="grid grid-cols-[26px_1fr] items-center gap-x-[11px] border-l-2 border-(--primary) py-2 pl-4">
            <Layers3 className="row-span-2 text-(--destak)" size={19} aria-hidden="true" />
            <span className="font-['Space_Grotesk','Segoe_UI',sans-serif] text-[2rem] leading-none font-bold">
              {String(explorations.length).padStart(2, '0')}
            </span>
            <span className="text-[.74rem] text-(--muted)">experimentos e projetos</span>
          </div>
          <div className="flex items-start gap-2.5 rounded-lg border border-(--border) bg-[color-mix(in_srgb,var(--surface)_74%,transparent)] p-3.5">
            <Gamepad2 className="mt-0.5 shrink-0 text-(--primary)" size={17} aria-hidden="true" />
            <p className="text-[.75rem] leading-[1.6] text-(--muted)">
              Desenvolvimento web e jogos independentes, com espaço para testar e melhorar.
            </p>
          </div>
        </aside>
      </section>

      <section
        className="scroll-mt-[85px] pt-[34px]"
        id="web-labs"
        aria-labelledby="web-labs-title"
      >
        <div className="mb-5">
          <span className="eyebrow">Construção e aprendizado</span>
          <h2
            className="mt-[5px] font-['Space_Grotesk','Segoe_UI',sans-serif] text-[clamp(1.45rem,3vw,2rem)] tracking-[-.04em]"
            id="web-labs-title"
          >
            Por trás do site
          </h2>
          <p className="mt-2 max-w-[650px] text-[.84rem] leading-relaxed text-(--muted)">
            Algumas das soluções e decisões técnicas aplicadas na experiência web da Allsoft.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {explorations.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group flex min-w-0 flex-col rounded-[10px] border border-(--border) bg-(--surface) p-5 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-(--destak) hover:shadow-(--shadow) sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-10 place-items-center rounded-lg border border-(--border) bg-(--bg-soft) text-(--destak)">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <span className="text-[.7rem] font-bold tracking-[.08em] text-(--muted)">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <span className="mt-5 text-[.66rem] font-extrabold tracking-[.1em] text-(--destak) uppercase">
                  {item.category}
                </span>
                <h3 className="mt-1 font-['Space_Grotesk','Segoe_UI',sans-serif] text-[1.25rem] leading-tight font-bold tracking-[-.03em]">
                  {item.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[.8rem] leading-relaxed text-(--muted)">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.techs.map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="mt-5 border-t border-(--border) pt-3 text-[.72rem] font-semibold text-(--muted)">
                  {item.status}
                </span>
              </article>
            );
          })}
        </div>
      </section>

     
    </main>
  );
}

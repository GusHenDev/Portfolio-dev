import {
  ArrowDownToLine,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Cpu,
  FolderOpen,
  Gamepad2,
  GitBranch,
  Globe2,
  Heart,
  Monitor,
  Network,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Wrench,
} from 'lucide-react';
import { createElement } from 'react';
import { Link } from 'react-router-dom';

const technologies = [
  { name: 'React', iconPath: '/public/react.svg' , className:'h-6.5 w-6.5 shrink-0 mr-1.5' },
  { name: 'C# / .NET', iconPath: '/public/csharp.svg', className:'h-6.5 w-6.5 shrink-0 mr-1.5' }, // Substitua pelo nome real do seu arquivo
  { name: 'Unity', iconPath: '/public/unity.svg', className:'h-5.5 w-5.5 shrink-0 mr-1.5' },
  { name: 'JavaScript', iconPath: '/public/javascript.svg', className:'h-5.5 w-5.5 shrink-0mr-1.5' },
  { name: 'SQL', iconPath: '/public/sql.svg', className:'h-6.5 w-6.5 shrink-0 mr-1.5' },
];

const skills = [
  { name: 'C#', detail: 'Linguagem principal', icon: Code2, color: 'text-violet-300' },
  { name: 'Unity', detail: 'Desenvolvimento de jogos', icon: Gamepad2, color: 'text-white' },
  { name: 'React', detail: 'Interfaces modernas', icon: Sparkles, color: 'text-cyan-300' },
  { name: '.NET', detail: 'APIs e aplicações robustas', icon: Cpu, color: 'text-violet-300' },
  {
    name: 'HTML / CSS / JS',
    detail: 'Websites e aplicações front-end',
    icon: Globe2,
    color: 'text-orange-300',
  },
  {
    name: 'Git & GitHub',
    detail: 'Versionamento e colaboração',
    icon: GitBranch,
    color: 'text-white',
  },
  {
    name: 'Redes & Hardware',
    detail: 'Manutenção e suporte básico',
    icon: Network,
    color: 'text-emerald-300',
  },
];

const projects = [
  {
    name: 'Project Factory',
    kind: 'Jogo mobile · Unity',
    description: 'Simulação e gerenciamento de fábrica com sistemas de produção e progressão.',
    image: '/Images/PF1.png',
    tags: ['Unity', 'C#', 'Mobile'],
  },
  {
    name: 'Portfólio Web',
    kind: 'Website · React',
    description: 'Portfólio responsivo desenvolvido para apresentar projetos e experiência.',
    image: '/Images/img1.png',
    tags: ['React', 'Tailwind', 'Vite'],
  },
  {
    name: 'Laboratório técnico',
    kind: 'Estudos · Prototipagem',
    description: 'Experimentos com interfaces, animações e desenvolvimento de aplicações.',
    image: '/Images/img3.png',
    tags: ['Web', 'Prototipagem'],
  },
];

const strengths = ['Disciplinado', 'Criativo', 'Trabalho em equipe', 'Aprendizado contínuo'];

export default function Home() {
  return (
    <main className="mx-auto w-[min(100%-32px,1440px)] sm:w-[calc(100%-48px)] lg:w-[calc(100%-80px)]">
      <section
        id="inicio"
        className="relative isolate grid min-h-105 grid-cols-1 items-center gap-5 overflow-hidden border-b border-white/10 py-8 sm:py-10 lg:min-h-117.5 lg:grid-cols-[1.1fr_.9fr] xl:grid-cols-[1.1fr_.9fr_190px]"
      >
        <img
          src="/Images/img2.png"
          alt="Estação de trabalho para desenvolvimento de software"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#020b14_0%,rgba(2,11,20,.95)_31%,rgba(2,11,20,.38)_64%,#020b14_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,#020b14_0%,transparent_42%,rgba(2,11,20,.12)_100%)]" />

        <div className="relative z-10 py-4 sm:py-8">
          <p className="mb-2 text-sm font-semibold text-slate-200">Olá, eu sou</p>
          <h1 className="font-['Space_Grotesk',sans-serif] text-4xl leading-[1.04] font-bold text-white sm:text-5xl">
            Gustavo Santana
          </h1>
          <p className="mt-2 font-['Space_Grotesk',sans-serif] text-xl font-bold text-amber-300 sm:text-2xl">
            Desenvolvedor de Software
          </p>
          <p className="mt-3 max-w-117.5 text-sm leading-relaxed text-slate-300">
            Transformo ideias em soluções digitais. Sou apaixonado por tecnologia, jogos e por
            construir coisas que impactam pessoas. Aqui você encontra um pouco da minha jornada e
            dos projetos que me movem.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <Link
              to="/Projects"
              className="inline-flex min-h-10 items-center gap-2 rounded-md bg-amber-300 px-4 text-xs font-bold text-slate-950 transition hover:bg-amber-200"
            >
              <FolderOpen size={15} /> Ver projetos
            </Link>
            <a
              href="#experiencia"
              className="inline-flex min-h-10 items-center gap-2 rounded-md border border-cyan-300/60 px-4 text-xs font-semibold text-white transition hover:bg-cyan-300/10"
            >
              <ArrowDownToLine size={15} /> Ver experiência
            </a>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-medium text-slate-300">
            {technologies.map((tech) => (
              <span
                className="inline-flex items-center gap-1 text-xs text-slate-300 transition hover:text-cyan-300"
                key={tech.name}
              >
                <img
                  src={tech.iconPath}
                  alt="" // Vazio porque o texto ao lado já descreve o ícone (acessibilidade)
                  className={tech.className}
                  aria-hidden="true"
                />
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        <div className="relative hidden h-full min-h-85 items-end justify-center lg:flex">
          
          <div className="absolute bottom-8 left-0 z-20 -rotate-6 font-['Space_Grotesk',sans-serif] text-lg leading-tight text-white drop-shadow-lg">
            <Trophy className="mb-1 text-amber-300" size={22} />
            Sonhe
            <br />
            Planeje
            <br />
            Construa
            <br />
            Conquiste
          </div>
        </div>

        <aside className="relative z-10 hidden flex-col gap-3 lg:flex">
          <div className="rounded-lg border border-white/10 bg-slate-950/70 p-4 shadow-lg backdrop-blur-sm">
            <p className="text-xs leading-relaxed text-cyan-100">
              “Tudo o que eu faço é pra um futuro melhor, para mim, minha família e as pessoas que
              Deus colocou no meu caminho.”
            </p>
            <span className="mt-2 block text-center text-lg text-amber-300">†</span>
          </div>
          <div className="grid gap-2 rounded-lg border border-white/10 bg-slate-950/65 p-3 text-[11px] text-slate-200 backdrop-blur-sm">
            <span className="flex items-center gap-2">
              <Gamepad2 size={14} className="text-amber-300" /> Games & Apps
            </span>
            <span className="flex items-center gap-2">
              <Code2 size={14} className="text-amber-300" /> Software & Web
            </span>
            <span className="flex items-center gap-2">
              <Globe2 size={14} className="text-amber-300" /> Soluções Digitais
            </span>
            <span className="flex items-center gap-2">
              <Heart size={14} className="text-amber-300" /> Deus, Família & Futuro
            </span>
          </div>
        </aside>
      </section>

      <section
        id="sobre"
        className="grid gap-4 border-b border-white/10 py-5 lg:grid-cols-[1.2fr_.9fr_.8fr]"
      >
        <div>
          <h2 className="flex items-center gap-2 font-['Space_Grotesk',sans-serif] text-xl font-bold text-white">
            <span className="text-cyan-400">●</span> Sobre mim
          </h2>
          <p className="mt-2 max-w-140 text-xs leading-relaxed text-slate-300">
            Sou um desenvolvedor em formação, atualmente cursando Engenharia de Software. Tenho
            experiência com Unity e C#, criação de jogos, aplicativos e websites. Já trabalhei com
            manutenção de computadores e redes, e estou sempre buscando aprender algo novo, seja na
            tecnologia, na minha vida pessoal ou na minha fé.
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {strengths.map((strength, index) => (
              <span
                key={strength}
                className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-2.5 py-1 text-[9px] text-slate-200"
              >
                {index === 0 ? (
                  <ShieldCheck size={11} className="text-amber-300" />
                ) : (
                  <Star size={11} className="text-cyan-300" />
                )}
                {strength}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-slate-950/60 p-4">
          <h3 className="mb-3 text-xs font-bold text-white">
            <BriefcaseBusiness className="mr-2 inline text-cyan-300" size={14} />
            Meu foco
          </h3>
          <ul className="grid gap-2 text-[10px] text-slate-300">
            <li className="flex items-center gap-2">
              <Sparkles size={12} className="text-amber-300" /> Evoluir como desenvolvedor
            </li>
            <li className="flex items-center gap-2">
              <Code2 size={12} className="text-amber-300" /> Construir projetos relevantes
            </li>
            <li className="flex items-center gap-2">
              <Wrench size={12} className="text-amber-300" /> Conquistar independência financeira
            </li>
            <li className="flex items-center gap-2">
              <Heart size={12} className="text-amber-300" /> Cuidar da minha família
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck size={12} className="text-amber-300" /> Servir a Deus e fazer a diferença
            </li>
          </ul>
        </div>
        <div className="relative flex min-h-37.5 items-center overflow-hidden rounded-lg border border-white/10 bg-slate-950/60 p-4">
          <img
            src="/Images/img3.png"
            alt="Arte abstrata em azul e dourado"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/85 via-slate-950/40 to-transparent" />
          <div className="relative">
            <h3 className="font-['Space_Grotesk',sans-serif] text-sm font-bold text-white">
              "Confia no Senhor de todo o teu coração e não te estribes no teu<br/> 
              próprio entendimento. Reconhece-o em todos os teus caminhos, e ele<br/> 
              endireitará as tuas veredas."
            </h3>
            <p className="mt-2 text-[10px] text-slate-200">Provérbios 3:5-6</p>
            <span className="mt-2 block text-amber-300">†</span>
          </div>
        </div>
      </section>

      <section id="habilidades" className="scroll-mt-16 border-b border-white/10 py-5">
        <h2 className="mb-3 flex items-center gap-2 font-['Space_Grotesk',sans-serif] text-lg font-bold text-white">
          <Code2 className="text-cyan-400" size={19} /> Habilidades Técnicas
        </h2>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
          {skills.map(({ name, detail, icon: SkillIcon, color }) => (
            <article
              key={name}
              className="flex min-h-23 flex-col items-center justify-center rounded-md border border-white/5 bg-slate-900/70 p-3 text-center shadow-lg transition hover:-translate-y-1 hover:border-cyan-400/30"
            >
              {createElement(SkillIcon, { size: 21, className: color })}
              <h3 className="mt-2 text-[10px] font-bold text-white">{name}</h3>
              <p className="mt-1 text-[8px] leading-tight text-slate-400">{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projetos" className="scroll-mt-16 border-b border-white/10 py-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="flex items-center gap-2 font-['Space_Grotesk',sans-serif] text-lg font-bold text-white">
            <FolderOpen className="text-cyan-400" size={18} /> Projetos em destaque
          </h2>
          <Link
            to="/Projects"
            className="inline-flex items-center gap-1 text-[10px] font-semibold text-cyan-300 hover:text-cyan-100"
          >
            Ver todos <ArrowUpRight size={13} />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {projects.map((project) => (
            <article
              key={project.name}
              className="overflow-hidden rounded-md border border-white/10 bg-slate-900/70 transition hover:border-cyan-400/40"
            >
              <img src={project.image} alt={project.name} className="h-24 w-full object-cover" />
              <div className="p-2.5">
                <p className="text-[8px] text-cyan-300">{project.kind}</p>
                <h3 className="mt-1 text-[11px] font-bold text-white">{project.name}</h3>
                <p className="mt-1 line-clamp-2 text-[9px] leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-700 px-1.5 py-0.5 text-[8px] text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
          <Link
            to="/Projects"
            className="flex min-h-48.75 flex-col items-center justify-center rounded-md border border-dashed border-slate-700 bg-slate-950/40 text-center transition hover:border-cyan-400/50"
          >
            <span className="grid size-8 place-items-center rounded-full border border-slate-600 text-lg text-cyan-300">
              +
            </span>
            <strong className="mt-2 text-[10px] text-white">
              Mais projetos
              <br />
              em breve...
            </strong>
            <span className="mt-2 text-[8px] text-slate-500">
              Sempre criando,
              <br />
              sempre evoluindo.
            </span>
          </Link>
        </div>
      </section>

      <section
        id="experiencia"
        className="grid scroll-mt-16 gap-4 border-b border-white/10 py-5 lg:grid-cols-[1.1fr_1fr_1fr_.65fr]"
      >
        <div>
          <h2 className="mb-3 flex items-center gap-2 font-['Space_Grotesk',sans-serif] text-lg font-bold text-white">
            <BriefcaseBusiness className="text-amber-300" size={18} /> Experiência e Formação
          </h2>
          <ol className="relative ml-2 border-l border-slate-700 pl-4">
            <li className="relative pb-3 text-[9px] text-slate-300">
              <span className="absolute top-0.5 -left-5.25 grid size-3 place-items-center rounded-full border border-amber-300 bg-slate-950 text-[7px] text-amber-300">
                ✦
              </span>
              <strong className="block text-white">2025 – 2028</strong>
              <span>
                Engenharia de Software · Cruzeiro do Sul
                <br />
                Em andamento
              </span>
            </li>
            <li className="relative pb-3 text-[9px] text-slate-300">
              <span className="absolute top-0.5 -left-5.25 grid size-3 place-items-center rounded-full border border-slate-500 bg-slate-950 text-[7px]">
                ✦
              </span>
              <strong className="block text-white">2023 – 2024</strong>
              <span>
                ADS · Cruzeiro do Sul
                <br />
                Incompleto
              </span>
            </li>
            <li className="relative text-[9px] text-slate-300">
              <span className="absolute top-0.5 -left-5.25 grid size-3 place-items-center rounded-full border border-slate-500 bg-slate-950 text-[7px]">
                ✦
              </span>
              <strong className="block text-white">Cursos e Certificações</strong>
              <span>Formação contínua em tecnologia</span>
            </li>
          </ol>
        </div>
        <div className="rounded-md border border-white/10 bg-slate-950/60 p-3">
          <h3 className="mb-2 text-[10px] font-bold text-white">
            <Monitor className="mr-1.5 inline text-cyan-300" size={13} />
            Experiência Prática
          </h3>
          <ul className="grid gap-1.5 text-[9px] leading-snug text-slate-300">
            <li>Manutenção de equipamentos de informática (em processo de teletrabalho)</li>
            <li>Conhecimentos em infraestrutura e redes</li>
            <li>Apoio em projetos e desenvolvimento de sistemas</li>
            <li>Em busca de oportunidade na área de TI / Helpdesk</li>
          </ul>
        </div>
        <div className="rounded-md border border-white/10 bg-slate-950/60 p-3">
          <h3 className="mb-2 text-[10px] font-bold text-white">
            <Sparkles className="mr-1.5 inline text-cyan-300" size={13} />
            Planos
          </h3>
          <ul className="grid gap-1 text-[9px] text-slate-300">
            <li>Concluir a faculdade</li>
            <li>Trabalhar com desenvolvimento</li>
            <li>Construir minha independência financeira</li>
            <li>Viajar pelo Brasil e conhecer o mundo</li>
            <li>Construir minha família</li>
            <li>Continuar servindo a Deus</li>
          </ul>
        </div>
        <p className="rotate-[-7deg] self-end px-2 pb-2 font-['Space_Grotesk',sans-serif] text-sm leading-tight text-cyan-300">
          Grandes conquistas
          <br />
          começam com
          <br />
          pequenos passos.
          <Trophy className="ml-1 inline text-amber-300" size={15} />
        </p>
      </section>
    </main>
  );
}

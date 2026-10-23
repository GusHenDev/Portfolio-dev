import { GitBranch, Heart, Link2, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contato" className="scroll-mt-16 border-t border-white/10 bg-[#020b14] text-white">
      <div className="mx-auto grid w-[min(100%-32px,1440px)] gap-4 py-4 sm:w-[calc(100%-48px)] md:grid-cols-[1.1fr_1fr_.8fr] lg:w-[calc(100%-80px)]">
        <div>
          <h2 className="flex items-center gap-2 font-['Space_Grotesk',sans-serif] text-xl font-bold">
            <Mail size={17} className="text-amber-300" /> Vamos conversar?
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            Se você tem um projeto, oportunidade ou só quer trocar ideia, me chama! Será um prazer
            conversar.
          </p>
          <a
            href="mailto:seuemail@email.com"
            className="mt-2 inline-flex items-center gap-1 text-xs text-cyan-300 hover:text-white"
          >
            <Mail size={12} /> gustavosantan10a@gmail.com
          </a>
        </div>
        <div className="grid content-center gap-1.5 text-xs text-slate-400">
          <a
            href="https://github.com/GusHenDev"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-white"
          >
            <img src="/public/github.svg" alt="GitHub" className="h-4 w-4" /> github.com/GuhDev
          </a>
          <a
            href="https://www.linkedin.com/in/gustavo-henrique-044603202"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-white"
          >
            <img src="/public/linkedin.svg" alt="LinkedIn" className="h-4 w-4" /> linkedin
          </a>
          
        </div>
        <p className="self-center text-right font-['Space_Grotesk',sans-serif] text-xs text-cyan-300">
          Obrigado por visitar meu portfólio!
          <br />
          Deus abençoe! <Heart size={12} className="inline text-amber-300" />
        </p>
      </div>
      <div className="mx-auto flex w-[min(100%-32px,1440px)] flex-wrap justify-between gap-2 border-t border-white/10 py-2.5 text-[0.7rem] text-slate-500 sm:w-[calc(100%-48px)] lg:w-[calc(100%-80px)]">
        <span>
          © {new Date().getFullYear()} GuhDev. Todos os direitos reservados. Feito com ♥ e muito
          código.
        </span>
        <span className="tracking-[.16em]">SONHO / FOCO / TRABALHO / RESULTADO</span>
      </div>
    </footer>
  );
}

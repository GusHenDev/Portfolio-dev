export default function Footer() {
  return (
    <footer className="relative bg-(--bg) px-6 py-12 text-(--muted)">
      {/* Linha superior */}
      <div className="mx-auto max-w-6xl border-t border-white/10 pt-10">
        
        <div className="grid gap-8 md:grid-cols-3">
          
          {/* Identidade */}
          <div>
            <h3 className="text-lg font-semibold text-(--text)">
              Gustavo Santana
            </h3>
            <p className="mt-2 text-sm">
              Desenvolvedor de software focado em aplicações modernas e jogos.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-sm font-semibold text-(--text)">
              Navegação
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="/" className="hover:text-(--primary)">Home</a></li>
              <li><a href="/About" className="hover:text-(--primary)">Sobre</a></li>
              <li><a href="/Projects" className="hover:text-(--primary)">Projetos</a></li>
              <li><a href="/Labs" className="hover:text-(--primary)">Labs</a></li>
              <li><a href="/Contact" className="hover:text-(--primary)">Contato</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-sm font-semibold text-(--text)">
              Contato
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  className="hover:text-(--primary)"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/"
                  target="_blank"
                  className="hover:text-(--primary)"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:seuemail@email.com"
                  className="hover:text-(--primary)"
                >
                  E-mail
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col items-center gap-2 text-xs text-(--muted) md:flex-row md:justify-between">
          <span>
            © {new Date().getFullYear()} Gustavo Santana. Todos os direitos reservados.
          </span>
          <span>
            Construído com React e Tailwind
          </span>
        </div>

      </div>
    </footer>
  );
}

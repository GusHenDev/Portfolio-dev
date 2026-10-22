import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { label: 'Início', to: '/', end: true },
  { label: 'Sobre', to: '/About' },
  { label: 'Projetos', to: '/Projects' },
  { label: 'Labs', to: '/Labs' },
  { label: 'Contato', to: '/Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="page-shell">
        <nav className="site-nav" aria-label="Navegação principal">
          <NavLink className="brand-mark" to="/" onClick={closeMenu}>
            <span className="brand-symbol" aria-hidden="true">
              G
            </span>
            <span>GuhDev</span>
          </NavLink>

          <div className="nav-links">
            {links.map(({ label, to, end }) => (
              <NavLink key={to} to={to} end={end}>
                {label}
              </NavLink>
            ))}
          </div>

          <div className="nav-tools">
            <button
              className="menu-toggle"
              type="button"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        <div
          id="mobile-navigation"
          className={`mobile-nav${menuOpen ? ' is-open' : ''}`}
          aria-hidden={!menuOpen}
        >
          {links.map(({ label, to, end }) => (
            <NavLink key={to} to={to} end={end} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
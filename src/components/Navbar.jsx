import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../Context/ThemeContext";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    function linkStyle({ isActive }) {
        return isActive
            ? "font-semibold text-(--destak)"
            : "text-(--text) hover:text-(--destak) transition";
    }

    return (
        <header className="fixed over top-0 w-full z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md">
            <nav className="m-0 px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <a href="/" className="text-xl font-bold">
                    <span className="dark:text-white text-orange-300">Guh</span><span className="text-orange-700 dark:text-indigo-500">Dev</span>
                </a>

                {/* Desktop menu */}
                <ul className="hidden md:flex gap-8 items-center">
                    <NavLink to="/" className={linkStyle}>Home</NavLink>
                    <NavLink to="/About" className={linkStyle}>Sobre</NavLink>
                    <NavLink to="/Projects" className={linkStyle}>Projetos</NavLink>
                    <NavLink to="/labs" className={linkStyle}>Labs</NavLink>
                    <NavLink to="/Contact" className={linkStyle}>Contato</NavLink>

                    {/* Dark mode */}
                    <button onClick={toggleTheme} className="rounded-full cursor-pointer border h-12 w-12 bg-orange-100 dark:bg-slate-900 border-orange-800 dark:border-slate-200 transition-transform hover:scale-105 active:scale-95">
                        {theme === "dark" ? "🌙" : "☀️"}
                    </button>
                </ul>

                {/* Mobile button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-2xl"
                >
                    ☰
                </button>
            </nav>

            {/* Mobile menu */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-96" : "max-h-0"} bg-white dark:bg-zinc-900`}
            >
                <ul className="flex flex-col gap-4 px-6 py-4">
                    <NavLink onClick={() => setMenuOpen(false)} to="/" className={linkStyle}>Home</NavLink>
                    <NavLink onClick={() => setMenuOpen(false)} to="/sobre" className={linkStyle}>Sobre</NavLink>
                    <NavLink onClick={() => setMenuOpen(false)} to="/projetos" className={linkStyle}>Projetos</NavLink>
                    <NavLink onClick={() => setMenuOpen(false)} to="/labs" className={linkStyle}>Labs</NavLink>
                    <NavLink onClick={() => setMenuOpen(false)} to="/contato" className={linkStyle}>Contato</NavLink>

                    <button onClick={toggleTheme} className="cursor-pointer text-left text-xl">
                        🌓 Alternar tema
                    </button>
                </ul>
            </div>
        </header>
    );
}

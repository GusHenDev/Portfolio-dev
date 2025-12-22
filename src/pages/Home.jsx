import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import '../Styles/Animations.css';
import '../Styles/Home.css';

export default function Home() {
    const text = "Desenvolvedor Full Stack • Software • Jogos";
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayText(text.slice(0, i + 1));
            i++;
            if (i === text.length) clearInterval(interval);
        }, 70);

        return () => clearInterval(interval);
    }, []);
    return (
        <section className="pt-28 relative min-h-screen overflow-hidden flex items-center content-between md:content-normal bg-(--bg) text-(--text)">
            <div className="pointer-events-none absolute inset-0">
                <div className="animate-fade-up animate-random-medium absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-(--primary) blur-3xl"></div>
                <div className="animate-fade-up animate-random-slow absolute bottom-1/2 -right-40 h-134 w-134 rounded-full bg-(--primary-soft)/20 blur-3xl"></div>
            </div>
            <div className="pointer-events-none flex absolute inset-0">
                <div className="animate-fade-up flex gap-4 md:gap-12 absolute -top-30 md:top-0 -right-40 md:-right-100 lg:-right-80 xl:-right-50 h-120 md:h-200 w-120 md:w-200">
                    <div className="flex flex-col-reverse gap-4 md:gap-12 bottom-0">
                        <img className="img-card bg-blue-500 shadow-lg shadow-purple-500/10" src="Images/img1.png" alt="foto_1" />
                        <img className="img-card bg-blue-500 shadow-lg shadow-purple-500/10" src="Images/img1.png" alt="foto_1" />
                    </div>
                    <div className="flex flex-col gap-4 md:gap-12 bottom-0">
                        <img className="img-card bg-blue-500 shadow-lg shadow-purple-500/10" src="Images/img1.png" alt="foto_1" />
                        <img className="img-card bg-blue-500 shadow-lg shadow-purple-500/10" src="Images/img1.png" alt="foto_1" />
                    </div>
                    <div className="flex flex-col-reverse gap-4 md:gap-12 bottom-0">
                        <div className="img-card"></div>
                        <img className="img-card bg-blue-500 shadow-lg shadow-purple-500/10" src="Images/img1.png" alt="foto_1" />
                    </div>

                </div>
            </div>

            <div className="absolute inset-0 bg-linear-to-b from-transparent/10 to-(--bg)"></div>

            <div className="animate-fade-up absolute mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center xl:px-20 bottom-20 md:top-1/3">

                {/* Texto */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Olá, eu sou <span className="text-(--destak)">Gustavo</span>
                    </h1>

                    <h2 className="mt-4 text-xl md:text-2xl text-zinc-600 dark:text-zinc-400">
                        {displayText}
                    </h2>

                    <p className="mt-6 text-zinc-700 dark:text-zinc-300 max-w-xl">
                        Desenvolvo aplicações web, APIs, softwares e jogos, focando em código limpo,
                        performance e soluções práticas para problemas reais.
                    </p>

                    {/* Tecnologias */}
                    <div className="mt-6 flex flex-wrap gap-3 cards">
                        {["React", "JavaScript", "C#/.NET", "Python", "SQL", "Unity"].map(
                            (tech, index) => (
                                <span
                                    key={tech}
                                    className="card px-3 py-1 rounded-full text-sm bg-zinc-200 dark:bg-zinc-800"
                                    style={{ "--index": index }}
                                >
                                    {tech}
                                </span>
                            )
                        )}
                    </div>


                    {/* Botões */}
                    <div className="mt-8 flex gap-4">
                        <Link
                            to="/Projects"
                            className="btn px-6 py-3 rounded-lg bg-(--destak) text-white font-medium hover:bg-orange-600 dark:hover:bg-indigo-600 transition"
                        >
                            Ver Projetos
                        </Link>

                        <Link
                            to="/Contact"
                            className="btn px-6 py-3 rounded-lg border border-zinc-400 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
                        >
                            Entrar em Contato
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}

import { useState } from 'react';

export default function ProjectCarousel({ images }) {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="relative flex h-[65vh] max-h-[42rem] w-full shrink-0 items-center justify-center overflow-hidden rounded-xl bg-transparent">
      
      {/* 1. Fundo Desfocado com Transição */}
      {images.map((imgUrl, i) => (
        <img
          key={`bg-${i}`}
          src={imgUrl.startsWith('/') ? imgUrl : `/${imgUrl}`}
          alt="Fundo desfocado"
          className={`absolute inset-0 h-full w-full object-cover blur transition-opacity duration-500 ease-in-out ${
            i === index ? 'opacity-40 z-0' : 'opacity-0 z-0 pointer-events-none'
          }`}
        />
      ))}

      {/* 2. Imagem Principal com Transição */}
      {images.map((imgUrl, i) => (
        <img
          key={`main-${i}`}
          src={imgUrl.startsWith('/') ? imgUrl : `/${imgUrl}`}
          alt="Imagem do projeto"
          loading="lazy"
          className={`absolute h-full w-full rounded-xl border border-white/10 object-contain shadow-lg shadow-black/40 transition-all duration-500 ease-in-out ${
            i === index 
              ? 'opacity-100 scale-100 z-10' 
              : 'opacity-0 scale-95 z-0 pointer-events-none'
          }`}
        />
      ))}

      {/* Botões */}
      <button
        type="button"
        onClick={prev}
        aria-label="Imagem anterior"
        className="absolute top-1/2 left-3 z-20 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white hover:bg-black transition-colors"
      >
        ‹
      </button>

      <button
        type="button"
        onClick={next}
        aria-label="Próxima imagem"
        className="absolute top-1/2 right-3 z-20 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white hover:bg-black transition-colors"
      >
        ›
      </button>
    </div>
  );
}

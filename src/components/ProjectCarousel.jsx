import { useState } from "react";

export default function ProjectCarousel({ images }) {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="relative w-full">
      <img
        src={images[index]}
        alt="Imagem do projeto"
        loading="lazy"
        className="w-full rounded-xl border border-white/10 object-cover"
      />

      {/* Botões */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white hover:bg-black"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white hover:bg-black"
      >
        ›
      </button>
    </div>
  );
}

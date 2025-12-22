import ProjectCarousel from "../components/ProjectCarousel";
import parse from "html-react-parser";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-(--bg)/70 backdrop-blur p-6">

      {/* Modal */}
      <div className="relative w-full max-w-3xl rounded-2xl bg-(--bg-soft) text-(--text) animate-fade-up max-h-[90vh] overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 p-6">
          <h2 className="text-xl font-bold text-(--destak)">
            {project.title}
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Conteúdo scrollável */}
        <div
          className="overflow-y-auto flex flex-col gap-12 p-6 scrollbar-thin scrollbar-thumb-white/20"
          style={{ maxHeight: "calc(90vh - 80px)" }}
        >

          {/* Vídeo */}
          {project.video && (
            <div className="relative w-full h-full rounded-xl border border-white/10 aspect-video">
              <iframe
                src={project.video}
                className="absolute inset-0 h-full w-full rounded-xl border border-white/10 shadow-lg shadow-black/40"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}

          {project.images?.length > 0 && (
            <ProjectCarousel images={project.images} />
          )}

          <p className="text-(--muted) whitespace-pre-wrap">
            {parse(project.description)}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.techs.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-(--destak)/10 px-3 py-1 text-xs text-(--destak)/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

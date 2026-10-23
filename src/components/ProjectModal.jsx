import ProjectCarousel from '../components/ProjectCarousel';
import parse from 'html-react-parser';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="project-modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <div className="project-modal-header">
          <h2 id="project-modal-title">{project.title}</h2>

          <button
            type="button"
            onClick={onClose}
            className="theme-toggle"
            aria-label="Fechar detalhes do projeto"
          >
            ×
          </button>
        </div>

        <div className="project-modal-body">
          {project.video && (
            <div className="relative aspect-video w-full">
              <iframe
                src={project.video}
                className="absolute inset-0 h-full w-full rounded-lg border border-(--border)"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}

          {project.images?.length > 0 && <ProjectCarousel images={project.images} />}

          <div className="whitespace-pre-wrap text-(--muted)">{parse(project.description)}</div>

          <div className="hero-techs">
            {project.techs.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

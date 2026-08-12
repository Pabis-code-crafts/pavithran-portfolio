import type { Project } from "../content/projects";

type FeaturedProjectProps = {
  project: Project;
};

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <article className="featured-project">
      <div>
        <p className="eyebrow">{project.eyebrow}</p>
        <h3>{project.name}</h3>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-lede">{project.description}</p>
      </div>

      <div className="project-story-grid">
        {project.sections.map((section) => (
          <section className="project-story-block" key={section.heading}>
            <h4>{section.heading}</h4>
            <p>{section.body}</p>
          </section>
        ))}
      </div>

      <div className="project-meta-grid">
        <div>
          <h4>Built with</h4>
          <div className="tag-list">
            {project.builtWith.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div>
          <h4>Status</h4>
          <div className="tag-list status-list">
            {project.status.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="project-actions">
        <a className="button primary" href={project.liveUrl} target="_blank" rel="noreferrer">
          Live Demo
        </a>
      </div>
    </article>
  );
}
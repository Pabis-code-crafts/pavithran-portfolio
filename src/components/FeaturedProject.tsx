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

      <section className="project-demo" aria-labelledby="schedow-demo-heading">
        <div className="project-demo-copy">
          <p className="eyebrow">Experience Schedow</p>
          <h4 id="schedow-demo-heading">Experience Schedow yourself</h4>
          <p>Get the full experience with the live Supervisor demo.</p>
          <a
            className="button primary project-demo-button"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Open the Schedow live demo in a new tab"
          >
            🚀 Live Demo
          </a>
          <span>Try the full Supervisor experience - no installation required.</span>
        </div>

        <a
          className="walkthrough-preview"
          href={project.walkthroughUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Watch the Schedow walkthrough on YouTube in a new tab"
        >
          <span className="walkthrough-media">
            <img src={project.walkthroughThumbnailUrl} alt="How to Use Schedow YouTube walkthrough thumbnail" />
            <span className="walkthrough-play" aria-hidden="true">Play</span>
          </span>
          <span className="walkthrough-label">Watch: How to Use Schedow</span>
        </a>
      </section>

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
    </article>
  );
}
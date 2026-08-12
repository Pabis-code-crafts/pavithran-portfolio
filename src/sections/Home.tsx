import { profile } from "../content/profile";

export function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow">{profile.role}</p>
        <h1>{profile.name}</h1>
        <p className="hero-intro">{profile.intro}</p>
        <p className="hero-focus">{profile.focus}</p>
        <p className="hero-focus">{profile.currentBuild}</p>
        <div className="hero-actions">
          <a className="button primary" href={profile.schedowUrl}>
            View Schedow
          </a>
          <a className="button secondary" href="#timeline">
            Explore my journey
          </a>
          <a className="button text" href={profile.githubUrl}>
            GitHub
          </a>
          <a className="button text" href={profile.linkedInUrl}>
            LinkedIn
          </a>
        </div>
      </div>
      <aside className="hero-note" aria-label="Current focus">
        <span>Currently building</span>
        <strong>Schedow</strong>
        <p>AI-powered workforce scheduling shaped by real shift-based work and supervision experience.</p>
      </aside>
    </section>
  );
}
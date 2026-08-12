import { SectionShell } from "../components/SectionShell";
import { profile } from "../content/profile";

export function About() {
  return (
    <SectionShell id="about" eyebrow="About" title="The context behind the work">
      <div className="about-panel">
        <div className="about-story">
          {profile.aboutStory.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p>{profile.aboutEngineering}</p>
        <section className="building-interests">
          <h3>What I like building</h3>
          {profile.buildingInterests.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
        <p className="credentials-line">
          <strong>Credentials</strong> · AWS Solutions Architect · Google AI Essentials
        </p>
      </div>
    </SectionShell>
  );
}
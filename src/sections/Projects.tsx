import { FeaturedProject } from "../components/FeaturedProject";
import { SectionShell } from "../components/SectionShell";
import { featuredProject } from "../content/projects";

export function Projects() {
  return (
    <SectionShell id="projects" eyebrow="Projects" title="Building software around problems worth solving.">
      <FeaturedProject project={featuredProject} />
    </SectionShell>
  );
}
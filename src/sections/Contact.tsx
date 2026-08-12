import { SectionShell } from "../components/SectionShell";
import { profile } from "../content/profile";

const contactItems = [
  {
    label: "EMAIL",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/pavithran-guru",
    href: profile.linkedInUrl,
  },
  {
    label: "GITHUB",
    value: "github.com/Pabis-code-crafts",
    href: profile.githubUrl,
  },
];

export function Contact() {
  return (
    <SectionShell id="contact" eyebrow="Contact" title={profile.contactHeading} intro={profile.contactText}>
      <div className="contact-panel">
        <div className="contact-list">
          {contactItems.map((item) => (
            <a href={item.href} key={item.label} target={item.label === "EMAIL" ? undefined : "_blank"} rel={item.label === "EMAIL" ? undefined : "noreferrer"}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </a>
          ))}
        </div>
        <p className="contact-closing">Open to interesting engineering problems, ambitious products, and good conversations.</p>
        <footer className="site-footer">© 2026 Pavithran Gurusamy</footer>
      </div>
    </SectionShell>
  );
}
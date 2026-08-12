type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
};

export function SectionShell({ id, eyebrow, title, intro, children }: SectionShellProps) {
  return (
    <section className="section-shell" id={id}>
      <div className="section-heading">
        {eyebrow ? <p>{eyebrow}</p> : null}
        <h2>{title}</h2>
        {intro ? <span>{intro}</span> : null}
      </div>
      {children}
    </section>
  );
}
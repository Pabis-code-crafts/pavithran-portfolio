import type { TimelineEntry } from "../content/timeline";

type TimelineItemProps = {
  entry: TimelineEntry;
};

export function TimelineItem({ entry }: TimelineItemProps) {
  return (
    <article className={entry.featured ? "timeline-item timeline-item-featured" : "timeline-item"}>
      <div className="timeline-marker" aria-hidden="true" />
      <div className="timeline-content">
        <div className="timeline-meta">
          <span>{entry.period}</span>
          <span>{entry.label}</span>
        </div>
        <h3>{entry.title}</h3>
        {entry.location ? <p className="timeline-location">{entry.location}</p> : null}
        <p>{entry.summary}</p>
        {entry.detail ? <p>{entry.detail}</p> : null}
        {entry.highlight ? <strong className="timeline-highlight">{entry.highlight}</strong> : null}
      </div>
    </article>
  );
}
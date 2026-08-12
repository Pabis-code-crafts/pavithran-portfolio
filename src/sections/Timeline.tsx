import { SectionShell } from "../components/SectionShell";
import { TimelineItem } from "../components/TimelineItem";
import { additionalTimelineEntries, timelineEntries, timelineIntro } from "../content/timeline";

export function Timeline() {
  return (
    <SectionShell id="timeline" eyebrow="Timeline" title="A working path into software" intro={timelineIntro}>
      <div className="timeline-column">
        <div className="timeline-list">
          {timelineEntries.map((entry) => (
            <TimelineItem key={`${entry.period}-${entry.title}`} entry={entry} />
          ))}
        </div>

        <div className="timeline-additional">
          <p>Additional Experience</p>
          <div className="timeline-list timeline-list-additional">
            {additionalTimelineEntries.map((entry) => (
              <TimelineItem key={`${entry.period}-${entry.title}`} entry={entry} />
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
export type ProjectSection = {
  heading: string;
  body: string;
};

export type Project = {
  name: string;
  eyebrow: string;
  tagline: string;
  description: string;
  sections: ProjectSection[];
  builtWith: string[];
  status: string[];
  liveUrl: string;
  sourceUrl: string;
};

export const featuredProject: Project = {
  name: "Schedow",
  eyebrow: "Featured project",
  tagline: "AI-powered workforce scheduling.",
  description:
    "Schedow is a workforce scheduling platform that combines shift coordination, workforce planning, and an AI scheduling copilot to help managers make better staffing decisions.",
  sections: [
    {
      heading: "Why I built it",
      body:
        "While studying, I worked part-time in shift-based environments and later became a supervisor. I saw first-hand how difficult it can be to balance availability, holidays, staffing requirements, and changing shifts. Schedow started from that experience: what if scheduling could understand the context behind a shift, rather than simply displaying a timetable?",
    },
    {
      heading: "AI Scheduling Copilot",
      body:
        "Schedow's AI copilot uses the current scheduling context and backend workforce data to help managers understand their schedules, identify staffing gaps, surface unfilled shifts, and provide context-aware scheduling recommendations. The goal isn't to replace the manager's decision. It's to give the manager a smarter starting point.",
    },
    {
      heading: "Where it can be used",
      body:
        "Schedow is designed for workplaces that need to coordinate anywhere from a small team to hundreds of staff - including warehouses, healthcare environments, hospitality, cleaning operations, and other shift-based organisations.",
    },
    {
      heading: "Architecture",
      body:
        "A distributed microservice architecture with an API gateway, secure JWT authentication, scheduling services, persistent workforce data, and an AI service that coordinates scheduling context and LLM-powered recommendations.",
    },
  ],
  builtWith: [
    "Java",
    "Spring Boot",
    "Microservices",
    "React",
    "PostgreSQL",
    "Neo4j",
    "Kafka",
    "AWS",
    "Docker",
    "JWT",
    "LLMs",
  ],
  status: [
    "Working prototype",
    "AI scheduling copilot functional",
    "Active development",
    "Moving toward full launch",
  ],
  liveUrl: "#",
  sourceUrl: "#",
};
export type TimelineEntry = {
  period: string;
  title: string;
  label: string;
  location?: string;
  summary: string;
  detail?: string;
  highlight?: string;
  featured?: boolean;
};

export const timelineIntro =
  "From computer science fundamentals to backend engineering, distributed systems, cloud platforms, AI workflows, and building my own products.";

export const timelineEntries: TimelineEntry[] = [
  {
    period: "2026 - Present",
    title: "Schedow",
    label: "Current project",
    summary:
      "Building an AI-powered workforce scheduling platform that brings shift coordination, workforce planning, and an AI scheduling copilot into one place.",
    featured: true,
  },
  {
    period: "2026 - Present",
    title: "Backend & AI Intern - Elefant Legal",
    label: "Building with AI",
    location: "Singapore - Remote",
    summary:
      "Building data ingestion and backend orchestration for LLM-powered legal applications, working with structured context, tool execution, LLM APIs, and agentic workflows.",
  },
  {
    period: "July 2026",
    title: "Accenture UK & Ireland x Google Cloud Hackathon",
    label: "Turning architecture into ideas",
    location: "London, UK",
    summary:
      "Developed an enterprise architecture proposal for an Agentic AI platform, translating business requirements into a scalable cloud-native solution with AI orchestration, human-in-the-loop governance, enterprise integration, and analytics.",
  },
  {
    period: "2025 - 2026",
    title: "MSc Software Engineering - University of Hertfordshire",
    label: "Deepening the engineering foundation",
    location: "Hatfield, UK - Distinction",
    summary:
      "Deepened my software engineering expertise through advanced work in software architecture, distributed systems, AI, and scalable application development.",
  },
  {
    period: "2022 - 2025",
    title: "Software Engineer - Provility Software Solutions",
    label: "Growing into backend engineering",
    location: "Chennai, India",
    summary:
      "Built and modernized distributed backend systems across microservices, messaging, databases, cloud infrastructure, security, and AI-powered workflows.",
    highlight: "Distributed Systems - Microservices - AWS - Kafka - Neo4j - AI Workflows",
  },
  {
    period: "2021 - 2022",
    title: "Software Engineer - Grhombus Technologies",
    label: "Early engineering experience",
    location: "Chennai, India",
    summary:
      "Worked on backend applications for US-based clients, translating business requirements and technical documentation into scalable software solutions while contributing across the software development lifecycle.",
  },
  {
    period: "2017 - 2021",
    title: "B.E. Computer Science & Engineering",
    label: "Foundation",
    location: "Dhanalakshmi Srinivasan College of Engineering and Technology - Chennai, India",
    summary:
      "Started my journey in software engineering, building a foundation in computer science and software development.",
  },
];

export const additionalTimelineEntries: TimelineEntry[] = [
  {
    period: "2025 - 2026",
    title: "Hygiene Supervisor - Cynergi",
    label: "Additional experience",
    location: "Hatfield, UK",
    summary:
      "While completing my MSc, I led a team of 15 staff and coordinated daily operations, shift scheduling, inventory, compliance, and operational issues.",
    highlight:
      "This experience gave me firsthand insight into the challenges of workforce scheduling and became part of the motivation behind building Schedow.",
  },
];
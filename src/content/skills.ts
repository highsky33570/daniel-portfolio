export const craftFlow = [
  { id: "ui", label: "Interfaces", detail: "React, Next.js, thoughtful UX" },
  { id: "api", label: "APIs", detail: "Node, FastAPI, GraphQL, REST" },
  { id: "ai", label: "AI systems", detail: "LLMs, retrieval, agents, eval" },
  { id: "cloud", label: "Cloud", detail: "AWS, Docker, CI/CD, observability" },
] as const;

export const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Responsive design"],
  },
  {
    title: "Backend",
    items: ["Node.js", "FastAPI", "REST", "Async processing"],
  },
  {
    title: "AI",
    items: ["OpenAI", "LangChain", "Embeddings", "LLM APIs"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "Redis", "Vector DBs", "Caching"],
  },
  {
    title: "Ops & security",
    items: ["AWS", "Docker", "Kubernetes", "JWT / OAuth"],
  },
] as const;

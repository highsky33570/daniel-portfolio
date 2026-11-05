export type Project = {
  id: string;
  company: string;
  role: string;
  period: string;
  title: string;
  summary: string;
  problem: string;
  approach: string;
  impact: string;
  metrics: { value: string; label: string }[];
  stack: string[];
  accent: "cyan" | "slate" | "navy";
  image: string;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    id: "10xcoach",
    company: "10XCoach.ai",
    role: "Senior Full Stack AI Engineer",
    period: "Jan 2025 — Present",
    title: "Search, agents, and recommendations that hold up at scale",
    summary:
      "AI-powered search and support workflows for travel discovery — personalization, retrieval relevance, and operational tooling for millions of monthly users.",
    problem:
      "Single-method retrieval kept breaking on ambiguous travel and support queries. Latency and infra cost were climbing with every new LLM hop.",
    approach:
      "Built agentic orchestration with LangGraph, hybrid retrieval (dense + BM25 + reranking + query rewriting), and multimodal signals from property metadata, interactions, and images. Wired evaluation with LangSmith, Phoenix, and OpenTelemetry.",
    impact:
      "Cut p95 latency from 4.3s to 2.5s and lowered infrastructure costs by 18% — while making hallucination and quality issues visible in production.",
    metrics: [
      { value: "4.3s → 2.5s", label: "p95 latency" },
      { value: "−18%", label: "infra cost" },
      { value: "Millions", label: "monthly users" },
    ],
    stack: [
      "LangGraph",
      "Hybrid retrieval",
      "LangSmith",
      "OpenTelemetry",
      "GraphQL",
      "Apollo Client",
    ],
    accent: "cyan",
    image: "/cases/10xcoach.png",
    imageAlt: "10XCoach.ai product screenshot — AI coaches landing experience",
  },
  {
    id: "sky-talent",
    company: "Sky Talent Management",
    role: "Software Engineer",
    period: "Nov 2022 — Nov 2024",
    title: "An AI sales agent platform businesses can actually configure",
    summary:
      "Full-stack ownership of an e-commerce sales agent product — chatbot builder, WhatsApp messaging, analytics, and document retrieval.",
    problem:
      "Teams needed automated sales conversations without hiring a research lab. Config, messaging channels, and chat history had to live in one place.",
    approach:
      "Shipped the dashboard in React, APIs in Flask and Node, WhatsApp via official APIs, PostgreSQL schemas, JWT auth, and Chroma for document indexing. Deployed and maintained on AWS.",
    impact:
      "Gave merchants a working agent they could design themselves — with real-time messaging, reporting, and safer auth that cut unauthorized access attempts by 25%.",
    metrics: [
      { value: "−25%", label: "unauthorized access" },
      { value: "End-to-end", label: "product ownership" },
      { value: "WhatsApp", label: "live channel" },
    ],
    stack: [
      "React",
      "Node.js",
      "Flask",
      "PostgreSQL",
      "Chroma",
      "WhatsApp API",
      "AWS",
      "JWT",
    ],
    accent: "slate",
    image: "/cases/sky-talent.png",
    imageAlt: "Sky Talent Management e-commerce experience screenshot",
  },
  {
    id: "morphlabs",
    company: "Morphlabs",
    role: "Junior Full Stack Developer",
    period: "Jul 2019 — Sep 2022",
    title: "Modernizing a SaaS product people live in every day",
    summary:
      "PWA performance, a React migration off jQuery/Backbone, drag-and-drop UI, and real-time analytics dashboards.",
    problem:
      "The product was slow, hard to extend, and stuck on a legacy frontend stack. Coverage sat around 20%.",
    approach:
      "Led the move to React/Next, built a custom drag-and-drop surface, D3/Chart.js dashboards, GraphQL with Apollo, i18n, and a testing strategy that stuck.",
    impact:
      "Engagement rose 35% with the PWA. Test coverage climbed from 20% to 85%. The codebase became something a team could ship on with confidence.",
    metrics: [
      { value: "+35%", label: "engagement" },
      { value: "20% → 85%", label: "test coverage" },
      { value: "PWA", label: "offline-ready" },
    ],
    stack: [
      "React",
      "Next.js",
      "PWA",
      "D3.js",
      "GraphQL",
      "MongoDB",
      "Node.js",
      "CI/CD",
    ],
    accent: "navy",
    image: "/cases/morphlabs.png",
    imageAlt: "Morphlabs team page screenshot — brain interface product site",
  },
];

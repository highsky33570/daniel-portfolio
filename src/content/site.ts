export const site = {
  name: "Daniel Rosario",
  role: "Senior Full Stack AI Engineer",
  location: "Central Luzon, Philippines · Remote",
  email: "danrosario0604@gmail.com",
  phone: "63-991-022-6068",
  linkedin: "https://www.linkedin.com/in/daniel-del-rosario-840985356/",
  resumePath: "/Daniel_Rosario_Resume.pdf",
  heroLine:
    "I design and ship AI products end-to-end — interfaces, APIs, retrieval, and the messy parts in between.",
  highlights: [
    { value: "2.5s", label: "p95 latency after agent redesign" },
    { value: "18%", label: "infrastructure cost reduction" },
    { value: "85%", label: "test coverage on legacy migration" },
    { value: "6+ yrs", label: "shipping full-stack products" },
  ],
  about: [
    "I’ve spent the last few years building things that have to work when real people use them — not just demos that look clever in a slide deck.",
    "These days that means AI systems: search that actually finds the right thing, agents that stay reliable under load, and the evaluation loops that keep them honest.",
    "I like jumping into an existing codebase as much as starting from a blank page. Mentoring engineers on production LLM architecture is part of the job I take seriously.",
  ],
  aboutFacts: [
    { label: "Focus", value: "Full-stack AI systems" },
    { label: "Education", value: "B.S. Computer Science, Tarlac State University" },
    { label: "Based in", value: "Central Luzon, Philippines" },
    { label: "Work style", value: "Remote · product-minded · mentoring" },
  ],
  nav: [
    { label: "Work", href: "#work" },
    { label: "Craft", href: "#craft" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

"use client";

import { site } from "@/content/site";
import { HeadlineReveal, Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="section-pad mx-auto max-w-7xl py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-3">About</p>
          <HeadlineReveal>
            <h2 className="display text-4xl text-ink md:text-5xl">
              A builder who likes the whole problem
            </h2>
          </HeadlineReveal>

          <Reveal delay={0.1}>
            <div className="mt-8 overflow-hidden rounded-sm border border-line bg-surface shadow-soft">
              {site.aboutFacts.map((fact, i) => (
                <div
                  key={fact.label}
                  className={`flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 ${
                    i < site.aboutFacts.length - 1 ? "border-b border-line" : ""
                  }`}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    {fact.label}
                  </span>
                  <span className="text-sm font-medium text-ink sm:text-right">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="space-y-6 lg:col-span-7 lg:pt-12">
          {site.about.map((paragraph, i) => (
            <Reveal key={paragraph} delay={0.07 * i}>
              <p className="max-w-2xl text-lg leading-relaxed text-ink-soft md:text-[1.2rem]">
                {paragraph}
              </p>
            </Reveal>
          ))}

          <Reveal delay={0.25}>
            <div className="mt-4 flex flex-wrap gap-3 pt-2">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-sm border border-line bg-surface px-4 py-2.5 text-sm font-semibold text-ink shadow-soft transition hover:border-ink/25"
              >
                LinkedIn profile
              </a>
              <a
                href={site.resumePath}
                download
                className="rounded-sm bg-ink px-4 py-2.5 text-sm font-semibold text-surface transition hover:bg-accent"
              >
                Download resume
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

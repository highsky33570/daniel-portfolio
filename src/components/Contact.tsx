"use client";

import { site } from "@/content/site";
import { HeadlineReveal, Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-ink bg-ink text-surface"
    >
      <div
        className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-accent/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-wash/20 blur-3xl"
        aria-hidden
      />

      <div className="section-pad relative mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-3 !text-surface/50">Contact</p>
            <HeadlineReveal>
              <h2 className="display max-w-3xl text-4xl text-surface md:text-5xl">
                Looking for a senior engineer who can own the AI layer end to end?
              </h2>
            </HeadlineReveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-surface/65 md:text-lg">
                Best fit for product teams that need someone comfortable across
                the UI, the API, and production LLM systems — without a
                translator between them.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="rounded-sm border border-surface/15 bg-surface/5 p-6 backdrop-blur-sm md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-surface/45">
                Direct channels
              </p>
              <a
                href={`mailto:${site.email}`}
                className="group mt-5 flex items-center justify-between gap-3 border-b border-surface/15 pb-4 text-lg text-surface transition hover:text-wash"
              >
                <span>{site.email}</span>
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group mt-4 flex items-center justify-between gap-3 border-b border-surface/15 pb-4 text-lg text-surface transition hover:text-wash"
              >
                <span>LinkedIn</span>
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href={site.resumePath}
                download
                className="mt-6 inline-flex w-full items-center justify-center rounded-sm bg-accent px-4 py-3 text-sm font-semibold text-surface transition hover:bg-accent-soft"
              >
                Download resume (PDF)
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-surface/12 pt-6 text-xs text-surface/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>Senior Full Stack AI Engineer · Available for collaboration</span>
        </div>
      </div>
    </section>
  );
}

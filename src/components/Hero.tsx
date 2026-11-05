"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const item = (delay: number) =>
    reduce
      ? { initial: false as const, animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.75, ease, delay },
        };

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-10 md:pt-32 md:pb-14"
    >
      <div
        className="pointer-events-none absolute inset-0 grid-backdrop opacity-60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 top-16 h-80 w-80 rounded-full bg-accent/8 blur-3xl"
        aria-hidden
      />

      <div className="section-pad relative mx-auto max-w-7xl">
        <div className="grid items-stretch gap-10 lg:grid-cols-[1.2fr_0.9fr] lg:gap-12">
          <div className="flex flex-col justify-center py-4">
            <motion.div
              className="mb-7 inline-flex w-fit items-center gap-2 rounded-sm border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink-soft shadow-soft"
              {...item(0.05)}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {site.role}
            </motion.div>

            <motion.h1
              className="display text-[clamp(3.1rem,9vw,6.4rem)] text-ink"
              {...item(0.12)}
            >
              Daniel
              <br />
              Rosario
            </motion.h1>

            <motion.p
              className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft md:text-xl"
              {...item(0.24)}
            >
              {site.heroLine}
            </motion.p>

            <motion.div
              className="mt-9 flex flex-wrap items-center gap-3"
              {...item(0.34)}
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-3 text-sm font-semibold text-surface transition hover:bg-accent-soft"
              >
                View selected work
                <span
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden
                >
                  →
                </span>
              </a>
              <a
                href={site.resumePath}
                download
                className="inline-flex items-center rounded-sm border border-line bg-surface px-5 py-3 text-sm font-semibold text-ink shadow-soft transition hover:border-ink/25"
              >
                Download resume
              </a>
              <a
                href="#contact"
                className="link-underline px-2 py-3 text-sm font-semibold text-ink"
              >
                Get in touch
              </a>
            </motion.div>

            <motion.p
              className="mt-8 text-sm text-muted"
              {...item(0.42)}
            >
              {site.location}
            </motion.p>
          </div>

          <motion.aside className="relative" {...item(0.28)}>
            <div className="panel relative h-full overflow-hidden rounded-sm p-6 md:p-8">
              <div
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent-soft to-wash"
                aria-hidden
              />
              <p className="eyebrow mb-5">Currently</p>
              <h2 className="display text-[1.85rem] leading-[1.1] text-ink md:text-[2.15rem]">
                Building production AI systems at{" "}
                <span className="text-accent">10XCoach.ai</span>
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                Agentic orchestration, hybrid retrieval, and evaluation
                frameworks for search and support workflows serving millions of
                monthly users.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { k: "Role", v: "Senior Full Stack AI" },
                  { k: "Stack", v: "React · Node · LLMs" },
                  { k: "Domain", v: "Search & agents" },
                  { k: "Availability", v: "Open to collab" },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="rounded-sm border border-line bg-paper/70 px-3 py-3"
                  >
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted">
                      {row.k}
                    </p>
                    <p className="mt-1 text-sm font-medium text-ink">{row.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>

        <motion.div
          className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-line bg-line shadow-soft md:mt-16 md:grid-cols-4"
          {...item(0.48)}
        >
          {site.highlights.map((itemHighlight) => (
            <div
              key={itemHighlight.label}
              className="bg-surface px-4 py-5 md:px-6 md:py-6"
            >
              <p className="display text-2xl text-ink md:text-3xl">
                {itemHighlight.value}
              </p>
              <p className="mt-2 text-xs leading-snug text-muted md:text-sm">
                {itemHighlight.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

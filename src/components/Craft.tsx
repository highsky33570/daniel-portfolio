"use client";

import { motion, useReducedMotion } from "framer-motion";
import { craftFlow, skillGroups } from "@/content/skills";
import { HeadlineReveal, Reveal } from "@/components/Reveal";

export function Craft() {
  const reduce = useReducedMotion();

  return (
    <section id="craft" className="relative border-y border-line bg-paper-deep/60 py-20 md:py-28">
      <div className="section-pad mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-3">How I build</p>
            <HeadlineReveal>
              <h2 className="display text-4xl text-ink md:text-5xl">
                Interface to API to model to cloud
              </h2>
            </HeadlineReveal>
          </div>
          <Reveal delay={0.08} className="lg:col-span-5">
            <p className="text-base leading-relaxed text-ink-soft md:text-lg">
              Most of my work sits across this path. I care about the seams —
              where UI meets API, where retrieval meets reasoning, where
              production metrics expose what the demo hid.
            </p>
          </Reveal>
        </div>

        <div className="relative mb-14 grid gap-4 md:mb-16 md:grid-cols-4">
          {!reduce && (
            <motion.div
              className="pointer-events-none absolute left-[10%] right-[10%] top-10 hidden h-px origin-left bg-line md:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              aria-hidden
            />
          )}

          {craftFlow.map((step, i) => (
            <Reveal key={step.id} delay={0.07 * i}>
              <div className="panel relative h-full rounded-sm p-5 md:p-6">
                <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-sm bg-ink text-xs font-semibold text-surface">
                  0{i + 1}
                </div>
                <h3 className="display text-2xl text-ink">{step.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="panel overflow-hidden rounded-sm">
            <div className="border-b border-line px-5 py-4 md:px-6">
              <p className="eyebrow">Technical toolkit</p>
            </div>
            <div className="grid divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="border-line p-5 sm:border-b sm:odd:border-r lg:border-r lg:[&:nth-child(3n)]:border-r-0 md:p-6"
                >
                  <h3 className="text-sm font-semibold text-ink">{group.title}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-sm border border-line bg-paper px-2.5 py-1 text-xs font-medium text-ink-soft"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useRef, type MouseEvent } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { projects, type Project } from "@/content/projects";
import { HeadlineReveal, Reveal } from "@/components/Reveal";

const accentStyles = {
  cyan: {
    chip: "bg-accent/10 text-accent",
    bar: "from-accent to-accent-soft",
  },
  slate: {
    chip: "bg-ink/8 text-ink-soft",
    bar: "from-ink-soft to-muted",
  },
  navy: {
    chip: "bg-[#12304f]/10 text-[#12304f]",
    bar: "from-[#12304f] to-accent",
  },
} as const;

function ProjectBlock({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 24 });
  const springY = useSpring(y, { stiffness: 180, damping: 24 });
  const transform = useMotionTemplate`perspective(1000px) rotateX(${springY}deg) rotateY(${springX}deg)`;
  const styles = accentStyles[project.accent];
  const odd = index % 2 === 1;

  const onMove = (e: MouseEvent<HTMLElement>) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set((px - 0.5) * 4);
    y.set((0.5 - py) * 3);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Reveal delay={index * 0.04}>
      <article
        id={project.id}
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={`grid items-stretch gap-8 border-t border-line py-12 md:py-16 lg:grid-cols-12 lg:gap-12 ${
          odd ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <motion.div
          style={reduce ? undefined : { transform }}
          className="lg:col-span-5"
        >
          <div className="panel flex h-full flex-col overflow-hidden rounded-sm">
            <div
              className={`h-1 bg-gradient-to-r ${styles.bar}`}
              aria-hidden
            />

            <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="flex gap-1" aria-hidden>
                  <span className="h-2 w-2 rounded-full bg-line" />
                  <span className="h-2 w-2 rounded-full bg-line" />
                  <span className="h-2 w-2 rounded-full bg-line" />
                </span>
                <p className="text-xs font-semibold text-ink-soft">
                  {project.company}
                </p>
              </div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted">
                Case 0{index + 1}
              </p>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden bg-paper-deep">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.03]"
                priority={index === 0}
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink/25 to-transparent"
                aria-hidden
              />
            </div>

            <div className="grid grid-cols-3 gap-px border-t border-line bg-line">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="bg-surface px-2.5 py-3 md:px-3 md:py-3.5"
                >
                  <p className="text-sm font-semibold tracking-tight text-ink md:text-[0.95rem]">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-[0.65rem] leading-snug text-muted">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 border-t border-line bg-paper/80 px-4 py-3">
              {project.stack.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className={`rounded-sm px-2 py-1 text-[0.68rem] font-medium tracking-wide ${styles.chip}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col justify-center lg:col-span-7">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
            <span className="font-medium text-ink-soft">{project.role}</span>
            <span aria-hidden className="text-line">
              |
            </span>
            <span>{project.period}</span>
          </div>
          <h3 className="display mt-3 max-w-2xl text-[1.85rem] leading-[1.08] text-ink md:text-[2.35rem]">
            {project.title}
          </h3>
          <p className="mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-ink-soft md:text-lg">
            {project.summary}
          </p>

          <div className="mt-8 overflow-hidden rounded-sm border border-line bg-surface shadow-soft">
            <div className="grid md:grid-cols-3">
              {(
                [
                  ["Problem", project.problem],
                  ["Approach", project.approach],
                  ["Impact", project.impact],
                ] as const
              ).map(([label, body], i) => (
                <div
                  key={label}
                  className={`border-line p-5 ${
                    i < 2 ? "md:border-r" : ""
                  } border-b last:border-b-0 md:border-b-0`}
                >
                  <p className="eyebrow mb-3">{label}</p>
                  <p className="text-sm leading-relaxed text-ink-soft">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Work() {
  return (
    <section id="work" className="section-pad relative mx-auto max-w-7xl py-8 md:py-12">
      <div className="mb-2 flex flex-col gap-5 border-b border-line pb-10 md:mb-0 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">Selected work</p>
          <HeadlineReveal>
            <h2 className="display text-4xl text-ink md:text-5xl">
              Case studies with measurable outcomes
            </h2>
          </HeadlineReveal>
        </div>
        <Reveal delay={0.08}>
          <p className="max-w-sm text-sm leading-relaxed text-muted md:pb-1 md:text-right">
            Three roles. Real production constraints. Clear problem → approach →
            impact for each engagement.
          </p>
        </Reveal>
      </div>

      <div>
        {projects.map((project, index) => (
          <ProjectBlock key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

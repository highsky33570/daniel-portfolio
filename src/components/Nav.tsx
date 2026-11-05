"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/content/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line/80 bg-surface/90 shadow-soft backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="section-pad mx-auto flex max-w-7xl items-center justify-between py-3.5 md:py-4">
        <a
          href="#top"
          className="flex items-center gap-3 text-ink transition-colors hover:text-accent"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-ink text-[0.7rem] font-semibold tracking-wide text-surface">
            DR
          </span>
          <span className="text-sm font-semibold tracking-tight">
            Daniel Rosario
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.8125rem] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-sm bg-ink px-4 py-2 text-xs font-semibold tracking-wide text-surface transition hover:bg-accent sm:inline-flex"
          >
            Contact
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-line bg-surface text-ink md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-4 flex-col gap-1">
              <span
                className={`h-px w-full bg-ink transition ${open ? "translate-y-[5px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-full bg-ink transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-px w-full bg-ink transition ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-surface px-5 py-6 md:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex w-fit rounded-sm bg-ink px-4 py-2.5 text-sm font-semibold text-surface"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </motion.header>
  );
}

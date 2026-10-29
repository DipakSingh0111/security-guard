"use client";

import Image from "next/image";
import Link from "next/link";
import {
  LuShieldCheck,
  LuEye,
  LuBuilding2,
  LuArrowRight,
} from "react-icons/lu";
import ScrollReveal from "../shared/ScrollReveal";

export default function HomeWelcomeSection() {
  const pillars = [
    {
      title: "Elite Guarding & VIP Protection",
      description:
        "Specialized Personal Security Officers (PSO), vehicle security, and unarmed guarding services tailored for high-stakes environments.",
      icon: LuShieldCheck,
    },
    {
      title: "Strategic Intelligence",
      description:
        "Professional security analysis and auditing services to identify vulnerabilities and ensure business continuity.",
      icon: LuEye,
    },
    {
      title: "Event & Infrastructure Management",
      description:
        "Comprehensive event security and facility management solutions designed for seamless, disruption-free operations.",
      icon: LuBuilding2,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-mist py-14 md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass/50 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro strip */}
        <ScrollReveal direction="up">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brass/30 bg-brass/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-brass">
              <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
              Command Briefing
            </span>
            <h2 className="font-display mt-4 max-w-4xl text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Welcome to Shield Security Agency
              <span className="mt-2 block text-xl font-semibold text-signal sm:text-2xl">
                Premier Security & Protection Services
              </span>
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-brass/70" />
          </div>
        </ScrollReveal>

        {/* Founder + overview — asymmetric editorial with equal height on large screens */}
        <div className="mt-14 grid items-stretch gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
          <ScrollReveal direction="right" mobileDirection="up" className="h-full">
            <div className="relative mx-auto flex h-full w-full max-w-md flex-col lg:mx-0 lg:max-w-none">
              {/* Decorative background glow & frame */}
              <div
                aria-hidden
                className="absolute -inset-2.5 rounded-3xl border border-brass/30 bg-brass/5"
              />
              <div className="relative flex min-h-[460px] flex-1 overflow-hidden rounded-2xl bg-ink shadow-2xl lg:min-h-full">
                <Image
                  src="/security/guard4.jpg"
                  alt="Director of Security Operations - Shield Security"
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                />

                {/* Subtle top badge */}
                <div className="absolute left-5 top-5 z-10 rounded-full border border-white/20 bg-black/60 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brass backdrop-blur-md">
                  Command Center
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/85 to-transparent p-6 pt-24 sm:p-8">
                  <span className="inline-block rounded-md bg-brass/25 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-brass">
                    Director of Operations
                  </span>
                  <p className="font-display mt-2 text-2xl font-bold text-white sm:text-3xl">
                    Col. R. K. Sharma (Retd.)
                  </p>
                  <p className="mt-1 text-xs text-white/80 sm:text-sm">
                    28+ Years of Military & Security Leadership
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" mobileDirection="up" className="h-full">
            <div className="relative flex h-full flex-col justify-between rounded-2xl border border-line/60 bg-white p-8 shadow-xl sm:p-10">
              <div>
                {/* Badge & Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line/60 pb-5">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-brass">
                      Operational Excellence
                    </span>
                    <h3 className="font-display mt-1 text-2xl font-extrabold text-ink sm:text-3xl">
                      Precision Protection.
                      <span className="text-signal"> National Standards.</span>
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-brass/40 bg-brass/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brass">
                    <span className="h-2 w-2 rounded-full bg-signal animate-pulse" />
                    ISO Certified
                  </span>
                </div>

                {/* Subtitle */}
                <p className="mt-4 text-sm font-medium text-muted sm:text-base">
                  Leading Security Management & High-Risk Asset Safety Partner across the nation.
                </p>

                {/* Modern Feature Cards */}
                <div className="mt-6 space-y-3.5">
                  <div className="group flex items-start gap-3.5 rounded-xl border border-line/70 bg-mist/50 p-4 transition-all duration-300 hover:border-brass/60 hover:bg-white hover:shadow-md">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink text-brass shadow-sm transition-colors group-hover:bg-signal group-hover:text-white">
                      <LuShieldCheck size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-ink sm:text-[15px]">
                        Integrated Defense & Surveillance
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">
                        Commercial hubs and critical infrastructure secured with defense-grade methodologies and 24/7 central monitoring.
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-3.5 rounded-xl border border-line/70 bg-mist/50 p-4 transition-all duration-300 hover:border-brass/60 hover:bg-white hover:shadow-md">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink text-brass shadow-sm transition-colors group-hover:bg-signal group-hover:text-white">
                      <LuEye size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-ink sm:text-[15px]">
                        Rigorously Screened & Vetted Personnel
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">
                        Our security guards, armed officers, and marshals undergo comprehensive background checks and strict field drills.
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-3.5 rounded-xl border border-line/70 bg-mist/50 p-4 transition-all duration-300 hover:border-brass/60 hover:bg-white hover:shadow-md">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink text-brass shadow-sm transition-colors group-hover:bg-signal group-hover:text-white">
                      <LuBuilding2 size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-ink sm:text-[15px]">
                        VIP Protocol & Corporate Transit
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">
                        Specialized Personal Security Officers (PSO) and armed transit escorts for business leaders and high-profile visits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Pillars — 3 column, no stacked cards */}
        <div className="mt-20 md:mt-24">
          <ScrollReveal direction="up" className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-brass">
              Core Principles
            </span>
            <h3 className="font-display mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
              Strategic Security Pillars
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted sm:text-base">
              Engineered frameworks providing comprehensive risk mitigation and operational resilience.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal
                  key={item.title}
                  direction="up"
                  index={i}
                  staggerChildren={0.1}
                  className="group relative flex flex-col justify-between rounded-xl border border-line/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brass/50 hover:shadow-xl sm:p-8"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-ink text-brass shadow-md transition-colors group-hover:bg-signal group-hover:text-white">
                        <Icon size={24} />
                      </span>
                      <span className="font-display text-3xl font-extrabold text-mist-deep/90 transition-colors group-hover:text-brass/40">
                        0{i + 1}
                      </span>
                    </div>
                    <h4 className="font-display mt-6 text-xl font-bold text-ink">
                      {item.title}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>

      {/* Skills Academy — full-bleed band */}
      <ScrollReveal direction="up">
        <div className="relative mt-20 overflow-hidden bg-field-mesh md:mt-24">
          <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between md:py-16 lg:px-8">
            <div className="max-w-2xl">
              <span className="inline-block rounded bg-brass/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-brass">
                Human Capital Excellence
              </span>
              <h3 className="font-display mt-3 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                Security Training & Skill Development
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                Through continuous training programs we groom a disciplined, vetted workforce
                aligned with modern industrial security protocols across multiple regional hubs,
                ensuring uncompromised protection and reliable coverage.
              </p>
            </div>
            <Link
              href="/skills"
              className="btn-fill-tl inline-flex shrink-0 items-center gap-3 rounded-md bg-signal px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg [--btn-fill:#c4a35a] md:self-center"
            >
              Explore Training Center
              <LuArrowRight size={18} />
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

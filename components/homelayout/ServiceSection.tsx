"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LuArrowLeft,
  LuArrowRight,
  LuBuilding2,
  LuCctv,
  LuDoorClosed,
  LuFootprints,
  LuShield,
  LuShieldCheck,
  LuUserCheck,
  LuUsers,
} from "react-icons/lu";
import type { IconType } from "react-icons";
import {
  getHomeServices,
  getServices,
  getServicesPageSize,
  site,
} from "@/data";
import ScrollReveal from "../shared/ScrollReveal";

/* Maps the icon strings used in siteData.json to react-icons */
const iconMap: Record<string, IconType> = {
  "user-shield": LuUserCheck,
  cctv: LuCctv,
  "door-closed": LuDoorClosed,
  users: LuUsers,
  footprints: LuFootprints,
  "shield-check": LuShieldCheck,
  building: LuBuilding2,
};

function Icon({
  name,
  size = 10,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Cmp = iconMap[name] ?? LuShieldCheck;
  return <Cmp size={size} className={className} />;
}

/* Small "—— LABEL ——" eyebrow used above every section heading */
function SectionLabel({
  text,
  tone = "navy",
  center = false,
}: {
  text: string;
  tone?: "navy" | "yellow" | "white";
  center?: boolean;
}) {
  const color =
    tone === "yellow"
      ? "text-[#fdb913]"
      : tone === "white"
        ? "text-white"
        : "text-[#06194a]";
  return (
    <div
      className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}
    >
      <span className="h-0.5 w-8 bg-[#fdb913] sm:w-10" />
      <span
        className={`text-xs font-bold uppercase sm:text-[13px] lg:text-[17px] ${color}`}
      >
        {text}
      </span>
    </div>
  );
}

/* Dotted decoration used on light sections */
function DotPattern({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute opacity-60 [background-image:radial-gradient(#9db4e8_1.6px,transparent_1.6px)] [background-size:14px_14px] ${className}`}
    />
  );
}

export default function SecurityServices({
  showAll = false,
}: {
  showAll?: boolean;
}) {
  const s = site.services;
  const allServices = showAll ? getServices() : getHomeServices();
  const pageSize = getServicesPageSize();
  const [page, setPage] = useState(0);

  const totalPages = showAll ? Math.ceil(allServices.length / pageSize) : 1;

  const services = useMemo(() => {
    if (!showAll) return allServices;
    const start = page * pageSize;
    return allServices.slice(start, start + pageSize);
  }, [allServices, page, pageSize, showAll]);

  const goTo = (next: number) => {
    setPage(Math.min(Math.max(next, 0), totalPages - 1));
    document
      .getElementById("services-grid")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <ScrollReveal direction="none" duration={0.6}>
      <section className="relative overflow-hidden bg-white py-8 md:py-12">
        <DotPattern className="left-4 top-10 hidden h-28 w-28 sm:block" />
        <DotPattern className="right-6 top-28 hidden h-24 w-32 lg:block" />
        <LuShield
          aria-hidden
          strokeWidth={1}
          className="pointer-events-none absolute -right-16 top-24 hidden text-[#e3ebfb] lg:block"
          size={300}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal
            as="div"
            direction="up"
            className="mx-auto max-w-4xl text-center"
          >
            <SectionLabel text={s.badge} center />
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#06194a] sm:text-4xl lg:text-[49px]">
              {s.title.normal}{" "}
              <span className="text-[#fdb913]">{s.title.highlighted}</span>
              <span className="block">{s.title.postTitle}</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {s.desc}
            </p>
          </ScrollReveal>

          <div
            id="services-grid"
            className="mt-12 grid scroll-mt-28 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((item, i) => {
              const yellow = i % 2 === 1;
              return (
                <ScrollReveal
                  as="article"
                  key={item.id}
                  direction="none"
                  index={i}
                  staggerChildren={0.1}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(10,47,143,0.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(10,47,143,0.2)]"
                >
                  <div className="relative h-44 shrink-0 overflow-hidden sm:h-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="relative flex flex-1 flex-col px-5 pb-6 text-center">
                    <span
                      className={`relative z-10 mx-auto -mt-8 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white shadow-lg lg:h-24 lg:w-24 ${
                        yellow
                          ? "bg-[#fdb913] text-[#06194a]"
                          : "bg-[#06194a] text-white"
                      }`}
                    >
                      <Icon name={item.icon} size={40} />
                    </span>
                    <h3 className="mt-3 text-lg font-bold text-[#06194a] lg:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-500 lg:text-base">
                      {item.description}
                    </p>
                    <div className="mt-auto pt-5">
                      <Link
                        href={item.button.href}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#0a3a9c] transition-colors hover:text-[#06194a] md:text-base"
                      >
                        {item.button.label}
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fdb913] text-[#06194a] transition-transform duration-300 group-hover:translate-x-1">
                          <LuArrowRight size={20} />
                        </span>
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {showAll && totalPages > 1 ? (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => goTo(page - 1)}
                disabled={page === 0}
                aria-label="Previous page"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#06194a]/15 bg-white text-[#06194a] transition-colors hover:bg-[#06194a] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                <LuArrowLeft size={18} />
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to page ${i + 1}`}
                  aria-current={page === i ? "page" : undefined}
                  className={`inline-flex h-11 min-w-11 items-center justify-center rounded-full px-3 text-sm font-bold transition-colors ${
                    page === i
                      ? "bg-[#fdb913] text-[#06194a]"
                      : "border border-[#06194a]/15 bg-white text-[#06194a] hover:bg-[#06194a] hover:text-white"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                type="button"
                onClick={() => goTo(page + 1)}
                disabled={page >= totalPages - 1}
                aria-label="Next page"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#06194a]/15 bg-white text-[#06194a] transition-colors hover:bg-[#06194a] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                <LuArrowRight size={18} />
              </button>
            </div>
          ) : null}
        </div>
      </section>
    </ScrollReveal>
  );
}

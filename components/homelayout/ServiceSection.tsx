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
      <section className="relative overflow-hidden bg-[#f4f7f4] py-16 text-ink md:py-24">
        {/* Subtle geometric grid background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,#e2e8e1_1px,transparent_1px),linear-gradient(to_bottom,#e2e8e1_1px,transparent_1px)] [background-size:40px_40px]"
        />
        {/* Soft radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-brass/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal
            as="div"
            direction="up"
            className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-brass/40 bg-brass/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-brass">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                {s.badge}
              </span>
              <h2 className="font-display mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.65rem]">
                {s.title.normal}{" "}
                <span className="text-signal">{s.title.highlighted}</span>
                <span className="mt-1 block text-slate-700">{s.title.postTitle}</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-600 sm:text-base lg:pb-1">
              {s.desc}
            </p>
          </ScrollReveal>

          <div
            id="services-grid"
            className="mt-14 grid scroll-mt-28 gap-7 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((item, i) => (
              <ScrollReveal
                as="article"
                key={item.id}
                direction="up"
                index={i}
                staggerChildren={0.08}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-brass/60 hover:shadow-2xl"
              >
                {/* Top Image Banner */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Floating Service Icon */}
                  <div className="absolute bottom-3 left-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-ink text-brass shadow-lg transition-all duration-300 group-hover:bg-signal group-hover:text-white group-hover:scale-110">
                    <Icon name={item.icon} size={22} />
                  </div>

                  {/* Top Index Badge */}
                  <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/60 px-3 py-0.5 text-[11px] font-black tracking-wider text-white backdrop-blur-sm">
                    0{i + 1}
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight text-ink transition-colors group-hover:text-signal">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={item.button.href}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink transition-all duration-300 hover:text-signal"
                    >
                      <span>Explore Service</span>
                      <LuArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1.5 text-signal"
                      />
                    </Link>
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-signal group-hover:scale-125 transition-all" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {showAll && totalPages > 1 ? (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => goTo(page - 1)}
                disabled={page === 0}
                aria-label="Previous page"
                className="inline-flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-brass hover:bg-brass hover:text-ink disabled:cursor-not-allowed disabled:opacity-40"
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
                  className={`inline-flex h-11 min-w-11 items-center justify-center px-3 text-sm font-bold transition-colors ${
                    page === i
                      ? "bg-brass text-ink"
                      : "border border-white/20 text-white hover:border-brass hover:text-brass"
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
                className="inline-flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-brass hover:bg-brass hover:text-ink disabled:cursor-not-allowed disabled:opacity-40"
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

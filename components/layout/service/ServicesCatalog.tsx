"use client";

import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function ServicesCatalog() {
  const allServices =
    siteData.SecurityIndustries.sections.Services.variants.SecurityServices1
      .services;

  // The exact 8 services shown in the screenshot in paired left/right order:
  // Row 1: Armed Guard Services | Vehicle Security Services
  // Row 2: Unarmed Guard Services | Events Security Services
  // Row 3: Personal Security Officer Services | Security Analysis Services
  // Row 4: Armed Marshal Services | Security Audit Services
  const orderedSlugs = [
    "armed-guard",
    "vehicle-security",
    "unarmed-guard",
    "events-security",
    "personal-security-officer",
    "security-analysis",
    "armed-marshal",
    "security-audit",
  ];

  const services = orderedSlugs
    .map((slug) => allServices.find((s) => s.slug === slug))
    .filter(Boolean) as typeof allServices;

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-10">
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl md:text-4xl">
            Our Services
          </h2>
          <div className="mt-2 h-0.5 w-16 bg-signal" />
        </div>

        {/* 2-Column Grid as per user screenshot */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2">
          {services.map((item, index) => {
            const href = item.button?.href || `/services/${item.slug}`;

            return (
              <ScrollReveal
                as="div"
                key={item.id}
                direction="up"
                index={index}
                staggerChildren={0.06}
                className="group"
              >
                {/* Title in Uppercase with dark/red font */}
                <h3 className="mb-3 font-display text-sm font-bold tracking-wide uppercase text-slate-800 transition-colors group-hover:text-signal sm:text-base">
                  <Link href={href} className="hover:underline">
                    {item.title}
                  </Link>
                </h3>

                {/* Content: Left Photo with red frame + Right Paragraph */}
                <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[170px_1fr] gap-4 sm:gap-5 items-start">
                  {/* Photo with red border */}
                  <Link
                    href={href}
                    className="relative block aspect-[4/3] w-full overflow-hidden border-2 border-signal shadow-sm bg-slate-100 transition-transform duration-300 group-hover:shadow-md"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 140px, 170px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>

                  {/* Description text */}
                  <div className="text-xs leading-relaxed text-slate-600 sm:text-[13px] text-justify">
                    <p className="line-clamp-6 sm:line-clamp-none">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { site } from "@/data";
import ScrollReveal from "../shared/ScrollReveal";

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
    <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
      <span
        className={`text-[clamp(0.7rem,0.9vw+0.45rem,1.05rem)] font-bold uppercase tracking-[0.18em] ${color}`}
      >
        {text}
      </span>
      {center && <span className="h-0.5 w-8 bg-[#fdb913] sm:w-10" />}
    </div>
  );
}

export default function SecurityBanner() {
  const { slides, autoplay, interval } = site.banner;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const total = slides.length;

  const go = (i: number) => setActive((i + total) % total);

  useEffect(() => {
    if (!autoplay || paused || total < 2) return;

    const t = setInterval(() => {
      setActive((a) => (a + 1) % total);
    }, interval);

    return () => clearInterval(t);
  }, [autoplay, paused, interval, total]);

  return (
    <ScrollReveal direction="up">
      <section
        className="relative isolate w-full overflow-hidden bg-[#06194a] text-white"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;

          const dx = e.changedTouches[0].clientX - touchX.current;

          if (Math.abs(dx) > 50) {
            go(active + (dx < 0 ? 1 : -1));
          }

          touchX.current = null;
        }}
      >
        <div className="w-full overflow-hidden">
          <div
            className="flex w-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div
                key={slide.id}
                className="relative flex h-[100svh] min-h-[100svh] w-full min-w-0 shrink-0 items-center overflow-hidden"
              >
                <Image
                  src={slide.image.src}
                  alt={slide.image.alt}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover object-[center_38%] sm:object-[center_35%] lg:object-[center_32%]"
                />

                {/* Soft scrims for text + navbar contrast across zoom levels */}
                <div className="pointer-events-none absolute inset-0 w-full bg-gradient-to-r from-black/80 via-black/40 to-transparent sm:w-2/3 lg:w-3/5" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/25" />

                <div
                  className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center
                    px-4
                    sm:pl-20 sm:pr-8
                    lg:pl-24 lg:pr-10
                    xl:pl-12 xl:pr-12
                    pt-[clamp(6.5rem,14svh,10rem)]
                    pb-[clamp(3.5rem,8svh,6rem)]"
                >
                  <div className="w-full min-w-0 max-w-xl lg:max-w-2xl">
                    <SectionLabel text={slide.badge} tone="yellow" />

                    <h1
                      className="mt-[clamp(0.5rem,1.2svh,0.85rem)] font-extrabold
                        text-[clamp(1.65rem,2.2vw+0.85rem,3.5rem)]
                        leading-[1.12]
                        drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]"
                    >
                      <span className="block">{slide.title.normal}</span>
                      <span className="block text-[#fdb913]">
                        {slide.title.highlighted}
                      </span>
                      <span className="block">{slide.title.postTitle}</span>
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(active - 1)}
              aria-label="Previous slide"
              className="absolute left-2 top-[58%] z-20 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-[#06194a]/75 text-white backdrop-blur transition-colors hover:bg-[#fdb913] hover:text-[#06194a] sm:flex lg:left-4 lg:h-11 lg:w-11 xl:top-1/2"
            >
              <LuChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={() => go(active + 1)}
              aria-label="Next slide"
              className="absolute right-2 top-[58%] z-20 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-[#06194a]/75 text-white backdrop-blur transition-colors hover:bg-[#fdb913] hover:text-[#06194a] sm:flex lg:right-4 lg:h-11 lg:w-11 xl:top-1/2"
            >
              <LuChevronRight size={22} />
            </button>

            <div className="absolute bottom-[clamp(1rem,3svh,1.75rem)] left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-6 bg-[#fdb913]"
                      : "w-2 bg-white/80 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </section>
    </ScrollReveal>
  );
}

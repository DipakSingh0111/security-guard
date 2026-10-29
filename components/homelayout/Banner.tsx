"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { site } from "@/data";
import ScrollReveal from "../shared/ScrollReveal";

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
    <ScrollReveal direction="none" duration={0.6}>
      <section
        className="relative isolate h-screen min-h-[600px] w-full overflow-hidden bg-ink text-white"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) go(active + (dx < 0 ? 1 : -1));
          touchX.current = null;
        }}
      >
        {/* Slides Track */}
        <div className="relative h-full w-full overflow-hidden">
          {slides.map((slide, i) => {
            const isCurrent = i === active;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
                  isCurrent ? "z-10 opacity-100" : "z-0 opacity-0 pointer-events-none"
                }`}
              >
                {/* Original crisp background image without zoom degradation */}
                <Image
                  src={slide.image.src}
                  alt={slide.image.alt}
                  fill
                  priority={true}
                  quality={100}
                  unoptimized
                  sizes="100vw"
                  className="object-cover object-center"
                />

                {/* Minimal left shadow solely behind text, zero blur across the screen */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 via-40% to-transparent pointer-events-none" />

                {/* Aesthetic Content - Left-aligned Title */}
                <div className="relative z-10 flex h-full w-full items-center px-6 pt-20 sm:px-12 md:pt-24 lg:px-20">
                  <div className="mx-auto w-full max-w-7xl">
                    <div className="max-w-2xl text-left">
                      {/* Simple & Elegant Title */}
                      <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] sm:text-6xl md:text-7xl">
                        <span>{slide.title.normal}</span>{" "}
                        <span className="text-brass">{slide.title.highlighted}</span>
                        {slide.title.postTitle && (
                          <span className="mt-4 block text-lg font-normal tracking-wide text-white/90 drop-shadow-md sm:text-2xl md:text-3xl">
                            {slide.title.postTitle}
                          </span>
                        )}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Left / Right Arrow Buttons */}
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(active - 1)}
              aria-label="Previous slide"
              className="absolute left-4 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-black/60 text-white transition-all hover:scale-110 hover:border-brass hover:bg-brass hover:text-ink sm:left-8"
            >
              <LuChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={() => go(active + 1)}
              aria-label="Next slide"
              className="absolute right-4 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-black/60 text-white transition-all hover:scale-110 hover:border-brass hover:bg-brass hover:text-ink sm:right-8"
            >
              <LuChevronRight size={22} />
            </button>

            {/* Bottom Slider Dots */}
            <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/20 bg-black/60 px-4 py-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`cursor-pointer rounded-full transition-all duration-300 ${
                    i === active
                      ? "h-2.5 w-8 bg-brass"
                      : "h-2.5 w-2.5 bg-white/40 hover:bg-white/70"
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

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  LuChevronLeft,
  LuChevronRight,
  LuX,
} from "react-icons/lu";
import {
  getGalleryImages,
  getGalleryVisibleCount,
  site,
  type SecurityGalleryImage,
} from "@/data";
import ScrollReveal from "../../shared/ScrollReveal";

/* Wraps around the collection so the dialog can slide forever */
function slideImage(
  images: SecurityGalleryImage[],
  currentId: number,
  delta: number,
): SecurityGalleryImage | null {
  const index = images.findIndex((item) => item.id === currentId);
  if (index < 0) return null;
  return images[(index + delta + images.length) % images.length];
}

function GalleryTile({
  image,
  onOpen,
  featured = false,
}: {
  image: SecurityGalleryImage;
  onOpen: (image: SecurityGalleryImage) => void;
  featured?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(image)}
      aria-label={`View ${image.title}`}
      className={`group relative w-full cursor-pointer overflow-hidden bg-ink shadow-lg transition-shadow duration-300 hover:shadow-2xl ${
        featured ? "aspect-[4/3] h-full min-h-[280px] lg:aspect-auto" : "aspect-[4/3]"
      }`}
    >
      <Image
        src={image.image}
        alt={image.title}
        fill
        sizes="(max-width: 639px) 78vw, (max-width: 1023px) 46vw, 23vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <span className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/45" />
      <span className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-brass transition-transform duration-300 group-hover:scale-y-100" />

      <span className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-ink via-ink/95 to-transparent px-4 pb-3 pt-8 text-left text-sm font-bold text-white transition-transform duration-300 group-hover:translate-y-0">
        {image.title}
      </span>
    </button>
  );
}

export default function Gallery() {
  const d = site.gallery;
  const images = getGalleryImages();
  const [active, setActive] = useState<SecurityGalleryImage | null>(null);

  const visible = images;

  /* Slide to the previous / next image inside the dialog */
  const step = (delta: number) => {
    setActive((current) =>
      current ? slideImage(images, current.id, delta) : current,
    );
  };

  useEffect(() => {
    if (!active) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      else if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        const delta = event.key === "ArrowLeft" ? -1 : 1;
        setActive((current) =>
          current ? slideImage(images, current.id, delta) : current,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [active, images]);
  return (
    <ScrollReveal direction="none" duration={0.6}>
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal
          as="div"
          direction="up"
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brass/30 bg-brass/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-brass">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              {d.heading.badge}
            </span>
            <h2 className="font-display mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.65rem]">
              {d.heading.title.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="text-signal">
                {d.heading.title.split(" ").slice(-2).join(" ")}
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted sm:text-base">
            Glimpses into our active deployment sites, vigilance routines, and specialized protection units across India.
          </p>
        </ScrollReveal>

        {/* Mobile: horizontal scroll */}
        <div className="mt-12 sm:hidden">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {visible.map((image, i) => (
              <div
                key={image.id}
                className="w-[82%] shrink-0 snap-start last:mr-4"
              >
                <ScrollReveal as="div" index={i} staggerChildren={0.08} className="w-full">
                  <GalleryTile image={image} onOpen={setActive} />
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: featured + grid */}
        <div className="mt-12 hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {visible.map((image, i) => (
            <ScrollReveal
              as="div"
              key={image.id}
              index={i}
              staggerChildren={0.08}
              className={`w-full ${
                i === 0
                  ? "sm:col-span-2 sm:row-span-2"
                  : ""
              }`}
            >
              <GalleryTile
                image={image}
                onOpen={setActive}
                featured={i === 0}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox dialog */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 sm:p-8"
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setActive(null)}
            className="absolute cursor-pointer right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-ink/70 text-white backdrop-blur transition-colors duration-300 hover:bg-brass hover:text-ink"
          >
            <LuX size={24} />
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
            className="absolute left-2 cursor-pointer top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-ink/70 text-white backdrop-blur transition-colors duration-300 hover:bg-brass hover:text-ink sm:left-6 sm:h-12 sm:w-12"
          >
            <LuChevronLeft size={26} />
          </button>

          <button
            type="button"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
            className="absolute right-2 cursor-pointer top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-ink/70 text-white backdrop-blur transition-colors duration-300 hover:bg-brass hover:text-ink sm:right-6 sm:h-12 sm:w-12"
          >
            <LuChevronRight size={26} />
          </button>

          <figure
            className="w-full max-w-3xl px-12 sm:max-w-4xl sm:px-20"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
              <Image
                src={active.image}
                alt={active.title}
                fill
                sizes="(max-width: 1024px) 92vw, 896px"
                className="object-contain drop-shadow-2xl"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm font-bold uppercase tracking-[0.15em] text-white sm:text-base">
              {active.title}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
    </ScrollReveal>
  );
}

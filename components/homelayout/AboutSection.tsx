import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { site } from "@/data";
import ScrollReveal from "../shared/ScrollReveal";

export default function SecurityAbout({
  hideButton = false,
}: {
  hideButton?: boolean;
}) {
  const a = site.about;

  return (
    <ScrollReveal direction="none" duration={0.6}>
      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        {/* Subtle decorative background circles */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-10 hidden h-80 w-80 rounded-full border border-line/60 lg:block"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 top-28 hidden h-56 w-56 rounded-full border border-brass/20 lg:block"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <ScrollReveal
            as="div"
            direction="right"
            mobileDirection="up"
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-brass/30 bg-brass/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-brass">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              {a.badge}
            </div>

            <h2 className="font-display mt-4 text-3xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-[2.65rem]">
              {a.title.normal}
              <span className="mt-1 block text-signal">{a.title.highlighted}</span>
            </h2>

            <div className="mt-6 space-y-4 border-t border-line/80 pt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              {a.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {!hideButton && (
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={a.button.href}
                  className="btn-fill-tl inline-flex items-center gap-3 rounded-md bg-ink px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-transform hover:scale-[1.02] [--btn-fill:#b42318]"
                >
                  {a.button.label}
                  <LuArrowRight size={18} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-700 transition-colors hover:border-signal hover:text-signal"
                >
                  View Services
                </Link>
              </div>
            )}
          </ScrollReveal>

          <ScrollReveal
            as="div"
            direction="left"
            mobileDirection="up"
            className="relative order-1 lg:order-2"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* L-frame accent */}
              <div
                aria-hidden
                className="absolute -left-3 -top-3 h-28 w-28 rounded-tl-xl border-l-[5px] border-t-[5px] border-signal sm:-left-5 sm:-top-5"
              />
              <div
                aria-hidden
                className="absolute -bottom-3 -right-3 h-28 w-28 rounded-br-xl border-b-[5px] border-r-[5px] border-brass sm:-bottom-5 sm:-right-5"
              />

              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink shadow-2xl sm:aspect-[5/6]">
                <Image
                  src={a.image.src}
                  alt={a.image.alt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </ScrollReveal>
  );
}

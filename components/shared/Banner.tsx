import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export interface BannerPageItem {
  label: string;
  href?: string;
}

export interface BannerProps {
  title: string;
  image: string;
  items?: BannerPageItem[];
}

export default function Banner({
  title,
  image,
  items = [],
}: BannerProps) {
  return (
    <ScrollReveal direction="up">
      <section className="relative mt-8 isolate flex min-h-[340px] items-end overflow-hidden bg-ink sm:mt-10 sm:min-h-[400px] lg:min-h-[440px]">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_45%]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-field/25" />

        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-signal via-brass to-transparent"
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          {items.length > 0 && (
            <nav
              aria-label="Breadcrumb"
              className="mb-4 flex flex-wrap items-center gap-2 text-sm text-white/70"
            >
              {items.map((item, i) => (
                <span key={item.label} className="flex items-center gap-2">
                  {i > 0 && <span className="text-brass/80">/</span>}
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-brass"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="font-semibold text-brass">{item.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          <h1 className="font-display max-w-3xl text-4xl font-bold uppercase leading-[1.05] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </div>
      </section>
    </ScrollReveal>
  );
}

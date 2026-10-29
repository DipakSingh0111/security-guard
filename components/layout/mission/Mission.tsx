import Image from "next/image";
import { LuEye, LuShieldCheck } from "react-icons/lu";
import type { IconType } from "react-icons";
import { site } from "@/data";
import { RiTargetFill } from "react-icons/ri";
import ScrollReveal from "../../shared/ScrollReveal";

const iconMap: Record<string, IconType> = {
  target: RiTargetFill,
  eye: LuEye,
};

function Icon({
  name,
  size = 32,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Cmp = iconMap[name] ?? LuShieldCheck;
  return <Cmp size={size} className={className} />;
}

export default function Mission() {
  const m = site.mission;

  return (
    <ScrollReveal direction="none" duration={0.6}>
      <section className="relative overflow-hidden bg-mist py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <ScrollReveal
              as="div"
              direction="right"
              mobileDirection="up"
              className="flex flex-col justify-center lg:col-span-6"
            >
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-brass">
                {m.badge}
              </p>
              <h2 className="font-display mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
                {m.title.normal}{" "}
                <span className="text-signal">{m.title.highlighted}</span>
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">{m.desc}</p>

              <div className="mt-8 space-y-4">
                {m.items.map((item, index) => (
                  <ScrollReveal
                    as="div"
                    key={item.id}
                    direction="up"
                    index={index}
                    staggerChildren={0.12}
                    className="grid grid-cols-[auto_1fr] gap-4 border border-line bg-white p-4 sm:gap-5 sm:p-5"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-ink text-brass sm:h-16 sm:w-16">
                      <Icon name={item.icon} size={28} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-ink sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal
              as="div"
              direction="left"
              mobileDirection="up"
              className="relative lg:col-span-6"
            >
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -right-3 top-6 hidden h-[70%] w-full translate-x-3 bg-field sm:block"
                />
                <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                  <Image
                    src={m.image}
                    alt={m.badge}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div
                  aria-hidden
                  className="absolute -bottom-3 -left-3 h-16 w-16 bg-signal"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

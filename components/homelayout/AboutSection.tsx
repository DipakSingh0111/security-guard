import Image from "next/image";
import Link from "next/link";
import {
  LuArrowRight,
  LuCctv,
  LuShield,
  LuShieldCheck,
  LuUserCheck,
  LuUsers,
} from "react-icons/lu";
import type { IconType } from "react-icons";
import { site } from "@/data";
import ScrollReveal from "../shared/ScrollReveal";

const iconMap: Record<string, IconType> = {
  shield: LuShield,
  "shield-check": LuShieldCheck,
  "user-shield": LuUserCheck,
  cctv: LuCctv,
  users: LuUsers,
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
      className={`flex items-center gap-3 ${
        center ? "justify-center" : ""
      }`}
    >
      <span className="h-0.5 w-8 bg-[#fdb913] sm:w-10" />

      <span
        className={`text-xs font-bold uppercase tracking-[0.2em] sm:text-[13px] ${color}`}
      >
        {text}
      </span>

      {center && <span className="h-0.5 w-8 bg-[#fdb913] sm:w-10" />}
    </div>
  );
}

function DotPattern({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute opacity-60 [background-image:radial-gradient(#9db4e8_1.6px,transparent_1.6px)] [background-size:14px_14px] ${className}`}
    />
  );
}

const boxStyles = [
  "bg-[#06194a] text-white",
  "bg-[#fdb913] text-[#06194a]",
  "bg-[#fdb913] text-[#06194a]",
  "bg-[#06194a] text-white",
];

export default function SecurityAbout({ hideButton = false }: { hideButton?: boolean }) {
  const a = site.about;

  return (
    <ScrollReveal direction="none" duration={0.6}>
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f3f7ff] to-[#e9f0ff] py-8 md:py-12">
      <DotPattern className="right-4 top-6 hidden h-28 w-28 sm:block" />
      <DotPattern className="bottom-4 left-4 hidden h-24 w-24 sm:block" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-14 lg:items-center lg:px-8">
        {/* Image */}
        <ScrollReveal as="div" direction="right" mobileDirection="up" className="relative order-2 mx-auto w-full max-w-lg lg:order-1 lg:max-w-none h-full flex items-center">
          {/* Yellow/Navy image background accents */}
          <div className="absolute -right-4 top-6 hidden h-[85%] w-full rotate-3 rounded-3xl bg-gradient-to-r from-[#031941] via-[#fdb913] to-[#fdb913] sm:block" />
          <div className="absolute -top-3 left-4 hidden h-[40%] w-1/2 -rotate-3 rounded-3xl bg-[#073b66] sm:block" />

          {/* Image - Height balanced with content */}
          <div className="relative h-[360px] w-full overflow-hidden rounded-3xl border-4 border-white shadow-2xl sm:h-[480px] lg:h-[520px]">
            <Image
              src={a.image.src}
              alt={a.image.alt}
              fill
              sizes="(max-width: 1024px) 90vw, 50vw"
              className="object-cover"
            />
          </div>
        </ScrollReveal>

        {/* Content */}
        <ScrollReveal as="div" direction="left" mobileDirection="up" className="relative order-1 flex flex-col items-center text-center lg:order-2 lg:items-start lg:text-left">
          <SectionLabel text={a.badge} tone="yellow" center />

          <h2 className="mt-3 text-3xl font-extrabold text-[#06194a] sm:text-4xl lg:text-left lg:text-[45px] leading-tight">
            {a.title.normal}
            <span className="block text-[#fdb913]">
              {a.title.highlighted}
            </span>
          </h2>

          <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-600 sm:text-base lg:text-left">
            {a.paragraphs.map((p, idx) => (
              <p key={idx}>
                {p}
              </p>
            ))}
          </div>

          {!hideButton && (
            <Link
              href={a.button.href}
              className="btn-fill-tl [--btn-fill:#06194a] [--btn-hover:#fdb913] mt-8 inline-flex items-center gap-3 rounded-full bg-[#fdb913] py-2 pl-6 pr-2 text-base font-bold text-[#06194a] shadow-md hover:scale-105 transition-transform"
            >
              {a.button.label}

              <span className="flex items-center justify-center rounded-full">
                <LuArrowRight size={26} />
              </span>
            </Link>
          )}
        </ScrollReveal>
      </div>
    </section>
    </ScrollReveal>
  );
}
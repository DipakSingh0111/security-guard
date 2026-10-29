"use client";

import Image from "next/image";
import Link from "next/link";
import {
  LuPhone,
  LuMail,
  LuMapPin,
  LuInstagram,
  LuLinkedin,
  LuFacebook,
  LuArrowRight,
} from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { site } from "@/data";
import ScrollReveal from "../../shared/ScrollReveal";

/* Maps icon strings to icons */
const iconMap: Record<string, any> = {
  phone: LuPhone,
  mail: LuMail,
  location: LuMapPin,
  instagram: LuInstagram,
  linkedin: LuLinkedin,
  facebook: LuFacebook,
  pinterest: LuFacebook,
  twitter: FaXTwitter,
  x: FaXTwitter,
};

function Icon({
  name,
  size = 24,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Cmp = iconMap[name] ?? LuPhone;
  return <Cmp size={size} className={className} />;
}

/* Small eyebrow section label with yellow bar */
function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-0.5 w-8 bg-brass sm:w-10" />
      <span className="text-xs font-bold uppercase sm:text-[13px] lg:text-[15px] text-ink">
        {text}
      </span>
    </div>
  );
}

export default function ContactPage() {
  const c = site.contact;

  return (
    <div className="min-h-screen bg-white">
      
      {/* Main Contact Section */}
      <ScrollReveal direction="none" duration={0.6}>
      <section className="relative overflow-hidden bg-mist py-14 md:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-8 grid grid-cols-5 gap-2 sm:right-10"
      >
        {Array.from({ length: 25 }).map((_, index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 bg-brass/50"
          />
        ))}
      </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Row: Intro Content & Info Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-9">
            {/* Left Column: Heading, Description & Socials */}
            <ScrollReveal as="div" direction="right" mobileDirection="up" className="lg:col-span-5">
              <SectionLabel text={c.badge} />
              <h2 className="font-display mt-1 text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-[49px]">
                {c.title.normal}{" "}
                <span className="text-signal">{c.title.highlighted}</span>
                <span className="block">{c.title.postTitle}</span>
              </h2>
              <p className="mt-1 text-base leading-relaxed text-slate-600">
                {c.desc}
              </p>

              {/* Social Media Icons */}
              <div className="mt-6 flex items-center gap-3">
                {c.socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="flex h-11 w-11 items-center justify-center bg-ink text-white shadow-sm transition-all duration-300 hover:bg-brass hover:text-ink"
                  >
                    <Icon name={social.icon} size={18} />
                  </a>
                ))}
              </div>
            </ScrollReveal>

            {/* Right Column: Info Cards Grid */}
            <div className="lg:col-span-7 z-20 grid gap-4 sm:grid-cols-2">
              {c.infoCards.map((card, idx) => {
                const isLocation = card.icon === "location";
                return (
                  <ScrollReveal
                    as="div"
                    key={idx}
                    direction="up"
                    index={idx}
                    staggerChildren={0.1}
                    className={`flex items-center gap-3.5 p-5 sm:p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_25px_rgba(14,22,18,0.06)] transition-all duration-300 hover:shadow-[0_12px_35px_rgba(14,22,18,0.12)] min-w-0 ${
                      isLocation ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-brass text-ink shadow-inner">
                      <Icon name={card.icon} size={22} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 block">
                        {card.label}
                      </span>
                      <a
                        href={card.href}
                        className="mt-1 block text-sm sm:text-base font-bold text-ink hover:text-signal transition-colors break-words"
                      >
                        {card.value}
                      </a>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Bottom Row: Google Map & Message Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Google Map Embed */}
            <ScrollReveal as="div" direction="right" mobileDirection="up" className="lg:col-span-6 overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(14,22,18,0.08)] border border-slate-100 min-h-[420px]">
              <iframe
                title={c.form.mapTitle}
                src={c.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "420px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </ScrollReveal>

            {/* Right Column: Send Us Message Form */}
            <ScrollReveal as="div" direction="left" mobileDirection="up" className="lg:col-span-6 rounded-2xl bg-white p-6 sm:p-8 shadow-[0_8px_30px_rgba(14,22,18,0.08)] border border-slate-100 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-ink">
                  {c.form.title.normal}{" "}
                  <span className="text-brass">
                    {c.form.title.highlighted}
                  </span>
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-500">
                  {c.form.desc}
                </p>

                <form
                  className="mt-6 space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(c.form.successMessage);
                  }}
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {c.form.fields
                      .filter((field) => field.type !== "textarea")
                      .map((field) => (
                        <div key={field.name}>
                          <input
                            type={field.type}
                            name={field.name}
                            required={field.required}
                            placeholder={field.placeholder}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-ink placeholder-slate-400 transition-colors focus:border-ink focus:bg-white focus:outline-none"
                          />
                        </div>
                      ))}
                  </div>

                  {c.form.fields
                    .filter((field) => field.type === "textarea")
                    .map((field) => (
                      <div key={field.name}>
                        <textarea
                          name={field.name}
                          rows={field.rows ?? 4}
                          required={field.required}
                          placeholder={field.placeholder}
                          className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-ink placeholder-slate-400 transition-colors focus:border-ink focus:bg-white focus:outline-none"
                        />
                      </div>
                    ))}

                  <button
                    type="submit"
                    className="btn-fill-tl inline-flex items-center justify-between gap-4 rounded-sm bg-signal px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-transform hover:scale-[1.02] [--btn-fill:#0e1612]"
                  >
                    <span>{c.form.submitLabel}</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-ink text-brass">
                      <LuArrowRight size={14} />
                    </span>
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}

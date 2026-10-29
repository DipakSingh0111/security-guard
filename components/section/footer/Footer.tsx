"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import type { ReactNode } from "react";
import { site } from "@/data";
import SecurityLogo from "@/components/shared/SecurityLogo";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const socialIcons: Record<string, ReactNode> = {
  facebook: <FaFacebookF size={15} />,
  instagram: <FaInstagram size={15} />,
  linkedin: <FaLinkedinIn size={15} />,
  youtube: <FaYoutube size={15} />,
  twitter: <FaXTwitter size={15} />,
  x: <FaXTwitter size={15} />,
};

const contactIcons: Record<string, ReactNode> = {
  "map-pin": <MapPin size={18} strokeWidth={2.2} />,
  phone: <Phone size={18} strokeWidth={2.2} />,
  mail: <Mail size={18} strokeWidth={2.2} />,
  clock: <Clock size={18} strokeWidth={2.2} />,
};

export default function SecurityFooter() {
  const { footer } = site;

  return (
    <footer className="relative isolate overflow-hidden text-white">
      <Image
        src={footer.bgImage}
        alt=""
        fill
        sizes="100vw"
        className="-z-30 object-cover"
      />
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-ink/95 via-field/92 to-ink/97" />
      <div className="absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full bg-brass/10 blur-3xl" />
      <div className="absolute -bottom-16 right-0 -z-10 h-56 w-56 rounded-full bg-signal/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.4fr]">
        <div>
          <div className="mb-4 inline-block">
            <SecurityLogo isDark={true} />
          </div>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/85">
            {footer.desc}
          </p>
        </div>

        {footer.columns.map((col) => (
          <div key={col.title}>
            <h3 className="font-display relative mb-5 pb-3 text-lg font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-10 after:bg-brass">
              {col.title}
            </h3>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1.5 text-sm text-white/85 transition-all duration-300 hover:translate-x-1 hover:text-brass"
                  >
                    <ChevronRight size={14} className="text-brass" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="font-display relative mb-5 pb-3 text-lg font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-10 after:bg-brass">
            {footer.footerContact.title}
          </h3>
          <ul className="space-y-4">
            {footer.footerContact.items.map((item) => (
              <li key={item.icon} className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-brass/30 bg-ink text-brass shadow-md">
                  {contactIcons[item.icon]}
                </span>
                <div className="pt-0.5 text-sm leading-relaxed text-white/85">
                  {item.lines.map((line) =>
                    "href" in line && line.href ? (
                      <a
                        key={line.text}
                        href={line.href}
                        className="block transition-colors hover:text-brass"
                      >
                        {line.text}
                      </a>
                    ) : (
                      <span key={line.text} className="block">
                        {line.text}
                      </span>
                    ),
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-3">
            {footer.socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 bg-ink/80 text-white transition-all duration-300 hover:-translate-y-1 hover:border-brass hover:bg-brass hover:text-ink"
              >
                {socialIcons[s.label]}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-ink/80 py-3.5 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 text-xs sm:text-sm">
          {footer.policyLinks.map((link, i) => (
            <span key={link.href} className="contents">
              {i > 0 ? (
                <span className="hidden text-white/30 sm:inline">|</span>
              ) : null}
              <Link
                href={link.href}
                className="flex items-center gap-1.5 text-white/70 transition-colors hover:text-brass"
              >
                <span className="text-brass">•</span> {link.label}
              </Link>
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-signal/40 bg-signal text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-3 text-xs sm:flex-row sm:text-sm">
          <p className="font-medium tracking-wide">
            {footer.copyright.prefix} {footer.copyright.brand}{" "}
            {footer.copyright.suffix}
          </p>
          <p className="font-medium text-white/90">
            {footer.designCredit.prefix}{" "}
            <span className="font-semibold text-white">
              {footer.designCredit.brand}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

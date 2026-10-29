"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUp,
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import type { ReactNode } from "react";
import { site } from "@/data";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

/* High-clarity social icons from react-icons */
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
      {/* Background image (full width) */}
      <Image
        src={footer.bgImage}
        alt=""
        fill
        sizes="100vw"
        className="-z-30 object-cover"
      />
      {/* Blue gradient cover */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-l from-[#041627]/95 via-[#041627]/95 to-[#030d2b]/95" />
      {/* Soft yellow glow, top-left */}
      <div className="absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full bg-[#fdb913]/10 blur-3xl" />

      {/* Main grid */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-6 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.4fr]">
        {/* Brand */}
        <div>
          <Link href="/" aria-label={footer.logoAlt} className="inline-block mb-3">
            <Image
              src={footer.logoImage}
              alt={footer.logoAlt}
              width={90}
              height={90}
              className="h-20 w-auto object-contain"
            />
          </Link>
          <p className="mt-0 max-w-xs text-sm leading-relaxed text-white">
            {footer.desc}
          </p>
        </div>

        {/* Link columns */}
        {footer.columns.map((col) => (
          <div key={col.title}>
            <h3 className="relative mb-5 pb-3 text-lg font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-10 after:bg-[#fdb913]">
              {col.title}
            </h3>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1.5 text-sm text-white transition-all duration-300 hover:translate-x-1 hover:text-[#fdb913]"
                  >
                    <ChevronRight size={14} className="text-[#fdb913]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <h3 className="relative mb-5 pb-3 text-lg font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-10 after:bg-[#fdb913]">
            {footer.footerContact.title}
          </h3>
          <ul className="space-y-4">
            {footer.footerContact.items.map((item) => (
              <li key={item.icon} className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0a2f8f] text-[#fdb913] border-2 border-white/20 shadow-md">
                  {contactIcons[item.icon]}
                </span>
                <div className="pt-0.5 text-sm leading-relaxed text-white">
                  {item.lines.map((line) =>
                    "href" in line && line.href ? (
                      <a
                        key={line.text}
                        href={line.href}
                        className="block transition-colors hover:text-[#fdb913]"
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

          {/* Social */}
          <div className="mt-6 flex items-center gap-3">
            {footer.socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#06194a]/80 text-white border border-blue-400/50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#fdb913] hover:text-[#06194a] hover:border-[#fdb913]"
              >
                {socialIcons[s.label]}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Policy Links Strip */}
      <div className="border-t border-white/10 bg-[#020b24]/90 py-3.5 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 text-xs sm:text-sm">
          {footer.policyLinks.map((link, i) => (
            <span key={link.href} className="contents">
              {i > 0 ? (
                <span className="hidden text-gray-600 sm:inline">|</span>
              ) : null}
              <Link
                href={link.href}
                className="flex items-center gap-1.5 text-gray-300 transition-colors hover:text-[#fdb913]"
              >
                <span className="text-[#fdb913]">•</span> {link.label}
              </Link>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom bar - Red Ribbon Brand Bar matching reference design */}
      <div className="border-t border-red-900/40 bg-[#991b1b] text-white">
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

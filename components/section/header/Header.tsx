"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Clock,
  Mail,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { getHeaderNav, site } from "@/data";
import SecurityLogo from "@/components/shared/SecurityLogo";

const ACCENT = "#c4a35a";

export default function SecurityHeader() {
  const pathname = usePathname();
  const { topbar, header } = site;
  const nav = getHeaderNav();
  const button = header.buttons[0];

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const solid = scrolled || pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50">
        <div className="border-b border-brass/20 bg-field text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:text-[13px]">
            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href={topbar.emailHref}
                className="hidden items-center gap-2 border-r border-white/25 pr-5 text-sm transition-colors hover:text-brass sm:flex sm:text-base"
              >
                <Mail size={18} className="text-brass" />
                {topbar.email}
              </a>
              <a
                href={topbar.phoneHref}
                className="flex items-center gap-2 text-sm transition-colors hover:text-brass sm:text-base"
              >
                <Phone size={18} className="text-brass" />
                {topbar.phone}
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/85 sm:text-base">
              <Clock size={18} className="text-brass" />
              <span>{topbar.supportText}</span>
            </div>
          </div>
        </div>

        <header
          className={`z-50 w-full transition-all duration-300 ${
            solid
              ? "border-b border-white/5 bg-ink/95 shadow-[0_8px_30px_rgba(14,22,18,0.35)] backdrop-blur-md"
              : "bg-transparent"
          }`}
        >
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-3 sm:h-22 sm:px-4 lg:h-24">
            <SecurityLogo isDark={solid} />

            <nav
              className="hidden min-w-0 items-center justify-end lg:flex lg:flex-1"
              aria-label="Main navigation"
            >
              <ul
                className={`flex items-center gap-x-4 text-xs font-semibold tracking-wide xl:gap-x-5 xl:text-[13px] 2xl:gap-x-6 2xl:text-sm ${
                  solid ? "text-white" : "text-ink"
                }`}
              >
                {nav.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <li key={item.label} className="group relative shrink-0">
                      <Link
                        href={item.href}
                        className={`relative flex items-center gap-0.5 whitespace-nowrap py-2 transition-colors hover:text-signal ${
                          active ? "text-signal" : ""
                        }`}
                      >
                        {item.label}
                        {item.children && (
                          <ChevronDown
                            size={14}
                            className="transition-transform duration-300 group-hover:rotate-180"
                          />
                        )}
                        <span
                          className={`absolute -bottom-0.5 left-0 h-0.5 bg-brass transition-all duration-300 ${
                            active ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                        />
                      </Link>

                      {item.children && (
                        <ul className="invisible absolute left-0 top-full z-50 w-72 translate-y-2 rounded-md border border-brass/25 bg-field py-2 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 xl:w-80">
                          {item.children.map((child) => (
                            <li
                              key={child.label}
                              className="border-b border-white/10 last:border-b-0"
                            >
                              <Link
                                href={child.href}
                                className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-ink-soft hover:text-brass xl:px-5 xl:py-3 xl:text-sm"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex shrink-0 items-center gap-2 pl-4 sm:gap-3 xl:pl-6">
              <Link
                href={button.href}
                className="btn-fill-tr hidden items-center gap-1.5 rounded-md bg-signal px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-transform hover:scale-105 [--btn-fill:#0e1612] sm:inline-flex xl:px-5 xl:py-2.5 xl:text-xs"
              >
                {button.label}
                <ArrowRight size={14} className="xl:size-4" />
              </Link>

              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label={header.mobileMenu.openLabel}
                aria-expanded={open}
                className={`flex h-10 w-10 items-center justify-center rounded-sm border transition-colors hover:bg-signal hover:text-white sm:h-11 sm:w-11 lg:hidden ${
                  solid
                    ? "border-white/30 bg-white/10 text-white backdrop-blur"
                    : "border-ink/20 bg-ink/5 text-ink"
                }`}
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </header>
      </div>

      <div
        className={`fixed inset-0 z-[100] lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/70 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          className={`absolute left-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-field-mesh shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-brass/20 px-5 py-4">
            <Image
              src={header.site.logo.normal}
              alt={header.site.logo.alt}
              width={70}
              height={70}
              loading="eager"
              className="h-14 w-auto object-contain"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={header.mobileMenu.closeLabel}
              className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/30 text-white transition-colors hover:bg-signal"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-4">
            <ul className="space-y-1">
              {nav.map((item, i) => {
                const active = isActive(item.href);
                const isOpen = expanded === item.label;
                return (
                  <li
                    key={item.label}
                    style={{
                      transitionDelay: open ? `${150 + i * 50}ms` : "0ms",
                    }}
                    className={`border-b border-white/10 transition-all duration-500 ${
                      open
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-6 opacity-0"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className={`flex-1 py-3 text-[15px] font-medium transition-colors hover:text-brass ${
                          active ? "text-brass" : "text-white"
                        }`}
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <button
                          type="button"
                          onClick={() =>
                            setExpanded(isOpen ? null : item.label)
                          }
                          aria-label={`Toggle ${item.label}`}
                          aria-expanded={isOpen}
                          className="flex h-9 w-9 items-center justify-center text-white"
                        >
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-300 ${
                              isOpen ? "rotate-180 text-brass" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {item.children && (
                      <div
                        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <ul className="overflow-hidden pl-3">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                className="block border-l border-white/20 py-2 pl-4 text-sm text-white/80 transition-colors hover:border-brass hover:text-brass"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="space-y-4 border-t border-brass/20 px-5 py-5">
            <Link
              href={button.href}
              className="btn-fill-tl flex w-full items-center justify-center gap-2 rounded-sm bg-signal px-5 py-3 text-sm font-semibold text-white [--btn-fill:#0e1612]"
            >
              {button.label}
              <ArrowRight size={16} />
            </Link>
            <div className="space-y-2 text-sm text-white/80">
              <a
                href={topbar.phoneHref}
                className="flex items-center gap-2 hover:text-brass"
              >
                <Phone size={14} style={{ color: ACCENT }} />
                {topbar.phone}
              </a>
              <a
                href={topbar.emailHref}
                className="flex items-center gap-2 hover:text-brass"
              >
                <Mail size={14} style={{ color: ACCENT }} />
                {topbar.email}
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

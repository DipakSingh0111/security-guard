"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getServices } from "@/data";
import { LuPlay } from "react-icons/lu";

export default function ServiceSidebar() {
  const pathname = usePathname();
  const services = getServices();

  return (
    <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Red Header Bar */}
      <div className="bg-[#991b1b] px-5 py-3.5 text-white">
        <h3 className="font-serif text-lg font-bold tracking-wide">
          Our Services
        </h3>
      </div>

      {/* Services List with arrow icon */}
      <nav className="divide-y divide-dashed divide-gray-200">
        {(services || []).map((service) => {
          const href =
            service.button?.href ||
            (service.slug ? `/services/${service.slug}` : "/services");
          const isActive = pathname === href;

          return (
            <Link
              key={service.id || service.title}
              href={href}
              className={`group flex items-center gap-2.5 px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-red-50 hover:text-[#991b1b] hover:pl-5 ${
                isActive
                  ? "bg-red-50 font-semibold text-[#991b1b]"
                  : "text-slate-700"
              }`}
            >
              <LuPlay
                size={11}
                className={`shrink-0 transition-transform duration-200 fill-current ${
                  isActive
                    ? "text-[#991b1b] scale-110"
                    : "text-slate-400 group-hover:text-[#991b1b] group-hover:translate-x-0.5"
                }`}
              />
              <span className="leading-snug">{service.title}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

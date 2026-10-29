"use client";

import Image from "next/image";
import Link from "next/link";
import {
  LuShieldCheck,
  LuEye,
  LuBuilding2,
  LuArrowRight,
} from "react-icons/lu";
import ScrollReveal from "../shared/ScrollReveal";

export default function HomeWelcomeSection() {
  const pillars = [
    {
      title: "Elite Guarding & VIP Protection",
      description:
        "Specialized Personal Security Officers (PSO), vehicle security, and unarmed guarding services tailored for high-stakes environments.",
      icon: LuShieldCheck,
    },
    {
      title: "Strategic Intelligence",
      description:
        "Professional security analysis and auditing services to identify vulnerabilities and ensure business continuity.",
      icon: LuEye,
    },
    {
      title: "Event & Infrastructure Management",
      description:
        "Comprehensive event security and facility management solutions designed for seamless, disruption-free operations.",
      icon: LuBuilding2,
    },
  ];

  return (
    <section className="bg-[#f8fafc] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          {/* Top Green Banner Ribbon */}
          <div className="overflow-hidden rounded-xl bg-[#2e3b26] px-6 py-4 text-white shadow-md">
            <h2 className="font-serif text-lg font-bold tracking-wide sm:text-xl md:text-2xl">
              Welcome To 2803 Vikas Joshi Security Agency (VJ Security Services)
            </h2>
          </div>

            {/* Executive Overview Card */}
            <ScrollReveal direction="up">
              <div className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8">
                <div className="grid gap-6 md:grid-cols-[240px_1fr] md:items-start lg:gap-8">
                  {/* Photo of Col. Vikas Joshi with red border */}
                  <div className="relative mx-auto w-full max-w-[240px] md:mx-0">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg border-4 border-[#b91c1c] shadow-md bg-slate-100">
                      <Image
                        src="/security/guard4.jpg"
                        alt="Col. Vikas Joshi (Retd.) - VJ Security"
                        fill
                        sizes="(max-width: 768px) 240px, 240px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="mt-2 text-center">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#b91c1c]">
                        Col. Vikas Joshi (Retd.)
                      </p>
                      <p className="text-[11px] text-slate-500">
                        Founder & Principal Mentor
                      </p>
                    </div>
                  </div>

                  {/* Header & Overview Text */}
                  <div className="flex flex-col">
                    <h3 className="font-serif text-2xl font-bold leading-tight text-[#b91c1c] sm:text-3xl">
                      VJ Security: Precision Protection. Global Standards.
                    </h3>
                    <p className="mt-1 font-serif text-sm italic text-slate-600 sm:text-base">
                      India&apos;s Leading Security Management & Safety Solutions Partner
                    </p>

                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                      <p>
                        <strong className="font-bold text-[#06194a]">
                          Executive Overview:
                        </strong>{" "}
                        VJ Security is a premier innovator in the Indian security
                        industry, providing comprehensive guarding, facility
                        management, and safety system integration. With a central
                        command in Delhi and operations spanning the country, we
                        deliver elite protection services built on armed forces-derived
                        methodologies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Core Security Pillars Card */}
            <ScrollReveal direction="up">
              <div className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8">
                <div className="border-b border-gray-100 pb-3 text-center">
                  <h3 className="font-serif text-xl font-bold tracking-wide text-[#b91c1c] sm:text-2xl">
                    Core Security Pillars
                  </h3>
                </div>

                <div className="mt-6 space-y-4">
                  {pillars.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 transition-colors hover:bg-slate-100/80"
                      >
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#b91c1c]/10 text-[#b91c1c]">
                          <Icon size={20} />
                        </span>
                        <div>
                          <h4 className="font-bold text-[#06194a]">
                            {item.title}:
                          </h4>
                          <p className="mt-1 text-sm leading-relaxed text-slate-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 space-y-3 border-t border-gray-100 pt-5 text-sm leading-relaxed text-slate-700">
                  <p>
                    <strong className="font-bold text-[#06194a]">
                      Why VJ Security?
                    </strong>{" "}
                    We operate on the principle that while theories build
                    business, individuals create success. Our team is recognized
                    for being &apos;professional, courteous, and thorough,&apos;
                    providing the peace of mind required for our clients to focus on
                    their core business.
                  </p>
                  <p>
                    <strong className="font-bold text-[#06194a]">
                      Visitor Management:
                    </strong>{" "}
                    We provide consulting for visiting dignitaries for their entire
                    visit, including safe travel, hotels, conveniences, and
                    solutions encompassing all aspects of their itinerary from
                    airport to airport, from their arrival to departure.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* VJ SKILLS: Human Capital Excellence Card */}
            <ScrollReveal direction="up">
              <div className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8">
                <div className="border-b border-gray-100 pb-3 text-center">
                  <h3 className="font-serif text-xl font-bold tracking-wide text-[#b91c1c] sm:text-2xl">
                    VJ SKILLS: Human Capital Excellence
                  </h3>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-slate-700 sm:text-base text-justify">
                  Through VJ Skills, we develop a professional workforce aligned
                  with industrial needs, ensuring that every operative is trained for
                  success. Expanding from Viraj Global to create a long-term impact,
                  we are currently running{" "}
                  <strong className="font-bold text-[#06194a]">
                    7 Centres across India
                  </strong>{" "}
                  (Noida, Greater Noida, Gurgaon, Bangalore, Delhi, Chennai). We offer &apos;Skills for Jobs&apos; programmes linking every
                  successful trainee to employment in the organized sector...
                </p>

                <div className="mt-6 flex justify-end">
                  <Link
                    href="/vj-skills"
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#b91c1c] hover:underline"
                  >
                    READ MORE <LuArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

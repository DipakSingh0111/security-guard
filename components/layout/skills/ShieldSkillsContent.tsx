import Image from "next/image";
import Link from "next/link";
import { LuPhone, LuMail, LuUser } from "react-icons/lu";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SecurityLogo from "@/components/shared/SecurityLogo";

export default function ShieldSkillsContent() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Main Title Heading with Logo */}
        <div className="flex flex-col items-center justify-center gap-3 pb-8 border-b border-gray-200">
          <SecurityLogo isDark={false} />
          <div className="h-1 w-20 bg-signal rounded-full mt-2" />
        </div>

        {/* Introductory Overview */}
        <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-700 sm:text-lg text-justify">
          <p>
            <strong className="font-semibold text-ink">
              SHIELD GLOBAL Skills
            </strong>{" "}
            ventured into skills development to create long term impact, aligned
            to the manpower needs of the industrial clusters. Currently we are
            running <strong>7 Centres across India</strong> (Noida, Greater
            Noida, Gurgaon, Bangalore, Delhi, Chennai). We offer &apos;Skills
            for Jobs&apos; programmes linking every successful trainee to
            employment in organized sector.
          </p>

          <p>
            We follow a standardized value chain which ensures the &apos;right
            candidate&apos; is skilled for &apos;right job&apos;. Today, we
            offer 74 programmes across NSQF levels, in 21 sectors including,
            Industrial Security Guard, Logistics, Courier, Tourism, Hospitality
            etc. Our target group includes a wide range of learners, especially
            those who are from &apos;Bottom of Pyramid&apos; groups and have
            little or no exposure to skills and training. We also deliver the
            widest range of employability programmes for under graduates and
            post graduates that hone their work skills and provide them a
            combination of domain and life skills.
          </p>

          <p>
            For us, skill development is core to youth engagement and poverty
            alleviation. We have created a model which is globally recognized
            for its impact and on improving the way people acquire skills and on
            how industry retains manpower.
          </p>
        </div>

        {/* OUR MODEL Section */}
        <ScrollReveal direction="up">
          <div className="mt-12 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <div className="bg-signal px-6 py-3.5 text-white">
              <h3 className="font-display text-lg font-bold tracking-wider uppercase sm:text-xl">
                OUR MODEL :-
              </h3>
            </div>

            <div className="bg-slate-50/60 p-6 sm:p-8 space-y-6 text-sm leading-relaxed text-slate-700 sm:text-base text-justify">
              <div>
                <h4 className="font-bold text-ink text-base sm:text-lg">
                  Selection of Trainers:-
                </h4>
                <p className="mt-1.5">
                  The process is started by selecting the trainers. Trainers are
                  selected by the Programme Managers after a rigorous review.
                  Following are some attributes a trainer must possess to be
                  selected:
                </p>
                <ul className="mt-3 space-y-2 pl-2 text-left">
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-signal">(i)</span>
                    <span>
                      Relevant educational and technical education background,
                      as per industry standards.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-signal">(ii)</span>
                    <span>Relevant Industrial Experience.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-signal">(iii)</span>
                    <span>Facilitation skills.</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-gray-200/80 pt-5">
                <h4 className="font-bold text-ink text-base sm:text-lg">
                  Training:-
                </h4>
                <p className="mt-1.5">
                  Once the trainers are selected, they undergo modules on
                  facilitation skills and domain specific training which takes
                  them through the training content and practical sessions.
                </p>
              </div>

              <div className="border-t border-gray-200/80 pt-5">
                <h4 className="font-bold text-ink text-base sm:text-lg">
                  Content:-
                </h4>
                <p className="mt-1.5">
                  The content and training material for each program is
                  specifically designed. A systematic approach is taken to
                  design the course content. Each course is backed up by
                  standardized, reliable course material and classroom kits for
                  the trainer.
                </p>
              </div>

              <div className="border-t border-gray-200/80 pt-5">
                <h4 className="font-bold text-ink text-base sm:text-lg">
                  Evaluation and Certification:-
                </h4>
                <p className="mt-1.5">
                  Each participant in the programme is assessed and certified on
                  the basis of their training skills and knowledge. On
                  completion of the training, the Master Trainer sends a ToT
                  report with certification results of each trainer. Based on
                  the ToT report, certificates for MASTERY and domain training
                  are issued to the trainers who have successfully completed the
                  ToT.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* OUR SERVICES Section */}
        <ScrollReveal direction="up">
          <div className="mt-10 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <div className="bg-signal px-6 py-3.5 text-white">
              <h3 className="font-display text-lg font-bold tracking-wider uppercase sm:text-xl">
                OUR SERVICES :-
              </h3>
            </div>

            <div className="bg-slate-50/60 p-6 sm:p-8 space-y-6 text-sm leading-relaxed text-slate-700 sm:text-base">
              <div>
                <p className="text-justify">
                  <strong className="font-bold text-ink">
                    SKILLS FOR JOB :-
                  </strong>{" "}
                  SHIELD GLOBAL SKILLS helps to provide employment to unskilled
                  youth in various sectors such as Security Agency, Hospitality,
                  Courier etc. Employability of youth continues to be a major
                  challenge given the industry in India each year over 5 million
                  graduates and post-graduates are added to the Indian
                  workforce. However, of these only 25 percent of technical
                  graduates and 10-15 percent of other graduates are considered
                  employable by industry. The situation is grim for those who
                  are Not in Education, Employment and Training (NEET). Many of
                  them don&apos;t get an entry point into the education system
                  due to lack of basic qualification and end up being part of
                  the unskilled, underemployed workforce, affecting
                  competitiveness of industries.
                </p>
              </div>

              {/* Contact Information Box */}
              <div className="rounded-xl border border-red-200 bg-red-50/50 p-6 sm:p-7">
                <h4 className="font-display text-base font-bold text-signal sm:text-lg">
                  Get more info on our Skills for Trainers practice contact:
                </h4>

                <div className="mt-4 space-y-2 text-slate-800">
                  <p className="flex items-center gap-2 font-semibold text-ink">
                    <LuUser className="text-signal" size={18} />
                    <span>Training Operations Desk</span>
                  </p>
                  <p className="text-sm font-medium text-slate-600 pl-6">
                    Head - Academic & Field Command
                  </p>
                  <p className="text-sm font-semibold text-slate-700 pl-6">
                    Shield Global Skills Academy
                  </p>
                  <p className="flex flex-wrap items-center gap-2 pt-2 text-sm">
                    <LuMail className="text-signal" size={17} />
                    <span className="text-slate-600">Email:</span>
                    <a
                      href="mailto:training@securityguardagency.com"
                      className="font-medium text-signal hover:underline"
                    >
                      training@securityguardagency.com
                    </a>
                    <span className="text-slate-400">,</span>
                    <a
                      href="mailto:skills@securityguardagency.com"
                      className="font-medium text-signal hover:underline"
                    >
                      skills@securityguardagency.com
                    </a>
                  </p>
                  <p className="flex items-center gap-2 pt-1 text-sm">
                    <LuPhone className="text-signal" size={17} />
                    <span className="text-slate-600">Tel:</span>
                    <a
                      href="tel:+919876543210"
                      className="font-medium text-signal hover:underline"
                    >
                      +91-9876543210
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

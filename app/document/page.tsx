import type { Metadata } from "next";
import PageBanner from "@/components/shared/Banner";
import SecurityCta from "@/components/homelayout/CTA";
import { Shield } from "lucide-react";
import { getDocumentData } from "@/data";

const data = getDocumentData();

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
};

export default function DocumentPage() {
  const { banner, sectionHeading, psaraHeading, pdfDocuments, psaraLicenses, footerNote } =
    data;

  return (
    <>
      <PageBanner title={banner.title} image={banner.image} items={banner.items} />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 rounded bg-[#3b4b3b] py-2.5 text-center shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white md:text-base">
              {sectionHeading}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:gap-8 lg:grid-cols-4">
            {pdfDocuments.map((doc) => (
              <div
                key={doc.id}
                className="group flex flex-col items-center justify-between rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-red-500 hover:shadow-xl"
              >
                <div className="relative my-4 flex h-28 w-28 items-center justify-center rounded-2xl border border-gray-100 bg-gradient-to-b from-gray-50 to-gray-100 p-4 shadow-inner transition-transform duration-300 group-hover:scale-105">
                  <svg
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20 drop-shadow-md"
                  >
                    <rect
                      width="64"
                      height="64"
                      rx="14"
                      fill="#fdfdfd"
                      stroke="#e5e7eb"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M18 46C18 43.5 22 36 29 27C27 21 25.5 14 27.5 13C29 12 31 13 32 17C33.5 23 33 27 35 30C40 33 46 36 47 38.5C48 41 46 43 43 43C39 43 33 39 29.5 37C24.5 42 19 46 18 46Z"
                      stroke="#d9222a"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M31 29C29 32 23 39 19.5 43.5C21 44.5 24 43 27.5 39"
                      stroke="#b91c1c"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="w-full rounded bg-[#9b1d20] py-2 text-center shadow-md transition-colors group-hover:bg-[#b91c1c]">
                  <span className="block text-xs font-bold uppercase tracking-wide text-white md:text-sm">
                    {doc.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h3 className="mb-6 flex items-center gap-2 text-xl font-bold uppercase tracking-wide text-[#9b1d20] md:text-2xl">
              <Shield className="h-6 w-6 text-[#9b1d20]" />
              {psaraHeading}
            </h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
              {psaraLicenses.map((lic) => (
                <div
                  key={lic.state}
                  className="rounded bg-[#9b1d20] px-4 py-3.5 text-center shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b91c1c] hover:shadow-lg"
                >
                  <p className="break-words text-xs font-bold tracking-tight text-white sm:text-[13px]">
                    <span className="uppercase text-[#fdb913]">{lic.state}-</span> &quot;
                    {lic.licenseNo}&quot;
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-xl border border-gray-200 bg-[#f8fafc] p-6 text-center">
            <p className="text-sm text-gray-600">
              {footerNote.beforeEmail}{" "}
              <a
                href={footerNote.emailHref}
                className="font-bold text-[#06194a] hover:underline"
              >
                {footerNote.email}
              </a>{" "}
              {footerNote.between}{" "}
              <a
                href={footerNote.phoneHref}
                className="font-bold text-[#9b1d20] hover:underline"
              >
                {footerNote.phone}
              </a>
              {footerNote.afterPhone}
            </p>
          </div>
        </div>
      </section>

      <SecurityCta />
    </>
  );
}

import type { Metadata } from "next";
import PageBanner from "@/components/shared/Banner";
import SecurityCta from "@/components/homelayout/CTA";
import { Shield } from "lucide-react";
import { getDocumentData } from "@/data";

import DocumentList from "@/components/layout/document/DocumentList";

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

          <DocumentList documents={pdfDocuments} />

          <div className="mt-20">
            <h3 className="mb-6 flex items-center gap-2 text-xl font-bold uppercase tracking-wide text-[#9b1d20] md:text-2xl">
              <Shield className="h-6 w-6 text-[#9b1d20]" />
              {psaraHeading}
            </h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
              {psaraLicenses.map((lic) => (
                <div
                  key={lic.state}
                  className="rounded bg-[#9b1d20] px-4 py-3.5 text-center shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-signal hover:shadow-lg"
                >
                  <p className="break-words text-xs font-bold tracking-tight text-white sm:text-[13px]">
                    <span className="uppercase text-brass">{lic.state}-</span> &quot;
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
                className="font-bold text-ink hover:underline"
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

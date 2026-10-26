import Image from "next/image";
import type { Metadata } from "next";
import PageBanner from "@/components/shared/Banner";
import SecurityCta from "@/components/homelayout/CTA";
import { getClientsData } from "@/data";

const data = getClientsData();

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
};

export default function ClientsPage() {
  const { banner, sectionHeading, clients } = data;

  return (
    <>
      <PageBanner title={banner.title} image={banner.image} items={banner.items} />

      <section className="bg-[#f7f9fc] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 overflow-hidden rounded-md bg-[#2b3520] py-3 text-center shadow-sm">
            <h2 className="font-serif text-xl font-bold uppercase tracking-widest text-[#d6dfbb] sm:text-2xl">
              {sectionHeading}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {clients.map((client) => {
              const isSvg = client.logo.endsWith(".svg");
              return (
                <div
                  key={client.name}
                  className="group flex flex-col items-center justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#fdb913] hover:shadow-xl"
                >
                  <div className="relative flex h-36 w-full items-center justify-center p-3">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={220}
                      height={120}
                      unoptimized={isSvg}
                      className="h-auto max-h-28 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 w-full border-t border-gray-100 pt-3 text-center">
                    <p className="line-clamp-2 text-xs font-semibold leading-tight text-[#a32a2a] sm:text-sm">
                      {client.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SecurityCta />
    </>
  );
}

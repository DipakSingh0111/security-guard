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
            <h2 className="font-display text-xl font-bold uppercase tracking-widest text-brass sm:text-2xl">
              {sectionHeading}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {clients.map((client) => {
              const isSvg = client.logo.endsWith(".svg");
              return (
                <div
                  key={client.name}
                  className="group flex flex-col items-center justify-between rounded-lg border border-gray-300/80 bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative flex aspect-square w-full items-center justify-center p-2">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={300}
                      height={300}
                      unoptimized={isSvg}
                      className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-2 w-full pt-2 text-center">
                    <p className="line-clamp-2 text-xs font-medium leading-snug text-[#9c2424] sm:text-[13px]">
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

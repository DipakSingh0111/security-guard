import type { Metadata } from "next";
import PageBanner from "@/components/shared/Banner";
import SecurityCta from "@/components/homelayout/CTA";
import CareerFormSection from "@/components/section/career/CareerFormSection";
import { getCareersData } from "@/data";

const data = getCareersData();

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
};

export default function CareersPage() {
  const { banner } = data;

  return (
    <>
      <PageBanner title={banner.title} image={banner.image} items={banner.items} />
      <CareerFormSection />
      <SecurityCta />
    </>
  );
}

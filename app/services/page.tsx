import SecurityCta from "@/components/homelayout/CTA";
import ServicesCatalog from "@/components/layout/service/ServicesCatalog";
import PageBanner from "@/components/shared/Banner";
import { site } from "@/data";

export default function ServicesPage() {
  const banner = site.services.banner;

  return (
    <>
      <PageBanner
        title={banner.title}
        image={banner.image}
        items={banner.items}
      />
      <ServicesCatalog />
      <SecurityCta />
    </>
  );
}

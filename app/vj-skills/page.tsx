import PageBanner from "@/components/shared/Banner";
import VJSkillsContent from "@/components/layout/vjskills/VJSkillsContent";
import SecurityCta from "@/components/homelayout/CTA";

export const metadata = {
  title: "VJ SKILLS: Human Capital Excellence | VJ Security",
  description:
    "VIRAJ GLOBAL Skills ventured into skills development to create long term impact, aligned to the manpower needs of the industrial clusters.",
};

export default function VJSkillsPage() {
  const bannerItems = [
    { label: "Home", href: "/" },
    { label: "VJ Skills" },
  ];

  return (
    <>
      <PageBanner
        title="VJ SKILLS"
        image="/page-banner.jpg"
        items={bannerItems}
      />
      <VJSkillsContent />
      <SecurityCta />
    </>
  );
}

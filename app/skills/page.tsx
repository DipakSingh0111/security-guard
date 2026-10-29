import PageBanner from "@/components/shared/Banner";
import ShieldSkillsContent from "@/components/layout/skills/ShieldSkillsContent";
import SecurityCta from "@/components/homelayout/CTA";

export const metadata = {
  title: "Skills Academy: Human Capital Excellence | Shield Security",
  description:
    "Skills development initiative to create long term impact, aligned to the manpower needs of industrial and commercial clusters.",
};

export default function SkillsPage() {
  const bannerItems = [
    { label: "Home", href: "/" },
    { label: "Shield Skills" },
  ];

  return (
    <>
      <PageBanner
        title="SHIELD SKILLS"
        image="/page-banner.jpg"
        items={bannerItems}
      />
      <ShieldSkillsContent />
      <SecurityCta />
    </>
  );
}

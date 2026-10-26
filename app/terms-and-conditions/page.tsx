"use client";

import { motion } from "framer-motion";
import PageBanner from "@/components/shared/Banner";
import SecurityCta from "@/components/homelayout/CTA";
import { getTermsData } from "@/data";

const data = getTermsData();

export default function TermsAndConditionsPage() {
  const {
    banner,
    effectiveDate,
    websiteUrl,
    websiteLabel,
    introAfterLink,
    companyBold,
    brandBold,
    sections,
  } = data;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <>
      <PageBanner title={banner.title} image={banner.image} items={banner.items} />

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl"
          >
            <motion.p
              variants={itemVariants}
              className="mb-6 text-sm font-semibold text-gray-800"
            >
              {effectiveDate}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mb-6 text-sm leading-relaxed text-gray-700 sm:text-base"
            >
              Welcome to <strong>{companyBold}</strong>, operating under the brand
              name <strong>{brandBold}</strong> (&quot;Company&quot;, &quot;we&quot;,
              &quot;our&quot;, or &quot;us&quot;). By accessing or using{" "}
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-red-600 underline transition-colors hover:text-red-700"
              >
                {websiteLabel}
              </a>
              {introAfterLink}
            </motion.p>

            <div className="space-y-4 text-sm leading-relaxed text-gray-700 sm:text-base">
              {sections.map((sec) => (
                <motion.div
                  key={sec.title}
                  variants={itemVariants}
                  className="flex items-start gap-2"
                >
                  <span className="select-none font-bold text-gray-900">•</span>
                  <p>
                    <strong className="text-gray-900">{sec.title}:</strong>{" "}
                    {sec.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <SecurityCta />
    </>
  );
}

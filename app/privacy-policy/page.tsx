"use client";

import { motion } from "framer-motion";
import PageBanner from "@/components/shared/Banner";
import SecurityCta from "@/components/homelayout/CTA";
import { getPrivacyData } from "@/data";

const data = getPrivacyData();

export default function PrivacyPolicyPage() {
  const { banner, intro, introBold, sections } = data;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" as const },
    },
  };

  const introParts = intro.split(introBold);

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
              className="mb-6 text-sm leading-relaxed text-gray-700 sm:text-base"
            >
              {introParts[0]}
              <strong>{introBold}</strong>
              {introParts[1] ?? ""}
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

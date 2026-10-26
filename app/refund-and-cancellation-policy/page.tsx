"use client";

import { motion } from "framer-motion";
import PageBanner from "@/components/shared/Banner";
import SecurityCta from "@/components/homelayout/CTA";
import { getRefundData } from "@/data";

const data = getRefundData();

export default function RefundAndCancellationPolicyPage() {
  const { banner, websiteUrl, websiteLabel, introAfterLink, companyBold, blocks } =
    data;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" as const },
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
            className="max-w-4xl space-y-8 text-sm leading-relaxed text-gray-700 sm:text-base"
          >
            <motion.p variants={itemVariants}>
              Thank you for choosing <strong>{companyBold}</strong> (
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

            {blocks.map((block) => (
              <motion.div
                key={block.heading}
                variants={itemVariants}
                className="space-y-3"
              >
                <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                  {block.heading}
                </h2>
                <div className="space-y-2 pl-1">
                  {block.items.map((item, idx) => (
                    <div key={idx}>
                      <div className="flex items-start gap-2">
                        <span className="select-none font-bold text-gray-900">
                          •
                        </span>
                        <p>
                          {"title" in item && item.title ? (
                            <>
                              <strong className="text-gray-900">
                                {item.title}:
                              </strong>{" "}
                            </>
                          ) : null}
                          {item.content}
                          {"linkText" in item && item.linkText ? (
                            <>
                              {" "}
                              <a
                                href={item.linkHref}
                                className="font-semibold text-gray-900 underline hover:text-red-600"
                              >
                                {item.linkText}
                              </a>
                              {item.afterLink}
                            </>
                          ) : null}
                        </p>
                      </div>
                      {"bullets" in item &&
                      Array.isArray(item.bullets) &&
                      item.bullets.length > 0 ? (
                        <ul className="mt-1.5 list-none space-y-1.5 pl-6">
                          {item.bullets.map((b: string) => (
                            <li
                              key={b}
                              className="flex items-start gap-2 text-gray-600"
                            >
                              <span className="select-none">o</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SecurityCta />
    </>
  );
}

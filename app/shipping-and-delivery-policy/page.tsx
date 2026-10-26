"use client";

import { motion } from "framer-motion";
import PageBanner from "@/components/shared/Banner";
import SecurityCta from "@/components/homelayout/CTA";
import { getShippingData } from "@/data";

const data = getShippingData();

export default function ShippingAndDeliveryPolicyPage() {
  const { banner, blocks } = data;

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
            {blocks.map((block) => (
              <motion.div
                key={block.heading}
                variants={itemVariants}
                className={`space-y-3${"contactItems" in block ? " pt-2" : ""}`}
              >
                <h2
                  className={`font-bold text-gray-900 ${
                    block.heading.includes("No Physical")
                      ? "text-xl sm:text-2xl"
                      : "text-lg sm:text-xl"
                  }`}
                >
                  {block.heading}
                </h2>

                {block.paragraphs?.map((p, idx) => (
                  <p key={idx}>
                    {"beforeLink" in p && p.beforeLink ? (
                      <>
                        {p.companyBold
                          ? p.beforeLink.replace(p.companyBold, "")
                          : p.beforeLink}
                        {p.companyBold ? <strong>{p.companyBold}</strong> : null} (
                        <a
                          href={p.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-red-600 underline transition-colors hover:text-red-700"
                        >
                          {p.websiteLabel}
                        </a>
                        {p.afterLink}
                      </>
                    ) : (
                      p.text
                    )}
                  </p>
                ))}

                {"contactTitle" in block && block.contactTitle ? (
                  <div className="space-y-1.5 pt-1">
                    <p className="font-bold text-gray-900">{block.contactTitle}</p>
                    <ul className="list-none space-y-1 pl-1">
                      {block.contactItems?.map((item) => (
                        <li key={item.label} className="flex items-start gap-2">
                          <span className="select-none font-bold text-gray-900">
                            •
                          </span>
                          <span>
                            <strong>{item.label}:</strong>{" "}
                            {"href" in item && item.href ? (
                              <a
                                href={item.href}
                                target={
                                  item.href.startsWith("http")
                                    ? "_blank"
                                    : undefined
                                }
                                rel={
                                  item.href.startsWith("http")
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                                className="text-gray-700 underline hover:text-red-600"
                              >
                                {item.text}
                              </a>
                            ) : null}
                            {"phones" in item && item.phones
                              ? item.phones.map((ph, i) => (
                                  <span key={ph.href}>
                                    {i > 0 ? ", " : null}
                                    <a
                                      href={ph.href}
                                      className="text-gray-700 hover:text-red-600"
                                    >
                                      {ph.text}
                                    </a>
                                  </span>
                                ))
                              : null}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SecurityCta />
    </>
  );
}

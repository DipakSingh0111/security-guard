import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Keep Vercel/production builds stable — avoid editor-only experiments */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

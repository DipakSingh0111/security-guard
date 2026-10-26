import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/section/header/Header";
import Footer from "@/components/section/footer/Footer";
import SmoothScroll from "@/components/shared/SmoothScroll";
import { site } from "@/data";

export const metadata: Metadata = {
  title: site.header.meta.siteTitle,
  description: site.header.meta.siteDescription,
  keywords: [...site.header.meta.keywords],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={` h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

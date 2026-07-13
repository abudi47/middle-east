import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: {
    default: `${company.fullName} | ${company.descriptor}`,
    template: `%s | ${company.fullName}`,
  },
  description:
    "Middle East Business is a registered multi-sector supplier for governmental, public, and institutional procurement across Ethiopia — ICT, construction, industrial, and agricultural supply.",
  keywords: [
    "Ethiopia procurement",
    "IT equipment supply Ethiopia",
    "public tender Ethiopia",
    "Middle East Business",
    "institutional supply Ethiopia",
    "Afar Region business",
  ],
  openGraph: {
    title: `${company.fullName}`,
    description: company.descriptor,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

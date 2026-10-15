import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { company } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${company.fullName} | ${company.descriptor}`,
    template: `%s | ${company.fullName}`,
  },
  description:
    "Middle East Business PLC is a registered multi-sector supplier for governmental, public, and non-governmental procurement across Ethiopia — Samsung devices and ICT hardware, industrial & construction supply, and agri-commodities.",
  keywords: [
    "Ethiopia procurement",
    "Samsung supplier Ethiopia",
    "Samsung Galaxy Tab Ethiopia",
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
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="overflow-x-hidden">
        <Providers>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}

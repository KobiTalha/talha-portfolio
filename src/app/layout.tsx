import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { profile } from "@/data/profile";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
});

const siteUrl = "https://talha-portfolio-ivory.vercel.app";
const description =
  "Portfolio of Mohtasim Evne Helal Talha — full-stack developer and final-year CSE student at AIUB, Dhaka. NestJS, Next.js, TypeScript, PostgreSQL, Unity and machine learning.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Talha Chowdhury — Full-Stack Developer",
  description,
  keywords: ["Talha Chowdhury", "KobiTalha", "full-stack developer", "NestJS", "Next.js", "AIUB", "Dhaka"],
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Talha Chowdhury — Full-Stack Developer",
    description,
    siteName: "Talha Chowdhury — Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Talha Chowdhury — Full-Stack Developer",
    description,
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: [profile.shortName, profile.alias],
  jobTitle: "Full-stack developer",
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  alumniOf: profile.university,
  url: siteUrl,
  sameAs: profile.socials.map((s) => s.href),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body id="top">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Header />
        <main className="wrap">{children}</main>
        <div className="wrap">
          <Footer />
        </div>
      </body>
    </html>
  );
}

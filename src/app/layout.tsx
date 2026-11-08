import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Talha Chowdhury — Full-Stack Developer",
  description:
    "Portfolio of Mohtasim Evne Helal Talha — full-stack developer and final-year CSE student at AIUB, Dhaka.",
  authors: [{ name: profile.name }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body id="top">
        <main className="wrap">{children}</main>
      </body>
    </html>
  );
}

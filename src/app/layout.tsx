import type { Metadata } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import { Grain } from "@/components/Grain";
import "./globals.css";

const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniel Rosario — Senior Full Stack AI Engineer",
  description:
    "Portfolio of Daniel Rosario — full-stack AI engineer building search, agents, and products end-to-end.",
  openGraph: {
    title: "Daniel Rosario — Senior Full Stack AI Engineer",
    description:
      "I design and ship AI products end-to-end — interfaces, APIs, retrieval, and the messy parts in between.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="atmosphere antialiased">
        <Grain />
        {children}
      </body>
    </html>
  );
}

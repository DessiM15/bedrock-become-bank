import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Be Your Own Bank | Bedrock Financial",
    template: "%s | Bedrock Financial",
  },
  description:
    "Take control of your money. Bedrock Financial shows you how to build a personal banking system with uninterrupted growth, tax-free access, and true financial independence.",
  keywords: [
    "be your own bank",
    "infinite banking concept",
    "IBC",
    "personal banking system",
    "financial freedom",
    "tax-free wealth",
    "whole life insurance",
    "generational wealth",
    "Bedrock Financial",
  ],
  openGraph: {
    title: "Be Your Own Bank | Bedrock Financial",
    description:
      "Take control of your money. Build a personal banking system with uninterrupted growth, tax-free access, and true financial independence.",
    type: "website",
    locale: "en_US",
    siteName: "Bedrock Financial",
  },
  twitter: {
    card: "summary_large_image",
    title: "Be Your Own Bank | Bedrock Financial",
    description:
      "Take control of your money. Build a personal banking system with uninterrupted growth, tax-free access, and true financial independence.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, DM_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["500", "700"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "DREEF — DRE Lending Toolkit",
    template: "%s — DREEF DRELT",
  },
  description:
    "A comprehensive, institutional framework for standardising and enhancing the credit assessment of DRE projects across InfraCredit's pipeline — from origination through financial close.",
  keywords: [
    "DRE", "DRELT", "DREEF", "InfraCredit", "mini-grid", "solar",
    "Nigeria", "renewable energy", "lending toolkit", "due diligence",
    "distributed renewable energy", "off-grid finance",
  ],
  authors: [{ name: "InfraCredit / DREEF" }],
  creator: "InfraCredit",
  publisher: "DREEF",
  metadataBase: new URL("https://drelt.dreef.org"),
  openGraph: {
    type: "website",
    siteName: "DREEF — DRE Lending Toolkit",
    title: "DREEF — DRE Lending Toolkit",
    description:
      "A comprehensive framework for standardising DRE credit assessment across InfraCredit's pipeline — from origination through financial close.",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "DREEF — DRE Lending Toolkit",
    description:
      "A comprehensive framework for standardising DRE credit assessment across InfraCredit's pipeline.",
  },
  themeColor: "#1A5632",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
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
      className={`${dmSans.variable} ${playfairDisplay.variable} ${dmMono.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans pt-16 lg:pt-28">{children}</body>
    </html>
  );
}

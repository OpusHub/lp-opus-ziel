import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleTag from "@/components/analytics/google-tag";
import MetaPixel from "@/components/analytics/meta-pixel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZielHub - AI Infrastructure That Turns Data Into Revenue",
  description: "We engineer production-ready AI infrastructure for companies that want to scale. Custom data pipelines, MLOps systems, and BI platforms that process billions of data points and generate measurable ROI.",
  icons: {
    icon: [
      { url: '/logo_only.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo_only.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/logo_only.png',
    apple: '/logo_only.png',
  },
  openGraph: {
    title: "ZielHub - AI Infrastructure That Turns Data Into Revenue",
    description: "We engineer production-ready AI infrastructure: data pipelines, MLOps, and BI systems that scale to billions of records.",
    images: ['/chip.webp'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ZielHub - AI Infrastructure Engineering",
    description: "Custom AI infrastructure that processes billions of data points and generates real revenue.",
    images: ['/chip.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo_only.png" type="image/png" />
        <link rel="shortcut icon" href="/logo_only.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo_only.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GoogleTag />
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/hooks/smooth-scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raju Maurya - Full Stack Developer",
  description: "Passionate full-stack developer specializing in modern web technologies. Building scalable applications with React, Next.js, Node.js, and more.",
  keywords: ["Raju Maurya", "Full Stack Developer", "React", "Next.js", "TypeScript", "Web Developer"],
  authors: [{ name: "Raju Maurya" }],
  creator: "Raju Maurya",
  openGraph: {
    title: "Raju Maurya - Full Stack Developer",
    description: "Passionate full-stack developer specializing in modern web technologies.",
    url: "https://rajumaurya.com",
    siteName: "Raju Maurya Portfolio",
    images: [
      {
        url: "/pic.png",
        width: 1200,
        height: 630,
        alt: "Raju Maurya Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raju Maurya - Full Stack Developer",
    description: "Passionate full-stack developer specializing in modern web technologies.",
    images: ["/pic.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <SmoothScrollProvider />
        {children}
      </body>
    </html>
  );
}

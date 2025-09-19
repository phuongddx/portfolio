import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from '@/components/providers/providers'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Phuong Doan - Full Stack Developer",
    template: "%s | Phuong Doan"
  },
  description: "Full Stack Developer specializing in React, Next.js, and modern web technologies. Building innovative solutions and sharing knowledge through code.",
  keywords: ["Phuong Doan", "Full Stack Developer", "React", "Next.js", "TypeScript", "Web Development", "Software Engineer"],
  authors: [{ name: "Phuong Doan" }],
  creator: "Phuong Doan",
  publisher: "Phuong Doan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://phuongddx.com",
    siteName: "Phuong Doan",
    title: "Phuong Doan - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, and modern web technologies.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Phuong Doan - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phuong Doan - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, and modern web technologies.",
    creator: "@phuongddx",
    images: ["/og-image.jpg"],
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

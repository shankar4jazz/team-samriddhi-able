import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Team Samriddhi - ABLE Program by JCI India",
  description: "Meet Team Samriddhi, 14 exceptional professionals from diverse industries united by the ABLE Program - JCI India's premier leadership development initiative. Designed and Developed by Eagleminds Technologies Private Limited.",
  keywords: "ABLE program, JCI India, Team Samriddhi, leadership development, business leaders, entrepreneurs, professional development",
  authors: [{ name: "Team Samriddhi" }, { name: "Eagleminds Technologies Private Limited", url: "https://eagleminds.net" }],
  creator: "Eagleminds Technologies Private Limited",
  publisher: "Team Samriddhi - ABLE Program",
  metadataBase: new URL('https://samriddhi.vercel.app'),
  openGraph: {
    title: "Team Samriddhi - ABLE Program by JCI India",
    description: "14 exceptional professionals from diverse industries united by JCI India's ABLE Program for leadership development.",
    url: 'https://samriddhi.vercel.app',
    siteName: 'Team Samriddhi',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Team Samriddhi - ABLE Program by JCI India',
    description: '14 exceptional professionals united by JCI India\'s ABLE leadership program.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

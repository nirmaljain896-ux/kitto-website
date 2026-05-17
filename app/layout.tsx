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
  title: "KITTO | Book Cover Rolls & Unbreakable Clip Boards",

  description:
    "KITTO manufactures premium book cover rolls, school brown sheet rolls, synthetic book covers, and unbreakable clip boards in India.",

  keywords: [
    "Book Cover Rolls",
    "Clip Board Manufacturer",
    "School Brown Sheet Roll",
    "KITTO",
    "Unbreakable Clipboard",
    "Synthetic Book Cover",
    "School Stationery Manufacturer",
  ],

  authors: [{ name: "KITTO" }],

  creator: "KITTO",

  metadataBase: new URL("https://yourdomain.com"),

  openGraph: {
    title: "KITTO | Book Cover Rolls & Unbreakable Clip Boards",
    description:
      "Premium manufacturer of book cover rolls & clip boards in India.",
    url: "https://yourdomain.com",
    siteName: "KITTO",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "KITTO",
    description:
      "Premium manufacturer of book cover rolls & clip boards in India.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black">
        {children}
      </body>
    </html>
  );
}
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
  title: {
    default: "KITTO | Book Cover Roll Manufacturer",
    template: "%s | KITTO",
  },

  description:
    "SHUB IMPEX is a premium manufacturer of waterproof book cover rolls, brown sheet rolls and unbreakable clip boards in Ahmedabad, Gujarat.",

  keywords: [
    "book cover roll manufacturer",
    "waterproof book cover",
    "clip board manufacturer",
    "school stationery supplier",
    "Ahmedabad stationery manufacturer",
    "SHUB IMPEX",
    "KITTO",
    "Shub impex paper roll",
    "Shub impex plastic roll",
    "Shub impex dot dot roll",
    "Shub impex paper roll"
  ],

  metadataBase: new URL("https://kitto.co.in"),

  openGraph: {
    title: "KITTO",
    description:
      "Premium school stationery manufacturer in India.",
    url: "https://kitto.co.in",
    siteName: "KITTO",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "KITTO",
    description:
      "Premium school stationery manufacturer in India.",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://kitto.co.in",
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
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Home Service Network TX Grand Opening | Austin, TX — Nov 13, 2026",
  description:
    "The official Grand Opening of Home Service Network TX: an evening of business networking, a featured keynote from Sean Michael Crane, Padel challenges, and giveaways for owners, leaders, and executives across HVAC, Plumbing, Electrical, Roofing, Restoration, Remodeling, Pest Control, Landscaping, and more in Austin, Texas.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy-950">
        {children}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          // previous widget ID: 6a8f59d831f4641087d12f21
          data-widget-id="6ae3774794252f6b7460f42a"
          data-source="WEB_USER"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

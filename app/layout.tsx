import type { Metadata } from "next";
import { Onest } from "next/font/google";

import { toPageTransitionVariables } from "@/animations/apply-config";
import { animationConfig } from "@/animations/config";
import Navbar from "@/components/Navbar";
import { siteName, tagline } from "@/lib/site-content";
import "./globals.css";

// Body font (open license, so it is safe to ship with the project)
const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

// Headline font. Loaded from Fontshare's free CDN instead of shipping the
// font files, because its license does not allow redistributing them.
const cabinetGroteskUrl =
  "https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700,800&display=swap";

export const metadata: Metadata = {
  title: `${siteName} - Portrait Studio`,
  description: `${tagline} A portrait studio working with light, shadow and movement.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${onest.variable} antialiased`}
      // The page transition CSS reads its values from these variables
      style={toPageTransitionVariables(animationConfig.pageTransition)}
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href={cabinetGroteskUrl} />
      </head>
      {/* The dark body shows behind the old page as it shrinks away */}
      <body className="bg-night font-sans text-ink">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

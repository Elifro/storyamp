import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const seasonMix = localFont({
  src: [
    { path: "../fonts/SeasonMixTRIAL-Regular.woff2", weight: "400" },
    { path: "../fonts/SeasonMixTRIAL-Medium.woff2", weight: "500" },
    { path: "../fonts/SeasonMixTRIAL-Bold.woff2", weight: "700" },
  ],
  variable: "--font-season-mix",
});

export const metadata: Metadata = {
  title: "StoryAmp",
  description: "Amplify your stories. Reach the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${seasonMix.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-figtree)]">{children}</body>
    </html>
  );
}

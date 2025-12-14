import type { Metadata } from "next";
import { openSans, dancingScript } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Website Builder Finder",
  description:
    "A guide to help you choose the right website builder for your business, created by Janet Spellman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/dotsBackground.png"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/fonts/OpenSans-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/OpenSans-Bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/DancingScript-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${openSans.variable} ${dancingScript.variable} antialiased`}
      >
        <nav className="bg-blue-900 border-b-2 border-white py-2 px-6">
          {" "}
          <a href="https://janetspellman.com">
            <div className="flex align-baseline">
              <span className="font-dancing text-2xl text-white">
                {" "}
                Spellman&apos;s Consulting{" "}
              </span>
              <img
                src="/images/transparent-logo-bright.png"
                alt="logo for spellman's consulting its a blue code symbol </> with a wand in place of the slash"
                className="ml-2"
                height="30"
                width="30"
              />
            </div>
          </a>
        </nav>
        {children}
      </body>
    </html>
  );
}

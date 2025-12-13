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
  title: "Website Builder Selection Guide",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="bg-blue-900 border-b-2 border-white py-2 px-6">
          {" "}
          <a href="https://janetspellman.com">
            <div className="flex align-baseline">
              <span className="font-dancing text-2xl">
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

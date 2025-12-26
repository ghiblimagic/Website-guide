import type { Metadata } from "next";
import { openSans, JosefinSans } from "./fonts";
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
          as="image"
          href="/images/transparent-logo-bright-small.webp"
          fetchPriority="high"
        />
      </head>
      <body
        className={`${openSans.variable} ${JosefinSans.variable} antialiased`}
      >
        <nav className="bg-blue-900 border-b-2 border-white py-2 px-6">
          {" "}
          <div className=" w-fit">
            <a
              href="https://janetspellman.com"
              className="flex align-baseline items-center"
            >
              {/* Bug Fix: img kept showing as the wrong aspect ratio
              
              Fix: items-cente
              
              Why: By default, flex items stretch to fill the container's cross-axis.
              Adding items-center to the flex container tells it to not stretch

   */}

              <span className="font-josefin-sans text-2xl mr-2 my-1 text-white inline-block">
                {" "}
                Spellman&apos;s Consulting{" "}
              </span>

              <img
                src="data:image/png;base64,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"
                alt="logo for spellman's consulting its a blue code symbol </> with a wand in place of the slash"
                className=""
                height="30"
                width="30"
                style={{
                  minWidth: "30px",
                  minHeight: "30px",
                  display: "inline-block",
                }}
                loading="eager"
                fetchPriority="high"
              />
            </a>
          </div>
        </nav>
        {children}
        <footer className="bg-blue-900 border-t-2 border-white  ">
          <section className="py-2 px-6 flex  text-center justify-between mx-auto gap-20 max-w-5xl">
            <div className="my-5">
              <h3 className="text-2xl"> Need A Developer? </h3>{" "}
              <p className="my-5"> Let&apos;s Work Together!</p>
              <a
                href="https://janetspellman.com/#contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border-b-2 bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 shadow-md shadow-blue-950 hover:bg-blue-900transition"
              >
                Free consultation
              </a>
            </div>
            <div className="my-5">
              <h3 className="text-2xl"> Send Thanks </h3>
              <p className="my-5">
                {" "}
                If you found this article helpful. It&apos;s much appreciated!
              </p>
              <a
                href="https://ko-fi.com/ghiblimagic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 border-b-2 text-white font-medium  hover:bg-blue-700 shadow-md shadow-blue-950 transition"
              >
                ☕ Buy Me Coffee
              </a>
            </div>
          </section>

          <small className="text-center block mx-auto pt-8 pb-3">
            {" "}
            © 2025 Janet Spellman. All rights reserved.
          </small>
        </footer>
      </body>
    </html>
  );
}

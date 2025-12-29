import type { Metadata } from "next";
import { openSans, JosefinSans } from "./fonts";
import "./globals.css";
import Link from "next/link";
import GoToTopButton from "@/app/components/GoToTopButton";

export const metadata: Metadata = {
  title: "Website Builder Finder",
  description:
    "A guide to help you choose the right website builder for your business.",
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
          href="/images/background.jpg"
          media="(min-width: 768px)"
        />
      </head>
      <body
        className={`${openSans.variable} ${JosefinSans.variable} antialiased min-h-screen flex flex-col`}
      >
        <GoToTopButton />
        <nav
          className="bg-blue-900 border-b-2 border-white py-2 px-6 flex justify-between w-full gap-4 align-baseline"
          aria-label="Main navigation"
        >
          {" "}
          {/* ****************** LOGO ****************** */}
          <div className="">
            <a
              href="https://guide.janetspellman.com"
              className="flex align-baseline items-center"
              aria-label="Takes you back to the homepage)"
            >
              {/* Bug Fix: img kept showing as the wrong aspect ratio
              
              Fix: items-cente
              
              Why: By default, flex items stretch to fill the container's cross-axis.
              Adding items-center to the flex container tells it to not stretch

   */}

              <span className="font-josefin-sans text-2xl sm:mr-2 my-1 text-white  text-wrap max-w-[10ch] sm:max-w-none hidden sm:inline-block">
                {" "}
                Website Builder Finder
              </span>
              {/* 
              <img
                src="data:image/webp;base64,UklGRvIHAABXRUJQVlA4WAoAAAAQAAAALAAALAAAQUxQSGcCAAABkHRrmyHJG3ojs8e2bdu2bdu2bdueWdm2bdtVX59ZtXPq21ZEVESdiYgJgNEaCF8nbc9b6YISqxLbANZQcwBOdZlARCIksZD+1UIAg05K0owBgESJzaHdTYHcX3wZASQ9+HROCgDJLDh7s4mDRF2BxNt/r8kKAK4F5GrQlYj2wllypDSs5i5XqljhnGVeE9H3pG1bOLBb5ydp9kkD663/aJDv9r5pnUsLG+ivI92WxArG6b1rC8vuXo3I3Zlh0yk6cFmFs6qPnWDR6bz15Z/lqfL4FZEjyySxUfPFzcrASFJPybmjXSJjiBiTBMA1IvJJliLn3QsNXVMCAAoRXey6hJb7iLYAue/5ViY1JO2/uypwwJ+oxlM6AiDvtXSwfuMjkHbHOQDIZarY+RWOzP31EADqdXzURcBw0W8cSC/LSeeC8Jzj+hgq9J35RGJZHdojGRHguO5GSnxjPpEM8p60RoLhAfY6G6jwg/lIcijn01wZxiVwQncRSpmfzCeSQ72LhivECI+je4VQ6ifz6aTQvEmdFBDDAxzbXavYT+bDSaEpvlETFTDsH3uddbYzP0sO3RxE5XWwjNnnarSJZm+U0KlKlFOnwi/mldDtksDeaJ2eRCk1ShLzTlcLHRI4MEZjBv0RqtrEvNlFiJ2jOTDeVeyiR1DW8jOvTYSQu0ezN9WVXaZLijp+5g2JYLBTPHsTJeIrHZFV+8u8zYXR1vHspQvKTLRR9oB5vQvDHehOoqCqFDlXNi9qeSIYz5AMwV2IxspEVgHr04j6ysJyC1GTMLpIVCmMPhIVC58M9KyvGz4FBybFfxEAVlA4IGQFAACwHwCdASotAC0AAAAAJbAC7OUF+AfgByijs+x/SBzVGuPZb9hP83mQHg34z/G/xx/qv//4QD9K/7f+S3uV/2b2Afqr6gP1M/vP9V9QD0APYA/UD0APYA/gH8g9gD+P/0f1Ov63/rf7F8Bf6u/5L+7/AH/Gv5598nGAfwDtAP5L9AHiB/Ovwt/Vzsb+6nqx+3uWx+r/lVorf69+SvAFSAeDb+vfl5qjP9s/MbZF/5L/ufRk/wPJl8of7z+0/AF/EP5N/fPzN/uH//8IH6Aewp+mJ2a3E0+uQmaD+ch3EK4WdbGXEz+lAASA41C0NBg2dylGEd6nFcMD97Wie+O1H0h7n8l0b5AAAP7/FEob/fz9NwVmC08k/hCRZSK6lW89DYIrHui86fJn6wE4cgrtcvyeWBZ2TaJEzDoe+huvmBhQrKJm8Z1glPzAlAX3S6/xIqWHBYE3140+I7QvjNXc1sNITNs4tGpYP1knpc3f0qs3RQEGftsK3iDq1cwomk5q2XLDFirlSCbZfZ0dzfi/z2FL25WKcv7//9mKlqhv5un/dd40cClHzlIlX8+Yutcp51n/v18xHvIsbVksoR/E1mnM54tdx7d6xL/ZiQwj5su7wu1OjqU6g6sI2xY79IiDDgDgl//KtL1SDo1qNRRM6Yx19fKt+AExtaIZMkZfROECxqIvoJBW6vSFJ6l76TpJl+2Q+uA1T1FPLyLeDnC9oJ3i7aF//+bOIgx7hHtcBvhWCbyC76f/OalHW1j8NvBIl4Q7JR+QfsrzIY4b6xvrufqg8qVkTzuCwqhDERa+rfjV3J5ucB3CplhIivQSKLa6bMDbyCUAPfwgpYGeDaYRt5t1PzobH4cl5sn57kJhy/y7jfqHeu7/ezD/prB01Dy2+W8NqezwWVkz+7D71WGgT0XuFMAEsAg65joeM/h17KQG07aWb1bpuX7yJespYlJMa1rnMZ6Mnr2vmUk1SzGZw4K/nu+g1Do2SMuCvOGqZ7Bg5TxK96XPGLaPRsF8XvCw2NcPX9JLw73a2V18b4SU4kxwQXhrw/J3A03vgq7ijlVfUMLpzof3WbYlTXriaBFdv+yiI6uiNtk5s8L1Z6Jni5/3g9tXl+0w4dJCbttLLsedec7///41gVtnXFZKfeDa/d9qAPgGzUaBUBBVcg7wKf42cnkP61CIjDQU/9eL911QElhv+yOCe7NXhouBQBtqOvlnBJp9wJQ2t4NPhqnFmSG+P5ygVdx44BfWRsAkw//06/KqH3eY+5EhVOUIEkWdyiL4YUdmAkhGilhunaNIbQ4XAiVKnsxiVQ+dF34x3jyC6A0NU7ibnzHIhCoRBYMkybK05TPkN4iKLkLKKuDiY4O5Qd9lqVhEAeuER+IVKxYTs12/72AlPCQCmZbu5ab38nx3li7SulIZOVqTm3tpLLMXQ3/8RmXJhKazNrX/25+M4zSVw61tKmz1AGStG4f5MOlZ9LcG76BJu7bbT/8MhKuSdlC/dmCMAd0fcmPYCfBbroxynQcFx3Z/9Vf/P8mQ/LiInPIgMo3vRJFlx+BODS6mtYWEh0pF+pqRAGLNYAJp6ZwySslx6EWpNII4jlVk9qF47tVe6X/91P59aPnNncnN/XoRXhDjR2oNhd5S13DCUipKaohv6UTedJ+2q4lVHa7v4FpySDrRlKBFdLglWlXCh9jYDhb8+p7100y05FymCZk8qtmgM8bQAwDUb/Dyfxh4GuOA21zP0suIFGK1mvEZXpK6QeJK+NOOYBNt2ylPw94fJ2sOv1SPwEphLyjqFCeUfoAn///vRlE3zxbS2IV/eYH/CUFYuQPXTlPv6URQPTX4QAA="
                alt="logo for spellman's consulting its a blue code symbol </> with a wand in place of the slash"
                className=""
                height="30"
                width="30"
                style={{
                  minWidth: "30px",
                  minHeight: "30px",
                  display: "inline-block",
                }}
              /> */}
            </a>
          </div>
          {/* ****************** PAGES ****************** */}
          <a
            href="#main"
            className="fixed left-1/2 -translate-x-1/2 -translate-y-full focus:translate-y-4 top-0 p-3 bg-mainColor text-white z-50 focus:outline-none focus:ring-2 focus:ring-white transition-transform bg-blue-900"
          >
            Skip to content
          </a>
          <section className="my-auto text-lg text-white">
            <Link
              href="/"
              className="pr-3 sm:px-6"
            >
              Home
            </Link>

            <Link
              href="/guide"
              className="px-3 sm:px-6"
            >
              {" "}
              Guide
            </Link>

            <Link
              href="/faq"
              className="px-3 sm:px-6"
            >
              {" "}
              FAQ
            </Link>
          </section>
        </nav>
        <main
          className="flex-1"
          id="main"
        >
          {children}
        </main>
        <footer className="bg-blue-900 border-t-2 border-white  ">
          <section className="py-2 px-6 flex flex-col sm:flex-row text-center justify-between mx-auto gap-4 sm:gap-20 max-w-5xl text-white">
            <div className="my-5">
              <h2 className="text-2xl"> Send Thanks </h2>
              <p className="my-5 max-w-[400px]">
                {" "}
                If you found this helpful, you can send me a tea. It’s a
                tea-riffic way to show thanks! 😉
              </p>
              <a
                href="https://ko-fi.com/ghiblimagic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kofi donation page (opens in new window)"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 border-b-2 text-white font-medium  hover:bg-blue-700 shadow-md shadow-blue-950 transition"
              >
                <img
                  src="/images/kofi_symbol.webp"
                  className="w-8"
                  width="32"
                  height="26"
                  alt="Ko-fi logo"
                />{" "}
                Buy Me Tea
              </a>
            </div>

            <div className="my-5 mx-auto">
              <div className="mx-auto flex justify-center">
                <a
                  href="https://janetspellman.com"
                  className="flex align-baseline items-center"
                  aria-label="Spellman's Consulting homepage (opens in new window)"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className="font-josefin-sans text-2xl sm:mr-2 my-1 text-white  text-wrap max-w-[10ch] sm:max-w-none hidden sm:inline-block">
                    {" "}
                    Spellman&apos;s Consulting{" "}
                  </h2>
                  <img
                    src="data:image/webp;base64,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"
                    alt="logo for spellman's consulting its a blue code symbol </> with a wand in place of the slash"
                    className=""
                    height="30"
                    width="30"
                    style={{
                      minWidth: "30px",
                      minHeight: "30px",
                      display: "inline-block",
                    }}
                  />
                </a>
              </div>
              <p className="my-5">
                {" "}
                Would you rather team up with a developer?
              </p>{" "}
              <a
                href="https://janetspellman.com/#contact"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Spellman's Consulting contact page (opens in new window)"
                className="inline-flex items-center gap-2 rounded-lg border-b-2 bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 shadow-md shadow-blue-950 hover:bg-blue-900transition"
              >
                Let&apos;s work together!
              </a>
            </div>
          </section>

          <div>
            {" "}
            <div className="mx-auto text-center"></div>
          </div>

          <small className="text-center block mx-auto pt-8 pb-3 text-white">
            {" "}
            © 2025 Janet Spellman. All rights reserved.
          </small>
        </footer>
      </body>
    </html>
  );
}

import { Open_Sans, Dancing_Script } from "next/font/google";

export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-open-sans",
});

export const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-dancing-script",
});

import { Open_Sans, Josefin_Sans } from "next/font/google";

export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-open-sans",
});

export const JosefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-josefin-sans",
});

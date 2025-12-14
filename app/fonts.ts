import localFont from "next/font/local";

export const openSans = localFont({
  src: [
    {
      path: "./fonts/OpenSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/OpenSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap", // prevents invisible text
  variable: "--font-open-sans",
});

export const dancingScript = localFont({
  src: "./fonts/DancingScript-Regular.ttf",
  display: "swap",
  variable: "--font-dancing-script",
});

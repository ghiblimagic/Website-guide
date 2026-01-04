import { AnchorHTMLAttributes } from "react";

interface ButtonALinkProps {
  href: string;
  label: string;
  download?: boolean;
  color?: string;
  styling?: string;
}

export default function ButtonALink({
  href,
  label,
  download = false,
  color = "",
  styling = "",
}: ButtonALinkProps) {
  let downloadName: string | undefined;

  if (download) {
    try {
      const url = new URL(
        href,
        typeof window !== "undefined"
          ? window.location.origin
          : "http://localhost",
      );
      const pathname = url.pathname;
      const filename = pathname.split("/").pop() || "download";
      downloadName = filename;
    } catch {
      downloadName = href.split("/").pop()?.split("?")[0] || "download";
    }
  }

  const anchorProps: AnchorHTMLAttributes<HTMLAnchorElement> = {
    href,
    className: `inline-block px-4 py-2 m-1 rounded-2xl     border-2 text-blue-900 font-semibold border-blue-300 hover:bg-blue-200 ${color} ${styling}`,
  };

  if (downloadName) {
    anchorProps.download = downloadName;
  }

  return <a {...anchorProps}>{label}</a>;
}

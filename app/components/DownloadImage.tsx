import ButtonALink from "@/app/components/ButtonALink";

interface ImageDownloadProps {
  srcSet: string;
  downloadSrc: string;
  alt: string;
  label: string;
  styling?: string;
}

export default function ImageDownload({
  srcSet,
  downloadSrc,
  alt,
  label,
  styling,
}: ImageDownloadProps) {
  return (
    <div className="my-6 p-4">
      <img
        srcSet={srcSet}
        alt={alt}
        sizes="(max-width: 800px) 672px, 248px"
        className="w-full h-auto rounded mb-3 mx-auto max-w-2xl"
        // h-auto  Maintains the image's aspect ratio as it scales
        loading="lazy"
        width="672"
        height="2108"
      />

      <div className="text-center pt-6">
        <ButtonALink
          href={downloadSrc}
          label={label}
          styling={styling}
          download={true}
        />
      </div>
    </div>
  );
}

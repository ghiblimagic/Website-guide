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
        sizes="(max-width: 640px) 200px, 320px"
        className="w-full h-auto rounded mb-3 mx-auto max-w-4xl"
        // h-auto  Maintains the image's aspect ratio as it scales
        loading="lazy"
        width="1156"
        height="3626"
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

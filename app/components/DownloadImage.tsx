import ButtonALink from "@/app/components/ButtonALink";

interface ImageDownloadProps {
  src: string;
  alt: string;
  label: string;
  styling?: string;
}

export default function ImageDownload({
  src,
  alt,
  label,
  styling,
}: ImageDownloadProps) {
  return (
    <div className="my-6 p-4">
      <img
        src={src}
        alt={alt}
        className="rounded mb-3 mx-auto max-w-4xl"
        loading="lazy"
      />

      <div className="text-center pt-6">
        <ButtonALink
          href={src}
          label={label}
          styling={styling}
          download={true}
        />
      </div>
    </div>
  );
}

export default function ConvertStringLinkToA({ item }: { item: string }) {
  return item.split(/(https?:\/\/\S+)/g).map((part, i) => {
    if (part.startsWith("http")) {
      // Check if it's a YouTube URL
      const youtubeMatch = part.match(
        /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/,
      );

      if (youtubeMatch) {
        const videoId = youtubeMatch[1];
        return (
          <div
            key={i}
            className="my-2 aspect-video w-full"
          >
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
        );
      }

      // Otherwise, normal URL
      return (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline break-all"
        >
          {part}
        </a>
      );
    }

    // Plain text
    return part;
  });
}

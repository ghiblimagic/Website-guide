import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://guide.janetspellman.com/",
      lastModified: new Date(),
    },
    {
      url: "https://guide.janetspellman.com/guide",
      lastModified: new Date(),
    },
    {
      url: "https://guide.janetspellman.com/faq",
      lastModified: new Date(),
    },
    {
      url: "https://guide.janetspellman.com/success",
      lastModified: new Date(),
    },
  ];
}

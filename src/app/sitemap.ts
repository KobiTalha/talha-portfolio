import type { MetadataRoute } from "next";

const baseUrl = "https://talha-portfolio-ivory.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const sections = ["", "#about", "#work", "#skills", "#recognition", "#contact"];
  return sections.map((section) => ({
    url: `${baseUrl}/${section}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: section === "" ? 1 : 0.7,
  }));
}

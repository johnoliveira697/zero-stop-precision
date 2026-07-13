import type { MetadataRoute } from "next";
import { getSortedArticlesData } from "@/lib/markdown";
import { CATEGORIES } from "@/lib/categories";

const BASE_URL = "https://www.0stopprecision.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getSortedArticlesData();

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/artigos/${article.slug}`,
    lastModified: article.date ? new Date(article.date) : undefined,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const categoryEntries: MetadataRoute.Sitemap = CATEGORIES.map((category) => ({
    url: `${BASE_URL}/artigos/categoria/${category.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/artigos`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/livros`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/sobre`,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/contato`,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/aviso-legal`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/politica-de-privacidade`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  return [...staticEntries, ...categoryEntries, ...articleEntries];
}

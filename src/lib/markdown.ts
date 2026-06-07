import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";

const articlesDirectory = path.join(process.cwd(), "content", "artigos");

export interface ArticleData {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  coverImage: string;
  contentHtml?: string;
}

export function getSortedArticlesData(): ArticleData[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    // Ensure date is always a string, even if parsed as a Date object
    if (matterResult.data.date instanceof Date) {
      matterResult.data.date = matterResult.data.date.toISOString().split('T')[0];
    }

    return {
      slug,
      ...(matterResult.data as Omit<ArticleData, "slug">),
    };
  });

  return allArticlesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllArticleSlugs() {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getArticleData(slug: string): Promise<ArticleData> {
  const decodedSlug = decodeURIComponent(slug);
  const fullPath = path.join(articlesDirectory, `${decodedSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  // Ensure date is always a string, even if parsed as a Date object
  if (matterResult.data.date instanceof Date) {
    matterResult.data.date = matterResult.data.date.toISOString().split('T')[0];
  }

  const processedContent = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...(matterResult.data as Omit<ArticleData, "slug" | "contentHtml">),
  };
}

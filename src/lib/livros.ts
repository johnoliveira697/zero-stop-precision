import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const livrosDirectory = path.join(process.cwd(), 'content/livros');

export type LivroData = {
  id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  image: string;
  link: string;
};

export function getLivrosData(): LivroData[] {
  if (!fs.existsSync(livrosDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(livrosDirectory);
  const allLivrosData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(livrosDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const matterResult = matter(fileContents);

      return {
        id,
        ...(matterResult.data as Omit<LivroData, 'id'>),
      };
    });

  return allLivrosData;
}

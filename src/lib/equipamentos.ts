import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const equipamentosDirectory = path.join(process.cwd(), 'content/equipamentos');

export type EquipamentoData = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  icon: string;
  link: string;
};

export function getEquipamentosData(): EquipamentoData[] {
  if (!fs.existsSync(equipamentosDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(equipamentosDirectory);
  const allEquipamentosData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(equipamentosDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const matterResult = matter(fileContents);

      return {
        id,
        ...(matterResult.data as Omit<EquipamentoData, 'id'>),
      };
    });

  return allEquipamentosData;
}

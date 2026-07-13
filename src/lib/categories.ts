import {
  Crosshair, TrendingUp, Binoculars, ShieldHalf,
  Dumbbell, Helicopter, Flame, Wrench, type LucideIcon,
} from "lucide-react";

export type CategoryDef = {
  slug: string;
  name: string;
  icon: LucideIcon;
  /** Parágrafo introdutório com a keyword principal, usado na página da categoria e como meta description. */
  description: string;
};

/**
 * As 8 categorias oficiais do "Códice Tático". Esta é a fonte única de verdade:
 * a home, a listagem de artigos, as páginas de categoria e o sitemap devem todos
 * ler daqui, para nunca mais divergir do que está no frontmatter dos artigos.
 */
export const CATEGORIES: CategoryDef[] = [
  {
    slug: "long-range",
    name: "Long Range",
    icon: Crosshair,
    description:
      "Long Range é a arte de acertar alvos muito além dos 500 metros, onde vento, gravidade, rotação da Terra e a menor variação no disparo decidem entre o acerto e o erro. Aqui você encontra os conceitos, equipamentos e recordes que definem o tiro de longa distância — de tabelas DOPE a fuzis capazes de operar além de 1.500 metros.",
  },
  {
    slug: "balistica",
    name: "Balística",
    icon: TrendingUp,
    description:
      "A balística é a ciência que explica tudo que acontece entre o gatilho e o alvo, e depois dele. Nesta categoria você entende as três fases do disparo (interna, externa e terminal) e aprende a interpretar coeficiente balístico, efeito Coriolis e spin drift — os fatores que determinam a trajetória real do projétil.",
  },
  {
    slug: "equipamentos",
    name: "Equipamentos",
    icon: Binoculars,
    description:
      "Da primeira carabina .22 LR ao fuzil de longo alcance premium, a categoria Equipamentos reúne comparativos técnicos e análises de rifles, lunetas e acessórios usados no tiro de precisão, com dados reais de precisão, custo e desempenho em campo.",
  },
  {
    slug: "tecnicas",
    name: "Técnicas",
    icon: ShieldHalf,
    description:
      "Técnicas de tiro de precisão são a diferença entre um atirador que atira e um atirador que acerta. Esta categoria cobre os fundamentos práticos: cálculo de MOA e milirradianos, zeragem de luneta, postura, respiração e acionamento de gatilho.",
  },
  {
    slug: "treinamentos",
    name: "Treinamentos",
    icon: Dumbbell,
    description:
      "A categoria Treinamentos mostra como se forma um atirador de elite: dos critérios de seleção às etapas de um curso de sniper militar, passando pelo preparo físico e psicológico exigido nas Forças Armadas.",
  },
  {
    slug: "operacoes",
    name: "Operações",
    icon: Helicopter,
    description:
      "Operações reúne o contexto tático e histórico por trás do tiro de precisão aplicado: doutrina militar e o papel do atirador de elite em cenários de combate e reconhecimento. Em breve, novos artigos sobre operações históricas e a atuação de snipers em conflitos recentes.",
  },
  {
    slug: "sobrevivencia",
    name: "Sobrevivência",
    icon: Flame,
    description:
      "Sobrevivência reúne o conhecimento de campo que sustenta qualquer atirador em condições adversas: camuflagem, deslocamento silencioso, leitura de terreno e permanência prolongada em posição. Em breve, guias completos de técnicas de campo.",
  },
  {
    slug: "edc-tatico",
    name: "EDC Tático",
    icon: Wrench,
    description:
      "EDC Tático (Every Day Carry) cobre o equipamento de uso diário que um atirador ou operador tático carrega além do rifle, do kit de primeiros socorros à ferramenta certa para manutenção de campo. Em breve, reviews e recomendações práticas.",
  },
];

export function getCategoryBySlug(slug: string): CategoryDef | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

/** Acha a categoria oficial correspondente ao valor livre gravado no frontmatter de um artigo. */
export function getCategoryByName(name: string): CategoryDef | undefined {
  return CATEGORIES.find((c) => c.name.toLowerCase() === name?.toLowerCase().trim());
}

export function getCategorySlugByName(name: string): string | undefined {
  return getCategoryByName(name)?.slug;
}

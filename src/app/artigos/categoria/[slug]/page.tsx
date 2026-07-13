import { getSortedArticlesData } from "@/lib/markdown";
import { CATEGORIES, getCategoryBySlug } from "@/lib/categories";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const category = getCategoryBySlug(resolvedParams.slug);

  if (!category) {
    return {};
  }

  const title = `${category.name} | Zero Stop Precision`;

  return {
    title,
    description: category.description,
    alternates: {
      canonical: `/artigos/categoria/${category.slug}`,
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const category = getCategoryBySlug(resolvedParams.slug);

  if (!category) {
    notFound();
  }

  const articles = getSortedArticlesData().filter(
    (article) => article.category?.toLowerCase().trim() === category.name.toLowerCase()
  );

  const Icon = category.icon;

  return (
    <>
      <Navbar />
      <main className="bg-matte pt-32 pb-24 min-h-screen">
        <Container>
          <Link
            href="/artigos"
            className="inline-flex items-center gap-2 text-steel hover:text-pure-white transition-colors mb-8 font-subheading tracking-widest uppercase text-sm"
          >
            <ArrowLeft size={16} /> Voltar para Artigos
          </Link>

          <div className="text-center mb-16">
            <Icon size={48} className="text-dark-red mx-auto mb-6" />
            <h1 className="font-heading text-4xl md:text-5xl text-pure-white">
              {category.name.toUpperCase()}
            </h1>
            <div className="w-[60px] h-[3px] bg-dark-red mx-auto mt-4 shadow-[0_0_10px_rgba(122,21,21,0.4)]" />
            <p className="text-light-steel mt-6 max-w-[700px] mx-auto text-lg leading-relaxed">
              {category.description}
            </p>
          </div>

          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {articles.map((article) => (
                <article key={article.slug} className="bg-graphite border border-[#2a2a2a] rounded overflow-hidden transition-all hover:border-steel hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:-translate-y-2 group flex flex-col h-full">
                  <div className="h-[240px] relative shrink-0 overflow-hidden bg-graphite flex justify-center items-center">
                    <Image
                      src={article.coverImage || "/assets/hero.png"}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-graphite to-transparent" />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="font-heading text-3xl text-pure-white mb-4 transition-colors group-hover:text-dark-red">
                      {article.title}
                    </h3>
                    <p className="text-light-steel mb-8 line-clamp-3 flex-grow">
                      {article.excerpt}
                    </p>
                    <Link href={`/artigos/${article.slug}`} className="font-subheading font-medium uppercase tracking-widest text-pure-white flex items-center gap-2 group/btn mt-auto">
                      Ler Artigo <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-2 group-hover/btn:text-dark-red" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 border border-dashed border-graphite rounded">
              <p className="text-light-steel text-lg">
                Ainda não publicamos artigos nesta categoria — mas ela já faz parte do nosso Códice Tático e novo conteúdo está a caminho.
              </p>
              <Link
                href="/artigos"
                className="inline-flex items-center gap-2 mt-6 font-subheading font-medium uppercase tracking-widest text-pure-white hover:text-dark-red transition-colors"
              >
                Ver todos os artigos <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}

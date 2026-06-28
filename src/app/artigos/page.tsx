import { getSortedArticlesData } from "@/lib/markdown";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artigos | Zero Stop Precision",
  description: "Acervo completo de artigos sobre tiro de precisão, balística, óticas e equipamentos táticos.",
  alternates: {
    canonical: "/artigos",
  },
};

export default function ArticlesPage() {
  const articles = getSortedArticlesData();

  return (
    <>
      <Navbar />
      <main className="bg-matte pt-32 pb-24 min-h-screen">
        <Container>
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl text-pure-white">
              BASE DE <span className="text-steel">DADOS</span>
            </h1>
            <div className="w-[60px] h-[3px] bg-dark-red mx-auto mt-4 shadow-[0_0_10px_rgba(122,21,21,0.4)]" />
            <p className="text-light-steel mt-6 max-w-[600px] mx-auto text-lg">
              Acesse nosso acervo completo de artigos sobre balística, equipamentos e táticas de precisão.
            </p>
          </div>

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
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm border border-steel px-4 py-1 font-tech text-xs tracking-widest text-cool-white uppercase">
                    {article.category}
                  </div>
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
        </Container>
      </main>
      <Footer />
    </>
  );
}
